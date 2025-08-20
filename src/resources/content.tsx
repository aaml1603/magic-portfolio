import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Andres",
  lastName: "Mendez",
  name: `Andres Mendez`,
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /resources/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aaml1603",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/andresmendezdev",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Collabsy</strong>
      </>
    ),
    href: "/work/collabsy-project",
  },
  subline: (
    <>
      I'm Andres, a design engineer and startup founder
      who crafts intuitive user experiences. I build innovative
      <br /> AI-powered platforms and love creating digital solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Miami, FL`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I was born in Caracas, Venezuela but now live in Miami. I'm a design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        My work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Collabsy.io",
        timeframe: "2023 - Present",
        role: "Founder",
        achievements: [
          <>
            Built an AI-powered platform for brands to match with influencers 
            that align with their brand niche.
          </>,
          <>
            Implemented automated AI outreach and reply systems, streamlining 
            influencer collaboration workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "RealTouchAI.com",
        timeframe: "2022 - Present",
        role: "Founder",
        achievements: [
          <>
            Created an AI humanization service that makes AI-generated content 
            undetectable by detection systems.
          </>,
          <>
            Successfully launched and scaled a profitable startup focused on 
            AI content transformation technology.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Miami Dade College",
        description: <>Studying computer science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building full-stack applications with React and Next.js, leveraging server-side rendering and API routes for optimal performance.</>
        ),
        icon: "nextjs",
        images: [],
      },
      {
        title: "TailwindCSS",
        description: (
          <>Crafting responsive and modern UI designs with utility-first CSS framework for rapid development and consistent styling.</>
        ),
        icon: "tailwindcss",
        images: [],
      },
      {
        title: "Python",
        description: (
          <>Developing backend services, AI integrations, and data processing solutions with Python for scalable startup applications.</>
        ),
        icon: "python",
        images: [],
      },
      {
        title: "Framer",
        description: (
          <>Creating interactive prototypes and animations to bring designs to life and enhance user experience across platforms.</>
        ),
        icon: "framer",
        images: [],
      },
      {
        title: "Supabase",
        description: (
          <>Building real-time applications with PostgreSQL database, authentication, and serverless functions for rapid product development.</>
        ),
        icon: "supabase",
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


export { person, social, newsletter, home, about, blog, work };
