'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'TechStack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isProjectPage = pathname?.startsWith('/projects');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    if (isProjectPage) return null;

    return (
        <>
            {/* Desktop Sidebar — hidden below lg */}
            <nav className="hidden lg:flex fixed left-0 top-0 w-44 h-screen bg-transparent flex-col justify-center pl-8 z-50">
                {/* Brand Identity */}
                <div className="absolute top-12 left-8 flex flex-col items-start gap-2">
                    <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f56565] to-[#ed8936] flex items-center justify-center shadow-lg shadow-[#f56565]/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xl font-black text-white italic tracking-tighter">AR</span>
                    </motion.div>
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-white font-bold text-sm tracking-wide uppercase">Arshit</span>
                        <span className="text-[#f56565] font-black text-sm tracking-wide uppercase -mt-1">Raj</span>
                    </motion.div>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[#c9304a]" />

                    {/* Navigation Items */}
                    <div className="flex flex-col gap-16">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-4 group cursor-pointer relative"
                                >
                                    {/* Circle Node */}
                                    <motion.div
                                        className="relative z-10 flex items-center justify-center w-6 h-6"
                                        animate={{ scale: isActive ? 1.3 : 1 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        {isActive ? (
                                            <div className="w-6 h-6 rounded-full bg-[#c9304a] shadow-[0_0_20px_rgba(201,48,74,0.6)]" />
                                        ) : (
                                            <div className="w-6 h-6 rounded-full border-2 border-[#c9304a] bg-[#1a1e2e] group-hover:bg-[#c9304a]/20 transition-colors" />
                                        )}
                                    </motion.div>

                                    {/* Label */}
                                    <span className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#718096] group-hover:text-white'}`}>
                                        {item.label}
                                    </span>

                                    {/* Active indicator line */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute left-[28px] w-4 h-[2px] bg-[#c9304a]"
                                            layoutId="activeBar"
                                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Top Bar — visible below lg */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1a1e2e]/95 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f56565] to-[#ed8936] flex items-center justify-center">
                            <span className="text-sm font-black text-white italic">AR</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-xs tracking-wide uppercase">Arshit</span>
                            <span className="text-[#f56565] font-black text-xs tracking-wide uppercase -mt-0.5">Raj</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="w-10 h-10 rounded-lg bg-[#252a3e] flex items-center justify-center text-white"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-[#1a1e2e]/98 border-b border-white/5"
                        >
                            <div className="flex flex-col px-4 py-2 gap-1">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                                isActive
                                                    ? 'bg-[#c9304a]/20 text-white'
                                                    : 'text-[#718096] hover:text-white hover:bg-[#252a3e]'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#c9304a]' : 'bg-[#718096]'}`} />
                                                {item.label}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
