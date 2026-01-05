import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Award, Target, Users, Rocket, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Committed to delivering high-quality solutions that exceed expectations through meticulous attention to detail.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies and methodologies to solve complex problems efficiently.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Building long-term partnerships by understanding business needs and delivering measurable results.",
    },
    {
      icon: Shield,
      title: "Reliable Solutions",
      description: "Creating robust, secure, and scalable applications that businesses can depend on.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Staying ahead of industry trends and constantly expanding technical expertise.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on achieving project objectives on time while maintaining code quality.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into powerful digital solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-border/50"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Building the Future, One Line at a Time
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> with over{" "}
                  <span className="text-primary font-semibold">2+ years</span> of professional experience in designing and 
                  developing enterprise-level web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies in architecting scalable solutions using modern JavaScript frameworks, cloud technologies, 
                  and best practices in software development. I take pride in writing clean, maintainable code and delivering 
                  projects that drive real business value.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Frontend Mastery", tech: "React, Next.js, TypeScript, Tailwind CSS" },
                  { label: "Backend Excellence", tech: "Node.js, PostgreSQL" },
                  { label: "Cloud & DevOps", tech: "AWS, CI/CD, Serverless" },
                  { label: "Best Practices", tech: "Testing, Performance, Security, SEO" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-primary/5 border border-primary/20 rounded-xl p-4"
                  >
                    <h4 className="font-semibold text-primary mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.tech}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
