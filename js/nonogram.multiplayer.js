let player1Choice;
let player2Choice;

$('#yes').click(function() {
    $('#'+ player +'-choice').addClass('choice-yes');
    let data = {
        player: player,
        choice: 'yes'
    };
    if(player == 'player1') {
        player1Choice = 'yes';
    }else if(player == 'player2Choice') {
        player2Choice = 'yes';
    }
});

$('#no').click(function() {
    $('#'+ player +'-choice').addClass('choice-no');
    let data = {
        player: player,
        choice: 'no'
    };
    if(player == 'player1') {
        player1Choice = 'no';
    }else if(player == 'player2Choice') {
        player2Choice = 'no';
    }
});

$("#exit-multiplayer").click(function(){
    $("#container-tools").hide();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    container.style.transform = "none";
    container.style.left = "0%";
    container.style.top = "0%";
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.border = "none";
    state = "menu";
    $("#correct-multiplayer").hide();
    $("#levels").show();
    $("#clients-count").show();
});

class NonogramMultiplayer {
    constructor(p1, p2, room) {
        this.player1 = p1;
        this.player2 = p2;
        this.roomId = room;

        this.turn = null;
        this.nonogram = null;
        this.choice = null;
    }
};

let gameRoom;
let multiplayerGame;
let player;
let multiplayerStageIndex;

$('#player-left-exit-to-menu').click( () => {
    $("#player-left").hide();
    $("#container-tools").hide();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    container.style.transform = "none";
    container.style.left = "0%";
    container.style.top = "0%";
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.border = "none";
    state = "menu";
    $("#menu").show();
    $("#clients-count").show();
});