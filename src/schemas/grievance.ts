import { z } from "zod";

export const GrievanceSubmissionSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  description: z.string().min(20, "Description must be detailed").max(1000),
  location: z.string().min(5, "Location is required"),
  categoryName: z.string().min(1, "Category is required"),
  citizenEmail: z.string().email("Valid email required"),
});

export const GrievanceStatusUpdateSchema = z.object({
  id: z.string().uuid("Invalid Grievance ID"),
  status: z.enum([
    "SUBMITTED",
    "ACKNOWLEDGED",
    "ASSIGNED",
    "IN_PROGRESS",
    "RESOLUTION_SUBMITTED",
    "CITIZEN_VERIFICATION",
    "CLOSED",
    "REJECTED",
    "REOPENED",
    "ESCALATED"
  ]),
});
