# Grievance Lifecycle & State Machine

## Core Workflow
The grievance follows a strict state machine. Arbitrary status transitions are prohibited.

1. **SUBMITTED**: Citizen submits a grievance.
2. **VALIDATED**: Operator reviews and categorizes the grievance.
3. **ASSIGNED**: Operator routes it to a Department; Supervisor assigns to an Officer.
4. **IN_PROGRESS**: Officer begins work on the grievance.
5. **RESOLUTION_SUBMITTED**: Officer submits evidence of resolution.
6. **CLOSED (Resolved)**: Citizen accepts the resolution, or auto-closes after 7 days.
7. **REOPENED**: Citizen rejects the resolution with a reason; routes back to the Supervisor.

## State Machine Constraints
- Only a Citizen can transition `RESOLUTION_SUBMITTED` to `REOPENED`.
- Only an Officer/Supervisor can transition `ASSIGNED` to `IN_PROGRESS`.
- Every state transition must generate an immutable `AuditLog` entry.
