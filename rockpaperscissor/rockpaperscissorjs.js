const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

let computermove;



function computer_turn(){
     const turns = ["rock","paper","scissor"];
     const index = Math.floor(Math.random()*3);
     console.log(index)

     computermove = turns[index];
      return computermove;
 }






let playerscore = 0;
let computerscore = 0;
let total_chances = 10;



function youwin(){
    if(total_chances==0){

        if(computerscore>playerscore){
            alert("YOU LOOSE");
        }
        else if(computerscore<playerscore){
            alert("YOU WIN");
        }
        else if(computerscore==playerscore){
            alert("MATCH TIED");
        }

        setTimeout(function(){
            location.reload()
        },2000)

    }
 }



function playerwins(){
    playerscore+=1;
    total_chances-=1;
    document.querySelector('.playerscore').innerHTML = playerscore;
    document.querySelector('#chances').innerHTML = `REMAINING CHANCES = ${total_chances}`;
    console.log(total_chances)
}
function computerwins(){
    computerscore+=1;
    total_chances-=1
    document.querySelector('.computerscore').innerHTML = computerscore;
    document.querySelector('#chances').innerHTML = `REMAINING CHANCES = ${total_chances}`;
    console.log(total_chances)
}
function computer_play(move){
    document.querySelector('.computerturn').innerHTML = move;
}

rock.addEventListener('click',

function(){
    computer_turn()
    document.querySelector('.playerturn').innerHTML = "ROCK";
    switch(true){
        case computermove=='rock':
            console.log("SAME")
            computer_play("ROCK")
            youwin()
            break;
        case computermove=='paper':
            console.log("You lose")
            computer_play("PAPER")
            computerwins();
            youwin()
            break;
        case computermove=='scissor':
            console.log("YOU wIN")
            computer_play("SCISSOR")
            playerwins()
            youwin()
            break;
        default:
            console.log("Hello world")

    }
    
    
}

)

paper.addEventListener('click',

function(){
    computer_turn()
    document.querySelector('.playerturn').innerHTML = "PAPER";
    switch(true){
        case computermove=='rock':
            console.log("YOU WIN")
            computer_play("ROCK")
            playerwins()
            youwin()
            break;
        case computermove=='paper':
            computer_play("PAPER")
            youwin()
            
            break;
        case computermove=='scissor':
            computer_play("SCISSOR")
            computerwins()
            youwin()
            break;
        default:
            console.log("Hello world")

    }
    
    
}

)

scissor.addEventListener('click',

function(){
    computer_turn()
    document.querySelector('.playerturn').innerHTML = "SCISSOR";
    switch(true){
        case computermove=='rock':
            computer_play("ROCK");
            computerwins();
            youwin()
            break;
        case computermove=='paper':
            computer_play("PAPER")
            playerwins()
            youwin()         
            break;
        case computermove=='scissor':
            computer_play("SCISSOR")
            youwin()
            break;
        default:
            console.log("Hello world")

    }
    
    
}

)

document.getElementById('restart').onclick = function(){
    location.reload();
}


