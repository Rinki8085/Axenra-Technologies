import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Axenra Technologies | Growth Marketing Experts for B2B",
  description: "Discover Axenra Technologies, a results-driven B2B and SaaS growth marketing agency focused on generating pipeline, improving conversions, through data-backed strategies.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
