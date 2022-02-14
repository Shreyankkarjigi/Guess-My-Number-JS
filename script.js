'use strict';
//Define secret number

const number=Math.trunc(Math.random()*20)+1;
let score=20
let highscore=0

//document.querySelector('.number').textContent=number;

document.querySelector('.check').addEventListener('click', function(){ 
    
    const guess=Number(document.querySelector('.guess').value)

    //if no value print something

    if (!guess || guess<0){
        document.querySelector('.message').textContent='Invalid input';
    }

    else if (guess===number){
        document.querySelector('.message').textContent='Correct Number'
        //Show the correct number
        document.querySelector('.number').textContent=number;

        //Manipulate background color of game to green

        document.querySelector('body').style.backgroundColor="#60b347"



        //Highscore calculate


        if (score>highscore){

            highscore=score
        }

        document.querySelector('.highscore').textContent=highscore;

    }

    else if(guess>number){
        document.querySelector('.message').textContent='Too High'
        //wrong guess will decrement score by 1
        //Get score
        if (score>0){
        score--;
        //display the score
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor="red"
        }
        else{
            document.querySelector('.message').textContent='Looser'
            document.querySelector('body').style.backgroundColor="red"

        }

    }
    else if (guess<number){

        document.querySelector('.message').textContent='Too Low'
        if (score>0){
            score--;
            //display the score
            document.querySelector('.score').textContent=score;
            document.querySelector('body').style.backgroundColor="red"
            }
            else{
                document.querySelector('.message').textContent='Looser'
                document.querySelector('body').style.backgroundColor="red"
    
            }
      
    

    }

});

//Reset game
document.querySelector('.again').addEventListener('click', function(){
        console.log("button hit")
        //score reset
        let score=20
        document.querySelector('.score').textContent=score;
        //make input blank
        document.querySelector('.guess').value=""
        //change color to grey
        document.querySelector('body').style.backgroundColor="#222"
        //Change message
        document.querySelector('.message').textContent='Start guessing...'
        //Reset correct guess number
        document.querySelector('.number').textContent="?"; 


})




//Try modal here

//Idea is to create a modal to show game rules
//Maybe a button that says rules 





