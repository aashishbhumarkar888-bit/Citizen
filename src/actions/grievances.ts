"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Phase 6: Grievance Engine - Server Actions

export async function createGrievance(data: {
  title: string;
  description: string;
  location: string;
  categoryName: string;
  citizenEmail: string;
}) {
  const citizen = await prisma.user.findUnique({ where: { email: data.citizenEmail } });
  if (!citizen) throw new Error("Citizen not found");

  const category = await prisma.grievanceCategory.findFirst({
    where: { name: { contains: data.categoryName } }
  }) || await prisma.grievanceCategory.findFirst(); // fallback

  const grievance = await prisma.grievance.create({
    data: {
      title: data.title,
      description: data.description,
      location: data.location,
      status: "SUBMITTED",
      citizen: { connect: { id: citizen.id } },
      category: { connect: { id: category!.id } },
      history: {
        create: { status: "SUBMITTED", notes: "Grievance submitted by citizen." }
      }
    }
  });

  revalidatePath("/dashboard");
  return grievance;
}

export async function getCitizenGrievances(email: string) {
  return await prisma.grievance.findMany({
    where: { citizen: { email } },
    include: { category: true },
    orderBy: { createdAt: "desc" }
  });
}

export async function getAllGrievances() {
  return await prisma.grievance.findMany({
    include: { category: true, citizen: true },
    orderBy: { createdAt: "desc" }
  });
}

export async function updateGrievanceStatus(id: string, status: "SUBMITTED" | "ACKNOWLEDGED" | "ASSIGNED" | "IN_PROGRESS" | "RESOLUTION_SUBMITTED" | "CITIZEN_VERIFICATION" | "CLOSED" | "REJECTED" | "REOPENED" | "ESCALATED") {
  const updated = await prisma.grievance.update({
    where: { id },
    data: { 
      status,
      history: {
        create: { status, notes: `Status updated to ${status}` }
      }
    }
  });
  
  revalidatePath("/authority/dashboard");
  return updated;
}
