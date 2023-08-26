function createMatch(player1, player2) {
    let players = [player1,player2]
    let match_score = [0, 0]
    let set_score = [0, 0]
    let round_score = [0, 0]
    let advantage = 0
    let player_advantage = [0, 0]

    function modify_winner(player){
        set_score[player-1] += 1
        if(set_score[player-1] >= 4 && (Math.abs(set_score[0] - set_score[1]) >= Math.abs(2))){
            match_score[player-1] += 1
            set_score = [0, 0] 
            if(match_score[player-1] === 2){
                console.log('¡¡¡ '+players[player-1]+' HAS GANADO !!!') 
                winner_player.push(players[player-1]) 
                return // Para la ejecución del programa
            } 
            console.log(getMatchScore())
        }
        else {
            result = `${player1} ${set_score[0]} - ${set_score[1]} ${player2}`;
            console.log(getGameScore())
        }  
        round_score = [0, 0]
    }

    function getCurrentRoundScore(){
        let result = 'hola'
        if (round_score[0] === 40 && round_score[1] === 40 && advantage === 0 ){
            result = `--- Deuce --- ${player1} ${round_score[0]} - ${round_score[1]} ${player2}`
        }
        else if (round_score[0] === 40 && round_score[1] === 40 && advantage !== 0 ) {
            for (let i = 0; i < 2; i++){
                if(player_advantage[i] === 1){
                    result = `--- Advantage  ${players[i]} --- `;
                }
            } 
        }
        else{
            result = `Round: ${player1} ${round_score[0]} - ${round_score[1]} ${player2}`;
        }
        return result
        
    }

    function getGameScore(){ 
        let result = `Set: ${player1} ${set_score[0]} - ${set_score[1]} ${player2}`;
        return result
    }

    function getMatchScore(){ 
        let result =  `Juego: ${player1} ${match_score[0]} - ${match_score[1]} ${player2}`;
        return result
    }
   
    function pointWonBy(player) {
        if(match_score[player-1] === 2){
            console.log('¡¡¡ '+players[player-1]+' HAS GANADO !!!')
            match_score = [0, 0]
            winner_player.push(players[player-1]) 
            return
        }
        else{
            if (set_score[player - 1] <= 4  || (set_score[player-1] >= 4) && (Math.abs(set_score[0] - set_score[1]) <= Math.abs(2))){
                if (round_score[0] === 40 && round_score[1] === 40){
                    if (advantage === 0 ){
                        advantage = player
                        player_advantage[player-1] = 1
                    }
                    else if (advantage === player){
                        set_score[player-1] += 1
                        round_score = [0, 0]
                        if((set_score[player-1] >= 4) && (Math.abs(set_score[0] - set_score[1]) >= Math.abs(2))){
                            match_score[player-1] += 1
                            set_score = [0, 0] 
                            if(match_score[player-1] === 2){
                                console.log('¡¡¡ '+players[player-1]+' HAS GANADO !!!')
                            }
                            console.log(getMatchScore())
                        }
                        player_advantage = [0, 0]
                        advantage = 0
                        console.log(getGameScore())
                    }
                    else {
                        advantage = 0
                        player_advantage = [0, 0]
                    }     
                }
                else if (round_score[player - 1] === 0) {
                    round_score[player - 1] = 15 
                } else if (round_score[player - 1] === 15) {
                    round_score[player - 1] = 30 
                } else if (round_score[player - 1] === 30) {
                    round_score[player - 1] = 40
                }
                else if ((round_score[0] !== 40 && round_score[1] === 40) || (round_score[0] === 40 && round_score[1] !== 40)){
                    modify_winner(player)
                }
                console.log(getCurrentRoundScore())
            }
            else {
                if (Math.abs(set_score[0] - set_score[1]) >= Math.abs(2)){
                    match_score[player-1] = match_score[player-1] + 1
                    set_score = [0, 0]
                    console.log(getMatchScore())
                }
                set_score[player-1] +=1
                console.log(getGameScore())
            }
        }  
    }

    return {
        player1: player1,
        player2: player2,
        pointWonBy: pointWonBy,
        getCurrentRoundScore:getCurrentRoundScore,
        getGameScore: getGameScore,
        getMatchScore: getMatchScore
    }
}

// Ejemplo de software
let winner_player = new Array()
let final_winners = new Array()
let total_players = ['Lara','Pablo','Alberto C','David J']
let i = 0

let game = createMatch('Lara','Pablo')

while (final_winners.length < 2){
    if( i === 0){
        let game = createMatch(total_players[0],total_players[1]);
        while (winner_player.length < 1){
            let randomPoint = Math.floor(Math.random()*2)+1
            game.pointWonBy(randomPoint)
        }
    }
    else {
        let game = createMatch(total_players[2],total_players[3]);
        while (winner_player.length < 1){
            let randomPoint = Math.floor(Math.random()*2)+1
            game.pointWonBy(randomPoint)
        }
    }
    final_winners.push(winner_player[0]); 
    i = i + 1
    winner_player.pop()
}

if (final_winners.length === 2){
    let game = createMatch(final_winners[0],final_winners[1]);
    while (winner_player.length < 1){
        let randomPoint = Math.floor(Math.random()*2)+1
        game.pointWonBy(randomPoint)
    }
}




