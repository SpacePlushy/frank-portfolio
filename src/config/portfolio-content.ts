export interface PortfolioContent {
  metadata: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    name: string
    title: string
    tagline: string
    email: string
    phone: string
    linkedin: string
  }
  about: {
    heading: string
    summary: string
    stats: Array<{
      label: string
      value: string
    }>
  }
  experience: Array<{
    title: string
    company: string
    period: string
    location: string
    description: string[]
    technologies?: string[]
  }>
  skills: {
    heading: string
    categories: Array<{
      name: string
      items: Array<{
        name: string
        level: 'Expert' | 'Advanced' | 'Intermediate'
      }>
    }>
  }
  achievements: Array<{
    title: string
    description: string
    impact?: string
  }>
  education: Array<{
    degree: string
    school: string
    period: string
    location: string
  }>
  certifications?: Array<{
    name: string
    issuer: string
    year: string
  }>
}

export const portfolioContent: Record<'general' | 'military' | 'aviation', PortfolioContent> = {
  general: {
    metadata: {
      title: "Anthony Palmisano - Professional Portfolio",
      description: "United States Air Force Crisis Management Specialist and Training Manager with extensive experience in airfield operations, emergency management, and regulatory compliance.",
      keywords: ["Anthony Palmisano", "Air Force", "Crisis Management", "Training Manager", "Emergency Management", "Aviation", "Leadership", "Military"]
    },
    hero: {
      name: "Anthony Palmisano",
      title: "Professional Portfolio",
      tagline: "Crisis Management • Training Excellence • Air Force Leadership",
      email: "anthony.palmisano@example.com",
      phone: "(555) 123-4567",
      linkedin: "https://linkedin.com/in/anthonypalmisano"
    },
    about: {
      heading: "About Me",
      summary: "Accomplished Air Force Crisis Management Specialist and Training Manager with extensive experience in airfield operations, air traffic control, emergency management, and regulatory compliance. Proven track record of leading teams through high-pressure situations, managing crises with composure, and developing comprehensive training programs that enhance team performance and ensure adherence to stringent standards.",
      stats: [
        { label: "Years of Service", value: "4+" },
        { label: "Personnel Managed", value: "20K+" },
        { label: "Assets Overseen", value: "$5.4B" },
        { label: "Compliance Rating", value: "100%" }
      ]
    },
    experience: [
      {
        title: "Training Manager & Crisis Management Specialist",
        company: "United States Air Force",
        period: "2020 - Present",
        location: "New Mexico & Texas",
        description: [
          "Developed comprehensive training plans for 20K personnel at third-largest U.S. Air Force base",
          "Achieved 100% compliance rating during biannual inspection",
          "Led COVID-19 mitigation team of 63 personnel ensuring operational continuity",
          "Collaborated with intelligence agencies on airspace security operations"
        ]
      }
    ],
    skills: {
      heading: "Core Competencies",
      categories: [
        {
          name: "Leadership & Management",
          items: [
            { name: "Crisis Management", level: "Expert" },
            { name: "Emergency Response", level: "Expert" },
            { name: "Training Development", level: "Expert" },
            { name: "Team Leadership", level: "Expert" }
          ]
        },
        {
          name: "Operations & Safety",
          items: [
            { name: "Air Traffic Control", level: "Expert" },
            { name: "Airfield Operations", level: "Advanced" },
            { name: "Regulatory Compliance", level: "Expert" },
            { name: "Risk Assessment", level: "Advanced" }
          ]
        }
      ]
    },
    achievements: [
      {
        title: "Distinguished Graduate",
        description: "Graduated with distinction from Community College of the Air Force",
        impact: "Academic excellence in Command & Control Operations"
      },
      {
        title: "Crisis Leadership Excellence",
        description: "Successfully led teams through high-pressure emergency situations",
        impact: "Ensuring safety and operational continuity"
      },
      {
        title: "Training Program Innovation",
        description: "Developed comprehensive training programs reducing deficiencies by 100%",
        impact: "Enhanced team performance and compliance standards"
      }
    ],
    education: [
      {
        degree: "Associate of Arts and Sciences - Command & Control Operations",
        school: "Community College of the Air Force",
        period: "2022 - 2023",
        location: "Distinguished Graduate"
      },
      {
        degree: "Associate of Arts and Sciences - Air Traffic Control",
        school: "Community College of the Air Force",
        period: "2019 - 2020",
        location: "Texas"
      }
    ]
  },
  military: {
    metadata: {
      title: "Anthony Palmisano - Military Leadership & Training",
      description: "United States Air Force Training Manager and Crisis Management Specialist specializing in airfield operations, emergency response, and personnel development.",
      keywords: ["military leadership", "crisis management", "training manager", "Air Force", "emergency response", "airfield operations", "command control", "regulatory compliance"]
    },
    hero: {
      name: "Anthony Palmisano",
      title: "Military Leadership & Training Specialist",
      tagline: "Command & Control Operations • Crisis Management • Training Excellence",
      email: "anthony.palmisano@example.com",
      phone: "(555) 123-4567",
      linkedin: "https://linkedin.com/in/anthonypalmisano"
    },
    about: {
      heading: "About Me",
      summary: "Dedicated United States Air Force professional with expertise in crisis management, training development, and airfield operations. Currently serving as Training Manager overseeing operations at the third-largest U.S. Air Force base, managing 20K personnel, 24 mission partners, and $5.4B in assets. Distinguished graduate with proven leadership in high-stakes environments.",
      stats: [
        { label: "Base Personnel", value: "20K" },
        { label: "Mission Partners", value: "24" },
        { label: "Base Assets", value: "$5.4B" },
        { label: "Training Compliance", value: "100%" }
      ]
    },
    experience: [
      {
        title: "Training Manager",
        company: "United States Air Force",
        period: "September 2024 - Present",
        location: "Holloman Air Force Base, New Mexico",
        description: [
          "Developed and implemented comprehensive unit training plan for personnel supporting command and control operations",
          "Performed comprehensive 143-point program audit, identifying 26 discrepancies and updating 12 outdated agreements",
          "Collaborated with Army Counter-Intelligence Agency to identify high-altitude balloons in restricted airspace",
          "Prevented unnecessary F-35 asset deployment through precise grid coordinates and altitude data"
        ],
        technologies: ["Employee Training", "Training Delivery", "Crisis Management", "Emergency Management"]
      },
      {
        title: "Lead Operations Reporting Manager",
        company: "United States Air Force",
        period: "June 2023 - September 2024",
        location: "Sheppard AFB, Texas & Holloman AFB, New Mexico",
        description: [
          "Delivered 10 in-person training sessions to 94 senior leaders on restructured enterprise-wide reporting program",
          "Ensured seamless operational management for 63 satellite locations and 65K joint-service students worldwide",
          "Achieved 100% compliance rating during biannual inspection",
          "Revamped six operations reporting checklists, reducing errors by 15%",
          "Collaborated with seven agencies to resolve critical three-year communication issue"
        ],
        technologies: ["Report Writing", "Reporting & Analysis", "Leadership Training", "Process Improvement"]
      },
      {
        title: "Air Traffic Control Apprentice",
        company: "United States Air Force",
        period: "June 2020 - December 2021",
        location: "Sheppard Air Force Base, Texas",
        description: [
          "Led COVID-19 mitigation team of 63 personnel, enforcing health protocols and overseeing $3.5M equipment sanitization",
          "Managed 168 daily tasks ensuring operational readiness of $17.9M equipment supporting 420K annual operations",
          "Developed severe weather contingency plan preventing $60K in diversion costs and ensuring safety of 18 pilots",
          "Led training on critical radar system updates for 28 team members, improving safety measures by 85%",
          "Coordinated eight joint training missions, successfully delivering 2,300 mission-ready personnel"
        ],
        technologies: ["Flight Safety", "Cross-functional Coordination", "Air Traffic Control", "Emergency Planning"]
      }
    ],
    skills: {
      heading: "Military & Technical Skills",
      categories: [
        {
          name: "Command & Control Operations",
          items: [
            { name: "Crisis Management", level: "Expert" },
            { name: "Emergency Response", level: "Expert" },
            { name: "Air Traffic Control", level: "Expert" },
            { name: "Airfield Operations", level: "Expert" },
            { name: "Command Operations", level: "Advanced" },
            { name: "Mission Planning", level: "Advanced" }
          ]
        },
        {
          name: "Leadership & Training",
          items: [
            { name: "Training Development", level: "Expert" },
            { name: "Team Leadership", level: "Expert" },
            { name: "Program Management", level: "Advanced" },
            { name: "Personnel Management", level: "Advanced" },
            { name: "Performance Management", level: "Advanced" },
            { name: "Regulatory Compliance", level: "Expert" }
          ]
        },
        {
          name: "Technical & Analytical",
          items: [
            { name: "Report Writing", level: "Expert" },
            { name: "Data Analysis", level: "Advanced" },
            { name: "Quality Control", level: "Advanced" },
            { name: "Process Improvement", level: "Advanced" },
            { name: "Risk Assessment", level: "Advanced" },
            { name: "Equipment Management", level: "Advanced" }
          ]
        }
      ]
    },
    achievements: [
      {
        title: "Third-Largest Air Force Base Operations",
        description: "Successfully managing operations for 20K personnel and $5.4B in assets",
        impact: "Ensuring mission readiness and operational excellence"
      },
      {
        title: "100% Compliance Achievement",
        description: "Achieved perfect compliance rating during critical biannual inspection",
        impact: "Demonstrating exceptional training program effectiveness"
      },
      {
        title: "Crisis Response Leadership",
        description: "Led COVID-19 mitigation efforts for 63 personnel with zero operational disruption",
        impact: "Maintaining mission continuity during global pandemic"
      },
      {
        title: "Multi-Agency Collaboration",
        description: "Successfully coordinated with Army Counter-Intelligence on airspace security",
        impact: "Preventing unnecessary asset deployment and conserving resources"
      },
      {
        title: "Training Program Innovation",
        description: "Developed comprehensive training resolving two-year deficiency",
        impact: "Enhanced team performance and reduced errors by 15%"
      }
    ],
    education: [
      {
        degree: "Associate of Arts and Sciences - Command & Control Operations",
        school: "Community College of the Air Force",
        period: "August 2022 - November 2023",
        location: "Distinguished Graduate"
      },
      {
        degree: "Associate of Arts and Sciences - Air Traffic Control",
        school: "Community College of the Air Force",
        period: "December 2019 - April 2020",
        location: "Texas"
      }
    ],
    certifications: [
      {
        name: "All-Lines Adjuster",
        issuer: "Texas Department of Insurance",
        year: "2018"
      },
      {
        name: "Life, Accident & Health Producer",
        issuer: "Arizona Department of Insurance",
        year: "2016"
      }
    ]
  },
  aviation: {
    metadata: {
      title: "Anthony Palmisano - Aviation & Emergency Management",
      description: "Air Traffic Control specialist and Emergency Management expert with extensive experience in airfield operations, crisis response, and aviation safety protocols.",
      keywords: ["air traffic control", "aviation safety", "emergency management", "airfield operations", "flight safety", "crisis response", "aviation", "Air Force"]
    },
    hero: {
      name: "Anthony Palmisano",
      title: "Aviation & Emergency Management Specialist",
      tagline: "Air Traffic Control • Emergency Response • Aviation Safety",
      email: "anthony.palmisano@example.com",
      phone: "(555) 123-4567",
      linkedin: "https://linkedin.com/in/anthonypalmisano"
    },
    about: {
      heading: "About Me",
      summary: "Aviation safety expert with specialized training in air traffic control and emergency management. Experienced in managing high-volume airfield operations, developing safety protocols, and coordinating emergency response procedures. Proven ability to maintain operational excellence while ensuring the safety of aircraft, personnel, and multimillion-dollar assets.",
      stats: [
        { label: "Annual Operations", value: "420K" },
        { label: "Equipment Value", value: "$17.9M" },
        { label: "Annual Flights", value: "40K" },
        { label: "Safety Record", value: "100%" }
      ]
    },
    experience: [
      {
        title: "Air Traffic Control Operations Specialist",
        company: "United States Air Force",
        period: "June 2020 - December 2021",
        location: "Sheppard Air Force Base, Texas",
        description: [
          "Managed air traffic control operations at the busiest ATC facility in Air Education & Training Command",
          "Ensured operational readiness of $17.9 million in equipment supporting 420K annual operations",
          "Developed and implemented severe weather contingency plans",
          "Coordinated safe return of aircraft during emergency weather conditions",
          "Led training on critical radar system updates improving safety measures by 85%"
        ],
        technologies: ["Air Traffic Control", "Radar Systems", "Emergency Planning", "Weather Analysis"]
      },
      {
        title: "Emergency Response Coordinator",
        company: "United States Air Force",
        period: "2020 - Present",
        location: "Multiple Air Force Bases",
        description: [
          "Led COVID-19 mitigation team ensuring health protocols for 63 personnel",
          "Coordinated emergency response procedures for $3.5M in critical equipment",
          "Developed crisis management protocols maintaining 100% operational readiness",
          "Collaborated with multiple agencies on airspace security and threat assessment"
        ],
        technologies: ["Crisis Management", "Emergency Protocols", "Health & Safety", "Multi-Agency Coordination"]
      }
    ],
    skills: {
      heading: "Aviation & Emergency Skills",
      categories: [
        {
          name: "Air Traffic Control",
          items: [
            { name: "Radar Operations", level: "Expert" },
            { name: "Flight Coordination", level: "Expert" },
            { name: "Weather Analysis", level: "Advanced" },
            { name: "Emergency Procedures", level: "Expert" },
            { name: "Communication Protocols", level: "Expert" },
            { name: "Airspace Management", level: "Advanced" }
          ]
        },
        {
          name: "Emergency Management",
          items: [
            { name: "Crisis Response", level: "Expert" },
            { name: "Emergency Planning", level: "Expert" },
            { name: "Risk Assessment", level: "Advanced" },
            { name: "Safety Protocols", level: "Expert" },
            { name: "Incident Command", level: "Advanced" },
            { name: "Multi-Agency Coordination", level: "Advanced" }
          ]
        },
        {
          name: "Aviation Safety",
          items: [
            { name: "Flight Safety", level: "Expert" },
            { name: "Equipment Management", level: "Advanced" },
            { name: "Safety Training", level: "Advanced" },
            { name: "Compliance Management", level: "Expert" },
            { name: "Operational Planning", level: "Advanced" },
            { name: "Performance Monitoring", level: "Advanced" }
          ]
        }
      ]
    },
    achievements: [
      {
        title: "Zero Critical Failures",
        description: "Maintained perfect safety record in air traffic control operations",
        impact: "Ensuring aircraft and personnel safety across 420K annual operations"
      },
      {
        title: "Emergency Weather Response",
        description: "Successfully coordinated return of 9 aircraft during severe thunderstorm",
        impact: "Prevented $60K in diversion costs and ensured safety of 18 pilots"
      },
      {
        title: "Equipment Management Excellence",
        description: "Managed $17.9M in equipment with 100% operational readiness",
        impact: "Supporting continuous mission operations without equipment failures"
      },
      {
        title: "Training Innovation",
        description: "Led radar system training improving safety measures by 85%",
        impact: "Enhanced operational capabilities and reduced safety risks"
      },
      {
        title: "Crisis Leadership",
        description: "Led 63-person COVID-19 mitigation team with zero operational disruption",
        impact: "Maintained flight operations while ensuring health and safety"
      }
    ],
    education: [
      {
        degree: "Associate of Arts and Sciences - Air Traffic Control",
        school: "Community College of the Air Force",
        period: "December 2019 - April 2020",
        location: "Texas"
      },
      {
        degree: "Associate of Arts and Sciences - Command & Control Operations",
        school: "Community College of the Air Force",
        period: "August 2022 - November 2023",
        location: "Distinguished Graduate"
      }
    ],
    certifications: [
      {
        name: "Air Traffic Control Certification",
        issuer: "United States Air Force",
        year: "2020"
      },
      {
        name: "Emergency Management Certification",
        issuer: "United States Air Force",
        year: "2021"
      }
    ]
  }
}