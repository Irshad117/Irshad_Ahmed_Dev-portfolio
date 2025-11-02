import { Code2, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project"
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Creating intuitive, accessible experiences for all users"
    }
  ];

  return (
    <section id="about" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={titleRef}
            className={`mb-20 transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground max-w-5xl">
              I believe in a{" "}
              <span className="text-primary">user centered design approach</span>, ensuring that
              every project I work on is tailored to meet the specific needs of its users.
            </h2>
          </div>

          <div
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 delay-300 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-block border-l-4 border-primary pl-4">
                <p className="text-sm text-primary font-bold uppercase tracking-wider mb-2">
                  This is me.
                </p>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">
                Hi, I'm Irshad Ahmed.
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack web developer dedicated to turning ideas into creative solutions. I
                specialize in creating seamless and intuitive user experiences.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My approach focuses on creating scalable, high-performing solutions tailored to both
                user needs and business objectives. By prioritizing performance, accessibility, and
                responsiveness, I strive to deliver experiences that not only engage users but also
                drive tangible results.
              </p>
            </div>

            <div className="space-y-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group border-l-2 border-border hover:border-primary pl-6 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
