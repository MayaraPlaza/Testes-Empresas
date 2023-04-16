/* Problema: Possivelmente Palíndromas

Observe as seguintes strings abaixo:

"arara"
"osso"
"socorram-me, subi no onibus em marrocos"

Agora leia essas strings de trás para frente. Você pode ler elas independentemente do sentido da leitura!

Palavras e frases assim são chamadas de palíndromas.

Agora observe as seguintes strings:
"parar"
"temem"
"technation"

"parar" e "temem" são chamadas de palavras potencialmente palíndromas
Isso ocorre porque você pode rearranjar/permutar as letras dessas palavras de forma que elas se tornem palíndromas

"parar" -> "rapar"
"temem" -> "metem"

Enquanto isso, "technation" nunca será uma palavra palíndroma, independentemente de como você reorganizar as letras dela (se duvida de mim, pode tentar!)

Observações adicionais:
1) Não é necessário que as strings sejam palavras que existem na vida real
2) Considere a string vazia como potencialmente palíndroma


Descrição do formato da função solução
1) Recebe como parâmetro uma string
2) Retorne True, caso a palavra seja potencialmente palíndroma. Retorne False, caso contrário


Exemplos
Exemplo 1:
Entrada: palavra = "abbac"
Saída: True

Exemplo 2:
Entrada: palavra = "abba"
Saída: True

Exemplo 3:
Entrada: palavra = "abbacd"
Saída: False

*/


function main(palavra) {
    const letras = new Map();
    let numImpares = 0;
    
    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra[i];
      letras.set(letra, (letras.get(letra) || 0) + 1);
    }
    
    for (let valor of letras.values()) {
      if (valor % 2 === 1) {
        numImpares++;
      }
      
      if (numImpares > 1) {
        return false;
      }
    }
    
    return true;
  }
  
  /* 
  A solução utiliza um Map para armazenar a frequência de cada letra na palavra. Em seguida, percorremos os valores do Map para contar quantas letras aparecem um número ímpar de vezes.
  
  Se o número de letras com frequência ímpar for maior do que 1, a palavra não é potencialmente palíndroma e retornamos false. Caso contrário, a palavra é potencialmente palíndroma e retornamos true.
  
  Note que utilizamos o operador || para inicializar a frequência de cada letra com zero caso ela ainda não tenha sido adicionada ao Map.
  */
  
  