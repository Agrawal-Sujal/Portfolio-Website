import chaperone from "../assets/projects/chaperone.png";
import portfolio from "../assets/projects/portfolio2.png";
import niyam from "../assets/projects/niyam2.png";
import cropchain from "../assets/projects/cropchain.png";

export const projects = [
  {
    title: "Chaperone",
    tech: ["Android", "Django", "Razorpay", "Google Maps SDK", "WebSockets"],
    points: [
      "Built a peer-to-peer companionship platform connecting seniors and mobility-challenged users with verified companions.",
      "Developed a real-time GPS tracking system using Django Channels and Google Maps SDK for live safety monitoring.",
      "Integrated Razorpay SDK for secure payments and donation tracking with role-based dashboards.",
    ],
    github: "https://github.com/Agrawal-Sujal/Chaperone-Android",
    apk: "/apk/chaperone.apk",
    details: "/projects/chaperone",
    image: chaperone,
  },
  {
    title: "CropChain",
    tech: [
      "Android",
      "Blockchain (Solidity)",
      "MetaMask",
      "IPFS (Pinata)",
      "Firebase FCM",
    ],
    points: [
      "Developed a decentralized app enabling farmers to upload crop images and receive expert feedback.",
      "Integrated blockchain smart contracts to ensure tamper-proof records and secure transactions.",
      "Used IPFS (Pinata) for decentralized storage and Firebase FCM for real-time notifications.",
    ],
    github: "https://github.com/Agrawal-Sujal/CropChain-Android",
    apk: "/apk/cropchain.apk",
    details: "/projects/cropchain",
    image: cropchain,
  },
  {
    title: "Niyam",
    tech: ["Android", "Jetpack Compose", "Django REST Framework"],
    points: [
      "Built a collaborative task management app supporting personal and group tasks using MVVM architecture.",
      "Implemented subtasks, real-time activity notifications, and friend request system.",
      "Designed a scalable backend using Django REST Framework for synchronization and user management.",
    ],
    github: "https://github.com/Agrawal-Sujal/Niyam",
    apk: "/apk/niyam.apk",
    details: "/projects/niyam",
    image: niyam,
  },
  {
    title: "Portfolio Website",
    tech: ["React", "AWS"],
    points: ["My portfolio website"],
    github: "https://github.com/Agrawal-Sujal/Portfolio-Website",
    details: "/projects/portfolio",
    image: portfolio,
  },
];
