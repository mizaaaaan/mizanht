// Shared site-wide constants. Kept in their own module (rather than declared
// in App.tsx or pages.tsx) so neither file has to import from the other —
// App.tsx renders pages from './pages', and pages.tsx previously imported
// SOCIAL_LINKS back from './App', creating a circular dependency between the
// two. It happened to work because the values were only read inside
// component bodies (after both modules finish loading), but it's a fragile
// pattern that breaks in fine ways depending on bundler/evaluation order.

export const CONTACT_EMAIL = 'mizan321@hotmail.com'

export const SOCIAL_LINKS = ['Instagram', 'TikTok', 'YouTube']
