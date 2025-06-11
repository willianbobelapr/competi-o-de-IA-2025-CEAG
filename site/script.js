const linguagens = [
    {
        nome: 'JAVA',
        icon: '☕',
        resumo: 'Java é uma linguagem de programação orientada a objetos, muito utilizada para desenvolvimento de aplicações corporativas, Android e sistemas embarcados. É conhecida por sua portabilidade entre plataformas graças à Máquina Virtual Java (JVM).',
        link: {
            url: 'https://www.oracle.com/java/technologies/downloads/',
            texto: 'Baixe o Oracle JDK'
        }
    },
    {
        nome: 'JAVASCRIPT',
        icon: '🟨',
        resumo: 'JavaScript é uma linguagem de programação interpretada, essencial para o desenvolvimento web. Permite criar páginas interativas e dinâmicas, rodando principalmente no navegador, mas também no servidor (Node.js).'
    },
    {
        nome: 'C#',
        icon: '🎮',
        resumo: 'C# (C Sharp) é uma linguagem de programação desenvolvida pela Microsoft, muito usada para aplicações Windows, jogos com Unity e sistemas corporativos. É fortemente tipada e orientada a objetos.'
    },
    {
        nome: 'P5JS',
        icon: '🎨',
        resumo: 'p5.js é uma biblioteca JavaScript voltada para programação criativa e visual. Facilita a criação de gráficos, animações e interações, sendo muito utilizada em arte digital e ensino de programação.',
        link: {
            url: 'https://p5js.org/',
            texto: 'Acesse o site oficial'
        }
    },
    {
        nome: 'PYTHON',
        icon: '🐍',
        resumo: 'Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. Muito usada em ciência de dados, inteligência artificial, automação, web e diversas outras áreas.'
    }
];

const container = document.getElementById('langs');

// Adiciona animação de fade-in para cada card
linguagens.forEach((lang, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';

    // Ícone
    const icon = document.createElement('div');
    icon.className = 'icon';
    icon.textContent = lang.icon;
    card.appendChild(icon);

    // Título
    const h2 = document.createElement('h2');
    h2.textContent = lang.nome;
    card.appendChild(h2);

    // Resumo
    const p = document.createElement('p');
    p.innerHTML = lang.resumo;
    card.appendChild(p);

    // Link (se houver)
    if (lang.link) {
        const a = document.createElement('a');
        a.href = lang.link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = lang.link.texto;
        card.appendChild(a);
    }

    container.appendChild(card);
    setTimeout(() => {
        card.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 200 + i * 180);
}); 