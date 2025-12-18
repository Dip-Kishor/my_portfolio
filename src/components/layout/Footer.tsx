'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react'
import Logo from '../helper/Logo'

const Footer = () => {
    const pathname = usePathname()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <footer className="bg-[#0a0a0a] pt-20 pb-10 px-4 md:px-20 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

            {/* 1. TOP SECTION: Final CTA */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4">
                        READY TO <span className="text-orange-500 italic">START?</span>
                    </h2>
                    <p className="text-gray-500 max-w-sm">Let’s transform your vision into a high-performance digital reality.</p>
                </div>
                <Link
                    href="/contact"
                    className="group bg-white text-black px-8 py-4 rounded-full font-black flex items-center gap-3 hover:bg-orange-600 hover:text-white transition-all duration-500"
                >
                    GET IN TOUCH <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>

            {/* 2. MIDDLE SECTION: The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                {/* Brand Info */}
                <div className="md:col-span-5">
                    <Logo className="w-16 h-16 mb-6" />
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                        Specializing in high-end .NET architecture and immersive React interfaces. Building the future of the web, one pixel at a time.
                    </p>
                    {/* Socials - Matching the Hero style */}
                    <div className="flex gap-3">
                        {[
                            { icon: <FaInstagram />, href: "https://instagram.com/dipkishor_regmi" },
                            { icon: <FaGithub />, href: "https://github.com/Dip-Kishor" },
                            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dip-kishor-regmi-9b7a6631b" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#161616] text-gray-500 border border-white/5 hover:border-orange-600 hover:text-white transition-all"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-3">
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-sm transition-colors ${pathname === link.href ? 'text-orange-500' : 'text-gray-500 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-4">
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
                    <div className="space-y-6">
                        {/* Desktop Gmail Tab behavior from your original code */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dipkishor9910@gmail.com"
                            target="_blank"
                            className="md:flex hidden  items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center border border-white/5 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Email Me</p>
                                <p className="text-gray-300 text-sm">dipkishor9910@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href="mailto:dipkishor9910@gmail.com"
                            className="md:hidden flex  items-center gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center border border-white/5 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Email Me</p>
                                <p className="text-gray-300 text-sm">dipkishor9910@gmail.com</p>
                            </div>
                        </a>
                        <a href="tel:9761781000" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center border border-white/5 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                <Phone size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Call Me</p>
                                <p className="text-gray-300 text-sm">+977 9761781000</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center border border-white/5 text-orange-500">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Location</p>
                                <p className="text-gray-300 text-sm">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM BAR */}
            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
                    © 2025 Dip Kishor Regmi. All Rights Reserved.
                </p>
                {/* <div className="flex gap-8">
                    <span className="text-gray-600 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                    <span className="text-gray-600 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;