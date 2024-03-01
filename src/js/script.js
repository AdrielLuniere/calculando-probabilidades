function calcularProbabilidade(iteracoes) {
    let resultados = [];
    
    for (let i = 0; i < iteracoes; i++) {
        let numerosSorteados = [];
        let numerosTotais = Array.from({length: 25}, (_, i) => i + 1); // Números de 1 a 25

        for (let j = 0; j < 15; j++) {
            let index = Math.floor(Math.random() * numerosTotais.length);
            numerosSorteados.push(numerosTotais[index]);
            numerosTotais.splice(index, 1);
        }
        
        resultados.push(numerosSorteados);
    }
    
    let contagem = resultados.filter(resultado => resultado.length === 15).length;
    return contagem / iteracoes;
}

function mostrarProbabilidade() {
    let resultadoDiv = document.getElementById('resultado1');
    resultadoDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior
    
    let iteracoes = 10000; // Número de vezes que o sorteio será simulado                                                                                        
    let probabilidade = calcularProbabilidade(iteracoes);
    
    let textoProbabilidade = `Probabilidade de sair 15 números de 25: ${probabilidade.toFixed(4)}`;
    resultadoDiv.textContent = textoProbabilidade;
}

document.getElementById('calcularProbabilidade').addEventListener('click', mostrarProbabilidade);
