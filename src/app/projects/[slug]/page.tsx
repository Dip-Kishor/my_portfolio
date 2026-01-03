import { projectsData } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, CheckCircle2, Briefcase, User, ListChecks } from 'lucide-react';
import Link from 'next/link';
import ImageGallery from '@/components/helper/ImageGallery';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#111] text-white pt-10 pb-20 px-4 md:px-20">
            {/* Back Button */}
            <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-12 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Work</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left Side: Content */}
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-4">
                        <p className="text-orange-500 font-black tracking-widest text-sm uppercase">{project.category}</p>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-tighter flex items-center gap-1.5">
                            {project.origin === 'Office' ? <Briefcase size={10} /> : <User size={10} />}
                            {project.origin} Project
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">{project.name}</h1>

                    <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
                        <p className="text-xl text-white font-medium">{project.summary}</p>
                        <div className="h-px w-20 bg-orange-600"></div>
                        <p>{project.fullDescription}</p>
                    </div>

                    {/* Image Gallery */}
                    <ImageGallery images={project.images} projectName={project.name} />
                </div>

                {/* Right Side: Sidebar Info */}
                <div className="lg:col-span-4 lg:sticky lg:top-10 h-fit space-y-6">
                    {/* NEW: Context / Company Box */}
                    <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
                        <h3 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                            Project Context
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                <span className="text-gray-500 text-sm">Type</span>
                                <span className="text-white font-medium text-sm">{project.origin} Project</span>
                            </div>
                            {project.company && (
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-gray-500 text-sm">Organization</span>
                                    <span className="text-white font-medium text-sm">{project.company}</span>
                                </div>
                            )}
                            {/* <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">Year</span>
                <span className="text-white font-medium text-sm">2024</span> 
            </div> */}
                        </div>
                    </div>

                    {/* Role & Tech Box */}
                    <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
                        <h3 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                            Involvement
                        </h3>
                        <p className="text-white text-xl font-bold mb-6 leading-tight">{project.role}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Involvement Box (Keep as is or combine) */}
                    <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
                        <h3 className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                            <ListChecks size={14} /> Key Responsibilities
                        </h3>
                        <ul className="space-y-4">
                            {project.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-600 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEW: Responsibilities Box */}


                    {/* Project Link */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            className="flex items-center justify-center gap-3 w-full bg-orange-600 text-white font-black py-5 rounded-3xl hover:bg-white hover:text-black transition-all shadow-lg"
                        >
                            Visit Live Site <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}