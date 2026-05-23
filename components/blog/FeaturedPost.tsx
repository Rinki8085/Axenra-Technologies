"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./types";
import { ArrowRight, Clock, Calendar } from "lucide-react";

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section id="featured" className="py-12 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative rounded-2xl overflow-hidden border border-brand-soft-white/10 bg-brand-midnight-navy/50 backdrop-blur-sm hover:border-brand-cyan-blue/50 transition-colors duration-500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Container */}
          <div className="relative h-75 lg:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-brand-midnight-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-brand-deep-blue/20 text-brand-cyan-blue text-xs font-bold uppercase tracking-wider rounded-full border border-brand-cyan-blue/20">
                {post.category}
              </span>
              <div className="flex items-center text-brand-cool-gray text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTimeMin} min read
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-brand-soft-white mb-4 group-hover:text-brand-cyan-blue transition-colors font-orbitron">
              <Link href={`/blog/#`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-brand-cool-gray mb-8 text-lg leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-cyan-blue to-brand-deep-blue flex items-center justify-center text-brand-midnight-navy font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-soft-white font-medium text-sm">{post.author.name}</p>
                  <div className="flex items-center text-brand-cool-gray text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.publishDate}
                  </div>
                </div>
              </div>

              <Link 
                href={`/blog/#`}
                className="inline-flex items-center text-brand-cyan-blue font-semibold hover:text-brand-soft-white transition-colors"
              >
                Read Article
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
