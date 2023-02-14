function Counter(){

    var NumberStart = window.document.getElementById('Start');
    var NumberEnd = window.document.getElementById('End');
    var SizeNumber = window.document.getElementById('Size');
    var Numbers = window.document.getElementById('Numbers');

   

    if(NumberStart.value.length == 0 || NumberEnd.value.length == 0 || Size.value.length == 0)
    {
        Numbers.innerHTML = 'It is impossible to count. You need to fill all fields to continue. ';
    }
    else
    {
        if(SizeNumber.value == 0)
        {
            window.alert('The SIZE must be > 0. Type a number bigger than zero to continue.');
        }
        else
        {
            var WriteNumbers = '';
            Numbers.innerHTML = `Counting...`

            if(Number(NumberStart.value) < Number(NumberEnd.value))
            {
                for(var InitialPosition = Number(NumberStart.value); InitialPosition <= Number(NumberEnd.value); InitialPosition += Number(SizeNumber.value))
                    {
                        WriteNumbers = WriteNumbers + '👉' + InitialPosition;
                    }
            }
            else
            {
                for(var InitialPosition = Number(NumberStart.value); InitialPosition >= Number(NumberEnd.value); InitialPosition -= Number(SizeNumber.value))
                    {
                         WriteNumbers = WriteNumbers + '👉' + InitialPosition;
                    }
            }
            Numbers.innerHTML += `${WriteNumbers} 🚩`;
        }
    }
}