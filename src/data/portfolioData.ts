import { Project, SkillCategory, TimelineItem, AcademicAchievement } from '../types';

export const PERSONAL_INFO = {
  name: "Areeba Munir",
  displayName: "Areeba",
  monogram: "AM",
  professionalTitle: "Aspiring Software Engineer",
  secondaryTitle: "Software Engineering Student",
  location: "Lahore, Pakistan",
  tagline: "Building • Learning • Creating",
  statusLabel: "AVAILABLE FOR INTERNSHIP OPPORTUNITIES",
  heroHeading: "Hi, I'm Areeba",
  avatarUrl: "/assets/profile/areeba-profile.jpg",
  heroDescription:
    "I'm a Software Engineering student passionate about software development, web development, UI/UX design, databases, and creating practical digital experiences.",
  supportingText:
    "I build modern digital experiences while turning ideas into clean, functional, and user-focused software.",
  aboutParagraph1:
    "I'm currently studying Software Engineering and continuously improving my programming, database, software engineering, web development, and UI/UX skills.",
  aboutParagraph2:
    "I enjoy transforming ideas into practical digital solutions and designing interfaces that are simple, functional, and user-friendly.",
  email: "areebagraphicdesigner@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/areeba-munir-783063396",
    fiverr: "https://www.fiverr.com/users/areebamunir59",
    github: "https://github.com/areebasoftwareengineer-59?tab=repositories",
  },
  stats: {
    gpa: "4.00",
    semester1Gpa: "4.00",
    semester2Gpa: "4.00",
    academicStatus: "Software Engineering Student",
    projectsCompleted: "13+",
    focusAreas: "SE • DBMS • UI/UX • Web",
  }
};

