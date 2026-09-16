# Amplie Chef — Landing Page

Site institucional/divulgação do Amplie Chef (sistema de gestão para cafeterias e restaurantes). Projeto separado do sistema principal ([CafeComDestino](../CafeComDestino)) para ter SEO/OG próprios e deploy independente.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js (App Router, páginas estáticas / SSG)
- Tailwind CSS v4
- Fontes Bitter (títulos) + Karla (corpo) — mesma identidade do cardápio público do sistema principal

## Antes de publicar

- [ ] Trocar `WHATSAPP_NUMBER` e `CONTACT_EMAIL` em `src/app/page.tsx` pelos contatos reais
- [ ] Definir domínio final e atualizar `siteUrl` em `src/app/layout.tsx`
- [ ] Adicionar imagem de Open Graph (compartilhamento em redes sociais)
- [ ] Adicionar favicon/ícone da marca em `src/app/favicon.ico`
