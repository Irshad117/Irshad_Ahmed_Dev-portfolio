import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform with real-time updates, team collaboration features, and analytics dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and engagement metrics.",
      tech: ["React", "Express.js", "Chart.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder with customizable templates, SEO optimization, and deployment integration.",
      tech: ["Vue.js", "Node.js", "AWS", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat app with end-to-end encryption, file sharing, and group messaging features.",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts.",
      tech: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-accent group/btn"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
