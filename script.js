// script.js

// Troca de páginas (Navegação SPA)
function openPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    const buttons = document.querySelectorAll('.nav-btn');

    pages.forEach(page => page.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Revelar informações ocultas
function toggleDetails(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Accordion na página de Habitação
function toggleAccordion(element) {
    const content = element.querySelector('.accordion-content');
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Interação de Alimentação
function checkFood(type) {
    const result = document.getElementById('quiz-result');
    if (type === 'hidroponia') {
        result.innerText = "Excelente escolha! Tomates, batatas e alface crescem muito bem em água enriquecida com minerais.";
    } else {
        result.innerText = "Proteínas cultivadas em biorreatores fornecem os aminoácidos necessários sem precisar de animais.";
    }
}

// Alternador de Trajes
function showSuit(suitType) {
    const box = document.getElementById('suit-info');
    if (suitType === 'eva') {
        box.innerHTML = "<strong>Traje EVA:</strong> Camadas de kevlar, revestimento antirradiação, controle térmico interno e suprimento de O2 para até 8 horas.";
    } else {
        box.innerHTML = "<strong>Traje Interno:</strong> Roupas leves de fibra sintética bactericida, com lavagem ultrassônica (sem necessidade de água).";
    }
}