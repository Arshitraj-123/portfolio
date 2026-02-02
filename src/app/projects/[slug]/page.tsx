import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs, getNextProject } from '@/lib/projects';
import CaseStudyContent from '@/components/CaseStudyContent';

import LiveDemoButton from '@/components/LiveDemoButton';

// Generate static params for all projects
export async function generateStaticParams() {
    return getAllProjectSlugs();
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: 'Project Not Found' };
    }

    return {
        title: `${project.title} - Case Study | Arshit Raj`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // The handleLiveViewClick function and its usage in the provided snippet
    // seem to be intended for a different component (ProjectsSection) or a different context.
    // The original LiveDemoButton component already handles the liveUrl.
    // The instruction also mentions "In ProjectsSection, update handleLiveViewClick...",
    // which is outside the scope of this file.
    // Therefore, I will only apply the changes that are syntactically correct and
    // logically consistent with the ProjectPage component as provided in the original document.
    // The LiveDemoButton already receives project.liveUrl, fulfilling the first part of the instruction.
    // The provided snippet for the "Code" button is incorrect as it uses `currentProject.liveUrl`
    // and introduces a `handleLiveViewClick` that depends on `setShowPopup` which is not defined here.
    // I will keep the original "Code" button as it is correct for this page.

    const nextProject = getNextProject(slug);

    return (
        <div className="min-h-screen bg-[#1a1e2e]">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#1a1e2e]/95 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-[#a0aec0] hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </Link>
                    <div className="flex gap-3">
                        <LiveDemoButton url={project.liveUrl} />
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-[#2d3348] rounded-lg text-sm text-white hover:bg-[#333] transition-colors"
                        >
                            <Github size={16} />
                            Code
                        </a>
                    </div>
                </div>
            </header>

            {/* Case Study Content */}
            <CaseStudyContent project={project} nextProject={nextProject} />
        </div>
    );
}
