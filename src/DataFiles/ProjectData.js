import image1 from "../Assets/Project-images/Phonebook/image1.png";
import image2 from "../Assets/Project-images/Expense Tracker/image1.jpg";
import image3 from "../Assets/Project-images/Snake Game/image1.png";
import image4 from "../Assets/Project-images/Dessert Delight/image1.png";

const projectData = [
  {
    projectName: "PhoneBook",
    type: "Web Application",
    description: "Full stack contacts management application",
    skills: ["React", "NodeJs", "Express", "PostgreSQL"],
    category: "web",
    imagePath: image1,
  },
  {
    projectName: "Expense Tracker",
    type: "Mobile Application",
    description: "Application for tracking monetary expenses",
    skills: ["React Native", "React Hooks", "RN Styled"],
    category: "mobile",
    imagePath: image2,
  },
  {
    projectName: "Dessert Delights",
    type: "Web Application",
    description: "Content rich website exhibiting dessert recipes",
    skills: ["WebFlow", "Figma", "UI/UX"],
    category: "web",
    imagePath: image4,
  },
  {
    projectName: "Snake Game",
    type: "Terminal Game",
    description: "Classic snake game for terminal",
    skills: ["Haskell", "Bricks"],
    category: "terminal",
    imagePath: image3,
  },
];

export default projectData;
