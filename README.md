# Definição matemática de um automato finito determinístico(AFD)

representação matemática que descreve um modelo computacional simples. Ele consiste em cinco elementos:

1. Um conjunto finito de estados (Q).
2. Um alfabeto finito de entrada (Σ).
3. Uma função de transição (δ) que mapeia um estado e um símbolo de entrada para outro estado.
4. Um estado inicial (q0) onde a computação começa.
5. Um conjunto de estados de aceitação (ou de término) que indica quando uma computação é bem-sucedida.


Matematicamente, um AFD é representado por uma tupla:

$$M=(Q,Σ,δ,q0, F)$$

---
- **Q** é o conjunto de estados finitos.
- **Σ** é o alfabeto de entrada.
- **δ** é a função de transição que mapeia Q × Σ em Q.
- **q₀** é o estado inicial.
- **F** é o conjunto de estados de aceitação.

A função de transição ( **δ** )
é uma função matemática que determina para cada estado do autômato e para cada símbolo do alfabeto de entrada, o próximo estado para aquele par estado/símbolo.

Essa definição matemática é fundamental para compreender e implementar autômatos em teoria da computação e linguagens formais.
