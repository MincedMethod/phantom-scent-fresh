import { Clock, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Long-Lasting Power",
    description: "Enjoy fresh shoes for several days with a single application.",
  },
  {
    icon: Sparkles,
    title: "Effortlessly Simple",
    description: "Just peel and stick. It's as easy as using a normal sticker.",
  },
  {
    icon: Target,
    title: "Powerful Odor Elimination",
    description: "Targets and neutralizes smell at the source, inside your shoe.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                <benefit.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
