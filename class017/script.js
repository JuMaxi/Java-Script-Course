function CalculateTable() {

var InsertNumber = window.document.getElementById('Number');
var SelTable = window.document.getElementById('seltable'); 

if(InsertNumber.value.length == 0)
{
    window.alert('To continue, you must fill the field "Number".');
}
else
{
    SelTable.innerHTML = '';
    for(var Position = 0; Position <= 10; Position++)
    {
        var EndNumber = Number(InsertNumber.value) * Position;
        var item = document.createElement('option');
        item.value = `SelTable ${Position}`;
        item.text = `${InsertNumber.value} x ${Position} = ${EndNumber}`;
        SelTable.appendChild(item);
    }
}
}