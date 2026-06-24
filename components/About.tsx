import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-pine uppercase tracking-widest mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Who I am</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-4">
            <p className="text-dust text-lg leading-relaxed">
              I&apos;m college student in Bangalore obsessed with two things: making sense of data and 
              crafting experiences people love to use. I build ML models that actually work, and I design products 
              people actually want to use. The intersection of those two skills is where I do my best work.
            </p>
            <p className="text-dust text-lg leading-relaxed">
              From training CNNs for real-time face detection to prototyping full UX flows in Figma, I bring a rare 
              mix of technical depth and design thinking to every project.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href="mailto:akshaj.piri@gmail.com"
                className="text-sm font-medium text-pine hover:text-pine-dark transition-colors"
              >
                Email →
              </a>
              <a
                href="https://linkedin.com/in/akshajpiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-pine hover:text-pine-dark transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/akshajpiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-pine hover:text-pine-dark transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-line">
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
