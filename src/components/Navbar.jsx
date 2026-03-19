import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link 
          to="/" 
          className="font-semibold text-white tracking-wide text-sm md:text-base"
        >
          Silas Gustavo Costa
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm">

          {/* Links internos da Home */}
          <a
            href="/#about"
            className="text-slate-400 hover:text-white transition relative group"
          >
            Sobre
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Página separada */}
          <NavLink
            to="/qualifications"
            className={({ isActive }) =>
              `relative group transition ${
                isActive ? "text-white" : "text-slate-400 hover:text-white"
              }`
            }
          >
            Qualificações
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <a
            href="/#projects"
            className="text-slate-400 hover:text-white transition relative group"
          >
            Projetos
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/#contact"
            className="text-slate-400 hover:text-white transition relative group"
          >
            Contato
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

      </div>
    </nav>
  )
}