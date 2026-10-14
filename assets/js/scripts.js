function yearsOfExperience(startYear, startMonth = 1) {
    const now = new Date();
    let years = now.getFullYear() - startYear;
    if (now.getMonth() + 1 < startMonth) {
        years--;
    }
    return years;
}

// English lives in index.html; this holds only the Portuguese text, keyed by data-i18n.
const translations = {
    pt: {
        'meta.title': 'Jéssica Oliveira da Silva | Engenheira de Software Full-Stack Sênior',
        'meta.description': 'Jéssica Oliveira da Silva, engenheira de software full-stack sênior em São Paulo. Laravel, PHP e React.',

        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.education': 'Formação',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contato',

        'hero.role': 'Engenheira de Software Full-Stack Sênior',
        'hero.tagline': 'Laravel, PHP e React. Mais de <span id="years-experience">8</span> anos construindo sistemas de faturamento, frota e gestão.',
        'hero.location': 'São Paulo, Brasil · Disponível para trabalho remoto',

        'about.title': 'Sobre',
        'about.p1': 'Desenvolvo e mantenho aplicações web em PHP, com Laravel e Lumen no backend e React com TypeScript no frontend. São mais de 8 anos com PHP, sendo mais de 4 em produção com Laravel e Lumen, trabalhando com Eloquent, APIs REST e modelagem de dados relacional. A maior parte do meu trabalho foi em sistemas onde erros custam dinheiro: faturamento de contratos, gestão de frota, CRM e ERP.',
        'about.p2': 'Também liderei times de engenharia, então estou acostumada a definir escopo com clientes, dar estimativas que consigo cumprir e cuidar da entrega desde a primeira conversa até a produção.',

        'experience.title': 'Experiência',

        'tpl.role': 'Gerente de Engenharia de Software, Engenheira de Software Líder',
        'tpl.dates': 'mai 2025 – mai 2026',
        'tpl.1': 'Desenvolvi a gestão de regras de frete da plataforma logística em PHP 8, incluindo regras de prazo adicional, filtros de pedidos e histórico de alterações.',
        'tpl.2': 'Entreguei o relatório de entregas no prazo por estado para o módulo de last mile, com visualização em mapa e exportação em CSV.',
        'tpl.3': 'Liderei dois times de engenharia, com 5 desenvolvedores no total, cobrindo desenvolvimento de produto e sustentação, sem deixar de escrever código em produção numa stack com PHP 8, Python, React, TypeScript e PostgreSQL.',
        'tpl.4': 'Implantei o Scrum do zero e levei o desenvolvimento assistido por IA com Cursor para todo o time.',

        'jsl.role': 'Engenheira de Software',
        'jsl.dates': 'out 2020 – mai 2025',
        'jsl.1': 'Substituí um processo manual de faturamento de contratos de frota por um sistema web em Laravel, depois atualizado para Laravel 8 com PHP 8.2, usando Eloquent ORM e um novo modelo de dados relacional.',
        'jsl.2': 'Desenvolvi e mantive APIs REST em Lumen com autenticação JWT.',
        'jsl.3': 'Reduzi tempo de processamento, erros de faturamento e trabalho manual corrigindo na origem os problemas de reajuste de contratos.',
        'jsl.4': 'Desenvolvi uma funcionalidade de rastreamento de frota que deu aos clientes um histórico detalhado e relatórios mais precisos.',

        'callflex.role': 'Desenvolvedora PHP',
        'callflex.dates': 'nov 2019 – out 2020',
        'callflex.1': 'Mantive e evoluí um CRM de telemarketing em PHP 7.2 com o framework MVC CodeIgniter 3 e 4.',
        'callflex.2': 'Defini escopo técnico diretamente com clientes e entreguei novas funcionalidades do CRM por meio de um processo formal de gestão de mudanças.',

        'bis.role': 'Desenvolvedora PHP Full Stack',
        'bis.dates': 'jan 2018 – nov 2019',
        'bis.1': 'Liderei a migração de módulos financeiros de um ERP legado para uma plataforma web usando PHP, JavaScript, HTML5, CSS3 e Bootstrap 4.',
        'bis.2': 'Integrei a API do eSocial e automatizei a conciliação bancária com importação de arquivos OFX.',
        'bis.3': 'Redesenhei com os clientes o fluxo de emissão de notas fiscais e desenvolvi sua interface web.',

        'education.title': 'Formação',
        'education.fiap': 'Pós-graduação, Gestão de Tecnologia',
        'education.fatec': 'Tecnólogo, Análise e Desenvolvimento de Sistemas',

        'skills.title': 'Habilidades',
        'skills.backend': 'PHP, Laravel, Lumen, Eloquent ORM, CodeIgniter 3/4 (MVC), design e integração de APIs REST, autenticação JWT, microsserviços, Python',
        'skills.databases.title': 'Bancos de dados',
        'skills.databases': 'PostgreSQL, MySQL, MongoDB, modelagem de dados relacional, SQL',
        'skills.tooling.title': 'Ferramentas',
        'skills.practices.title': 'Práticas',
        'skills.practices': 'Scrum, definição de escopo técnico e estimativas, mentoria',

        'certifications.title': 'Certificações e idiomas',
        'certifications.languages': 'Português, nativo · Inglês, intermediário avançado (B2)'
    }
};

const english = {};

function captureEnglish() {
    english['meta.title'] = document.title;
    english['meta.description'] = document.querySelector('meta[name="description"]').content;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        english[el.dataset.i18n] = el.innerHTML;
    });
}

function setLanguage(lang) {
    const strings = lang === 'pt' ? translations.pt : english;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const text = strings[el.dataset.i18n];
        if (text !== undefined) {
            el.innerHTML = text;
        }
    });
    document.title = strings['meta.title'];
    document.querySelector('meta[name="description"]').content = strings['meta.description'];
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('.flag').forEach(function (button) {
        button.setAttribute('aria-pressed', button.dataset.lang === lang ? 'true' : 'false');
    });

    // The tagline is re-rendered above, so the years counter has to be filled again.
    document.getElementById('years-experience').textContent = yearsOfExperience(2018, 1);
}

function initialLanguage() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl === 'pt' || fromUrl === 'en') {
        return fromUrl;
    }
    try {
        const saved = localStorage.getItem('lang');
        if (saved === 'pt' || saved === 'en') {
            return saved;
        }
    } catch (e) {
        // Storage can be blocked (private mode); fall back to the browser language.
    }
    return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

document.addEventListener('DOMContentLoaded', function () {
    captureEnglish();
    setLanguage(initialLanguage());

    document.querySelectorAll('.flag').forEach(function (button) {
        button.addEventListener('click', function () {
            setLanguage(button.dataset.lang);
            try {
                localStorage.setItem('lang', button.dataset.lang);
            } catch (e) {
                // Ignore: the choice just won't be remembered.
            }
        });
    });
});
