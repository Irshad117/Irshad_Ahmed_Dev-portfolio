import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Redux & State Management", level: 88 },
        { name: "HTML5 & CSS3", level: 97 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating scalable and secure server-side solutions",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 93 },
        { name: "GraphQL", level: 82 },
        { name: "Authentication & Security", level: 88 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Streamlining development and deployment workflows",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 83 },
        { name: "AWS Services", level: 80 },
        { name: "CI/CD Pipelines", level: 82 },
        { name: "Webpack & Vite", level: 87 },
        { name: "Testing (Jest, RTL)", level: 85 },
        { name: "VS Code", level: 97 },
        { name: "Agile Methodologies", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-secondary/20 to-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web technologies and frameworks
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
