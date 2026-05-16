import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import ServiceOverview from "@/components/services/ServiceOverview";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import BenefitShowcase from "@/components/services/BenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import { Users, ShieldCheck, Workflow, Map, Zap, PenTool, FlaskConical, BarChart3 } from 'lucide-react';

const emailFeatures = [
  {
    icon: "Users",
    title: "Audience Segmentation",
    desc: "Effective email marketers are experts at understanding subscriber intent and behaviour at different lifecycle stages. We segment your list with precision so every campaign speaks directly to each recipient — dramatically boosting open rates, click-throughs, and conversions across every send."
  },
  {
    icon: "ShieldCheck",
    title: "Compliance & Deliverability",
    desc: "Email marketing success depends on landing in the inbox — not the spam folder. We ensure full GDPR, CAN-SPAM, and CASL compliance, configure SPF, DKIM, and DMARC authentication, and manage sender reputation to guarantee maximum deliverability on every campaign you send."
  },
  {
    icon: "Workflow",
    title: "Automation & Integration",
    desc: "Email automation bridges your marketing stack and revenue goals. We design intelligent workflows that connect your CRM, e-commerce platform, and lead generation tools — transforming manual follow-ups into scalable, revenue-generating customer journeys that run autonomously 24/7."
  }
];

const emailServices = [
  {
    icon: "Map",
    title: "Email Strategy & Funnel Design",
    desc: "Full-funnel email strategies mapped to your customer journey — from first touch to loyal advocate — with each stage engineered to move subscribers closer to conversion with clear purpose and precision."
  },
  {
    icon: "Zap",
    title: "Marketing Automation & Drip Campaigns",
    desc: "Intelligent, behaviour-triggered automation sequences that deliver the right message at the right time — nurturing leads, onboarding customers, recovering abandoned carts, and re-engaging lapsed subscribers automatically."
  },
  {
    icon: "PenTool",
    title: "Email Copywriting & Design",
    desc: "Compelling, conversion-focused email copy paired with clean, mobile-responsive designs that capture attention instantly — making every email a brand-building, revenue-generating asset in your marketing toolkit."
  },
  {
    icon: "FlaskConical",
    title: "A/B Testing & Optimisation",
    desc: "Systematic split testing of subject lines, send times, CTAs, layouts, and offers — with continuous iteration based on real performance data to maximise open rates, click-through rates, and overall campaign ROI."
  },
  {
    icon: "Users",
    title: "List Segmentation & Management",
    desc: "Advanced list hygiene, behavioural segmentation, and dynamic audience building ensuring your most valuable subscribers receive hyper-relevant content — dramatically reducing unsubscribes and increasing lifetime value."
  },
  {
    icon: "BarChart3",
    title: "Performance Reporting & Analytics",
    desc: "Transparent monthly reporting that connects email performance directly to revenue outcomes — covering open rates, click rates, conversion attribution, list growth trends, and clear optimisation recommendations."
  }
];

const emailMarketingFaqs = [
  {
    question: "What Is an Example of a High-Performing Email Marketing Campaign?",
    answer: "A high-performing email marketing campaign combines three elements: a compelling, curiosity-driven subject line that achieves above-average open rates; highly relevant, personalised body content aligned to the subscriber's stage in the buyer journey; and a single, clear call-to-action that drives a specific conversion goal. Examples include a 5-email welcome sequence for new subscribers, a behaviour-triggered cart abandonment series for e-commerce, or a quarterly newsletter that positions your brand as an industry thought leader. Our team designs and manages all of these for you."
  },
  {
    question: "What Are the Steps to Creating an Effective Email Automation Strategy?",
    answer: "Effective email automation begins with mapping your customer journey — identifying the key moments where timely, relevant communication drives the most measurable value. We then define trigger conditions (sign-ups, page visits, purchases, inactivity), craft the message sequence for each workflow, design mobile-responsive templates, configure your automation platform, and set up performance tracking. After launch, we continuously monitor and optimise each flow based on live engagement data to maximise revenue impact over time."
  },
  {
    question: "Why Is It a Good Idea to Outsource Email Marketing Services?",
    answer: "Email marketing is one of the highest-ROI digital channels — averaging £42 returned for every £1 invested — but it requires specialist expertise in copywriting, segmentation, deliverability management, automation design, and ongoing optimisation to realise that full potential. Outsourcing to a specialist agency gives you immediate access to a complete team of email experts without the overhead of in-house hiring, accelerates time-to-results, and ensures your programme is always built on proven best practices rather than costly trial and error."
  },
  {
    question: "How Do You Ensure Our Emails Land in the Inbox and Not Spam?",
    answer: "Inbox placement is a combination of rigorous technical configuration and disciplined sending behaviour. We authenticate your sending domain with SPF, DKIM, and DMARC records, warm up new IP addresses systematically, maintain healthy list hygiene by removing invalid and disengaged addresses, monitor blacklist status proactively, and ensure full CAN-SPAM and GDPR compliance in all campaigns. Our clients consistently achieve 97–99% deliverability rates as a direct result of these established practices."
  },
  {
    question: "What Email Marketing Platforms Do You Work With?",
    answer: "We work across all major email marketing and automation platforms including Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Brevo, Salesforce Marketing Cloud, Drip, ConvertKit, and Omnisend. If you already have a preferred platform, we work seamlessly within it. If you are starting fresh, we will recommend the best-fit platform based on your business model, list size, automation requirements, and budget — then fully configure and manage it on your behalf."
  },
  {
    question: "How Does Email Marketing Automation Actually Work?",
    answer: "Email marketing automation uses predefined triggers — subscriber actions, time intervals, or data conditions — to automatically send relevant messages without manual intervention. When someone joins your list, visits a product page, abandons a cart, makes a purchase, or becomes inactive, the automation system detects that event and delivers a tailored email (or sequence of emails) precisely timed to influence their next action. This creates a scalable, always-on communication engine that nurtures leads and drives revenue 24 hours a day, 7 days a week."
  }
];


export const metadata: Metadata = {
  title: "Email Marketing & Automation Services for B2B Business",
  description: "Scale your pipeline with Axenra’s email marketing and automation services. We help B2B and SaaS businesses nurture leads & improve engagement.",
};

export default function EmailMarketingPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="EMAIL MARKETING SERVICES"
        title={
          <>
            Email Marketing & Automation Services That <span className="text-brand-cyan-blue">Connect, Engage & Convert</span> at Scale
          </>
        }
        description="Complex customer journeys and crowded inboxes make it harder than ever to stand out — but the right email marketing strategy changes everything. Our email marketing and automation services deliver the right message, to the right person, at exactly the right moment — driving revenue around the clock."
        formTitle="Get Your Free Marketing Audit"
      />
      
      <FeatureHighlights features={emailFeatures} />
      <ServiceOverview />
      <DetailedServiceGrid 
        sectionTag="EXPERTISE"
        title={<>Our Top Notch Email Marketing & <span className="text-brand-cyan-blue">Automation Services</span></>}
        description="Our email marketing services are tailored to a wide variety of business goals. Our expert email strategists can offer the following high-impact services to grow your revenue and deepen audience loyalty globally."
        services={emailServices}
      />
      <BenefitShowcase />
      <ServiceFAQ faqs={emailMarketingFaqs} />
      <BottomCTA />
      
    </main>
  );
}
