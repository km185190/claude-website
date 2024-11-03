import { Github, Linkedin, Mail } from "lucide-react";

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

const Hero = () => {
  return (
    <div className="relative">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:flex-1">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            I'm Kane Montreuil, a DevOps Lead based in New York.
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            With over 9 years of experience in software engineering, I
            specialize in enhancing developer experiences across web, mobile,
            and cloud platforms. Currently leading DevOps transformation efforts
            at NCR Voyix.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
            <SocialLink
              href="https://github.com/yourusername"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/kanemontreuil"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:your.email@example.com"
              icon={Mail}
              label="Email"
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="aspect-square w-64 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
            <img
              src="/api/placeholder/400/400"
              alt="Kane Montreuil"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
