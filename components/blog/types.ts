export interface Author {
  name: string;
  role: string;
  avatarUrl?: string;
}

export type Category = 
  | "SaaS Marketing" 
  | "SEO Strategy" 
  | "React Development" 
  | "Next.js" 
  | "Performance Optimization" 
  | "AI Automation";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: Category;
  readTimeMin: number;
  author: Author;
  publishDate: string;
  thumbnailUrl: string;
  isFeatured?: boolean;
}
