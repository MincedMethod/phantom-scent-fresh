import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does one sticker last?",
    answer: "Each Phantom Scent Guard sticker provides fresh odor protection for several days, depending on usage intensity and shoe conditions.",
  },
  {
    question: "Is it really that easy to use?",
    answer: "Absolutely! Just peel off the backing and stick it inside your shoe. No complicated setup, no mess—just instant freshness.",
  },
  {
    question: "How many stickers come in a pack?",
    answer: "Check the product details for specific pack sizes. We offer various options to suit your needs.",
  },
  {
    question: "Can I use it in any type of shoe?",
    answer: "Yes! Phantom Scent Guard works great in sneakers, dress shoes, boots, and more. If your shoe has an odor problem, we have the solution.",
  },
  {
    question: "Is it safe for all shoe materials?",
    answer: "Yes, our stickers are designed to be safe for use with all common shoe materials including leather, canvas, synthetic, and more.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to know</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
