# Roteiro do vídeo explicativo (portfólio Bootstrap — Elton)

**Duração sugerida:** 6 a 10 minutos  
**Gravação:** tela + sua voz (microfone ligado)

Use este roteiro como checklist. Não precisa decorar — siga a ordem e mostre na prática.

---

## 1. Abertura (30–45 s)

- Dizer seu **nome**, a **disciplina (Engenharia de Software)** e o objetivo da atividade.
- Explicar em uma frase: *“Desenvolvi um portfólio responsivo do desenvolvedor Elton usando HTML5 semântico, Bootstrap 5 e JavaScript nativo.”*
- Mostrar o **repositório no GitHub** (nome do repo na barra do navegador).

---

## 2. GitHub Codespaces — ambiente obrigatório (1–2 min)

1. No repositório, clicar em **Code** → aba **Codespaces** → **Create codespace on main**.
2. Esperar abrir o **VS Code na Web** (igual ao VS Code de desktop).
3. Mencionar a **cota gratuita** mensal do GitHub para contas pessoais.
4. **Idioma em português (Brasil):**
   - Ícone de extensões → buscar **Portuguese (Brazil) Language Pack for Visual Studio Code** (Microsoft).
   - Instalar → quando pedir, **Change Language and Restart** → escolher **pt-br**.
5. No Codespaces, abrir a pasta do projeto e mostrar os arquivos: `index.html`, `css/style.css`, `js/main.js`, `img/`.

*Fala sugerida:* “A atividade pede desenvolvimento no Codespaces, que é o VS Code completo na nuvem, integrado ao GitHub.”

---

## 3. Demonstração da página — 6 componentes (2,5–3 min)

Abrir o `index.html` no **Preview Simple Browser** ou **Live Preview** (ou botão direito → Open with Live Server, se disponível). Se não houver preview, abrir a URL pública do GitHub Pages **ou** usar *Go Live* local no Codespaces na porta exposta.

Percorrer e **testar cada item**:

| # | Componente | O que mostrar na gravação |
|---|------------|---------------------------|
| 1 | **Navbar** | Nome “Elton”, links Projetos / Sobre / Contato rolando até as seções; no celular, **hamburger** abrindo e fechando o menu. |
| 2 | **Carrossel** | Três slides (Nave Space, Dynamic Island, Campus Flow); setas, indicadores e transição; mencionar imagens reais em `img/`. |
| 3 | **Cards** | Três áreas (Web, Desktop, Jogos) com imagem, texto e botão. |
| 4 | **Tabela** | Cinco projetos, listrada, hover; no mobile, **rolar horizontalmente** dentro da tabela responsiva. |
| 5 | **Formulário** | Enviar vazio → validação vermelha; preencher certo → **alert verde** e formulário limpo (sem envio a servidor). |
| 6 | **Modal** | Botão “Ver detalhes” → modal abre; **Fechar**, X ou clique fora; botão **Ver no GitHub** abrindo nova aba. |

---

## 4. Responsividade — mobile, tablet, desktop (1–1,5 min)

No navegador, abrir **Ferramentas do desenvolvedor** (F12) → ícone de dispositivo / modo responsivo.

Testar e **comentar o que muda**:

- **~375 px** (celular): menu colapsado, cards em **1 coluna**, tabela com scroll.
- **~768 px** (tablet): cards em **2 colunas**; menu pode estar expandido ou colapsado conforme largura.
- **~1200 px** (desktop): cards em **3 colunas**, navbar horizontal, layout mais espaçoso.

*Fala sugerida:* “Usei o grid do Bootstrap (`col-12`, `col-md-6`, `col-lg-4`) para reorganizar o layout sem CSS extra pesado.”

---

## 5. Passagem pelo código (2–3 min)

No Codespaces, abrir os arquivos e rolar **trechos principais** (não precisa ler linha por linha).

### `index.html`

- `<html lang="pt-BR">`, meta viewport, título.
- Estrutura: `<header>`, `<main>` com `<section>`, `<footer>`.
- Comentários em português separando seções.
- CDN do **Bootstrap 5.3.8** (CSS + `bootstrap.bundle.min.js`).
- Atributos de **acessibilidade**: `aria-label`, `aria-labelledby`, `alt` nas imagens, `for`/`id` nos labels do formulário.

### `css/style.css`

- Dizer que é **só ajuste fino**: rolagem suave, altura do carrossel, legenda legível, foco visível.

### `js/main.js`

- Validação do formulário com `checkValidity()` e classe `was-validated`.
- `preventDefault()` para não enviar de verdade; mensagem de sucesso.
- Fechar o menu mobile após clicar em um link (melhoria de UX).

*Fala sugerida:* “Não usei React, jQuery nem Tailwind — só Bootstrap e JS nativo onde o Bootstrap não cobre o formulário.”

---

## 6. Código limpo e dependências (30 s)

- Indentação consistente, nomes descritivos de ids (`form-contato`, `carrossel-projetos`).
- Textos do portfólio **concentrados no HTML** para trocar depois.
- Dependências: **apenas Bootstrap via CDN**; imagens locais em `img/`.

---

## 7. Testes em navegadores (30–45 s)

Listar que você testou (ou vai testar) em:

- **Chrome**
- **Firefox**
- **Edge**
- **Safari** (se tiver Mac/iPhone; senão, dizer que testou em Chromium + um segundo engine)

Confirmar: carrossel, modal, collapse da navbar e validação do formulário em pelo menos **dois** navegadores.

---

## 8. Encerramento (20 s)

- Repetir link do **repositório GitHub**.
- Agradecer e encerrar.

---

## Checklist rápida antes de enviar o vídeo

- [ ] Aparece o **Codespaces** e a extensão **pt-BR** (ou menção clara de ter configurado).
- [ ] Os **6 componentes** foram demonstrados funcionando.
- [ ] Mostrou **375 / 768 / 1200** (ou equivalente).
- [ ] Mostrou **index.html**, `style.css` e `main.js`.
- [ ] Falou de **Bootstrap-only** + JS nativo.
- [ ] Mencionou testes em **vários navegadores**.
