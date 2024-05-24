import image1 from "../Assets/Project-images/Phonebook/image1.png";
import image2 from "../Assets/Project-images/Expense Tracker/screen1.png";
import image3 from "../Assets/Project-images/Snake Game/image1.png";
import image4 from "../Assets/Project-images/Dessert Delight/image1.png";

const projectData = [
  {
    projectName: "Dessert Delights",
    type: "Web Application",
    description:
      "Crafted with precision using Webflow, this dessert recipe website offers a tempting array of sweet delights. Designed with user-friendly wireframes and prototypes in Figma, this site is your go-to destination for all things sweet and delicious. From responsive layouts to interactive features, every technical aspect is optimized to create a smooth and engaging browsing experience, making cooking and baking a pleasure for users of all skill levels",
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
      "The Phonebook Application utilizes React.js for the frontend and Node.js with Express.js for the backend along with database management with PostgreSQL, it offers a seamless user experience for managing contacts. The application includes advanced functionalities such as image URL support and favorite contact tagging along with CRUD operations.",
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
      "This application is my rendition of the classic Snake game, developed entirely in Haskell and designed to run seamlessly in the terminal environment. Leveraging the power of various Haskell libraries, this project showcases the versatility and expressiveness of functional programming paradigms. With sleek visuals, smooth gameplay, and robust testing, this offers a captivating experience for enthusiasts of both retro gaming and functional programming.",
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
      "This application offers a comprehensive solution for managing expenses through the integration of features such as transaction logging, dynamic chart visualizations. With a focus on scalability, performance, and usability, this project showcases the technical prowess and innovative solutions inherent in modern mobile development with React Native and Expo.",
    skills: ["React Native", "Firebase", "Data Visualization", "Expo"],
    category: "mobile",
    imagePath: image2,
    buttonText: "View Project",
    link: "https://github.com/archiKumari/ExpressionParser",
  },
];

export default projectData;
