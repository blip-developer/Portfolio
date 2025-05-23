import { useState } from "react";
import FadeInSection from "./FadeInSection";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import skills from "../data/skills.json";



const tabs = ["Skills", "Experience", "Education", "Certifications"];

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <section id="about" className="py-20 px-6 bg-sky-50 text-center">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-8 text-slate-900">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
          I'm a passionate Data Scientist and AI Developer with 5+ years of experience
          building enterprise-grade intelligent applications, predictive models, and
          AI-powered systems in financial, Insurance, and e-commerce sectors.
        </p>
      </FadeInSection>

      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === tab
              ? "bg-sky-600 text-white shadow"
              : "bg-white text-slate-700 hover:bg-sky-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <FadeInSection key={activeTab}>
        <div className="mt-8 max-w-4xl mx-auto text-left text-slate-700">
          {activeTab === "Skills" && (
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border rounded-full text-sm text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {activeTab === "Experience" && (
            <div className="relative border-l-2 border-sky-500 pl-6 space-y-10 max-w-3xl mx-auto">
              {experienceData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-3 top-1.5 w-3 h-3 bg-sky-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-slate-800">
                    {item.title} — {item.company}
                  </h4>
                  <p className="text-sm italic text-slate-500 mb-1">{item.duration}</p>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>

          )}


          {activeTab === "Education" && (
            <div className="space-y-4 max-w-3xl mx-auto">
              {educationData.map((edu, index) => (
                <details
                  key={index}
                  className="bg-white border rounded-lg p-4 shadow transition duration-200 open:shadow-md"
                >
                  <summary className="font-semibold cursor-pointer text-slate-800">
                    {edu.degree} — {edu.school}
                    <span className="text-sm text-slate-500 ml-2">({edu.duration})</span>
                  </summary>
                  <p className="mt-2 text-slate-700 text-sm">{edu.details}</p>
                </details>
              ))}
            </div>
          )}

          {activeTab === "Certifications" && (
            <ul className="space-y-2 list-disc list-inside">
              <li>TensorFlow Developer Certificate – 2023</li>
              <li>Deep Learning Specialization – Coursera (Andrew Ng)</li>
            </ul>
          )}
        </div>
      </FadeInSection>

      {/* Download Resume */}
      <FadeInSection delay={0.6}>
        <div className="text-center mt-12">
          <a
            href="resume.pdf"
            download
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-full shadow hover:bg-sky-500 transition"
          >
            Download Resume
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
