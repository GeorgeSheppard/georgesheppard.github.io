export const PERSONAL_INFO = {
  name: 'George Sheppard',
  bio: [
    "I'm George Sheppard, a software engineer from London. I am heavy on TypeScript, knowledgeable on Python, and like to build across the full stack (hardware included). Currently at Spotify."]
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
    id: 'shelfie',
    title: 'Shelfie',
    description: 'A website that takes a picture of your bookshelf (a "Shelfie") and recommends new books based on what you already own. This self-hosted project combines computer vision with AI to provide personalized reading suggestions.',
    technologies: ['Docker', 'Nginx', 'TypeScript', '.NET', 'SQL', 'RabbitMQ', 'Python', 'OpenAI'],
    github: '',
    demo: 'https://shelfie.georgesheppard.dev',
    featured: true,
    year: 2025
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
    id: 'kitchen-calm',
    title: 'Kitchen Calm',
    description: 'A recipe management website that helps anyone keep organised in the kitchen. Features include meal planning, shopping list creation, AI-powered recipe upload, and shareable recipes.',
    technologies: ['AWS DynamoDB', 'AWS Cognito', 'AWS S3', 'TypeScript', 'OpenAI', 'Vercel', 'React'],
    github: '',
    demo: 'https://kitchencalm.georgesheppard.dev',
    featured: true,
    year: 2022
  },
  {
    id: 'gomoku-robot',
    title: 'Gomoku Robot',
    description: 'A SCARA-style robotic arm that plays the board game Gomoku against human players. Designed in Fusion 360 and 3D printed. Uses computer vision to extract board state, a CNN trained on Gomoku datasets enhanced with Monte-Carlo tree search for move calculation, and inverse kinematics for robot manipulation.',
    technologies: ['Python', 'PyTorch', 'ROS', 'Arduino', 'Fusion 360', 'Computer Vision'],
    github: '',
    demo: '',
    featured: true,
    year: 2020
  }
]

export const SKILLS = {
  'Languages': [
    'TypeScript',
    'JavaScript',
    'Python',
    'Rust',
    'Java',
    'C++'
  ],
  'Frontend': [
    'React',
    'Next.js',
    'Three.js',
    'React Three Fiber',
    'HTML/CSS'
  ],
  'Backend': [
    'Node.js',
    '.NET',
    'Express',
    'gRPC',
    'WebSockets'
  ],
  'Cloud & DevOps': [
    'AWS (DynamoDB, Cognito, S3)',
    'Google Cloud Platform',
    'Docker',
    'Nginx',
    'Vercel'
  ],
  'Databases': [
    'SQL',
    'DynamoDB',
    'PostgreSQL'
  ],
  'Tools & Other': [
    'Git',
    'Webpack',
    'RabbitMQ',
    'OpenAI API',
    'Tauri',
    'Electron',
    'ROS'
  ],
  'Robotics & AI': [
    'PyTorch',
    'Computer Vision',
    'Robot Kinematics',
    'Arduino',
    'Fusion 360'
  ]
}

export const EXPERIENCE = [
  {
    company: 'Spotify',
    role: 'Software Engineer',
    period: 'July 2022 - Present',
    location: 'London, UK',
    description: [
      'Led the development of an all-in-one case resolution platform for customer support',
      'Worked directly with customer support agents to drive customer-focused features',
      'Modernised and standardised legacy systems, improving performance and reliability',
      'Built robust internal test frameworks and improved observability'
    ],
    technologies: ['TypeScript', 'Node', 'React', 'Next.js', 'Google Cloud Platform', 'SQL']
  },
  {
    company: 'Spotify',
    role: 'Senior Software Engineer (Secondment)',
    period: 'November 2024 - March 2025',
    location: 'London, UK',
    description: [
      'Responsible for development of author pages in desktop and web',
      'Optimised loading time through lazy loading, chunk splitting, and image optimisation'
    ],
    technologies: ['TypeScript', 'React', 'Webpack', 'Next.js']
  },
  {
    company: 'Stratasys/GrabCAD',
    role: 'Software Engineer & Scrum Master',
    period: 'March 2021 - July 2022',
    location: 'Cambridge, UK',
    description: [
      'Developer on GrabCAD Print, a CAM desktop app for 3D printing workflows',
      'Contributed to major features including part labeling and graphics viewer modernisation',
      'Scrum master from September 2021'
    ],
    technologies: ['React', 'Three.js', 'React Three Fiber', 'TypeScript', 'C++', 'Electron']
  }
]

export const EDUCATION = [
  {
    institution: 'University of Birmingham',
    degree: 'Robotics MSc',
    grade: 'Distinction with Honours (84%)',
    period: '2019-2020'
  },
  {
    institution: 'University of Birmingham',
    degree: 'Physics BSc',
    grade: 'First-Class Honours (78%)',
    period: '2016-2019'
  }
]

// Subdomain project links - to be added later
export const SUBDOMAINS = [
  // Example: { name: 'Blog', url: 'https://blog.georgesheppard.dev', description: 'Technical writing and thoughts' }
]
