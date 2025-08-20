/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mehwash Nasir's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: " Portfolio",
    type: "website",
    url: "https://mehwash-nasir.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Mehwash Nasir",
  logo_name: "MehwashNasir",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1zyihKyeW8eE2T6m96kVVrRbAmgHgXv8X/view?usp=sharing",
  portfolio_repository: "https://github.com/Mehwash1505/PortfolioWebsite",
  githubProfile: "https://github.com/Mehwash1505",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Mehwash1505",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mehwash-nasir-a05524330/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gl8802@myamu.ac.in",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing responsive web interfaces using HTML5, CSS3, Bootstrap, and JavaScript",
        "⚡ Building full-stack applications with MERN Stack (MongoDB, Express, React, Node.js)",
        "⚡ Creating interactive features and focusing on UI/UX design as demonstrated in projects like Spotify Clone and Simon Says Game",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Backend & Database",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing backend services using Node.js and Express",
        "⚡ Working with databases including MongoDB and SQL",
        "⚡ Implementing REST APIs",
        "⚡ Essentials of containerization with Docker",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
      ],
    },
    {
      title: "Programming Fundamentals",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Strong foundation in C and C++ programming",
        "⚡ Basics of Python",
        "⚡ Proficient in Data Structures and Algorithms (DSA)",
        "⚡ Achieved 95% in back-end training examinations",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "DevOps & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Version control and collaboration using Git and GitHub",
        "⚡ Familiar with REST API development",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Aligarh Muslim University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "amu_logo.png",
      alt_name: "AMU",
      duration: "Aug 2023 - Present",
      descriptions: [
        "⚡ Pursuing B.Tech with a focus on computer science, mastering skills in HTML5, CSS3, JavaScript, Bootstrap, C, C++, and MERN Stack.",
        "⚡ Enrolled in Sigma 8.0 Batch 2025, completing modules on MERN Stack, DSA with C++, Quantitative Aptitude, and Logical Reasoning.",
        "⚡ Expected graduation: May 2027.",
      ],
      website_link: "https://www.amu.ac.in/",
    },
    {
      title: "Aligarh Muslim University",
      subtitle: "Higher Secondary in PCBM",
      logo_path: "amu_logo.png",
      alt_name: "AMU",
      duration: "Nov 2020 - Apr 2022",
      descriptions: ["⚡ Completed with a grade of 95.6%."],
      website_link: "https://www.amu.ac.in/",
    },
    {
      title: "Aligarh Muslim University",
      subtitle: "High School",
      logo_path: "amu_logo.png",
      alt_name: "AMU",
      duration: "May 2019 - Apr 2020",
      descriptions: ["⚡ Completed with a grade of 90.16%."],
      website_link: "https://www.amu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Freedom With AI Masterclass",
      subtitle: "- Avinash Mada",
      logo_path: "freedom.png",
      certificate_link: "https://freedomwithai.com/",
      alt_name: "Freedom With AI",
      color_code: "#00000099",
    },
    {
      title: "C & C++ Programming",
      subtitle: "- Aptech Learning",
      logo_path: "aptech_learning.png",
      certificate_link:
        "https://drive.google.com/file/d/1y2JiuXXnm6T_WyWQxrSux62RwKPa6kJW/view?usp=sharing",
      alt_name: "Aptech Learning",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Training and Skill Development",
  description:
    "I have focused on enhancing my technical skills through structured training programs and hands-on projects, aiming to contribute to web development initiatives. Proficient in Git and GitHub, I am pursuing expertise in full-stack development and DSA.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Training and Skill Development",
      work: true,
      experiences: [
        {
          title: "Trainee",
          company: "Apna College",
          company_url: "https://apnacolllege.in/",
          logo_path: "apna_college.png",
          duration: "Jun 2025 - Present",
          location: "Online",
          description:
            "Enrolled in Sigma 8.0 Batch 2025, completing modules on MERN Stack, DSA with C++, Quantitative Aptitude, and Logical Reasoning. Gaining practical skills in full-stack development and problem-solving.",
          color: "#000000",
        },
        {
          title: "Backend Development Training",
          company: "Aptech Learning",
          company_url: "https://aptech-education.com.pk/",
          logo_path: "aptech_learning1.jpeg",
          duration: "Jun 2024 - Oct 2024",
          location: "Online",
          description:
            "Completed intensive courses in C and C++ programming. Achieved 95% in course examinations, demonstrating strong foundational coding abilities.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mehwash_logo.png",
    description:
      "I am available through various social media platforms and professional networks. Please feel free to contact me at your convenience. I am equipped to assist with web development and the MERN Stack. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
