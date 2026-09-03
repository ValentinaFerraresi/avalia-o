// NAVEGAÇÃO ENTRE PÁGINAS (SPA)
function navigate(pageId) {
    // Esconde todas as seções de páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove o estado ativo de todos os botões da barra superior
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Exibe a página selecionada
    document.getElementById(pageId).classList.add('active');

    // Destaca o botão selecionado no menu
    event.currentTarget.classList.add('active');
}

// EXPANDIR DADOS TELEMÉTRICOS (VISÃO GERAL)
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
    const btn = event.currentTarget;
    const arrow = btn.querySelector('.arrow');

    if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        panel.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}

// INFORMAÇÕES DETALHADAS DE ALIMENTAÇÃO
function showFoodInfo(type) {
    const output = document.getElementById('food-output');
    
    if (type === 'hidroponia') {
        output.innerHTML = "<strong>🌱 Estufas Hidropônicas & Aeropônicas:</strong> Cultivo vertical que utiliza 95% menos água que a agricultura tradicional. Cultivos primários incluem batata doce, tomate, espinafre e soja, enriquecidos com luzes LED otimizadas para fotossíntese rápida.";
    } else if (type === 'lab') {
        output.innerHTML = "<strong>🧬 Bioreatores de Carne Cultivada:</strong> Produção de proteínas animais sintéticas a partir do cultivo de células em biorreatores. Garante nutrição completa sem a necessidade de criar gado ou consumir grandes volumes de água.";
    } else if (type === 'algas') {
        output.innerHTML = "<strong>🦠 Fazendas de Espirulina & Microalgas:</strong> Tanques de fotobiorreatores cultivam algas ricas em proteínas e ômega-3. Além de servirem como alimento de rápido crescimento, convertem CO₂ em oxigênio respirável para a base.";
    }
}

// DETALHES TÉCNICOS DOS TRAJES (VESTUÁRIO)
function showSuit(type) {
    const output = document.getElementById('suit-output');
    
    if (type === 'eva') {
        output.innerHTML = "<strong>👨‍🚀 Traje Externo (Bio-Skinsuit):</strong> Traje de biopressão mecânica ajustado ao corpo, oferecendo mobilidade sem a rigidez dos trajes de gás antigos. Utiliza camadas poliméricas para refletir radiação ultravioleta e gerenciar o calor corporal sob -60°C.";
    } else if (type === 'interno') {
        output.innerHTML = "<strong>👕 Vestuário Interno:</strong> Produzido com fibras de celulose sintética de secagem rápida e íons de prata bactericidas. As roupas são higienizadas por ondas de ultrassom nos habitats, economizando água potável.";
    }
}