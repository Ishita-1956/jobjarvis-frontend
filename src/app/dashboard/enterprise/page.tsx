'use client';

import { motion } from 'framer-motion';

export default function EnterpriseDashboard() {
    // Mock Data for Owner View
    const stats = [
        { label: 'Total Recruiters', value: '12', change: '+2 this month', trend: 'up' },
        { label: 'Active Jobs', value: '45', change: '+5 this week', trend: 'up' },
        { label: 'Total Candidates', value: '1,248', change: '+12% vs last month', trend: 'up' },
        { label: 'Hiring Efficiency', value: '88%', change: '+3% improvement', trend: 'up' },
    ];

    const recentActivity = [
        { id: 1, user: 'Sarah Miller', action: 'hired', target: 'John Doe', role: 'Senior React Dev', time: '2 hours ago' },
        { id: 2, user: 'Mike Ross', action: 'interviewed', target: 'Jane Smith', role: 'Product Manager', time: '4 hours ago' },
        { id: 3, user: 'Sarah Miller', action: 'posted', target: 'UX Designer', role: null, time: '5 hours ago' },
        { id: 4, user: 'David Clark', action: 'rejected', target: 'Alex Brown', role: 'Backend Dev', time: '1 day ago' },
    ];

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
                >
                    Owner Overview
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-400 mt-1"
                >
                    Monitor your recruitment team's performance and pipeline.
                </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-blue-500/20 transition-colors group"
                    >
                        <h3 className="text-slate-400 text-sm font-medium mb-2">{stat.label}</h3>
                        <div className="flex items-end justify-between">
                            <span className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {stat.value}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`}>
                                {stat.change}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart Area Example (Placement vs Time) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 min-h-[400px]"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-white">Recruitment Performance</h2>
                        <select className="bg-slate-950 border border-slate-800 text-slate-400 text-sm rounded-lg px-3 py-1 outline-none focus:border-blue-500/50">
                            <option>Last 30 Days</option>
                            <option>Last Quarter</option>
                            <option>Year to Date</option>
                        </select>
                    </div>

                    {/* Mock Chart Visual */}
                    <div className="w-full h-64 flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((height, i) => (
                            <div key={i} className="w-full bg-slate-800/50 rounded-t-lg relative group overflow-hidden">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-500">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </motion.div>

                {/* Recent Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60"
                >
                    <h2 className="text-lg font-semibold text-white mb-6">Team Activity</h2>
                    <div className="space-y-6">
                        {recentActivity.map((item, i) => (
                            <div key={item.id} className="relative pl-6 pb-2 border-l border-slate-800 last:border-0">
                                <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-slate-950 ${item.action === 'hired' ? 'bg-emerald-500' :
                                        item.action === 'rejected' ? 'bg-red-500' :
                                            item.action === 'posted' ? 'bg-blue-500' : 'bg-amber-500'
                                    }`} />
                                <div className="text-sm">
                                    <span className="font-semibold text-white">{item.user}</span>
                                    <span className="text-slate-400"> {item.action} </span>
                                    <span className="font-medium text-white">{item.target}</span>
                                </div>
                                {item.role && (
                                    <div className="text-xs text-slate-500 mt-1">
                                        For role: <span className="text-blue-400">{item.role}</span>
                                    </div>
                                )}
                                <div className="text-[10px] text-slate-600 mt-2">{item.time}</div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full mt-6 py-2 text-sm text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 rounded-lg transition-colors">
                        View All Activity
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
