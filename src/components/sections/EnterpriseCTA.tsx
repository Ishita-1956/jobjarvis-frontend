'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';

const testimonials = [
    {
        company: 'TalentBridge Agency',
        industry: 'Staffing Agency',
        logo: 'TB',
        quote: 'We can now manage all our recruiters and their candidates in one place. The 5-candidate limit per recruiter actually improved our quality of service.',
        author: 'Sarah Mitchell',
        role: 'Agency Director',
        results: [
            { metric: 'Placements', value: '↑ 85%' },
            { metric: 'Client Satisfaction', value: '↑ 40%' },
        ],
    },
    {
        company: 'RecruitFirst',
        industry: 'HR Consulting',
        logo: 'RF',
        quote: 'Our team of 15 recruiters now handles 75 candidates efficiently. The AI job matching for candidates is a game-changer.',
        author: 'James Chen',
        role: 'Operations Manager',
        results: [
            { metric: 'Time Saved', value: '60%' },
            { metric: 'Candidate Success', value: '↑ 55%' },
        ],
    },
    {
        company: 'CareerHub Partners',
        industry: 'Executive Search',
        logo: 'CH',
        quote: 'The platform made scaling our agency effortless. Adding new recruiters takes seconds, and candidates love the AI experience.',
        author: 'Emily Rodriguez',
        role: 'Founder & CEO',
        results: [
            { metric: 'Team Growth', value: '3x' },
            { metric: 'Revenue', value: '↑ 120%' },
        ],
    },
];

const pricingTiers = [
    {
        name: 'Starter',
        price: '$99',
        period: '/month',
        description: 'For small agencies',
        features: [
            'Up to 5 recruiters',
            '25 total candidates',
            'Admin dashboard',
            'Basic analytics',
            'Email support',
        ],
    },
    {
        name: 'Professional',
        price: '$249',
        period: '/month',
        description: 'For growing agencies',
        features: [
            'Up to 20 recruiters',
            '100 total candidates',
            'Advanced analytics',
            'Priority support',
            'Custom branding',
            'API access',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations',
        features: [
            'Unlimited recruiters',
            'Unlimited candidates',
            'Dedicated success manager',
            'Custom integrations',
            'SLA guarantee',
            'White-label options',
        ],
    },
];

const faqs = [
    {
        question: 'How does the 5 candidates per recruiter limit work?',
        answer: 'Each recruiter on your team can actively manage up to 5 candidates at a time. Once a candidate is successfully placed or removed, the slot opens up for a new candidate. This ensures quality focus for each job seeker.',
    },
    {
        question: 'What experience do candidates get?',
        answer: 'Candidates added by your recruiters get the full Jarvis jobseeker experience — AI-powered job matching, automated applications, interview preparation, and career guidance. They see your agency branding throughout.',
    },
    {
        question: 'Can I add unlimited recruiters?',
        answer: 'Yes, on our Professional and Enterprise plans, you can scale your team as needed. Each recruiter gets their own workspace while you maintain full visibility as the admin.',
    },
    {
        question: 'How is billing handled?',
        answer: 'Billing is simple and transparent. You pay a flat monthly fee based on your plan tier. No per-candidate or per-placement fees.',
    },
];

export default function EnterpriseCTA() {
    return (
        <SectionWrapper className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-500/10 rounded-full blur-[150px]" />
            </div>

            {/* Testimonials */}
            <div className="relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                        Success Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Loved by{' '}
                        <span className="text-gradient-violet">Agencies Worldwide</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
                        >
                            {/* Company Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.logo}
                                </div>
                                <div>
                                    <div className="text-white font-medium">{testimonial.company}</div>
                                    <div className="text-slate-500 text-sm">{testimonial.industry}</div>
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Results */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {testimonial.results.map((result) => (
                                    <div key={result.metric} className="bg-violet-500/10 rounded-lg p-3 text-center">
                                        <div className="text-lg font-bold text-violet-400">{result.value}</div>
                                        <div className="text-slate-500 text-xs">{result.metric}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Author */}
                            <div className="text-sm">
                                <span className="text-white">{testimonial.author}</span>
                                <span className="text-slate-500"> · {testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pricing */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mb-20"
            >
                <div className="text-center mb-12">
                    <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                        Simple Pricing
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Plans for Every{' '}
                        <span className="text-gradient-violet">Agency Size</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        No hidden fees. No per-placement charges. Just straightforward pricing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border ${tier.popular ? 'border-violet-500/50' : 'border-slate-800/50'}`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-white mb-1">{tier.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{tier.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    {tier.period && <span className="text-slate-400 text-sm">{tier.period}</span>}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-slate-400 text-sm">
                                        <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href={tier.price === 'Custom' ? '#' : '/signup/enterprise'} className="w-full">
                                <Button
                                    variant={tier.popular ? 'primary' : 'secondary'}
                                    className={`w-full ${tier.popular ? '!bg-gradient-to-r !from-violet-500 !to-purple-600' : ''}`}
                                >
                                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mb-20"
            >
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-gradient-violet">Questions</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto grid gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-5"
                        >
                            <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-purple-500/10" />

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Ready to{' '}
                            <span className="text-gradient-violet">Scale</span> Your Agency?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto"
                        >
                            Join hundreds of staffing agencies already using Jarvis to manage their teams and place candidates faster.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
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
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Button variant="secondary" size="lg">
                                Talk to Sales
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-slate-500 text-sm"
                        >
                            No credit card required · 14-day free trial · Cancel anytime
                        </motion.p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
