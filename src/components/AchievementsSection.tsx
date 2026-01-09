import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "@/data/portfolioData";
import { Trophy, Award, Medal, Star } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  certificate: Medal,
  star: Star,
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-accent font-mono">04.</span> Achievements
          </h2>
          <p className="section-subtitle">
            Milestones and recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon || "star"] || Star;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />

                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-mono font-semibold text-lg truncate">
                        {achievement.title}
                      </h3>
                      <span className="flex-shrink-0 font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-sm text-accent hover:underline"
                      >
                        View Details →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
