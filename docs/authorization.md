# Authorization & RBAC Architecture

## Role-Based Access Control (RBAC)

The system enforces strict RBAC with 5 primary actors:

1. **Citizen**: Can create grievances, view ONLY their own grievances, add evidence, and verify/reject resolutions.
2. **Operator**: Can view all incoming grievances, validate them, categorize them, and route them to departments.
3. **Department Officer**: Can view grievances assigned to them, update status to "In Progress", and submit resolution evidence.
4. **Supervisor**: Can view all grievances within their department, reassign officers, override statuses, and handle SLA escalations.
5. **Administrator**: Full system access, manages taxonomies (categories/departments), user roles, and views global audit logs.

## Principles
- **Server is Authoritative**: Never trust client-provided role information. Roles are derived strictly from the server-validated session/database.
- **Resource Ownership**: Never trust client-provided grievance ownership. API endpoints must explicitly verify that `grievance.citizenId === session.userId` before granting citizen access.
- **Least Privilege**: Users only see data necessary for their role. Private citizen information is masked for Operators and Officers unless strictly required for resolution.
