import Link from 'next/link';

import AppShell from '@/components/layouts/AppShell';

export default function HomePage() {
  return (
    <AppShell>
      <main>
        hello index
        <Link href='/monkey'>To Monkey</Link>
      </main>
    </AppShell>
  );
}

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
