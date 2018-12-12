//luke Hedrick
//5/5/2018
//NEWM 24567
var cardsFlipped = 0;
//runs reset function when page loads
document.onload = reset();
//Assigns each card a value
var card1val = 1;
var card2val = 1;
var card3val = 2;
var card4val = 2;
var card5val = 3;
var card6val = 3;
var card7val = 4;
var card8val = 4;
var card9val = 5;
var card10val = 5;
var card11val = 6;
var card12val = 6;
var card13val = 7;
var card14val = 7;
var card15val = 8;
var card16val = 8;
//assigning variables to use later
var flips = 0;
var currentFlip = 0;
var same = false;
var past = 0
var check =  false;
//makes all cards flipped over to back when ran
function reset(){
    dieImg1.src='cards/back.jpg';
    dieImg2.src='cards/back.jpg';
    dieImg3.src='cards/back.jpg';
    dieImg4.src='cards/back.jpg';
    dieImg5.src='cards/back.jpg';
    dieImg6.src='cards/back.jpg';
    dieImg7.src='cards/back.jpg';
    dieImg8.src='cards/back.jpg';
    dieImg9.src='cards/back.jpg';
    dieImg10.src='cards/back.jpg';
    dieImg11.src='cards/back.jpg';
    dieImg12.src='cards/back.jpg';
    dieImg13.src='cards/back.jpg';
    dieImg14.src='cards/back.jpg';
    dieImg15.src='cards/back.jpg';
    dieImg16.src='cards/back.jpg';
}

//flips whichever card is clicked on.
function flipCard(number1, number2)
{ 
    for (var i=0; i<1; i++) {
        //getting picture to set each card
        number1.src='cards/card'+number2+'.jpg';
      if (flips == 0)
    {
            currentFlip = number2 
        //saves last flip card to use for evaluations later
            past = number1;
    }
            else 
              {
                  //checks if that are the same
                   same = ( number2 == currentFlip)
                    if (past == number1)
                   {
                  check = true;
                  }
                    
                }
        }
        if(same && !check)
            {
                //if they are the same wait a bit and then make them disapaear
                setTimeout(function() {
                    number1.src='cards/blank.jpg'; 
                    past.src = 'cards/blank.jpg'; 
                  }, 1500);
                same = false;
            }
     else if(flips == 1)
        {
            //checks if first flip
         setTimeout(function(){number1.src='cards/back.jpg'; past.src = 'cards/back.jpg'}, 1500)
        }
    //add flips if not first or final flip
      flips ++;
            if (flips >=2)
      {
       flips = 0;
            
 }
check = false; 
}