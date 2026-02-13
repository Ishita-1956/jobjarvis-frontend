'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const steps = [
    {
        number: '01',
        title: 'Register Your Agency',
        description: 'Sign up your staffing agency or company. You become the admin with full control over your organization\'s account.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        badge: 'Admin',
        badgeColor: 'violet',
    },
    {
        number: '02',
        title: 'Build Your Team',
        description: 'Invite recruiters to join your organization. Each recruiter gets their own workspace to manage candidates independently.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
        ),
        badge: 'Recruiters',
        badgeColor: 'purple',
    },
    {
        number: '03',
        title: 'Add Candidates',
        description: 'Each recruiter can add up to 5 candidates. This focused approach ensures quality attention for every job seeker.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        badge: '5 Max',
        badgeColor: 'cyan',
    },
    {
        number: '04',
        title: 'AI Takes Over',
        description: 'Candidates experience the full Jarvis jobseeker flow. AI handles job matching, applications, interview prep, and more.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        badge: 'Automated',
        badgeColor: 'green',
    },
];

export default function EnterpriseHowItWorks() {
    return (
        <SectionWrapper id="how-it-works" className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Section Header */}
            <div className="text-center mb-10 relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4"
                >
                    How It Works
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    From Signup to{' '}
                    <span className="text-gradient-violet">Placement</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 text-lg max-w-2xl mx-auto"
                >
                    A simple, streamlined process to get your agency up and running in minutes.
                </motion.p>
            </div>

            {/* Steps - Modern Card Layout */}
            <div className="relative z-10 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Connection Line (Hidden on Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[60%] w-[50%] h-px bg-gradient-to-r from-violet-500/30 to-purple-500/30" />
                            )}

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all h-full">
                                {/* Step Number & Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-violet-400/50 text-4xl font-bold">{step.number}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${step.badgeColor === 'violet' ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' :
                                        step.badgeColor === 'purple' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                                            step.badgeColor === 'cyan' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                                                'bg-green-500/20 text-green-400 border border-green-500/30'
                                        }`}>
                                        {step.badge}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Flow Visualization */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl border border-slate-800/50 p-8"
            >
                <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">The Complete Flow</h3>
                    <p className="text-slate-400 text-sm">From your agency to successful placements</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Agency */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-slate-900/50 rounded-xl px-4 py-3 border border-violet-500/30"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-white font-medium text-sm">Your Agency</div>
                            <div className="text-slate-500 text-xs">Admin access</div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>

                    {/* Recruiters */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-slate-900/50 rounded-xl px-4 py-3 border border-purple-500/30"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-white font-medium text-sm">Recruiters</div>
                            <div className="text-slate-500 text-xs">Unlimited</div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>

                    {/* Candidates */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-slate-900/50 rounded-xl px-4 py-3 border border-cyan-500/30"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-white font-medium text-sm">Candidates</div>
                            <div className="text-slate-500 text-xs">5 per recruiter</div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>

                    {/* Jobs */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 bg-slate-900/50 rounded-xl px-4 py-3 border border-green-500/30"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-white font-medium text-sm">Dream Jobs</div>
                            <div className="text-slate-500 text-xs">AI-matched</div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
            >
                {[
                    { value: '2 min', label: 'Setup Time' },
                    { value: '∞', label: 'Team Members' },
                    { value: '5', label: 'Candidates/Recruiter' },
                    { value: '24/7', label: 'AI Assistance' },
                ].map((stat) => (
                    <div key={stat.label} className="text-center bg-slate-900/30 rounded-xl p-6 border border-slate-800/50">
                        <div className="text-3xl md:text-4xl font-bold text-gradient-violet mb-2">{stat.value}</div>
                        <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
