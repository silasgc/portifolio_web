import { Mail, Phone, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto">

        {/* Headline */}
        <div className="h-px w-16 bg-blue-500 mb-6" />
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Contato
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-16 max-w-xl">
          Especialista em Data & Analytics aplicado a Finanças.
          Aberto a projetos estratégicos, estruturação de dados e
          iniciativas orientadas a decisão.
        </p>

        {/* Informações */}
        <div className="space-y-8">

          {/* Email */}
          <a
            href="mailto:silasgustavo.sgc@gmail.com"
            className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-slate-500 group-hover:text-white transition" />
            <span className="text-lg">
              silasgustavo.sgc@gmail.com
            </span>
          </a>

          {/* Telefone / WhatsApp */}
          <a
            href="https://wa.me/5537998082388"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-5 h-5 text-slate-500 group-hover:text-white transition" />
            <span className="text-lg">
              +55 37 9 9808-2388
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/silas-gustavo-costa-33a8bb196"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-slate-500 group-hover:text-white transition" />
            <span className="text-lg">
              linkedin.com/in/silas-gustavo-costa-33a8bb196
            </span>
          </a>

        </div>

        {/* Localização discreta */}
        <div className="mt-20 text-sm text-slate-600">
          Divinópolis — MG, Brasil
        </div>

      </div>
    </section>
  )
}