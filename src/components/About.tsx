import { Code2, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-12 text-foreground animate-slide-up">
            I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-up">
              <p className="text-sm text-primary font-bold mb-4 uppercase tracking-wider">This is me.</p>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Hi, I'm Irshad Ahmed.</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                I'm a full-stack web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
              </p>
            </div>

            <div className="space-y-6 animate-slide-up">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="border-l-2 border-primary pl-6 hover:border-primary/60 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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
