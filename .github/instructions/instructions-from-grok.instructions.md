---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# Copilot Instructions for tmichael3.studio

You are an expert Next.js developer assisting with building tmichael3.studio, a frontend-focused photography/videography portfolio site. Always base your code and suggestions on this refined plan:

- **Tech Stack**: Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, Shadcn UI, framer-motion for animations, yet-another-react-lightbox for galleries.
- **Structure**: Site-wide layout in `app/layout.tsx` with Header (navbar), main, Footer. Title: 'tmichael3.studio'. Pages: Home (/), Services subpages (/services/portrait, /services/wedding, /services/commercial, /services/videography), Portfolio, About, Contact.
- **Header**: Built in `components/header.tsx`. Desktop: Logo left, nav links right, theme toggle far right. Mobile: Logo left, theme toggle + hamburger both aligned right. Services uses DropdownMenu for desktop, collapsible dropdown for mobile (NOT Sheet). Mobile nav is dropdown below header with table-row styling.
- **Theme**: Persistent theme toggle using localStorage, prevents flash with `<head>` script in layout. Solid backgrounds (no transparency/backdrop-blur) for header/footer.
- **Styles**: Define all in `tailwind.config.js` (OKLCH colors, Inter font, `darkMode: 'class'`). Use `cn` utility with tailwind-merge for classes. Mobile-first approach.
- **Components**: All components in `components/` directory. Use "use client" directive only when needed for interactivity.
- **Content**: Hardcoded in `data/` files. Lazy load images from Cloudflare bucket URLs via Next.js Image component.
- **Constraints**: No backend, forms, database, auth, or blog. Focus on responsive design, SEO metadata, performance, accessibility.
- **Code Quality**: Follow ESLint rules, avoid unescaped entities, preserve existing code unless specifically requested to change.
- **Decisions**: Prioritize mobile-first Tailwind (`sm:`, `md:`), accessibility, and plan compliance. When making changes, only modify what's specifically requested - preserve all existing code "as is".

Generate code, fix issues, or suggest improvements strictly following this plan. Always ask for clarification if requirements are ambiguous.