import image1 from "../Assets/Work-images/BNL/image1.png";
import image2 from "../Assets/Work-images/Petdrifts/Screen1.png";
import image3 from "../Assets/Work-images/MGS/image1.png";

const workData = [
  {
    companyName: "Maa Gyan Services",
    position: "Full Stack Developer",
    duration: "May 2023 - Present",
    skills: ["React", "Haskell", "RESTful API", "Postgres"],
    description:
      "As a Full Stack Developer at Maa Gyan Services, I focus on front-end development, using React's capabilities to engineer different interfaces like online book store, in-built text editor for blog and article posting etc. Also, I actively contribute to backend development, in API design, development, and integration.",
    category: "web",
    imagePath: image3,
    buttonText: "View Live Website",
    link: "https://kabirgyan.com/store/books",
  },
  {
    companyName: "PetDrifts Mobile",
    position: "Mobile Software Developer",
    duration: "Jan 2023 - April 2023",
    skills: ["ReactNative", "Figma", "Context API", "Bluetooth", "Profiling"],
    description:
      "As a mobile software developer at Petdrifts, I developed a mobile application, featuring Bluetooth connectivity for data reception from peripheral devices and backend servers. I implemented state management and data fetching logic using React Hooks and asynchronous programming techniques. Various profiling methods were utilized to identify and address bottlenecks and optimize application performance.",
    category: "mobile",
    imagePath: image2,
    buttonText: null,
    link: null,
  },
  {
    companyName: "Betiyan Nidhi Limited",
    position: "Frontend Developer",
    duration: "Aug 2022 - Dec 2022",
    skills: ["React", "Redux", "Bootstrap", "Photoshop"],
    description:
      "As a Frontend Developer at Betiyan Nidhi Limited, I played a pivotal role in the development of a user-centric digital platform enabled with a role-based access management system. Utilizing React's component-based architecture, state management and routing, I ensured delivering content to users according to their roles.",
    category: "web",
    imagePath: image1,
    buttonText: "View Live Website",
    link: "https://betiyannidhi.com/",
  },
];

export default workData;
