let selectedGame = document.getElementById("game");
let gameDivs = document.getElementById("boxNumber");

/*
gameType ---game contains the number of letter 
*/
let gameType;
function selectGame() {
  console.log(selectedGame.value);
  gameType = selectedGame.value;

  createBox();
}

function createBox() {
  str = "";
  for (let i = 0; i < gameType; i++) {
    str += `<input type='text' class='input'   class="game${i}" maxlength="1" />`;
  }
  gameDivs.innerHTML = str;
}

function reset() {
  let val = document.getElementsByClassName("input");
  for (let i = 0; i < val.length; i++) {
    val[i].value = "";
  }
  // console.log('val', val[0].value)
}
function submit() {
  let formedLetter = "";
  let collectLetters = document.getElementsByClassName("input");
  for (let i = 0; i < collectLetters.length; i++) {
    formedLetter += collectLetters[i].value;
  }

 let isTruncate= validate(formedLetter, gameType) 
 if(isTruncate){
  return ;
 }

  switch(+gameType) {
    case 5 :{
      if(formedLetter in obj5){
        alert(`you win`)
       }
      break;
    }
    case 6 :{
      if(formedLetter in obj6){
        alert(`you win`)
       }
      break;
    }
    case 7 :{
      if(formedLetter in obj7){
        alert(`you win`)
       }
      break;
    }
    case 8 :{
      if(formedLetter in obj8){
        alert(`you win`)
       }
      break;
    }
  }




}
function validate(word, len) {
  console.log('word,len', word,word.length,+len)
  if (word.length !== +len) {
    console.log('hi',)
    alert(`please fill all the divs`);
    return 1;
  }
  return 0;
}


/**
 * @obj5 here add all the words of size 5
 * @obj6 here add all the words of size 6
 * 
 */

var obj5 ={
  'whole':'whole',
 
}

var obj6 ={
  'wholes':'wholes',
 
}

var obj7 ={
  'wholess':'wholess',
 
}

var obj8 ={
  'wholesss':'wholesss',
 
}
