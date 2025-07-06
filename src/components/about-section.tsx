import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate software engineer with expertise in embedded systems and aerospace technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 6 years of experience in software engineering, I specialize in 
                embedded systems development and virtualization technologies. My career 
                highlight includes contributing to NASA&apos;s Orion Spacecraft program, where 
                I developed innovative solutions that resulted in significant cost savings 
                and improved system reliability.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Key Expertise</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Embedded Programming</Badge>
                <Badge variant="secondary">Virtualization</Badge>
                <Badge variant="secondary">Aerospace Systems</Badge>
                <Badge variant="secondary">Real-time Systems</Badge>
                <Badge variant="secondary">Hardware Integration</Badge>
              </div>
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$2.4M</div>
                    <div className="text-xs text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">NASA</div>
                    <div className="text-xs text-muted-foreground">Orion Project</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Mission Critical</div>
                  <div className="text-sm text-muted-foreground">
                    Developing software for spacecraft that will carry humans to the Moon and beyond
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}