import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer I - II",
    company: "Honeywell Aerospace",
    location: "Phoenix, AZ",
    period: "May 2018 - Jun 2024",
    description: [
      "Spearheaded creation of embedded software in C/C++ utilizing Wind River Simics to fully virtualize NASA's Orion spacecraft display unit",
      "Reduced issue resolution turnaround by 64% (from weeks to days) and achieved cost savings exceeding $2.4 million",
      "Initiated virtualization of ISS Multiplexor/Demultiplexer (MDM) test equipment using Unix and Linux operating systems",
      "Created and optimized automated test software using LabVIEW, C, and Python, reducing product testing time from 8 hours to 3 hours per unit",
      "Designed and conducted comprehensive training courses on Simics Fundamentals and Model Design, delivering 14 training sessions"
    ],
    technologies: ["C/C++", "Python", "Wind River Simics", "LabVIEW", "Unix", "Linux", "Bitbucket", "ClearCase"]
  },
  {
    title: "Co-Founder and Chief Technology Officer",
    company: "Life Jewel Technologies",
    location: "Tempe, AZ",
    period: "Dec 2016 - Jun 2017",
    description: [
      "Engineered innovative Bluetooth Low Energy based object recognition software using Objective-C and Swift with iBeacon technology",
      "Achieved substantial improvements in mobile device battery consumption efficiency",
      "Earned 'Best in Class' award and secured $10,000 development grant from Arizona State University"
    ],
    technologies: ["Objective-C", "Swift", "BLE", "iBeacon", "iOS"]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Performance Software Corp.",
    location: "Phoenix, AZ",
    period: "Jul 2016 - Oct 2016",
    description: [
      "Developed automated Python-based scripting solutions for avionics software testing on Northrop Grumman's Blackhawk Helicopter project",
      "Increased test execution speed by 45% and significantly reduced manual coding errors",
      "Completed project two weeks ahead of original schedule"
    ],
    technologies: ["Python", "Avionics Testing", "Automation", "Scripting"]
  },
  {
    title: "Customer Service Advisor",
    company: "Apple Inc.",
    location: "Tempe, AZ",
    period: "Jun 2014 - Dec 2014",
    description: [
      "Delivered superior technical customer support services with consistently 99% customer satisfaction rating",
      "Ranked in top 4% nationally and received 16 Outstanding Customer Service Awards"
    ],
    technologies: ["Technical Support", "Customer Service", "Problem Solving"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey through aerospace, healthcare, and enterprise software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}