import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 text-center bg-white">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Get in Touch</h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          Whether you want to collaborate, have a question, or just want to say hi — feel free to reach out through any of the platforms below.
        </p>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <ContactCard
            icon={<EnvelopeIcon className="w-7 h-7" />}
            label="Email"
            href="mailto:gogineniuttam@gmail.com"
          />
          <ContactCard
            icon={<FaLinkedin className="w-7 h-7" />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/uttam-gogineni/"
          />
          <ContactCard
            icon={<FaGithub className="w-7 h-7" />}
            label="GitHub"
            href="https://github.com/blip-developer"
          />
          <ContactCard
            icon={<FaMedium className="w-7 h-7" />}
            label="Medium"
            href="https://medium.com/@uttam.gogineni"
          />
        </div>
      </FadeInSection>
    </section>
  );
}

function ContactCard({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex items-center justify-center bg-sky-50 rounded-xl shadow hover:shadow-lg hover:bg-sky-100 transition p-6"
    >
      {/* Icon */}
      <div className="text-sky-600 group-hover:scale-125 transition-transform text-3xl">
        {icon}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 px-3 py-1 rounded bg-slate-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        {label}
      </div>
    </a>
  );
}
