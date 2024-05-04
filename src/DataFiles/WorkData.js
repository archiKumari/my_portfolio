import image1 from "../Assets/Work-images/BNL/image1.png";
import image2 from "../Assets/Work-images/Petdrifts/Screen1.png";
import image3 from "../Assets/Work-images/MGS/image1.png";

const workData = [
  {
    companyName: "Maa Gyan Services",
    position: "Full Stack Developer",
    duration: "May 2023 - Present",
    skills: ["React", "Haskell","RESTful API", "Postgres"],
    description: "As a Full Stack Developer at Maa Gyan Services, I contribute in the development of a dynamic web application utilizing React, Haskell Servant, and PostgreSQL. I focus on front-end development, using React's capabilities to engineer different interfaces like online book store, in built text editor for blog and article posting etc. Also, I actively contribute to backend development, in API design, development, and integration.",
    category: "web",
    imagePath: image3,
  },
  {
    companyName: "PetDrifts Mobile",
    position: "Mobile Software Developer",
    duration: "Jan 2023 - April 2023",
    skills: ["ReactNative", "Context API", "Bluetooth", "Profiling", "Figma"],
    description:
      "As a mobile software developer at Petdrifts, I developed a mobile application for IoT device management, featuring Bluetooth connectivity for data reception from peripheral devices and backend servers. I implemented state management and data fetching logic using React Hooks and asynchronous programming techniques. Various profiling methods, such as performance, memory, and network profiling, were utilized to identify and address bottlenecks and optimize application performance.",
    category: "mobile",
    imagePath: image2,
  },
  {
    companyName: "Betiyan Nidhi Limited",
    position: "Frontend Developer",
    duration: "Aug 2022 - Dec 2022",
    skills: ["React", "Redux", "Bootstrap", "Photoshop"],
    description:
      "As a Frontend Developer at Betiyan Nidhi Limited, I played a pivotal role in the development of the company's official website. This is a user-centric digital platform enabled with a role-based access management system. Utilizing React's component-based architecture, state management with tools like Redux, and routing with React Router, I ensured the website's scalability and maintainability while delivering rich, interactive content to users.",
    category: "web",
    imagePath: image1,
  },
];

export default workData;
