import { getServerSession, type NextAuthOptions, type DefaultSession, type Session, type User } from "next-auth";
import { type JWT } from "next-auth/jwt";
import { RoleType } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: RoleType;
    } & DefaultSession["user"]
  }
  
  interface User {
    id: string;
    role: RoleType;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Providers would be configured here (e.g., Credentials, Google, Azure AD)
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session?.user && token.id && token.role) {
        session.user = {
          ...session.user,
          id: token.id as string,
          role: token.role as RoleType,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    }
  },
  session: { strategy: "jwt" }
};

export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function requireRole(allowedRoles: RoleType[]) {
  const session = await requireAuth();
  if (!allowedRoles.includes(session.user.role)) {
    throw new Error("Forbidden: Insufficient permissions");
  }
  return session;
}

export function canAccessGrievance(userRole: RoleType, grievanceCitizenId: string, userId: string) {
  if (userRole === "CITIZEN" && grievanceCitizenId !== userId) return false;
  return true;
}
