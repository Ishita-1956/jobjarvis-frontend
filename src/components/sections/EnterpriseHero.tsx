'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../Button';
import AnimatedBackground from '../AnimatedBackground';

export default function EnterpriseHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <AnimatedBackground />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Your Team.{' '}
                        <span className="text-gradient-violet">Your Candidates.</span>{' '}
                        <br className="hidden md:block" />
                        One Platform.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                    >
                        Build your recruitment team, manage candidates effortlessly, and let AI power their job search.
                        Perfect for agencies that find jobs for candidates or hire for other companies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/signup/enterprise">
                            <Button
                                variant="primary"
                                size="lg"
                                className="!bg-gradient-to-r !from-violet-500 !to-purple-600 hover:!shadow-violet-500/30"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                }
                            >
                                Register Your Agency
                            </Button>
                        </Link>
                        <Button variant="secondary" size="lg">
                            See How It Works
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Unlimited Recruiters
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            5 Candidates per Recruiter
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            AI-Powered Matching
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual - Hierarchy Illustration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 relative"
                >
                    <div className="relative mx-auto max-w-4xl">
                        {/* Hierarchy Visualization */}
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl shadow-2xl shadow-violet-500/10 p-8">
                            {/* Top Bar */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/50 -mx-8 -mt-8 mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 text-center text-slate-500 text-sm">How It Works</div>
                            </div>

                            {/* Hierarchy Flow */}
                            <div className="flex flex-col items-center gap-6">
                                {/* Company/Admin */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 px-4 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-sm font-medium">
                                        Company Admin
                                    </div>
                                    <div className="mt-2 text-slate-500 text-xs">Signs up & manages team</div>
                                </motion.div>

                                {/* Arrow Down */}
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-violet-500 to-purple-500" />
                                    <svg className="w-4 h-4 text-purple-500 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 16l-6-6h12l-6 6z" />
                                    </svg>
                                </motion.div>

                                {/* Recruiters Row */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center gap-4 sm:gap-8"
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500/80 to-indigo-500/80 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="mt-2 px-3 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium">
                                                Recruiter
                                            </div>
                                        </div>
                                    ))}
                                    <div className="text-slate-600 text-sm hidden sm:block">+ more</div>
                                </motion.div>

                                {/* Arrow Down */}
                                <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    transition={{ delay: 0.9 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-cyan-500" />
                                    <svg className="w-4 h-4 text-cyan-500 -mt-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 16l-6-6h12l-6 6z" />
                                    </svg>
                                </motion.div>

                                {/* Candidates Row */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.0 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500/70 to-blue-500/70 flex items-center justify-center shadow-md shadow-cyan-500/20">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                                        5 Candidates per Recruiter
                                    </div>
                                    <div className="mt-2 text-slate-500 text-xs">Same AI-powered jobseeker experience</div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-3 bg-slate-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
