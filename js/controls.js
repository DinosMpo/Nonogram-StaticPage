$(canvas).mousedown(function(event) {
	startPointMouseX = event.offsetX ; //- c.canvas.offsetLeft
	startPointMouseY = event.offsetY ; //- c.canvas.offsetTop

	if(state === "level") {
		//Singleplayer
		isDown = true;
		nonogram.fillCels(startPointMouseX, startPointMouseY);
		if(nonogram.checkProgress()) {
			$("#correct").show();
			store("correct-" + currentStage, 1);
			$(".correct-" + currentStage).show();
		}else{
			$("#correct").hide();
			store("correct-" + currentStage, 0);
			$(".correct-" + currentStage).hide();
		}

		nonogram.findUserChoices(); // gt to exw edw auto?
		store(currentStage, nonogram.userChoices);
	}
});

//------------ Under development gia na kanw ton xrhsth na epilegei polla koutakia
$(canvas).mouseup(function(){
	isDown = false;
});

$(canvas).mousemove(function(event){
	if(isDown){
		var mouseX = event.offsetX ; //- c.canvas.offsetLeft
		var mouseY = event.offsetY ; //- c.canvas.offsetTop

		nonogram.fillMultiCells(mouseX, mouseY, startPointMouseX, startPointMouseY);

		if(nonogram.checkProgress()) {
			$("#correct").show();
			store("correct-" + currentStage, 1);
			$(".correct-" + currentStage).show();
		}else{
			$("#correct").hide();
			store("correct-" + currentStage, 0);
			$(".correct-" + currentStage).hide();
		}
	}
});