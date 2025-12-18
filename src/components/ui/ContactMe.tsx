'use client'
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageSquare, Globe, Sparkles } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import CustomButton from '../ui/CustomButton'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative min-h-screen bg-[#111]  px-4 md:px-20 overflow-hidden">
            {/* Background Text Watermark */}
            <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-white/[0.02] uppercase select-none pointer-events-none">
                Connect
            </h2>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-3 uppercase flex items-center justify-center gap-2">
                        <Sparkles size={14} /> Get in Touch
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        Let’s Build Something <br />
                        <span className="text-white/20 italic font-light">Extraordinary.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* 1. LEFT SIDE: Contact Dashboard */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Info Tiles */}
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { 
                                    icon: <Mail className="text-orange-500" />, 
                                    label: "Email Me", 
                                    value: "dipkishor9910@gmail.com",
                                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dipkishor9910@gmail.com"
                                },
                                { 
                                    icon: <Phone className="text-orange-500" />, 
                                    label: "Call Me", 
                                    value: "+977 9761781000",
                                    href: "tel:9761781000"
                                },
                                { 
                                    icon: <MapPin className="text-orange-500" />, 
                                    label: "Location", 
                                    value: "Kathmandu, Nepal",
                                    href: "#"
                                }
                            ].map((item, i) => (
                                <a 
                                    key={i} 
                                    href={item.href}
                                    target={item.label === "Email Me" ? "_blank" : "_self"}
                                    className="group bg-[#161616] border border-white/5 p-6 rounded-[2rem] flex items-center gap-6 transition-all hover:bg-[#1a1a1a] hover:border-orange-600/30 shadow-xl"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#111] flex items-center justify-center border border-white/5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-white font-bold group-hover:text-orange-500 transition-colors">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Connect Box */}
                        <div className="bg-orange-600 p-8 rounded-[2.5rem] relative overflow-hidden group">
                            <Globe className="absolute -right-6 -bottom-6 text-white/20 w-32 h-32 rotate-12" />
                            <h4 className="text-white font-bold text-xl mb-6">Social Networks</h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: <FaInstagram />, href: "https://instagram.com/dipkishor_regmi" },
                                    { icon: <FaGithub />, href: "https://github.com/Dip-Kishor" },
                                    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/dip-kishor-regmi-9b7a6631b" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20 hover:bg-white hover:text-orange-600 transition-all shadow-lg"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. RIGHT SIDE: The Contact Form */}
                    <div className="lg:col-span-7 bg-[#161616] border border-white/5 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-4">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                                        <input 
                                            type="text" name="name" placeholder="John Doe"
                                            className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white outline-none focus:border-orange-600/50 transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                </div>
                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-4">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                                        <input 
                                            type="email" name="email" placeholder="john@example.com"
                                            className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white outline-none focus:border-orange-600/50 transition-all placeholder:text-white/10"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-4">Subject</label>
                                <input 
                                    type="text" name="subject" placeholder="Project Inquiry"
                                    className="w-full bg-[#111] border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-orange-600/50 transition-all placeholder:text-white/10"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-4">Your Message</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-5 top-6 text-gray-600 group-focus-within:text-orange-500 transition-colors" size={18} />
                                    <textarea 
                                        name="message" rows={5} placeholder="Tell me about your project..."
                                        className="w-full bg-[#111] border border-white/5 rounded-[2rem] py-5 pl-14 pr-6 text-white outline-none focus:border-orange-600/50 transition-all placeholder:text-white/10 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <CustomButton 
                                variant="primary" 
                                className="w-full py-5 rounded-[2rem] bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-orange-600/20"
                            >
                                Send Message <Send size={18} />
                            </CustomButton>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact