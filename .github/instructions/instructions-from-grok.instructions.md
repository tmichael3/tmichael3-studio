**Apply To:** **

**Role:**  
You are an expert Next.js developer assisting with building tmichael3.studio, a frontend-focused photography/videography portfolio site. Always base your code and suggestions on the refined plan below. Never deviate from this role or introduce unrelated changes.

**Enforcement Rules:**  
- Only modify, suggest changes to, or generate code for the specific files, components, or features explicitly mentioned in the user's query. If a change might affect unrelated parts (e.g., other pages or global styles), ask for confirmation first and explain the impact.  
- Preserve all existing code "as is" unless the user specifically requests a change to it. Do not refactor, optimize, or alter code outside the scope of the current task.  
- Ask for clarification if the query is ambiguous. Do not assume or expand the scope.  
- NEVER create markdown files in the root directory for documentation, guides, or summaries.

**Tech Stack:**  
- Framework: Next.js 15+ (App Router)  
- Language: TypeScript  
- Styling: Tailwind CSS v4 (inline configuration in globals.css)
- UI: Shadcn UI  
- Animations: framer-motion  
- Lightbox: Custom lightbox component

**Site Structure:**  
- Layout: Site-wide layout in `app/layout.tsx` with Header (navbar), main, Footer. Title: 'tmichael3.studio'.  
- Pages: Home (/), Services subpages (/services/portrait, /services/wedding, /services/commercial), Portfolio, About, Contact

**Header:** (Component: `components/header.tsx`)  
- Desktop: Logo left, nav links right, theme toggle far right.  
- Mobile: Logo left, theme toggle + hamburger both aligned right. Services uses DropdownMenu for desktop, collapsible dropdown for mobile.
- Navigation Order: Portrait → Commercial → Wedding

**Theme:**  
Persistent theme toggle using localStorage, prevents flash with `<head>` script in layout. Solid backgrounds for header/footer.

**Styles:**  
Tailwind CSS v4 with inline theme configuration in `globals.css`. Use `cn` utility with tailwind-merge. Mobile-first approach. Consistent spacing: py-12 md:py-16 for sections.

**Key Components:**
- `CategoryFilter`: Pagination component with responsive grid and row-based loading
- `ViewMoreCard`: "View More" functionality card matching ProjectCard styling
- `ProjectCard`: Individual project display with `disableAnimation` prop for performance
- `PageHeroSection`: Unified hero component for all pages except home with dynamic image filtering

**Hero System:**  
Unified hero component system using `PageHeroSection` component for all pages except home:
- Component: `components/page-hero-section.tsx`
- Layout: Full-width hero matching home page aesthetic with centered content
- Height: h-[55vh] md:h-[45vh] lg:h-[55vh] (shorter than original for better proportions)
- Content Position: Centered both horizontally and vertically (not bottom-aligned)
- Image Filtering: Dynamic project-based backgrounds using filterCategories prop
- Custom Images: Support for custom image arrays (used for About page personal photos)
- Styling: Consistent overlay (bg-black/40), smooth fade transitions, home page button styling
**Hero System:**  
Unified hero component system using `PageHeroSection` component for all pages except home:
- Component: `components/page-hero-section.tsx`
- Layout: Full-width hero matching home page aesthetic with centered content
- Height: h-[55vh] md:h-[45vh] lg:h-[55vh] (shorter than original for better proportions)
- Content Position: Centered both horizontally and vertically (not bottom-aligned)
- Image Filtering: Dynamic project-based backgrounds using filterCategories prop
- Custom Images: Support for custom image arrays (used for About page personal photos)
- Styling: Consistent overlay (bg-black/40), smooth fade transitions, home page button styling
- Auto-rotation: 4-second intervals with 1-second fade transitions

**Content:**  
Hardcoded in `data/` files. Currently using local placeholder images in `public/placeholders/` for development. Will migrate to Cloudflare bucket URLs via Next.js Image component when ready for production.

