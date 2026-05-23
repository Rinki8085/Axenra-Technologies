"use client";

import { Category } from "./types";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: Category | "All";
  onCategoryChange: (category: Category | "All") => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8">
      <button
        onClick={() => onCategoryChange("All")}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
          activeCategory === "All"
            ? "bg-brand-cyan-blue text-brand-midnight-navy border-brand-cyan-blue"
            : "bg-transparent text-brand-cool-gray border-brand-soft-white/10 hover:border-brand-cyan-blue/50 hover:text-brand-soft-white"
        }`}
      >
        All Articles
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === category
              ? "bg-brand-cyan-blue text-brand-midnight-navy border-brand-cyan-blue"
              : "bg-transparent text-brand-cool-gray border-brand-soft-white/10 hover:border-brand-cyan-blue/50 hover:text-brand-soft-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
