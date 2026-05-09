import ServiceHero from "@/components/ServiceHero";
import FeatureHighlights from "@/components/services/FeatureHighlights";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ContentServiceOverview from "@/components/services/ContentServiceOverview";
import ContentBenefitShowcase from "@/components/services/ContentBenefitShowcase";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import { BookOpen, Search, Mail, FileText, Share2, Video, PenTool, LayoutTemplate, MessageSquare } from 'lucide-react';

const contentFeatures = [
  {
    icon: "Award",
    title: "Educate & Build Authority",
    desc: "Professional content marketers first understand your industry and audience — then craft deeply informative content that positions your brand as a trusted authority, empowering visitors to make confident decisions in your favour."
  },
  {
    icon: "Search",
    title: "SEO-Optimised Content",
    desc: "To rank and retain attention, your content must be built for both people and search engines. Our content writers conduct deep keyword research, optimise headings, structure, and metadata for superior SERP performance and long-term organic traffic growth."
  },
  {
    icon: "TrendingUp",
    title: "Drive More Conversions",
    desc: "Content marketing services can craft compelling narratives for blogs, email campaigns, social media, and web pages that promote your brand at scale — resulting in higher engagement rates, stronger lead pipelines, and measurably better ROI."
  }
];

const contentServices = [
  {
    icon: "PenTool",
    title: "Long-Form Blog & Article Writing",
    desc: "In-depth, SEO-optimised blog posts and thought leadership articles that drive sustained organic traffic, rank for high-intent keywords, and establish your brand as an industry authority worth following."
  },
  {
    icon: "FileText",
    title: "Content Strategy & Planning",
    desc: "Comprehensive editorial roadmaps built around your audience's search intent, your competitive gaps, and your business objectives — so every piece of content you publish has a clear purpose and measurable outcome."
  },
  {
    icon: "LayoutTemplate",
    title: "B2B & B2C Inbound Content",
    desc: "Specialised inbound content designed to attract high-value prospects, nurture them through your funnel with relevant touchpoints, and convert them into loyal customers through trust and demonstrated expertise."
  },
  {
    icon: "Search",
    title: "SEO Content & Link Earning",
    desc: "Content optimised for search visibility that naturally attracts backlinks, builds domain authority, and improves your website's ranking for competitive keywords — creating compounding organic growth month over month."
  },
  {
    icon: "Share2",
    title: "Social Media Content Writing",
    desc: "Platform-native content for LinkedIn, Instagram, X, and beyond — curated to spark conversations, grow your following, and keep your audience consistently engaged with your brand story and expertise."
  },
  {
    icon: "Mail",
    title: "Email & Newsletter Content",
    desc: "Persuasive email sequences and newsletters that nurture subscriber relationships, drive click-through rates, and guide your audience toward conversion with compelling, relevant, and timely messaging every time."
  }
];

const contentFaqs = [
  {
    question: "What Is the Best Technique to Create Unique, High-Ranking Content Marketing?",
    answer: "The most effective content marketing combines deep audience research, topical authority building, and search intent alignment. We begin by mapping your audience's questions at every stage of the buyer journey, identify keyword clusters with high commercial intent, and then create comprehensive, genuinely useful content that outperforms competitors on both quality and depth. This approach consistently earns top SERP positions and sustained organic traffic growth."
  },
  {
    question: "Is It Acceptable to Repurpose Existing Content Across Multiple Channels?",
    answer: "Absolutely — intelligent content repurposing is a core pillar of an efficient content marketing strategy. A single long-form blog post can be transformed into social snippets, email newsletters, short-form video scripts, infographics, and podcast talking points. We build repurposing frameworks that extend the lifespan and reach of every content asset you create, dramatically increasing your content ROI without proportionally increasing your budget."
  },
  {
    question: "What Kind of Businesses Benefit Most From Content Marketing Services?",
    answer: "Content marketing works powerfully for B2B companies, SaaS brands, e-commerce businesses, professional services firms, healthcare providers, and any organisation whose buyers research before purchasing. If your customers ask questions before buying — and they do — content marketing is one of the highest-ROI channels available. We tailor our approach based on your industry, sales cycle length, and customer acquisition goals."
  },
  {
    question: "Do You Write Content That Is Optimised for Google's E-E-A-T Guidelines?",
    answer: "Yes — Experience, Expertise, Authoritativeness, and Trustworthiness are foundational to everything we create. Our writers have genuine industry backgrounds, our content is meticulously fact-checked, and we include appropriate author credentials, primary sources, and structured data where applicable. This E-E-A-T alignment is essential for ranking in competitive search categories and is non-negotiable in our content production process."
  },
  {
    question: "What Industries Do You Specialise in for Content Marketing Services?",
    answer: "We have delivered content marketing campaigns across technology, fintech, healthcare, legal services, real estate, e-commerce, education, SaaS, manufacturing, and professional services. Our team includes specialist writers with genuine domain knowledge in each sector — ensuring that your content reflects authentic industry expertise rather than generic information that fails to build real audience trust."
  }
];

export default function ContentMarketingPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="CONTENT MARKETING SERVICES"
        title={
          <>
            Content Marketing Services That <span className="text-emerald-400">Inform, Engage & Convert</span> Your Audience
          </>
        }
        description="To convert a visitor into a loyal customer, businesses need content that goes beyond promotion. Great content educates, builds trust, and inspires action. That's where our strategic content marketing services come into play — connecting your brand to the people who need it most."
        formTitle="Get Your Free Content Strategy Session"
      />
      
      <FeatureHighlights features={contentFeatures} />
      <ContentServiceOverview />
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES"
        title={<>What We Offer in <span className="text-brand-cyan-blue">Content Marketing</span></>}
        description="Our content marketing services are well-known for their quality, consistently leading to increased brand visibility and capturing audience attention through carefully curated, high-value content strategy. We cover SEO optimisation, multi-channel distribution, and performance tracking."
        services={contentServices}
      />
      
      <ContentBenefitShowcase />
      <ServiceFAQ faqs={contentFaqs} />
      <BottomCTA />
      
    </main>
  );
}
