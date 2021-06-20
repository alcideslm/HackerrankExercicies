# Hackerrank exercicies:

## Repeated String
**Endereço:** [Link](https://www.hackerrank.com/challenges/repeated-string/problem)  
**Linguagem:** Javascript  
**Solução:** Identificado quantidade de repetições de termo de entrada "s" nescessárias para atingir quantidade de caracteres informado em entrada "n". Multiplicado as ocorrências de caracterer "a" em entrada "s" por quantidade de repetições nescessárias, utilizando seguintes etapas:

1. Identificado número de repetições nescessárias para que entrada "s" atinja número de caracteres informado em entrada "n".
2. Identificado quantidade de caracteres adicionais a repetições. Ex: Em entrada s="aba" e n="10", o termpo "aba" será repetido 3x e será nescessário uma repetição adicional do primeiro caracter "a" para atingir os 10 digitos informados.
3. Percorrido caracteres de entrada "s", para cada ocorrência do caractere "a" em entrada "s", somado a um contador a quantidade de repetições localizada em tópicos anteriores.

## Higher Than 75 Marks
**Endereço:** [Link](https://www.hackerrank.com/challenges/more-than-75-marks/problem)  
**Linguagem:** Oracle  
**Solução:** Realizado consulta ETL "top_students" filtrando alunos com nota superior a nota de corte 75 e posteriormente realizado consulta em top_students ordenando por ultímos caracteres de nome e id . Utilizado ETL para possiblitar preparar substring para utilização em ordenação de query principal.

## Counting Valleys
**Endereço:** [Link](https://www.hackerrank.com/challenges/counting-valleys/problem)  
**Linguagem:** Javascript  
**Solução:** Realizado loop percorrendo caracteres informados em entrada **path**. Quando caractere percorrido igual a "U" incrementada altitude em 1 e quando caractere igual a "D" decrementado altitude em 1. Toda vez que a altitude passa a ser menor que 0 (nível do mar) é contabilizado um novo declive.
