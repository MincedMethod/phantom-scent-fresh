import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-hero-gradient text-primary-foreground pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            Banish Shoe Odor.<br />Permanently.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            The Invisible Sticker That Keeps Your Shoes Fresh for Days.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={scrollToProducts}
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
