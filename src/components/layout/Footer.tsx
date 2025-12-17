'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone } from 'react-icons/fa'
import Logo from '../helper/Logo'

const Footer = () => {
    const pathname = usePathname()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Me", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact Me", href: "/contact" },
    ]
    return (
        <>

            <div className='bg-cards mt-20 py-2'>
                <div className="justify-self-center my-5">
                    <Logo className='w-16 h-16'/>
                </div>
                <div className="justify-self-center">
                    <ul className='flex gap-8 flex-wrap items-center justify-center'>
                        {navLinks.map((navLink, index) => (
                            <li key={index} className='text-[15px] items-center  justify-centerfont-bold whitespace-nowrap'>
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
                <div className="flex items-center justify-self-center md:justify-start gap-4 my-6">
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                    >
                        <FaInstagram size={18} />
                    </a>

                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-button hover:text-white transition"
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>
                <div className="flex items-center justify-self-center md:justify-start gap-4 my-6">
                    <div className="flex items-center gap-2">
                        <a
                            href="mailto:dipkishor9910@gmail.com"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-[#FF8132] hover:border-[#FF8132] hover:text-white transition duration-300"
                        >
                            <FaEnvelope size={14} />
                        </a>
                        <span>dipkishor9910@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href="tel:9761781000"
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-muted-text text-muted-text hover:bg-[#FF8132] hover:border-[#FF8132] hover:text-white transition duration-300"
                        >
                            <FaPhone size={14} />
                        </a>
                        <span>9761781000</span>
                    </div>
                </div>
                <hr className="border-gray-600 w-[60%] mx-auto mb-4 opacity-50" />
                <div className="flex items-center justify-center h-[5vh] text-text">
                    © 2025 Dip Kishor Regmi. All rights reserved.
                </div>
            </div>
        </>
    )
}

export default Footer