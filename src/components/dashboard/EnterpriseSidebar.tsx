'use client';

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import JobJarvisLogo from '../JobJarvisLogo';
import { logout, User } from '@/lib/auth';

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
    badge?: number;
    subItems?: NavItem[];
}

const navItems: NavItem[] = [
    {
        label: 'Overview',
        href: '/dashboard/enterprise',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        ),
    },
    {
        label: 'Recruiters',
        href: '/dashboard/enterprise/recruiters',
        badge: 5,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        label: 'Candidates',
        href: '/dashboard/enterprise/candidates',
        badge: 128,
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        label: 'Jobs',
        href: '/dashboard/enterprise/jobs',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: 'Analytics',
        href: '/dashboard/enterprise/analytics',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        label: 'Settings',
        href: '/dashboard/enterprise/settings',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

interface EnterpriseSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    user?: User | null;
}

export default function EnterpriseSidebar({ isOpen, onClose, user }: EnterpriseSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const sidebarRef = useRef<HTMLElement>(null);

    // Close sidebar on outside click (mobile only)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`
                    fixed top-0 left-0 bottom-0 w-[260px] z-50
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:sticky lg:top-0 lg:z-auto lg:flex-shrink-0 lg:h-screen
                `}
            >
                {/* Premium Enterprise Glass background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-[4px_0_24px_-2px_rgba(0,0,0,0.5)] border-r border-slate-800/60" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

                <div className="relative flex flex-col h-full z-10">
                    {/* Logo & Enterprise Badge */}
                    <div className="p-6 pb-6 border-b border-slate-800/40 bg-slate-900/20 backdrop-blur-sm">
                        <Link href="/dashboard/enterprise" className="flex flex-col gap-1 group" onClick={onClose}>
                            <JobJarvisLogo size="md" />
                            <div className="flex items-center gap-2 mt-2 ml-1">
                                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded border border-blue-500/20">
                                    Enterprise
                                </span>
                                <span className="text-[10px] text-slate-500">v2.0</span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
                        <div className="space-y-1">
                            <h3 className="px-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                                Managment
                            </h3>
                            {navItems.map((item) => {
                                const isActive = pathname === item.href ||
                                    (item.href !== '/dashboard/enterprise' && pathname.startsWith(item.href));

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onClose}
                                        className="relative block mb-1"
                                    >
                                        <motion.div
                                            whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`
                                                flex items-center gap-3.5 px-4 py-3 rounded-lg transition-all duration-300
                                                group border border-transparent
                                                ${isActive
                                                    ? 'text-white border-blue-500/20 bg-blue-500/10 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                                                    : 'text-slate-400 hover:text-white hover:border-slate-700/50'
                                                }
                                            `}
                                        >
                                            {/* Icon with glow effect when active */}
                                            <span
                                                className={`
                                                    relative z-10 transition-colors duration-300
                                                    ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400'}
                                                `}
                                            >
                                                {item.icon}
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeIconGlow"
                                                        className="absolute inset-0 bg-blue-400/30 blur-md rounded-full"
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </span>

                                            {/* Label */}
                                            <span className="relative z-10 font-medium text-[14px]">{item.label}</span>

                                            {/* Badge */}
                                            {item.badge && (
                                                <span
                                                    className={`
                                                        ml-auto relative z-10 px-2 py-0.5 text-[10px] font-bold rounded-full border
                                                        transition-colors duration-300
                                                        ${isActive
                                                            ? 'bg-blue-500 text-white border-blue-400'
                                                            : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:border-blue-500/30 group-hover:text-blue-400'
                                                        }
                                                    `}
                                                >
                                                    {item.badge}
                                                </span>
                                            )}

                                            {/* Active Indicator (Right Border) */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-l-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                                />
                                            )}
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* User Profile Summary */}
                    <div className="p-4 mt-auto border-t border-slate-800/60 bg-slate-900/30">
                        <div className="flex items-center gap-3 px-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                                {user?.first_name?.[0]?.toUpperCase() || 'O'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-white truncate">
                                    {user ? `${user.first_name} ${user.last_name}` : 'Owner Admin'}
                                </h4>
                                <p className="text-xs text-slate-400 truncate">
                                    {user?.email || 'owner@enterprise.com'}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-red-500/10 border border-slate-700/50 hover:border-red-500/30 transition-all text-xs font-medium uppercase tracking-wide group"
                        >
                            <svg className="w-4 h-4 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
