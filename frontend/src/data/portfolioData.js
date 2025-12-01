export const portfolioData = {
  personalInfo: {
    name: "Pooja Patel",
    title: "CSE Student | MERN Stack Developer | Softpro Intern",
    intro: "4th Year CSE Student at AKTU University. Passionate about AI and innovative web solutions. Completed MERN Stack internship at Softpro.",
    email: "poojapatel187369@gmail.com",
    phone: "+91 6307744919",
    location: "Varanasi, Uttar Pradesh, India",
    about: "I'm Pooja Patel, 4th year Computer Science Engineering student at Saraswati College (AKTU). Completed MERN Stack internship at Softpro with A+ grade. Passionate about creating AI-powered solutions and web applications.",
    passions: [
      "AI & Machine Learning",
      "Full Stack Development",
      "Competitive Programming", 
      "Open Source Contribution"
    ]
  },

  skills: {
  technical: [
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "Express.js", level: 78, icon: "🚀" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "JavaScript", level: 88, icon: "💛" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "HTML", level: 90, icon: "🌐" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "Tailwind CSS", level: 82, icon: "💨" },
    { name: "Bootstrap", level: 80, icon: "🔧" },
    { name: "C Language", level: 75, icon: "🔵" }
  ],
  soft: [
    "Excellent Communication Skills",
    "Academic Excellence",
    "Problem Solving", 
    "Quick Learning",
    "Team Leadership",
    "Research Skills",
    "Time Management",
    "Presentation Skills",
    "Client Interaction"
  ]
},
  education: [
    {
      degree: "Computer Science Engineering (2022-2026)",
      institution: "Saraswati Higher Education and Technical College - AKTU University",
      year: "2022-2026", 
      score: "CGPA: 8.7/10 (Current)",
      cgpa: "8.7",
      details: "Currently in 4th year of B.Tech CSE program with current CGPA of 8.7.",
      photo: "/education/college-id.jpg"
    },
    {
      degree: "Class 12 - PCM (2022)", 
      institution: "Mahatma J.F. Public School - CBSE Board",
      year: "2022",
      score: "Percentage: 72%",
      details: "Science Stream with Physics, Chemistry, Mathematics, Hindi. Strong foundation in technical subjects.",
      photo: "/education/class12-marksheet.jpg"
    },
    {
      degree: "Class 10 - All Subjects (2020)",
      institution: "Mahatma J.F. Public School - CBSE Board",
      year: "2020",
      score: "Percentage: 79%", 
      details: "Completed all subjects including Mathematics, Science, Social Science, English, and Hindi.",
      photo: "/education/class10-marksheet.jpg"
    }
  ],

  experience: [
  {
    position: "MERN Stack Intern", 
    company: "Softpro India Computer Technologies Pvt. Ltd.",
    period: "July 2025 - September 2025",
    location: "Lucknow, Uttar Pradesh",
    duration: "60 Days Summer Internship",
    grade: "A+ Grade (Very Good Performance)",
    responsibilities: [
      "Completed comprehensive 60-day summer internship focused on MERN Stack technologies",
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Implemented RESTful APIs and database management systems",
      "Gained practical experience in modern web development practices",
      "Received 'Very Good' rating and A+ grade for outstanding performance",
      "Collaborated with industry professionals on real-world projects"
    ],
    certificate: "/experience/softpro-certificate.pdf" 
  }
],

projects: [
  {
    title: "AI LinkedIn Assistant",
    description: "Developed a social networking platform with user profiles, posts, likes, comments, and notifications. Implemented interactive Assistant feature for enhanced user experience.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Context API"],
    image: "/projects/linkedin.png",
    githubLink: "https://github.com/poojapatel187369/linkedIn",
    liveDemo: "https://linkedin-frontendd-3tlh.onrender.com",
    videoDemo: "https://www.youtube.com/embed/h6xOIISuVGE", // ✅ Fixed
  },
  {
    title: "Chatly – Real-Time Chat App", 
    description: "Built real-time messaging app with typing indicators, online/offline status, and image sharing. Secured using JWT authentication and Redux for state management.",
    techStack: ["React.js", "Node.js", "Socket.IO", "JWT", "Redux", "MongoDB"],
    image: "/projects/chatly.webp",
    githubLink: "https://github.com/poojapatel187369/chatly",
    liveDemo: "https://chatly-frontend-uv5z.onrender.com", 
    videoDemo: "https://www.youtube.com/embed/bU65XgDmw5I", // ✅ Fixed
  },
  {
    title: "Virtual Assistant Web App",
    description: "Created AI-powered virtual assistant handling voice/text commands, reminders, and API integrations. Integrated Weather API, Wikipedia search, and text-to-speech for smart responses.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration"],
    image: "/projects/ai.jpg", 
    githubLink: "https://github.com/poojapatel187369/virtualAssistant",
    liveDemo: "https://virtualassistant-frontend-iq1m.onrender.com",
    videoDemo: "https://www.youtube.com/embed/uzxBWgDTpcg", // ✅ Fixed
  }
],

achievements: [
  {
    title: "B.Tech Topper - CSE Department",
    image: "/achievements/btech-topper.jpeg",
    description: "Secured top position in Computer Science Engineering department",
    type: "image"
  },
  {
    title: "Campus Placement at QSpiders",
    image: "/achievements/qspider.jpeg", 
    description: "Secured placement at QSpiders, India's leading software testing organization, recognized for dedication and technical excellence during campus recruitment.",
    type: "placement"
  },
  {
    title: "Academic Excellence Award", 
    image: "/achievements/gift-from-teacher.jpg",
    description: "Recognized for outstanding academic performance by Director & Faculty",
    type: "image"
  },
  {
    title: "Communication Skills Excellence",
    image: "/achievements/communication-certificate.jpg", 
    description: "Awarded for demonstrating exceptional communication abilities",
    type: "image"
  }
],
certificates: [
  {
    title: "MERN Stack Internship",
    organization: "Softpro India Computer Technologies",
    duration: "60 Days Summer Internship",
    date: "July 2025 - September 2025", 
    grade: "A+ Grade",
    description: "Completed comprehensive MERN Stack training with focus on MongoDB, Express.js, React.js, Node.js and RESTful APIs development",
    type: "pdf",
    pdfUrl: "/certificates/mern-internship.pdf"
  },
  {
    title: "Full Stack Web Development",
    organization: "Apna College",
    duration: "Course Completion",
    date: "2025",
    description: "Mastered full-stack web development technologies and modern web application development",
    type: "pdf", 
    pdfUrl: "/certificates/full-stack-course.pdf"
  },
  {
    title: "C Programming Certification", 
    organization: "IIT Bombay Spoken Tutorial",
    duration: "Training Program",
    date: "2023",
    grade: "65% Score",
    description: "Completed C programming certification through IIT Bombay's training program with remote examination",
    type: "pdf",
    pdfUrl: "/certificates/c-programming.pdf"
  },
  {
    title: "Introduction to Computers Training", 
    organization: "IIT Bombay Spoken Tutorial",
    duration: "Training Program",
    date: "2023",
    grade: "95% Score",
    description: "Completed Introduction to Computers certification through IIT Bombay's training program with remote examination",
    type: "pdf",
    pdfUrl: "/certificates/intro-computers.pdf"
  }
],
  socialLinks: {
    github: "https://github.com/poojapatel187369",
    linkedin: "https://www.linkedin.com/in/pooja-patel-154a842b0/", 
    email: "mailto:poojapatel187369@gmail.com"
  }
};