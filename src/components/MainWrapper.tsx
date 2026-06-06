'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isProjectPage = pathname?.startsWith('/projects/');

    return (
        <main className={`w-full overflow-x-hidden ${isProjectPage ? "" : "pt-14 lg:pt-0 lg:ml-44"}`}>
            {children}
        </main>
    );
}
