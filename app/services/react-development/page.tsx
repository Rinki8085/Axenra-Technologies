import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ReactServiceOverview from "@/components/services/ReactServiceOverview";
import ReactBenefitShowcase from "@/components/services/ReactBenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";

const reactFeatures = [
  {
    icon: "Globe",
    title: "Build a Stronger Digital Presence",
    desc: "When you invest in professional ReactJS development services, your business gains a consistent, high-performance online presence. React's component-driven architecture means every page, whether it's a landing page on LinkedIn or a feature-rich application, reflects a unified, trustworthy brand that appears prominently in search results and converts visitors into customers."
  },
  {
    icon: "Zap",
    title: "Save Time & Increase Development Velocity",
    desc: "Managing your product's frontend development in-house is time-consuming, especially when you're juggling other priorities. By outsourcing to expert ReactJS professionals, you eliminate slow development cycles and bottlenecks. Our component writing services — including state management, API integration, and UI engineering — free your team to focus on product and business strategy rather than implementation complexity."
  },
  {
    icon: "Target",
    title: "Drive Engagement & Achieve Business Goals",
    desc: "High-performing ReactJS frontend development creates compelling, performant interfaces that align with your business strategy. Professional developers craft fast-loading, accessible, and visually engaging experiences that generate conversions. Promoting a social media presence, driving awareness, or launching a SaaS product — every React component is designed to generate measurable results with regular performance improvements that maximise return on every visit."
  }
];

const reactServices = [
  {
    icon: "Layout",
    title: "Strategic React Application Architecture",
    desc: "Empower your brand with expert-designed React application structures that blend creativity, scalability, and platform-specific insights. We review your product requirements, competitor activity, and audience behaviour to establish a React architecture that serves a purpose and fits precisely into your long-term product strategy."
  },
  {
    icon: "MessageSquare",
    title: "Engaging UI & Component Development",
    desc: "With captions to informative posts and the right words bringing your brand's voice to life on Instagram, LinkedIn, Facebook, and X, each component is crafted to speak directly to your target audience. Expert content that generates meaningful engagement, turning casual users into loyal followers. Expect content that boosts engagement and keeps your brand top of mind."
  },
  {
    icon: "Share2",
    title: "Social Media Ad & Campaign Management",
    desc: "Maximise your reach and impact with conversion-optimised ad copy and campaign creatives designed for maximum ROI. We craft data-driven paid media ads that cut through the clutter and prompt your audience to take action — whether it's clicking, subscribing, or purchasing."
  },
  {
    icon: "PenTool",
    title: "React UI Ghostwriting & Design Systems",
    desc: "Our ghostwriting services ensure your unique brand perspective shines through every component, pattern, and design token. You bring the vision — we build the React component library. We get original, data-informed content for thought leadership posts, executive insights, and more — keeping your distinct brand voice and technical expertise consistent across your entire design system."
  },
  {
    icon: "PlaySquare",
    title: "Creative Content & Motion for React",
    desc: "Go beyond static interfaces with dynamic Framer Motion animations, interactive micro-interactions, and engaging UI transitions that make your audience stop scrolling. We blend React insights with creative motion design to ensure your interface gets noticed, remembered, and talked about across social platforms."
  },
  {
    icon: "LineChart",
    title: "Performance Reporting & Core Web Vitals",
    desc: "Stay confident that your React application is achieving its highest performance. Receive comprehensive monthly reports of your results. Our React performance engineers provide actionable recommendations for speed, bundle-size, SEO, and accessibility. They also support with goal-setting to ensure your strategy always evolves for greater impact and growth over time."
  }
];

const reactFaqs = [
  {
    question: "What Social Media Writing Service Is Included in Your ReactJS Development Package?",
    answer: "Our ReactJS frontend development services include comprehensive UI/UX implementation, responsive component development, state management setup, API integration, performance optimisation, accessibility compliance (WCAG 2.1), Core Web Vitals monitoring, and ongoing maintenance. Every project also includes design system documentation via Storybook so your team can confidently extend the codebase independently after handoff."
  },
  {
    question: "Can You Match Our Brand's Unique Visual Identity in React?",
    answer: "Absolutely. Brand fidelity is core to our React development process. We begin every project with an in-depth design token extraction session — pulling your typography scale, colour palette, spacing system, and motion language — and codify these into a reusable component library. Every React component we build is pixel-precisely aligned to your brand guidelines and passes strict visual regression testing before delivery."
  },
  {
    question: "How Quickly Can We Expect to Receive Our React Application?",
    answer: "Timelines depend on project scope — a single-page React landing page can be delivered within 5–7 business days, while a full multi-page web application or SaaS dashboard typically takes 4–8 weeks including design review cycles. We use agile sprint methodology with weekly deliverable checkpoints, so you see real working code — not just mockups — at every stage of the development process from day one."
  },
  {
    question: "Will You Provide Reports on Our React Application's Performance?",
    answer: "Yes — performance transparency is built into every engagement. You receive monthly Core Web Vitals reports covering LCP, CLS, FID, TTFB, and Lighthouse scores across mobile and desktop. We also track bundle size evolution, React rendering performance via Profiler analysis, and user experience metrics from real users using analytics integration. Every report includes a prioritised list of optimisation actions with projected performance impact."
  },
  {
    question: "What Are ReactJS Frontend Development Services?",
    answer: "ReactJS frontend development services encompass the full spectrum of building user-facing digital products using the React JavaScript library — including component architecture design, responsive UI implementation, state management with Redux or Zustand, server-side rendering with Next.js, Progressive Web App development, React Native mobile apps, API integration, performance optimisation, and accessibility implementation. Our services transform designs and business requirements into fast, scalable, and maintainable production-ready React applications."
  }
];

export default function ReactDevelopmentPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="React JS Dev"
        title={
          <>
            Professional ReactJS Frontend Development Services That <span className="text-brand-cyan-blue">Accelerate Growth & Delight Users</span>
          </>
        }
        description="In today's fast-paced digital landscape, your frontend is your first impression and your most powerful conversion tool. Our ReactJS development services build blazing-fast, pixel-perfect websites, web apps, and progressive web applications that users love to navigate — and that search engines reward."
        formTitle="Hire a React Expert"
      />
      
      <FeatureHighlights features={reactFeatures} />
      <ReactServiceOverview />
      
      <DetailedServiceGrid 
        sectionTag="OUR CAPABILITIES"
        title={<>Unlock Your Brand's Potential with Our Powerful <span className="text-brand-cyan-blue">React JS Development Services</span></>}
        description="At ContentFlux, our social media brand strategy is crafted to help you reach your customers' needs, engage authentically, and achieve measurable success across every platform. Each service below is purpose-built for React."
        services={reactServices}
      />
      
      <ReactBenefitShowcase />
      <ServiceFAQ faqs={reactFaqs} />
      <BottomCTA />
      
    </main>
  );
}
