import engineeringImage from "../../assets/education/engineering.jpg";
import puImage from "../../assets/education/pu.jpg";
import schoolImage from "../../assets/education/school.jpg";

export const educationData = [
  {
    id: 1,
    year: "2023",
    title: "Computer Science Engineering",
    institution: "Dayanand Sagar Academy of Technology & Management",
    duration: "2023 - Present",
    description:
      "Focused on Full Stack Development, Cloud Computing and Software Engineering while building real-world projects, completing internships and strengthening software engineering fundamentals.",
    image: engineeringImage,
    current: true,
  },

  {
    id: 2,
    year: "2021",
    title: "Pre-University Education",
    institution: "Gurukul PU College",
    duration: "2021 - 2023",
    description:
      "Built strong analytical and problem-solving skills through Physics, Chemistry and Mathematics, creating the foundation for engineering and technical studies.",
    image: puImage,
    current: false,
  },

  {
    id: 3,
    year: "2010",
    title: "School Education",
    institution: "Shree Sangam Vidya Mandir",
    duration: "2010 - 2021",
    description:
      "Developed academic fundamentals, discipline and curiosity that sparked an early interest in technology, engineering and continuous learning.",
    image: schoolImage,
    current: false,
  },
];
