$(document).ready(function() {
  $("#demo").html("Hello there!");
  $("#grid-size").click( () => {
    var gridSize = $(".grid-number").val();
    makeGrid(gridSize);
  });
});

function makeGrid (size) {
  if (size < 5 || size > 20 ||!size) {
    alert('Woops, size needs to be greated or equal to 5!');
    return;
  }
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
