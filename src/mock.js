// Mock data for Prem Panchal's Portfolio

export const profileData = {
  name: "Prem Panchal",
  title: "Senior Software Developer",
  tagline: "Building scalable full-stack applications with Angular & .NET",
  location: "Ahmedabad, Gujarat, India",
  experience: "4+ Years",
  email: "prempanchal222@gmail.com",
  phone: "+91 7435055949",
  linkedin: "https://in.linkedin.com/in/prem-panchal-3a324316b",
  github: "#",
  bio: "Passionate full-stack developer specializing in building enterprise-grade applications using Angular and .NET Core. With over 4 years of experience, I excel at creating scalable, maintainable solutions that solve real-world business problems. I thrive in collaborative environments and am constantly exploring new technologies to enhance development efficiency."
};

export const skills = {
  frontend: [
    { name: "Angular", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5", level: 90 },
    { name: "CSS3/SCSS", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "RxJS", level: 80 },
    { name: "Bootstrap", level: 85 }
  ],
  backend: [
    { name: ".NET Core", level: 90 },
    { name: "ASP.NET", level: 88 },
    { name: "C#", level: 90 },
    { name: "Web API", level: 85 },
    { name: "Entity Framework", level: 82 },
    { name: "RESTful APIs", level: 88 }
  ],
  database: [
    { name: "SQL Server", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "T-SQL", level: 80 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "Azure", level: 75 },
    { name: "Visual Studio", level: 90 },
    { name: "VS Code", level: 88 },
    { name: "Postman", level: 85 },
    { name: "Docker", level: 70 }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Sapphire Software Solutions",
    role: "Senior Software Developer",
    duration: "2024 - Present",
    location: "Ahmedabad, India",
    responsibilities: [
      "Leading development of enterprise applications using Angular and .NET Core",
      "Architecting and implementing scalable RESTful APIs serving multiple clients",
      "Mentoring junior developers and conducting comprehensive code reviews",
      "Optimizing application performance and implementing best practices",
      "Collaborating with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    id: 2,
    company: "Microweb Solutions",
    role: "Software Developer",
    duration: "2023 - 2024",
    location: "Ahmedabad, India",
    responsibilities: [
      "Developed and maintained web applications using ASP.NET Core MVC",
      "Implemented responsive UI components and integrated third-party APIs",
      "Worked with Entity Framework and MS SQL Server for data management",
      "Participated in requirement gathering and agile development processes",
      "Delivered projects on time with high code quality standards"
    ]
  },
  {
    id: 3,
    company: "Omschrift Inventions",
    role: "Software Developer",
    duration: "2022 - 2023",
    location: "Ahmedabad, India",
    responsibilities: [
      "Developed web applications using ASP.NET MVC and .NET technologies",
      "Implemented database designs and wrote complex SQL queries",
      "Worked on multiple modules including inventory and event management",
      "Collaborated with team members in agile environment",
      "Ensured application security and data integrity"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "ERP Management",
    description: "A comprehensive web-based ERP solution designed to streamline organizational processes including employee records, student information, communication, payroll, and payment gateways. Focuses on delivering efficiency, transparency, and enhanced user experience for educational institutions and corporate organizations.",
    technologies: ["ASP.NET Core MVC", "C#", "MS SQL Server", "JavaScript", "jQuery", "Web API"],
    features: [
      "Employee and student records management",
      "Integrated payroll system",
      "Payment gateway integration",
      "Communication module for stakeholders"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "Advanced hospital management system with comprehensive modules for Accounts, Control, Master, and Sales. Enhanced data management capabilities through integrated web platform and API, streamlining administrative workflows and operational processes.",
    technologies: ["ASP.NET Core MVC", "Entity Framework", "MS SQL Server", "JavaScript", "jQuery", "Web API"],
    features: [
      "Accounts and financial management",
      "Master data configuration",
      "Sales and inventory tracking",
      "Mobile app API integration"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "UMS (University Management System)",
    description: "Comprehensive University Management System featuring modules for Accounts, Human Resources, Configuration, Examination, and Student Management. Optimizes administrative efficiency and supports academic functions through an intuitive web interface.",
    technologies: ["ASP.NET Core MVC", "Entity Framework", "MS SQL Server", "LINQ", "JavaScript", "jQuery", "Umbraco"],
    features: [
      "HR and employee management",
      "Examination and grading system",
      "Student information management",
      "Multi-state site management with Umbraco"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Parag Industries - Inventory Management",
    description: "Comprehensive inventory management system for manufacturing enterprise. Prioritizes optimization of inventory workflows, data accuracy, and operational performance with real-time tracking and reporting capabilities.",
    technologies: ["ASP.NET MVC", ".NET 5", "C#", "jQuery", "Entity Framework", "MS SQL Server"],
    features: [
      "Real-time inventory tracking",
      "Manufacturing workflow optimization",
      "Data accuracy and validation",
      "Operational performance analytics"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "#"
  },
  {
    id: 5,
    title: "Event Management System",
    description: "Web-based application for managing college events. Students can register for events, modify event details, pay registration fees, and participate seamlessly. Provides user-friendly interface for students and organizers with integrated payment processing.",
    technologies: ["ASP.NET MVC Core", "Entity Framework Core", "C#", "Razor Pages", "jQuery", "MS SQL Server"],
    features: [
      "Student event registration",
      "Event details modification",
      "Registration fee payment integration",
      "Event participation tracking"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    link: "#"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Tech Solutions Pvt Ltd",
    content: "Prem is an exceptional developer who consistently delivers high-quality work. His expertise in Angular and .NET has been invaluable to our team.",
    avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=64748b&color=fff"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Tech Lead",
    company: "Digital Innovations",
    content: "Working with Prem was a great experience. He's not only technically skilled but also a great team player who helps others grow.",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=64748b&color=fff"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    year: "2023"
  },
  {
    id: 2,
    name: "Angular - The Complete Guide",
    issuer: "Udemy",
    year: "2022"
  },
  {
    id: 3,
    name: "ASP.NET Core MVC - The Complete Guide",
    issuer: "Udemy",
    year: "2021"
  }
];