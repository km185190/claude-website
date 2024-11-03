import {
  Wrench,
  Code2,
  Cloud,
  Terminal,
  GitBranch,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    title: "DevOps & Infrastructure",
    icon: Cloud,
    skills: [
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Google Cloud Platform",
      "Terraform",
      "Jenkins",
      "CircleCI",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Testing Library",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Python",
      "Express",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    skills: [
      "Git",
      "Agile Methodologies",
      "Code Review",
      "Technical Writing",
      "Mentoring",
      "Performance Optimization",
    ],
  },
];

const SkillCategory = ({
  category,
}: {
  category: (typeof skillCategories)[0];
}) => {
  const Icon = category.icon;

  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-400/10">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-16">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
