// TROCA DE PÁGINAS COM MENU NAVEGÁVEL
function navigate(pageId) {
    // Oculta todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Desativa todos os botões da barra superior
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Exibe a página selecionada
    document.getElementById(pageId).classList.add('active');

    // Ativa visualmente o botão do menu clicado
    event.currentTarget.classList.add('active');
}

// EXPANDIR DETALHES (VISÃO GERAL)
function toggleDetails(panelId) {
    const panel = document.getElementById(panelId);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// ACCORDION (HABITAÇÃO)
function toggleAccordion(panelId) {
    const panel = document.getElementById(panelId);
    const arrow = event.currentTarget.querySelector('.arrow');

    if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        panel.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

// INFORMAÇÕES DE ALIMENTAÇÃO
function showFoodInfo(type) {
    const output = document.getElementById('food-output');
    
    if (type === 'hidroponia') {
        output.innerHTML = "<strong>🌱 Aeroponia & LEDs:</strong> As raízes ficam suspensas no ar e recebem névoa de nutrientes reciclados. Usa 95% menos água que a agricultura tradicional terrestre.";
    } else if (type === 'carne') {
        output.innerHTML = "<strong>🧫 Proteínas Cultivadas:</strong> Células animais multiplicadas em biorreatores geram tecido muscular livre de contaminações, economizando espaço e energia.";
    } else if (type === 'algas') {
        output.innerHTML = "<strong>🦠 Fotobiorreatores de Espirulina:</strong> Tanques de microalgas que crescem com alta velocidade, gerando proteína concentrada enquanto produzem O₂ limpo para a colônia.";
    }
}

// INFORMAÇÕES DE VESTUÁRIO
function showSuit(type) {
    const output = document.getElementById('suit-output');
    
    if (type === 'eva') {
        output.innerHTML = "<strong>👨‍🚀 Traje Externo (Bio-Skin):</strong> Utiliza contração mecânica sobre a pele para aplicar a pressão necessária, reduzindo o peso do traje e permitindo que o astronauta se dobre e corra livremente.";
    } else if (type === 'interno') {
        output.innerHTML = "<strong>👕 Roupas de Habitat:</strong> Feitas com fibras sintéticas com infusão de cobre e prata antimicrobiana, dispensando lavagens com água corrente por meses.";
    }
}

// EFEITO VISUAL NOS CARDS DE CURIOSIDADES
function highlightFact(card) {
    card.style.borderColor = "var(--green-neon)";
    setTimeout(() => {
        card.style.borderColor = "var(--border-color)";
    }, 1000);
}