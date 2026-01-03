"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ImageGallery({ images, projectName }: { images: string[], projectName: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="mt-16 space-y-6">
            {/* Main Image Container */}
            <div className="relative group aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-[#161616] shadow-2xl">
                <img
                    src={images[currentIndex]}
                    alt={`${projectName} view ${currentIndex + 1}`}
                    className="w-full h-full object-contain transition-all duration-500"
                />

                {/* Left Arrow */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Image Counter Overlay */}
                <div className="absolute bottom-5 right-5 bg-black/60 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-white/10">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Pagination */}
            <div className="flex flex-wrap gap-3 justify-center">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            currentIndex === idx 
                            ? 'border-orange-600 scale-110' 
                            : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                    >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}