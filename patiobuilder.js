var createTable = function(){
	 
	var rows = new Number($("#rowcount").val());
  rows = rows * 2;
	var cols = new Number($("#columncount").val());
  cols = cols * 2;
	var tr = [];
	for (var i = 0; i < rows; i++) {
		var row = $('<div class="div-table-row"></div>').appendTo("#thepatio");
		for (var j = 0; j < cols; j++) {
			$('<div class="div-table-cell"></div>').appendTo(row); 
		}
	}
  
};

var createPiece = function(w,h,type){
  var wpixels = w * 3;
  var hpixels = h * 3;
	var thehtml = $('<div class="draggable '+type+'"><p>'+w+' x '+h+'</p></div>');
  thehtml.css({"width":wpixels+'px',"height":hpixels+'px'});


  thehtml.draggable({ snap:".draggable", snapMode: "outer" });
  thehtml.on("drag", function(event, ui) {
      console.log(ui.position);
    });
	
  thehtml.on("dblclick", function(){
	var st = window.getComputedStyle(this, null);
	var tr = st.getPropertyValue("-webkit-transform");
	console.log(tr);
	if( tr !== "none") {
		console.log('Matrix: ' + tr);

		var values = tr.split('(')[1];
		  values = values.split(')')[0];
		  values = values.split(',');
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];

		var scale = Math.sqrt(a*a + b*b);

		// arc sin, convert from radians to degrees, round
		/** /
		var sin = b/scale;
		var angle = Math.round(Math.asin(sin) * (180/Math.PI));
		/*/
		var radians = Math.atan2(b, a);
		if ( radians < 0 ) {
		  radians += (2 * Math.PI);
		}
		var angle = Math.round( radians * (180/Math.PI));
		
		//if currently 90 then switch back to 0
		if(angle == 90){
			angle = 0;
		} else {
			//if currently 0 then switch back to 90
			angle = 90;
		}
		/**/

	  } else {
		var angle = 90;
	  }

	// works!
	console.log('Rotate: ' + angle + 'deg');
	thehtml.css({'-webkit-transform' : 'rotate('+angle+'deg)',
                 '-moz-transform' : 'rotate('+angle+'deg)',
                 '-ms-transform' : 'rotate('+angle+'deg)',
                 'transform' : 'rotate('+angle+'deg)'});
	});
	thehtml.appendTo("#piececontainer");
};
	

$(document).ready(function() {

});
