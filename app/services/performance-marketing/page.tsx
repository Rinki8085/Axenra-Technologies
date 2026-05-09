import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import CROServiceOverview from "@/components/services/CROServiceOverview";
import CROBenefitShowcase from "@/components/services/CROBenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";

const pmFeatures = [
  {
    icon: "Target",
    title: "Lower CAC, higher returns",
    desc: "Most B2B companies overspend on broad awareness campaigns. We build tightly targeted paid strategies that reach only your ideal buyers — so your ad spend converts, not just clicks"
  },
  {
    icon: "Users",
    title: "Campaigns built around your ICP",
    desc: "We don't run generic campaigns. Every ad, landing page, and audience segment is built around your specific buyer persona, their pain points, and their buying stage."
  },
  {
    icon: "BarChart3",
    title: "Revenue-tied reporting",
    desc: "You'll never wonder where your budget went. We report on pipeline generated, cost per qualified lead, and revenue influenced — not impressions or click-through rates."
  }
];

const pmServices = [
  {
    icon: "Search",
    title: "Google & Bing Ads",
    desc: "High-intent PPC campaigns that capture buyers actively searching for your solution — optimized for cost per acquisition, not just traffic volume."
  },
  {
    icon: "Share2",
    title: "LinkedIn & Meta Ads",
    desc: "Precision-targeted B2B campaigns on LinkedIn and Meta, built to reach decision-makers by industry, role, company size, and buying intent."
  },
  {
    icon: "LayoutTemplate",
    title: "Landing page optimization",
    desc: "High-converting landing pages engineered to turn ad clicks into booked calls — with A/B testing, CTA optimization, and continuous performance improvement."
  },
  {
    icon: "RefreshCw",
    title: "Retargeting & remarketing",
    desc: "Re-engage warm prospects who visited your site or engaged with your content — with sequenced messaging that moves them from consideration to conversion."
  },
  {
    icon: "PieChart",
    title: "Performance analytics & reporting",
    desc: "Full-funnel dashboards that connect ad spend to pipeline generated — so you always know your true ROI and where to reallocate budget for maximum impact."
  },
  {
    icon: "Rocket",
    title: "Paid growth strategy",
    desc: "End-to-end paid growth planning — from channel selection and audience segmentation to budget allocation and scaling frameworks built for B2B buying cycles."
  }
];

const pmFaqs = [
  {
    question: "What's your process for launching a performance marketing campaign?",
    answer: "We start with a growth audit — reviewing your current funnel, ICP, competitive landscape, and existing ad data. From there we build a full-funnel paid strategy, develop creatives and landing pages, and launch with weekly optimization cycles tied to pipeline metrics."
  },
  {
    question: "Which ad platforms do you manage?",
    answer: "We manage Google Ads, Bing Ads, LinkedIn Ads, and Meta Ads. For most B2B and SaaS clients, we recommend a LinkedIn + Google combination — LinkedIn for targeting decision-makers by role and company, Google for capturing high-intent search demand."
  },
  {
    question: "How is performance marketing different from traditional digital advertising?",
    answer: "Traditional advertising optimizes for reach and awareness. Performance marketing optimizes for measurable outcomes — qualified leads, booked calls, and revenue. Every decision we make is tied to a business result, not a media metric."
  },
  {
    question: "How do you measure and report on campaign performance?",
    answer: "We build custom dashboards that track cost per qualified lead, pipeline generated, return on ad spend (ROAS), and revenue influenced. You get a clear picture of what your marketing investment is actually delivering — not just traffic and impressions."
  },
  {
    question: "How quickly can we expect to see results?",
    answer: "Most clients see meaningful improvements in CPL and lead quality within 30–45 days. Pipeline impact typically becomes visible within 60–90 days, depending on your sales cycle length and starting baseline."
  }
];

export default function PerformanceMarketingPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="PERFORMANCE MARKETING"
        title={
          <>
            Scale Your Revenue With Data-Driven <span className="text-brand-cyan-blue">Paid Advertising Campaigns</span>
          </>
        }
        description="Turn your ad spend into a predictable revenue engine. We design, launch, and aggressively optimize multi-channel paid media campaigns focused strictly on your Return on Investment."
        formTitle="Get a Free Account Audit"
      />
      
      <FeatureHighlights features={pmFeatures} />
      
      {/* We reuse the CRO Service Overview here as the Funnel visual represents Paid Media funnels perfectly */}
      <CROServiceOverview buttonText="Build Your Funnel" badgeText="OUR APPROACH" />
      
      <DetailedServiceGrid 
        sectionTag="OUR PAID MEDIA EXPERTISE"
        title={<>A Multi-Channel Approach to <span className="text-brand-cyan-blue">Profitable Acquisition</span></>}
        description="We don't rely on a single channel. We orchestrate complex, cross-platform advertising strategies that surround your target audience and guide them to conversion."
        services={pmServices}
      />
      
      {/* We reuse the CRO Benefit Showcase here as the "Campaign Performance" dashboard is the literal definition of Performance Marketing */}
      <CROBenefitShowcase buttonText="Grow Your Pipeline" />
      
      <ServiceFAQ faqs={pmFaqs} />
      <BottomCTA />
      
    </main>
  );
}
