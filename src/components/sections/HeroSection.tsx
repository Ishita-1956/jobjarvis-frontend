'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../Button';

export default function HeroSection() {
    const scrollToWhereYouStand = () => {
        const element = document.getElementById('where-you-stand');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Static gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                        >
                            Set the Role.{' '}
                            <span className="text-gradient">Jarvis Applies</span>{' '}
                            for You.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                        >
                            Stop spending hours on repetitive applications. Job Jarvis finds matching roles and applies on your behalf, 24/7. You focus on interviews, we handle the rest.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={scrollToWhereYouStand}
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                }
                            >
                                Get Started
                            </Button>
                            <Link href="/login">
                                <Button variant="secondary" size="lg">
                                    Login
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Cancel anytime
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Full control over applications
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 relative"
                    >
                        <div className="relative mx-auto max-w-5xl">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/50">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex-1 text-center text-slate-500 text-sm">Job Jarvis Dashboard</div>
                                </div>

                                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                        <div className="text-slate-400 text-sm mb-1">Applications Sent</div>
                                        <div className="text-3xl font-bold text-white">247</div>
                                        <div className="text-green-400 text-sm mt-1">+12 today</div>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                        <div className="text-slate-400 text-sm mb-1">Interviews Scheduled</div>
                                        <div className="text-3xl font-bold text-white">18</div>
                                        <div className="text-green-400 text-sm mt-1">+3 this week</div>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                                        <div className="text-slate-400 text-sm mb-1">Success Rate</div>
                                        <div className="text-3xl font-bold text-gradient">7.3%</div>
                                        <div className="text-slate-500 text-sm mt-1">Above average</div>
                                    </div>

                                    <div className="md:col-span-3 bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
                                        <div className="text-white font-medium mb-3">Recent Applications</div>
                                        <div className="space-y-2">
                                            {[
                                                { company: 'Google', role: 'Senior Frontend Engineer', status: 'Applied', time: '2m ago' },
                                                { company: 'Stripe', role: 'Full Stack Developer', status: 'Applied', time: '15m ago' },
                                                { company: 'Notion', role: 'React Developer', status: 'Interview', time: '1h ago' },
                                            ].map((job, i) => (
                                                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0">
                                                    <div>
                                                        <div className="text-white">{job.role}</div>
                                                        <div className="text-slate-500 text-sm">{job.company}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className={`text-sm ${job.status === 'Interview' ? 'text-green-400' : 'text-blue-400'}`}>{job.status}</div>
                                                        <div className="text-slate-600 text-xs">{job.time}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
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
        </>
    );
}
