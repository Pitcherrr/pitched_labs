export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Pitched Labs
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-400">
          Robotics at the edge of intelligence.
        </p>
        <p className="text-lg text-gray-500 italic">
          Embodied AI. Real-world impact. Coming soon.
        </p>
        <div className="animate-pulse text-gray-600 mt-10">
          <span className="text-sm uppercase tracking-widest">Launching 2025</span>
        </div>
      </div>
    </section>
  );
}