'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github, BookOpen, X, ChevronUp, ChevronDown } from 'lucide-react';

const projects = [
    {
        id: 1,
        slug: 'taskflow',
        title: 'TaskFlow App',
        subtitle: 'Modern Full-Stack Task Manager',
        description: 'A modern task management application with secure JWT authentication, real-time task updates, browser notifications for deadlines, and password recovery. Built with React 19 and Express.js with a responsive design.',
        icon: '📋',
        color1: '#667eea',
        color2: '#764ba2',
        tags: ['React 19', 'Express.js', 'SQLite', 'JWT', 'Vite'],
        liveUrl: 'https://taskflow-app.vercel.app',
        codeUrl: 'https://github.com/Arshitraj-123/Task-flow',
    },
    {
        id: 2,
        slug: 'bizzflow',
        title: 'BizFlow',
        subtitle: 'Modern CRM Solution',
        description: 'A full-stack CRM application with Angular 19 and Express.js. Features Firebase Auth, Firestore real-time sync, client management, task tracking with priority filtering, and a Material UI dashboard.',
        icon: '💼',
        color1: '#f56565',
        color2: '#ed8936',
        tags: ['Angular 19', 'Firebase', 'NgRx', 'TypeScript'],
        liveUrl: 'https://bizflow.vercel.app',
        codeUrl: 'https://github.com/Arshitraj-123/Bizz-flow',
    },
    {
        id: 3,
        slug: 'cybertrap',
        title: 'CyberTrap',
        subtitle: 'Agentic Scam Intelligence Honey-Pot',
        description: 'An AI-powered honey-pot that engages scammers using Mrs. Shanthi persona to extract intelligence like UPI IDs and bank accounts. Features 4-stage extraction funnel, consensus confidence scoring, and multi-language support.',
        icon: '🕷️',
        color1: '#38b2ac',
        color2: '#319795',
        tags: ['Python', 'Groq LLM', 'FastAPI'],
        liveUrl: 'https://cybertrap-demo.onrender.com',
        codeUrl: 'https://github.com/Arshitraj-123/Cyber-Trap',
    },
];

