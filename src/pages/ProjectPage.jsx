import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { projects } from "../data/projects"
import { motion } from "framer-motion"

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const [content, setContent] = useState("")

  useEffect(() => {
    if (project) {
      fetch(`/content/projects/${project.markdown}`)
        .then((res) => res.text())
        .then((text) => setContent(text))
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Projeto não encontrado.
      </div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative max-w-5xl mx-auto px-6 py-32"
    >
      {/* Breadcrumb Premium */}
      <nav className="text-sm text-slate-500 mb-14">
        <ol className="flex items-center gap-3">
          <li>
            <Link
              to="/"
              className="hover:text-white transition-colors duration-300"
            >
              Início
            </Link>
          </li>

          <span className="opacity-40">/</span>

          <li>
            <Link
              to="/#projects"
              className="hover:text-white transition-colors duration-300"
            >
              Projetos
            </Link>
          </li>

          <span className="opacity-40">/</span>

          <li className="text-white font-medium">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Título destacado (fora do markdown) */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-16"
      >
        {project.title}
      </motion.h1>

      {/* Conteúdo Markdown */}
      <article className="markdown-premium">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>

      {/* Botão Voltar Premium */}
      <div className="mt-24">
        <Link
          to="/#projects"
          className="
            group
            inline-flex
            items-center
            gap-3
            px-7
            py-3.5
            border border-slate-700
            rounded-xl
            text-slate-300
            hover:text-white
            hover:border-slate-500
            hover:bg-slate-800/40
            transition-all
            duration-300
          "
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          Voltar para Projetos
        </Link>
      </div>
    </motion.section>
  )
}