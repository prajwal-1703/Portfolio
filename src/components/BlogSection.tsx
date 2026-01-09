import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blogPosts, featuredPosts } from "@/data/portfolioData";
import { ExternalLink, BookOpen, Linkedin, Twitter, MessageSquare } from "lucide-react";

const platformIcons: Record<string, React.ElementType> = {
  devto: BookOpen,
  medium: BookOpen,
  hashnode: BookOpen,
  linkedin: Linkedin,
  twitter: Twitter,
  other: MessageSquare,
};

const platformColors: Record<string, string> = {
  devto: "bg-foreground/10",
  medium: "bg-foreground/10",
  hashnode: "bg-blue-500/10",
  linkedin: "bg-blue-600/10",
  twitter: "bg-sky-500/10",
  other: "bg-accent/10",
};

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hasBlogPosts = blogPosts.length > 0;
  const hasFeaturedPosts = featuredPosts.length > 0;

  return (
    <section id="blog" className="py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-accent font-mono">05.</span> Blog & Posts
          </h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights
          </p>
        </motion.div>

        {/* Blog Posts */}
        {hasBlogPosts ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post, index) => {
              const Icon = platformIcons[post.platform] || BookOpen;
              return (
                <motion.a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2 rounded-lg ${platformColors[post.platform]}`}
                    >
                      <Icon size={20} />
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  </div>
                  <h3 className="font-mono font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono uppercase">{post.platform}</span>
                    {post.date && <span>{post.date}</span>}
                  </div>
                </motion.a>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-12 bg-card border border-dashed border-border rounded-xl mb-16"
          >
            <BookOpen size={40} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground font-mono">
              Blog posts coming soon...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Add your dev.to or medium links in portfolioData.ts
            </p>
          </motion.div>
        )}

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-mono text-xl font-semibold mb-6">
            <span className="text-accent">#</span> Featured Posts
          </h3>
        </motion.div>

        {hasFeaturedPosts ? (
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => {
              const Icon = platformIcons[post.platform] || MessageSquare;
              return (
                <motion.a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg ${platformColors[post.platform]}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-relaxed mb-3 line-clamp-3">
                        "{post.content}"
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-mono uppercase flex items-center gap-1">
                          {post.platform}
                          <ExternalLink size={12} />
                        </span>
                        {post.engagement && (
                          <span className="text-accent">{post.engagement}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center py-12 bg-card border border-dashed border-border rounded-xl"
          >
            <MessageSquare size={40} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground font-mono">
              Featured posts coming soon...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Add your LinkedIn or Twitter posts in portfolioData.ts
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
