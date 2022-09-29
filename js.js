const words = [
    "Playing",
    "Football",
    "Code",
    "Elnono",
    "Alahly",
    "Egypt",
    "Html",
    "Youtube",
    "Mobile",
    "Facebook",
    "Iphone",
    "Photo",
    "Game",
    "laptop",
    "document",
    "label",
    "Programmer",
    "Messi",
    "Calculator",
    "Calendar"
  
  
  ];

  const lvls = {
    "Easy": 8,
    "Normal": 5,
    "Hard": 3
  };

   

  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message.select ");

  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector(".input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");
  let defaultLevelSeconds;
  function updateLevel(){
    let selectBox = document.getElementById("diff");
   let defaultLevelName = selectBox.value;
   defaultLevelSeconds = lvls[defaultLevelName];

    lvlNameSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
  }


  scoreTotal.innerHTML = words.length;
  
  input.onpaste = function () {
    return false;
  }
  
  startButton.onclick = function () {

     
    this.remove();
    input.focus();
    // Generate Word Function
    genWords();
  }
  
  function genWords() {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove WordFrom Array
    words.splice(wordIndex, 1);
    // Show The Random Word
    theWord.innerHTML = randomWord;
    upcomingWords.innerHTML = '';

    // Empty Upcoming Words
    // Generate Words
    for (let i = 0; i < words.length; i++) {
      // Create Div Element
      let div = document.createElement("div");
      let txt = document.createTextNode(words[i]);
      div.appendChild(txt);

    }
    // Call Start Play Function
    startPlay();
  }
  function tryagain(){
    window.location.reload();
  }
  
  function startPlay() {
  
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
      timeLeftSpan.innerHTML--;
      if (timeLeftSpan.innerHTML === "0") {
        // Stop Timer
        clearInterval(start);
        // Compare Words
        if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
          // Empty Input Field
          input.value = '';
          // Increase Score
          scoreGot.innerHTML++;
          if (words.length > 0) {
            // Call Generate Word Function
            genWords();
          } 
     
          else {
            let span = document.createElement("span");
            span.className = 'good';
            let spanText = document.createTextNode("Congratz");
            span.appendChild(spanText);
            finishMessage.appendChild(span);
            // Remove Upcoming Words Box
            upcomingWords.remove();

          }
        }
        
         else {
          let span = document.createElement("span");
          span.className = 'bad';
          let spanText = document.createTextNode("Game Over");

        
          span.appendChild(spanText);
          finishMessage.appendChild(span);
        }
      }
    }, 1000);
  }

document.addEventListener("DOMContentLoaded", function(event) {
    updateLevel();
});
