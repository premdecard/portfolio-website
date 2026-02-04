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
    company: "Tech Solutions Pvt Ltd",
    role: "Senior Software Developer",
    duration: "Jan 2022 - Present",
    location: "Ahmedabad, India",
    responsibilities: [
      "Led development of enterprise applications using Angular and .NET Core",
      "Architected and implemented RESTful APIs serving 10,000+ daily users",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance resulting in 40% faster load times",
      "Collaborated with cross-functional teams to deliver projects on time"
    ]
  },
  {
    id: 2,
    company: "Digital Innovations",
    role: "Software Developer",
    duration: "Mar 2020 - Dec 2021",
    location: "Ahmedabad, India",
    responsibilities: [
      "Developed and maintained web applications using Angular and ASP.NET",
      "Implemented responsive UI components following best practices",
      "Integrated third-party APIs and payment gateways",
      "Wrote unit tests achieving 80% code coverage",
      "Participated in agile ceremonies and sprint planning"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive online shopping platform with advanced features including product search, filters, cart management, and secure payment integration.",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    features: [
      "Real-time inventory management",
      "Advanced search and filtering",
      "Secure payment gateway integration",
      "Admin dashboard for analytics"
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Enterprise solution for managing warehouse inventory with real-time tracking, automated alerts, and comprehensive reporting capabilities.",
    technologies: ["Angular", "ASP.NET", "SQL Server", "Entity Framework"],
    features: [
      "Real-time stock tracking",
      "Automated low-stock alerts",
      "Multi-warehouse support",
      "Detailed analytics and reports"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Customer Relationship Management",
    description: "CRM system to manage customer interactions, sales pipeline, and support tickets with integrated email notifications and task management.",
    technologies: ["Angular", ".NET Core", "MongoDB", "Azure"],
    features: [
      "Lead and opportunity tracking",
      "Email integration",
      "Task and calendar management",
      "Sales analytics dashboard"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "HR Management Portal",
    description: "Comprehensive HR solution for managing employee records, leave requests, attendance tracking, and payroll processing.",
    technologies: ["Angular", "ASP.NET", "SQL Server", "Web API"],
    features: [
      "Employee self-service portal",
      "Leave management system",
      "Attendance tracking",
      "Payroll integration"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
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