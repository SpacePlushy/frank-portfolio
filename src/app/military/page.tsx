"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import AchievementsSection from "@/components/achievements-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import { PortfolioVariantProvider } from "@/contexts/portfolio-variant-context";

export default function MilitaryPage() {
  return (
    <PortfolioVariantProvider variant="military">
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </PortfolioVariantProvider>
  );
}