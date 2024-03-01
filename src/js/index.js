document.addEventListener("DOMContentLoaded", function() {
    // Números da Mega-Sena e Lotofácil
    const megaSenaNumbers = 60;
    const lotofacilNumbers = 25;
    
    // Quantidade de números a serem sorteados
    const megaSenaDraw = 6;
    const lotofacilDraw = 15;
    
    // Calcula as probabilidades
    const megaSenaProbability = 1 / (factorial(megaSenaNumbers) / (factorial(megaSenaNumbers - megaSenaDraw) * factorial(megaSenaDraw)));
    const lotofacilProbability = 1 / (factorial(lotofacilNumbers) / (factorial(lotofacilNumbers - lotofacilDraw) * factorial(lotofacilDraw)));
    
    // Exibe as probabilidades na página
    document.getElementById("megaSenaProbability").textContent = `1 em ${Math.round(1 / megaSenaProbability)}`;
    document.getElementById("lotofacilProbability").textContent = `1 em ${Math.round(1 / lotofacilProbability)}`;
    
    // Adiciona eventos de clique aos botões
    document.getElementById("btnMegaSena").addEventListener("click", function() {
        const megaSenaResult = generateRandomNumbers(megaSenaNumbers, megaSenaDraw);
        document.getElementById("megaSenaResult").textContent = `Números sorteados: ${megaSenaResult.join(", ")}`;
    });

    document.getElementById("btnLotofacil").addEventListener("click", function() {
        const lotofacilResult = generateRandomNumbers(lotofacilNumbers, lotofacilDraw);
        document.getElementById("lotofacilResult").textContent = `Números sorteados: ${lotofacilResult.join(", ")}`;
    });
});

// Função para calcular o fatorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Função para gerar números aleatórios
function generateRandomNumbers(max, count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}
