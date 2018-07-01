// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const height = $('#inputHeight');
const width = $('#inputWeight');
const makeGrid = $("#pixelCanvas");
const x = $("inputHeight");
const y = $("inputWeight");   
const color =  $('#colorPicker')
$(fuction (){
  $('#sizePicker').submit(function(event) {
		event.preventDefault();
        let height = $('#inputHeight').val();
 		let width = $('#inputWeight').val();
        let makeGrid = $("#pixelCanvas").val();
        makeGrid(height, width);
  });
});

$(#submitValue).on (
click, function (){
    makeGrid(height, width) {
    $(tr).remove();
    const x = $("inputHeight");
    const y = $("inputWeight");     
    for (x=0; x < height; x++) {
			$("#pixelCanvas").append("<tr></tr>");
		}
    for (y = 0; y < width; y++) {
			$("tr").append("<td></td>");
		}

};
});

	$("td").hover(function() {
      let color =  $('#colorPicker').val();
        $("td").css("background-color", color);
 