import { Heading } from '../components/Icons'

const groups = [
  [
    't-frontend',
    '▧ Frontend Development',
    [
      'React.js',
      'HTML5 / CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'Framer Motion',
      'Accessibility (WCAG)',
    ],
  ],
  [
    't-backend',
    '▤ Backend Development',
    [
      'Node.js',
      'Python',
      'Express.js',
      'RESTful API Development',
      'Authentication & Authorization',
      'SQLAlchemy',
      'API Integration',
      'Server-side Validation',
    ],
  ],
  [
    't-data',
    '◉ Databases & Data',
    [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Database Design',
      'CRUD Operations',
      'Data Modelling',
      'Query Optimization',
    ],
  ],
  [
    't-tools',
    '⚒ Tools & DevOps',
    [
      'Git / GitHub',
      'Docker',
      'Postman',
      'VS Code',
      'npm / pnpm',
      'Vercel',
      'CI/CD Fundamentals',
      'Linux / Command Line',
    ],
  ],
  [
    't-testing',
    '◎ Testing & Quality',
    [
      'Jest',
      'Vitest',
      'React Testing Library',
      'API Testing',
      'Debugging',
      'Error Handling',
      'Code Reviews',
    ],
  ],
  [
    't-professional',
    '✦ Professional Skills',
    [
      'Problem Solving',
      'Technical Documentation',
      'Agile / Scrum',
      'Team Collaboration',
      'Communication',
      'Time Management',
      'Requirements Analysis',
    ],
  ],
]

function Skill({ tone, label, items }) {
  return (
    <div className={`skill-tile ${tone}`}>
      <span className="tag">{label}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <section>
      <Heading title="Skills" kicker="Toolkit" />
      <div className="skill-grid">
        {groups.map(([tone, label, items]) => (
          <Skill
            key={tone}
            tone={tone}
            label={label}
            items={items}
          />
        ))}
      </div>
    </section>
  )
}

