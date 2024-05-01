import image1 from "../Assets/Project-images/Phonebook/image1.png";
import image2 from "../Assets/Project-images/Expense Tracker/screen1.png";
import image3 from "../Assets/Project-images/Snake Game/image1.png";
import image4 from "../Assets/Project-images/Dessert Delight/image1.png";

const projectData = [
  {
    projectName: "Dessert Delights",
    type: "Web Application",
    description: "Dessert delights .With Webflow's versatile tools, the website is crafted to be visually stunning, drawing visitors in with enticing imagery and layouts. Figma's wireframes ensure intuitive navigation, while responsive design ensures accessibility across devices.",
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
    description: "The game offers a captivating rendition of the classic Snake game with sleek visuals, intuitive controls, and robust event handling, showcasing the elegance and expressiveness of functional programming in Haskell.",
    skills: ["Haskell", "Bricks"],
    category: "terminal",
    imagePath: image3,
  },
  {
    projectName: "Expense Tracker",
    type: "Mobile Application",
    description: "This application offers a comprehensive solution for managing expenses through the integration of features such as transaction logging, dynamic chart visualizations. With a focus on scalability, performance, and usability, this project showcases the technical prowess and innovative solutions inherent in modern mobile development with React Native and Expo.",
    skills: ["React Native", "React Hooks", "Expo"],
    category: "mobile",
    imagePath: image2,
  },
];

export default projectData;
