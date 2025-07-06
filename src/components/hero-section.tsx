"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/headshot.png"
                  alt="Frank Palmisano - Software Engineer"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary/20 shadow-lg"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Frank Palmisano
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Embedded Systems • Virtualization • NASA Orion Spacecraft
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group"
              onClick={() =>
                (window.location.href = "mailto:frank@palmisano.io")
              }
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "tel:+16233005532")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open("https://www.linkedin.com/in/frank-palmisano", "_blank")
              }
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="mr-2">Learn more</span>
              <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}