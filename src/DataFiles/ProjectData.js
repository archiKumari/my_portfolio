import image1 from "../Assets/Project-images/Phonebook/image1.png";
import image2 from "../Assets/Project-images/Expense Tracker/screen1.png";
import image3 from "../Assets/Project-images/Snake Game/image1.png";
import image4 from "../Assets/Project-images/Dessert Delight/image1.png";

const projectData = [
  {
    projectName: "Dessert Delights",
    type: "Web Application",
    description: "Content rich website exhibiting dessert recipes",
    skills: ["WebFlow", "Figma", "UI/UX"],
    category: "web",
    imagePath: image4,
  },
  {
    projectName: "PhoneBook",
    type: "Web Application",
    description: "The Phonebook Application utilizes React.js for the frontend and Node.js with Express.js for the backend along with database management with PostgreSQL, it offers a seamless user experience for managing contacts. The application includes advanced functionalities such as image URL support and favorite contact tagging along with CRUD operations.",
    skills: ["React", "NodeJs", "Express", "PostgreSQL"],
    category: "web",
    imagePath: image1,
  },
  {
    projectName: "Snake Game",
    type: "Terminal Game",
    description: "Classic snake game for terminal",
    skills: ["Haskell", "Bricks"],
    category: "terminal",
    imagePath: image3,
  },
  {
    projectName: "Expense Tracker",
    type: "Mobile Application",
    description: "Application for tracking monetary expenses",
    skills: ["React Native", "React Hooks", "Expo"],
    category: "mobile",
    imagePath: image2,
  },
];

export default projectData;
