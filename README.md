# Full-Stack TypeScript Template

A modern full-stack TypeScript template featuring React (Vite) frontend and Express backend using a monorepo structure.

## Features
- **Frontend**
  - React 18 with TypeScript
  - Vite for fast development and building
  - TailwindCSS for styling
  - ESLint configuration for React and TypeScript
  - Path aliases configured (@/ prefix)
  - React Hook Form integration
  
- **Backend**
  - Express.js with TypeScript
  - Environment variable support
  - Error handling middleware
  - Async handler support
  - TypeScript path aliases

## Project Structure
```
├── client/         # frontend react application
│ ├── src/          # source files
│ ├── public/       # static files
│ └── package.json  # frontend dependencies
├── server/         # backend express application
│ ├── config/       # server config
│ └── package.json  # backend dependencies
└── package.json    # frontend & backend dependencies
```

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started
### 1. Clone the repository:
- _with HTTPS:_
```bash
git clone https://github.com/ganznz/express-vite-monorepo.git
```
- _or with SSH:_
```bash
git@github.com:ganznz/express-vite-monorepo.git
```

### 2. Initialize local & remote repository:
```bash
mv old-directory-name NEW-REPO-NAME # rename your local directory to something fitting for your project
cd NEW-REPO-NAME
rm -rf .git
git init
gh repo create NEW-REPO-NAME --private --source=. --remote=origin --push # push to github
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Start the development servers:
- start backend:
```bash
npm run dev-server
```
- start frontend:
```bash
npm run dev-client
```
The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:8080`.