
let NumbersArray = [];
let Numbers = window.document.getElementById('numbers');
let NewAdd = window.document.getElementById('newadd');
let End = window.document.getElementById('End');

function Checking(N)
{
    if(N.value.length == 0)
    {
        window.alert(`To analyzing you must to Add a number. This field can't be empty.`)

        return false;
    }
    else
    {
        if(N.value < 1 || N.value > 100)
        {
            window.alert(`The number must be bigger than 1 and smaller than 100.`)

            return false;
        }
    }
}

function CheckingArray(N, Array)
{
    if(Array.indexOf(Number(N)) >= 0)
    {
        window.alert(`You have already insert the number ${N}. Insert another number to continue.`)

        return false;
    }
}

function Receiving(){
    
    if(Checking(Numbers) != false && CheckingArray(Numbers.value, NumbersArray) != false)
    {
        NumbersArray.push(Number(Numbers.value));

        var NewNumber = document.createElement('option');
        NewNumber.text = `Value ${Numbers.value} add.`
        NewAdd.appendChild(NewNumber);

        Numbers.value = '';
        Numbers.focus();
    }
}

function CheckingAnalyze()
{
    if(NumbersArray.length == 0)
    {
        window.alert(`To finalize you must to Add at least a number`);

        return false;
    }
    else
    {
        return true;
    }
}

function Analyzing(){
    if(CheckingAnalyze() == true)
    {
        let End = window.document.getElementById('End');
        
        let Sum = 0;
        let Bigger = 0;
        let Smaller = NumbersArray[1];

        for(let Position = 0; Position < NumbersArray.length; Position++)
        {
            let ActualPosition = Number(NumbersArray[Position]);
            Sum += ActualPosition;

            if(ActualPosition > Bigger)
            {
                Bigger = ActualPosition;
            }
            if(ActualPosition < Smaller)
            {
                Smaller = ActualPosition;
            }
        }

        let Media = Sum / NumbersArray.length;
        End.innerHTML = '';
        End.innerHTML += `<p>There are ${NumbersArray.length} numbers typed. </p>`
        End.innerHTML += `<p>The Media of all numbers is: ${Media}.</p>`;
        End.innerHTML += `<p>The Sum of all numbers is: ${Sum}. </p>`;
        End.innerHTML += `<p>The Bigger number is: ${Bigger}. </p>`;
        End.innerHTML += `<p>The Smaller number is: ${Smaller}. </p>`;
    }
}