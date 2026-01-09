import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolioData";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-accent font-mono">03.</span> Experience
          </h2>
          <p className="section-subtitle">Where I've worked</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full border-4 border-background ${
                  index % 2 === 0
                    ? "md:-translate-x-1.5"
                    : "md:-translate-x-1.5"
                }`}
              />

              <div
                className={`bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <Briefcase size={16} className="text-accent" />
                  <span className="font-mono text-sm text-accent">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>

                <h3 className="font-mono text-xl font-semibold mb-1">
                  {exp.title}
                </h3>

                <div
                  className={`flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span className="font-medium text-foreground">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul
                  className={`space-y-2 text-muted-foreground ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      <span className="text-accent mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