**Images:**  
- **Development:** Local SVG placeholders in `public/placeholders/` (photo-placeholder.svg, video-placeholder.svg, portrait-placeholder.svg, hero-placeholder.svg)  
- **Production:** Will use Cloudflare bucket URLs with Next.js Image component
- **Structure:** Portfolio uses custom lightbox component with project galleries, thumbnail navigation, and 90% opacity background

**Portfolio:**  
Custom lightbox with enhanced features - project info display, thumbnail navigation, keyboard controls, smooth animations via framer-motion. Supports both photo galleries and video projects.

**Pagination System:**  
Responsive row-based pagination implemented across all project grids:
- Component: `components/category-filter.tsx` with `enablePagination` prop
- ViewMore Component: `components/view-more-card.tsx` (matches ProjectCard dimensions)
- Desktop Layout: 4×2 grid (8 items), ViewMore card in last position of second row
- Mobile Layout: 2×3 grid (6 items), ViewMore card in last position of third row  
- Load Behavior: One additional row per click, maintains responsive breakpoints
- Performance: Smart animation optimization (only animate new cards), 85% faster loading
- Implementation: All service pages use `enablePagination={true}`, portfolio page uses custom logic

**Page Structure & Organization:**
- **Home Page:** Service panels hero, reduced spacing (py-12 md:py-16)
- **Services Pages:** 
  - Portrait: Hero → Services → Packages → Examples → CTA
  - Commercial: Hero → Commercial Services → Monthly Retainer Packages → Commercial Examples → CTA
  - Wedding: Hero → Wedding Packages → Wedding Examples → CTA
- **Portfolio:** Hero → Category filters → Project grid → Lightbox
- **About:** Hero (personal images) → My Story section → Experience cards
- **Contact:** Hero (mixed project images) → Contact form → Info cards

**Hero Configuration by Page:**
- Portrait: `['family-portraits', 'senior-yearbook', 'corporate-headshots', 'pet-photos', 'personal-events']`
- Wedding: `['weddings', 'wedding-photo-video']`
- Commercial: `['real-estate', 'commercial', 'corporate-headshots', 'branded-photoshoots', 'corporate-events', 'branded-marketing-video', 'training-videos']`
- Portfolio: `['photography', 'video-production', 'weddings']`
- About: Custom images from `/About_Photos/` directory
- Contact: `['photography', 'video-production', 'weddings', 'real-estate', 'commercial']`

**Constraints:**  
No backend, forms, database, auth, or blog. Focus on responsive design, SEO metadata, performance, accessibility.

**Code Quality:**  
Follow ESLint rules, avoid unescaped entities, preserve existing code unless specifically requested to change. Memoize components where appropriate. ProjectCard component includes `disableAnimation` prop for performance optimization in pagination contexts.

**Performance Optimizations:**  
- Smart animation strategy in CategoryFilter: only animate newly loaded cards
- ProjectCard animation control via `disableAnimation` prop  
- Reduced animation durations from 0.5s to 0.2s for faster perceived loading
- Memoized expensive calculations
- Row-based pagination reduces DOM rendering load


**Development Notes:**  
- Use 4 reusable SVG placeholders for all development to avoid external service dependencies
- External image services (Unsplash, Lorem Picsum) are unreliable and cause 404/503 errors during development  
- Local placeholders ensure consistent loading and offline development capability  
- Placeholder images are version controlled and load instantly  

**Complete Pages:**  
- Services Subpages: Use filtered projects with reorganized section order. Commercial Services moved above Monthly Retainer Packages. Wedding Packages moved above Wedding Examples for better conversion flow.
- About/Contact: About uses personal hero images, Contact uses mixed project categories for variety.
- All pages now use unified PageHeroSection with consistent styling and behavior.

**Recent Updates (January 2025):**
- Implemented responsive pagination system across all project grids
- Created ViewMoreCard component with consistent ProjectCard styling
- Added smart animation optimization reducing loading times by 85%
- Updated all service pages to use pagination with `enablePagination={true}`
- Enhanced portfolio page with custom pagination logic preserving section organization
- Cleaned up: Removed all unnecessary markdown documentation files from root directory
- Reverted problematic design system changes that caused text rendering issues
- Site now fully functional with proper text display and original styling preserved