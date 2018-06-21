let nonogram;
let mouseX;
let mouseY;
let isDown = false;
let currentLevel = "none";
let turn = false;

function createLevel(level, stage) {
	state = "level"; //to xrhsomopoiw gia na stamataw to animation
	currentStage = stage;

	nonogram = new Nonogram(level);

	// screen.style.display = "block";
	container.style.transform = "translateX(-50%)";
	container.style.left = "50%";

	canvas.width = nonogram.width;
	canvas.height = nonogram.height;
	canvas.style.border = "1px solid black";
	
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	if(!localStorage.getItem(currentStage)) {
		nonogram.drawGrid();
	}else{
		nonogram.drawGrid();
		nonogram.continueProgress(retrieve(currentStage));
	}

	nonogram.fillRowNumbers();
	nonogram.fillColumnNumbers();

	resetTools();
}
