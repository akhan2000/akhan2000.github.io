const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Asfandyar's Portfolio",
  description:
    "Innovative AI and Full Stack Developer with a passion for creating scalable solutions that drive impact. Specializing in integrating AI technologies into user-friendly applications.",
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
    "Innovative AI and Full Stack Developer with a passion for creating scalable solutions that drive impact. Specializing in integrating AI technologies into user-friendly applications.",
  resumeLink:
    "https://drive.google.com/file/d/1o3iLD1UiRqT-UsYqNoJbtqsU30ZC-3yo/view?usp=sharing",
  portfolio_repository: "https://github.com/akhan2000/PortfolioKhan",
  githubProfile: "https://github.com/akhan2000",
  profileImagePath: "khan.jpg",
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
      videoLink: "https://www.youtube.com/embed/41ASZnbU27Y",
      skills: [
        "⚡ Designed and developed an AI-driven interior design platform utilizing computer vision algorithms to dynamically rearrange furniture and redesign empty spaces in user-uploaded images.",
        "⚡ Built a Python ML pipeline with a Node.js server, optimizing image rendering processes and reducing response times by 30%.",
        "⚡ Configured and managed a Flask backend on AWS EC2, ensuring a robust and scalable infrastructure.",
        "⚡ Implemented diffusion pipelines with PyTorch, incorporating custom pre-processing techniques for enhanced output quality.",
        "⚡ Developed dynamic selection logic to tailor image generation based on user inputs, providing a seamless and personalized user experience.",
        "⚡ Created a user-friendly web interface integrating API calls for file uploads and real-time display of processed images.",
        "⚡ Automated room feature segmentation using computer vision algorithms, reducing manual input by 50% and improving precision.",
        "⚡ Integrated a Python-based machine learning pipeline with a Node.js server.",
        "⚡ Deployed an intuitive application for real-time design adjustments.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "SQLAlchemy",
          fontAwesomeClassname: "simple-icons:sqlalchemy",
          style: {
            color: "#d34b59",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "logos:stripe",
          style: {
            color: "#008CDD",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },

    {
      title: "Full Stack Developer, Artisan AI Chat Assistant",
      fileName: "artisan_ui.jpg",
      skills: [
        "⚡ Developed a full-stack AI-powered chat application using React.js (TypeScript) and FastAPI (Python).",
        "⚡ Integrated OpenAI's GPT-4 via API for dynamic and context-aware responses.",
        "⚡ Deployed the frontend on Vercel and the backend on Railway, ensuring seamless integration and performance.",
        "⚡ Implemented JWT authentication for secure user registration and login.",
        "⚡ Designed an interactive chat interface with features like message editing, deletion, and context switching between different AI assistant personas.",
        "⚡ Utilized Material-UI for responsive and aesthetically pleasing UI components.",
        "⚡ Employed Docker for containerization, enhancing deployment efficiency and consistency across environments.",
        "⚡ Managed state and application logic using React hooks and context API.",
        "⚡ Set up a PostgreSQL database with SQLAlchemy ORM for robust data management.",
        "⚡ Ensured code quality and maintainability by adhering to coding standards and best practices.",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "SQLAlchemy",
          fontAwesomeClassname: "simple-icons:sqlalchemy",
          style: {
            color: "#d34b59",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "OpenAI GPT-4",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Railway",
          fontAwesomeClassname: "simple-icons:railway",
          style: {
            color: "#0B0D0E",
          },
        },
        {
          skillName: "JSON",
          fontAwesomeClassname: "vscode-icons:file-type-json",
          style: {
            color: "#E44D27",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            color: "#181717",
          },
        },
      ],
    },

    {
      title: "AI Software Engineer",
      fileName: "AIEngineerImg",
      skills: [
        "⚡ Developed an AI-powered agent to assist users with appliance part inquiries through a dynamic chat interface.",
        "⚡ Implemented a web scraper using Puppeteer.js, automating data collection from online catalogs and increasing data acquisition efficiency by 60%.",
        "⚡ Designed and optimized a data processing pipeline in Python, transforming raw scraped data into structured JSON.",
        "⚡ Generated embeddings with OpenAI models and stored them in Pinecone for vector-based searching.",
        "⚡ Engineered a real-time query handling module using Flask, integrating Retrieval-Augmented Generation (RAG) algorithms to process user queries and deliver accurate responses, reducing response time by 35%.",
        "⚡ Fine-tuned a large language model to ensure accurate, context-aware interactions, boosting user satisfaction by 50%.",
        "⚡ Developed a React-based frontend for the Chrome Extension.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Puppeteer.js",
          fontAwesomeClassname: "simple-icons:puppeteer",
          style: {
            color: "#40B5A4",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#412991",
          },
        },
        {
          skillName: "Retrieval-Augmented Generation",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            color: "#F9AB00",
          },
        },
        {
          skillName: "Large Language Models",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Data Processing",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "JSON",
          fontAwesomeClassname: "vscode-icons:file-type-json",
          style: {
            color: "#E44D27",
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
            "⚡ Proficient in Python, JavaScript, TypeScript, Java, C, Swift, Elixir, and Ruby.",
            "⚡ Experienced with frameworks and libraries such as React, Angular, Node.js, Express.js, Ruby on Rails, Phoenix, and NLTK.",
            "⚡ Developed rich applications with complex frontend and backend interactions.",
          ],
          softwareSkills: [
            {
              skillName: "Python",
              fontAwesomeClassname: "logos:python",
              style: {
                color: "#3776AB",
              },
            },
            {
              skillName: "JavaScript",
              fontAwesomeClassname: "logos:javascript",
              style: {
                color: "#F7DF1E",
              },
            },
            {
              skillName: "TypeScript",
              fontAwesomeClassname: "logos:typescript-icon",
              style: {
                color: "#3178C6",
              },
            },
            {
              skillName: "Java",
              fontAwesomeClassname: "logos:java",
              style: {
                color: "#007396",
              },
            },
            {
              skillName: "C",
              fontAwesomeClassname: "logos:c",
              style: {
                color: "#A8B9CC",
              },
            },
            {
              skillName: "Swift",
              fontAwesomeClassname: "logos:swift",
              style: {
                color: "#FA7343",
              },
            },
            {
              skillName: "Elixir",
              fontAwesomeClassname: "simple-icons:elixir",
              style: {
                color: "#4B275F",
              },
            },
            {
              skillName: "Ruby",
              fontAwesomeClassname: "logos:ruby",
              style: {
                color: "#CC342D",
              },
            },
            {
              skillName: "React",
              fontAwesomeClassname: "logos:react",
              style: {
                color: "#61DAFB",
              },
            },
            {
              skillName: "Angular",
              fontAwesomeClassname: "logos:angular-icon",
              style: {
                color: "#DD0031",
              },
            },
            {
              skillName: "Node.js",
              fontAwesomeClassname: "logos:nodejs-icon",
              style: {
                color: "#339933",
              },
            },
            {
              skillName: "Express.js",
              fontAwesomeClassname: "simple-icons:express",
              style: {
                color: "#000000",
              },
            },
            {
              skillName: "Ruby on Rails",
              fontAwesomeClassname: "logos:rails",
              style: {
                color: "#CC0000",
              },
            },
            {
              skillName: "Phoenix",
              fontAwesomeClassname: "simple-icons:phoenixframework",
              style: {
                color: "#E35023",
              },
            },
            {
              skillName: "NLTK",
              fontAwesomeClassname: "simple-icons:nltk",
              style: {
                color: "#85EA2D",
              },
            },
          ],
        },
        {
          title: "AI & Machine Learning",
          fileName: "AIImg",
          skills: [
            "⚡ Experience in developing AI-driven applications integrating computer vision and natural language processing.",
            "⚡ Proficient in deep learning frameworks like TensorFlow and PyTorch.",
            "⚡ Implemented machine learning pipelines for image processing and sentiment analysis.",
            "⚡ Leveraged OpenAI models for advanced AI solutions.",
          ],
          softwareSkills: [
            {
              skillName: "TensorFlow",
              fontAwesomeClassname: "logos:tensorflow",
              style: {
                color: "#FF6F00",
              },
            },
            {
              skillName: "PyTorch",
              fontAwesomeClassname: "logos:pytorch",
              style: {
                color: "#EE4C2C",
              },
            },
            {
              skillName: "OpenCV",
              fontAwesomeClassname: "logos:opencv",
              style: {
                color: "#5C3EE8",
              },
            },
            {
              skillName: "OpenAI",
              fontAwesomeClassname: "simple-icons:openai",
              style: {
                color: "#412991",
              },
            },
          ],
        },
        {
          title: "Full Stack Development",
          fileName: "FullStackImg",
          skills: [
            "⚡ Building responsive web applications using React, Angular, and other modern frameworks.",
            "⚡ Developing backend services and APIs with Node.js, Express.js, Flask, and Django.",
            "⚡ Experience in mobile application development using Swift/SwiftUI and React Native.",
            "⚡ Implementing RESTful APIs and integrating with databases.",
          ],
          softwareSkills: [
            {
              skillName: "HTML5",
              fontAwesomeClassname: "logos:html-5",
              style: {
                color: "#E34F26",
              },
            },
            {
              skillName: "CSS3",
              fontAwesomeClassname: "logos:css-3",
              style: {
                color: "#1572B6",
              },
            },
            {
              skillName: "JavaScript",
              fontAwesomeClassname: "logos:javascript",
              style: {
                color: "#F7DF1E",
              },
            },
            {
              skillName: "React",
              fontAwesomeClassname: "logos:react",
              style: {
                color: "#61DAFB",
              },
            },
            {
              skillName: "Angular",
              fontAwesomeClassname: "logos:angular-icon",
              style: {
                color: "#DD0031",
              },
            },
            {
              skillName: "Node.js",
              fontAwesomeClassname: "logos:nodejs-icon",
              style: {
                color: "#339933",
              },
            },
            {
              skillName: "Express.js",
              fontAwesomeClassname: "simple-icons:express",
              style: {
                color: "#000000",
              },
            },
            {
              skillName: "Flask",
              fontAwesomeClassname: "simple-icons:flask",
              style: {
                color: "#000000",
              },
            },
            {
              skillName: "Django",
              fontAwesomeClassname: "logos:django-icon",
              style: {
                color: "#092E20",
              },
            },
            {
              skillName: "Swift",
              fontAwesomeClassname: "logos:swift",
              style: {
                color: "#FA7343",
              },
            },
            {
              skillName: "React Native",
              fontAwesomeClassname: "logos:react",
              style: {
                color: "#61DAFB",
              },
            },
          ],
        },
        {
          title: "Cloud Infrastructure & DevOps",
          fileName: "CloudInfraImg",
          skills: [
            "⚡ Experience with cloud platforms like AWS and GCP.",
            "⚡ Hosting and maintaining applications on virtual machines and container services.",
            "⚡ Implementing CI/CD pipelines for efficient deployment and updates.",
            "⚡ Managing databases and integrating cloud storage solutions.",
          ],
          softwareSkills: [
            {
              skillName: "AWS",
              fontAwesomeClassname: "logos:aws",
              style: {
                color: "#FF9900",
              },
            },
            {
              skillName: "Google Cloud",
              fontAwesomeClassname: "logos:google-cloud",
              style: {
                color: "#4285F4",
              },
            },
            {
              skillName: "Docker",
              fontAwesomeClassname: "logos:docker-icon",
              style: {
                color: "#1488C6",
              },
            },
            {
              skillName: "Kubernetes",
              fontAwesomeClassname: "logos:kubernetes",
              style: {
                color: "#326CE5",
              },
            },
            {
              skillName: "Firebase",
              fontAwesomeClassname: "logos:firebase",
              style: {
                color: "#FFCA28",
              },
            },
            {
              skillName: "Heroku",
              fontAwesomeClassname: "logos:heroku-icon",
              style: {
                color: "#430098",
              },
            },
            {
              skillName: "GitHub Actions",
              fontAwesomeClassname: "logos:github-actions",
              style: {
                color: "#2088FF",
              },
            },
            {
              skillName: "CI/CD",
              fontAwesomeClassname: "simple-icons:jenkins",
              style: {
                color: "#D24939",
              },
            },
          ],
        },
        {
          title: "Databases & Data Processing",
          fileName: "DataProcessingImg",
          skills: [
            "⚡ Experienced with relational and NoSQL databases like PostgreSQL, MongoDB, and SQLite.",
            "⚡ Proficient in ORM tools like SQLAlchemy for efficient database management.",
            "⚡ Implemented data processing pipelines and data storage solutions.",
          ],
          softwareSkills: [
            {
              skillName: "PostgreSQL",
              fontAwesomeClassname: "logos:postgresql",
              style: {
                color: "#336791",
              },
            },
            {
              skillName: "MongoDB",
              fontAwesomeClassname: "logos:mongodb-icon",
              style: {
                color: "#47A248",
              },
            },
            {
              skillName: "SQLite",
              fontAwesomeClassname: "logos:sqlite",
              style: {
                color: "#003B57",
              },
            },
            {
              skillName: "SQLAlchemy",
              fontAwesomeClassname: "simple-icons:sqlalchemy",
              style: {
                color: "#d34b59",
              },
            },
            {
              skillName: "Pandas",
              fontAwesomeClassname: "simple-icons:pandas",
              style: {
                color: "#150458",
              },
            },
            {
              skillName: "Pinecone",
              fontAwesomeClassname: "simple-icons:pinecone",
              style: {
                color: "#53C0F2",
              },
            },
          ],
        },
        {
          title: "Tools & Technologies",
          fileName: "ToolsTechImg",
          skills: [
            "⚡ Proficient with version control systems like Git and platforms like GitHub.",
            "⚡ Experience with CI/CD tools and practices.",
            "⚡ Worked with APIs such as OpenAI, Stripe, Puppeteer.js, and others.",
            "⚡ Implemented authentication systems using JWT and Firebase.",
            "⚡ Familiar with testing frameworks like PyTest.",
          ],
          softwareSkills: [
            {
              skillName: "Git",
              fontAwesomeClassname: "logos:git-icon",
              style: {
                color: "#F05032",
              },
            },
            {
              skillName: "GitHub",
              fontAwesomeClassname: "logos:github-icon",
              style: {
                color: "#181717",
              },
            },
            {
              skillName: "OpenAI",
              fontAwesomeClassname: "simple-icons:openai",
              style: {
                color: "#412991",
              },
            },
            {
              skillName: "Stripe",
              fontAwesomeClassname: "logos:stripe",
              style: {
                color: "#008CDD",
              },
            },
            {
              skillName: "Puppeteer.js",
              fontAwesomeClassname: "simple-icons:puppeteer",
              style: {
                color: "#40B5A4",
              },
            },
            {
              skillName: "JWT",
              fontAwesomeClassname: "simple-icons:jsonwebtokens",
              style: {
                color: "#000000",
              },
            },
            {
              skillName: "PyTest",
              fontAwesomeClassname: "simple-icons:pytest",
              style: {
                color: "#0A9EDC",
              },
            },
            {
              skillName: "Webpack",
              fontAwesomeClassname: "logos:webpack",
              style: {
                color: "#8DD6F9",
              },
            },
          ],
        },
        {
          title: "UI/UX Design",
          fileName: "DesignImg",
          skills: [
            "⚡ Designed intuitive and visually appealing user interfaces for web and mobile applications.",
            "⚡ Experienced with Material-UI, Tailwind CSS, and Bootstrap for responsive design.",
            "⚡ Created seamless user experiences with attention to accessibility and usability.",
          ],
          softwareSkills: [
            {
              skillName: "Material-UI",
              fontAwesomeClassname: "simple-icons:materialui",
              style: {
                color: "#0081CB",
              },
            },
            {
              skillName: "Tailwind CSS",
              fontAwesomeClassname: "simple-icons:tailwindcss",
              style: {
                color: "#38B2AC",
              },
            },
            {
              skillName: "Bootstrap",
              fontAwesomeClassname: "logos:bootstrap",
              style: {
                color: "#7952B3",
              },
            },
            {
              skillName: "Figma",
              fontAwesomeClassname: "logos:figma",
              style: {
                color: "#F24E1E",
              },
            },
            {
              skillName: "Adobe XD",
              fontAwesomeClassname: "simple-icons:adobexd",
              style: {
                color: "#FF2BC2",
              },
            },
          ],
        },
      ],
    };

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
          title: "Founder and Full Stack Developer (AI/Vision)",
          company: "Interior Shuffle",
          company_url: "https://interiorshuffle.com/",
          logo_path: "interior_shuffle_logo.png",
          duration: "May 2023 - Present",
          location: "Remote",
          description:
            "Designed and developed an AI-driven interior design platform utilizing computer vision algorithms to dynamically rearrange furniture and redesign empty spaces in user-uploaded images. Built a Python ML pipeline with a Node.js server, optimizing image rendering processes and reducing response times by 30%. Configured and managed a Flask backend on AWS EC2, ensuring a robust and scalable infrastructure. Implemented diffusion pipelines with PyTorch, incorporating custom pre-processing techniques for enhanced output quality. Developed dynamic selection logic to tailor image generation based on user inputs, providing a seamless and personalized user experience. Created a user-friendly web interface integrating API calls for file uploads and real-time display of processed images. Automated room feature segmentation using computer vision algorithms, reducing manual input by 50% and improving precision.",
          color: "#4B5D67",
        },
        {
          title: "AI Software Engineer",
          company: "Project for Part Select",
          company_url: "",
          logo_path: "part_select_logo.png",
          duration: "Jan 2023 - May 2023",
          location: "Durham, NC",
          description:
            "Developed an AI-powered agent to assist users with appliance part inquiries through a dynamic chat interface. Implemented a web scraper using Puppeteer.js, automating data collection from online catalogs and increasing data acquisition efficiency by 60%. Designed and optimized a data processing pipeline in Python, transforming raw scraped data into structured JSON, generating embeddings with OpenAI models, and storing them in Pinecone for vector-based searching. Engineered a real-time query handling module using Flask, integrating Retrieval-Augmented Generation (RAG) algorithms to process user queries and deliver accurate responses, reducing response time by 35%. Fine-tuned a large language model to ensure accurate, context-aware interactions, boosting user satisfaction by 50%.",
          color: "#0071C5",
        },
        {
          title: "AI Software Engineer and Research Lead",
          company: "Duke Creator Lab",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Aug 2022 - Dec 2022",
          location: "Durham, NC",
          description:
            "Architected and led the development of a generative AI system that integrates NLP algorithms with electronic music synthesis frameworks, utilizing GPT-based models for text-to-music translation. Conducted algorithmic research to optimize NLP techniques for semantic analysis of textual input, enabling accurate translation of human emotions and narratives into musical compositions. Engineered a prototype using Python and TensorFlow, incorporating machine learning algorithms for sentiment analysis and music theory rules, achieving a projected accuracy rate of over 85%. Collaborated with domain experts to integrate the AI model with music software platforms like MuseScore through API development, focusing on optimizing the translation pipeline for computational efficiency and scalability.",
          color: "#DAA520",
        },
        {
          title: "Full Stack Developer and Product Manager",
          company: "MixMatch iOS App",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Jan 2022 - Present",
          location: "Durham, NC",
          description:
            "Directed development using Agile methodologies, enhancing UI with SwiftUI, and added features via ShazamKit. Developed a playlist algorithm utilizing the Apple Music API, leveraging attributes like BPM, key, and popularity, improving user retention by 25%. Managed user authentication and data management with Firebase, including user profiles and friend management features. Built a robust playlist management system, allowing users to create, edit, and view playlists with song attributes and cover images.",
          color: "#C0C0C0",
        },
        {
          title: "Head Grader and Teaching Assistant, Programming for Data Analytics",
          company: "Duke University, Fuqua School of Business",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Jun 2023 - Present",
          location: "Durham, NC",
          description:
            "Oversaw assignment grading for a cohort of 300+ students, ensuring timely and accurate feedback. Proactively detected and resolved issues in assignments prior to distribution, guaranteeing quality in coursework. Managed forum question responses, ensuring student queries were addressed promptly and effectively. Developed Python autograder scripts to automate and enhance the efficiency of the grading process.",
          color: "#6C7A89",
        },
        {
          title: "Lead Strategist & Teaching Assistant, Fraud Analytics (MSQM Program)",
          company: "Duke University, Fuqua School of Business",
          company_url: "",
          logo_path: "Duke_University_Logo.png",
          duration: "Oct 2022 - Present",
          location: "Durham, NC",
          description:
            "Implemented an AI-powered grading system that reduced grading time by 50% while maintaining high accuracy. Provided personalized feedback to a cohort of 350+ students. Managed a virtual classroom, facilitating meetings and discussion forums with a 98% student satisfaction rate for promptness and clarity in resolving academic queries. Utilized data analytics to track student performance metrics and successfully onboarded industry experts for guest lectures.",
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
    profile_image_path: "khan.jpg",
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
    subtitle: "Williamsburg, Brooklyn, New York, 11207",
    locality: "Brooklyn",
    country: "United States of America",
    region: "New York",
    postalCode: "11207",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/GeZyXyGoGemfuRcV6",
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
