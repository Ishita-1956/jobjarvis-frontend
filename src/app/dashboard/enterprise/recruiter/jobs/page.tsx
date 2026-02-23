'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getRecruiterJobs, type Job } from '@/lib/enterprise-api';

export default function RecruiterJobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getRecruiterJobs();
            setJobs(data);
            setIsLoading(false);
        }
        load();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'Paused': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            case 'Closed': return 'bg-slate-700/50 text-slate-400 border-slate-600/50';
            default: return 'bg-slate-700/50 text-slate-300 border-slate-600/50';
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white">
                    My Jobs
                </motion.h1>
                <p className="text-slate-400 mt-1">Job postings assigned to you.</p>
            </div>

            {jobs.length > 0 ? (
                <div className="space-y-4">
                    {jobs.map((job, i) => (
                        <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                            className="group bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 hover:border-violet-500/20 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">{job.title}</h3>
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${getStatusColor(job.status)}`}>{job.status}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                        <span>{job.department}</span>
                                        <span>{job.location}</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white">{job.applicants}</div>
                                        <div className="text-[10px] text-slate-500 uppercase">Applicants</div>
                                    </div>
                                    <div className="text-right text-sm text-slate-500">{job.postedDate}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-800/60 flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2">No Jobs Assigned</h2>
                    <p className="text-slate-500 text-sm max-w-sm">Job postings will appear here once the owner assigns them to you.</p>
                </motion.div>
            )}
        </div>
    );
}
