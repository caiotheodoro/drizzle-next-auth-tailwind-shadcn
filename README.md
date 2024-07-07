# drizzle-next-auth-tailwind-shadcn

Welcome to the `drizzle-next-auth-tailwind-shadcn` template repository! This template is designed to help you kickstart your project with the following technologies:

- **Next.js**: A React framework for production.
- **Drizzle ORM**: A lightweight TypeScript ORM for SQL databases.
- **NextAuth.js**: Authentication for Next.js applications.
- **Tailwind CSS**: A utility-first CSS framework.
- **ShadCN**: A collection of common UI components built with Tailwind CSS.
- **Husky**: Git hooks to automate tasks.
- **ESLint**: A linter tool for identifying and fixing problems in your JavaScript code.
- **Prettier**: An opinionated code formatter.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/drizzle-next-auth-tailwind-shadcn.git
   cd drizzle-next-auth-tailwind-shadcn
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Using Yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the necessary environment variables. Refer to `.env.example` for the required variables.

   ```env
   DATABASE_URL=your_database_url
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the development server:**

   Using npm:
   ```bash
   npm run dev
   ```

   Using Yarn:
   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── components    # Reusable UI components
├── lib           # Library functions and utilities
├── pages         # Next.js pages
├── public        # Public assets
├── styles        # Global styles and CSS
├── .eslintrc.js  # ESLint configuration
├── .prettierrc   # Prettier configuration
├── .husky        # Husky configuration
├── next.config.js# Next.js configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Scripts

- **`dev`**: Runs the development server.
- **`build`**: Builds the application for production.
- **`start`**: Starts the production server.
- **`lint`**: Lints the code using ESLint.
- **`format`**: Formats the code using Prettier.
- **`prepare`**: Sets up Husky hooks.

## Code Quality

This project uses ESLint and Prettier to maintain code quality and consistency.

- **ESLint**: Run `npm run lint` or `yarn lint` to check for linting errors.
- **Prettier**: Run `npm run format` or `yarn format` to format the code.

## Git Hooks

Husky is used to manage Git hooks. The following hooks are configured:

- `pre-commit`: Runs linting and formatting checks before committing changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

---

Feel free to customize this template according to your project's requirements. Happy coding!
