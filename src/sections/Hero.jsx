export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-slate-950">

      {/* Tagline superior */}
      <p className="text-sm uppercase tracking-widest text-slate-500 mb-6">
        Strategic Finance • FP&A • Data & Analytics
      </p>

      {/* Título principal */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight max-w-5xl">
        FP&A Estratégico | Dados | Arquitetura de Valor
        <br />
        <span className="text-blue-500 text-3xl md:text-4xl font-semibold">
          Transformando análises financeiras, IBP e machine learning em decisões estratégicas.
        </span>
      </h1>

      {/* Descrição */}
      <p className="mt-8 text-slate-400 max-w-2xl text-lg leading-relaxed">
        Profissional de FP&A estratégico com atuação em análises financeiras avançadas e geração 
        de insights orientados por dados para apoiar decisões executivas. Atua como business partner 
        das áreas de negócio, conectando estratégia, performance e resultados financeiros através 
        de planejamento integrado (IBP), analytics e machine learning.
      </p>

      {/* Botões */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4">

        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300 font-medium"
        >
          Ver Projetos
        </a>

        <a
          href="https://github.com/SEU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition duration-300 font-medium"
        >
          GitHub
        </a>

      </div>

      {/* Linha inferior */}
      <div className="mt-20 w-24 h-px bg-slate-800"></div>

    </section>
  )
}