import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Experience", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:irshad@example.com", label: "Email" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mr-2">Social</p>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Menu Items - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mr-2">Menu</p>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Get in Touch - Desktop */}
          <div className="hidden md:block">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Get in Touch</p>
            <a
              href="mailto:irshadahmed@gmail.com"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              irshadahmed@gmail.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
