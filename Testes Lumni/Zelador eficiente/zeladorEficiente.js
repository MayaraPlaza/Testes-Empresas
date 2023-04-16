/* Problema zelador eficiente

O zelador de uma faculdade é extremamente eficiente. Ao final de cada dia, todo o lixo da escola está em sacos plásticos com peso entre 1,01 e 3,00 quilos. Então, todas as sacolas plásticas são levadas para as lixeiras do lado de fora. Uma viagem é descrita como selecionar um número de sacolas que juntas não pesam mais de 3,00 quilos, despejá-las na lixeira externa e retornar à faculdade. Dado o número de sacolas plásticas n e o peso de cada sacola, determine o número mínimo de viagens que o zelador deve fazer.


Descrição do formato da função solução
1) Recebe como parâmetro um vetor com o peso das sacolas a serem levadas.
2) Retorne a quantidade de viagens que o zelador deve fazer.


Exemplos
Exemplo 1:
Entrada: pesos = [1.01, 1.99, 2.5, 1.5, 1.01]
Saída: 3
Explicação: O zelador consegue levar todas as sacolas plásticas em 3 viagens: [1,01 + 1,99 , 2,5, 1,5 + 1,01].

Exemplo 2:
Entrada: pesos = [1.01, 1.01, 1.01, 1.4]
Saída: 2

Exemplo 3:
Entrada: pesos = [1.01, 1.993, 1.32, 1.7, 1.8]
Saída: 4

*/





function main(pesos) {
  pesos.sort(); // ordena os pesos em ordem crescente
  let qtdViagens = 0; // inicializa a quantidade de viagens como 0
  let i = 0; // inicializa o índice do primeiro elemento como 0
  let j = pesos.length - 1; // inicializa o índice do último elemento como o tamanho do vetor menos 1

  while (i <= j) {
    if (pesos[i] + pesos[j] <= 3.0) { // se a soma dos pesos for menor ou igual a 3.0
      i++; // incrementa o índice do primeiro elemento
    }
    j--; // decrementa o índice do último elemento
    qtdViagens++; // incrementa a quantidade de viagens
  }

  return qtdViagens; // retorna a quantidade de viagens
}