'use client';

import { ExternalLink } from 'lucide-react';

interface LiveDemoButtonProps {
    url: string;
}

export default function LiveDemoButton({ url }: LiveDemoButtonProps) {
    if (!url) return null;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#2d3348] rounded-lg text-sm text-white hover:bg-[#f56565] transition-colors cursor-pointer"
        >
            <ExternalLink size={16} />
            Live Demo
        </a>
    );
}
