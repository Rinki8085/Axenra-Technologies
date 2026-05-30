import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import ProcessList from "@/components/services/ProcessList";

export const metadata: Metadata = {
  title: "SEO & Growth Marketing Services | AI SEO Agency & GEO – Axenra Technologies",
  description: "Axenra Technologies is a full-service SEO marketing and growth marketing agency specialising in B2B SEO, SaaS SEO, e-commerce SEO, and AI-powered generative engine optimisation (GEO). Scale your organic growth today.",
  keywords: [
    "search engine optimization service", "seo marketing service", "growth marketing",
    "ai seo agency", "b2b seo services", "saas seo services", "generative engine optimization agency"
  ]
};

const seoServices = [
  {
    icon: "Code",
    title: "Technical SEO",
    desc: "Site architecture, Core Web Vitals, crawlability, indexation, schema markup, and international SEO — the foundations of sustainable organic growth."
  },
  {
    icon: "FileText",
    title: "On-Page & Content SEO",
    desc: "Keyword strategy, content optimisation, internal linking architecture, and topic cluster development aligned with your seo marketing service goals."
  },
  {
    icon: "Link",
    title: "Link Building & Authority",
    desc: "White-hat digital PR, editorial link building, and niche-relevant outreach to build domain authority that withstands algorithm updates and builds trust."
  },
  {
    icon: "BarChart3",
    title: "Growth Analytics & Reporting",
    desc: "Custom dashboards and monthly insights that translate raw data into clear decisions — so you always know what's working and why."
  },
  {
    icon: "MousePointerClick",
    title: "Paid Search & PPC Management",
    desc: "Precision-targeted Google and Meta ad campaigns engineered for maximum ROAS, with continuous optimisation baked in from day one."
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce SEO & CRO",
    desc: "Specialised strategies for online stores — from product page optimisation to conversion rate improvements that turn browsers into buyers."
  }
];

const geoServices = [
  {
    icon: "Cpu",
    title: "AI Brand Mention Strategy",
    desc: "Securing mentions in the datasets and sources that LLMs trust most."
  },
  {
    icon: "Network",
    title: "Semantic Content Structuring",
    desc: "Formatting content so AI agents can easily parse, understand, and retrieve your insights."
  },
  {
    icon: "Globe",
    title: "Digital PR for LLMs",
    desc: "Earning high-authority links and mentions that influence AI brand perception."
  },
  {
    icon: "FilePlus",
    title: "Information Gain Optimisation",
    desc: "Creating truly net-new insights that AI models prioritise over duplicate content."
  }
];

const b2bSeoServices = [
  {
    icon: "BookOpen",
    title: "Topical Authority Building",
    desc: "Dominating the information space around your core product categories."
  },
  {
    icon: "Target",
    title: "Account-Based Marketing (ABM) Alignment",
    desc: "Ensuring organic visibility for the exact queries your target accounts search."
  },
  {
    icon: "LineChart",
    title: "Pipeline-Driven Reporting",
    desc: "We measure organic MQLs, SQLs, and closed-won revenue — not just traffic."
  }
];

const growthProcess = [
  {
    title: "Audit & Foundation",
    description: "We uncover technical errors, content gaps, and quick-win opportunities."
  },
  {
    title: "Strategy & Architecture",
    description: "We build your keyword map, topic clusters, and 12-month growth roadmap."
  },
  {
    title: "Execution & Amplification",
    description: "Our team creates content, builds links, and manages ad spend with precision."
  },
  {
    title: "Measurement & Optimisation",
    description: "Monthly reporting and continuous refinement based on live performance data."
  }
];

const seoFaqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. While technical fixes can yield quick wins within weeks, significant improvements in organic traffic and keyword rankings typically take 3 to 6 months."
  },
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer: "GEO is the practice of optimising your brand's digital presence so that AI engines like ChatGPT, Claude, and Google's AI Overviews recommend you. It focuses on semantic structuring, information gain, and authoritative mentions rather than traditional keywords."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No reputable agency can guarantee a #1 ranking, as Google's algorithm is proprietary and constantly changing. However, we do guarantee that we will implement industry-leading, white-hat SEO best practices that have consistently delivered significant traffic and revenue growth for our clients."
  }
];

export default function SEOAndGrowthPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="SEO & GROWTH"
        title={
          <>SEO & Growth Marketing — <span className="text-brand-cyan-blue">Dominate Search. Drive Scalable Growth.</span></>
        }
        description={
          <>
            <strong>Rank Higher. Grow Faster. Stay Ahead of the Algorithm.</strong><br/><br/>
            Axenra Technologies is a performance-driven search engine optimization service and growth marketing agency built for companies that want sustainable, compounding organic growth. We combine technical SEO excellence, content-led authority building, and data-driven growth marketing services to deliver measurable results.<br/><br/>
            As one of the first agencies to offer full generative engine optimization agency services — ensuring your brand appears in AI-generated answers, not just traditional search results — we're ready to position you for the future of search.
          </>
        }
        formTitle="Get a Free SEO Audit"
      />
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES" 
        title={<>Our <span className="text-brand-cyan-blue">SEO & Growth Marketing</span> Services</>}
        services={seoServices}
      />

      <DetailedServiceGrid 
        sectionTag="GEO"
        title={<>Generative Engine Optimisation <span className="text-brand-cyan-blue">(GEO)</span></>}
        description="Search is changing. With the rise of AI Overviews, ChatGPT, and Perplexity, traditional SEO is no longer enough. Our generative engine optimization agency services ensure your brand is cited as the authoritative answer when your audience asks AI."
        services={geoServices}
      />

      <DetailedServiceGrid 
        sectionTag="B2B SEO"
        title={<>B2B SEO & <span className="text-brand-cyan-blue">Growth Strategy</span></>}
        description="B2B buying is complex. Our b2b seo services are designed for long sales cycles, multiple stakeholders, and high-consideration purchases:"
        services={b2bSeoServices}
      />

      <ProcessList 
        sectionTag="OUR PROCESS"
        title={<>Our Growth Marketing <span className="text-brand-cyan-blue">Process</span></>}
        steps={growthProcess} 
      />
      
      <ServiceFAQ faqs={seoFaqs} />
      <BottomCTA />
      
    </main>
  );
}
