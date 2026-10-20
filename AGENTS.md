# AGENTS.md — InteractiveCV

Este repositório segue convenções estritas de desenvolvimento ágil orientado a issues e rastreamento de trabalho.

## Diretrizes de Desenvolvimento
1. **Pipeline & Rastreamento**: Consulte as regras em [development-pipeline.md](file:///.agents/rules/development-pipeline.md) e [PIPELINE_DEV_TESTES.md](file:///docs/PIPELINE_DEV_TESTES.md).
2. **Branches**: Todo trabalho deve ser executado em branch de feature (`feature/issue-<ID>-<nome>`). Nunca faça commits diretos na `main`.
3. **Issues**: Cada entrega é vinculada a uma issue no GitHub (`rafaelchampion/InteractiveCV`) com critérios de aceite e labels de status (`status: planejado`, `status: em andamento`, `status: em revisão`).
4. **Stack Técnica**: Next.js App Router (TypeScript), Tailwind CSS (máxima fidelidade visual com o design original), exportação estática (`output: 'export'`) para GitHub Pages (`basePath: '/InteractiveCV'`).
