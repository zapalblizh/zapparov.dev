const certificates = [
  {
    name: "Introduction to Cloud Computing",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-11-04",
    link: "https://coursera.org/verify/ALHQX8TGVPGD",
    img: "Introduction-to-Cloud-Computing.jpeg"
  }, {
    name: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-11-11",
    link: "https://coursera.org/verify/DY3FCJ39SZD8",
    img: "Introduction-to-Web-Development-with-HTML-CSS-and-Javascript.jpeg"
  }, {
    name: "Getting Started with Git and GitHub",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-11-13",
    link: "https://coursera.org/verify/58BJMM7489HV",
    img: "Getting-Started-with-Git-and-Github.jpeg"
  }, {
    name: "Developing Front-End Apps with React",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-12-20",
    link: "https://coursera.org/verify/278Y5MZ9ASMJ",
    img: "Developing-Front-End-Apps-with-React.jpeg"
  }, {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-12-31",
    link: "https://coursera.org/verify/454XTFB7AK6X",
    img: "Developing-Back-End-Apps-with-NodeJS-and-Express.jpeg"
  }, {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-12-12",
    link: "https://coursera.org/verify/UQ83UEEWREXD",
    img: "Python-for-Data-Science-AI-and-Development.jpeg"
  }, {
    name: "Python Project for AI & Application Development",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2023-01-18",
    link: "https://coursera.org/verify/LCM6ZXBQRJNH",
    img: "Python-Project-for-AI-and-Application-Development.jpeg"
  }, {
    name: "Developing Applications with SQL, Databases, and Django",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2023-02-09",
    link: "https://coursera.org/verify/9GBU9S9ZUQK9",
    img: "Developing-Applications-with-SQL-Databases-and-Django.jpeg"
  }, {
    name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-12-05",
    link: "https://coursera.org/verify/779EV4HCHZJV",
    img: "Introduction-to-Containers-w-Docker-Kubernetes-and-OpenShift.jpeg"
  }, {
    name: "Application Development using Microservices and Serverless",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2023-02-22",
    link: "https://coursera.org/verify/NXM2KT9E87DJ",
    img: "Application-Development-using-Microservices-and-Serverless.jpeg"
  }, {
    name: "Full Stack Cloud Development Capstone Project",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2023-05-24",
    link: "https://coursera.org/verify/EW6K9LSW5UV3",
    img: "Full-Stack-Cloud-Development-Capstone-Project.jpeg"
  }, {
    name: "Full Stack Software Developer Assessment",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2023-06-02",
    link: "https://coursera.org/verify/D966TT5D4NFT",
    img: "Full-Stack-Software-Developer-Assessment.jpeg"
  }, {
    name: "Cloud Application Development Foundations",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2022-12-04",
    link: "https://www.coursera.org/account/accomplishments/specialization/KZKJWSNU93VN",
    img: "Cloud-Application-Development-Foundations.png"
  }, {
    name: "IBM Full Stack Software Developer Certificate",
    issuer: "IBM",
    issuerSVG: "IBM.svg",
    issueDate: "2025-06-10",
    link: "https://coursera.org/verify/professional-cert/HUY3I1FTBA6R",
    img: "full-stack-software-developer-professional-certificate.jpg"
  }, {
    name: "DELE Level B2",
    issuer: "Instituto Cervantes",
    issuerSVG: "instituto-cervantes.svg",
    issueDate: "2022-10-13",
    link: "",
    img: ""
  }, {
    name: "Pearson EDEXCEL International GCSE",
    issuer: "Pearson EDEXCEL",
    issuerSVG: "pearson.svg",
    issueDate: "2023-09-30",
    link: "",
    img: ""
  }, {
    name: "Pearson EDEXCEL International As Levels Physics",
    issuer: "Pearson EDEXCEL",
    issuerSVG: "pearson.svg",
    issueDate: "2023-03-08",
    link: "",
    img: ""
  }, {
    name: "CIE As Levels Maths and English Language",
    issuer: "CIE",
    issuerSVG: "CIE.svg",
    issueDate: "2023-11-01",
    link: "",
    img: ""
  }, {
    name: "IELTS English",
    issuer: "CIE",
    issuerSVG: "CIE.svg",
    issueDate: "2022-03-03",
    link: "",
    img: ""
  }, {
    name: "HTML, CSS and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    issuerSVG: "Johns_Hopkins_University.svg",
    issueDate: "2023-06-29",
    link: "https://www.coursera.org/account/accomplishments/verify/K853LNH9NCM3",
    img: "HTML-CSS-and-Javascript-for-Web-Developers.png",
  }, {
    name: "Program your own mobile App",
    issuer: "La Salle University Ramon Llull",
    issueDate: "2023-07-14",
    link: "",
    img: "LaSalle-certificate-summer-camp.png",
  }, {
    name: "Hubspot CMS for Developers I",
    issuer: "Hubspot Academy",
    issuerSVG: "hubspot.svg",
    issueDate: "2025-07-21",
    link: "",
    img: "Hubspot-CMS-for-Developers-I-Certificate-New.png",
  }, {
    name: "Hubspot CMS for Developers II",
    issuer: "Hubspot Academy",
    issuerSVG: "hubspot.svg",
    issueDate: "2024-02-15",
    link: "",
    img: "Hubspot-CMS-for-Developers-II-Certificate-New.png",
  }, {
    name: "CS50's Introduction to Computer Science",
    issuer: "Harvard Online (edX)",
    issuerSVG: "harvard.svg",
    issueDate: "2024-07-02",
    link: "https://courses.edx.org/certificates/0bf55619b2924f1ba0a7d561c116bf71",
    img: "Harvard-CS50-Introduction-to-Computer-Science.png"
  }
];

export default certificates;
