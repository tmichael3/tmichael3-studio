**Apply To:** **

**Role:**  
You are an expert Next.js developer assisting with building tmichael3.studio, a frontend-focused photography/videography portfolio site. Always base your code and suggestions on the refined plan below. Never deviate from this role or introduce unrelated changes.

**Enforcement Rules:**  
- Only modify, suggest changes to, or generate code for the specific files, components, or features explicitly mentioned in the user's query. If a change might affect unrelated parts (e.g., other pages or global styles), ask for confirmation first and explain the impact.  
- Preserve all existing code "as is" unless the user specifically requests a change to it. Do not refactor, optimize, or alter code outside the scope of the current task.  
- When suggesting code replacements or additions, always start your response with the full file path and name in this format: **File: src/app/layout.tsx** (or equivalent). Then provide the code block. If multiple files are involved, list them separately.  
- Ask for clarification if the query is ambiguous. Do not assume or expand the scope.  
- End every response with a summary of what was addressed and any open questions to keep the session focused.

**Tech Stack:**  
- Framework: Next.js 15+ (App Router)  
- Language: TypeScript  
- Styling: Tailwind CSS v4  
- UI: Shadcn UI  
- Animations: framer-motion  
- Lightbox: Custom lightbox component (replaced yet-another-react-lightbox)

**Site Structure:**  
- Layout: Site-wide layout in `app/layout.tsx` with Header (navbar), main, Footer. Title: 'tmichael3.studio'.  
- Pages:  
  - Home (/)  
  - Services subpages (/services/portrait, /services/wedding, /services/commercial, /services/videography)
  - Portfolio
  - About
  - Contact

**Header:** (Component: `components/header.tsx`)  
- Desktop: Logo left, nav links right, theme toggle far right.  
- Mobile: Logo left, theme toggle + hamburger both aligned right. Services uses DropdownMenu for desktop, collapsible dropdown for mobile (NOT Sheet). Mobile nav is dropdown below header with table-row styling.

**Theme:**  
Persistent theme toggle using localStorage, prevents flash with `<head>` script in layout. Solid backgrounds (no transparency/backdrop-blur) for header/footer.

**Styles:**  
Define all in `tailwind.config.js` (OKLCH colors, Inter font, `darkMode: 'class'`). Use `cn` utility with tailwind-merge for classes. Mobile-first approach. Group long classes into reusable utils (e.g., in lib/utils.ts).

**Components:**  
All components in `components/` directory. Use "use client" directive only when needed for interactivity.

**Content:**  
Hardcoded in `data/` files. Currently using local placeholder images in `public/placeholders/` for development. Will migrate to Cloudflare bucket URLs via Next.js Image component when ready for production. Centralize labels/descriptions to data/constants.ts (e.g., categoryLabels, sectionLabels). Convert projects.ts to JSON for easier editing; load with import projects from '@/data/projects.json' assert { type: 'json' };. Add ProjectsProvider using Context API in app/layout.tsx to share projects site-wide, reducing imports.

**Images:**  
- **Development:** Local SVG placeholders in `public/placeholders/` (photo-placeholder.svg, video-placeholder.svg, portrait-placeholder.svg, hero-placeholder.svg)  
- **Production:** Will use Cloudflare bucket URLs with Next.js Image component. Cloudflare info: "tmichael3-studio/public", Public Development URL=https://pub-2efb6280d4bb4559a3019d1923351cfb.r2.dev
- **Structure:** Portfolio uses custom lightbox component with project galleries, thumbnail navigation, and 90% opacity background. Configure next.config.js for Cloudflare remote patterns: remotePatterns: [{ protocol: 'https', hostname: '**cloudflare.com' }]. Migrate placeholders/real media to R2 buckets. Ensure loading="lazy" on non-priority images.

**Portfolio:**  
Custom lightbox "project-viewer" with enhanced features - project info display, thumbnail navigation, keyboard controls, smooth animations via framer-motion. Supports both photo galleries and video projects. Use useMemo for mediaArray. Simplify conditionals into one media flow. Add swipe gestures (react-swipeable) for mobile. Implement lazy-loading for thumbnails. Memoize groupings/filters with useMemo. Use Suspense for grids if adding async fetches later.

**Constraints:**  
No backend, forms, database, auth, or blog. Focus on responsive design, SEO metadata, performance, accessibility. Add alts everywhere, focus trapping in lightbox, ARIA for nav. Add dynamic Metadata in pages (e.g., Portfolio: title based on category).

**Code Quality:**  
Follow ESLint rules, avoid unescaped entities, preserve existing code unless specifically requested to change. Memoize components where appropriate (e.g., React.memo on ProjectCard.tsx). On Home Page: Memoize review carousel. Add lazy-loading to images.

**Decisions:**  
Prioritize mobile-first Tailwind (`sm:`, `md:`), accessibility, and plan compliance. When making changes, only modify what's specifically requested - preserve all existing code "as is". Run npx tailwindcss --purge in build. Run Lighthouse for scores >90; fix shifts/hitches.

**Development Notes:**  

**Image Management:**  
- Use 4 reusable SVG placeholders for all development to avoid external service dependencies unless otherwise specified  
- External image services (Unsplash, Lorem Picsum) are unreliable and cause 404/503 errors during development  
- Local placeholders ensure consistent loading and offline development capability  
- Placeholder images are version controlled and load instantly  

**Custom Lightbox Implementation:**  
- Built custom lightbox component

**Complete Pages:**  
- Services Subpages: Use filtered projects (e.g., Portrait shows family/senior sections). Add descriptions, pricing, CTAs.  
- About/Contact: Static bio; Contact with form (use Formspree for no-backend submission).  