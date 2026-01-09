// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import cursorLogo from './assets/tech_logo/Cursor.png';
import kiroLogo from './assets/tech_logo/kiro1.png';
import colabLogo from './assets/tech_logo/colab.png';
import sqlLogo from './assets/tech_logo/sql-server.png';
import blockchainLogo from './assets/tech_logo/blockchain (1).png';
import machineLearningLogo from './assets/tech_logo/machine-learning.png';
import n8nLogo from './assets/tech_logo/n8n.png';

// Experience Section Logo's (commented out since Experience section was removed)
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import mpsLogo from './assets/education_logo/mps.jpg';
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import jobTrackerLogo from './assets/work_logo/job Tracker img.png';
import tdeeCalculatorLogo from './assets/work_logo/tdee.png';
import skinCancerLogo from './assets/work_logo/Cancer cell.png';


export const SkillsInfo = [
  {
    title: 'Frontend & Backend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Cursor', logo: cursorLogo },
      { name: 'Kiro', logo: kiroLogo },
      { name: 'Colab', logo: colabLogo },
      {  logo: n8nLogo },
    ],
  },
  {
    title: 'Technologies Known',
    skills: [
      { name: 'Blockchain', logo: blockchainLogo },
      { name: 'Machine Learning', logo: machineLearningLogo },
    ],
  },
];

  // Experiences section commented out since it was removed from the portfolio
  // export const experiences = [
  //   {
  //     id: 0,
  //     img: webverseLogo,
  //     role: "Fullstack Developer",
  //     company: "Webverse Digital",
  //     date: "April 2024 - Present",
  //     desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React JS",
  //       "TypeScript",
  //       "Node JS",
  //       "Tailwind CSS",
  //       "MongoDb",
  //       "Redux",
  //       " Next Js",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     img: newtonschoolLogo,
  //     role: "Frontend Intern",
  //     company: "Newton School",
  //     date: "September 2021 - August 2022",
  //     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //     skills: [
  //       "HTML",
  //       "CSS",
  //       "Javascript",
  //       "Bootstrap",
  //       "Figma",
  //       "Material UI",
  //     ],
  //   },
  // ];
  
  export const education = [
    {
      id: 0,
      img: mpsLogo,
      school: "MGM University IICT",
      date: "Sept 2022 - june 2026",
      grade: "8.02 CGPA",
      desc: "I am pursuing my Bachelor's degree (B.Tech) in Information Technology from MGM University, Chh. Sambhajinagar. During my time at MGM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Blockchain, Machine learnig, Quantum computing, Database Management Systems, Web Development. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B.Tech IT",
    },
    {
      id: 1,
      img: mpsLogo,
      school: "New High School, Chowka",
      date: "Aug 2019 - june 2021",
      grade: "91.2%",
      desc: "I completed my HSC (Class XII) from New High School College, Chowka, Chh. Sambhajinagar, where i studied subjects like PCMB Science stream.",
      degree: "HSC XII",
    },
    {
      id: 2,
      img: mpsLogo,
      school: "Maharashtra Public School, Chh. Sambhajinagar",
      date: "Apr 2009 - March 2019",
      grade: "93.2%",
      desc: "I completed my SSC Class X from Maharashtra Public School, Chh. Sambhajinagar, under the State Board board.",
      degree: "SSC X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Job Tracker – Web Application",
      description:"Built a full-stack job tracking app using Node.js, Express.js, MySQL, and Python.Implemented user authentication, job management, and status tracking with a modern, responsive UI. Integrated a Python microservice to automatically parse job details from URLs",
      image: jobTrackerLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js","mysql","Python","Flask",],
      github: "https://github.com/Aakashsusar/JobTracker",
      webapp: " ",
    },
    {
      id: 1,
      title: "Total Daily Energy Expenditure (TDEE) calculator",
      description:
        "Developed a responsive and interactive Total Daily Energy Expenditure (TDEE) calculator website using HTML , CSS , and JavaScript . ",
      image: tdeeCalculatorLogo,
      tags: ["HTML", "CSS", "JavaScript","Netlify"],
      github: "https://github.com/Aakashsusar/Tdee_Clculator",
      webapp: "https://aakash-tdee.netlify.app/",
    },
    {
      id: 2,
      title: "Skin Cancer Cell Detection using CNN with Keras",
      description:
        "I have Developed a deep learning model to classify cancer cell images as benign or malignant using a custom Convolutional Neural Network (CNN) . ",
      image: skinCancerLogo,
      tags: ["Python", "TensorFlow", "Flask", "HTML", "CSS", "Bootstrap", "OpenCV","NumPy"],
      github: "https://github.com/Aakashsusar/SkinCancerCell",
      webapp: "https://skincancer-cell-detection.onrender.com ",
    },
    {
      id: 3,
      title: "Online Testing App ",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends.",
      image: tdeeCalculatorLogo,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap","Firebase Firestore","Firebase Authentication"],
      github: " ",
      webapp: " ",
    },
  ];  