const skillGroups = [
  {
    label: 'Programming',
    skills: ['Python', 'Julia'],
  },
  {
    label: 'Data Science & Machine Learning',
    skills: [
      'Exploratory Data Analysis',
      'Regression',
      'Classification',
      'Convolutional Neural Networks',
      'Generative AI',
    ],
  },
  {
    label: 'Data & Visualisation',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Tableau'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['TensorFlow', 'Streamlit'],
  },
  {
    label: 'Agentic AI',
    skills: ['LangChain', 'CrewAI', 'AutoGen', 'A2A Orchestration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What I work with</h2>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-black border border-zinc-800 text-zinc-300 text-sm rounded-full hover:border-zinc-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
