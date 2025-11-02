import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-primary"
    },
    {
      icon: Mail,
      href: "mailto:irshad@example.com",
      label: "Email",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card
            ref={formRef}
            className={`p-8 border-2 border-border bg-card transition-all duration-1000 delay-300 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-input text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-input text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-input resize-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-sm uppercase tracking-[0.2em] rounded-none group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Button>
            </form>
          </Card>

          <div
            className={`flex justify-center gap-6 mt-12 transition-all duration-1000 delay-500 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-4 rounded-full border-2 border-border hover:border-primary bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
