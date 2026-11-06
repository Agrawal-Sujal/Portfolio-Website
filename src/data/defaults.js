/**
 * Default portfolio content (taken from the previous portfolio's data files).
 *
 * - The site shows this when Firebase is not configured or can't be reached.
 * - `npm run seed` uploads it to Firestore so you can edit it there afterwards.
 *
 * Firestore layout (one document per item unless noted):
 *   profile/main          single document
 *   skills/main           single document
 *   highlights/{id}       home page stat cards
 *   proficiency/{id}      home page "Technical proficiency" cards
 *   experience/{id}       resume (shown under profile.pages.resume.experience)
 *   education/{id}        resume
 *   achievements/{id}     resume
 *   profiles/{id}         resume "Coding Profiles"
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
    role: "Android & Backend Developer",
    location: "Jabalpur, India",
    avatar: "/avatar.jpg",
    hero: {
      struck: "Building Projects",
      line: "Building Scalable",
      accent: "Products",
    },
    greeting: "Hi, I'm",
    intro:
      "Aspiring Software Engineer and final-year B.Tech student with a strong foundation in Data Structures, Algorithms, and full-stack development. Experienced in building scalable web and Android applications, with a keen interest in scalable architectures and system design. Currently studying at",
    affiliation: "IIIT Jabalpur",
    affiliationUrl: "",
    statusLine:
      "I'm now looking for software engineering roles where I can apply my problem solving skills and build impactful, scalable products.",
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

  highlights: [
    {
      id: "leetcode",
      order: 1,
      icon: "terminal",
      value: "2208",
      label: "LeetCode Rating",
      title: "Guardian",
      text: "Global rank 154 among 40,000+ participants in LeetCode Weekly Contest 513.",
    },
    {
      id: "icpc",
      order: 2,
      icon: "zap",
      value: "Rank 500",
      label: "ICPC Prelims",
      title: "Chennai Regionals",
      text: "Secured Rank 500 among 5,000+ teams in ICPC Preliminary Contest and qualified for Chennai Regionals.",
    },
  ],

  // type "tags" → chips, "stats" → big numbers, "list" → icon rows
  proficiency: [
    {
      id: "android",
      order: 1,
      type: "tags",
      icon: "layers",
      tone: "indigo",
      title: "Android Development",
      items: ["Android SDK", "Kotlin", "Jetpack Compose", "XML", "Room DB", "WorkManager"],
    },
    {
      id: "backend-data",
      order: 2,
      type: "tags",
      icon: "database",
      tone: "green",
      title: "Backend & Systems",
      items: ["Spring Boot", "Django REST Framework", "Express.js", "REST API", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    },
    {
      id: "problem-solving",
      order: 3,
      type: "stats",
      icon: "trophy",
      tone: "amber",
      title: "Problem Solving",
      stats: [
        { value: "2208", label: "LeetCode Guardian" },
        { value: "1800+", label: "DSA Problems solved" },
      ],
    },
    {
      id: "tools",
      order: 4,
      type: "list",
      icon: "code",
      tone: "sky",
      title: "Tools & Workflow",
      list: [
        { label: "Git & GitHub", icon: "git" },
        { label: "Docker & Redis", icon: "cloud" },
        { label: "Spring Boot & REST", icon: "terminal" },
        { label: "Postman & AWS", icon: "layers" },
      ],
    },
  ],

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
        "Developed a full-stack location-based photo journaling platform across Android (Kotlin, Jetpack Compose), Web (React, Tailwind), and Spring Boot, integrating automated EXIF geotagging, and privacy-controlled social photo sharing.",
        "Engineered a custom 2D KD-Tree with O(N log N) median-split construction and O(depth) dynamic leaf insertions, supporting fast 2D range search and Euclidean radius querying.",
        "Architected a hierarchical multi-zoom clustering pyramid (zooms 0–21) with weighted centroid aggregation; shifted spatial computation off the UI thread to execute O(log N + K) bounding-box viewport queries, rendering 5,000+ photo pins with zero UI latency.",
        "Built an offline-first sync engine with Android WorkManager and Room DB, maintaining a local write-ahead sync queue and replicating mutations via cursor-based delta REST endpoints with conflict resolution.",
      ],
      tech: [
        "Android",
        "Jetpack Compose",
        "Kotlin",
        "Spring Boot",
        "Google Maps SDK",
        "Room DB",
        "WorkManager",
        "React",
        "Tailwind",
      ],
      links: [
        { label: "Source Code", url: "https://github.com/Agrawal-Sujal/PinPic", kind: "github" },
        { label: "Download APK", url: "", kind: "download" },
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
        "Engineered a high-throughput URL shortener in Spring Boot featuring sequential Base62 encoding, custom aliases, and AES-encrypted password protection.",
        "Optimized the redirect hot-path using Redis Hash entity caching, eliminating redundant database queries and reducing average latency by 37%.",
        "Implemented asynchronous write-behind analytics using Redis and PostgreSQL, with distributed locking and batch synchronization to eliminate database writes on the redirect path.",
        "Architected a fault-tolerant 3-node cluster using Nginx round-robin load balancing and atomic Lua-scripted rate limiting.",
        "Benchmarked system using k6 across 3,000 URLs, sustaining 1,440+ req/sec with 3.16 ms avg latency (p95 < 8 ms) and 0% error rate over 173K+ requests under 100 concurrent users.",
      ],
      tech: [
        "Spring Boot",
        "React",
        "Redis",
        "PostgreSQL",
        "Nginx",
        "Docker",
        "k6",
        "Lua",
      ],
      links: [
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
