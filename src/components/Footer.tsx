const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Irshad Ahmed. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
