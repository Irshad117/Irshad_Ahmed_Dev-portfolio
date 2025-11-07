import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "irshad.ahmed@professional.com", 
      href: "mailto:irshad.ahmed@professional.com",
      description: "Best way to reach me"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+1 (555) 123-4567", 
      href: "tel:+15551234567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Available Worldwide", 
      href: null,
      description: "Remote & On-site"
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0077b5]" },
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-foreground" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-[#1DA1F2]" },
  ];

  const features = [
    { icon: Clock, text: "24-hour response time" },
    { icon: CheckCircle2, text: "Free project consultation" },
    { icon: MessageSquare, text: "Direct communication" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/20 to-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="font-semibold hover:text-primary transition-colors text-lg">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-lg">{info.value}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border/50 space-y-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <feature.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm font-medium mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-all ${social.color} border border-primary/20 hover:border-primary/50`}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-xl border-2 border-border/50 focus:border-primary transition-colors bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl border-2 border-border/50 focus:border-primary transition-colors bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      type="text"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="rounded-xl border-2 border-border/50 focus:border-primary transition-colors bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Tell me about your project, timeline, and budget..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="rounded-xl border-2 border-border/50 focus:border-primary transition-colors resize-none bg-background/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-xl group shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive responses via email
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
