function Counter(){

    var NumberStart = window.document.getElementById('Start');
    var NumberEnd = window.document.getElementById('End');
    var SizeNumber = window.document.getElementById('Size');
    var Numbers = window.document.getElementById('Numbers');

    if(NumberStart.value == 0)
    {
        Numbers.innerHTML = ('It is impossible to count. In START, type a number bigger than zero to continue.');
    }
    else
    {
        if(SizeNumber.value == 0)
        {
            window.alert('The SIZE must be > 0. Type a number bigger than zero to continue.');
        }
        else
        {
            if(NumberEnd.value % Size.value != 0) 
            {
                Numbers.innerHTML = ('The START and the SIZE must be Prime Number.')
            }
                else
                {
                    Numbers.innerHTML = `Counting...`
                    var WriteNumbers = '';

                    for(var InitialPosition = Number(NumberStart.value); InitialPosition <= Number(NumberEnd.value); InitialPosition += Number(SizeNumber.value))
                    {
                        WriteNumbers = WriteNumbers + '👉' + InitialPosition;
                    }
                    Numbers.innerHTML = `${WriteNumbers} 🚩`;
                    
                }
        }
    }
}