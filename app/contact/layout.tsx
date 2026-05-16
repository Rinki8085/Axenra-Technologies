import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Axenra Technologies | Book a Free Strategy Session",
  description: "Ready to grow your B2B pipeline? Get in touch with Axenra's growth team and book a free strategy session. Let's build your revenue engine together.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
