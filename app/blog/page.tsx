import { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export const metadata: Metadata = {
  title: "Insights on B2B Marketing & React Development | Axenra Technologies",
  description: "Expert strategies, technical deep dives, and actionable advice to help you scale your SaaS product, optimize your SEO, and build high-performance web applications.",
  openGraph: {
    title: "Axenra Technologies Blog",
    description: "Insights on B2B Marketing & Modern React Development",
    url: "https://axenratechnologies.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClientPage />;
}
