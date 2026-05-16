import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import CROServiceOverview from "@/components/services/CROServiceOverview";
import CROBenefitShowcase from "@/components/services/CROBenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";

const seoFeatures = [
  {
    icon: "TrendingUp",
    title: "Data-Driven Results",
    desc: "Every strategy we build is rooted in deep analytics and competitive research — so every dollar you invest drives measurable, trackable growth and not guesswork."
  },
  {
    icon: "Eye",
    title: "Always-On Visibility",
    desc: "Our SEO frameworks are designed for longevity. We build authority and organic reach that compounds over time, keeping you visible when it matters most."
  },
  {
    icon: "Target",
    title: "Audience-First Targeting",
    desc: "We go beyond keywords. Our growth marketing approach connects you with high-intent audiences who are already looking for exactly what you offer."
  }
];

const seoServices = [
  {
    icon: "Search",
    title: "Technical SEO Audits",
    desc: "Deep-dive crawls and site health analysis that uncover every issue silently killing your rankings — then a roadmap to fix them fast."
  },
  {
    icon: "FileText",
    title: "SEO Content Strategy",
    desc: "Keyword-intelligent, topical-authority content plans that attract, engage, and convert your target audience at every funnel stage."
  },
  {
    icon: "Link",
    title: "Link Building & Authority",
    desc: "Ethical, high-quality backlink acquisition that builds domain authority and lifts your entire site in search engine rankings."
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

const seoFaqs = [
  {
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. While technical fixes can yield quick wins within weeks, significant improvements in organic traffic and keyword rankings typically take 3 to 6 months. This timeline depends heavily on your industry's competitiveness, your current domain authority, and the baseline state of your website."
  },
  {
    question: "Is SEO better than Paid Ads (PPC)?",
    answer: "They serve different purposes. PPC delivers immediate traffic but stops the moment you stop paying. SEO requires an upfront investment of time and resources, but it builds compounding, sustainable equity over time. A balanced strategy often uses PPC for quick revenue while SEO builds a long-term, high-ROI organic foundation."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No reputable agency can guarantee a #1 ranking, as Google's algorithm is proprietary and constantly changing. However, we do guarantee that we will implement industry-leading, white-hat SEO best practices that have consistently delivered significant traffic and revenue growth for our clients."
  },
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO involves optimizing your website's infrastructure so that search engine spiders can easily crawl and index your site. This includes improving page load speed, ensuring mobile responsiveness, fixing broken links, implementing structured data (schema), and optimizing your XML sitemaps."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We measure SEO success by its impact on your bottom line. While we track keyword rankings and organic traffic growth, our primary KPIs are organic lead generation, conversion rates from organic traffic, and the total revenue attributed to the SEO channel."
  }
];


export const metadata: Metadata = {
  title: "SEO & Growth | Axenra Technologies",
  description: "Add your customized description for SEO & Growth here.",
};

export default function SEOAndGrowthPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="SEO & GROWTH"
        title={
          <>
            Rank Higher.<br />
            Grow Faster.<br />
            <span className="text-brand-cyan-blue">Convert Better.</span>
          </>
        }
        description="We help ambitious brands dominate search results, attract high-intent audiences, and build compounding growth engines that work 24/7."
        formTitle="Get a Free SEO Audit"
      />
      
      <FeatureHighlights features={seoFeatures} />
      
      {/* We reuse the CRO Service Overview here as the Funnel visual perfectly matches "Growth" and "Traffic to Revenue" concepts */}
      <CROServiceOverview 
        buttonText="Get Your Free SEO Audit"
        badgeText="Who We Are"
        funnelStages={['Impressions', 'Organic Clicks', 'Qualified Leads']}
        cvrBox={{ metric: '+145%', title: 'Organic Traffic', subtitle: 'Average increase for clients' }}
        title={
          <>
            Your Growth Partner,<br />
            <span className="text-brand-cyan-blue">Not Just an Agency</span>
          </>
        }
        paragraphs={[
          "Axenra Technologies is a performance-focused SEO and growth marketing agency built for businesses that refuse to be invisible. We combine technical SEO mastery with data-led content and paid growth strategies to get you in front of the right audience at exactly the right moment.",
          "Our team of strategists, SEO engineers, and growth hackers work as an extension of your team — deeply invested in your KPIs, your brand story, and your long-term competitive edge. From on-page optimisation to full-funnel growth campaigns, we've got every lever covered.",
          "We don't believe in vanity metrics. Every action we take is tied to revenue impact, search visibility, and sustainable brand growth. We are not satisfied until your business is where it deserves to be — at the top."
        ]}
      />
      
      <DetailedServiceGrid 
        sectionTag="What We Do" 

        title={<>Get Your Brand Found with<span className="text-brand-cyan-blue">GrowthFlux</span></>}
        description="From solopreneurs to enterprise teams, we deliver 100% white-hat, sustainable SEO and growth marketing solutions tailored to your goals."
        services={seoServices}
      />
      
      {/* We reuse the CRO Benefit Showcase here as the "Campaign Performance" dashboard perfectly represents SEO reporting metrics */}
      <CROBenefitShowcase 
        statsBox={{
          title: "SEO Performance Metrics",
          stats: [
            { label: "Keyword Rankings", value: "+450" },
            { label: "Organic Sessions", value: "+125%" },
            { label: "Domain Authority", value: "+15" },
            { label: "Backlinks Built", value: "+320" },
          ],
          totalLabel: "Traffic Value ROI",
          totalValue: "+210%"
        }}
        data={
        {
          h1: "We Help Your Brand Hit Its Growth Targets",
          para: "We understand that behind every search query is a real person looking for a solution. Our strategies bridge that gap — connecting your brand with potential customers at the highest intent moments.",
          sub: [
            {
              h2: "Build Unshakeable Search Authority",
              para1: "Ranking at the top of Google requires more than keywords. We build topical authority, earn quality backlinks, and optimise every technical signal to establish your site as the definitive resource in your niche — the kind that competitors can't easily replicate."
            },
            {
              h2: "Full-Funnel Growth Marketing",
              para1: "We map every stage of your customer journey — from awareness to advocacy — and deploy the right mix of SEO, paid media, and conversion optimisation to turn organic traffic into predictable, scalable revenue for your business."
            }
          ]
        }
      }
      buttonText="Start Your Growth Campaign" />
      
      <ServiceFAQ faqs={seoFaqs} />
      <BottomCTA />
      
    </main>
  );
}
