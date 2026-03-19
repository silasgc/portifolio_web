import { motion } from "framer-motion"

const experiences = [
  {
    year: "2024 – Atual",
    title: "Analista FP&A Sênior",
    company: "Master Telecom | Controladoria",
    highlights: [
      "Liderança em Budget, Forecast e análises de variação integradas ao planejamento estratégico",
      "Modelagem financeira para investimentos, expansão de rede e iniciativas de M&A",
      "Estruturação de Data Warehouse e automação analítica com Python e SQL",
    ],
  },
  {
    year: "2021 – 2023",
    title: "Analista de Indicadores (FP&A / BI)",
    company: "Master Telecom | Controladoria",
    highlights: [
      "Construção de bases analíticas e suporte a FP&A via SQL e BI",
      "Desenvolvimento de dashboards executivos orientados a KPIs estratégicos",
      "Automação de rotinas com Python, elevando eficiência e confiabilidade",
    ],
  },
]

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-32 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-center mb-20">
          Trajetória Profissional
        </h2>

        <div className="relative border-l border-slate-800 md:border-l-0">
          
          {/* Linha central desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-slate-800 -translate-x-1/2" />

          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-16 flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`relative md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  {/* Ponto indicador */}
                  <span className="hidden md:block absolute top-6 left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 shadow-lg shadow-blue-500/30" />

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl 
                                  hover:border-blue-500/40 hover:-translate-y-1 
                                  transition-all duration-300 shadow-sm hover:shadow-xl"
                  >
                    <span className="text-sm text-blue-500 font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {item.company}
                    </p>

                    <ul className="mt-4 space-y-2">
                        {item.highlights.map((point, i) => (
                          <li
                            key={i}
                            className="text-slate-400 text-sm leading-relaxed flex items-start"
                          >
                            <span className="mr-2 text-blue-500">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}