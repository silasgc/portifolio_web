import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
    
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center mb-20">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group bg-slate-900 border border-slate-800 
              p-8 rounded-2xl 
              transition-all duration-300 
              hover:border-blue-500/40 
              hover:-translate-y-1 
              hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Divider */}
              <div className="mt-6 h-px bg-slate-800 group-hover:bg-slate-700 transition" />

              {/* CTA */}
              <div className="mt-4 flex items-center text-sm text-blue-400 font-medium">
                <span className="group-hover:mr-2 transition-all duration-300">
                  Saiba mais
                </span>
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}