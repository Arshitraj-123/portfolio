'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith('/projects/');

    return (
        <main className={isProjectPage ? "" : "ml-44 lg:ml-44"}>
            {children}
        </main>
    );
}
