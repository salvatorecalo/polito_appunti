# 📘 Polito Appunti
Open-source Web Application for Sharing Politecnico di Torino's Course Notes
Polito Appunti is an open-source web application designed to help students at Politecnico di Torino share, discover, and collaborate on course notes. Whether you’re looking for class materials or contributing your own, this platform aims to make note-sharing easy and efficient for everyone.

## 📝 Notes for Contributors
Every commit should follow Conventional Commit rules

English commit messages only are accepted

## 🛠️ Installation
To get started with Polito Appunti locally:

## *Requirements*
React knowledge (using official libraries like react, react-router-dom, etc.)
Node.js installed with a package manager like npm, pnpm, or bun

Steps

1. Clone the repository:
git clone https://github.com/yourusername/polito-appunti.git

2. Navigate to the project directory:
cd polito-appunti

3. Install dependencies:
```npm install```
or
```pnpm install```
or
```bun install```

Start the development server:
```npm run dev```

🧱 Project Structure
The application follows a modular structure with clear separation of concerns:

📁 components/
    ↳ Reusable React components used across multiple pages
    ↳ Each folder has its own `index.ts` (barrel file) for cleaner imports

📁 pages/
    ↳ Each file or folder corresponds to a route (e.g., `/home`, `/about`)
    ↳ Route-based architecture using React Router

📁 utils/
    ↳ Utility functions and constants
    ↳ Includes API handlers, endpoints, helpers, etc.

📁 hooks/
    ↳ Custom React hooks to encapsulate logic (e.g., useCategoryList)

📁 public/
    ↳ Static assets like images, icons, logos, etc.

📄 main.tsx / App.tsx
    ↳ Entry point of the application
Note: Every folder includes a barrel file (index.ts).
When adding new files or components, remember to export them there for clean imports: import { Navbar } from '@/components' instead of import Navbar from '../../components/Navbar/Navbar'

🤝 Contributing
We welcome contributions! If you’d like to help improve this project:

Fork the repository

Create a new branch (git checkout -b feature/my-feature)

Commit your changes using Conventional Commits

Push your branch (git push origin feature/my-feature)

Open a Pull Request

📄 License
This project is open-source and available under the MIT License.

Made with 💙 by students, for students @ Politecnico di Torino
