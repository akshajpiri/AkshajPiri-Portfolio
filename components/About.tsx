import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Who I am</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-4">
            <p className="text-zinc-400 text-lg leading-relaxed">
              I&apos;m a machine learning engineer and data scientist based in Bangalore, India — fascinated
              by how data and technology create meaningful experiences. I build end-to-end ML systems, from
              automated data pipelines and deep learning models to multi-agent AI orchestrations.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Currently sharpening skills in Python, data visualisation, and generative AI, with a philosophy
              of building tools that feel intuitive, smart, and minimal.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="mailto:akshaj.piri@gmail.com"
                className="text-sm font-medium text-white hover:text-zinc-400 transition-colors"
              >
                Email →
              </a>
              <a
                href="https://linkedin.com/in/akshajpiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-zinc-400 transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/akshajpiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-zinc-400 transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-zinc-700">
              <Image
                src="/AKSHAJPIRI_PHOTO.jpg"
                alt="Akshaj Piri"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
