import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl mb-4 text-primary uppercase tracking-wider font-bold">
            FULL-STACK
          </p>
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            <span className="text-foreground">DEVEL</span>
            <span className="block text-primary mt-2">IRSHAD</span>
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-xl text-muted-foreground">
            Hi! I'm Irshad Ahmed. A creative Full-Stack Developer with expertise in building high-performance, scalable, and responsive web solutions.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all hover:scale-105 font-bold px-8 py-6 text-base uppercase tracking-wider"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
          
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</h3>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</h3>
              <p className="text-sm text-muted-foreground">Completed Projects</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</h3>
              <p className="text-sm text-muted-foreground">Hours Worked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email on left side */}
      <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-20">
        <a 
          href="mailto:irshad@example.com" 
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          irshadahmed@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Hero;
