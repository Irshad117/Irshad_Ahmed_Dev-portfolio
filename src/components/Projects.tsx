import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Applywise – Education Consultancy Platform",
      description:
        "Invitation-based education consultancy platform built to manage students, counselors, and application workflows. Implemented secure email-based user onboarding using AWS Cognito, role-based access control, and a scalable PostgreSQL database with Prisma ORM.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "AWS Cognito"],
      github: "", // Private repository (recommended to keep empty)
      demo: "https://www.applywise.io/",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      featured: true,
      stats: {
        onboarding: "Invite-based",
        auth: "AWS Cognito",
      },
    },

    {
      title: "Online Quran Learning Platform",
      description:
        "A responsive Quran learning website offering online Quran classes and Islamic courses. Built with modern UI/UX, smooth animations, and optimized performance to provide an engaging learning experience for students worldwide.",
      tech: ["React (Vite)", "Tailwind CSS", "Framer Motion", "React Router"],
      github: "https://github.com/Irshad117/quranic-learning-hub-connect",
      demo: "https://online-quran1.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80",
      featured: true,
    },

    {
      title: "E-Commerce Marketplace",
      description:
        "Scalable marketplace platform with vendor management, product catalog, secure payments, inventory tracking, and comprehensive admin dashboard.",
      tech: ["Next.js", "Express", "PostgreSQL", "Stripe", "S3"],
      github: "https://github.com",
      demo: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      featured: false,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics platform with machine learning insights, predictive modeling, data visualization, and automated reporting for business intelligence.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL", "D3.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      featured: false,
    },
    {
      title: "Healthcare Management System",
      description:
        "HIPAA-compliant healthcare platform with patient records, appointment scheduling, telemedicine, prescription management, and secure messaging.",
      tech: ["Next.js", "Node.js", "MongoDB", "WebRTC", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      featured: false,
    },
    {
      title: "Social Media Platform",
      description:
        "Feature-rich social network with real-time feeds, messaging, content moderation, advanced search, and engagement analytics. Built for scale.",
      tech: ["React", "GraphQL", "Node.js", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-background to-secondary/20"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best
            practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-80" />

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}

                {project.stats && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-border/50"
                      >
                        <TrendingUp className="w-3 h-3 inline mr-1 text-primary" />
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
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
                    className="flex-1 bg-primary hover:bg-primary/90 group/btn shadow-md"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Live Demo
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
