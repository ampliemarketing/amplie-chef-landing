import Image from "next/image";

import { PricingSection } from "@/components/PricingSection";

const NAV_LINKS = [
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

const FEATURES = [
  {
    title: "Cardápio online & delivery",
    description:
      "Cliente pede pelo celular, sem app, e acompanha o status do pedido em tempo real.",
  },
  {
    title: "PDV / Frente de caixa",
    description:
      "Venda rápida no balcão, com comanda, mesas e fechamento de conta em poucos toques.",
  },
  {
    title: "Comandas & mesas",
    description:
      "App do garçom para lançar pedidos direto na mesa e acompanhar o salão em tempo real.",
  },
  {
    title: "Painel de cozinha (KDS)",
    description:
      "Pedidos organizados por status na tela da cozinha, sem papel e sem gargalo.",
  },
  {
    title: "Caixa & livro-caixa",
    description:
      "Abertura, fechamento e conciliação de caixa com rastreabilidade de cada entrada e saída.",
  },
  {
    title: "Estoque & fornecedores",
    description:
      "Controle de insumos, produtos e fornecedores para não parar a operação por falta de estoque.",
  },
  {
    title: "Emissão fiscal (NFC-e)",
    description:
      "Nota fiscal do consumidor emitida direto do sistema, sem retrabalho.",
  },
  {
    title: "Relatórios & auditoria",
    description:
      "Visão clara de vendas, caixa e operação para decidir com dados, não achismo.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Configure seu cardápio",
    description:
      "Cadastre produtos, preços e grupos tributários. O sistema já organiza tudo por categoria.",
  },
  {
    number: "2",
    title: "Atenda nas mesas, no balcão e no delivery",
    description:
      "Garçom, PDV e cardápio online lançam pedidos no mesmo lugar — a cozinha recebe tudo organizado.",
  },
  {
    number: "3",
    title: "Feche o caixa com confiança",
    description:
      "Acompanhe vendas, caixa e relatórios em tempo real, com nota fiscal emitida sem sair do sistema.",
  },
];

const WHATSAPP_NUMBER = "55 64 9286-4648"; 
const CONTACT_EMAIL = "brunoleao.ceo@gmail.com"; 

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#F8F4FB]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/logo-amplie-chef.png"
            alt="Amplie Chef"
            width={660}
            height={233}
            className="h-8 w-auto"
            priority
          />
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-fuchsia-700">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-fuchsia-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-800"
          >
            Falar com a gente
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/comida.png"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-violet-950/85 via-purple-950/75 to-[#F8F4FB]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-pink-300">
                Gestão para cafeterias e restaurantes
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Um só sistema para cardápio, PDV, caixa e cozinha
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
                O Amplie Chef organiza a operação do seu restaurante ou cafeteria do
                pedido à nota fiscal — mesas, delivery, cozinha, caixa e estoque em
                um só lugar.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-fuchsia-700 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-fuchsia-800 sm:w-auto"
                >
                  Agendar demonstração
                </a>
                <a
                  href="#planos"
                  className="w-full rounded-full border border-white/50 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Ver planos
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="border-t border-stone-200/80 bg-white/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Tudo que a operação precisa, integrado
              </h2>
              <p className="mt-4 text-stone-600">
                Cada módulo conversa com o outro — o pedido do garçom chega na
                cozinha, a venda do PDV entra no caixa, o caixa fecha certo no
                livro-caixa.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-stone-200 bg-[#F8F4FB] p-6 transition hover:border-fuchsia-700/40 hover:shadow-sm"
                >
                  <h3 className="font-serif text-base font-bold text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        <section id="como-funciona" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Como funciona
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.number} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-700 font-serif text-lg font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="border-t border-stone-200/80 bg-gradient-to-r from-violet-950 via-fuchsia-800 to-pink-700 py-20"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-white">
              Pronto para organizar a operação do seu restaurante?
            </h2>
            <p className="mt-4 text-pink-100">
              Fale com a gente e conheça o Amplie Chef de perto.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-fuchsia-800 shadow-sm transition hover:bg-pink-50 sm:w-auto"
              >
                Chamar no WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-full rounded-full border border-white/40 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white sm:w-auto"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-500 md:flex-row">
          <Image
            src="/logo-amplie-chef.png"
            alt="Amplie Chef"
            width={660}
            height={233}
            className="h-6 w-auto opacity-80"
          />
          <span>© {new Date().getFullYear()} Amplie Chef. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
