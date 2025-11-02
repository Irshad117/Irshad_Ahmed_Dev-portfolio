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
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="max-w-3xl mx-auto mb-12 animate-slide-up">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate Full-Stack Web Developer with a focus on creating performant, 
            user-friendly web applications. With expertise spanning both frontend and backend 
            technologies, I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines technical excellence with creative problem-solving, ensuring 
            every project delivers not just functionality, but an exceptional user experience. 
            I'm constantly learning and adapting to new technologies to stay at the forefront 
            of web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
