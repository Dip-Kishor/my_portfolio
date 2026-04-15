'use client'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects-data'; // Import from new file
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export interface Project {
    id: number;
    name: string;
    category: string;
    images: string[];
    slug: string;
    summary: string;
    fullDescription: string;
    role: string;
    tech: string[];
    link?: string;
}

const ProjectCollage = ({ images, index }: { images: string[], index: number }) => {
    const isEven = index % 2 === 0;

    if (isEven) {
        return (
            <div className="relative w-full h-full p-6 flex items-center justify-center">
                <div className="absolute top-12 right-4 w-[65%] h-[70%] rotate-3 overflow-hidden rounded-xl border-4 border-[#1a1a1a] shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:translate-x-4">
                    <img src={images[1] || images[0]} className="w-full h-full object-cover opacity-60" alt="bg" />
                </div>
                <div className="relative z-10 w-[70%] h-[85%] -rotate-2 overflow-hidden rounded-2xl border-4 border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:rotate-0 group-hover:-translate-x-2">
                    <img src={images[0]} className="w-full h-full object-cover" alt="front" />
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-2 h-full p-4 relative">
            <div className="col-span-3 row-span-2 overflow-hidden rounded-xl">
                <img src={images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="m1" />
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
                <img src={images[1] || images[0]} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" alt="m2" />
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
                <img src={images[2] || images[0]} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" alt="m3" />
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState<string>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3; // Set how many projects you want per page
    const filteredProjects = useMemo(() => {
        return activeTab === 'All' ? projectsData : projectsData.filter(p => p.category === activeTab);
    }, [activeTab]);

    const categories = ['All', 'Web Application', 'Ecommerce', 'Machine Learning'];
    // 2. Calculate Pagination Logic
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    // 3. Reset to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Optional: Scroll to top of projects section when page changes
        // window.scrollTo({ top: 200, behavior: 'smooth' });
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // This aligns the top of the section with the top of the screen
            });
        }
    };


    const nextImage = useCallback(() => {
        if (!selectedProject) return;
        setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, [selectedProject]);

    const prevImage = useCallback(() => {
        if (!selectedProject) return;
        setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }, [selectedProject]);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedProject) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') setSelectedProject(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, nextImage, prevImage]);

    // const filteredProjects = activeTab === 'All' ? projectsData : projectsData.filter(p => p.category === activeTab);

    return (
        <div ref={sectionRef} className="mt-15 md:mt-20 px-4 md:px-20 mb-20 relative bg-(--page-bg) scroll-mt-24">
            {/* Header */}
            <div className="relative mb-20">
                <h2 className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-black text-white/[0.02] uppercase select-none whitespace-nowrap pointer-events-none">
                    Work
                </h2>
                <div className="relative z-10 text-center">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-2 uppercase">My Works</p>
                    <h3 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">Projects</h3>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'bg-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.4)] scale-105' : 'bg-[#1e1e1e] text-gray-500 hover:text-white'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentProjects.map((project, i) => (
                    <motion.div
                        key={`${project.id}-${activeTab}`} // Key change triggers animation
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="group flex flex-col"
                    >

                        <div key={project.id} className="group flex flex-col">
                            {/* Image Container */}
                            <div
                                onClick={() => { setSelectedProject(project); setCurrentImgIndex(0); }}
                                className="relative h-[450px] w-full bg-[#161616] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-orange-600/50 group-hover:bg-[#1a1a1a] cursor-zoom-in"
                            >
                                <ProjectCollage images={project.images} index={i} />
                                <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[3px]">
                                    <div className="bg-white text-black p-5 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-orange-600 hover:text-white">
                                        <Maximize2 size={28} />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="bg-[#111]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">
                                        {project.images.length} PHOTOS
                                    </span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="mt-8 px-4 flex flex-col">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{project.category}</p>
                                        <h4 className="text-white text-2xl font-bold group-hover:translate-x-1 transition-transform">{project.name}</h4>
                                    </div>
                                    <span className="text-white/20 text-xs font-mono">0{i + 1}</span>
                                </div>

                                {/* Updated Summary with "Read more" after ... */}
                                <div className="relative">
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {project.summary}
                                    </p>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-1 text-orange-500 font-bold text-xs mt-2 hover:text-white transition-colors uppercase tracking-widest"
                                    >
                                        Read more <ArrowRight size={12} className="mt-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="mt-20 flex justify-center items-center gap-2">
                    {/* Prev Button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => paginate(currentPage - 1)}
                        className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-white hover:bg-orange-600 transition-all disabled:opacity-20 disabled:hover:bg-[#1a1a1a] cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => paginate(num)}
                                className={`w-12 h-12 rounded-xl font-bold text-sm transition-all border ${currentPage === num
                                        ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.3)]'
                                        : 'bg-[#1a1a1a] border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => paginate(currentPage + 1)}
                        className="p-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-white hover:bg-orange-600 transition-all disabled:opacity-20 disabled:hover:bg-[#1a1a1a] cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}

            {/* LIGHTBOX MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 animate-in fade-in duration-300">
                    <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/50 cursor-pointer hover:text-white transition-colors z-[110]">
                        <X size={48} strokeWidth={1} />
                    </button>
                    <div className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center group/modal">
                        {selectedProject.images.length > 1 && (
                            <>
                                <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 z-[110] bg-orange-500 hover:bg-orange-600 p-5 rounded-full text-white transition-all opacity-0 cursor-pointer group-hover/modal:opacity-100"><ChevronLeft size={32} /></button>
                                <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 z-[110] bg-orange-500 hover:bg-orange-600 p-5 rounded-full text-white transition-all opacity-0 cursor-pointer group-hover/modal:opacity-100"><ChevronRight size={32} /></button>
                            </>
                        )}
                        <img src={selectedProject.images[currentImgIndex]} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt="view" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;