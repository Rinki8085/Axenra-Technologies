import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import CROServiceOverview from "@/components/services/CROServiceOverview";
import CROBenefitShowcase from "@/components/services/CROBenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";

const croFeatures = [
  {
    icon: "FlaskConical",
    title: "Data-Led Diagnosis",
    desc: "Our analysts dive deep into heatmaps, session recordings, funnel drop-off data, and A/B test results to pinpoint exactly where — and why — your campaigns are losing conversions. No assumptions, only evidence."
  },
  {
    icon: "LineChart",
    title: "Strategic Impact",
    desc: "We focus on high-leverage optimisations that move the needle on your revenue. From landing page copy to checkout flow redesigns, every change we implement is prioritised by its projected impact on your bottom line."
  },
  {
    icon: "Layout",
    title: "Measurable Growth",
    desc: "CRO without measurement is guesswork. We set clear baseline metrics, track every experiment with statistical rigour, and deliver transparent reporting that shows you exactly how much extra revenue each optimisation generates."
  }
];

const croServices = [
  {
    icon: "MousePointerClick",
    title: "A/B & Multivariate Testing",
    desc: "Rigorous split testing of headlines, CTAs, layouts, and offers — engineered to isolate winning variants and scale what actually converts your audience."
  },
  {
    icon: "LayoutTemplate",
    title: "Funnel & Journey Mapping",
    desc: "Detailed visualisation of your customer journey to uncover exactly where drop-offs occur and which touchpoints need the most urgent optimisation."
  },
  { 
    icon: "CreditCard",
    title: "Landing Page Optimisation",
    desc: "From structure to copy to visual hierarchy — we redesign and test your landing pages to ensure they communicate value and convert with confidence."
  },
  {
    icon: "PenTool",
    title: "Heatmap & Session Analysis",
    desc: "Stay on top of exactly how users interact with your pages using scroll maps, click heatmaps, and session recordings that expose friction and confusion."
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce Checkout CRO",
    desc: "Curated optimisations for your product pages, cart flows, and checkout process — reducing abandonment and recovering revenue on every visit."
  },
  {
    icon: "BarChart3",
    title: "Email & Ad Campaign CRO",
    desc: "Expert refinement of your email sequences and paid ad landing flows for maximum click-to-conversion rates across every campaign you run."
  }
];

const croFaqs = [
  {
    question: "How Do You Ensure That the CRO Changes You Make Are Based on Real Data?",
    answer: "Every recommendation we make is grounded in quantitative data from analytics platforms, A/B testing tools, heatmaps, and session recordings — combined with qualitative insights from user research. We never implement changes based on opinion alone; our process is hypothesis-driven, experiment-validated, and statistically confirmed before rolling out at scale."
  },
  {
    question: "Can You Personalise the CRO Strategy for Our Specific Industry and Audience?",
    answer: "Absolutely. CRO is never one-size-fits-all. We begin every engagement with a deep discovery phase — understanding your industry dynamics, competitive landscape, buyer personas, and existing campaign performance. This allows us to build a tailored optimisation roadmap that directly addresses your unique conversion barriers."
  },
  {
    question: "Can You Work With Our Existing Marketing Campaigns and Tech Stack?",
    answer: "Yes. We integrate seamlessly with your existing tools — including Google Analytics, HubSpot, Hotjar, Optimizely, VWO, Shopify, and more. Our team audits your current setup and works within your tech stack to implement optimisations without disrupting live campaigns or requiring a full rebuild."
  },
  {
    question: "How Long Does It Take to See Measurable Results From CRO?",
    answer: "Most clients begin to see statistically significant improvements within 4–8 weeks of initial optimisations, though this depends on traffic volume and test velocity. We prioritise quick wins in the first month while building longer-term structural experiments that deliver compounding conversion gains over time."
  },
  {
    question: "What Marketing Channels Do You Optimise For?",
    answer: "We specialise in CRO across paid search (Google Ads, Meta Ads), organic traffic, email marketing funnels, e-commerce product and checkout flows, SaaS onboarding sequences, and lead generation landing pages. Any channel that drives traffic to a conversion goal is within our scope."
  },
  {
    question: "Do You Provide Reporting on the Revenue Impact of Your Optimisations?",
    answer: "Yes — revenue attribution is core to everything we do. You receive monthly performance reports that link every experiment result directly to business outcomes: conversion rate lift, revenue per visitor, cost-per-acquisition improvements, and overall campaign ROAS improvements. Transparency is non-negotiable."
  }
];

export default function CROPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="CRO SERVICES"
        title={
          <>
            Conversion Rate Optimization Services That <span className="text-brand-cyan-blue">Turn Traffic Into Revenue</span>
          </>
        }
        description="At ContentFlux, we help businesses unlock the hidden revenue inside their existing marketing campaigns. Whether you run paid ads, email funnels, or organic content — our CRO specialists analyse every touchpoint, eliminate friction, and engineer experiences that convert with precision and confidence."
        formTitle="Get Your Free CRO Audit"
      />
      
      <FeatureHighlights features={croFeatures} />
      <CROServiceOverview buttonText="Let's Increase Conversions" badgeText="OUR APPROACH" />
      
      <DetailedServiceGrid 
        sectionTag="OUR EXPERTISE"
        title={<>We Are Here to Maximise Every <span className="text-brand-cyan-blue">Marketing Dollar You Spend</span></>}
        description="Connect with us and see a measurable lift in your campaign performance. With the below services, we ensure your visitors receive a compelling, friction-free experience that drives decisions."
        services={croServices}
      />
      
      <CROBenefitShowcase buttonText="Start your CRO audit" />
      <ServiceFAQ faqs={croFaqs} />
      <BottomCTA />
      
    </main>
  );
}
