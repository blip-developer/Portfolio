import FadeInSection from "./FadeInSection";

export default function Projects() {
  return (
    <section id="projects" className="px-6 text-center">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-10 text-slate-900">Projects</h2>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          <div className="p-6 border rounded-xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2 text-slate-800">Customer Purchase Predictor</h3>
            <p className="mb-2 text-slate-600">
              Built a machine learning model to predict customer behavior using transaction history and demographic data.
            </p>
            <a href="#" className="text-sky-600 hover:underline">View on GitHub</a>
          </div>

          <div className="p-6 border rounded-xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2 text-slate-800">AI Chatbot with FastAPI</h3>
            <p className="mb-2 text-slate-600">
              Developed a conversational AI assistant integrated with FastAPI, handling context-aware queries.
            </p>
            <a href="#" className="text-sky-600 hover:underline">View on GitHub</a>
          </div>

          {/* Add more projects as needed */}
        </div>
      </FadeInSection>
    </section>
  );
}
