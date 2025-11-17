import { HandIcon, StickyNote, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: HandIcon,
    title: "Peel",
    description: "Remove the protective backing from your Phantom Scent Guard sticker.",
    video: "https://memoria-vita.com/assets/how-it-works-video-1-BYUfCf5P.mp4",
  },
  {
    icon: StickyNote,
    title: "Stick",
    description: "Place the sticker inside your shoe, preferably on the insole.",
    video: "https://memoria-vita.com/assets/how-it-works-video-middle-jLTmJr0D.mp4",
  },
  {
    icon: CheckCircle,
    title: "Forget",
    description: "Enjoy fresh, odor-free shoes for days without any hassle.",
    video: "https://memoria-vita.com/assets/how-it-works-video-2-tyqDGBNZ.mp4",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Simple, effective, invisible</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-32 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={step.video}
                />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary relative z-10">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold">
                {index + 1}
              </div>
              <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
