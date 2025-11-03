import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experiences.",
    },
    {
      icon: Palette,
      title: "User-Centric",
      description: "Designing beautiful, intuitive interfaces that users love.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> with{" "}
              <span className="text-primary font-semibold">3+ years</span> of experience building modern web applications.
              I specialize in creating seamless digital experiences that combine elegant design with robust functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">Node.js</span>, and{" "}
              <span className="text-primary font-semibold">PostgreSQL</span>, allowing me to deliver
              complete solutions from concept to deployment. I'm committed to writing clean, maintainable
              code and staying updated with the latest web technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-2xl shadow-card p-6 hover:shadow-hover transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
