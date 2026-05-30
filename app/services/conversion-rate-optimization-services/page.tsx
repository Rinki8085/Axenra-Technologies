import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import SimpleTextSection from "@/components/services/SimpleTextSection";
import StatsSection from "@/components/services/StatsSection";
import InteractiveFocusSection from "@/components/services/InteractiveFocusSection";

export const metadata: Metadata = {
  title: "Conversion Rate Optimisation Services | CRO Agency – Axenra Technologies",
  description: "Turn more of your existing traffic into paying customers with Axenra's expert conversion rate optimisation services. Landing page optimisation, A/B testing, B2B CRO, and full-funnel conversion strategy. Get a free audit.",
  keywords: [
    "conversion rate optimisation", "conversion optimization services", "landing page optimisation",
    "b2b conversion rate optimization", "conversion rate marketing", "b2b saas marketing agency"
  ]
};

const croServices = [
  {
    icon: "Search",
    title: "CRO Audit & Analysis",
    desc: "Heuristic analysis, heatmaps, session recordings, funnel analysis, and user research to identify your highest-impact conversion leaks."
  },
  {
    icon: "LayoutTemplate",
    title: "Landing Page Optimisation",
    desc: "Data-driven landing page conversion optimization — headline testing, form optimisation, trust signal placement, and CTA refinement."
  },
  {
    icon: "FlaskConical",
    title: "A/B & Multivariate Testing",
    desc: "Statistically rigorous experimentation programmes that generate compounding conversion improvements over time."
  },
  {
    icon: "Network",
    title: "Funnel Optimisation",
    desc: "End-to-end conversion optimisation across your entire acquisition funnel — ads → landing pages → onboarding → activation → retention."
  }
];

const b2bCroServices = [
  {
    icon: "Calendar",
    title: "Demo Request Optimisation",
    desc: "Reduce friction in your demo booking flow to increase qualified meeting volume without increasing ad spend."
  },
  {
    icon: "Zap",
    title: "Free Trial Activation",
    desc: "Improve trial-to-paid conversion rates through onboarding optimisation, in-app nudges, and email nurture sequencing."
  },
  {
    icon: "CreditCard",
    title: "Pricing Page Optimisation",
    desc: "A/B test pricing structures, plan positioning, and social proof placement to maximise self-serve conversion."
  },
  {
    icon: "Users",
    title: "Sales-Assisted Conversion",
    desc: "Optimise lead handoff to sales — improve MQL quality, response time, and follow-up conversion rates."
  }
];

const landingPageStats = [
  { value: "35%", label: "Avg. Conversion Lift Delivered" },
  { value: "2.5×", label: "Avg. ROI Improvement on Paid" },
  { value: "200+", label: "A/B Tests Executed" },
  { value: "12 Wks", label: "Avg. Time to First Significant Lift" }
];

const landingPageFocusItems = [
  { title: "Message-to-Market Match", description: "Ensuring your landing page copy perfectly reflects the intent of the ad or channel that drove the click." },
  { title: "Above-the-Fold Optimisation", description: "Hero section hierarchy, value proposition clarity, and CTA prominence testing." },
  { title: "Social Proof Placement", description: "Strategic placement of testimonials, logos, case study excerpts, and review scores for maximum trust impact." },
  { title: "Form Optimisation", description: "Progressive profiling, field reduction, inline validation, and smart defaults to reduce form abandonment." },
  { title: "Page Speed & Core Web Vitals", description: "Technical performance optimisation because every second of load time costs conversions." }
];

const croFaqs = [
  {
    question: "How much traffic do I need before CRO is worth it?",
    answer: "We recommend a minimum of ~1,000 monthly sessions to run statistically valid A/B tests. For lower-traffic sites, we use qualitative methods (user testing, heuristic analysis, heatmaps) to generate high-confidence recommendations without testing."
  },
  {
    question: "What tools do you use for conversion rate optimisation?",
    answer: "We use a best-in-class CRO stack: VWO, Optimizely, or Convert for A/B testing; Hotjar or Microsoft Clarity for behavioural analytics; GA4 and Mixpanel for funnel analysis; and Typeform/Userbrain for qualitative research."
  },
  {
    question: "Is CRO a one-time project or an ongoing service?",
    answer: "CRO delivers the best ROI as a continuous programme. Compounding test wins — where each winning variant becomes the new baseline — can produce 2–5× conversion improvements over 12–18 months compared to a one-off project."
  }
];

export default function CROPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="CRO SERVICES"
        title={
          <>Conversion Rate Optimisation — <span className="text-brand-cyan-blue">Turn Traffic into Revenue</span></>
        }
        description={
          <>
            <strong>More Conversions. Same Traffic. Better ROI.</strong><br/><br/>
            Getting traffic is only half the battle. Conversion rate optimisation (CRO) is the discipline of turning that traffic into revenue — systematically, scientifically, and sustainably. Axenra Technologies is a specialist conversion optimization services provider that uses behavioural data, experimentation, and UX research to identify and eliminate the friction points costing you customers.<br/><br/>
            Whether you need landing page optimisation, full-funnel conversion rate marketing strategy, or b2b conversion rate optimization for a complex SaaS product — our CRO team delivers measurable lifts in conversion performance.
          </>
        }
        formTitle="Get Your Free CRO Audit"
      />
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES"
        title={<>Our <span className="text-brand-cyan-blue">Conversion Rate Optimisation</span> Services</>}
        services={croServices}
      />

      <DetailedServiceGrid 
        sectionTag="B2B SAAS"
        title={<>B2B SaaS CRO — <span className="text-brand-cyan-blue">Optimising Complex Buying Journeys</span></>}
        description="As a specialist b2b saas marketing agency, we understand the unique challenges of optimising conversion in B2B: long sales cycles, multiple decision-makers, and high-consideration purchases. Our b2b conversion rate optimization framework covers:"
        services={b2bCroServices}
      />

      <InteractiveFocusSection 
        sectionTag="LANDING PAGES" 
        title={<>Landing Page Optimisation — <span className="text-brand-cyan-blue">Where Conversion Battles Are Won</span></>}
        description={
          <p>
            Your landing pages are your most leverageable conversion asset. Even a 10% improvement in landing page optimisation can double the ROI of your paid media campaigns. Our landing page conversion optimization process covers:
          </p>
        }
        items={landingPageFocusItems}
      />
      <StatsSection stats={landingPageStats} />

      <SimpleTextSection sectionTag="EMAIL CRO" title={<>Email Marketing <span className="text-brand-cyan-blue">Conversion Rate Optimisation</span></>}>
        <p>
          Improving your email marketing conversion rate is one of the highest-leverage activities in digital marketing — email already has the highest ROI of any channel. Our email CRO services focus on:
        </p>
        <ul>
          <li>Subject line and preview text A/B testing to lift open rates</li>
          <li>CTA placement, copy, and design optimisation to increase click-through rates</li>
          <li>Send-time and frequency optimisation per audience segment</li>
          <li>Landing page alignment — ensuring email click destinations convert</li>
        </ul>
      </SimpleTextSection>
      
      <ServiceFAQ faqs={croFaqs} />
      <BottomCTA />
      
    </main>
  );
}
