import image1 from "../Assets/Project-images/Phonebook/image1.png";
import image2 from "../Assets/Project-images/Expense Tracker/screen1.png";
import image3 from "../Assets/Project-images/Snake Game/image1.png";
import image4 from "../Assets/Project-images/Dessert Delight/image1.png";

const projectData = [
  {
    projectName: "Dessert Delights",
    type: "Web Application",
    description:
      "Designed with user-friendly wireframes and prototypes in Figma and developed using Webflow, this website offers a tempting array of sweet delights. From responsive layouts to interactive features, every technical aspect is optimized to create a smooth and engaging browsing experience for the users.",
    skills: ["WebFlow", "Figma", "Web Design", "Prototyping"],
    category: "web",
    imagePath: image4,
    buttonText: "View Live Website",
    link: "https://bakery-e0ca54.webflow.io/baking-recipes",
  },
  {
    projectName: "PhoneBook",
    type: "Web Application",
    description:
      "The Phonebook Application utilizes react for the frontend, nodeJS and express for the backend along with database management with PostgreSQL. The contact management application includes advanced functionalities such as image URL support and favorite contact tagging along with CRUD operations.",
    skills: ["React", "NodeJs", "Express", "PostgreSQL"],
    category: "web",
    imagePath: image1,
    buttonText: "View Project",
    link: "https://github.com/archiKumari/phone-book",
  },
  {
    projectName: "Snake Game",
    type: "Terminal Game",
    description:
      "This application is my rendition of the classic Snake game, developed entirely in Haskell and designed to run in the terminal environment. With sleek visuals, smooth gameplay, and robust testing, this offers a captivating experience for enthusiasts of both retro gaming and functional programming.",
    skills: ["Haskell", "Terminal Game", "Bricks"],
    category: "terminal",
    imagePath: image3,
    buttonText: "View Project",
    link: "https://github.com/archiKumari/Haskell-Snake",
  },
  {
    projectName: "Expense Tracker",
    type: "Mobile Application",
    description:
      "This application offers a comprehensive solution for managing expenses through integration of features like transaction logging, dynamic chart visualizations etc. With a focus on scalability, performance, and usability, this project showcases the technical prowess inherent in React Native and Expo.",
    skills: ["React Native", "Firebase", "Data Visualization", "Expo"],
    category: "mobile",
    imagePath: image2,
    buttonText: "View Project",
    link: "https://github.com/archiKumari/ExpressionParser",
  },
];

export default projectData;
