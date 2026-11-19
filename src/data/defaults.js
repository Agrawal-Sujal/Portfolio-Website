/**
 * Default portfolio content (taken from the previous portfolio's data files).
 *
 * - The site shows this when Firebase is not configured or can't be reached.
 * - `npm run seed` uploads it to Firestore so you can edit it there afterwards.
 *
 * Firestore layout (one document per item unless noted):
 *   profile/main          single document
 *   skills/main           single document
 *   experience/{id}       resume (shown under profile.pages.resume.experience)
 *   education/{id}        resume
 *   achievements/{id}     resume
 *   profiles/{id}         resume "Coding Profiles"
 *   por/{id}              resume "Positions of Responsibility"
 *   certifications/{id}   resume (section hidden when empty)
 *   projects/{id}         projects page
 *
 * Every collection document has a numeric `order` field (lowest shows first).
 * This file must stay plain JavaScript (no JSX, no import.meta) so the seed
 * script can import it from Node.
 */

export const defaults = {
  profile: {
    name: "Sujal Agrawal",
    location: "Jabalpur, India",
    avatar: "/avatar.jpg",
    summary:
      "Aspiring Software Engineer and final-year B.Tech student with a strong foundation in Data Structures, Algorithms, and full-stack development. Experienced in building scalable web and Android applications, with a keen interest in scalable architectures and system design.",
    welcome: {
      title: "Glad to have you here.",
      text: "Feel free to reach out for collaborations or just a friendly hello!",
    },
    notice: {
      title: "Open to Work",
      text: "I'm looking for software engineering roles where I can build impactful, scalable products. If you think I'd be a fit, I'd love to chat!",
    },
    // A row only shows in the right panel when its URL is set.
    links: {
      email: "sujalagrawal2703@gmail.com",
      github: "https://github.com/Agrawal-Sujal",
      linkedin: "https://www.linkedin.com/in/sujalagrawal47",
      twitter: "",
      resume: "/Resume.pdf",
    },
    pages: {
      resume: {
        experience: "Experience & Leadership",
      },
      projects: {
        title: "Some cool stuff I've built",
        subtitle: "",
        note: "",
      },
    },
  },

  skills: {
    languages: ["C", "C++", "Java", "Python", "Kotlin", "JavaScript"],
    fundamentals: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    android: ["Android SDK", "Jetpack Compose", "XML"],
    backend: ["REST API", "Django REST Framework", "Spring Boot", "Express.js"],
    webTools: ["React.js", "PostgreSQL", "MongoDB", "Firebase", "Git", "GitHub", "Redis", "Docker"],
    technologies: [
      "Android SDK",
      "Jetpack Compose",
      "XML",
      "Spring Boot",
      "Django REST Framework",
      "Express.js",
      "REST API",
      "React.js",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Redis",
      "Docker",
    ],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Redis",
      "Postman",
      "AWS",
      "Vercel",
      "Render",
      "Figma",
    ],
  },

  experience: [
    {
      id: "fusion-iiit",
      order: 1,
      role: "Dashboard Module Lead",
      company: "Fusion-IIIT",
      location: "IIIT Jabalpur",
      start: "Jan 2026",
      end: "Apr 2026",
      bullets: [
        "Led a 10-member team to develop the Dashboard module, delivering personalized role-based views for students, faculty, staff, and administrators by aggregating data from multiple Fusion-IIIT modules",
        "Collaborated with module teams to establish application-wide UI and design consistency, reviewing implementations, identifying inconsistencies, and guiding teams toward a unified design system",
        "Designed and implemented dashboard features including widgets, quick links, announcements, notifications, recent activity, calendar events, and upcoming deadlines to provide users with a unified landing experience",
      ],
    },
  ],

  education: [
    {
      id: "iiitj",
      order: 1,
      school: "Indian Institute of Information Technology, Jabalpur",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      grade: "GPA: 8.0",
      location: "Jabalpur, India",
      start: "Aug 2023",
      end: "May 2027",
    },
  ],

  achievements: [
    {
      id: "coderumble",
      order: 1,
      title: "Won CodeRumble 4.0",
      text: "A 5-hour inter-college coding contest among 120+ teams.",
    },
    {
      id: "can-you-hack-it",
      order: 2,
      title: "Won Can You Hack It",
      text: "A 24-hour intra-college hackathon among 50+ teams.",
    },
    {
      id: "aidothon",
      order: 3,
      title: "1st Runner-up in Aidothon Walker App Challenge 2025",
      text: "Built an accessibility-focused solution among 100+ teams.",
    },
    {
      id: "code-arena",
      order: 4,
      title: "1st Runner-up in Code Arena",
      text: "An inter-college coding contest among 100+ participants.",
    },
    {
      id: "newbie",
      order: 5,
      title: "2nd Runner-up in Newbie",
      text: "An intra-college coding contest among 350+ participants.",
    },
    {
      id: "lockouts",
      order: 6,
      title: "2nd Runner-up in Lockouts",
      text: "An inter-college 1v1 coding contest among 200+ participants.",
    },
    {
      id: "icpc",
      order: 7,
      title: "ICPC Chennai Regionals Qualifier",
      text: "Secured Rank 500 among 5,000+ teams in the ICPC Preliminary Contest and qualified for the Chennai Regionals.",
    },
    {
      id: "leetcode-513",
      order: 8,
      title: "Global Rank 154 in LeetCode Contest 513",
      text: "Ranked 154 among 40,000+ participants in LeetCode Weekly Contest 513.",
    },
    {
      id: "codechef-182",
      order: 9,
      title: "Global Rank 18 in CodeChef Starter 182",
      text: "Ranked 18 among 30,000+ participants in CodeChef Starter 182.",
    },
    {
      id: "problems-solved",
      order: 10,
      title: "1800+ Problems Solved",
      text: "Solved 1800+ problems in Data Structures and Algorithms across leading competitive programming platforms; performance summary available on Codolio.",
    },
  ],

  profiles: [
    {
      id: "codeforces",
      order: 1,
      platform: "Codeforces",
      username: "sujalagrawal",
      rating: "Expert - 1621",
      url: "https://codeforces.com/profile/sujalagrawal",
      icon: "code",
    },
    {
      id: "leetcode",
      order: 2,
      platform: "LeetCode",
      username: "sujalagrawal47",
      rating: "Guardian - 2208",
      url: "https://leetcode.com/sujalagrawal47",
      icon: "code",
    },
    {
      id: "codechef",
      order: 3,
      platform: "CodeChef",
      username: "sujalagrawal47",
      rating: "4-Star - 1935",
      url: "https://www.codechef.com/users/sujalagrawal47",
      icon: "code",
    },
    {
      id: "github",
      order: 4,
      platform: "GitHub",
      username: "Agrawal-Sujal",
      rating: "500+ contributions",
      url: "https://github.com/Agrawal-Sujal",
      icon: "github",
    },
  ],

  por: [
    {
      id: "bitbyte",
      order: 1,
      role: "BitByte Core Member (TPC)",
      company: "IIIT Jabalpur",
      location: "",
      start: "Aug 2024",
      end: "Present",
      bullets: [
        "Conducted Competitive Programming and Android Development workshops for junior students and contributed to organizing technical events and hackathons",
      ],
    },
    {
      id: "mentor",
      order: 2,
      role: "Programming Mentor",
      company: "IIIT Jabalpur",
      location: "",
      start: "Oct 2024",
      end: "Present",
      bullets: [
        "Mentored juniors in Competitive Programming and software development, guiding them in problem solving, programming fundamentals, and project development",
      ],
    },
  ],

  certifications: [],

  projects: [
    {
      id: "pinpic",
      order: 1,
      icon: "layers",
      tone: "indigo",
      title: "PinPic",
      badge: "",
      bullets: [
        "Turn your camera roll into an interactive world map by automatically pinning photos to the exact places they were taken across Android and Web.",
        "Explore thousands of memories smoothly as nearby photos group cleanly by neighborhood, city, or country while you zoom and pan.",
        "Keep shooting even without signal — new photos and edits save locally on your device and sync automatically once you are back online.",
        "Decide who sees every memory with per-photo Private, Friends, and Public sharing controls.",
      ],
      tech: [
        "Android",
        "Jetpack Compose",
        "Kotlin",
        "React",
        "Spring Boot",
        "PostgreSQL",
        "AWS S3",
      ],
      links: [
        { label: "Live Website", url: "https://pinpic.sujalagrawal.in", kind: "live" },
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/PinPic", kind: "github" },
      ],
      timeline: [
        { date: "June 2026", title: "Project Inception", text: "Architecture design & offline-first sync engine implementation." },
      ],
    },
    {
      id: "ctrllink",
      order: 2,
      icon: "server",
      tone: "sky",
      title: "CtrlLink",
      badge: "",
      bullets: [
        "Shorten long URLs into clean, memorable links organized inside custom nested folders like work/reports or youtube/tutorials.",
        "Keep sensitive links safe with optional password protection, expiration timers, and downloadable QR codes ready to share anywhere.",
        "Track every click in real time through an interactive dashboard showing hourly trends, countries, devices, and referral sources.",
        "Built for instant redirects that stay fast and reliable even under heavy traffic spikes.",
      ],
      tech: [
        "Spring Boot",
        "React",
        "TypeScript",
        "Redis",
        "PostgreSQL",
        "Nginx",
        "Docker",
      ],
      links: [
        { label: "Live Website", url: "https://ctrllink.sujalagrawal.in", kind: "live" },
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/CtrlLink", kind: "github" },
      ],
      timeline: [
        { date: "Sept 2026", title: "Cluster & Benchmark", text: "Benchmarked 1,440+ req/sec with 3-node cluster and Nginx load balancing." },
      ],
    },
    {
      id: "chaperone",
      order: 3,
      icon: "user",
      tone: "purple",
      title: "Chaperone",
      badge: "",
      bullets: [
        "Built a peer-to-peer companionship platform connecting seniors and mobility-challenged users with verified companions.",
        "Developed a real-time GPS tracking system using Django Channels and Google Maps SDK for live safety monitoring.",
        "Integrated Razorpay SDK for secure payments and donation tracking with role-based dashboards.",
      ],
      tech: ["Android", "Django", "Razorpay", "Google Maps SDK", "WebSockets"],
      links: [
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/Chaperone-Android", kind: "github" },
        { label: "Download APK", url: "https://portfolio-sujal.s3.ap-south-1.amazonaws.com/Chaperone.apk", kind: "download" },
      ],
      timeline: [],
    },
    {
      id: "cropchain",
      order: 2,
      icon: "layers",
      tone: "green",
      title: "CropChain",
      badge: "",
      bullets: [
        "Developed a decentralized app enabling farmers to upload crop images and receive expert feedback.",
        "Integrated blockchain smart contracts to ensure tamper-proof records and secure transactions.",
        "Used IPFS (Pinata) for decentralized storage and Firebase FCM for real-time notifications.",
      ],
      tech: ["Android", "Blockchain (Solidity)", "MetaMask", "IPFS (Pinata)", "Firebase FCM"],
      links: [
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/CropChain-Android", kind: "github" },
        { label: "Download APK", url: "https://portfolio-sujal.s3.ap-south-1.amazonaws.com/CropChain.apk", kind: "download" },
      ],
      timeline: [],
    },
    {
      id: "niyam",
      order: 3,
      icon: "code",
      tone: "sky",
      title: "Niyam",
      badge: "",
      bullets: [
        "Built a collaborative task management app supporting personal and group tasks using MVVM architecture.",
        "Implemented subtasks, real-time activity notifications, and friend request system.",
        "Designed a scalable backend using Django REST Framework for synchronization and user management.",
      ],
      tech: ["Android", "Jetpack Compose", "Django REST Framework"],
      links: [
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/Niyam", kind: "github" },
        { label: "Download APK", url: "https://portfolio-sujal.s3.ap-south-1.amazonaws.com/Niyam.apk", kind: "download" },
      ],
      timeline: [],
    },
  ],
};
