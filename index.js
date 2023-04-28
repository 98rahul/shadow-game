let selectedGame = document.getElementById("game");
let gameDivs = document.getElementById("boxNumber");
let copyText = document.getElementById("copyMe");
let tooltip = document.getElementById("tooltip");
let shadowListVal = document.getElementsByClassName("shadowVal");
let boxshadow = document.getElementById("boxshadow");
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

  let isTruncate = validate(formedLetter, gameType);
  if (isTruncate) {
    return;
  }

  switch (+gameType) {
    case 5: {
      if (formedLetter in obj5) {
        alert(`you win`);
      }
      break;
    }
    case 6: {
      if (formedLetter in obj6) {
        alert(`you win`);
      }
      break;
    }
    case 7: {
      if (formedLetter in obj7) {
        alert(`you win`);
      }
      break;
    }
    case 8: {
      if (formedLetter in obj8) {
        alert(`you win`);
      }
      break;
    }
  }
}
function validate(word, len) {
  console.log("word,len", word, word.length, +len);
  if (word.length !== +len) {
    console.log("hi");
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

var obj5 = {
  whole: "whole",
};

var obj6 = {
  wholes: "wholes",
};

var obj7 = {
  wholess: "wholess",
};

var obj8 = {
  wholesss: "wholesss",
};

copyText.addEventListener("click", async () => {
  console.log("clicked", copyText.innerText);
  try {
    await navigator.clipboard.writeText(copyText.innerText);

    tooltip.innerHTML = `
    <p class='textCopied' id='text'>Copied Success!</p>
    `;
    setTimeout(() => {
      console.log("timeer");
      document.getElementsByClassName("textCopied")[0].style = `display:none`;
    }, 1000);
  } catch (err) {
    console.log("failed to copy");
  }
});
let xOffset=0, yOffset=0, bRadius=0, spreadVal=0,colorPick='red';
function triggerShadow(para) {
  console.log('para', para)
  switch (para) {
    case "x": {
      xOffset = shadowListVal[0].value;
      break;
    }
    case "y": {
      yOffset = shadowListVal[1].value;
      break;
    }
    case "b": {
      bRadius = shadowListVal[2].value;
      break;
    }
    case "s": {
      spreadVal = shadowListVal[3].value;
      break;
    }
    case "c": {
      colorPick = shadowListVal[4].value;
      break;
    }
  }
  

console.log('colorPick', colorPick)

  boxshadow.style = `box-shadow:${xOffset}px ${yOffset}px  ${bRadius}px ${spreadVal}px ${colorPick}`;
}


async function  getBoxShadow  (){
  let shadowVal = boxshadow.style
  console.log('shadowVal', shadowVal.cssText)
try {
  await navigator.clipboard.writeText(shadowVal.cssText);
  document.getElementById('shadowVal').innerText=shadowVal.cssText

}catch(err){

}
}