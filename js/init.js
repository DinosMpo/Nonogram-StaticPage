let nonogram;
let mouseX;
let mouseY;
let isDown = false;
let currentLevel = "none";
let turn = false;
let wait = false;


function createLevel(level, stage) {
	state = "level"; //to xrhsomopoiw gia na stamataw to animation
	currentStage = stage;
	nonogram = new Nonogram(level);
	container.style.transform = "translateX(-50%)";
	container.style.left = "50%";

	canvas.width = nonogram.width;
	canvas.height = nonogram.height;
	
	canvas.style.border = "1px solid black";
	// ctx.clearRect(0, 0, innerWidth, innerHeight);
	clearCanvas();
	if(!localStorage.getItem(currentStage)) {
		nonogram.drawGrid();
	}else{
		nonogram.drawGrid();
		nonogram.continueProgress(retrieve(currentStage), retrieve('rowNumbersGrid-'+currentStage), retrieve('columnNumbersGrid-'+currentStage));
	}
	nonogram.drawRowNumbers();
	nonogram.drawColumnNumbers();
	$("#multiplayer-tools").hide();
	$("#singleplayer-tools").show();

	resetTools("singleplayer");
	
	if($("#info-current-stage").text().length > 0) {
		$("#info-current-stage").text("");
		$("#info-current-stage").append(currentStage);
	}else{
		$("#info-current-stage").append(currentStage);
	}

	$("#info-current-progress").text("");
	$("#info-current-progress").text(nonogram.findProgress() + "%");
	$("#clients-count").hide();

	limitBottom = nonogram.height-myLimit;
	limitRight = nonogram.width-myLimit;
}