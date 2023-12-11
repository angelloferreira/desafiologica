<?php

// Função para obter a pontuação de um atributo (simulando entrada do usuário)
function obterPontuacao($atributo)
{
    echo "Informe a pontuação de $atributo (de 1 a 10): ";
    return intval(fgets(STDIN));
}

// Obter pontuações para força, agilidade e inteligência
$forca = obterPontuacao("força");
$agilidade = obterPontuacao("agilidade");
$inteligencia = obterPontuacao("inteligência");

// Calcular pontuação total
$pontuacaoTotal = $forca + $agilidade + $inteligencia;

// Classificar o nível do herói com base na pontuação total
if ($pontuacaoTotal >= 25) {
    echo "Herói de Nível Máximo!\n";
} elseif ($pontuacaoTotal >= 20) {
    echo "Herói de Nível Alto!\n";
} elseif ($pontuacaoTotal >= 15) {
    echo "Herói de Nível Médio!\n";
} else {
    echo "Herói de Nível Baixo.\n";
}

?>