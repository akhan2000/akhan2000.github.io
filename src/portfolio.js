const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Asfandyar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Asfandyar Khan Portfolio",
    type: "website",
    url: "http://asfandyarkhan.com/",
  },
};

//Home Page
const greeting = {
  title: "Asfandyar Khan",
  logo_name: "Asfandyar Khan",
  nickname: "Asfi",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1vpfxzUDzHP4WsYfbITPC1hYGmJTV6Fyh/view?usp=drive_link",
  portfolio_repository: "https://github.com/akhan2000/PortfolioKhan",
  githubProfile: "https://github.com/akhan2000",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/akhan2000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/asfandyar-khan2000/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "GitLab",
    link: "https://gitlab.oit.duke.edu/ak556",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack AI Computer Vision Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designed and developed an AI-driven interior design platform using OpenAI's DALL·E",
        "⚡ Integrated a Python-based machine learning pipeline with a Node.js server",
        "⚡ Deployed an intuitive iOS application for real-time design adjustments",
        "⚡ Led a team to win OpenAI hackathon commercial category with a novel feature",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "ion-logo-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "ion-logo-apple",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "AI Software Engineer and Research Lead",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architected a generative AI system for text-to-music translation using GPT-based models",
        "⚡ Optimized NLP techniques for semantic analysis and sentiment analysis",
        "⚡ Developed a prototype with TensorFlow to generate synthesized musical output",
        "⚡ Collaborated on API development for integration with music software like MuseScore",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MuseScore",
          fontAwesomeClassname: "simple-icons:musescore",
          style: {
            color: "#1A1A1A",
          },
        },
      ],
    },
    {
      title: "Full Stack Developer, MixMatch iOS App",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Led development of MixMatch app, enhancing user engagement and retention",
        "⚡ Improved UI with Swift UI and added features via Shazam Kit",
        "⚡ Developed a playlist algorithm using the Apple Music API",
        "⚡ Implemented user authentication with Firebase",
      ],
      softwareSkills: [
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#FA7343",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Apple Music",
          fontAwesomeClassname: "simple-icons:applemusic",
          style: {
            color: "#FA243C",
          },
        },
      ],
    },
    {
      title: "Programming Languages & Frameworks",
      fileName: "ProgrammingLangImg",
      skills: [
        "⚡ Experienced in Python, Elixir, Ruby on Rails, C, Java, Swift, JavaScript, TypeScript, HTML, and SCSS",
        "⚡ Proficient with React, Angular, Tailwind CSS, Bootstrap, Node.js, Express.js, Rails, Phoenix, and NLTK Sentiment Analysis",
        "⚡ Developed rich applications with complex frontend and backend interactions",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ], // Correctly closed softwareSkills array
    }, // Correctly closed the last skills category object
  ], // Correctly closed the data array of the skills object
}; // Correctly closed the skills object

