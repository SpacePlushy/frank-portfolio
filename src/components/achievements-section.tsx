import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHe
  ader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Rocket, TestTube, DollarSign } from "lucide-react";

const achievements = [
  {
    title: "NASA Artemis Project Achievement",
    icon: <Rocket className="h-6 w-6" />,
    description:
      "Spearheaded embedded software development for NASA's Orion spacecraft display unit using Wind River Simics virtualization",
    impact: "64% Faster Resolution & $2.4M Savings",
    details: [
      "Reduced issue resolution time by 64% (from weeks to days)",
      "Achieved cost savings exceeding $2.4 million for NASA and Honeywell",
      "Substantially improved software maintainability, reliability, and efficiency",
    ],
    badge: "NASA Artemis",
  },
  {
    title: "ISS MDM Testing Innovation",
    icon: <TestTube className="h-6 w-6" />,
    description:
      "Led virtualization of International Space Station Multiplexor/Demultiplexer (MDM) test equipment using Unix and Linux systems",
    impact: "75% Testing Cycle Reduction",
    details: [
      "Created virtualized software driver code and test cases",
      "Reduced testing cycles by 75% (from days to hours)",
      "Version controlled with Bitbucket and ClearCase for reliability",
    ],
    badge: "ISS Innovation",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming aerospace technology through innovative software
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">
                      {achievement.impact}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Trophy className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <strong>Recognition:</strong> These achievements demonstrate
            expertise in mission-critical software development, cost
            optimization, and innovation in aerospace technology. The work
            contributed directly to advancing human space exploration
            capabilities.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
