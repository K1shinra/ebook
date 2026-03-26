import { Globe, Download, BookOpen } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Globe,
      title: "Visit Museyo",
      description: "Head to our website or app store to find Museyo.",
    },
    {
      number: "02",
      icon: Download,
      title: "Download the App",
      description: "Click download and install Museyo on your device in seconds.",
    },
    {
      number: "03",
      icon: BookOpen,
      title: "Start Reading",
      description: "Browse, discover, and dive into your next favorite book.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with Museyo is simple. Three easy steps to a world of books.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center group">
                  {/* Step Circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-soft group-hover:shadow-elevated group-hover:border-primary transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
