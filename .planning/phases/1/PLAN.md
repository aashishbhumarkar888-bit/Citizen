# Phase 1 Plan: Setup & Authentication

## Goal
Initialize the modern web application repository with Tailwind CSS v3 (using rich aesthetics, customized colors, and animations), and implement basic user authentication for both Citizens and Authorities.

## Tasks

### 1. Initialize Web Application
- **Action**: Scaffold a new Next.js application in the root directory.
- **Details**: Run `npx -y create-next-app@latest ./ --typescript --eslint --app --tailwind --src-dir --use-npm` to create a modern React framework foundation with Tailwind enabled.
- **Verification**: The project structure should be created and `npm run dev` should successfully start a local server.

### 2. Establish Core Design System (Tailwind CSS)
- **Action**: Update `tailwind.config.ts` and `src/app/globals.css`.
- **Details**: Implement a premium, dynamic design system with customized color palettes, glassmorphism utilities, smooth gradients, and custom animations in Tailwind config. 
- **Verification**: The base app should render with the new premium Tailwind utility classes available.

### 3. Build Application Shell & Navigation
- **Action**: Create the main Layout components.
- **Details**: Build a responsive Navbar (with logo and auth links) and a main content area. Include a dynamic hover effect on navigation items to make the interface feel alive.
- **Verification**: The application shell is visible on all routes and adapts to mobile/desktop views.

### 4. Implement Citizen Authentication UI
- **Action**: Create Login and Registration pages for Citizens.
- **Details**: Build beautiful, glassmorphism-styled forms for Citizen sign-up and login. Add client-side validation and interactive input fields with focus animations.
- **Verification**: A citizen can navigate to `/login` and `/register`, see premium forms, and submit them (mocking the backend response for now).

### 5. Implement Authority Authentication UI
- **Action**: Create a distinct Login page for Local Authorities.
- **Details**: Build an authority login page (`/authority/login`) that shares the premium design language but features distinct styling (e.g., a more formal color accent) to differentiate it from the public portal.
- **Verification**: Authorities can access their specific login route and see the distinct form.

### 6. State Management for Authentication (Mock)
- **Action**: Setup a simple Auth Context.
- **Details**: Implement a React Context provider to manage the mocked logged-in state of either a 'Citizen' or 'Authority' user, allowing the app to render personalized views in future phases.
- **Verification**: Logging in through the UI updates the global state and redirects the user appropriately.
