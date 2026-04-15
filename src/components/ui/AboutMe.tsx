"use client";
import { useMemo } from "react";
import { Code2, Briefcase, Terminal, Cpu, Rocket, CheckCircle2 } from "lucide-react";


const AboutMe = () => {
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

    const skills = ["C#", "ASP.NET Core", "LINQ", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "SQL Server", "PostgreSQL", "Entity Framework", "Database Design", "Stored Procedures", "Indexing & Query Optimization", "REST APIs", "JWT", "Third-party API Integration", "Git", "Docker", "Docker Compose", "CI/CD Pipelines", "GitHub Actions", "Clean Architecture", "Agile", "Code Review", "Performance Optimization"];

    return (
        <section className="mt-15 md:mt-0  px-4 md:px-20 bg-(--page-bg) overflow-hidden">
            {/* Background Header Text (Watermark effect) */}
            <div className="relative mb-20">
                <h2 className="absolute -top-10 left-1/2 -translate-x-1/2 text-[8rem] md:text-[12rem] font-black text-white/[0.02] uppercase select-none whitespace-nowrap">
                    Experience
                </h2>
                <div className="relative z-10 text-center">
                    <p className="text-orange-500 font-black tracking-[0.3em] text-xs mb-2 uppercase">My Journey</p>
                    <h3 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">About Me</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* 1. LEFT SIDE: THE IMAGE BOX (Different from Hero) */}
                <div className="lg:col-span-5 relative group">
                    <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-[#161616]">
                        <img
                            src="/Images/MyImgNew2.jpg"
                            alt="Dip Kishor Regmi - Full-Stack Software Developer based in Kathmandu, Nepal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />

                        {/* Floating Experience Badge */}
                        <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem]">
                            <p className="text-orange-500 font-black text-xs tracking-widest uppercase mb-1">Total Expertise</p>
                            <h4 className="text-white text-2xl font-bold">
                                {years} Years & {months} Months
                            </h4>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600/20 blur-3xl rounded-full" />
                </div>

                {/* 2. RIGHT SIDE: THE BENTO CONTENT */}
                <div className="lg:col-span-7 space-y-8">

                    {/* Intro Card */}
                    <div className="bg-[#161616] border border-white/5 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
                        <Terminal className="absolute -right-4 -top-4 text-white/[0.03] w-32 h-32 rotate-12" />
                        <h4 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-orange-600"></span>
                            Professional Narrative
                        </h4>
                        <p className="text-gray-400 text-lg leading-relaxed text-justify">
                            As a <span className="text-white font-bold">Software Developer</span>, I specialize in bridging the gap between robust backend architecture and high-performance frontend interfaces.
                            Currently driving innovation at <span className="text-orange-500 font-bold">Riddhasoft Pvt. Ltd.</span> as a Software Developer since early 2022.
                        </p>
                    </div>

                    {/* Skill Pills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Tech Stack Box */}
                        <div className="bg-[#1a1a1a] p-8 rounded-[2.5rem] border border-white/5">
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="text-orange-500" size={24} />
                                <h5 className="text-white font-bold uppercase tracking-widest text-sm">Technical Stack</h5>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="bg-white/5 border border-white/5 text-gray-400 px-3 py-1.5 rounded-full text-[11px] font-bold hover:border-orange-600 hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DevOps Box */}
                        <div className="bg-orange-600 p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
                            <Rocket className="absolute -right-4 -bottom-4 opacity-20 w-24 h-24 -rotate-12 transition-transform group-hover:translate-y-[-10px]" />
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 size={24} />
                                <h5 className="font-bold uppercase tracking-widest text-sm">Cloud & DevOps</h5>
                            </div>
                            <p className="text-orange-100 text-xs leading-relaxed font-medium">
                                Passionate about scalability. Proficient in containerizing apps with <strong>Docker</strong> and orchestrating with <strong>Kubernetes</strong> on <strong>Azure</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Projects Checklist Card */}
                    <div className="bg-[#161616] border border-white/5 p-8 rounded-[2.5rem]">
                        <div className="flex items-center gap-3 mb-6 text-gray-500 uppercase text-[10px] font-black tracking-[0.2em]">
                            <Briefcase size={16} /> Major Contributions
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Ehajiri (Attendance, Leave, HR, Payroll etc. MS)",
                                "Hotel Management System",
                                "Advanced Distribution MS",
                                "Enterprise Resource Planning (ERP)",
                                "Scalable Cloud Deployments"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-orange-500" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;