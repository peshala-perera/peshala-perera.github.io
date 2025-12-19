import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion"; // Using Radix UI Accordion

const projects = [
  {
    title: "FinPay",
    description:
      "Fintech web application for secure digital transactions with multi-role authentication and automated deployment pipelines.",
    tech: ["Laravel", "React", "AWS", "Docker", "PostgreSQL"],
    highlights: [
      "Multi-role authentication",
      "CI/CD pipelines",
      "Payment gateway integration",
    ],
    demo: "https://digital-lode-gate.lovable.app/",
    github: "https://github.com/peshala-perera/digital-lode-gate",
  },
  {
    title: "EduLink",
    description:
      "Comprehensive e-learning platform for course management, student enrollment, and progress tracking.",
    tech: ["Node.js", "Vue.js", "PostgreSQL", "Redis"],
    highlights: [
      "Scalable RESTful APIs",
      "Real-time dashboards",
      "Video streaming",
    ],
    github: "https://github.com/peshala-perera/edulink-hub.git",
    demo: "https://edulink-progress-hub.lovable.app",
  },
  {
    title: "Dyslexia NLP Assistant",
    description:
      "Research-driven NLP application providing speech recognition and language assistance for Sinhala-speaking adults with dyslexia.",
    tech: ["Python", "PyTorch", "Node.js", "React"],
    highlights: [
      "Low-resource speech recognition",
      "NLP pipeline",
      "Accessibility features",
    ],
    github: "https://github.com/PeshalaPerera/sinhala-dyslexia-assistant",
    demo: "https://sinhala-dyslexia-assistant.vercel.app/",
  },
  {
    title: "CloudSync",
    description:
      "Enterprise file synchronization and collaboration platform with real-time updates and version control.",
    tech: ["Node.js", "React", "AWS S3", "WebSockets"],
    highlights: ["Real-time sync", "Version control", "Team collaboration"],
    github: "https://github.com/peshala-perera/edulink-hub.git",
    demo: "https://edulink-progress-hub.lovable.app",
  },
  {
    title: "HealthTrack",
    description:
      "Mobile health monitoring application with wearable device integration and personalized health insights.",
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    highlights: [
      "Wearable integration",
      "Health analytics",
      "Push notifications",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "ShopEase",
    description:
      "E-commerce platform with inventory management, payment processing, and order fulfillment automation.",
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    highlights: [
      "Inventory management",
      "Payment processing",
      "Order automation",
    ],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const moreProjects = [
  {
    title: "SecureAPI – Secure Country Middleware",
    description:
      "A secure API middleware that bridges users with RestCountries.com, built with FastAPI, SQLite, and React. Provides user registration, login, API key management, and access to country data via a secure API.",
    tech: [
      "FastAPI",
      "SQLite",
      "React + TypeScript",
      "JWT",
      "Docker",
      "Swagger/OpenAPI",
      "SQLAlchemy",
      "Bcrypt",
    ],
    highlights: [
      "User registration & secure login (JWT)",
      "API key generation & authentication",
      "Country data middleware from RestCountries API",
      "API key usage tracking (count & timestamp)",
      "Admin panel to view all users",
      "Docker support for backend deployment",
      "Fully documented API using Swagger",
      "Secure SQLite schema with normalized 3NF",
    ],
    github: "https://github.com/PeshalaPerera/6COSC022W-CW-1/",
    demo: "https://6-cosc-022-w-cw-1.vercel.app/",
  },
  {
    title: "TravelTales – Immersive Global Travel Blog",
    description:
      "TravelTales is a feature-rich, full-stack travel storytelling platform where users can explore vivid travel tales narrated by humans from around the world. Built with Express.js, React, SQLite, and Docker, it allows travel enthusiasts to share their stories, engage with fellow explorers, and discover the beauty of the world through diverse narratives. The platform offers intuitive features like country-based story filtering, real-time engagement through comments and likes, a modern WYSIWYG editor for creating posts, and JWT-based authentication for secure user login. Designed with a responsive frontend powered by React, TailwindCSS, and React Query, TravelTales is an interactive and scalable platform that brings the global travel community together.",
    tech: [
      "React 18 with Vite",
      "Tailwind CSS",
      "React Router",
      "React Query",
      "React Quill",
      "Clerk Auth",
      "React Toastify",
      "ImageKit",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "JWT (jsonwebtoken)",
      "Bcrypt",
      "Multer",
      "Swagger (OpenAPI)",
      "CORS",
      "dotenv",
      "SQLite",
      "Docker",
      "Postman",
      "ESLint",
      "Prettier",
      "Git",
      "GitHub",
      "SecureAPI (Coursework 1 Integration)",
    ],
    highlights: [
      "Create & share travel stories with title, content, image, country, and date",
      "Country-based filtering using SecureAPI microservice (CW1)",
      "User authentication with JWT and hashed passwords",
      "Follow system for connecting with other travelers",
      "Like posts, view like counts, and toggle preferences",
      "Comment on posts with full CRUD functionality",
      "Search and sort by country, popularity, and date",
      "Admin tools for user and post management",
      "Swagger-powered API docs with complete OpenAPI schema",
      "Fully Dockerized deployment for both frontend and backend",
    ],
    github: "https://github.com/PeshalaPerera/6COSC022W-CW-2",
    demo: "https://traveltales.vercel.app/",
  },
  {
    title: "Email and Spam Filtering using Machine Learning",
    description:
      "This project focuses on creating an intelligent email spam filter using machine learning techniques. The model is trained to classify emails into spam or non-spam categories based on their content. The core idea is to use a dataset of labeled emails to train a Multinomial Naive Bayes classifier, leveraging text vectorization techniques like CountVectorizer to convert email text into numerical features. The solution is designed to improve the email experience by filtering out unwanted spam, ensuring that users only interact with relevant and legitimate messages. This project is for anyone interested in machine learning applications in natural language processing (NLP), and it is particularly valuable for email service providers or organizations dealing with a large volume of emails.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib & Seaborn",
      "Jupyter Notebook",
      "Flask",
      "Streamlit",
    ],
    highlights: [
      "Spam Email Classification",
      "Text Data Vectorization",
      "High Accuracy Model",
      "Interactive Deployment",
    ],
    github: "https://github.com/peshala-perera/E-mail-and-spam-filtering",
    demo: "https://colab.research.google.com/github/PeshalaPerera/E-mail-and-spam-filtering/blob/main/Cw1_w1810821_PeshalaPerera.ipynb",
  },
  {
    title: "Astro Kids- University Web Development Coursework Group Project",
    description:
      "AstroKids is a web application created as part of a university coursework project for a web development course. The website showcases a variety of features designed to engage users in a fun and interactive learning experience. Built with HTML, CSS, and JavaScript, it includes pages for About Us, Contact Us, Shop, and many more. The project emphasizes clean design, usability, and interactivity.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Comprehensive Multi-Page Design",
      "Engaging Interactivity",
      "Team Showcase",
      "Visually Rich Content",
    ],
    github: "https://github.comhttps://github.com/peshala-perera/Astro_kids",
    demo: "https://astro-kids-three.vercel.app",
  },
  {
    title: "News-Mag - Modern News Magazine Web Application",
    description:
      "News-Mag is a modern news magazine web application built with React and Vite, designed for fast development and efficient performance. The app pulls the latest news from various sources via the News API, displaying articles in an easily digestible format. The use of TypeScript and ESLint ensures high code quality and consistency, making the application maintainable and scalable.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "ESLint",
      "News API",
      "Node.js & npm",
    ],
    highlights: [
      "Real-Time News Fetching",
      "Fast Development with Vite",
      "Customizable",
    ],
    github: "https://github.com/peshala-perera/News-Mag",
    demo: "https://news-mag-virid.vercel.app",
  },
  {
    title: "Geo Location Finder",
    description:
      "The Geo Location Finder is a React-based web app that allows users to enter an IP address and get detailed geographical information about the location associated with that IP. The app fetches data using a free geolocation API (freegeoip.app), providing users with insights like country, city, region, time zone, latitude, and longitude. The app also validates the entered IP address to ensure it's in the correct format, offering real-time feedback. This tool is useful for developers or anyone interested in tracking the location of IP addresses in real-time.",
    tech: [
      "React",
      "CSS",
      "FreeGeoIP API",
      "React Icons",
      "Jest",
      "React Testing Library",
    ],
    highlights: ["Real-Time GeoLocation Data", "Interactive Visualization"],
    github: "https://github.com/peshala-perera/Geo-Location-Finder",
    demo: "https://news-mag-virid.vercel.app",
  },
  {
    title: "MovieLand",
    description:
      "MovieLand is a simple web application built with React that allows users to search for movies and view their details. It pulls data from the OMDb API, enabling users to search by title and explore detailed information about each movie.",
    tech: ["React", "JavaScript", "CSS", "OMDb API"],
    highlights: [
      "Users can search for movies by title through an intuitive search bar",
      "Search results dynamically update as the user types",
      "Each movie listing provides details such as release year, poster, and type",
      "Responsive design ensures a seamless experience across devices",
    ],
    github: "https://github.com/PeshalaPerera/movie-land",
    demo: "https://movie-land-six-flax.vercel.app/",
  },
  {
    title: "Sinhala Dyslexia Assistant",
    description:
      "A FastAPI-powered backend system designed to support Sinhala-speaking individuals with dyslexia. The API integrates multiple modern NLP and deep learning techniques to offer speech recognition, text correction, error classification, and text-to-speech functionalities.",
    tech: [
      "FastAPI",
      "Hugging Face Transformers",
      "Whisper",
      "gTTS",
      "PyTorch",
      "Docker",
    ],
    highlights: [
      "Speech-to-Text (STT) converts Sinhala audio to text using Whisper",
      "Text Correction includes rule-based methods, mT5 spell correction, and Mistral AI sentence correction",
      "Error Type Classification predicts dyslexia-related errors with SinBERT",
      "Text-to-Speech (TTS) generates spoken Sinhala audio from text using gTTS",
      "Comprehensive evaluation tools like BLEU, GLEU, Accuracy, WER, and Edit Distance",
      "Supports audio upload with Google Drive integration",
    ],
    github: "https://github.com/PeshalaPerera/sinhala-dyslexia-assistant",
    demo: "https://sinhala-dyslexia-assistant.vercel.app/",
  },
  {
    title: "AI Image Generator",
    description:
      "A simple React-based AI image generation application using Create React App. This project serves as a basic boilerplate for building AI image generation apps.",
    tech: ["React", "Create React App", "Node.js", "npm"],
    highlights: [
      "Basic project setup with Create React App",
      "Supports easy development with `npm start`",
      "Build for production with optimized settings (`npm run build`)",
      "Simple structure for AI image generation integration",
    ],
    github: "https://github.com/PeshalaPerera/ai-image-generator",
    demo: "Link to live demo or deployment if available",
  },
  {
    title: "OSM Map with Search & Routing",
    description:
      "The OSM Map with Search & Routing project provides an interactive web application that allows users to search for two locations and display a route between them on an OpenStreetMap (OSM) map. The tool is designed for anyone needing a simple way to visualize routes between two geographical points. Whether it's for personal use, logistics, or travel planning, the app helps users quickly find routes by leveraging OpenStreetMap for maps and OSRM for routing. The app is intuitive, easy to use, and doesn't require any API keys, making it accessible for a wide range of users.",
    tech: [
      "Leaflet.js",
      "OpenStreetMap (OSM)",
      "OSRM",
      "HTML/CSS",
      "JavaScript",
      "Nominatim API",
    ],
    highlights: [
      "Interactive Map",
      "Real-time Routing",
      "Geocoding Integration",
      "No API Key Needed",
    ],
    github: "https://github.com/peshala-perera/openStreetMap/",
    demo: "https://news-mag-virid.vercel.app",
  },
  {
    title: "Sri Lankan AI Voice Chat Application",
    description:
      "The Sri Lankan AI Voice Chat Application is a Next.js-based web application that allows users to have voice conversations with an AI agent in three languages: English, Sinhala (සිංහල), and Tamil (தமிழ்). The application supports seamless speech-to-text conversion, real-time translation between the languages, and automatic text-to-speech functionality. This app is specifically optimized for the Sri Lankan community, providing a culturally relevant and accessible interface for diverse users. By integrating modern voice technology, it enables people to interact with AI in their native languages with real-time responses.",
    tech: [
      "Next.js",
      "Web Speech API",
      "Google Translate API",
      "TypeScript",
      "Tailwind CSS",
      "AI Agent API",
      "shadcn/ui",
    ],
    highlights: [
      "Multi-Language Support",
      "Real-Time Speech-to-Text & Translation",
      "Text-to-Speech Integration",
      "Responsive Design for All Devices",
      "AI Agent Integration",
    ],
    github: "https://github.com/peshala-perera/multilingual-voice-chat/",
    demo: "https://news-mag-virid.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary mb-2">
                        Highlights:
                      </p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-xs text-muted-foreground flex items-start gap-1"
                          >
                            <span className="text-primary">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-smooth hover:border-primary"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 transition-smooth hover:border-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-20 px-4">
        <div className="max-w-6xl mx-auto"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Explore More Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 border-border/50 backdrop-blur-sm transition-smooth hover:scale-105 hover:border-primary/50 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {project.title}
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`details-${index}`}>
                    <AccordionTrigger className="text-xs font-semibold text-primary mb-2">
                      Project Details
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      {/* Description Section */}
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies Section */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Highlights Section */}
                      <div>
                        <p className="text-xs font-semibold text-primary mb-2">
                          Highlights:
                        </p>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-xs text-muted-foreground flex items-start gap-1"
                            >
                              <span className="text-primary">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="flex gap-2 pt-4 border-t border-border/50">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-smooth hover:border-primary"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 transition-smooth hover:border-primary"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
