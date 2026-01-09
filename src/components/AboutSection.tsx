import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, skills, education } from "@/data/portfolioData";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-accent font-mono">01.</span> About Me
          </h2>
          <p className="section-subtitle">
            Building secure, scalable infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-2 bg-secondary rounded-lg">
                  <GraduationCap size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium">{education.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {education.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {education.graduationDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-2 bg-secondary rounded-lg">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium">{personalInfo.location}</p>
                  <p className="text-sm text-muted-foreground">
                    Open to remote opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-2 bg-secondary rounded-lg">
                  <Briefcase size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium">Available for Work</p>
                  <p className="text-sm text-muted-foreground">
                    DevOps, Security, Web3 roles
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-mono text-xl font-semibold mb-6">
              Technical Arsenal
            </h3>
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + groupIndex * 0.1 }}
                className="space-y-3"
              >
                <h4 className="font-mono text-sm text-accent uppercase tracking-wider">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.2,
                        delay: 0.5 + groupIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="tech-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
