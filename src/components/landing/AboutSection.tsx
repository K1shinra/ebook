import { BookOpen, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Vast Library",
      description: "Access thousands of carefully curated ebooks across all genres and topics.",
    },
    {
      icon: Heart,
      title: "Made for Readers",
      description: "Designed with love for students, scholars, and curious minds everywhere.",
    },
    {
      icon: Globe,
      title: "Read Anywhere",
      description: "Your entire library travels with you—on any device, in any place.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            What is Museyo?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Museyo is more than an ebook app—it's a companion for your intellectual journey. 
            Born from the belief that great books should be accessible to everyone, Museyo 
            bridges the gap between readers and the world's most inspiring literature. Whether 
            you're a student preparing for exams, a professional seeking knowledge, or simply 
            someone who loves to read, Museyo is designed for you.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
