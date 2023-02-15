let num = [];

num.push() // para acrescentar nova posicao ao array, se quiser tambem, e so acrescentar o numero da posicao dentro dos colchetes que funciona igual, exemplo: num[3] = 7. So que utilizando o push, vai sempre acrescentar a ultima posicao.

num.length // para saber o tamanho do array (a ultima posicao)

num.sort() // - coloca os elementos (conteudo) do array em ordem crescente.

let exemplo2 = [5, 9, 2, 1, 7];
exemplo2.push(3);
exemplo2.sort();

for(let Position = 0; Position < exemplo2.length; Position++)
{
    console.log(`A posicao ${Position} tem o valor ${exemplo2[Position]}.`);
}

//Forma simplificada de for com array:

for(let Position in exemplo2)
{
    console.log(`Exemplo simplificado... A posicao ${Position} tem o valor ${exemplo2[Position]}.`)
}

//Para buscar um valor dentro de alguma posicao do array(verificar se o conteudo buscado existe no array):
//Neste caso, o valor retornado, e o numero da chave onde este valor procurado esta alocado. se retornar o valor -1, quer dizer que pesquisou e nao encontrou o valor procurado.

let procurandoconteudo = exemplo2.indexOf(9);
console.log(`A posicao que o conteudo procurado esta e: ${procurandoconteudo}`);

let procurandoalgoquenaoexiste = exemplo2.indexOf(4);
console.log(`Aqui o exemplo do retorno trazido, quando o valor procurado nao existe ${procurandoalgoquenaoexiste}`)