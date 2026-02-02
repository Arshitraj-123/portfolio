'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section min-h-screen bg-gradient-to-br from-[#1a1e2e] to-[#252a3e] relative overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <motion.div
                    className="text-center lg:text-left order-2 lg:order-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#f56565] text-lg font-medium mb-2 block">Hello, I am</span>
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-3 gradient-text">
                        Arshit Raj
                    </h1>
                    <p className="text-2xl text-[#a0aec0] font-medium mb-6">
                        Full Stack Developer
                    </p>
                    <p className="text-[#a0aec0] text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Passionate about creating beautiful, performant web applications
                        with modern technologies. I transform ideas into elegant digital
                        experiences that users love.
                    </p>

                    <div className="flex gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-gradient px-8 py-4 rounded-2xl text-white font-semibold flex items-center gap-2"
                        >
                            View My Work
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 rounded-2xl border-2 border-[#f56565] text-[#f56565] font-semibold hover:bg-[#f56565] hover:text-white transition-all duration-300"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>

                {/* Avatar Visual */}
                <motion.div
                    className="relative flex justify-center items-center order-1 lg:order-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {/* Floating Shapes */}
                    <div className="absolute inset-[-100px] pointer-events-none">
                        <div className="absolute w-20 h-20 bg-[#667eea]/30 rounded-full top-0 right-[20%] animate-float" />
                        <div className="absolute w-12 h-12 bg-[#f56565]/30 rounded-full bottom-[20%] left-0 animate-float" style={{ animationDelay: '2s' }} />
                        <div className="absolute w-8 h-8 bg-[#ed8936]/30 rounded-full top-[40%] right-0 animate-float" style={{ animationDelay: '4s' }} />
                    </div>

                    {/* Avatar Container */}
                    <div className="relative w-72 h-72">
                        {/* Glow */}
                        <div className="absolute inset-[-20px] bg-gradient-to-br from-[#f56565] to-[#ed8936] rounded-full blur-[40px] opacity-40 animate-pulse-glow" />

                        {/* Avatar */}
                        <div className="relative w-full h-full bg-gradient-to-br from-[#f56565] to-[#ed8936] rounded-full flex items-center justify-center shadow-2xl">
                            <span className="text-7xl font-extrabold text-white drop-shadow-lg">AR</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
