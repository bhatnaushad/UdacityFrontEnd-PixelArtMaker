// // Select color input
// // Select size input

// // When size is submitted by the user, call makeGrid()


var height, width, submit, reset;

submit = document.querySelector('input[type="submit"]').addEventListener('click', makeGrid);

function makeGrid() {
	event.preventDefault();
	height = document.getElementById('inputHeight').value;
	width = document.getElementById('inputWidth').value;

	var grid = document.getElementById('pixelCanvas');

	grid.innerText = ' ';
	for(var i=0;i<height;i++){
		var gridRow = grid.insertRow(-1);

		for(var j=0;j<width;j++){
			var cell = gridRow.insertCell(-1);
			cell.onclick = changeColor;
      cell.ondblclick = removeColor;
		}
	}

}
function changeColor(){
	const color = document.getElementById("colorPicker").value;
  this.style.background = color;
}
function removeColor(){
  this.removeAttribute("style");
}
