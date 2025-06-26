# NeuroFunds AI 💸  
> Your all-in-one, AI-powered toolkit for smarter personal finance

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Inngest-1A1A1A?style=for-the-badge&logo=Inngest&logoColor=white" alt="Inngest"/>
  <img src="https://img.shields.io/badge/Supabase-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
  <img src="https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini"/>
  <img src="https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNDAgMjQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNTguNjc0IDcwLjYxOEw4OC40NDMgODcuODg2VjEzOC41N0w1OC42NzQgMTIxLjMwMlY3MC42MThabTk2LjAxOCA3MC42MTJsMjkuNzY5LTE3LjI2OEwxODQuNzUgNzAuNjE4bC0yOS43NjggMTcuMjY4djM4LjA1NEgxNTQuNjkyVjE0Mi4xN2gyOS43Njh2LTIxLjQzTDIwMC45MTUgNzAuNjE4SDE4NC43NXYtMTYuMzg2aC0yOS43Njh2MTYuMzg2aC0yOS43Njd2MjYuODc1bDI5Ljc2Ny0xNy4yNjh2MzMuNjkySDU4LjY3NFYxNzUuNEgxNzAuMzZ2LTMzLjY5MlpNODguNDQzIDcwLjYxOEgxMTguMjF2NTEuMTQ0SDg4LjQ0M1Y3MC42MThaIi8+PC9nPjwvc3ZnPg==&logoColor=white" alt="Resend"/>
  <img src="https://img.shields.io/badge/Arcjet-101010?style=for-the-badge&logo=arcjet&logoColor=white" alt="Arcjet"/>
  <img src="https://img.shields.io/badge/Clerk-3b49df?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
  <img src="https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="ShadCN UI"/>
  <img src="https://img.shields.io/badge/Framer_Motion-EF4444?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>
</p>

---

## ✨ Features

- **Auth** – Clerk + custom onboarding  
- **Bank-level security** – Arcjet + Prisma/Postgres  
- **Real-time jobs** – Inngest background workflows  
- **AI insights** – Gemini-powered spending analysis  
- **Transactional email** – Resend  
- **Beautiful UI** – Shadcn UI + Tailwind + Framer Motion  
- **3D Elements** – Swirls and dynamic visuals with Three.js  

---

## 🏁 Getting Started

First, clone the project:

```bash
git clone https://github.com/harshdwivediiiii/neurofunds-ai.git
cd neurofunds-ai
```

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Environment Variables

Create a `.env.local` file with the following keys:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

---
## 🤝 Contributing

We welcome contributions from the community! Whether it's fixing bugs, improving documentation, adding features, or suggesting enhancements, you're more than welcome to help improve **NeuroFunds AI**.

### 🧾 How to Contribute

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/neurofunds-ai.git
   cd neurofunds-ai
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Make your changes**
   - Implement your feature or fix.
   - Ensure everything builds and runs locally.
   - Write tests if applicable.

5. **Commit your changes**
   ```bash
   git commit -m "feat: add [your feature description]"
   ```

6. **Push to your fork**
   ```bash
   git push origin feat/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to your forked repository on GitHub
   - Click "Compare & pull request"
   - Provide a clear description of your changes
   - Submit the pull request

---

### 🧰 Development Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - Example: `feat: add new budget planner AI module`
- Run `pnpm lint` before pushing
- Run `pnpm format` to auto-format code
- Keep your pull requests focused and minimal
- Use clear, descriptive names for branches and commits

---

### 📌 Suggestions & Issues

- Found a bug? Open an [Issue](https://github.com/harshdwivediiiii/neurofunds-ai/issues)
- Have a feature request? Let us know in [Discussions](https://github.com/harshdwivediiiii/neurofunds-ai/discussions) or open an issue

Thank you for contributing to NeuroFunds AI 💸!



## 📜 Scripts

| Command            | Description                      |
|--------------------|----------------------------------|
| `pnpm dev`         | Start dev server                 |
| `pnpm build`       | Build for production             |
| `pnpm start`       | Start production server          |
| `pnpm lint`        | Run ESLint                       |
| `pnpm db:migrate`  | Run Prisma migration             |

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Google Gemini API](https://ai.google.dev/gemini-api)
- [Inngest Docs](https://www.inngest.com/docs)
- [Resend Email Docs](https://resend.com/docs)
- [Arcjet Security](https://arcjet.com/docs)
- [ShadCN UI](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)

--

<p align="center">
  <!-- Build Status -->
  <img src="https://github.com/harshdwivediiiii/neurofunds-ai/actions/workflows/ci.yml/badge.svg" alt="CI Status"/>
  
  <!-- Code Coverage -->
  <img src="https://img.shields.io/codecov/c/github/harshdwivediiiii/neurofunds-ai?style=for-the-badge&token=YOUR_TOKEN_HERE" alt="Coverage"/>

  <!-- License -->
  <img src="https://img.shields.io/github/license/harshdwivediiiii/neurofunds-ai?style=for-the-badge" alt="License"/>

  <!-- Open Issues -->
  <img src="https://img.shields.io/github/issues/harshdwivediiiii/neurofunds-ai?style=for-the-badge" alt="Open Issues"/>

  <!-- PRs Welcome -->
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome"/>

  <!-- Last Commit -->
  <img src="https://img.shields.io/github/last-commit/harshdwivediiiii/neurofunds-ai?style=for-the-badge" alt="Last Commit"/>

  <!-- GitHub Stars -->
  <img src="https://img.shields.io/github/stars/harshdwivediiiii/neurofunds-ai?style=for-the-badge" alt="Stars"/>
</p>


## 🚀 Deploy

Deploy easily with [Vercel](https://vercel.com/new):

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/harshdwivediiiii/neurofunds-ai)

---

## 🧠 Author

**Harshvardhan Dwivedi**

- 📧 [Email](mailto:harshvardhandwivedi18@gmail.com)
- 🧑‍💻 [GitHub](https://github.com/harshdwivediiiii/neurofunds-ai)
- 💼 [LinkedIn](https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290/)
- 🐦 [X / Twitter](https://x.com/Harshvdwivediii)

---
```
