/* 

Problema: Soma de dois numeros
Um vetor com números chamado numeros é dado e pede-se que você encontre os dois elementos desse vetor que somados são iguais ao número objetivo.

Considere que existe somente uma solução possível e que você não poderá usar o mesmo elemento mais de uma vez.

Retorne os valores em ordem crescente de indice no vetor.

*/

function main(numeros, objetivo) {
    const visited = new Map();
    
    for (let i = 0; i < numeros.length; i++) {
      const complement = objetivo - numeros[i];
      
      if (visited.has(complement)) {
        return [Math.min(i, visited.get(complement)), Math.max(i, visited.get(complement))];
      }
      
      visited.set(numeros[i], i);
    }
    
    return [];
  }
  
  /*Explicando a solução:
  
  A solução utiliza um Map (uma estrutura de dados que permite armazenar pares chave-valor) para armazenar os elementos do vetor que já foram visitados. A chave do Map é o elemento do vetor e o valor é o índice desse elemento no vetor.
  
  Em cada iteração do loop, calculamos o complemento do elemento atual (isto é, a diferença entre o objetivo e o elemento atual). Verificamos se o complemento já foi visitado, o que significa que encontramos uma solução. Caso contrário, adicionamos o elemento atual ao Map.
  
  Se chegarmos ao final do loop e não encontrarmos uma solução, retornamos um vetor vazio.
  
  Por fim, retornamos um vetor com os índices dos elementos que somados resultam no objetivo, em ordem crescente. Note que utilizamos a função Math.min e Math.max para garantir que o índice menor é retornado primeiro.*/
  
  