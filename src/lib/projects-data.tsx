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
    origin: 'Office' | 'Self' | 'College';
    company: string;
    responsibilities: string[];
    link?: string;
    status?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        name: 'Ehajiri',
        category: 'Web Application',
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
        images: ['/Images/Ehajiri/Image1.png', '/Images/Ehajiri/Image2.png', '/Images/Ehajiri/Image3.png', '/Images/Ehajiri/Image4.png', '/Images/Ehajiri/Image5.png', '/Images/Ehajiri/Image6.png', '/Images/Ehajiri/Image7.png', '/Images/Ehajiri/Image8.png'],
        link: 'https://ehajiri.com.np',
        status: 'live'
    },
    {
        id: 2,
        name: 'Hotel Management System',
        category: 'Web Application',
        slug: 'hms',
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
        link: 'https://demo1.graycode.com.np',
        status: 'live'
    },
    {
        id: 3,
        name: 'Furni Emporium',
        category: 'Ecommerce',
        slug: 'furni-emporium',
        summary: 'A feature-rich B2C e-commerce platform designed for premium furniture retail, featuring high-quality product visualization and a streamlined checkout experience.',
        fullDescription: "Furni Emporium is a modern Business-to-Consumer (B2C) marketplace built to handle the complexities of furniture retail. The platform focuses on providing an immersive shopping experience with categorized product catalogs, advanced filtering, and a secure multi-step checkout process. On the backend, it features a robust administrative dashboard for inventory tracking, order fulfillment, and customer management. The system is optimized for high-resolution imagery to showcase furniture details while maintaining fast load times, ensuring a seamless transition from browsing to purchase.",
        role: "Full Stack Developer",
        tech: ["MVC", "C#", ".Net", "SQL Server", "Bootstrap", "CSS", "JS"],
        origin: 'Self',
        company: 'Personal Project',
        responsibilities: [
            "Developed a responsive B2C storefront with a focus performance optimization.",
            "Built a secure shopping cart and checkout pipeline.",
            "Designed the administrative inventory system to manage product variants (size, material, color).",
            "Implemented high-performance image optimization techniques for large product galleries."
        ],
        images: ['/Images/Furni/Image1.png', '/Images/Furni/Image2.png', '/Images/Furni/Image3.png', '/Images/Furni/Image4.png', '/Images/Furni/Image5.png'],
        link: 'https://github.com/Dip-Kishor/EcomInDotnet',
        status: "codeOnly"
    },
    {
        id: 4,
        name: 'Wheat Yield Prediction System',
        category: 'Machine Learning',
        slug: 'wyps',
        summary: 'A data-driven agricultural tool leveraging Machine Learning to forecast wheat production based on environmental factors and soil health in all districts of Nepal.',
        fullDescription: "This project serves as a bridge between agricultural science and data technology. The Wheat Yield Prediction System (WYPS) utilizes historical climate data, soil composition analysis, and irrigation patterns to provide farmers and stakeholders with accurate harvest forecasts. As a core backend developer, I architected the data processing pipeline and contributed to the Machine Learning cycle—including data cleaning, feature engineering, and training the predictive model. The system provides a user-friendly dashboard that visualizes complex ML insights into actionable agricultural advice.",
        role: "Backend Developer & ML Contributor",
        tech: ["C#", ".Net Core", "SQL Server", "Python", "Flask"],
        origin: 'College',
        company: 'Ambition College',
        responsibilities: [
            "Architected the RESTful API to handle large datasets for predictive analysis.",
            "Contributed to training and fine-tuning ML models to improve prediction accuracy.",
            "Developed data preprocessing scripts to normalize environmental and soil data.",
            "Built the visualization dashboard to present predictive analytics in an intuitive format."
        ],
        images: ['/Images/WYPS/Image1.jpg', '/Images/WYPS/Image2.png', '/Images/WYPS/Image3.jpg', '/Images/WYPS/Image4.png', '/Images/WYPS/Image5.png', '/Images/WYPS/Image6.jpg', '/Images/WYPS/Image7.png'],
        link: 'https://wyps-demo.com.np' // Placeholder link
    },
    {
        id: 5,
        name: 'Football League Management System',
        category: 'Web Application',
        slug: 'eflms',
        summary: 'A comprehensive tournament management platform allowing users to form clubs, recruit players, and organize professional-tier football leagues with real-time standings and automated scheduling.',
        fullDescription: "The Football League Management System (EFLMS) is an all-in-one digital solution designed to streamline the complexities of organizing sports tournaments. The platform empowers users to act as Club Managers, where they can create team identities and recruit members to build their squads. For organizers, the system provides a robust toolkit to create custom leagues, manage registrations, and generate match fixtures. Key features include an automated league table (standings) that updates in real-time based on match results, goal differences, and points. From scheduling matches to tracking individual player statistics and historical results, the platform offers everything required to manage a competitive football ecosystem efficiently.",
        role: "Full Stack Developer",
        tech: ["Next.js","Tailwind CSS", "C#", ".Net Core", "PostgreSQL"],
        origin: 'Self',
        company: 'Personal Project',
        responsibilities: [
            "Designed and implemented the core logic for automated league table calculations and point tracking.",
            "Developed the club management module including member recruitment and role assignment.",
            "Created a dynamic match scheduling engine to handle fixture generation and results reporting.",
            "Built a responsive dashboard for tournament organizers to monitor league progress and player stats."
        ],
        images: [
            '/Images/EFLMS/Image1.png', 
            '/Images/EFLMS/Image2.png', 
            '/Images/EFLMS/Image3.png', 
            '/Images/EFLMS/Image4.png', 
            '/Images/EFLMS/Image5.png', 
            '/Images/EFLMS/Image6.png', 
            '/Images/EFLMS/Image7.png', 
            '/Images/EFLMS/Image8.png', 
            '/Images/EFLMS/Image9.png', 
            '/Images/EFLMS/Image10.png'
        ],
        link: '#', // Update with actual link if available
        status: 'completed'
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