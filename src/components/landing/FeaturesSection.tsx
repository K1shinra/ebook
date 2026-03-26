import { Smartphone, Eye, WifiOff, FolderOpen } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Ebook Access",
      description:
        "Instantly access your favorite books with just a few taps. Our intuitive interface makes finding and reading books effortless.",
    },
    {
      icon: Eye,
      title: "User-Friendly Reading",
      description:
        "Customize fonts, backgrounds, and reading modes to create your perfect reading environment. Eye-friendly design for long reading sessions.",
    },
    {
      icon: WifiOff,
      title: "Offline Reading",
      description:
        "Download books and read without an internet connection. Perfect for commutes, travel, or anywhere without WiFi.",
    },
    {
      icon: FolderOpen,
      title: "Organized Library",
      description:
        "Keep your books organized with categories, collections, and smart search. Find any book in seconds.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Features You'll Love
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for a seamless reading experience, thoughtfully designed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
