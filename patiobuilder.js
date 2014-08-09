$(function() {
  });
  function createTable(){
	 
	var rows = new Number($("#rowcount").val());
	var cols = new Number($("#columncount").val());
	var tr = [];
	for (var i = 0; i < rows; i++) {
		var row = $('<div class="div-table-row"></div>').appendTo("#thepatio");
		for (var j = 0; j < cols; j++) {
			$('<div class="div-table-cell"></div>').appendTo(row); 
		}
	}
  
}

function createPiece(w,h){
  var wpixels = w * 5;
  var hpixels = h * 5;
	var thehtml = $('<div id="draggable" class="draggable ui-widget-content"><p>'+w+' x '+h+'</p></div>');
  thehtml.css({"width":wpixels+'px',"height":hpixels+'px'});


  thehtml.draggable({ snap:"div" });
  thehtml.on("drag", function(event, ui) {
      console.log(ui.position);
    });
	thehtml.appendTo("#piececontainer");
}