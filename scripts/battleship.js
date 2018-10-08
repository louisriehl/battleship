$(document).ready(function() {
  $("#demo").html("Hello there!");
  $("#grid-size").click( () => {
    makeGrid(8);
  });
});

function makeGrid (size) {
  $('body').append('<table>');
  let table = $('table').addClass("battle-grid");
  for (let row = 0; row < size; row++) {
    let tr = $('<tr>').addClass(`row-${row}`);
    table.append(tr);
    for (let col = 0; col < size; col++) {
      let td = $('<td>').addClass(`row-${row}-col-${col}`);
      tr.append(td);
    }
  }
}
