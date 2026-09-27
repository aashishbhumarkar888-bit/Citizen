// Phase 10: SLA & Escalation Engine
import { prisma } from "./prisma";
import { NotificationService } from "./notifications";

export class SLAService {
  /**
   * Checks for breached SLAs and automatically escalates them.
   * This would typically be run via a Cron job.
   */
  static async checkAndEscalateBreaches() {
    console.log("Checking for SLA breaches...");
    
    // In a real scenario, we would calculate (createdAt + SLA duration) < NOW()
    // and escalate to the Supervisor of the respective department.
    
    const overdueGrievances = await prisma.grievance.findMany({
      where: {
        status: { in: ["SUBMITTED", "ACKNOWLEDGED", "ASSIGNED", "IN_PROGRESS"] },
        // mock logic for time checks
      }
    });

    for (const grievance of overdueGrievances) {
      // 1. Update status
      await prisma.grievance.update({
        where: { id: grievance.id },
        data: { 
          status: "ESCALATED",
          history: {
            create: { status: "ESCALATED", notes: "System: SLA timeframe breached." }
          },
          escalations: {
            create: { reason: "SLA Deadline Missed" }
          }
        }
      });

      // 2. Notify supervisor
      await NotificationService.notify({
        userId: "SUPERVISOR_ID", // mock
        type: "SLA_BREACH",
        grievanceId: grievance.id,
        message: `Grievance ${grievance.id} has breached its SLA and been escalated.`
      });
    }
  }
}