export const PROJECTS: Project[] = [
  {
    id: "educore-sms",
    title: "Educore — Student Management System (SMS)",
    category: "Software Engineering",
    year: "2026",
    description:
      "An academic Student Management System project focused on software requirements, system modeling, documentation, database concepts, and student portal design.",
    features: [
      "Software Requirements Specification (SRS)",
      "Functional Requirements & Non-Functional Requirements",
      "System Scope & Boundary Definition",
      "UML Modeling (Use Case, Class, Activity, Sequence Diagrams)",
      "Entity Relationship (ER) Diagram & Database Normalization",
      "Work Breakdown Structure (WBS) & Project Scheduling",
      "Multi-Role System Architecture (Student, Teacher, Admin)",
      "Student Portal UI/UX Design System"
    ],
    technologies: ["C++", "SQL / DBMS", "HTML", "Figma", "UML", "SRS", "Software Engineering"],
    featured: true,
    badge: "Primary Academic Capstone",
    visualType: "sms-system",
    imageUrl: "/assets/projects/educore-sms.jpg",
    isPreviewOnly: true
  },
  {
    id: "ucp-student-portal",
    title: "UCP Student Portal — UI/UX Design",
    category: "UI/UX",
    year: "2026 — Present",
    description:
      "A Figma-based student portal design focused on creating simple and user-friendly experiences for students, teachers, and administrators.",
    features: [
      "Comprehensive Sitemap Architecture",
      "User Flows for Course Registration & Grades",
      "Low-Fidelity & High-Fidelity Wireframes",
      "Interactive Component Prototypes in Figma",
      "User-Centered Design Methodology",
      "Interface Redesign & Usability Improvement",
      "Role-Based Dashboards (Student, Faculty, Admin)"
    ],
    technologies: ["Figma", "UI/UX", "User Flows", "Wireframing", "Prototyping"],
    badge: "UI/UX Systems Design",
    visualType: "figma-portal",
    imageUrl: "/assets/projects/ucp-student-portal.jpg",
    isPreviewOnly: true
  },
  {
    id: "atelier-fashion",
    title: "Atelier — Modern Luxury & Fashion Editorial",
    category: "Web Development",
    year: "2026",
    badge: "Editorial E-Commerce",
    description:
      "A modern luxury fashion editorial and apparel showcase featuring minimalist typography, curated collection lookbooks, interactive item catalog, and responsive web design.",
    features: [
      "Editorial Fashion & Apparel Collection Showcase",
      "Minimalist Aesthetics & High-End Typography",
      "Product Catalog with Category Filtering",
      "Seamless Mobile & Desktop Responsive Design",
      "Interactive Cart & Navigation Architecture"
    ],
    technologies: ["React / Next.js", "Tailwind CSS", "JavaScript", "HTML5", "Vercel"],
    liveUrl: "https://atelier-eev4rmyeh-areeba-c601.vercel.app/",
    imageUrl: "/assets/projects/atelier.jpg",
    visualType: "atelier"
  },
  {
    id: "ardenova-digital",
    title: "Ardenova Digital — Creative Agency Platform",
    category: "Web Development",
    year: "2026",
    badge: "Creative Agency",
    description:
      "A futuristic digital design and innovation agency web experience featuring cyber glowing visuals, interactive portfolio showcases, and forward-thinking branding.",
    features: [
      "Futuristic Cyber-Glow Aesthetics & Dark Mode",
      "Interactive Agency Service & Project Showcase",
      "Modern Responsive Layout with Bento Grid Sections",
      "Smooth Micro-Interactions & Call-To-Action Flow",
      "Client Case Studies & Technology Breakdown"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "UI/UX", "Vercel"],
    liveUrl: "https://ardenova-digital-bsjzoddcq-areeba-c601.vercel.app/",
    imageUrl: "/assets/projects/ardenova.jpg",
    visualType: "ardenova"
  },
  {
    id: "tour-travel-ventures",
    title: "Tour & Travel Ventures — Adventure Booking",
    category: "Web Development",
    year: "2026",
    badge: "Travel Platform",
    description:
      "A comprehensive travel and tourism web application highlighting wanderlust adventure packages, dynamic tour exploration, flight/hotel filtering, and scenic destination showcases.",
    features: [
      "Curated Adventure & Wanderlust Expedition Packages",
      "Search Bar with Tours, Flights & Hotel Filtering",
      "Scenic Destination Cards with Duration & Pricing",
      "Fully Responsive Mobile-First Booking Interface",
      "Interactive Navigation & Inquiry Modal Architecture"
    ],
    technologies: ["HTML5", "CSS3 / Tailwind", "JavaScript", "Responsive Design", "Vercel"],
    liveUrl: "https://tour-and-travel-ventures-vjxt-hpul54oyh-areeba-c601.vercel.app/",
    imageUrl: "/assets/projects/travel-ventures.jpg",
    visualType: "travel"
  },
  {
    id: "kao-lahore",
    title: "KAO Lahore — Premium Chinese Cuisine",
    category: "Web Development",
    year: "2026",
    badge: "Fine Dining Restaurant",
    description:
      "An opulent fine dining restaurant website designed for KAO Lahore, featuring authentic Chinese gourmet cuisine, VIP private dining reservation system, and luxury oriental aesthetics.",
    features: [
      "VIP Dining Reservation & Guest Booking Engine",
      "Authentic Gourmet Chinese Cuisine Menu Showcase",
      "Opulent Royal Black & Gold Atmospheric Design",
      "Culinary Storytelling & Chef Signature Highlights",
      "Interactive Contact, Location & Opening Hours"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Vercel"],
    liveUrl: "https://kao-lahore-premium-chinese-cuisine-tmlh-n50urukp4-areeba-c601.vercel.app/",
    imageUrl: "/assets/projects/kao-lahore.jpg",
    visualType: "kao-lahore"
  },
  {
    id: "voyageur-website",
    title: "Voyageur Website",
    category: "Web Development",
    description:
      "A web development project created to practice website structure, responsive layout, and frontend development.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    liveUrl: "https://voyageur-website-areeba-c601.vercel.app/",
    imageUrl: "/assets/projects/voyageur.jpg",
    visualType: "voyageur"
  },
  {
    id: "image-gallery",
    title: "ImageGallery",
    category: "Web Development",
    description:
      "An interactive image gallery project created to practice frontend layout, image presentation, and user interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://an-image-gallery.vercel.app/",
    imageUrl: "/assets/projects/image-gallery.jpg",
    visualType: "gallery"
  },
  {
    id: "areeba-calculator",
    title: "Areeba Calculator",
    category: "Web Development",
    description:
      "A functional calculator project created to practice programming logic, user interaction, interface design, and frontend development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://areebaa-caculator.vercel.app/",
    imageUrl: "/assets/projects/areeba-calculator.jpg",
    visualType: "calculator"
  },
  {
    id: "areeba-music",
    title: "Areeba Music",
    category: "Web Development",
    description:
      "A music-focused web project designed to practice frontend development, interface structure, and interactive web experiences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://areebaa-music.vercel.app/",
    imageUrl: "/assets/projects/areeba-music.jpg",
    visualType: "music"
  },
  {
    id: "queueless",
    title: "QueueLess",
    category: "UI/UX",
    description:
      "A digital queue management concept focused on improving the user experience around waiting and queue-based services.",
    features: [
      "Virtual Queue Allocation Algorithm",
      "Real-time Estimated Wait Time Indicator",
      "Mobile-first Booking and Alert Interface",
      "Streamlined Service Provider Check-in Desk"
    ],
    technologies: ["UI/UX", "Web Development", "JavaScript"],
    imageUrl: "/assets/projects/queueless.jpg",
    visualType: "queueless",
    isPreviewOnly: true
  },
  {
    id: "focusflow-website",
    title: "FocusFlow Website",
    category: "Web Development",
    description:
      "A productivity-focused website project designed to practice frontend development, responsive layouts, and modern interface design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://focus-flow-website-five.vercel.app/",
    imageUrl: "/assets/projects/focusflow.jpg",
    visualType: "focusflow"
  },
  {
    id: "rentie-growth-hub",
    title: "Rentie Growth Hub",
    category: "Web Development",
    description:
      "A web development project created to practice modern website structure, responsive design, and frontend implementation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rentie-growth-hub.vercel.app/",
    imageUrl: "/assets/projects/rentie.jpg",
    visualType: "rentie"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Skills",
    categoryKey: "tech",
    skills: [
      { name: "C++", iconName: "Code" },
      { name: "HTML", iconName: "FileCode" },
      { name: "CSS", iconName: "Palette" },
      { name: "JavaScript", iconName: "FileJson" },
      { name: "SQL", iconName: "Database" },
      { name: "DBMS", iconName: "HardDrive" },
      { name: "Database Design", iconName: "Server" },
      { name: "Git", iconName: "GitBranch" },
      { name: "GitHub", iconName: "GitPullRequest" }
    ]
  },
  {
    title: "Software Engineering",
    categoryKey: "se",
    skills: [
      { name: "Software Requirements Engineering", iconName: "ClipboardList" },
      { name: "SRS Documentation", iconName: "FileText" },
      { name: "Software Documentation", iconName: "BookOpen" },
      { name: "Requirements Engineering", iconName: "ListChecks" },
      { name: "UML", iconName: "GitFork" },
      { name: "System Modeling", iconName: "Layers" },
      { name: "Functional Requirements", iconName: "CheckSquare" },
      { name: "Non-Functional Requirements", iconName: "ShieldAlert" },
      { name: "Use Case Diagrams", iconName: "Network" },
      { name: "Class Diagrams", iconName: "Boxes" },
      { name: "Activity Diagrams", iconName: "Workflow" },
      { name: "Sequence Diagrams", iconName: "GitCommit" },
      { name: "ER Diagrams", iconName: "TableProperties" },
      { name: "WBS", iconName: "Kanban" }
    ]
  },
  {
    title: "UI/UX Design",
    categoryKey: "uiux",
    skills: [
      { name: "Figma", iconName: "Figma" },
      { name: "Canva", iconName: "Sparkles" },
      { name: "Wireframing", iconName: "LayoutTemplate" },
      { name: "Prototyping", iconName: "Maximize2" },
      { name: "User Flows", iconName: "Route" },
      { name: "Sitemaps", iconName: "FolderTree" },
      { name: "User-Centered Design", iconName: "Users" },
      { name: "Interface Redesign", iconName: "RefreshCw" },
      { name: "Usability Improvement", iconName: "Zap" }
    ]
  },
  {
    title: "Web Development",
    categoryKey: "web",
    skills: [
      { name: "HTML5", iconName: "Globe" },
      { name: "CSS3", iconName: "Layout" },
      { name: "JavaScript (ES6+)", iconName: "Terminal" },
      { name: "Responsive Web Design", iconName: "Smartphone" },
      { name: "Basic Front-End Development", iconName: "Monitor" },
      { name: "Web Page Design", iconName: "Compass" },
      { name: "Modern Frameworks", isLearning: true, iconName: "Cpu" },
      { name: "REST APIs Integration", isLearning: true, iconName: "Share2" }
    ]
  }
];

export const LEARNING_JOURNEY: TimelineItem[] = [
  {
    title: "Software Engineering Student",
    roleOrPhase: "Academic Inception",
    description: "Enrolled in the Software Engineering undergraduate program in Lahore, Pakistan. Established rigorous foundational standards and an enthusiasm for building practical digital solutions.",
    technologies: ["Computer Science Foundations", "Algorithms", "Academic Rigor"],
    highlight: "4.00 Semester GPA"
  },
  {
    title: "Programming Fundamentals",
    roleOrPhase: "Core Problem Solving",
    description: "Mastered algorithmic thinking, modular structures, memory management, pointers, and object-oriented concepts with C++.",
    technologies: ["C++", "OOP", "Control Flow", "Functions", "Data Structures"],
    highlight: "Core Logic"
  },
  {
    title: "Database & SQL",
    roleOrPhase: "Data Architecture",
    description: "Studied Database Management Systems (DBMS), normalization forms (1NF through BCNF), relational integrity, and advanced SQL querying.",
    technologies: ["SQL", "DBMS", "Schema Design", "Relational Models", "Queries"],
    highlight: "Relational Design"
  },
  {
    title: "Software Engineering & SRS",
    roleOrPhase: "System Specifications",
    description: "Deep-dived into the Software Engineering lifecycle: eliciting, drafting, and validating comprehensive Software Requirements Specifications (SRS).",
    technologies: ["SRS", "Functional Requirements", "Non-Functional Specs", "System Scope"],
    highlight: "Engineering Rigor"
  },
  {
    title: "UML & System Modeling",
    roleOrPhase: "Architectural Blueprints",
    description: "Architected visual blueprints including Use Case, Class, Activity, Sequence, and Entity Relationship Diagrams (ERD) alongside Work Breakdown Structures (WBS).",
    technologies: ["Use Case", "Class Diagrams", "Sequence Diagrams", "ERD", "WBS"],
    highlight: "System Modeling"
  },
  {
    title: "UI/UX & Figma",
    roleOrPhase: "Human-Centered Design",
    description: "Expanded into user-centered digital design. Formulated interactive prototypes, wireframes, user journeys, sitemaps, and design systems in Figma.",
    technologies: ["Figma", "Wireframing", "Prototypes", "User Flows", "Sitemaps"],
    highlight: "User Experience"
  },
  {
    title: "Web Development",
    roleOrPhase: "Frontend Implementation",
    description: "Brought wireframes and interfaces to life using clean semantic HTML, custom CSS styling, and responsive web development workflows.",
    technologies: ["HTML5", "CSS3", "Responsive UI", "Flexbox/Grid", "Git"],
    highlight: "Responsive Web"
  },
  {
    title: "Interactive Web Experiences",
    roleOrPhase: "Dynamic Applications & Logic",
    description: "Developing responsive frontend projects, dynamic DOM interactions, and deploying functional apps to Vercel and GitHub.",
    technologies: ["JavaScript", "Interactive DOM", "Vercel Deployments", "GitHub Version Control"],
    highlight: "Live Applications"
  }
];

export const ACADEMIC_ACHIEVEMENTS: AcademicAchievement[] = [
  {
    semester: "First Semester",
    gpa: "4.00 GPA",
    description: "Achieved a perfect 4.00 Grade Point Average in the first semester of the Software Engineering degree program.",
    badge: "Perfect GPA"
  },
  {
    semester: "Second Semester",
    gpa: "4.00 GPA",
    description: "Maintained an impeccable 4.00 Grade Point Average throughout the second semester, demonstrating consistent academic excellence and discipline.",
    badge: "Consistent 4.00 GPA"
  }
];
