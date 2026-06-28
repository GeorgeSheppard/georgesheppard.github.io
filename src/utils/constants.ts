export const PERSONAL_INFO = {
  name: 'George Sheppard',
  bio: [
    "I'm George Sheppard, a software engineer from London. I am heavy on TypeScript, knowledgeable on Python, and like to build across the full stack (hardware included). Currently at Encord, building out the data layer for physical AI."]
}

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    url: 'https://github.com/GeorgeSheppard',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/georgesheppard/',
  },
  {
    name: 'Email',
    url: 'mailto:me@georgesheppard.dev',
  },
  {
    name: 'Phone',
    url: 'tel:+447956731633'
  }
]

export const PROJECTS = [
  {
    id: 'api-monolith',
    title: 'api.georgesheppard.dev',
    description: 'A TypeScript monolith backend serving as the API layer for all my websites, along with an MCP server. Built on Hono with OpenTelemetry observability, Drizzle ORM over PostgreSQL, RabbitMQ messaging, and AWS S3/DynamoDB storage.',
    technologies: ['TypeScript', 'Hono', 'Node.js', 'MCP', 'PostgreSQL', 'RabbitMQ', 'AWS', 'OpenTelemetry', 'OpenAI'],
    github: 'https://github.com/GeorgeSheppard/api.georgesheppard.dev',
    demo: '',
    featured: true,
    year: 2025
  },
  {
    id: 'shelfie',
    title: 'Shelfie',
    description: 'A website that takes a picture of your bookshelf (a "Shelfie") and recommends new books based on what you already own. This self-hosted project combines computer vision with AI to provide personalized reading suggestions.',
    technologies: ['Docker', 'Nginx', 'TypeScript', '.NET', 'SQL', 'RabbitMQ', 'Python', 'OpenAI'],
    github: 'https://github.com/GeorgeSheppard/Shelfie',
    demo: 'https://shelfie.georgesheppard.dev',
    featured: true,
    year: '2025 — 2026'
  },
  {
    id: 'quick-ai',
    title: 'Quick AI',
    description: 'A desktop client for interacting with AI models. Quick AI is accessible via OS shortcut and allows users to quickly interact with their favourite foundation models across text, image, and audio. Provider agnostic design enables unified access to any AI provider.',
    technologies: ['Rust', 'TypeScript', 'Tauri', 'OpenAI', 'Desktop'],
    github: '',
    demo: 'https://quickai.georgesheppard.dev',
    featured: true,
    year: 2023
  },
  {
    id: 'mise',
    title: 'Mise',
    description: 'A recipe management website that helps anyone keep organised in the kitchen. Features include meal planning, shopping list creation, AI-powered recipe upload, and shareable recipes.',
    technologies: ['AWS DynamoDB', 'AWS Cognito', 'AWS S3', 'TypeScript', 'OpenAI', 'Vercel', 'React'],
    github: 'https://github.com/GeorgeSheppard/Mise',
    demo: 'https://mise.georgesheppard.dev',
    featured: true,
    year: '2022 — 2026'
  },
  {
    id: 'gomoku-robot',
    title: 'Gomoku Robot',
    description: 'A SCARA-style robotic arm that plays the board game Gomoku against human players. Designed in Fusion 360 and 3D printed. Uses computer vision to extract board state, a CNN trained on Gomoku datasets enhanced with Monte-Carlo tree search for move calculation, and inverse kinematics for robot manipulation.',
    technologies: ['Python', 'PyTorch', 'ROS', 'Arduino', 'Fusion 360', 'Computer Vision'],
    github: '',
    demo: 'https://drive.google.com/file/d/190MKQxwawIFvGaJYWV9UFrrRD7r8HeUL/view?usp=sharing',
    featured: true,
    year: 2020,
  }
]

