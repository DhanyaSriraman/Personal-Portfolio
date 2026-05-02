/* Personal Portfolio Configuration File */

// Splash Screen
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Dhanya Sriraman",
  title: "Hi all, I'm Dhanya Sriraman",
  subTitle: emoji(
    "Full Stack Software Engineer specializing in scalable backend systems using Java & Spring Boot and building modern frontend applications with React & Angular."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// Social Links
const socialMediaLinks = {
  github: "https://github.com/DhanyaSriraman",
  linkedin: "https://www.linkedin.com/in/dhanya-sriraman/",
  gmail: "dhanyasriraman@gmail.com",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK ENGINEER FOCUSED ON PERFORMANCE AND SCALABILITY",
  skills: [
    emoji(
      "⚡ Develop scalable backend architectures using Java, Spring Boot, and Microservices"
    ),
    emoji("⚡ Build responsive front-end apps using React and Angular"),
    emoji("⚡ Optimize system performance and reduce latency in enterprise systems"),
    emoji("⚡ Build CI/CD pipelines and automation using GitLab and Docker"),
  ],

  softwareSkills: [
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "Spring", fontAwesomeClassname: "fas fa-leaf" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },

  { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },

  { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
],
  display: true,
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Madras Institute of Technology, Chennai",
      logo: require("./assets/images/mitLogo.png"),
      subHeader: "BE Computer Science",
      duration: "Aug 2020 - June 2024",
      desc: "Graduated with First Class with Distinction",
      descBullets: ["GPA: 8.97"],
    },
  ],
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend (Java/Spring Boot)", progressPercentage: "95%" },
    { Stack: "Frontend (React/Angular)", progressPercentage: "85%" },
    { Stack: "DevOps & Systems", progressPercentage: "80%" },
  ],
  displayCodersrank: false,
};

//Work 
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Barclays Global Service Centre",
      companylogo: require("./assets/images/barclaysLogo.png"),
      date: "July 2024 – Present",
      desc: "Backend Engineer focused on building scalable, high-performance enterprise systems.",
      descBullets: [
        "Re-architected high-throughput backend services achieving 21× performance improvement and 94% latency reduction",
        "Optimized batch processing workflows, reducing execution time by up to 80% and improving system throughput",
        "Migrated legacy Spring applications to Spring Boot, improving startup performance and simplifying deployment",
        "Resolved complex concurrency issues in rule-based processing systems ensuring consistent and reliable execution",
        "Built CI/CD-driven API validation pipelines using GitLab and automated testing frameworks",
      ],
    },
    {
  role: "Software Developer Intern",
  company: "Barclays Global Service Centre",
  companylogo: require("./assets/images/barclaysLogo.png"),
  date: "June 2023 – Aug 2023",
  desc: "Full Stack Developer contributing to enterprise dashboards and data-driven backend services.",
  descBullets: [
    "Built interactive Angular dashboards to visualize financial and operational data for business stakeholders",
    "Developed a request tracking system to improve visibility and monitoring of end-to-end funding workflows",
    "Implemented Spring Boot backend services to support large-scale data migration from Oracle to MongoDB",
    "Enhanced reporting experience by introducing advanced chart visualizations with drill-down capabilities for deeper insights",
  ],
}
  ],
};

const bigProjects = {
  title: "Projects",
  subtitle: "AI AND FULL STACK SYSTEMS",
  projects: [
    {
      image: require("./assets/images/legalEaseLogo.webp"),
      projectName: "LegalEase",
      projectDesc:
        "AI-powered multilingual legal assistant that enables case understanding, law retrieval, and conversational query resolution using NLP and text similarity techniques.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/DhanyaSriraman/LegalEase",
        },
      ],
    },
    {
      image: require("./assets/images/interviewAceLogo.webp"),
      projectName: "Interview Ace",
      projectDesc:
        "Multimodal AI interview assistant that evaluates candidate responses using speech and text analysis with sentiment-aware feedback generation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/DhanyaSriraman/Multimodal_Voicebot",
        },
      ],
    },
  ],
  display: true,
};

// Blog / Talks
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

// Resume
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true,
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for opportunities and collaborations.",
  email_address: "dhanyasriraman@gmail.com",
  number: "+91 9360033053",
};

// Hireable
const isHireable = true;

const openSource = {
  showGithubProfile: "true",
  display: true,
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  openSource
};