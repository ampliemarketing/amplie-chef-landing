import { Fragment } from "react";
import { FEATURE_MATRIX, PLANS, TOTAL_FEATURES, type PlanId } from "@/lib/pricing";

const PLAN_STYLES: Record<PlanId, { bar: string; badge: string; check: string }> = {
  basic: {
    bar: "bg-stone-300",
    badge: "bg-stone-100 text-stone-600 border border-stone-300",
    check: "text-stone-500",
  },
  pro: {
    bar: "bg-amber-800",
    badge: "bg-amber-800/10 text-amber-900",
    check: "text-amber-800",
  },
  plus: {
    bar: "bg-[#93671E]",
    badge: "bg-[#93671E]/10 text-[#7A5518]",
    check: "text-[#93671E]",
  },
};

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} width="16" height="16" fill="none">
      <path
        d="M13.5 4.5 6.2 11.8 2.5 8.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dash() {
  return <span className="text-stone-300">–</span>;
}

export function PricingSection() {
  return (
    <section id="planos" className="border-t border-stone-200/80 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-stone-900">Planos e pacotes</h2>
          <p className="mt-4 text-stone-600">
            Um sistema, três formas de operar. Escolha o pacote que combina com o
            tamanho e o tipo da sua operação.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const style = PLAN_STYLES[plan.id];
            return (
              <article
                key={plan.id}
                className={`relative flex flex-col gap-5 rounded-2xl border bg-white p-7 ${
                  plan.id === "pro"
                    ? "border-amber-800/50 shadow-md"
                    : "border-stone-200 shadow-sm"
                }`}
              >
                <span className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl ${style.bar}`} />

                <div className="mt-1 flex items-baseline justify-between gap-3">
                  <span className="font-serif text-xl font-bold text-stone-900">
                    {plan.name}
                  </span>
                  <span
                    className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-stone-900">
                    R$ {plan.price}
                  </span>
                  <span className="text-sm text-stone-500">/mês</span>
                </div>

                <p className="min-h-[44px] text-sm font-medium leading-relaxed text-stone-800">
                  {plan.tagline}
                </p>

                <p className="border-b border-dashed border-stone-200 pb-4 text-sm leading-relaxed text-stone-600">
                  {plan.audienceBefore}
                  <strong className="font-semibold text-stone-900">{plan.audienceBold}</strong>
                  {plan.audienceAfter}
                </p>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.inherits && (
                    <li className="text-sm italic text-stone-500">{plan.inherits}</li>
                  )}
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <Check className={`mt-0.5 shrink-0 ${style.check}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-stone-100 pt-4 font-mono text-xs text-stone-500">
                  <strong className="font-semibold text-stone-800">{plan.includedCount}</strong>{" "}
                  de {TOTAL_FEATURES} recursos incluídos
                </div>

                <a
                  href="#contato"
                  className={`mt-1 w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                    plan.id === "pro"
                      ? "bg-amber-800 text-white hover:bg-amber-900"
                      : "border border-stone-300 text-stone-800 hover:border-amber-800 hover:text-amber-900"
                  }`}
                >
                  Falar sobre o {plan.name}
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900">Comparativo completo</h3>
            <p className="mt-2 text-sm text-stone-600">
              Os {TOTAL_FEATURES} recursos avaliados, organizados por área do sistema.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-stone-200 px-4 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    Recurso
                  </th>
                  <th className="w-20 border-b border-stone-200 px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    Basic
                  </th>
                  <th className="w-20 border-b border-stone-200 px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                    Pro
                  </th>
                  <th className="w-20 border-b border-stone-200 px-4 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-wider text-[#93671E]">
                    Plus
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_MATRIX.map((group) => (
                  <Fragment key={group.category}>
                    <tr>
                      <td
                        colSpan={4}
                        className="border-y border-stone-100 bg-[#F6F1EA] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.name}>
                        <td className="border-b border-stone-100 px-4 py-3 align-top text-stone-800">
                          {row.name}
                          {row.note && (
                            <span className="mt-0.5 block text-xs font-normal text-stone-500">
                              {row.note}
                            </span>
                          )}
                        </td>
                        <td className="border-b border-stone-100 px-4 py-3 text-center align-top text-stone-500">
                          {row.basic ? <Check className="mx-auto text-stone-500" /> : <Dash />}
                        </td>
                        <td className="border-b border-stone-100 px-4 py-3 text-center align-top">
                          {row.pro ? <Check className="mx-auto text-amber-800" /> : <Dash />}
                        </td>
                        <td className="border-b border-stone-100 px-4 py-3 text-center align-top">
                          {row.plus ? <Check className="mx-auto text-[#93671E]" /> : <Dash />}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 rounded-xl border border-stone-200 bg-white/60 p-5 text-xs leading-relaxed text-stone-600">
          <p>
            <strong className="font-semibold text-stone-900">*Checkout do pedido online</strong>{" "}
            — o cliente escolhe entre Pix, cartão ou pagamento na entrega, mas a confirmação
            automática via gateway de pagamento ainda está em desenvolvimento; hoje a conciliação
            é manual.
          </p>
          <p>
            <strong className="font-semibold text-stone-900">WhatsApp automático</strong> —
            depende de uma conta Z-API própria do cliente, contratada à parte.
          </p>
          <p>
            <strong className="font-semibold text-stone-900">NFC-e</strong> — emissão via Brasil
            NFe com disparo manual pelo operador (fase 1 da integração).
          </p>
        </div>
      </div>
    </section>
  );
}
