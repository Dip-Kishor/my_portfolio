'use client'
import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicesData = [
    {
        id: "01",
        title: "Web App Development",
        desc: "Full-stack web apps with reliability and fast functioning built on modern architecture.",
        img: "/Images/Services/WebDesign.jpg",
        tag: "FULL-STACK"
    },
    {
        id: "02",
        title: "Frontend Development",
        desc: "Build responsive and interactive user interfaces using modern frameworks like React & Next.js.",
        img: "/Images/Services/LaptopMobile.jpg",
        tag: "UI/UX"
    },
    {
        id: "03",
        title: "Backend Development",
        desc: "Server-side programming, robust database management, and scalable API development.",
        img: "/Images/Services/Backend.jpg",
        tag: "ARCHITECTURE"
    },
    {
        id: "04",
        title: "E-commerce Solutions",
        desc: "High-conversion online stores with secure payment gateways and product management.",
        img: "/Images/Services/Ecommerce.png",
        tag: "COMMERCE"
    },
    {
        id: "05",
        title: "API Integration",
        desc: "Seamlessly connect third-party APIs like payment, maps, or complex analytics tools.",
        img: "/Images/Services/ApiIntegrations.jpg",
        tag: "SYSTEMS"
    }
];

const Services = () => {
    return (
        <div className="mt-15 px-4 md:px-20 mb-32 bg-(--page-bg) py-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-4 uppercase">
                        What I Do
                    </p>
                    <h3 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
                        Modern Solutions <br />
                        <span className="text-white/20">For Digital Growth</span>
                    </h3>
                </div>

                {/* Custom Navigation Buttons */}
                <div className="flex gap-4 mb-2">
                    <button className="swiper-prev-btn p-3 border border-white/10 rounded-full text-white hover:bg-orange-600 hover:border-orange-600 transition-all cursor-pointer">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="swiper-next-btn p-3 border border-white/10 rounded-full text-white hover:bg-orange-600 hover:border-orange-600 transition-all cursor-pointer">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-next-btn',
                    prevEl: '.swiper-prev-btn',
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-16" // Space for pagination bullets
            >
                {servicesData.map((service) => (
                    <SwiperSlide key={service.id} className="h-auto">
                        <div className="group relative bg-[#161616] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-[#1a1a1a] hover:border-orange-600/30 flex flex-col h-full">
                            {/* Card Header */}
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
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS for Pagination Dots */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #555 !important;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #ea580c !important; /* orange-600 */
                    width: 25px !important;
                    border-radius: 5px !important;
                }
            `}</style>
        </div>
    );
};

export default Services;