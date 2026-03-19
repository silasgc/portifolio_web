export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        
        <p>
          © {new Date().getFullYear()} Silas Gustavo Costa.
          Todos os direitos reservados.
        </p>

        <p className="mt-4 md:mt-0">
          Data & Analytics aplicado a Finanças
        </p>

      </div>
    </footer>
  )
}