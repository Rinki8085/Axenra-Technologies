import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import SimpleTextSection from "@/components/services/SimpleTextSection";
import ProcessList from "@/components/services/ProcessList";
import StatsSection from "@/components/services/StatsSection";
import InteractiveFocusSection from "@/components/services/InteractiveFocusSection";

export const metadata: Metadata = {
  title: "Email Marketing & Automation Services | B2B Email Marketing Agency – Axenra Technologies",
  description: "Drive revenue with Axenra's full-service email marketing and automation solutions. From drip marketing campaigns to B2B email marketing strategy, we build workflows that convert. Get a free audit today.",
  keywords: [
    "email marketing services", "email marketing automation", "b2b email marketing",
    "email automation services", "drip marketing", "email marketing strategy"
  ]
};

const emailServices = [
  {
    icon: "Map",
    title: "Email Marketing Strategy",
    desc: "Full-funnel email marketing strategy — segmentation, buyer journey mapping, content planning, and KPI frameworks built for your industry."
  },
  {
    icon: "Workflow",
    title: "Email Automation & Workflows",
    desc: "End-to-end email workflow automation — welcome sequences, onboarding flows, re-engagement campaigns, and behavioural triggers."
  },
  {
    icon: "Briefcase",
    title: "B2B Email Marketing",
    desc: "Account-based b2b email marketing services designed for longer sales cycles — nurture sequences, cold outreach, and pipeline acceleration."
  },
  {
    icon: "Droplet",
    title: "Drip Marketing Campaigns",
    desc: "Multi-step drip marketing sequences that guide prospects from awareness to purchase through perfectly timed, highly relevant content."
  }
];

const advancedAutomationServices = [
  {
    icon: "MousePointerClick",
    title: "Behavioural Triggers",
    desc: "Send the right email based on user actions — page visits, link clicks, purchase history, and engagement scores."
  },
  {
    icon: "Users",
    title: "Lead Scoring & Segmentation",
    desc: "Dynamically segment your list based on firmographic data, behaviour, and funnel stage for hyper-targeted sends."
  },
  {
    icon: "Database",
    title: "CRM Integration",
    desc: "Seamless integration with HubSpot, Salesforce, Pipedrive, and custom CRMs to keep your sales and marketing data in sync."
  },
  {
    icon: "FlaskConical",
    title: "A/B Testing & Optimisation",
    desc: "Continuous testing of subject lines, CTAs, send times, and content to maximise open rates and conversions."
  }
];

const b2bFocusItems = [
  { title: "Account-Based Nurture Sequences", description: "Targeted sequences by company size, industry, and ICP persona." },
  { title: "Cold Outreach Campaigns", description: "GDPR-compliant prospecting with personalisation at scale." },
  { title: "Post-Demo & Sales Enablement Emails", description: "Keep deals moving through the pipeline with timely, relevant follow-ups." },
  { title: "Newsletter & Thought Leadership Programmes", description: "Build authority and maintain mindshare with prospects who aren't ready to buy yet." }
];

const emailStats = [
  { value: "42×", label: "Average Email Marketing ROI" },
  { value: "28%", label: "Avg. Open Rate We Achieve" },
  { value: "4.5%", label: "Avg. Click-Through Rate" },
  { value: "100+", label: "Automation Workflows Built" }
];

const emailStrategyProcess = [
  { title: "Audit & Discovery", description: "We audit your current email marketing setup: list health, deliverability, automation gaps, and competitor benchmarks." },
  { title: "Strategy & Segmentation", description: "We define your target audiences, craft your email content pillars, and design your automation architecture." },
  { title: "Build & Launch", description: "Our team builds templates, programmes workflows, integrates your tech stack, and launches with a clear testing protocol." },
  { title: "Optimise & Scale", description: "Monthly reporting, A/B test results, and continuous improvement cycles keep your programme growing." }
];

const emailFaqs = [
  {
    question: "What platforms do you work with for email automation?",
    answer: "We work with all major platforms including HubSpot, Mailchimp, Klaviyo, ActiveCampaign, Marketo, Pardot, and custom SMTP solutions. We recommend the best platform for your use case and budget."
  },
  {
    question: "How is your email marketing strategy different from other agencies?",
    answer: "We treat email as a revenue channel, not a broadcast tool. Every campaign is tied to a business objective — pipeline generation, customer retention, or expansion revenue — and measured accordingly."
  },
  {
    question: "Do you manage deliverability and avoid the spam folder?",
    answer: "Yes. Deliverability is foundational to our service. We manage SPF/DKIM/DMARC records, monitor sender reputation, warm new IP addresses, and continuously optimise list hygiene."
  }
];

export default function EmailMarketingPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="EMAIL MARKETING"
        title={
          <>Email Marketing & Automation Services <span className="text-brand-cyan-blue">That Drive Real Revenue</span></>
        }
        description={
          <>
            <strong>Your Audience Is in Their Inbox — Are You?</strong><br/><br/>
            Axenra Technologies is a performance-focused email marketing service agency that combines strategic thinking with advanced email automation to generate measurable revenue. Our email marketing services go far beyond sending newsletters — we build intelligent, data-driven systems that engage your leads at every stage of the funnel.<br/><br/>
            Whether you're a B2B SaaS company needing a full email marketing strategy, or an e-commerce brand looking to recover abandoned carts through drip marketing, we have the expertise to architect, execute, and optimise campaigns that deliver consistent ROI.
          </>
        }
        formTitle="Get Your Free Audit"
      />
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES"
        title={<>Our <span className="text-brand-cyan-blue">Email Marketing & Automation</span> Services</>}
        services={emailServices}
      />

      <DetailedServiceGrid 
        sectionTag="ADVANCED"
        title={<>Advanced <span className="text-brand-cyan-blue">Email Marketing Automation</span></>}
        description="Email marketing automation is the difference between a scalable revenue engine and a manual, time-consuming process. Our email campaign automation capabilities include:"
        services={advancedAutomationServices}
      />

      <InteractiveFocusSection 
        sectionTag="B2B FOCUS" 
        title={<>B2B Email Marketing — <span className="text-brand-cyan-blue">Built for Complex Sales Cycles</span></>}
        description={
          <p>
            B2B email marketing demands a different approach to B2C. Longer cycles, multiple stakeholders, and lower volumes mean every email must carry strategic weight. Our b2b email marketing services are designed specifically for SaaS, tech, professional services, and industrial companies:
          </p>
        }
        items={b2bFocusItems}
      />
      <StatsSection stats={emailStats} />

      <ProcessList 
        sectionTag="OUR STRATEGY"
        title={<>Our Email Marketing <span className="text-brand-cyan-blue">Strategy Framework</span></>}
        steps={emailStrategyProcess} 
      />
      
      <ServiceFAQ faqs={emailFaqs} />
      <BottomCTA />
      
    </main>
  );
}
