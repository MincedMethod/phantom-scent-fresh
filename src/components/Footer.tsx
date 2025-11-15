import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Phantom Scent Guard" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              © 2025 Phantom Scent Guard. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/80">
              Banish shoe odor. Permanently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
