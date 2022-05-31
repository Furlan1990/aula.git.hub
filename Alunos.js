/*
Lista de Cadastro de Alunos
percorrer a lista:
-percorrer de zero até o numero de alunos.
-se o numero for par, escreva par e o numero correspondente.
-se o numero for impar, escreva impar e o numero correspondente.
-se o numero for 0,escreva zero.
*/



let numerodeAlunos = 10;

let contador = 0
while (contador < numerodeAlunos)
{
    if (contador == 0)
    {
        console.log('O numero atual é zero.')
    }
    else if (contador %2 == 0)
    {
        console.log('O numero ' +contador+ ' é par')
    }
    else
    {
        console.log (`O numero ${contador} é ímpar`)
    }
    
    contador++
}


/*
for (let contador=0;contador < numerodeAlunos; contador++)
{
    //console.log (contador)
    if (contador == 0)
    {
        console.log('O numero atual é zero.')
    }
    else if (contador %2 == 0)
    {
        console.log('O numero ' +contador+ ' é par')
    }
    else
    {
        console.log (`O numero ${contador} é ímpar`)
    }

}

*/
