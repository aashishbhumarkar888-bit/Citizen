# Phase 3 Plan: Authority Dashboard & Tracking

## Goal
Build the administrative interface for local authorities to view, manage, and update the status of community-reported grievances.

## Tasks

### 1. Authority Dashboard View
- **Action**: Create `src/app/authority/dashboard/page.tsx`.
- **Details**: Build a comprehensive, data-rich dashboard specifically for authorities.
  - Display key metrics (e.g., total open issues, resolved issues).
  - Implement a list/table of all submitted grievances, displaying mock data.
  - Apply the distinct authority styling (e.g., accent color borders).
- **Verification**: The dashboard renders a professional table of issues and high-level stats.

### 2. Issue Details & Status Update Workflow
- **Action**: Create a detail view or modal for managing a specific grievance.
- **Details**: Expand the dashboard to allow an authority user to click on an issue and view its full details. Add a dropdown to change the issue's status (e.g., Open, In Progress, Resolved).
- **Verification**: The UI allows an authority user to select a new status for a specific issue.

### 3. Update API Route (Mock)
- **Action**: Add a PUT method to `src/app/api/grievances/route.ts` or create `[id]/route.ts`.
- **Details**: Implement a mock backend endpoint to handle status update requests from the authority dashboard.
- **Verification**: Sending a PUT request updates the mock status and returns a success response.

### 4. Client-side Integration
- **Action**: Connect the dashboard status update UI to the new API endpoint.
- **Details**: Ensure that when an authority updates an issue's status, a request is sent, a loading state is shown, and the UI Optimistically updates or refreshes to reflect the new state.
- **Verification**: Updating an issue in the dashboard triggers the API and updates the view without a full page reload.
