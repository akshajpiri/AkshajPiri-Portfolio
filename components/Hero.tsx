export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black to-black -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-sm font-medium mb-6 ring-1 ring-zinc-800">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
          Bangalore, India
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Akshaj Piri
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed">
          ML Engineer &amp; Data Scientist — building intelligent systems from data pipelines to multi-agent AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-zinc-700 text-zinc-300 rounded-full font-medium hover:border-zinc-500 hover:text-white transition-colors text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-700 hover:text-zinc-500 transition-colors"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
