export type PlanId = "basic" | "pro" | "plus";

export interface Plan {
  id: PlanId;
  name: string;
  price: number;
  badge: string;
  tagline: string;
  audienceBefore: string;
  audienceBold: string;
  audienceAfter: string;
  inherits?: string;
  features: string[];
  includedCount: number;
}

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    badge: "Balcão",
    tagline: "Para o balcão que só precisa vender bem.",
    audienceBefore: "Ideal para ",
    audienceBold: "cafeterias e lanchonetes de balcão único",
    audienceAfter: ", sem salão complexo, delivery ou nota fiscal eletrônica.",
    features: [
      "PDV completo, com venda por quilo",
      "Caixa por turno, com sangria e reforço",
      "Produtos, estoque e fornecedores",
      "Impressão de cupom",
      "Dashboard de faturamento",
    ],
    includedCount: 9,
  },
  {
    id: "pro",
    name: "Pro",
    price: 399,
    badge: "Recomendado",
    tagline: "Para quem roda salão, delivery e cardápio online ao mesmo tempo.",
    audienceBefore: "Ideal para ",
    audienceBold: "restaurantes com salão e entrega",
    audienceAfter: " que precisam de comanda, cozinha e pedido online conectados.",
    inherits: "Tudo do Basic, mais:",
    features: [
      "Mesas, comandas e app do garçom",
      "Painel da cozinha (KDS)",
      "Cardápio online com link próprio",
      "Delivery com aviso automático no WhatsApp",
      "Livro-caixa e relatórios completos",
    ],
    includedCount: 22,
  },
  {
    id: "plus",
    name: "Plus",
    price: 599,
    badge: "Avançado",
    tagline: "Para operações que emitem nota fiscal e exigem controle total.",
    audienceBefore: "Ideal para quem precisa de ",
    audienceBold: "NFC-e",
    audienceAfter: " e de governança financeira completa sobre caixa e permissões.",
    inherits: "Tudo do Pro, mais:",
    features: [
      "Emissão de NFC-e",
      "Grupos tributários por produto",
      "Permissões avançadas e auditoria completa",
      "Suporte prioritário e onboarding assistido",
    ],
    includedCount: 25,
  },
];

export const TOTAL_FEATURES = 25;

export interface FeatureRow {
  name: string;
  note?: string;
  basic: boolean;
  pro: boolean;
  plus: boolean;
}

export interface FeatureCategory {
  category: string;
  rows: FeatureRow[];
}

export const FEATURE_MATRIX: FeatureCategory[] = [
  {
    category: "Operação de venda",
    rows: [
      { name: "PDV / frente de caixa", basic: true, pro: true, plus: true },
      { name: "Venda por quilo (buffet / self-service)", basic: true, pro: true, plus: true },
      { name: "Caixa por turno (abertura e fechamento)", basic: true, pro: true, plus: true },
      { name: "Mesas e comandas", basic: false, pro: true, plus: true },
      { name: "App do garçom (mobile)", basic: false, pro: true, plus: true },
      { name: "Painel da cozinha (KDS)", basic: false, pro: true, plus: true },
    ],
  },
  {
    category: "Delivery & cardápio online",
    rows: [
      { name: "Gestão de entregas (fila unificada)", basic: false, pro: true, plus: true },
      { name: "Cardápio online com link próprio", basic: false, pro: true, plus: true },
      {
        name: "Checkout do pedido online",
        note: "Pix, cartão ou pagamento na entrega*",
        basic: false,
        pro: true,
        plus: true,
      },
      { name: "Rastreamento público do pedido", basic: false, pro: true, plus: true },
      {
        name: "Aviso automático de status no WhatsApp",
        note: "Requer conta Z-API própria",
        basic: false,
        pro: true,
        plus: true,
      },
    ],
  },
  {
    category: "Fiscal",
    rows: [
      {
        name: "Grupos tributários por produto",
        note: "CST, NCM, CFOP",
        basic: false,
        pro: false,
        plus: true,
      },
      {
        name: "Emissão de NFC-e",
        note: "Via Brasil NFe, disparo manual",
        basic: false,
        pro: false,
        plus: true,
      },
    ],
  },
  {
    category: "Financeiro",
    rows: [
      { name: "Sangria e reforço de caixa", basic: true, pro: true, plus: true },
      { name: "Livro-caixa consolidado + exportação CSV", basic: false, pro: true, plus: true },
      { name: "Estorno controlado com reabertura de caixa", basic: false, pro: true, plus: true },
    ],
  },
  {
    category: "Gestão",
    rows: [
      { name: "Produtos, categorias e adicionais", basic: true, pro: true, plus: true },
      { name: "Controle de estoque de insumos", basic: true, pro: true, plus: true },
      { name: "Cadastro de fornecedores", basic: true, pro: true, plus: true },
    ],
  },
  {
    category: "Relatórios",
    rows: [
      { name: "Dashboard de faturamento", basic: true, pro: true, plus: true },
      {
        name: "Relatórios completos + exportação PDF",
        note: "Vendas, perdas, cortesias e ranking de produtos",
        basic: false,
        pro: true,
        plus: true,
      },
    ],
  },
  {
    category: "Administração & segurança",
    rows: [
      { name: "Usuários com papéis padrão", basic: true, pro: true, plus: true },
      { name: "Permissões granulares por usuário", basic: false, pro: true, plus: true },
      { name: "PIN de fechamento de caixa", basic: false, pro: true, plus: true },
      { name: "Auditoria completa de ações sensíveis", basic: false, pro: false, plus: true },
    ],
  },
];
