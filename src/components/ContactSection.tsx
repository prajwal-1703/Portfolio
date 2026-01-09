import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import SocialIcon from "./SocialIcon";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="section-title justify-center">
            <span className="text-accent font-mono">06.</span> Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-mono text-xl font-semibold mb-6">
              Contact Details
            </h3>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="p-3 bg-secondary rounded-lg">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-mono text-sm text-muted-foreground mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="p-3 bg-secondary hover:bg-accent/10 border border-border hover:border-accent/50 rounded-lg transition-all duration-300"
                    aria-label={link.platform}
                  >
                    <SocialIcon name={link.icon} size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-card border border-border rounded-xl p-8 flex flex-col justify-center overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono mb-4">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available for work
              </div>

              <h3 className="font-mono text-2xl font-bold mb-4">
                Let's build something great together
              </h3>

              <p className="text-muted-foreground mb-6">
                I'm passionate about DevOps, Security, and Web3. If you're looking for someone who can help architect secure, scalable systems, let's talk.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-glow"
              >
                <Send size={18} />
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
