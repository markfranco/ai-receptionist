# AI Receptionist

A modern web application for a 24/7 AI voice assistant that answers calls, books clients, and captures leads for small businesses.

## Features

- 24/7 Voice Answering
- Call Recording + Transcripts
- Secure Lead Management
- Booking + Calendar Sync
- CRM & SMS Follow-ups
- Smart Call Routing

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## Project Structure

```
src/
├── app/              # Next.js app router
│   ├── components/   # App-specific components
│   │   └── ui/       # UI components from shadcn/ui
│   ├── lib/          # Utility functions
│   └── page.tsx      # Home page
├── components/       # Shared components
├── constants/        # Shared constants
├── lib/              # Shared utility functions
└── types/            # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-receptionist.git
cd ai-receptionist
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

### Adding new UI components

This project uses shadcn/ui for components. To add a new component:

```bash
npx shadcn-ui@latest add [component-name]
```

### Project Conventions

- Use TypeScript for type safety
- Follow the file and folder structure
- Use CSS modules or Tailwind for styling
- Extract reusable components
- Keep components focused on a single responsibility

## Deployment

The project can be deployed to Vercel with a simple push to the main branch.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
