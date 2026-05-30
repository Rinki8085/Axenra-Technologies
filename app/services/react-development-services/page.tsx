import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import SimpleTextSection from "@/components/services/SimpleTextSection";
import ProcessList from "@/components/services/ProcessList";
import StatsSection from "@/components/services/StatsSection";

export const metadata: Metadata = {
  title: "ReactJS Development Services | Expert React Development Company – Axenra Technologies",
  description: "Axenra Technologies is a leading ReactJS development company offering expert React front-end development, React web development, and React Native dev services. Hire React developers today and build blazing-fast web apps.",
  keywords: [
    "reactjs development", "react development services", "react front end developer", 
    "hire react developers", "react js developer", "react web development"
  ]
};

const reactServices = [
  {
    icon: "LayoutTemplate",
    title: "React Front-End Development",
    desc: "Pixel-perfect UI components, accessible design systems, and smooth user flows built by our senior react front-end developers."
  },
  {
    icon: "Globe",
    title: "React Web Application Development",
    desc: "Full-cycle react js web development — from architecture design to production deployment and ongoing support."
  },
  {
    icon: "Smartphone",
    title: "SPA & PWA Development",
    desc: "Single-page apps and progressive web apps built with React for lightning-fast load times and native-like experiences."
  },
  {
    icon: "RefreshCw",
    title: "React Migration & Refactoring",
    desc: "Safely migrate legacy frontends to React. Modernise existing codebases with zero downtime and improved maintainability."
  }
];

const reactNativeServices = [
  {
    icon: "Smartphone",
    title: "Cross-Platform Apps",
    desc: "One codebase, two platforms. iOS and Android apps built with React Native — fast, scalable, and maintainable."
  },
  {
    icon: "RefreshCw",
    title: "React Native Migration",
    desc: "Migrate existing native apps to React Native to reduce maintenance overhead and consolidate your dev team."
  },
  {
    icon: "WifiOff",
    title: "Offline & Real-Time Features",
    desc: "Real-time updates, offline-first capabilities, push notifications, and camera/GPS integrations for rich mobile UX."
  }
];

const hireEngagementModels = [
  {
    icon: "UserCheck",
    title: "Dedicated React Developer",
    desc: "A full-time senior react js developer embedded in your team — aligned to your timezone, tools, and processes."
  },
  {
    icon: "Users",
    title: "Project-Based Team",
    desc: "End-to-end react app development delivered by a complete squad: lead engineer, QA, and PM."
  },
  {
    icon: "Briefcase",
    title: "Staff Augmentation",
    desc: "Plug skilled react developers into your existing team to accelerate sprint velocity or fill skill gaps."
  }
];

const hireStats = [
  { value: "50+", label: "React Projects Delivered" },
  { value: "3 Days", label: "Avg. Developer Onboarding" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "5+", label: "Years of React Expertise" }
];

const reactProcess = [
  { title: "Discovery & Architecture", description: "We analyse your requirements, define the tech stack, and design a scalable React architecture before writing a single line of code." },
  { title: "UI/UX Design & Prototyping", description: "Our designers create component libraries and interactive prototypes that align with your brand and user expectations." },
  { title: "Agile React Development", description: "Two-week sprints with continuous delivery, daily standups, and full transparency via your preferred PM tool." },
  { title: "QA & Performance Optimisation", description: "Automated testing (Jest, React Testing Library), code reviews, and Lighthouse performance audits before every release." },
  { title: "Deployment & Maintenance", description: "CI/CD pipeline setup, cloud deployment, and ongoing support to keep your React web app healthy." }
];

const reactTechStack = [
  { icon: "Code", title: "Core", desc: "React 18+, TypeScript, JavaScript (ES2023+)" },
  { icon: "Database", title: "State Management", desc: "Redux Toolkit, Zustand, Context API, Recoil" },
  { icon: "Layers", title: "Frameworks", desc: "Next.js (SSR/SSG), Vite, Create React App" },
  { icon: "Palette", title: "Styling", desc: "Tailwind CSS, Styled Components, MUI, Chakra UI, Hero UI" },
  { icon: "CheckCircle", title: "Testing", desc: "Jest, React Testing Library, Cypress, Playwright" },
  { icon: "Cloud", title: "APIs & Data", desc: "REST, GraphQL, Apollo Client, React Query (TanStack)" }
];

