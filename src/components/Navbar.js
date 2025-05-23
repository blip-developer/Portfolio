import React from "react";
import Scrollspy from "react-scrollspy";
import { Home, User, FolderGit2, FileText, Mail } from "lucide-react";

const links = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  { name: "About", href: "#about", icon: <User size={18} /> },
  { name: "Projects", href: "#projects", icon: <FolderGit2 size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white text-slate-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="text-sky-600 border-b-2 border-sky-600"
          className="flex space-x-6"
          offset={-100}
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-sky-500 transition flex items-center gap-2 group"
            >
              <span className="transition-transform duration-300 group-hover:scale-125 group-hover:text-sky-500">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </Scrollspy>
      </div>
    </nav>
  );
}
