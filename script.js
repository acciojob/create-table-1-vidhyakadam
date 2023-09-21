function insert_Row() {
  // Get a reference to the table element by its id
  const table = document.getElementById("sampleTable");

  // Create a new row and two cells
  const newRow = table.insertRow(0); // Insert at the top (position 0)

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the cell values
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
// Add an event listener to the button with id "insertButton"
const insertButton = document.getElementById("insertButton");
insertButton.addEventListener("click", insert_Row);
