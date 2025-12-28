'use client'
import React, { useState } from 'react'
import { Mail, Phone, MapPin, User, MessageSquare, Globe, Sparkles, Truck, AlertTriangle, ArrowRight } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Toast, { ToastType } from '@/components/helper/Toast'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<string[]>([]);

    const [toast, setToast] = useState<{ show: boolean, msg: string, type: ToastType }>({
        show: false, msg: '', type: 'neutral'
    });

    const showToast = (msg: string, type: ToastType) => {
        setToast({ show: true, msg, type });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Remove error for this field if user starts typing
        if (value.trim() !== "") {
            setErrors(prev => prev.filter(err => err !== name));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: string[] = [];
        if (!formData.name) newErrors.push('name');
        if (!formData.email) newErrors.push('email');
        if (!formData.subject) newErrors.push('subject');
        if (!formData.message) newErrors.push('message');

        if (newErrors.length > 0) {
            setErrors(newErrors);
            showToast("Please fill in all required fields", "error");
            return;
        }

        setStatus('loading');

        try {
            const form = new FormData();
            Object.entries(formData).forEach(([key, val]) => form.append(key, val));
            form.append('_captcha', 'false');

            const res = await fetch('https://formsubmit.co/ajax/dipkishor9910@gmail.com', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: form
            });

            const result = await res.json();

            if (result.success === 'true') {
                setStatus('success');
                showToast("Thank you for your message. I'll get back to you soon!", "success");
                setTimeout(() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setStatus('idle');
                }, 3000);
            } else {
                throw new Error();
            }
        } catch (error) {
            setStatus('error');
            showToast("Failed to sent the message. Please try again.", "error");
            setTimeout(() => setStatus('idle'), 1000);
        }
    };

    // Helper for input borders
    const getInputClass = (name: string) => `
        w-full bg-[#0a0a0a] border rounded-xl py-3.5 px-5 outline-none transition-all
        ${errors.includes(name) ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'border-white/5 focus:border-orange-500/50'}
    `;

    return (
        <section className="relative min-h-screen  px-4 md:px-20 overflow-hidden text-white">
            {toast.show && (
                <Toast
                    message={toast.msg}
                    type={toast.type}
                    onClose={() => setToast(prev => ({ ...prev, show: false }))}
                />
            )}

            <h2 className="absolute  left-1/2 -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-white/[0.02] uppercase select-none pointer-events-none">
                Connect
            </h2>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-3 uppercase flex items-center justify-center gap-2">
                        <Sparkles size={14} /> Get in Touch
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        Let’s Build Something <br />
                        <span className="text-white/20 italic font-light">Extraordinary.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar Info */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Info Tiles */}
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                {
                                    icon: <Mail className="text-orange-500" />,
                                    label: "Email Me",
                                    value: "dipkishor9910@gmail.com",
                                    className: "hidden md:flex",
                                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dipkishor9910@gmail.com"
                                },
                                {
                                    icon: <Mail className="text-orange-500" />,
                                    label: "Email",
                                    value: "dipkishor9910@gmail.com",
                                    className: "flex md:hidden",
                                    href: "mailto:dipkishor9910@gmail.com"
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
                                    className={`group bg-[#161616] border border-white/5 p-6 rounded-[2rem] flex items-center gap-6 transition-all hover:bg-[#1a1a1a] hover:border-orange-600/30 shadow-xl ${item.className}`}
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

                    {/* Right Side: Form with Truck Animation */}
                    <div className="lg:col-span-7 bg-[#111] border border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-2">Full Name</label>
                                    <input
                                        type="text" name="name" placeholder="Name"
                                        value={formData.name} onChange={handleChange}
                                        className={getInputClass('name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-2">Email</label>
                                    <input
                                        type="email" name="email" placeholder="mail@example.com"
                                        value={formData.email} onChange={handleChange}
                                        className={getInputClass('email')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-2">Subject</label>
                                <input
                                    type="text" name="subject" placeholder="Project Inquiry"
                                    value={formData.subject} onChange={handleChange}
                                    className={getInputClass('subject')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest ml-2">Message</label>
                                <textarea
                                    name="message" rows={4} placeholder="Tell me about your project..."
                                    value={formData.message} onChange={handleChange}
                                    className={getInputClass('message')}
                                />
                            </div>

                            {/* THE MAIL BUTTON */}
                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`group relative w-full h-16 bg-white rounded-xl overflow-hidden transition-all duration-500 ${status === 'error' ? 'bg-red-50' : 'hover:bg-gray-50'
                                    }`}
                            >
                                {/* Dotted Path */}
                                {/* <div className="absolute top-1/2 left-4 right-4 h-0 border-t-2 border-dotted border-black/10 -translate-y-1/2" /> */}

                                <div className="relative w-full h-full flex items-center">
                                    <AnimatePresence mode='wait'>
                                        {status === 'idle' ? (
                                            <motion.div
                                                key="text"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="w-full flex items-center justify-center gap-2 text-black font-bold uppercase tracking-widest"
                                            >
                                                Send Message <ArrowRight size={18} />
                                            </motion.div>
                                        ) : (
                                            /* This is the container that allows the icon to move across the full width */
                                            <div className="absolute inset-0 w-full h-full px-8">
                                                <motion.div
                                                    key="icon-journey"
                                                    className="absolute top-1/2 -translate-y-1/2"
                                                    initial={{ left: "0%" }}
                                                    animate={
                                                        status === 'loading'
                                                            ? { left: "85%" } // Move to near the end while loading
                                                            : status === 'success'
                                                                ? { left: "105%", opacity: 0 } // Fly off the right edge
                                                                : { left: "85%", rotate: [0, -20, 20, -20, 0], x: [0, -5, 5, -5, 0] } // Crash & Shake
                                                    }
                                                    transition={
                                                        status === 'loading'
                                                            ? { duration: 4.5, ease: "linear" } // 4.5 second journey
                                                            : status === 'success'
                                                                ? { duration: 0.5, ease: "easeIn" }
                                                                : { duration: 0.2, repeat: 5 } // Violent shake on crash
                                                    }
                                                >
                                                    <div className="relative">
                                                        <Mail
                                                            className={status === 'error' ? 'text-red-500' : 'text-black'}
                                                            size={32}
                                                        />

                                                        {/* Visual "Crash" Spark/Smoke */}
                                                        {status === 'error' && (
                                                            <motion.div
                                                                initial={{ scale: 0, opacity: 0 }}
                                                                animate={{ scale: 2, opacity: [1, 0] }}
                                                                className="absolute inset-0 bg-red-500 rounded-full blur-xl"
                                                            />
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>

                                    {/* Status Messages */}
                                    <AnimatePresence>
                                        {status === 'success' && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="w-full flex items-center justify-center text-green-600 font-black uppercase tracking-widest"
                                            >
                                                Message Sent
                                            </motion.div>
                                        )}
                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="w-full flex items-center justify-center text-red-600 font-black uppercase tracking-widest pl-10"
                                            >
                                                Connection Lost
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact