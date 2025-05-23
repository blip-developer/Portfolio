import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-900 scroll-smooth relative overflow-hidden">
        <Navbar />

        {/* Hero Section with Gradient */}
        <section className="pt-20 bg-gradient-to-br from-sky-50 to-white">
          <FadeInSection>
            <Landing />
          </FadeInSection>
        </section>

        {/* About Section with Paper Texture */}
        <section
          className="py-20 bg-fixed bg-repeat"
          style={{ backgroundImage: "url('/textures/paper.png')" }}
        >
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>

        {/* Projects */}
        <section className="py-20">
          <FadeInSection delay={0.1}>
            <Projects />
          </FadeInSection>
        </section>

        {/* Contact Section with Decorative Blobs */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-sky-200 opacity-30 rounded-full blur-3xl -top-10 -left-10 z-0"></div>
          <div className="absolute w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl -bottom-10 -right-10 z-0"></div>

          <div className="relative z-10">
            <FadeInSection delay={0.3}>
              <Contact />
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
