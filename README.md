# Anthony Palmisano's Portfolio

A modern, responsive portfolio website showcasing military leadership and aviation expertise. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Professional Portfolio System

This portfolio supports three distinct experiences:

1. **General Landing Page** (`anthonypalmisano.io`)
   - Professional overview with portfolio selection
   - Interactive cards to choose area of expertise
   - Highlights both military and aviation achievements

2. **Military Leadership Portfolio** (`anthonypalmisano.io/military`)
   - Complete military career showcase
   - Crisis management and training expertise
   - Air Force achievements and leadership roles

3. **Aviation & Emergency Management Portfolio** (`anthonypalmisano.io/aviation`)
   - Air traffic control specialization
   - Emergency response and flight safety
   - Aviation operations and equipment management

### Technical Features

- **Dynamic Content Switching**: Single codebase serves three portfolio variants
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: System-aware theme with manual toggle
- **Performance Optimized**: Next.js 15 with optimized images and fonts
- **Type-Safe**: Full TypeScript implementation
- **SEO Optimized**: Dynamic metadata for each portfolio variant

## About Anthony Palmisano

Anthony Palmisano is an accomplished United States Air Force Crisis Management Specialist and Training Manager with extensive experience in:

- **Crisis Management & Emergency Response**
- **Air Traffic Control Operations**
- **Training Program Development**
- **Military Leadership & Team Management**
- **Airfield Operations & Safety**

### Key Achievements

- Training Manager overseeing 20K personnel and $5.4B in assets
- Distinguished Graduate from Community College of the Air Force
- 100% compliance rating during critical biannual inspections
- Led COVID-19 mitigation team of 63 personnel
- Managed $17.9M in equipment supporting 420K annual operations

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/SpacePlushy/anthony-palmisano-portfolio.git

# Navigate to project directory
cd anthony-palmisano-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Portfolio Structure

```
src/
├── app/                    # Next.js app router
│   ├── military/          # Military leadership portfolio
│   ├── aviation/          # Aviation & emergency management portfolio
│   └── page.tsx           # General landing page
├── components/            # React components
├── config/               # Portfolio content configuration
├── contexts/             # React contexts
└── lib/                  # Utility functions
```

## Content Management

Portfolio content is managed through TypeScript configuration files:

- `src/config/portfolio-content.ts` - Main content configuration
- `src/contexts/portfolio-variant-context.tsx` - Variant management

To update content, modify the appropriate configuration files and the changes will be reflected across all portfolio variants.

## Deployment

This portfolio is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Deploy automatically with each push to main branch
3. Configure environment variables if needed

The portfolio supports:
- Automatic builds and deployments
- Preview deployments for pull requests
- Analytics and performance monitoring

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Framer Motion** - Animations
- **Vercel Analytics** - Performance monitoring

## Contact

Anthony Palmisano
- **LinkedIn**: [https://linkedin.com/in/anthonypalmisano](https://linkedin.com/in/anthonypalmisano)
- **Location**: Greater Phoenix Area

## License

This project is private and proprietary.