'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

export default function ContactSection() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct the mailto URL with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        // Open the user's email client with pre-filled data
        window.location.href = `mailto:rajarshit123@gmail.com?subject=${subject}&body=${body}`;

        // Clear the form and show success message
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="section bg-[#1a1e2e] py-20 min-h-screen flex items-center">
            <div className="max-w-[1000px] mx-auto px-8 w-full">
                {/* Header */}
                <div className="mb-12">
                    <h2>
                        <span className="text-[#f97316] italic font-normal text-2xl block">Get In</span>
                        <span className="text-[#f97316] font-extrabold text-5xl">Touch</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let&apos;s work together
                        </h3>
                        <p className="text-[#a0aec0] mb-8 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#252a3e] flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#f97316]" />
                                </div>
                                <a
                                    href="mailto:rajarshit123@gmail.com"
                                    className="text-white hover:text-[#f97316] transition-colors"
                                >
                                    rajarshit123@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#252a3e] flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#ec4899]" />
                                </div>
                                <span className="text-white">Panipat, Haryana</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Arshitraj-123"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-[#252a3e] flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arshit-raj-938197339"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-[#252a3e] flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>

                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12 bg-[#252a3e] rounded-2xl"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-[#a0aec0] mb-6">I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[#f97316] hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-[#a0aec0] text-sm mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full bg-[#252a3e] rounded-lg px-4 py-3 text-white placeholder:text-[#4a5568] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 transition-all"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-[#a0aec0] text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full bg-[#252a3e] rounded-lg px-4 py-3 text-white placeholder:text-[#4a5568] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 transition-all"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-[#a0aec0] text-sm mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={4}
                                        required
                                        className="w-full bg-[#252a3e] rounded-lg px-4 py-3 text-white placeholder:text-[#4a5568] focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#f97316] to-[#ec4899] rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