const reactFaqs = [
  {
    question: "What is the difference between React and ReactJS?",
    answer: "They're the same library. \"React\" is the official name; \"ReactJS\" is commonly used in the developer community and search queries to differentiate it from React Native."
  },
  {
    question: "How long does a typical React web development project take?",
    answer: "A simple SPA can be delivered in 4–6 weeks. Enterprise React applications typically take 3–6 months depending on complexity, integrations, and design scope."
  },
  {
    question: "Can you work with our existing React codebase?",
    answer: "Absolutely. Our React developers are experienced in code audits, refactoring, and extending existing React applications — including migration to newer versions and adoption of modern patterns like hooks and concurrent features."
  },
  {
    question: "Do you provide React development services for startups?",
    answer: "Yes. We work with early-stage startups through to Fortune 500 enterprises. Our engagement models are flexible and budget-conscious for early-stage teams."
  }
];

export default function ReactDevelopmentPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="REACT DEVELOPMENT"
        title={
          <>ReactJS Development Services — <span className="text-brand-cyan-blue">Build Faster, Scale Smarter</span></>
        }
        description={
          <>
            <strong>Build Faster. Scale Smarter. Ship with Confidence.</strong><br/><br/>
            Axenra Technologies is a results-driven reactJS development company helping startups and enterprises build high-performance, scalable web applications. Our expert react front-end developers combine technical precision with business thinking — delivering interfaces that users love and stakeholders trust.<br/><br/>
            From single-page applications to enterprise-grade dashboards, our full-stack react web development capabilities cover the entire product lifecycle. Whether you need to hire react developers for a short sprint or engage a long-term react development agency partner, we're built to move fast without compromising quality.
          </>
        }
        formTitle="Hire a React Expert"
      />
      
      <SimpleTextSection title={<>Why React? <span className="text-brand-cyan-blue">Why Axenra?</span></>}>
        <p>
          React development has become the industry standard for building dynamic, component-driven user interfaces. Its virtual DOM, rich ecosystem, and massive community make it the first choice for modern react web dev teams. At Axenra, we leverage the full power of the React ecosystem — from hooks and context to Redux, Next.js, and GraphQL.
        </p>
      </SimpleTextSection>
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES"
        title={<>Our <span className="text-brand-cyan-blue">ReactJS Development</span> Services</>}
        services={reactServices}
      />

      <DetailedServiceGrid 
        sectionTag="MOBILE"
        title={<><span className="text-brand-cyan-blue">React Native</span> Development Services</>}
        description="Extend your web investment to mobile. Our React Native dev team builds cross-platform mobile applications for iOS and Android using a shared codebase — reducing time-to-market by up to 40% compared to native development. Ideal for teams who already have a React web app and want mobile parity fast."
        services={reactNativeServices}
      />

      <DetailedServiceGrid 
        sectionTag="TEAM"
        title={<>Hire React Developers — <span className="text-brand-cyan-blue">Flexible Engagement Models</span></>}
        description="Looking to hire React developers without the overhead of full-time hiring? Axenra offers three flexible engagement models so you can scale your react front end development capacity on demand:"
        services={hireEngagementModels}
      />
      <StatsSection stats={hireStats} />

      <ProcessList 
        sectionTag="HOW WE WORK"
        title={<>Our React <span className="text-brand-cyan-blue">Development Process</span></>}
        steps={reactProcess} 
      />

      <DetailedServiceGrid 
        sectionTag="TECHNOLOGY"
        title={<>Our <span className="text-brand-cyan-blue">React Technology Stack</span></>}
        description="Our react development services leverage a battle-tested, modern technology stack aligned with industry best practices:"
        services={reactTechStack}
      />
      
      <ServiceFAQ faqs={reactFaqs} />
      <BottomCTA />
      
    </main>
  );
}
