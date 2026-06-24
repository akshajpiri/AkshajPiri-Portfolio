const certifications = [
  {
    name: 'Mathematics for Machine Learning and Data Science Specialisation',
    issuer: 'DeepLearning.AI',
  },
  {
    name: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
  },
  {
    name: 'Julia Scientific Programming',
    issuer: '',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">
            Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Credentials</h2>
        </div>

        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-600 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-zinc-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-zinc-100 text-sm">{cert.name}</p>
                {cert.issuer && (
                  <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
