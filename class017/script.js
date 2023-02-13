function CalculateTable() {

var InsertNumber = window.document.getElementById('Number');
var ShowTable = window.document.getElementById('ShowTable');

const Table = [];

for(var Position = 0; Position <= 10; Position++)
{
    var EndNumber = Number(InsertNumber.value) * Position;
    Table.push(`${InsertNumber.value} x ${Position} = ${EndNumber}`);
}

for(var PositionArray = 0; PositionArray < Table.length; PositionArray++)
{
    ShowTable.innerHTML = ShowTable.innerHTML + `${Table[PositionArray]}` + '<hr>';
}
}