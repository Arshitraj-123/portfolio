'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Database, Lightbulb, BookOpen, ChevronRight } from 'lucide-react';

interface Project {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    liveUrl: string;
    codeUrl: string;
    techStack: { name: string; icon: string }[];
    dataStructure: {
        database: string;
        orm: string;
        tables: { name: string; fields: { name: string; type: string }[] }[];
    };
    learnings: { title: string; text: string }[];
    conclusion: string[];
}

interface Props {
    project: Project;
    nextProject: Project;
}

export default function CaseStudyContent({ project, nextProject }: Props) {
    return (
        <main className="max-w-[1200px] mx-auto px-8 py-16">
            {/* Hero */}
            <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl font-bold gradient-text mb-4">{project.title}</h1>
                <p className="text-2xl text-[#a0aec0] mb-6">{project.subtitle}</p>
                <p className="text-lg text-[#718096] max-w-3xl">{project.description}</p>

                <div className="mt-8 p-4 bg-[#252a3e] rounded-xl inline-flex items-center gap-3">
                    <ExternalLink size={20} className="text-[#f56565]" />
                    <span className="text-[#a0aec0]">Live at</span>
                    <button
                        onClick={() => alert('Sorry, cannot be previewed now')}
                        className="text-[#f56565] hover:underline font-medium cursor-pointer"
                    >
                        {project.liveUrl.replace('https://', '')}
                    </button>
                </div>
            </motion.section>

            {/* TechStack */}
            <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f56565] to-[#ed8936] flex items-center justify-center">
                        <span className="text-xl">🛠️</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">TechStack</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {project.techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="bg-[#252a3e] rounded-xl p-5 flex flex-col items-center gap-3 hover:bg-[#2d3348] transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <span className="text-3xl">{tech.icon}</span>
                            <span className="text-sm text-[#a0aec0] text-center">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Data Structure */}
            <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                        <Database size={20} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Data Structure</h2>
                </div>

                <div className="bg-[#252a3e] rounded-2xl p-8">
                    <div className="flex gap-6 mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1e2e] rounded-lg">
                            <span className="text-xl">🗄️</span>
                            <span className="text-[#a0aec0]">{project.dataStructure.database}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1e2e] rounded-lg">
                            <span className="text-xl">🔺</span>
                            <span className="text-[#a0aec0]">{project.dataStructure.orm}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.dataStructure.tables.map((table) => (
                            <div key={table.name} className="bg-[#1a1e2e] rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-[#f56565] to-[#ed8936] px-4 py-2">
                                    <h3 className="font-semibold text-white">{table.name}</h3>
                                </div>
                                <div className="p-4 space-y-2">
                                    {table.fields.map((field) => (
                                        <div key={field.name} className="flex justify-between items-center">
                                            <span className="text-[#a0aec0]">{field.name}</span>
                                            <span className="text-xs px-2 py-1 bg-[#2d3348] rounded text-[#718096]">{field.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* What I Learnt */}
            <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#43e97b] to-[#38f9d7] flex items-center justify-center">
                        <Lightbulb size={20} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">What I Learnt</h2>
                </div>

                <div className="grid gap-6">
                    {project.learnings.map((learning, index) => (
                        <motion.div
                            key={learning.title}
                            className="bg-[#252a3e] rounded-xl p-6 border-l-4 border-[#f56565]"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-2">{learning.title}</h3>
                            <p className="text-[#a0aec0]">{learning.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Conclusion */}
            <motion.section
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center">
                        <BookOpen size={20} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Conclusion</h2>
                </div>

                <div className="bg-[#252a3e] rounded-2xl p-8 space-y-4">
                    {project.conclusion.map((paragraph, index) => (
                        <p key={index} className="text-[#a0aec0] text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                    <p className="text-[#f56565] font-medium text-lg mt-6 pt-6 border-t border-white/10">
                        Thank you for taking the time to read this case study! 🙏
                    </p>
                </div>
            </motion.section>

            {/* Next Project */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <Link
                    href={`/projects/${nextProject.slug}`}
                    className="block bg-gradient-to-r from-[#252a3e] to-[#2d3348] rounded-2xl p-8 hover:from-[#2d3348] hover:to-[#353a50] transition-all group"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[#718096] text-sm uppercase tracking-wider">Next Project</span>
                            <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-[#f56565] transition-colors">
                                {nextProject.title}
                            </h3>
                            <p className="text-[#a0aec0] mt-1">{nextProject.subtitle}</p>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f56565] to-[#ed8936] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ChevronRight size={32} className="text-white" />
                        </div>
                    </div>
                </Link>
            </motion.section>
        </main>
    );
}
