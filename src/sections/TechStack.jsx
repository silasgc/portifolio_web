export default function TechStack() {
  const stack = {
    Dados: ["PostgreSQL", "Data Warehouse", "ELT", "dbt", "Airflow"],
    Backend: ["Python", "Flask", "APIs REST"],
    Frontend: ["React", "Dashboards"],
    IA: ["Machine Learning", "NLP", "Risco de Crédito"]
  };

  return (
    <section className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Stack Técnica</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(stack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category}
              </h3>
              <ul className="space-y-2 text-slate-400">
                {items.map(item => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}