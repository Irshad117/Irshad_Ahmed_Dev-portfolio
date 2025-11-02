import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl">
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base md:text-xl mb-6 text-primary uppercase tracking-[0.3em] font-bold">
              FULL-STACK
            </p>
            <h1 className="text-6xl md:text-[10rem] lg:text-[12rem] font-black mb-8 leading-[0.85] tracking-tight">
              <span className="text-foreground block">DEVEL</span>
              <span className="text-primary block relative">
                IRSHAD
                <span className="absolute -right-4 top-0 w-3 h-3 bg-primary rounded-full animate-pulse" />
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base md:text-lg mb-10 max-w-2xl text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-foreground font-semibold">Irshad Ahmed</span>. A creative Full-Stack Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all hover:scale-105 font-bold px-10 py-7 text-sm uppercase tracking-[0.2em] rounded-none group relative overflow-hidden"
              onClick={() => {
                window.open("https://www.upwork.com/freelancers/irshadahmed", "_blank");
              }}
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Button>
          </div>

          <div
            ref={statsRef}
            className={`grid grid-cols-3 gap-8 md:gap-16 mt-20 max-w-3xl transition-all duration-1000 delay-500 ${
              statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="border-l-2 border-primary pl-4 hover:border-primary/60 transition-colors">
              <h3 className="text-4xl md:text-6xl font-black text-primary mb-2">3+</h3>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Years of Experience</p>
            </div>
            <div className="border-l-2 border-primary pl-4 hover:border-primary/60 transition-colors">
              <h3 className="text-4xl md:text-6xl font-black text-primary mb-2">10+</h3>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Completed Projects</p>
            </div>
            <div className="border-l-2 border-primary pl-4 hover:border-primary/60 transition-colors">
              <h3 className="text-4xl md:text-6xl font-black text-primary mb-2">15K+</h3>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Hours Worked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email on left side */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-20">
        <a
          href="mailto:irshadahmed@gmail.com"
          className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          irshadahmed@gmail.com
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
