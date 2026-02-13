'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Software Engineer',
        company: 'Now at Google',
        image: null,
        quote: 'I was spending 4-5 hours a day on applications. With Jarvis, I got 3x more interviews in half the time. Landed my dream job at Google!',
        result: '892 applications → 47 interviews',
    },
    {
        name: 'Marcus Johnson',
        role: 'Product Manager',
        company: 'Now at Stripe',
        image: null,
        quote: 'The personalized cover letters are incredible. Recruiters actually mentioned how tailored my applications were.',
        result: '456 applications → 28 interviews',
    },
    {
        name: 'Emily Rodriguez',
        role: 'UX Designer',
        company: 'Now at Figma',
        image: null,
        quote: 'I was skeptical at first, but Jarvis found opportunities I would have never discovered on my own. Game changer.',
        result: '312 applications → 19 interviews',
    },
];

export default function IndividualCTA() {
    return (
        <SectionWrapper className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            {/* Testimonials */}
            <div className="relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                        Success Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Join Thousands of{' '}
                        <span className="text-gradient-blue">Successful Job Seekers</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all"
                        >
                            {/* Quote */}
                            <p className="text-slate-300 leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Result Badge */}
                            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                                {testimonial.result}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="text-white font-medium">{testimonial.name}</div>
                                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                                    <div className="text-blue-400 text-sm">{testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Ready to Let Jarvis{' '}
                            <span className="text-gradient-blue">Work for You</span>?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto"
                        >
                            Start your free trial today. No credit card required.
                            Get 50 free applications and see the difference AI-powered job hunting makes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/login/individual">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    icon={
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    }
                                >
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Button variant="secondary" size="lg">
                                Schedule Demo
                            </Button>
                        </motion.div>

                        {/* Trust Lines */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Free 50 applications
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                No credit card
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Cancel anytime
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
