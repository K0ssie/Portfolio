import taskManager from '../images/task-manager.png';
import portfolio from '../images/portfolio.png';
import librarySystem from '../images/library-system.png';
import weatherApp from '../images/weather-app.png'; // match filename exactly

const projects = [
  {
    name: "Task Manager Web App",
    description: "A full-stack task management tool with deadlines, status tracking, and user authentication. Built with React and Node.js.",
    image: taskManager,
    link: "https://yourdomain.com/task-manager"
  },
  {
    name: "Personal Portfolio",
    description: "A responsive personal website to showcase my resume, technical skills, and projects. Built with React and deployed on GitHub Pages.",
    image: portfolio,
    link: "https://yourusername.github.io"
  },
  {
    name: "Library Management System",
    description: "A Java-based desktop application to manage library books, members, and borrow/return history with an integrated MySQL database.",
    image: librarySystem,
    link: "https://github.com/yourusername/library-system"
  },
  {
    name: "Weather App API",
    description: "A React-based weather dashboard that fetches real-time weather data using the OpenWeather API, complete with search functionality.",
    image: weatherApp,
    link: "https://weather.yourdomain.com"
  }
];

export default projects;

