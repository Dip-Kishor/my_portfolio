'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaTimes } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react'; // Adding an icon to the CTA
import CustomButton from '../ui/CustomButton';
import Logo from '../helper/Logo';

// ... (Keep ThemeToggle exactly as you have it) ...
interface ThemeToggleProps { theme: string; toggleTheme: () => void; mounted: boolean; }
const ThemeToggle = ({ theme, toggleTheme, mounted }: ThemeToggleProps) => {
    if (!mounted) return <div className="w-16 h-8" />;
    return (
        <button onClick={toggleTheme} className={`relative w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
            <div className={`w-5 h-5 bg-orange-600 rounded-full shadow-lg transform transition-transform duration-500 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`} />
        </button>
    );
};

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        setMounted(true);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Me", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* MAIN NAV CONTAINER */}
            <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-4' : 'py-8'}`}>
                <nav className={`mx-auto max-w-7xl transition-all duration-500 rounded-full border border-transparent ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 px-8 py-3 shadow-2xl' : 'bg-transparent px-4 py-0'
                    }`}>
                    <div className="flex items-center justify-between">
                        {/* 1. LOGO */}
                        <Link href="/" aria-label="Dip Kishor Regmi - Go to Homepage" className="flex items-center gap-2 group">
                            <Logo className="w-10 h-10 transition-transform group-hover:rotate-12" />
                            <span className="text-white font-black tracking-tighter text-xl hidden sm:block">DIP.</span>
                        </Link>

                        {/* 2. DESKTOP LINKS */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors group ${pathname === link.href ? 'text-orange-500' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {/* Hover Indicator (Small Dot) */}
                                    <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full transition-all ${pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`} />
                                </Link>
                            ))}
                        </div>

                        {/* 3. RIGHT ACTIONS */}
                        <div className="flex items-center gap-6">
                            {/* <div className="hidden md:block">
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                            </div> */}
                            <Link href="/contact">

                                <CustomButton
                                    variant="primary"
                                    className="hidden sm:flex px-2 py-1 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-widest items-center gap-2 transition-all hover:scale-105"
                                >
                                    Let's Talk <ArrowUpRight size={16} />
                                </CustomButton>
                            </Link>

                            {/* MOBILE HAMBURGER */}
                            <button
                                className="flex flex-col gap-1.5 lg:hidden group p-2"
                                onClick={() => setIsOpen(true)}
                            >
                                <span className="w-8 h-[2px] bg-white rounded-full transition-all group-hover:w-6" />
                                <span className="w-5 h-[2px] bg-orange-500 rounded-full transition-all group-hover:w-8" />
                                <span className="w-8 h-[2px] bg-white rounded-full transition-all group-hover:w-4" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* MOBILE SIDEBAR (Drawer Style) */}
            <div className={`fixed inset-0 z-[110] transition-all duration-700 ${isOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop with Blur */}
                <div
                    className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content */}
                <div className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-[#111] border-l border-white/5 p-10 flex flex-col transition-transform duration-500 ease-expo ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center mb-20">
                        <Logo className="w-12 h-12" />
                        <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-orange-600 transition-colors">
                            <FaTimes size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Navigation</p>
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-4xl font-black transition-all hover:pl-4 hover:text-orange-500 ${pathname === link.href ? 'text-white' : 'text-white/20'
                                    }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-6">
                        {/* <div className="flex justify-between items-center">
                            <p className="text-gray-500 text-sm italic">Mode</p>
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                         </div> */}
                        <CustomButton className="w-full py-1 rounded-2xl bg-orange-600 text-white font-bold">
                            Hire Me Today
                        </CustomButton>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;