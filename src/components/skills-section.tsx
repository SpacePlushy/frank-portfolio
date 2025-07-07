import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Star, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "C/C++", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "C#", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "Assembly", level: "Intermediate" },
      { name: "Bash", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
    ],
  },
  {
    title: "Technologies & Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: "Wind River Simics", level: "Expert" },
      { name: "LabVIEW", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "RTOS", level: "Advanced" },
      { name: "Unix/Linux", level: "Advanced" },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "Version Control", level: "Advanced" },
      { name: "Bitbucket", level: "Advanced" },
      { name: "ClearCase", level: "Intermediate" },
    ],
  },
  {
    title: "Specializations",
    icon: <Star className="h-5 w-5" />,
    skills: [
      { name: "Embedded Programming", level: "Expert" },
      { name: "Virtualization", level: "Expert" },
      { name: "Microprocessors", level: "Advanced" },
      { name: "Unit Testing", level: "Advanced" },
      { name: "Asynchronous Programming", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Advanced":
      return "bg-primary/80 text-primary-foreground";
    case "Intermediate":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical skills spanning embedded systems, web
            development, and aerospace technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge
                        className={`text-xs ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary/80 rounded-full"></div>
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
