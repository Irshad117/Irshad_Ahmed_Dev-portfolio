import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skillCategories = [
    {
      name: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"]
    },
    {
      name: "Tools & Others",
      skills: ["Git", "GitHub", "Vite", "Webpack", "Responsive Design", "Web Performance"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`mb-16 transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground">
              My Stack
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div
            ref={skillsRef}
            className="space-y-12"
          >
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`transition-all duration-1000 ${
                  skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${catIndex * 200}ms` }}
              >
                <div className="mb-6 border-l-4 border-primary pl-4">
                  <h3 className="text-sm text-primary font-bold uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="px-6 py-3 text-sm font-semibold border-2 border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