const degrees = {
  degrees: [
    {
      title: "Duke University",
      subtitle: "Bachelors of Science in Computer Science (AI concentration)",
      logo_path: "Duke_University_Logo.png",
      alt_name: "Duke University Asfandyar",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Specialized in AI with a curriculum encompassing Data Structures, Databases, Backend Development, Linear Algebra, and Probability.",
        "⚡ Engaged in a minor in Music, synthesizing academic and creative passions in tech and sound.",
        "⚡ Active member of the Duke Energy Club and Duke Innovation & Entrepreneurship, fostering skills in leadership and project management.",
        "⚡ Contributed as an Audio Engineer at the Duke Music Studio, and participated in HackDuke, enhancing collaborative and technical expertise.",
        "⚡ Talent and technician for Small Town Records, facilitating production and engineering, while also engaging with the cultural community through the Pakistan Student Association.",
        "⚡ Enjoyed campus life and leisure through intramural golf, exemplifying a well-rounded university experience.",
      ],
      website_link: "https://duke.edu/",
    },
    {
      title: "Stanford University",
      subtitle: "Astrophysics Program",
      logo_path: "stanford_logo.png",
      alt_name: "Stanford University Asfandyar",
      duration: "Summer 2017",
      descriptions: [
        "⚡ Participated in the Astrophysics Summer Program at Stanford University, gaining hands-on experience in observational astronomy, theoretical astrophysics, and data analysis techniques.",
        "⚡ Developed proficiency in utilizing advanced tools and software such as Python (NumPy, SciPy, Matplotlib), R, and MATLAB for astronomical data processing and visualization, contributing to the advancement of astrophysical knowledge.",
        "⚡ Collaborated with renowned faculty and fellow students to conduct research on topics such as black hole dynamics, galaxy formation, and cosmology.",
        "⚡ Presented research findings at the program's culminating symposium, demonstrating effective communication and presentation skills in a scientific setting.",
        "⚡ Awarded the 'Outstanding Research Presentation' for the Program, recognizing excellence in black hole formation research contributions and presentation delivery.",
      ],
      website_link: "https://www.stanford.edu/",
    },
    // Add more degrees here if necessary
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteer Activities",
  description:
    "As a senior computer science student at Duke University with a focus on leveraging AI and ML for innovative solutions, I have engaged in various projects that intersect technology and creativity. My work spans developing AI-driven applications, contributing to open-source communities, and leading projects that integrate NLP with electronic music synthesis.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Full Stack AI Computer Vision Developer, OpenAI Hackathon",
          company: "Self-directed Project",
          company_url: "",
          logo_path: "openailogo.png",
          duration: "Oct 2023 - Feb 2024",
          location: "Remote",
          description:
            "Led the development of an AI-driven platform leveraging DALL·E to modify interior designs in images, enhancing user engagement by 40%. Implemented a Python-based ML pipeline and developed an iOS app for real-time design adjustments, winning the OpenAI hackathon commercial category.",
          color: "#4B5D67",
        },
        {
          title: "AI Software Engineer and Research Lead, Generative AI",
          company: "Independent Study",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Aug 2023 - Feb 2024",
          location: "Durham, NC",
          description:
            "Pioneered a generative AI system integrating NLP with electronic music synthesis using GPT models, aiming for an 85% accuracy in translating emotions into music. Led algorithmic research and collaborated with domain experts for efficient implementation.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer and Product Manager, MixMatch iOS App",
          company: "Duke University",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Jan 2023 - Present",
          location: "Durham, NC",
          description:
            "Directed development using Agile, enhancing UI with Swift UI, and developed a playlist algorithm using Apple Music API, improving user retention by 25%. Managed user authentication integration with Firebase for personalized experiences.",
          color: "#DAA520",
        },
        {
          title: "Head Grader and TA, Programming for Data Analytics",
          company: "Duke University, Fuqua School of Business",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Jun 2023 - Present (10 months)",
          location: "Durham, NC",
          description:
            "Oversaw assignment grading for a cohort of 300+ students, ensuring timely and accurate feedback. Proactively detected and resolved issues in assignments prior to distribution, guaranteeing quality in coursework. Managed Ed forum question responses, ensuring student queries were addressed promptly and effectively. Developed Python autograder scripts for automating and enhancing the efficiency of the grading process.",
          color: "#6C7A89",
        },
        {
          title: "Lead Strategist & TA, Fraud Analytics (MSQM Program)",
          company: "Duke University, Fuqua School of Business",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Oct 2023 - Present (6 months)",
          location: "Durham, NC",
          description:
            "Implemented an AI-powered grading system that reduced grading time by 50% while maintaining high accuracy. Provided personalized feedback to a cohort of 350+ students. Managed a virtual classroom of 350+ students, facilitating meetings and discussion forums with a 98% student satisfaction rate for promptness and clarity in resolving academic queries. Utilized data analytics to track student performance metrics and successfully networked and onboarded industry experts for guest lectures.",
          color: "#1F618D",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Development Consultant",
          company: "Nth Cycle Inc",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Sep 2020 - Jan 2021",
          location: "Durham, NC",
          description:
            "Contributed to a consultancy project focusing on lithium-ion battery recycling, conducting strategic market analysis and economic feasibility studies. Collaborated with the CEO to deliver strategic insights and foster investor relations.",
          color: "#8E44AD",
        },
      ],
    },
    {
      title: "Volunteer Activities",
      experiences: [
        {
          title: "Business Analyst and Project Manager",
          company: "Duke Energy Club",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Jan 2020 - Present",
          location: "Durham, NC",
          description:
            "Contributed technical expertise and leadership in the energy sector, managing projects and organizing events aimed at promoting clean energy initiatives and bridging the gap between academia and industry.",
          color: "#34A853",
        },
        {
          title: "Cyber Analyst",
          company: "Duke Cyber Club",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Aug 2022 - Present",
          location: "Durham, NC",
          description:
            "Engaged in cybersecurity challenges, participating in national competitions and monthly public events to broaden understanding of cyber policy and security measures.",
          color: "#FF6F61",
        },
        {
          title: "Cultural and Community Outreach Coordinator",
          company: "Pakistani Students Association (PSA)",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Oct 2020 - Present",
          location: "Durham, NC",
          description:
            "Fostered community and cultural understanding through event planning and management, leading the annual cultural showcase and engaging in cross-cultural dialogues.",
          color: "#CDA776",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My portfolio spans a diverse array of domains, including AI-driven design, music synthesis, iOS development, and full-stack web development. I have pioneered the integration of AI in interior design, developed generative AI systems for music translation, crafted intuitive iOS applications, and engineered scalable web solutions. Each project underlines a commitment to leveraging the latest technology tools, from deep learning and natural language processing to robust iOS frameworks and modern web architectures. My aim is to deliver innovative, scalable, and impactful solutions that redefine industry standards, enhance user experiences, and bridge the gap between technology and practicality. Through a blend of creativity and technical expertise, I strive to push the boundaries of what's possible in technology and design.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "headshort.png",
    description:
      "Eager to connect across the digital landscape, I'm present on most social media platforms, offering a window into my world of tech innovation. From the intricacies of Machine Learning and AI to the dynamic realms of React, iOS, Web Development, and Cloud Solutions, I delve into each project with a blend of creativity and precision. Open to discussions, collaborations, or any queries related to technology and development, feel free to reach out. Let’s explore how we can transform ideas into reality together.",
  },
  blogSection: {
    title: "Highlighted Projects",
    subtitle:
      "A showcase of my most impactful projects, demonstrating a blend of creativity, technical expertise, and innovation.",
    description:
      "Dive into my portfolio to discover projects ranging from AI-driven music synthesis to full-stack web development and mobile app creation. Each project exemplifies my commitment to pushing the boundaries of technology and design.",
    link: "https://github.com/akhan2000?tab=repositories",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "2211 Hillsborough Rd, Apt 140, Durham, NC, 27705",
    locality: "Durham",
    country: "United States of America",
    region: "North Carolina",
    postalCode: "27705",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rYZSaMG8XVTkdCSDA",
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
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
