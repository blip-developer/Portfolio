import { TypeAnimation } from "react-type-animation";

export default function Landing() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('textures/paper.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Uttam Gogineni", 
          2000,
          "",
          1000,
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900"
      />

      {/* Subtitle */}
      <h2 className="text-xl sm:text-2xl text-slate-700 mb-6">
        Data Scientist & AI Developer
      </h2>

      {/* Description */}
      <p className="max-w-xl text-slate-600 text-md sm:text-lg">
        I specialize in building intelligent systems, predictive models, and AI-driven applications that solve real-world problems and unlock business value.
      </p>
    </section>
  );
}
