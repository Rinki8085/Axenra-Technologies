import type { Metadata } from "next";
import ServiceHero from "@/components/ServiceHero";
import DetailedServiceGrid from "@/components/services/DetailedServiceGrid";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import BottomCTA from "@/components/home/BottomCTA";
import SimpleTextSection from "@/components/services/SimpleTextSection";
import InteractiveFocusSection from "@/components/services/InteractiveFocusSection";

export const metadata: Metadata = {
  title: "Content Marketing Services | B2B Content Strategy Agency – Axenra Technologies",
  description: "Axenra Technologies delivers data-driven content marketing strategies that rank, engage, and convert. Expert B2B content writing services, content strategy, and social media content marketing for global brands.",
  keywords: [
    "content marketing services", "content marketing strategies", "content strategy",
    "b2b content marketing strategy", "content writing services", "content marketing seo"
  ]
};

const contentServices = [
  {
    icon: "LayoutTemplate",
    title: "Content Strategy & Planning",
    desc: "Research-backed content strategy services — editorial calendars, topic clusters, keyword mapping, and competitive gap analysis."
  },
  {
    icon: "Briefcase",
    title: "B2B Content Marketing",
    desc: "Long-form thought leadership, whitepapers, case studies, and landing pages — b2b content marketing strategy executed by specialists."
  },
  {
    icon: "PenTool",
    title: "Content Writing Services",
    desc: "SEO-optimised blog posts, articles, website copy, and product content produced by our content writing agency team."
  },
  {
    icon: "Share2",
    title: "Social Media Content Marketing",
    desc: "Platform-native content for LinkedIn, X, Instagram, and more — designed to build community and drive engagement."
  }
];

const seoContentServices = [
  {
    icon: "Network",
    title: "Topic Cluster Architecture",
    desc: "We build pillar pages and cluster content structures that establish deep topical authority in your niche."
  },
  {
    icon: "Search",
    title: "Keyword-Led Content Briefs",
    desc: "Every article starts with a data-driven brief aligned to search intent — not just search volume."
  },
  {
    icon: "RefreshCw",
    title: "Content Refresh & Optimisation",
    desc: "We audit and update existing content to reclaim lost rankings and compound organic traffic over time."
  },
  {
    icon: "Link",
    title: "Link-Worthy Asset Creation",
    desc: "Original research, data studies, and interactive tools that earn backlinks naturally — amplifying your SEO authority."
  }
];

const socialMediaServices = [
  {
    icon: "Linkedin",
    title: "LinkedIn Marketing",
    desc: "B2B thought leadership, company page management, and organic lead generation on the world's most powerful professional network."
  },
  {
    icon: "Repeat",
    title: "Content Repurposing",
    desc: "Turn one blog post into 10 pieces of social content — maximising the ROI of every piece of content we produce together."
  },
  {
    icon: "Users",
    title: "Community Building",
    desc: "Engage and grow your audience through consistent, on-brand interaction that builds trust over time."
  }
];

const b2bContentFocusItems = [
  { title: "Top of Funnel", description: "Educational blog posts, LinkedIn articles, and podcasts that build brand awareness and drive organic traffic." },
  { title: "Middle of Funnel", description: "Comparison guides, case studies, ROI calculators, and webinars that accelerate evaluation." },
  { title: "Bottom of Funnel", description: "Proposal-ready content: implementation guides, security reviews, and one-pagers that help champions sell internally." }
];

const contentFaqs = [
  {
    question: "How quickly will content marketing show results?",
    answer: "SEO content typically takes 3–6 months to show organic ranking improvements. Social media and email-distributed content can drive traffic within weeks. We set realistic expectations and show leading indicators (rankings, impressions, engagement) throughout."
  },
  {
    question: "Do you provide content writing services in multiple languages?",
    answer: "Yes. Our content writing agency supports English, Spanish, French, German, and several other languages through our network of native-speaking specialist writers."
  },
  {
    question: "What makes a good B2B content marketing strategy?",
    answer: "The best B2B content marketing strategy starts with deep audience research, builds around search-intent-aligned topic clusters, distributes content through the right channels for your ICP, and measures success in pipeline, not just pageviews."
  }
];

export default function ContentMarketingPage() {
  return (
    <main>
      <ServiceHero 
        badgeText="CONTENT MARKETING"
        title={
          <>Content Marketing Services — <span className="text-brand-cyan-blue">Content That Ranks, Converts, and Builds Authority</span></>
        }
        description={
          <>
            <strong>Content That Earns Attention and Drives Revenue.</strong><br/><br/>
            In a world saturated with noise, great content marketing strategies are the ones that cut through. Axenra Technologies is a full-service content marketing services agency — we create purposeful, SEO-optimised content that attracts your ideal buyers, builds lasting authority, and fuels your growth engine.<br/><br/>
            From developing a comprehensive content strategy to executing b2b content writing, social media marketing services, and content marketing SEO — everything we do is designed to generate measurable business results.
          </>
        }
        formTitle="Get Your Content Strategy"
      />
      
      <DetailedServiceGrid 
        sectionTag="OUR SERVICES"
        title={<>Our <span className="text-brand-cyan-blue">Content Marketing</span> Services</>}
        services={contentServices}
      />

      <DetailedServiceGrid 
        sectionTag="SEO CONTENT"
        title={<>Content Marketing SEO — <span className="text-brand-cyan-blue">Organic Growth at Scale</span></>}
        description="Content marketing SEO is the intersection of great writing and technical search strategy. Our approach ensures every piece of content we produce is built to rank and stay ranked:"
        services={seoContentServices}
      />

      <InteractiveFocusSection 
        sectionTag="B2B CONTENT" 
        title={<>B2B Content Marketing — <span className="text-brand-cyan-blue">From Awareness to Pipeline</span></>}
        description={
          <p>
            The best b2b content marketing agencies understand that B2B buying is a team sport. Decision-makers research for weeks. Our b2b content marketing strategy framework addresses every stage of the buying committee's journey:
          </p>
        }
        items={b2bContentFocusItems}
      />

      <DetailedServiceGrid 
        sectionTag="SOCIAL MEDIA"
        title={<>Social Media Content <span className="text-brand-cyan-blue">Marketing & Management</span></>}
        description="Our social media marketing services are built for businesses that want more than likes — they want leads. We develop platform-specific content strategies, create high-engagement posts, manage communities, and track performance metrics that matter:"
        services={socialMediaServices}
      />
      
      <ServiceFAQ faqs={contentFaqs} />
      <BottomCTA />
      
    </main>
  );
}
