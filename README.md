# Full-Stack TypeScript Template
A modern full-stack TypeScript template featuring React (Vite) frontend and Express backend using a monorepo structure.

- Author: Logan Bellingham (ganznz)
- Connect with me [[LinkedIn](https://www.linkedin.com/in/logan-bellingham-1a366a230/)], [[X (Twitter)](https://x.com/onlyg_nz)]

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
### 1. Create a repository using this template:
1) Navigate to the main page of this repository.
2) Above the file list, click **Use this template**.
3) Select **Create a new repository**.

### 2. Clone your new repository:
- _with HTTPS:_
```bash
git clone https://github.com/USERNAME/REPO-NAME.git
```
- _or with SSH:_
```bash
git@github.com:USERNAME/REPO-NAME.git
```
Replace:
- `USERNAME` with your GitHub username
- `REPO-NAME` with your repository name

### 2. Update .env files:
- Rename `.env.example` in `client` directory to `.env`.
- Rename `.env.example` in `server` directory to `.env`.

### 3. Install dependencies:
```bash
cd REPO-NAME
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

## License

MIT License

Copyright (c) 2024 Logan Bellingham

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.