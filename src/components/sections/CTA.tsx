'use client';

import { motion } from 'framer-motion';
import Button from '../Button';

export default function CTA() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />

            {/* Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="text-center">
                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 mb-8"
                    >
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Ready to Transform Your{' '}
                        <span className="text-gradient">Job Search</span>?
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                    >
                        Join thousands of job seekers who've reclaimed their time and landed their dream roles with Job Jarvis.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="min-w-[240px]"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            }
                        >
                            Let Jarvis Apply For You
                        </Button>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-slate-500 text-sm"
                    >
                        Free to start • No credit card required • Cancel anytime
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
