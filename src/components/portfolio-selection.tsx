"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Plane, ArrowRight, Medal, Star } from "lucide-react";

export default function PortfolioSelection() {
  
  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <section id="portfolio-selection" className="py-20 bg-muted/20" aria-labelledby="portfolio-selection-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="portfolio-selection-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Explore My Military & Aviation Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover my specialized experience in crisis management, military leadership, and aviation operations. Choose the area you&apos;d like to explore to see my achievements and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" role="list">
          {/* Military Leadership Portfolio */}
          <Card 
            className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-green-600 focus-within:ring-offset-2"
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, '/military')}
            aria-label="Military Leadership & Crisis Management Portfolio"
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-600 text-white rounded-lg" aria-hidden="true">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-green-900 dark:text-green-100">
                    Military Leadership & Training
                  </CardTitle>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Crisis Management • Training Excellence • Command Operations
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    Distinguished Graduate - Air Force
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Crisis Management
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Training Manager
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Team Leadership
                  </Badge>
                  <Badge variant="secondary" className="bg-green-200 text-green-800">
                    Emergency Response
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4" role="group" aria-label="Performance metrics">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600" aria-label="20 thousand personnel managed">20K</div>
                    <div className="text-xs text-green-600">Personnel</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600" aria-label="100 percent compliance rating">100%</div>
                    <div className="text-xs text-green-600">Compliance</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 group-hover:translate-x-1 transition-all"
                asChild
                aria-label="View Military Leadership Portfolio - Opens in same window"
              >
                <a href="/military">
                  View Military Leadership Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Aviation & Emergency Management Portfolio */}
          <Card 
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, '/aviation')}
            aria-label="Aviation & Emergency Management Portfolio"
          >
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-lg" aria-hidden="true">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    Aviation & Emergency Management
                  </CardTitle>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Air Traffic Control • Flight Safety • Emergency Response
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Air Traffic Control Specialist
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Air Traffic Control
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Flight Safety
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Emergency Planning
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                    Airfield Operations
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4" role="group" aria-label="Performance metrics">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600" aria-label="420 thousand annual operations">420K</div>
                    <div className="text-xs text-blue-600">Operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600" aria-label="17.9 million dollars in equipment">$17.9M</div>
                    <div className="text-xs text-blue-600">Equipment</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 group-hover:translate-x-1 transition-all"
                asChild
                aria-label="View Aviation Portfolio - Opens in same window"
              >
                <a href="/aviation">
                  View Aviation Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Both portfolios showcase different aspects of my military and aviation expertise. 
            <br />
            Feel free to explore both to get a complete picture of my capabilities and achievements.
          </p>
        </div>
      </div>
    </section>
  );
}