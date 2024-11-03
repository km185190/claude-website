import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

const experiences = [
  {
    title: "DevOps Lead",
    company: "NCR Voyix",
    location: "Manhattan, New York",
    period: "Jan 2024 - Present",
    description: [
      "Leading DevOps transformation across the organization, prioritizing developer experience and operational excellence.",
      "Architecting automated workflows, standardized environments, and metric-driven improvements.",
      "Implementing security-first and quality-focused practices with comprehensive observability strategies.",
    ],
  },
  {
    title: "Technical Team Lead",
    company: "NCR Voyix",
    location: "Atlanta, Georgia",
    period: "Sep 2021 - Jan 2024",
    description: [
      "Led a team of 6 engineers developing a next-generation Point of Sale solution using TypeScript, React, and Node.",
      "Balanced leadership with DevOps responsibilities, including automation and process improvements.",
      "Guided successful production deployments and mentored engineers in best practices.",
    ],
  },
  {
    title: "Software Engineer, Web & Operations",
    company: "NCR Voyix",
    location: "Atlanta, Georgia",
    period: "Jan 2020 - Sep 2021",
    description: [
      "Established foundational DevOps practices, including CI/CD pipelines with GitHub Actions.",
      "Managed GKE cloud infrastructure and automated deployment processes.",
      "Championed DevOps best practices within the Retail organization.",
    ],
  },
];

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => (
  <div className="card p-6 space-y-4">
    <div>
      <h3 className="text-xl font-semibold">{experience.title}</h3>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {experience.company}
      </p>
    </div>

    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <CalendarIcon size={16} />
        <span>{experience.period}</span>
      </div>
      <div className="flex items-center gap-1">
        <MapPinIcon size={16} />
        <span>{experience.location}</span>
      </div>
    </div>

    <ul className="space-y-2">
      {experience.description.map((item, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-400">
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section className="py-16">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
