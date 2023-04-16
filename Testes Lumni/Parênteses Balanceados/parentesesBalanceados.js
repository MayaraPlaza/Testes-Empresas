/* Problema: Parenteses balanceados

Uma string que consiste em parênteses esquerdo e direito, "(" e ")", é dada e pede-se que você equilibre os parênteses inserindo parênteses conforme necessário. Determine o número mínimo de caracteres que devem ser inseridos.


Descrição do formato da função solução
1) Recebe como parâmetro uma string com parênteses.
2) Retorne um número inteiro que deve ser o número mínimo de caracteres a serem adicionados na string.


Exemplos
Exemplo 1:
Entrada: palavra="()))"
Saída: 2

Exemplo 2:
Entrada: palavra="()()"
Saída: 0

Exemplo 3:
Entrada: palavra="())("
Saída: 2

*/


function main(palavra) {
    let pilha = [];
    let numAdicoes = 0;
    
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === "(") {
        pilha.push("(");
      } else if (palavra[i] === ")") {
        if (pilha.length === 0) {
          numAdicoes++;
        } else {
          pilha.pop();
        }
      }
    }
    
    return numAdicoes + pilha.length;
  }
  
  /* A solução utiliza uma pilha para manter os parênteses abertos que ainda não foram fechados. Para cada parêntese na string, verificamos se ele é de abertura ou fechamento.
  
  Se o parêntese for de abertura, o adicionamos na pilha. Caso contrário, verificamos se a pilha está vazia (o que significa que não há nenhum parêntese aberto que possa ser fechado) e, caso esteja, incrementamos o número de adições necessárias. Se a pilha não estiver vazia, removemos o último parêntese aberto da pilha.
  
  Ao final do loop, somamos o número de adições necessárias com o tamanho da pilha (que indica quantos parênteses abertos ainda não foram fechados) para obter o número mínimo de caracteres a serem adicionados. */
  