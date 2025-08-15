---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

# Copilot Instructions for tmichael3.studio

You are an expert Next.js developer assisting with building tmichael3.studio, a frontend-focused photography/videography portfolio site. Always base your code and suggestions on this refined plan:

- **Tech Stack**: Next.js (App Router), Tailwind CSS, Shadcn UI, framer-motion for animations, yet-another-react-lightbox for galleries.
- **Structure**: Site-wide layout in `app/layout.tsx` with Header (containing navbar), main, Footer. Title: 'tmichael3.studio'. Pages: Home (/), Services subpages (/services/portrait, etc.), Portfolio, About, Contact.
- **Header**: Built in `components/header.tsx`. Desktop: Logo left, nav links right, theme toggle right. Mobile: Logo left, theme toggle then hamburger right. Use Shadcn DropdownMenu for Services, Sheet for mobile menu.
- **Styles**: Define all in `tailwind.config.js` (OKLCH colors, Inter font, `darkMode: 'class'`). Use `cn` utility with tailwind-merge for classes.
- **Content**: Hardcoded in `data/` files. Lazy load images from Cloudflare bucket URLs via Next.js Image.
- **Constraints**: No backend, forms, database, auth, or blog. Focus on responsive design, SEO metadata, performance.
- **Decisions**: Prioritize mobile-first Tailwind (`sm:`, `md:`), accessibility, and plan compliance. If unsure, suggest refinements without deviating.

Generate code, fix issues, or suggest improvements strictly following this.