
function calcularPontos(partidaVencida, classificacaoJogador, classificacaoOponente) {
    const diferencaClassificacao = classificacaoOponente - classificacaoJogador;
    const multiplicadorVitoria = partidaVencida ? 1 : -1;

    let pontos = 0;

    if (diferencaClassificacao >= -10 && diferencaClassificacao <= 10) {
        pontos = 10 * multiplicadorVitoria;
    } else if (diferencaClassificacao > 10) {
        pontos = 5 * multiplicadorVitoria;
    } else {
        pontos = 15 * multiplicadorVitoria;
    }

    return pontos;
}

const partidaVencida = true;
const classificacaoJogador = 1500;
const classificacaoOponente = 1520;

const pontosGanhosPerdidos = calcularPontos(partidaVencida, classificacaoJogador, classificacaoOponente);

console.log(`Resultado da Partida: ${partidaVencida ? "Vitória" : "Derrota"}`);
console.log(`Pontos Ganho/Perdidos: ${pontosGanhosPerdidos}`);
