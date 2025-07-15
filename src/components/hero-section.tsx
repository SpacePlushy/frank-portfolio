"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";
import { usePortfolioVariant } from "@/contexts/portfolio-variant-context";
import { portfolioContent } from "@/config/portfolio-content";

export default function HeroSection() {
  const variant = usePortfolioVariant();
  const content = portfolioContent[variant].hero;
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
                  alt={`${content.name} - ${content.title}`}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary/20 shadow-lg"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              {content.name}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {content.tagline}
            </p>
          </div>

          <div className="space-y-4">
            {/* Primary contact button - full width on mobile */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="group w-full max-w-sm"
                asChild
              >
                <a href={`mailto:${content.email}`}>
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Email Me
                </a>
              </Button>
            </div>
            
            {/* Secondary contact buttons - side by side on mobile */}
            <div className="flex gap-3 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 max-w-[140px]"
                asChild
              >
                <a href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 max-w-[140px]"
                asChild
              >
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
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