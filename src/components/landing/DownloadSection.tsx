import { Button } from "@/components/ui/button";
import { Download, Monitor, Smartphone, Shield } from "lucide-react";

const DownloadSection = () => {
  const downloadOptions = [
    {
      icon: Smartphone,
      platform: "Android",
      version: "APK Download",
      href: "https://expo.dev/artifacts/eas/2pJmyumX2Si4TStAdywrYj.apk",
    },
    {
      icon: Monitor,
      platform: "Windows",
      version: "Desktop App",
      href: "https://expo.dev/artifacts/eas/2pJmyumX2Si4TStAdywrYj.apk",
    },
  ];

  return (
    <section id="download" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-8">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Free Download</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Start Reading?
          </h2>
          <p className="text-lg text-background/70 mb-12 leading-relaxed">
            Download Museyo today and unlock a world of knowledge. Available for Android and Windows—completely free.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {downloadOptions.map((option) => (
              <a
                key={option.platform}
                href={option.href}
                className="group w-full sm:w-auto flex items-center gap-4 px-6 py-4 rounded-xl bg-background/10 border border-background/20 hover:bg-background/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                  <option.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-background/60">Download for</div>
                  <div className="text-lg font-semibold">{option.platform}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-2 text-background/60">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Secure download • No registration required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
