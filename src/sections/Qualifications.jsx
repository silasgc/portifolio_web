export default function Qualifications() {
  return (
    <section id="qualifications" className="py-24 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Formação & Competências
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Formação Acadêmica */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-500">
              Formação Acadêmica
            </h3>

            <div className="space-y-6 text-slate-300">

              <div>
                <p className="font-medium">
                  Engenharia Mecatrônica
                </p>
                <p className="text-slate-400 text-sm">
                  CEFET-MG – Divinópolis | 2014 – 2022
                </p>
              </div>

              <div>
                <p className="font-medium">
                  MBA em Controladoria e Finanças
                </p>
                <p className="text-slate-400 text-sm">
                  USP/ESALQ | 2024 – Atual
                </p>
              </div>

            </div>
          </div>

          {/* Competências Técnicas */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-500">
              Stack Técnica
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Power BI, DAX e Modelagem Analítica</li>
              <li>Python para Data Engineering & Automação</li>
              <li>SQL Avançado (PostgreSQL)</li>
              <li>Excel Avançado aplicado a Finanças</li>
              <li>ETL/ELT e Arquitetura de Data Warehouse</li>
              <li>Integração e Consumo de APIs</li>
              <li>React (Base para aplicações analíticas)</li>
            </ul>
          </div>

        </div>

        {/* Bloco Analytics & Estratégia */}
        <div className="mt-20 max-w-4xl mx-auto text-center text-slate-400 leading-relaxed">
          Atuação focada em mapeamento de processos, construção de dashboards
          estratégicos, modelagem dimensional, criação de KPIs financeiros e
          operacionais, automação de rotinas analíticas e estruturação de
          pipelines de dados com governança da informação.
        </div>

      </div>
    </section>
  )
}