'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaTimes } from "react-icons/fa";
import CustomButton from '../ui/CustomButton';
import LogoHex from '../helper/Logo';
import Logo from '../helper/Logo';

// ... (Keep your ThemeToggle component exactly as it is) ...
interface ThemeToggleProps {
    theme: string;
    toggleTheme: () => void;
    mounted: boolean;
}

const ThemeToggle = ({ theme, toggleTheme, mounted }: ThemeToggleProps) => {
    if (!mounted) return <div className="w-16 h-8" />;

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className={`
                relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer
                transition-colors duration-500 ease-in-out
                ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'}
            `}
        >
            <span
                className={`
                    absolute left-1.5 text-[14px] pointer-events-none z-20
                    transition-opacity duration-300 ease-in-out text-yellow-500
                    ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}
                `}
            >
                🌞
            </span>
            <span
                className={`
                    absolute right-1.5 text-[14px] pointer-events-none z-20
                    transition-opacity duration-300 ease-in-out text-slate-700 ml-5
                    ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}
                `}
            >
                🌙
            </span>
            <div
                className={`
                    w-6 h-6 bg-white rounded-full shadow-md z-10
                    transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
                    ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}
                `}
            />
        </button>
    );
};

// ----------------------------------------------------------------------------------

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Me", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact Me", href: "/contact" },
    ]

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        }
        setMounted(true);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            {/* 
               1. THE NAVBAR 
               It only contains the visible header strip.
               It has z-50.
            */}
            <nav
                className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out 
                ${scrolled ? "bg-white/80 dark:bg-black/80 py-4 shadow-md backdrop-blur-md" : "bg-transparent py-8"}`}
            >
                {/* Desktop Container */}
                <div className="hidden lg:grid grid-cols-3 items-center px-10 max-w-[1400px] mx-auto">
                    <div className="justify-self-start text-3xl">
                        <Logo className='w-14 h-14 font-bold' />
                    </div>
                    <div className="justify-self-center">
                        <ul className='flex gap-8 flex-wrap items-center'>
                            {navLinks.map((navLink, index) => (
                                <li key={index} className='text-[15px] whitespace-nowrap font-bold'>
                                    <Link
                                        href={navLink.href}
                                        className={`
                                            transition-colors duration-300 ease-in-out
                                            ${pathname === navLink.href
                                                ? 'text-[#FF8132]'
                                                : 'text-muted-text hover:text-[#FF8132]'}
                                        `}
                                    >
                                        {navLink.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-self-end gap-4 items-center">
                        <CustomButton
                            variant="primary"
                            rippleColor="rgba(255, 255, 255, 0.5)"
                            rippleDuration={800}
                            className="px-6 py-2 rounded-2xl"
                        >
                            <p className='text-sm font-semibold'>Hire me</p>
                        </CustomButton>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                    </div>
                </div>

                {/* Mobile Header */}
                <div className={`flex justify-between items-center px-6 lg:hidden transition-colors duration-500 ${scrolled ? '' : 'bg-black/20 dark:bg-black/40'} text-white`}>
                    <button
                        className="flex flex-col gap-[5px] p-2 focus:outline-none group"
                        onClick={toggleNavbar}
                        aria-label="Toggle Menu"
                        type="button"
                    >
                        <span className={`block w-8 h-[3px] rounded-full transition-colors duration-300 ${scrolled ? 'bg-black dark:bg-white' : 'bg-white'}`}></span>
                        <span className={`block w-4 h-[3px] rounded-full transition-colors duration-300 ${scrolled ? 'bg-black dark:bg-white' : 'bg-white'}`}></span>
                        <span className={`block w-6 h-[3px] rounded-full transition-colors duration-300 ${scrolled ? 'bg-black dark:bg-white' : 'bg-white'}`}></span>
                    </button>

                    <div className="justify-self-center">
                        <Logo className='w-14 h-14' />
                    </div>

                    <div className="justify-self-end flex items-center gap-3">
                        <div className="hidden sm:block">
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                        </div>
                        <CustomButton
                            variant="primary"
                            rippleColor="rgba(255, 255, 255, 0.5)"
                            rippleDuration={800}
                            className="px-6 py-2 rounded-2xl"
                        >
                            <p className='text-sm font-semibold'>Hire me</p>
                        </CustomButton>
                    </div>
                </div>
            </nav>

            {/* 
               2. THE BACKDROP OVERLAY
               Moved OUTSIDE the <nav>. It is now a sibling.
               z-[55] ensures it sits ON TOP of the nav (z-50).
            */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-500 lg:hidden
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* 
               3. THE SIDEBAR
               Moved OUTSIDE the <nav>. 
               z-[60] ensures it sits ON TOP of the overlay (z-55).
            */}
            <div
                className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white dark:bg-zinc-900 shadow-2xl z-[60] flex flex-col transition-transform duration-300 ease-out lg:hidden 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                    <div className='text-xl font-bold text-black dark:text-white'>Menu</div>
                    <button onClick={toggleNavbar} aria-label="Close Menu" type="button" className="p-2">
                        <FaTimes className="text-2xl text-[#FF8132]" />
                    </button>
                </div>

                <div className='flex flex-col items-center mt-10 gap-8'>
                    <ul className='flex flex-col gap-6 w-full px-8'>
                        {navLinks.map((navLink, index) => (
                            <li key={index} className='w-full'>
                                <Link
                                    href={navLink.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-xl font-medium transition-colors duration-300 ${pathname === navLink.href
                                        ? 'text-[#FF8132] font-bold'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-[#FF8132]'
                                        }`}
                                >
                                    {navLink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 sm:hidden">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar