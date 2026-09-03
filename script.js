// NAVEGAÇÃO ENTRE DIFERENTES PÁGINAS
function navigate(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove estado ativo dos botões do menu
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Mostra a página selecionada
    document.getElementById(pageId).classList.add('active');

    // Ativa o botão correspondente no menu
    event.currentTarget.classList.add('active');
}

// MOSTRAR/OCULTAR PAINEL SIMPLES (VISÃO GERAL)
function toggleDetails(panelId) {
    const panel = document.getElementById(panelId);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// EFEITO SANFONA (HABITAÇÃO)
function toggleAccordion(panelId) {
    const panel = document.getElementById(panelId);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// INTERAÇÃO DE ALIMENTAÇÃO
function showFoodInfo(type) {
    const output = document.getElementById('food-output');
    if (type === 'hidroponia') {
        output.innerHTML = "<strong>Estufas Hidropônicas:</strong> Cultivo de vegetais sem solo, utilizando soluções líquidas ricas em nutrientes e iluminação LED.";
    } else if (type === 'lab') {
        output.innerHTML = "<strong>Proteínas em Lab:</strong> Produção de carne cultivada em biorreatores a partir de células, reduzindo custos de transporte espacial.";
    }
}

// SELETOR DE TRAJES (VESTUÁRIO)
function showSuit(type) {
    const output = document.getElementById('suit-output');
    if (type === 'eva') {
        output.innerHTML = "<strong>Traje EVA (Extraveicular):</strong> Equipado com proteção contra radiação, camadas isolantes de temperatura e suporte de oxigênio de alta pressão.";
    } else if (type === 'interno') {
        output.innerHTML = "<strong>Traje Interno:</strong> Roupas confortáveis feitas com tecidos sintéticos antimicrobianos, limpas por processos ultrassônicos sem uso de água.";
    }
}