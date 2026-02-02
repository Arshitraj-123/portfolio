'use client';

import { motion } from 'framer-motion';

const techStack = [
    // Row 1
    { name: 'JavaScript', icon: 'JS', bg: '#f7df1e', textColor: '#000', iconColor: '#000' },
    { name: 'Python', icon: '🐍', bg: '#4a5568', textColor: '#fff', iconColor: '#3b82f6' },
    { name: 'TypeScript', icon: 'TS', bg: '#3178c6', textColor: '#fff', iconColor: '#fff' },
    { name: 'Rust', icon: '🦀', bg: '#ea580c', textColor: '#fff', iconColor: '#fff' },
    { name: 'React', icon: '⚛️', bg: '#374151', textColor: '#fff', iconColor: '#61dafb' },

    // Row 2
    { name: 'Angular', icon: 'A', bg: '#dc2626', textColor: '#fff', iconColor: '#fff' },
    { name: 'Vue', icon: 'V', bg: '#3b82f6', textColor: '#fff', iconColor: '#42b883' },
    { name: 'Gatsby', icon: 'G', bg: '#f97316', textColor: '#fff', iconColor: '#fff' },
    { name: 'Tailwind', icon: '≋', bg: '#0d9488', textColor: '#fff', iconColor: '#38bdf8' },

    // Row 3
    { name: 'SASS', icon: 'Sass', bg: '#ec4899', textColor: '#fff', iconColor: '#fff', isText: true },
    { name: 'Styled Components', icon: '💅', bg: '#fde68a', textColor: '#000', iconColor: '#db7093' },
    { name: 'HTML5', icon: '5', bg: '#22c55e', textColor: '#fff', iconColor: '#fff' },
    { name: 'CSS3', icon: '3', bg: '#f97316', textColor: '#fff', iconColor: '#fff' },
    { name: 'Flask', icon: '🌙', bg: '#115e59', textColor: '#fff', iconColor: '#fff' },

    // Row 4
    { name: 'Node.js', icon: '⬢', bg: '#374151', textColor: '#fff', iconColor: '#68a063' },
    { name: 'Express', icon: 'Ex', bg: '#6b7280', textColor: '#fff', iconColor: '#fff' },
    { name: 'MongoDB', icon: '🍃', bg: '#16a34a', textColor: '#fff', iconColor: '#fff' },
    { name: 'Firebase', icon: '🔥', bg: '#ea580c', textColor: '#fff', iconColor: '#fff' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

export default function TechStackSection() {
    return (
        <section id="techstack" className="section bg-[#1a1e2e] py-20 min-h-screen flex items-center">
            <div className="max-w-[900px] mx-auto px-8 w-full">
                {/* Grid */}
                <motion.div
                    className="grid grid-cols-5 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-105 transition-transform shadow-lg"
                            style={{ backgroundColor: tech.bg }}
                            whileHover={{ y: -5 }}
                        >
                            {tech.isText ? (
                                <span
                                    className="text-3xl font-bold italic"
                                    style={{ color: tech.iconColor }}
                                >
                                    {tech.icon}
                                </span>
                            ) : tech.icon.length <= 2 ? (
                                <span
                                    className="text-4xl font-black"
                                    style={{ color: tech.iconColor }}
                                >
                                    {tech.icon}
                                </span>
                            ) : (
                                <span className="text-4xl">{tech.icon}</span>
                            )}
                            <span
                                className="text-sm font-medium text-center px-2"
                                style={{ color: tech.textColor }}
                            >
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