// Slide animation variants
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 400 : -400,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 400 : -400,
        opacity: 0,
    }),
};

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = projects.length - 1;
            if (next >= projects.length) next = 0;
            return next;
        });
    };

    const goToProject = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const handleLiveViewClick = (url: string) => {
        if (url && url !== '#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            setShowPopup(true);
        }
    };

    const currentProject = projects[currentIndex];

    return (
        <section id="projects" className="relative min-h-screen py-20 overflow-hidden" style={{ background: '#0f172a' }}>
            {/* Subtle background gradient */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9304a]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#667eea]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-8 items-start">

                    {/* Left Column: Title + Timeline Navigation */}
                    <div className="col-span-2 sticky top-20">
                        {/* Title */}
                        <div className="mb-16">
                            <h2>
                                <span className="text-[#c9304a] italic font-light text-xl block mb-1">Recent</span>
                                <span className="text-white font-bold text-4xl tracking-tight">Work</span>
                            </h2>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex flex-col">
                            {/* Previous Project */}
                            <button
                                onClick={() => paginate(-1)}
                                className="group flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all duration-300 mb-6"
                            >
                                <ChevronUp size={16} className="text-[#c9304a]" />
                                <span className="text-[#c9304a] text-xs font-medium tracking-wide uppercase">
                                    Prev
                                </span>
                            </button>

                            {/* Timeline */}
                            <div className="relative ml-2 h-48 mb-6">
                                {/* Red accent line */}
                                <div className="absolute left-[6px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#c9304a] via-[#c9304a]/50 to-[#c9304a] rounded-full" />

                                {/* Timeline nodes */}
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToProject(index)}
                                        className="absolute left-0 transition-all duration-300 group"
                                        style={{ top: `${(index / (projects.length - 1)) * 100}%`, transform: 'translateY(-50%)' }}
                                    >
                                        <div
                                            className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 ${index === currentIndex
                                                ? 'bg-[#c9304a] border-[#c9304a] scale-125 shadow-lg shadow-[#c9304a]/50'
                                                : 'bg-[#0f172a] border-[#c9304a]/60 hover:border-[#c9304a] hover:scale-110'
                                                }`}
                                        />
                                        {/* Project indicator on hover */}
                                        <span className={`absolute left-8 top-1/2 -translate-y-1/2 text-xs whitespace-nowrap transition-all duration-300 ${index === currentIndex ? 'text-white opacity-100' : 'text-[#a0aec0] opacity-0 group-hover:opacity-100'
                                            }`}>
                                            {projects[index].title}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Next Project */}
                            <button
                                onClick={() => paginate(1)}
                                className="group flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all duration-300"
                            >
                                <ChevronDown size={16} className="text-[#c9304a]" />
                                <span className="text-[#c9304a] text-xs font-medium tracking-wide uppercase">
                                    Next
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Center: Stacked Browser Windows */}
                    <div className="col-span-5 relative">
                        <div className="relative h-[420px]">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0"
                                >
                                    {/* Back window (top layer visually behind) */}
                                    <div className="absolute top-0 left-12 right-0 h-24 bg-gradient-to-br from-orange-400/80 to-orange-500/80 rounded-t-2xl transform -rotate-2 shadow-xl">
                                        <div className="flex items-center gap-2 p-4">
                                            <div className="w-3 h-3 rounded-full bg-white/40" />
                                            <div className="w-3 h-3 rounded-full bg-white/40" />
                                            <div className="w-3 h-3 rounded-full bg-white/40" />
                                        </div>
                                    </div>

                                    {/* Middle window */}
                                    <div className="absolute top-8 left-6 right-6 bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-white/5 transform rotate-1">
                                        <div className="flex items-center gap-2 p-3 bg-[#0f172a] border-b border-white/5">
                                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                            <div className="flex-1 mx-4">
                                                <div className="h-5 bg-[#1e293b] rounded-full max-w-[200px]" />
                                            </div>
                                        </div>
                                        <div className="h-32 bg-gradient-to-br from-[#334155] to-[#1e293b]" />
                                    </div>

                                    {/* Main window (front) */}
                                    <div className="absolute top-16 left-0 right-4 bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-white/10 z-10">
                                        {/* Window chrome */}
                                        <div className="flex items-center gap-2 p-3 bg-[#0f172a] border-b border-white/10">
                                            <div className="flex gap-2">
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] shadow-inner" />
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner" />
                                                <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] shadow-inner" />
                                            </div>
                                            <div className="flex-1 mx-4">
                                                <div className="h-6 bg-[#1e293b] rounded-full flex items-center justify-center">
                                                    <span className="text-[10px] text-[#64748b]">{currentProject.title.toLowerCase().replace(/\s/g, '')}.app</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Window content with project icon */}
                                        <div
                                            className="h-52 flex items-center justify-center relative overflow-hidden"
                                            style={{ background: `linear-gradient(135deg, ${currentProject.color1}, ${currentProject.color2})` }}
                                        >
                                            {/* Decorative circles */}
                                            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                            <div className="absolute bottom-4 left-4 w-24 h-24 bg-black/10 rounded-full blur-xl" />
                                            <motion.span
                                                className="text-8xl drop-shadow-2xl relative z-10"
                                                initial={{ scale: 0.8, rotate: -10 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                {currentProject.icon}
                                            </motion.span>
                                        </div>
                                    </div>

                                    {/* Bottom accent window */}
                                    <div className="absolute top-72 left-8 right-0 bg-[#334155] rounded-xl shadow-xl overflow-hidden border border-white/5 transform -rotate-1">
                                        <div className="flex items-center gap-1.5 p-2 bg-[#1e293b]">
                                            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                                            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                                        </div>
                                        <div className="h-20 bg-gradient-to-br from-[#475569] to-[#334155] flex items-center justify-center">
                                            <span className="text-3xl">📊</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Project Details */}
                    <div className="col-span-5 pt-8">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                            >
                                {/* Title */}
                                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                    {currentProject.title}
                                </h3>
                                <p className="text-[#c9304a] text-sm font-medium mb-4 uppercase tracking-wider">
                                    {currentProject.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                                    {currentProject.description}
                                </p>

                                {/* TechStack Label */}
                                <div className="mb-4">
                                    <span className="text-white font-semibold text-sm uppercase tracking-wider">TechStack</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {currentProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-[#1e293b] rounded-lg text-sm text-[#94a3b8] border border-[#334155] hover:border-[#c9304a]/50 hover:text-white transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => handleLiveViewClick(currentProject.liveUrl)}
                                        className="flex items-center gap-2 px-5 py-3 bg-[#334155] rounded-lg text-white text-sm font-medium hover:bg-[#475569] transition-all duration-300 border border-[#475569]"
                                    >
                                        <ExternalLink size={16} />
                                        Live view
                                    </button>
                                    <a
                                        href={currentProject.codeUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 px-5 py-3 bg-transparent rounded-lg text-white text-sm font-medium border border-[#475569] hover:bg-[#1e293b] transition-all duration-300"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <Link
                                        href={`/projects/${currentProject.slug}`}
                                        className="flex items-center gap-2 px-5 py-3 bg-[#c9304a] rounded-lg text-white text-sm font-medium hover:bg-[#a82640] transition-all duration-300 shadow-lg shadow-[#c9304a]/20"
                                    >
                                        <BookOpen size={16} />
                                        Case study
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    {/* Title */}
                    <div className="text-center mb-10">
                        <h2>
                            <span className="text-[#c9304a] italic font-light text-xl">Recent </span>
                            <span className="text-white font-bold text-4xl tracking-tight">Work</span>
                        </h2>
                    </div>

                    {/* Horizontal Dot Indicators */}
                    <div className="flex justify-center gap-3 mb-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToProject(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-[#c9304a] scale-125 shadow-lg shadow-[#c9304a]/50'
                                    : 'bg-[#334155] hover:bg-[#475569]'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Project Card */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="bg-[#1e293b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            {/* Browser mockup */}
                            <div className="relative">
                                <div className="flex items-center gap-2 p-3 bg-[#0f172a] border-b border-white/10">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                </div>
                                <div
                                    className="h-48 flex items-center justify-center"
                                    style={{ background: `linear-gradient(135deg, ${currentProject.color1}, ${currentProject.color2})` }}
                                >
                                    <span className="text-7xl drop-shadow-2xl">{currentProject.icon}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-1">{currentProject.title}</h3>
                                <p className="text-[#c9304a] text-sm font-medium mb-4 uppercase tracking-wider">{currentProject.subtitle}</p>
                                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{currentProject.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {currentProject.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 bg-[#0f172a] rounded-lg text-xs text-[#94a3b8] border border-[#334155]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => handleLiveViewClick(currentProject.liveUrl)}
                                        className="flex items-center gap-2 px-4 py-2.5 bg-[#334155] rounded-lg text-white text-sm font-medium"
                                    >
                                        <ExternalLink size={14} /> Live view
                                    </button>
                                    <a href={currentProject.codeUrl} target="_blank" className="flex items-center gap-2 px-4 py-2.5 bg-transparent rounded-lg text-white text-sm font-medium border border-[#475569]">
                                        <Github size={14} /> Code
                                    </a>
                                    <Link href={`/projects/${currentProject.slug}`} className="flex items-center gap-2 px-4 py-2.5 bg-[#c9304a] rounded-lg text-white text-sm font-medium">
                                        <BookOpen size={14} /> Case study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Navigation Arrows */}
                    <div className="flex justify-center gap-6 mt-8">
                        <button
                            onClick={() => paginate(-1)}
                            className="w-12 h-12 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#c9304a] hover:bg-[#334155] transition-all"
                        >
                            <ChevronUp size={24} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="w-12 h-12 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#c9304a] hover:bg-[#334155] transition-all"
                        >
                            <ChevronDown size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                        onClick={() => setShowPopup(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1e293b] border border-white/10 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-[#c9304a]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ExternalLink size={32} className="text-[#c9304a]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Sorry!</h3>
                            <p className="text-[#94a3b8] mb-6">Page cannot be previewed at this time.</p>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="flex items-center gap-2 px-6 py-2.5 bg-[#c9304a] rounded-lg text-white text-sm font-medium hover:bg-[#a82640] transition-colors mx-auto"
                            >
                                <X size={14} />
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
