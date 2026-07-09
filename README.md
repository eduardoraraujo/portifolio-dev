# Portfólio — Eduardo R.

Portfólio pessoal construído **apenas com HTML e CSS** (sem JavaScript, sem frameworks),
pronto para publicar no GitHub Pages.

## Como visualizar localmente

Basta abrir o arquivo `index.html` no navegador — não precisa de servidor, build ou instalação.

## Personalização

Antes de publicar, procure e substitua estes marcadores em `index.html`:

| Marcador                                                          | O que colocar                                                     |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `[SUBSTITUA_POR_SUA_BIO]`                                         | Texto da seção "Sobre"                                            |
| `[X]+` (3 ocorrências)                                            | Números de anos de experiência, projetos e tecnologias            |
| `[LINK_CV]`                                                       | Link/caminho para o seu currículo em PDF (ex: `assets/cv.pdf`)    |
| `[NOME_DO_PROJETO_1]` a `_6`                                      | Nomes dos projetos em destaque                                    |
| `[LINK_DEMO_1]` / `[LINK_CODIGO_1]` (e `_2` a `_6`)               | Links de demo e repositório de cada projeto                       |
| `[Cargo]`, `[Empresa]`, `[Curso]`, `[Instituição]`, `[Ano — Ano]` | Seção "Experiência & Formação"                                    |
| `[SEU_EMAIL]`                                                     | Seu e-mail de contato                                             |
| `[SEU_GITHUB]`                                                    | URL completa do seu GitHub (ex: `https://github.com/seu-usuario`) |
| `[SEU_LINKEDIN]`                                                  | URL completa do seu LinkedIn                                      |
| `[SEU_USUARIO]`                                                   | Seu usuário (aparece como texto ao lado dos links)                |

Dica: use "Localizar e substituir" (Ctrl+H) no seu editor para trocar cada marcador rapidamente.

Os cards de projeto já têm classes (`react`, `next`, `node`, `ts`) usadas pelo filtro da
seção Projetos — ajuste essas classes em cada `<article class="project-card ...">` conforme
a stack real de cada projeto que você colocar.

## Recursos interativos (100% CSS, sem JS)

- Alternância de tema claro/escuro (checkbox + variáveis CSS)
- Menu mobile com animação (checkbox hack)
- Efeito de "digitação" no cargo, no herói
- Cards de stack com efeito flip 3D ao passar o mouse/focar
- Filtro de projetos por tecnologia (React / Next.js / Node.js / TypeScript) via `radio inputs`
- Acordeão de experiência/formação
- Blobs de fundo animados e indicador de scroll

## Publicando no GitHub Pages

1. Crie um repositório no GitHub. Se o nome for `seu-usuario.github.io`, o site fica na raiz
   (`https://seu-usuario.github.io/`); qualquer outro nome funciona também, só muda a URL final
   (`https://seu-usuario.github.io/nome-do-repo/`).
2. Suba os arquivos `index.html`, `style.css` e `README.md` para a branch `main`.
3. No GitHub, vá em **Settings → Pages**.
4. Em "Build and deployment", selecione **Source: Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde 1–2 minutos e acesse a URL exibida no topo da página de Settings → Pages.

Como o site não usa nenhum caminho absoluto (`style.css` é referenciado como caminho
relativo), ele funciona tanto na raiz quanto em um subcaminho de repositório, sem
configuração extra.
