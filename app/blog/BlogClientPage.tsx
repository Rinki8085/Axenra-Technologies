"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import CategoryFilter from "@/components/blog/CategoryFilter";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { blogPosts } from "@/components/blog/data";
import { Category } from "@/components/blog/types";
import CTASection from "@/components/CTASection";

export default function BlogClientPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const categories = Array.from(new Set(blogPosts.map((post) => post.category))) as Category[];
  const featuredPost = blogPosts.find((post) => post.isFeatured) || blogPosts[0];
  
  // Exclude featured post from grid if 'All' is selected, else show all matching category
  const filteredPosts = blogPosts.filter((post) => {
    const isCategoryMatch = activeCategory === "All" || post.category === activeCategory;
    const isNotFeatured = activeCategory === "All" ? post.id !== featuredPost.id : true;
    return isCategoryMatch && isNotFeatured;
  });

  return (
    <main className="flex flex-col min-h-screen bg-brand-midnight-navy">
      <BlogHero />
      
      {activeCategory === "All" && (
        <FeaturedPost post={featuredPost} />
      )}

      <section className="py-12 container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-brand-soft-white mb-2 font-orbitron">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-brand-cyan-blue rounded-full mb-6"></div>
          
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        <BlogGrid posts={filteredPosts} />
      </section>

      <NewsletterSignup />
      
      <div className="container mx-auto px-6 mb-20 mt-10">
         <CTASection />
      </div>
    </main>
  );
}
