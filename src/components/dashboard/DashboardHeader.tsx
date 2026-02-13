'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { User } from '@/lib/auth';

interface DashboardHeaderProps {
    user: User | null;
    onMenuClick: () => void;
}

export default function DashboardHeader({ user, onMenuClick }: DashboardHeaderProps) {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const notificationsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setIsNotificationsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const notifications = [
        { id: 1, icon: '🎯', title: 'Perfect match found!', message: 'A 98% match job at Stripe', time: '2m ago', unread: true },
        { id: 2, icon: '👀', title: 'Profile viewed', message: 'A recruiter from Google viewed your profile', time: '1h ago', unread: true },
        { id: 3, icon: '📅', title: 'Interview reminder', message: 'Amazon interview tomorrow at 2 PM', time: '3h ago', unread: false },
        { id: 4, icon: '✨', title: 'Application success', message: 'Applied to 5 jobs while you slept', time: '8h ago', unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <header className="sticky top-0 z-40">
            {/* Blur backdrop */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50" />

            <div className="relative flex items-center justify-between h-16 px-4 lg:px-6">
                {/* Left Section — mobile menu only */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-2 ml-auto">
                    {/* Notifications */}
                    <div ref={notificationsRef} className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="relative p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            {unreadCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-1.5 right-1.5 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-lg shadow-blue-500/50"
                                >
                                    {unreadCount}
                                </motion.span>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {isNotificationsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-xl shadow-black/50 overflow-hidden"
                                >
                                    <div className="p-4 border-b border-slate-800/50 flex items-center justify-between">
                                        <h3 className="text-white font-semibold">Notifications</h3>
                                        <span className="text-xs text-blue-400 cursor-pointer hover:text-blue-300">Mark all read</span>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.map((notification, index) => (
                                            <motion.div
                                                key={notification.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className={`p-4 border-b border-slate-800/30 hover:bg-slate-800/30 transition-colors cursor-pointer ${notification.unread ? 'bg-blue-500/5' : ''
                                                    }`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xl flex-shrink-0">{notification.icon}</span>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-white text-sm font-medium">{notification.title}</p>
                                                        <p className="text-slate-400 text-xs mt-0.5 truncate">{notification.message}</p>
                                                        <p className="text-slate-500 text-xs mt-1">{notification.time}</p>
                                                    </div>
                                                    {notification.unread && (
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5" />
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="p-3 border-t border-slate-800/50">
                                        <button className="w-full py-2 text-center text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                            View all notifications
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Profile – direct link to profile page */}
                    <Link
                        href="/dashboard/profile"
                        className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-violet-500/30">
                                {user?.first_name?.[0] || 'U'}
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950" />
                        </div>
                        <div className="hidden lg:block text-left">
                            <p className="text-white text-sm font-medium leading-tight">
                                {user?.first_name || 'User'}
                            </p>
                            <p className="text-slate-500 text-xs leading-tight">Jobseeker</p>
                        </div>
                        <svg className="w-4 h-4 text-slate-500 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
