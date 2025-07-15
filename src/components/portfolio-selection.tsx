"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Users, ArrowRight, Rocket, Star } from "lucide-react";

export default function PortfolioSelection() {
  return (
    <section id="portfolio-selection" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore My Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;ve built expertise across multiple domains. Choose the area you&apos;d like to explore to see my specialized experience and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Software Engineering Portfolio */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-lg">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    Software Engineering
                  </CardTitle>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Embedded Systems • Aerospace • NASA Projects
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    NASA Orion Spacecraft Contributor
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    C/C++
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Embedded Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Virtualization
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                    <div className="text-xs text-blue-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">6+</div>
                    <div className="text-xs text-blue-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 group-hover:translate-x-1 transition-all"
                asChild
              >
                <a href="https://swe.palmisano.io">
                  View Software Engineering Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Customer Service Portfolio */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-600 text-white rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-green-900 dark:text-green-100">
                    Customer Service Excellence
                  </CardTitle>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Support • Client Relations • Customer Success
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    Apple Top 4% Nationally
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    99% CSAT
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Technical Support
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    First Contact Resolution
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    HIPAA Certified
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99%</div>
                    <div className="text-xs text-green-600">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">4.97★</div>
                    <div className="text-xs text-green-600">Current Rating</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 group-hover:translate-x-1 transition-all"
                asChild
              >
                <a href="https://csr.palmisano.io">
                  View Customer Service Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Both portfolios showcase different aspects of my professional expertise. 
            <br />
            Feel free to explore both to get a complete picture of my capabilities.
          </p>
        </div>
      </div>
    </section>
  );
}