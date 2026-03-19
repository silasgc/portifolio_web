import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
          <div className="h-px w-16 bg-blue-500 mb-6" />
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            Data & Analytics Specialist
            <span className="text-blue-500"> Finanças & Ciência de Dados</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Integro tecnologia, modelagem quantitativa e estratégia financeira
            para transformar dados complexos em inteligência executiva.
          </p>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Atuo na interseção entre engenharia de dados, ciência de dados
            e finanças corporativas, estruturando arquiteturas analíticas
            que sustentam decisões estratégicas.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Minha abordagem conecta infraestrutura, modelagem e visualização,
              garantindo que dados não sejam apenas analisados, mas convertidos
              em vantagem competitiva.
          </p>
        </motion.div>

        {/* Bloco Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
              { label: "Arquitetura e Engenharia de Dados", value: "Pipelines ELT Escaláveis" },
              { label: "Modelagem Estatística e Financeira", value: "Forecasting & Risco" },
              { label: "KPIs Estratégicos e Performance", value: "EBITDA • ROIC • Margens" },
              { label: "Análise de Cenários", value: "Simulações Quantitativas" },
              { label: "Automação", value: "Workflows Data-Driven" },
              { label: "Visualização Executiva", value: "Dashboards para C-Level" },
            ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 
                          hover:border-blue-500/60 hover:bg-slate-800/80 
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-sm text-slate-400">{item.label}</h3>
              <p className="mt-2 font-semibold">{item.value}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}