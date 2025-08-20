# CategoryFilter Pagination Usage Examples

## Basic Usage (No Pagination - Current Behavior)

```tsx
<CategoryFilter 
  projects={projects}
  categories={categories}
  onProjectClick={handleProjectClick}
  title="Portfolio"
  description="Explore our work"
/>
```

## With Pagination Enabled (New Feature)

```tsx
<CategoryFilter 
  enablePagination={true}
  projects={projects}
  categories={categories}
  onProjectClick={handleProjectClick}
  title="Portfolio Examples"
  description="Browse our recent work"
/>
```

## Custom Items Per Page

```tsx
<CategoryFilter 
  enablePagination={true}
  initialItemsPerPage={6}
  projects={projects}
  categories={categories}
  onProjectClick={handleProjectClick}
/>
```

## How It Works

### Default Pagination Behavior:
- **Initial Load**: Shows 8 items by default
- **View More**: Loads 8 more items each click
- **Progressive Loading**: Appends new items to existing grid
- **Smart Replacement**: "View More" card replaces the last project card in the current row
- **Responsive**: Uses existing grid breakpoints (`sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`)

### Responsive Grid Layout:
- **Mobile (sm)**: 2 columns
- **Tablet (lg)**: 3 columns  
- **Desktop (xl)**: 4 columns

### User Experience:
1. User sees first 7 project cards + 1 "View More" card
2. Clicks "View More" → Loads next 8 project cards
3. Continues until all projects are loaded
4. "View More" card disappears when all items are shown
5. Category switching resets pagination back to initial state

## Implementation Details

### New Props:
- `enablePagination?: boolean` - Toggle pagination feature
- `initialItemsPerPage?: number` - Override default page size (8)

### Backwards Compatibility:
- All existing usage continues to work unchanged
- Pagination is completely opt-in
- No breaking changes to existing API

### Performance Benefits:
- Reduces initial render time for large project collections
- Progressive loading improves perceived performance
- Maintains smooth animations and interactions
