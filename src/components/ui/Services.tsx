'use client'
import React from 'react';
import { ArrowUpRight, Globe, Layout, Database, ShoppingCart, Cpu, Share2 } from 'lucide-react';

const servicesData = [
    {
        id: "01",
        title: "Web App Development",
        desc: "Full-stack web apps with reliability and fast functioning built on modern architecture.",
        img: "/Images/WebDesign.jpg",
        tag: "FULL-STACK"
    },
    {
        id: "02",
        title: "Frontend Development",
        desc: "Build responsive and interactive user interfaces using modern frameworks like React & Next.js.",
        img: "/Images/LaptopMobile.jpg",
        tag: "UI/UX"
    },
    {
        id: "03",
        title: "Backend Development",
        desc: "Server-side programming, robust database management, and scalable API development.",
        img: "/Images/Backend.jpg",
        tag: "ARCHITECTURE"
    },
    {
        id: "04",
        title: "E-commerce Solutions",
        desc: "High-conversion online stores with secure payment gateways and product management.",
        img: "/Images/Ecommerce.png",
        tag: "COMMERCE"
    },
    {
        id: "05",
        title: "API Integration",
        desc: "Seamlessly connect third-party APIs like payment, maps, or complex analytics tools.",
        img: "/Images/ApiIntegrations.jpg",
        tag: "SYSTEMS"
    }
];

const Services = () => {
    return (
        <div className="mt-15 px-4 md:px-20 mb-32 bg-[#111]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-4 uppercase">
                        What I Do
                    </p>
                    <h3 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
                        Modern Solutions <br />
                        <span className="text-white/20">For Digital Growth</span>
                    </h3>
                </div>
                <p className="text-gray-500 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6">
                    Helping you navigate the digital landscape with custom-built solutions designed for performance and scale.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div 
                        key={service.id} 
                        className="group relative bg-[#161616] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-[#1a1a1a] hover:border-orange-600/30 flex flex-col h-full"
                    >
                        {/* Card Header (Number & Arrow) */}
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-white/10 text-5xl font-black font-mono group-hover:text-orange-600/20 transition-colors">
                                {service.id}
                            </span>
                            <div className="bg-[#222] p-3 rounded-full text-white/40 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-48 mb-8 overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            <img 
                                src={service.img} 
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Accent line inside image */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-700 delay-100" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow">
                            <p className="text-orange-500 text-[10px] font-black tracking-widest uppercase mb-3">
                                {service.tag}
                            </p>
                            <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                {service.desc}
                            </p>
                        </div>
                        
                        {/* Decorative background circle (Subtle) */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;