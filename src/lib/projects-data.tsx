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
    origin: 'Office' | 'Self';
    company: string;
    responsibilities: string[];
    link?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: 'Ehajiri',
        category: 'Website',
        slug: 'ehajiri',
        summary: 'A robust HR and payroll solution featuring real-time biometric synchronization via ADMS for seamless workforce management and reporting.',
        fullDescription: "Ehajiri is an advanced Human Resource Information System (HRIS) designed to bridge the gap between physical hardware and digital management. The core strength of the system lies in its direct integration with ZKTeco biometric devices using the ADMS (Automatic Data Master Server) push protocol, allowing real-time attendance logs to sync without requiring a public IP. Beyond simple tracking, it features a complete Payroll Management module that automates salary calculations, tax deductions, and overtime based on live logs. It also incorporates a comprehensive HR suite for leave management, employee life-cycle tracking, and automated reporting, providing a 360-degree view of organizational productivity.",
        role: "Lead Full Stack Developer",
        tech: ["Knockout JS", "C#", ".Net", "SQL Server", "Html, CSS"],
        origin: 'Office',
        company: 'Riddhasoft Pvt. Ltd.',
        responsibilities: [
            "Architected the database schema for high-concurrency attendance logs.",
            "Integrated ZKTeco ADMS Push SDK for real-time device synchronization.",
            "Developed the automated payroll engine with dynamic deduction logic.",
            "Created customizable reporting modules for HR and finance departments."
        ],
        images: ['/Images/Ehajiri/Image1.png', '/Images/Ehajiri/Image2.png', '/Images/Ehajiri/Image3.png'],
        link: 'https://ehajiri.com.np'
    },
    {
        id: 2,
        name: 'Hotel Management System',
        category: 'Website',
        slug: 'hms-office',
        summary: 'A comprehensive hospitality platform integrating front-desk operations with POS, table reservations, and automated kitchen order tracking for hotels.',
        fullDescription: "This enterprise-grade Hotel Management System (HMS) was developed to digitize every touchpoint of a guest's journey. It seamlessly integrates Property Management (PMS) with a sophisticated Point of Sale (POS) system designed for in-house restaurants and bars. Key features include an automated KOT (Kitchen Order Ticket) and BOT (Bar Order Ticket) printing system to streamline communication between servers and the kitchen. Notably, the system handles legacy DOS-based bill printing for high-speed thermal printers and manages complex table reservations with real-time floor mapping. From front-desk check-ins and room service to final check-out billing, the platform ensures operational efficiency across all departments.",
        role: "Full Stack Developer",
        tech: ["Next.js", "C#", ".Net", "SQL Server", "Tailwind CSS"],
        origin: 'Office',
        company: 'Riddhasoft Pvt. Ltd.',
        responsibilities: [
            "Implemented the POS system with automated KOT/BOT printing logic.",
            "Engineered the table reservation system with real-time availability tracking.",
            "Developed the DOS-based legacy printing module for thermal bill receipts.",
            "Optimized front-desk workflows including check-in, check-out, and folio management."
        ],
        images: ['/Images/HMS/Image1.png', '/Images/HMS/Image2.png', '/Images/HMS/Image3.png'],
        link: 'https://demo1.graycode.com.np'

    },
    // {
    //     id: 3,
    //     name: 'HMS Lite / Personal Edition',
    //     category: 'Website',
    //     slug: 'hms-self',
    //     company: 'Personal Project',
    //     summary: 'A streamlined hospitality management system focusing on core POS features, table booking, and essential front-desk operations for smaller venues.',
    //     fullDescription: "Building upon the complexities of professional hospitality software, this self-initiated project focuses on creating a modular and lightweight version of a Hotel Management System. It targets boutique hotels and independent restaurants that require a focused feature set: simplified Point of Sale (POS) operations, digital KOT management, and an intuitive table reservation interface. The project was an exploration into modernizing legacy workflows, specifically focusing on how to handle high-speed printing and real-time state management in a web-based environment. It serves as a proof-of-concept for a highly scalable, multi-tenant hospitality platform.",
    //     role: "Frontend Developer",
    //     tech: ["Next.js", "C#", ".Net", "SQL Server", "Tailwind CSS"],
    //     origin: 'Self',
    //     responsibilities: [
    //         "Designed a modern, user-centric UI for the POS and reservation dashboard.",
    //         "Implemented client-side state management for real-time table status updates.",
    //         "Researched and integrated web-to-local printing solutions for bill generation.",
    //         "Developed a responsive booking engine optimized for tablet and desktop use."
    //     ],
    //     images: ['/Images/HMS/Image1.png', '/Images/HMS/Image2.png', '/Images/HMS/Image3.png']
    // },
];