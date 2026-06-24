const projects = [
  {
    title: 'Sales-Marketing A2A Orchestrator',
    date: 'Nov 2025',
    description:
      'Multi-agent pipeline orchestrating LangChain, CrewAI, and AutoGen agents to process sales and marketing data through staged analytical steps. Results visualised in a Streamlit UI.',
    tags: ['Python', 'LangChain', 'CrewAI', 'AutoGen', 'Streamlit', 'OpenAI'],
    link: 'https://github.com/akshajpiri/Sales-Marketing-A2A-Orchestrator',
  },
  {
    title: 'AI Chatbot',
    date: 'Nov 2024',
    description:
      'Conversational AI chatbot built in Python with a clean HTML-templated interface, demonstrating LLM integration and stateful dialogue management.',
    tags: ['Python', 'LLM', 'AI'],
    link: 'https://github.com/akshajpiri/AiChatbot',
  },
  {
    title: 'Face Mask Detection',
    date: 'Jun 2024',
    description:
      'CNN-based computer vision model that classifies faces as masked, unmasked, or partially masked. Built with Python and TensorFlow with full model evaluation.',
    tags: ['Python', 'TensorFlow', 'CNNs', 'Computer Vision'],
    link: 'https://github.com/akshajpiri/face-mask-detection',
  },
  {
    title: 'Text-to-Image Generator',
    date: 'Mar 2024',
    description:
      'Generative AI model that synthesises images from text prompts, exploring diffusion-based and GAN techniques in a Jupyter Notebook environment.',
    tags: ['Python', 'Generative AI', 'Deep Learning'],
    link: 'https://github.com/akshajpiri/Text-To-Image-Generator',
  },
  {
    title: 'Video Classification',
    date: 'Jun 2024',
    description:
      'Machine learning pipeline for classifying video content by category, applying frame-level feature extraction and sequence modelling.',
    tags: ['Python', 'ML', 'Video', 'Classification'],
    link: 'https://github.com/akshajpiri/video-classification',
  },
  {
    title: 'Image Scraper',
    date: 'May 2023',
    description:
      'Tool to extract images from multiple web sources for ML dataset creation, automating the full data collection pipeline for machine learning workflows.',
    tags: ['Python', 'Web Scraping', 'Data Pipeline'],
    link: 'https://github.com/akshajpiri/image_scraper',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm font-medium text-pine uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">What I&apos;ve built</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl border border-line bg-surface hover:border-pine/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-ink text-lg group-hover:text-pine transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-dust ml-3 mt-1 shrink-0">{project.date}</span>
              </div>

              <p className="text-dust text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-pine/10 text-pine text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-dust hover:text-pine transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
