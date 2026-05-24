"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./types";
import { Clock } from "lucide-react";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-bold text-brand-soft-white mb-4">No articles found</h3>
        <p className="text-brand-cool-gray">Try selecting a different category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative rounded-2xl overflow-hidden border border-brand-soft-white/10 bg-brand-midnight-navy/30 backdrop-blur-sm hover:border-brand-cyan-blue/50 flex flex-col h-full transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <div className="absolute inset-0 bg-brand-midnight-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-brand-midnight-navy/80 backdrop-blur-md text-brand-cyan-blue text-xs font-bold uppercase tracking-wider rounded-full border border-brand-cyan-blue/30">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <div className="flex items-center text-brand-cool-gray text-xs mb-3 gap-4">
              <span>{post.publishDate}</span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTimeMin} min read
              </span>
            </div>

            <h3 className="text-xl font-bold text-brand-soft-white mb-3 group-hover:text-brand-cyan-blue transition-colors font-orbitron line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                {post.title}
              </Link>
            </h3>

            <p className="text-brand-cool-gray text-sm mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-brand-soft-white/10">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-cyan-blue to-brand-deep-blue flex items-center justify-center text-brand-midnight-navy font-bold text-xs">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-brand-soft-white font-medium text-xs">{post.author.name}</p>
                <p className="text-brand-cool-gray text-[10px]">{post.author.role}</p>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
