"use client";
import { useMemo } from "react";

const AboutMe = () => {
    const startDate = useMemo(() => new Date("2022-03-05"), []);

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
        <>
            <div className="text-center text-5xl mb-20 -mt-10 md:mt-0 font-bold">About Me</div>
            <div className="mb-70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-center md:text-left lg:text-left gap-8">
                <div className="flex justify-center  mt-10 md:mt-0 relative">
                    <div className="w-60 h-60 md:w-105 md:h-105 rounded-full bg-cards relative overflow-visible">
                        <img
                            src="/Images/MyImgNew.png"
                            alt="Dip Kishor Regmi"
                            className="w-72 h-108 md:w-[30rem] md:h-[47rem] object-cover rounded-full absolute -top-[80%] md:-top-[79%] left-1/2 -translate-x-1/2"
                        />
                    </div>
                </div>
                <div className="mx-10 text-justify">
                    <p className="text-3xl text-text mb-2 font-semibold ">
                        I have {years} {years === 1 ? "year" : "years"} and {months}{" "}
                        {months === 1 ? "month" : "months"} of professional experience as
                        <span className="font-bold"> Software Developer</span>.  <br />
                    </p>
                    Over the years, I have contributed to a wide range of projects, including
                    <span className="italic"> Ehajiri (Attendance, Leave, HR, Payroll Management System)</span>,
                    <span className="italic"> Hotel Management System</span>, and an
                    <span className="italic"> Advanced Distribution Management System</span>.
                    <br />
                    <br />
                    Currently, I am working as a <span className="font-bold">.NET Developer</span> at
                    <span className="font-bold"> Riddhasoft Pvt. Ltd.</span>, where I have been employed since
                    <span className="font-bold"> Dec 2022</span>.
                    <hr />
                    <div className="mt-4">
                        <span className="font-bold">Technical Stack:</span>
                        <ul className="list-disc list-inside">
                            <li>
                                Proficient in
                                <span className="italic font-semibold"> C#, ASP.NET Core, React.js, Next.js, SQL Server, Entity Framework, REST APIs, JWT, and Git</span>.
                            </li>
                            <li>
                                Experience with agile methodologies, unit testing, and CI/CD pipelines.
                            </li>
                            <li>
                                Have working knowledge of <span className="italic font-semibold">Docker, Kubernetes, and Microsoft Azure</span>,
                                allowing me to contribute to scalable and cloud-ready applications.
                            </li>
                        </ul>
                        <p className="mb-4 mt-4">
                            Beyond coding, I am passionate about DevOps practices. I have successfully containerized .NET applications using <span className="font-semibold">Docker</span> and deployed personal projects to cloud environments, streamlining the deployment process and ensuring application consistency.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe