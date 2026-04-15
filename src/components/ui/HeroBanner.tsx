'use client'
import { useMemo } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ArrowDownRight, Download, Sparkles } from 'lucide-react'
import CustomButton from './CustomButton'

const HeroBanner = () => {
    const startDate = useMemo(() => new Date("2023-10-05"), []);

    const { years, months } = useMemo(() => {
        const now = new Date();
        const totalMonths =
            (now.getFullYear() - startDate.getFullYear()) * 12 +
            (now.getMonth() - startDate.getMonth());

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        return { years, months };
    }, [startDate]);
    return (
        <section className="relative min-h-[90vh] flex items-center bg-(--page-bg) overflow-hidden pt-0 pb-10 px-4 md:px-20">
            {/* Abstract Background Glows */}
            <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-orange-600/5 blur-[100px] rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">

                {/* LEFT CONTENT */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    {/* Available for Work Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/5 px-4 py-2 rounded-full mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available for projects</span>
                    </div>

                    <h4 className="text-gray-500 text-lg font-medium mb-2">Hello, I'm</h4>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
                        Dip Kishor <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Regmi</span>
                    </h1>

                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                        <h3 className="text-xl md:text-2xl text-white/60 font-light flex items-center gap-2 italic">
                            <Sparkles className="text-orange-500" size={20} /> Software Developer
                        </h3>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                        {/* <a href="mailto:dipkishor9910@email.com?subject=Project Inquiry">
                            <CustomButton variant="primary" className="px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold flex items-center gap-2 shadow-lg shadow-orange-600/20">
                                Hire Me <ArrowDownRight size={16} />
                            </CustomButton>
                        </a> */}
                        <a
                            href="/PDF/Dip Kishor Regmi CV.pdf"
                            download="Dip_Kishor_Regmi_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CustomButton
                                variant="secondary"
                                className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold"
                            >
                                <Download size={20} /> Download CV
                            </CustomButton>
                        </a>
                    </div>

                    {/* Socials & Experience Dashboard */}
                    <div className="flex flex-col md:flex-row items-center gap-8 border-t border-white/5 pt-10">
                        {/* Social Bar */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaInstagram />, href: "https://instagram.com/dipkishor_regmi" },
                                { icon: <FaGithub />, href: "https://github.com/Dip-Kishor" },
                                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dip-kishor-regmi-9b7a6631b/" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1a1a1a] text-gray-400 hover:text-orange-500 hover:scale-110 transition-all border border-white/5"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-white text-3xl font-black">{years}<span className="text-orange-500">+</span></h3>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Experience</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div>
                                <h3 className="text-white text-3xl font-black">7<span className="text-orange-500">+</span></h3>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Projects</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div>
                                <h3 className="text-white text-3xl font-black">5<span className="text-orange-500">+</span></h3>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Clients</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="order-1 lg:order-2 flex justify-center relative group">
                    {/* Circle Background with Glow */}
                    <div className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-[3rem] bg-[#161616] relative border border-white/5 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-2">
                        {/* Subtle inner ring */}
                        <div className="absolute inset-4 border border-dashed border-orange-600/20 rounded-[2.5rem]" />

                        {/* This is the base for the pop-out effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* The Image (Cutout) */}
                    <img
                        src="/Images/MyImg.jpeg"
                        alt="Dip Kishor Regmi"
                        className="w-[20rem] md:w-[45rem] rounded-2xl object-cover absolute bottom-0 left-1/2 -translate-x-1/2 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Tech Badge (Optional extra polish) */}
                    {/* <div className="absolute top-10 right-10 md:top-20 md:right-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl animate-bounce">
                        <p className="text-white text-xs font-bold">React / Next.js</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner