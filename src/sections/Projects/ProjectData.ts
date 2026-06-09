import shopnestImage from "../../assets/projects/shopnest.png";
import moodfitImage from "../../assets/projects/moodfit-ai.png";
import serlImage from "../../assets/projects/serl.png";

export const featuredProject = {
  title: "ShopNest",
  category: "Multi-Vendor Marketplace",
  year: "2025",
  status: "Production Ready",

  image: shopnestImage,

  showcase:
    "https://www.linkedin.com/posts/laxmikant-s-b559b332a_mernstack-fullstackdeveloper-nodejs-activity-7430095039772508160-NVVt",

  description:
    "Full-stack multi-vendor commerce platform enabling customers, sellers and administrators to manage products, payments, orders and marketplace operations through a scalable MERN architecture.",

  highlights: [
    "3 User Roles",
    "RBAC",
    "Razorpay",
    "Inventory",
    "Order Lifecycle",
  ],

  tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
};

export const projects = [
  {
    title: "MoodFit AI",
    category: "AI Wellness Platform",
    year: "2024",
    status: "Completed",

    image: moodfitImage,

    github: "https://github.com/LAXMIKANT02/MoodFit",

    showcase:
      "https://www.linkedin.com/posts/laxmikant-s-b559b332a_ai-machinelearning-healthtech-activity-7377202769595625472-3V_t",

    description:
      "AI-powered wellness assistant combining exercise tracking, posture monitoring, emotion recognition and detailed analytics using computer vision.",

    highlights: [
      "Pose Detection",
      "Emotion AI",
      "Posture Tracking",
      "Analytics",
    ],

    tech: ["Python", "MediaPipe", "OpenCV", "AI"],
  },

  {
    title: "SERL",
    category: "Emergency Response System",
    year: "2024",
    status: "Completed",

    image: serlImage,

    github: "https://github.com/LAXMIKANT02/SERL",

    showcase:
      "https://www.linkedin.com/posts/laxmikant-s-b559b332a_laravel-fullstackdevelopment-internship-activity-7367589730076565506-nQkc",

    description:
      "Emergency response platform enabling SOS alerts, live location tracking, contact management and crisis response workflows.",

    highlights: ["SOS Alerts", "Live Maps", "Contacts", "Geolocation"],

    tech: ["Laravel", "PHP", "MySQL", "Leaflet"],
  },
];
