// Array com as dicas de redação
const dicas = [
  "Use linguagem formal, sem gírias ou erros gramaticais (Competência 1).",
  "Mantenha o foco no tema, usando sinônimos e palavras-chave (Competência 2).",
  "Inclua repertórios variados, como filosofia, sociologia, história ou dados estatísticos (Competência 3).",
  "Use conectivos diversificados e evite repetições para garantir a coesão (Competência 4).",
  "Sempre detalhe a sua proposta de intervenção de forma clara e completa (Competência 5).",
  "Antes de escrever, faça um rascunho com a tese, os argumentos e a proposta de intervenção.",
  "Pratique regularmente, escrevendo redações semanais sobre temas variados.",
  "Revise sua redação por pelo menos 5 minutos, buscando erros de gramática e clareza.",
  "Use sinônimos do tema para manter a coesão textual, evitando a repetição de palavras.",
  "Para a tese, escolha duas causas amplas, como 'herança histórica' ou 'falta de políticas públicas'.",
];

// Adiciona um "ouvinte de evento" ao botão para que o JavaScript reaja ao clique
document
  .getElementById("sortearDicaBtn")
  .addEventListener("click", function () {
    // Sorteia um número aleatório de 0 ao total de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);

    // Pega a dica correspondente ao número sorteado
    const dicaSorteada = dicas[indiceAleatorio];

    // Exibe a dica no parágrafo
    document.getElementById("dicaExibida").textContent = dicaSorteada;
  });
