function CalculeParOuImpar(numero)
{
    if(numero % 2 == 0)
    {
        return 'Par';
    }
    else
    {
        return 'Impar';
    }
}

let Verificar = CalculeParOuImpar(10);

console.log(`O numero digitado e ${Verificar}`);

function Sum(Number1=0, Number2=0) //Verificar comentario abaixo, ao chamar funcao, para entender o zero ao lado do parametro.
{
    return Number1 + Number2;
}

console.log(`The sum is ${Sum(10,30)}.`);//Caso nao seja passado um dos parametros, o return dara a mensagem NAN. Para nao acontecer isso, colocar na functiona que os parametros sao igual a zero, porque caso nao seja informado um parametro nao da problema e caso seja informado todos os parametros, os valores zero sao substituidos pelos valores novos informados ao chamar a funcao.

//Passando os valores de uma funcao para uma variavel;

let Exemplo = function(numeroexemplo)
{
    return numeroexemplo * 2;
}

console.log(`O resuldado e ${Exemplo(5)}`);

//Mais um exemplo, calculando fatorial:
function Fatorial(numerofatorial)
{
    let fat = 1;
    for(let Position = numerofatorial; Position > 1; Position--)
    {
        fat *= Position;
    }
    return fat;
}

console.log(`O fatorial de 5 e: ${Fatorial(5)}`)

/*
5! = 5 * 4 * 3 * 2 *1
5! = 5 * 4!
numero! = numero * (numero - 1)!
1! = 1
*/

//RECURSIVIDADE
function Fatorial2 (numero)
{
    if(numero == 1)
    {
        return 1;
    }
    else
    {
        return numero * Fatorial2(numero-1);
    }
}

console.log(`O resultado da function do tipo Recursividade e: ${Fatorial2(5)}`);