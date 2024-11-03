import { Calendar, GitBranch, ExternalLink } from "lucide-react";
import type { CollectionEntry } from "astro:content";

interface ProjectCardProps {
  project: CollectionEntry<"projects">;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { data } = project;

  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress":
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    planned: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };

  return (
    <article className="card group hover:border-blue-500 transition-all duration-300">
      {/* Featured Tag */}
      {data.featured && (
        <div className="absolute -top-3 right-4 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
          Featured
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <a href={`/projects/${project.slug}`}>{data.title}</a>
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{data.description}</p>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>
              {data.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${statusColors[data.status]}`}
            >
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2">
            {data.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4">
          {data.sourceUrl && (
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <GitBranch size={16} />
              <span>Source</span>
            </a>
          )}
          {data.demoUrl && (
            <a
              href={data.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
