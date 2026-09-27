# Phase 2 Plan: Grievance Submission

## Goal
Develop the citizen portal that enables users to submit, categorize, and track grievances, complete with mock backend API endpoints for saving submissions.

## Tasks

### 1. Citizen Dashboard
- **Action**: Create `src/app/dashboard/page.tsx`.
- **Details**: Build a personalized dashboard where logged-in citizens can view their previously submitted issues. Include a prominent "Report New Issue" floating action button (FAB) or header link. 
- **Verification**: The dashboard renders correctly and provides a clear path to submit a new issue.

### 2. Grievance Submission Form
- **Action**: Create `src/app/report/page.tsx`.
- **Details**: Build a multi-step or comprehensive form for citizens to submit a new grievance.
  - Fields needed: Category (dropdown), Description (textarea), Location (text/map placeholder), and Image Upload (mock file input).
  - Apply glassmorphism styling and focus animations for an engaging UX.
- **Verification**: The form handles state changes and validates required fields before submission.

### 3. Submission API Route (Mock)
- **Action**: Create `src/app/api/grievances/route.ts`.
- **Details**: Set up a mock Next.js API route to receive the form data via a `POST` request. Return a success response and a mocked issue ID to simulate database insertion.
- **Verification**: Sending a POST request to `/api/grievances` returns a 201 Created status and a mock JSON response.

### 4. Client-side Integration
- **Action**: Connect the Submission Form to the API Route.
- **Details**: Implement the `fetch` call in the submission form to post data to the API. Display a loading spinner during the request and a success toast/modal upon completion.
- **Verification**: Submitting the form successfully triggers the API and displays the success UI without a page reload.
