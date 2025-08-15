# Apartment Instructions

This is a Next.js application for managing apartment stays and tenants.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized as follows:

- `src/app`: Contains the frontend pages of the application.
- `src/api`: Contains the backend of the application, including use cases, domain entities, repositories, and controllers.
- `src/components`: Contains reusable UI components.
- `src/hooks`: Contains custom React hooks.
- `src/lib`: Contains utility functions, constants, and environment variable handling.
- `src/modules`: Contains the different modules of the application, such as admin and stay.
- `public`: Contains static assets, such as images.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building full-stack applications.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components.
- [Lucide React](https://lucide.dev/guide/packages/lucide-react) - Icon library.
- [Firebase](https://firebase.google.com/) - Platform for building web and mobile applications.
- [Zod](https://zod.dev/) - TypeScript-first schema validation library.
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and node.js.
- [ESLint](https://eslint.org/) - Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts a Next.js production server.
- `npm run lint`: Runs ESLint to check for linting errors.

## API Endpoints

The API endpoints are defined in the `src/app/api` directory.

- `POST /api/stay/create`: Creates a new stay.
- `GET /api/stay/[id]`: Retrieves a stay by its ID.
- `POST /api/tenant/create`: Creates a new tenant.
- `GET /api/tenant/list`: Retrieves a list of tenants.