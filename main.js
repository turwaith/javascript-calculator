const CALCUL = document.getElementById("calcul"),
    RESULT = document.getElementById("result"),
    HISTORY = document.getElementById("history"),
    BTN_ACTION = document.getElementsByClassName("action"),
    BTN_NUMBER = document.getElementsByClassName("number"),
    RESET = document.getElementById("reset"),
    EQUAL = document.getElementById("equal"),
    CANCEL =  document.getElementById("cancel"),
    PI = document.getElementById("pi"),
    EXP = document.getElementById("exp");

//  add a event on all number button
for (const item of BTN_NUMBER) {
    item.addEventListener("click", (e) => {        
        CALCUL.textContent += e.target.textContent;
    });
}

//  add a event on all action button
for (const item of BTN_ACTION) {
    item.addEventListener("click", (e) => {
        CALCUL.textContent += e.target.textContent;
    });
}

//  RESET button
RESET.addEventListener("click", () => {
    CALCUL.textContent = "";
    RESULT.textContent = "";
});

//  EQUAL button
EQUAL.addEventListener("click", () =>{
    let rgx = /[*\-\+\/]/,
        calcul = eval(CALCUL.textContent);

    //  test if calcul line is empty or doesn't include calcul operator
    if(CALCUL.textContent === "" || !rgx.test(CALCUL.textContent)) return;
    // add calcul to history
    if(RESULT.textContent != "" && RESULT.textContent != CALCUL.textContent+"=")
        HISTORY.textContent = RESULT.textContent + eval(RESULT.textContent.substring(0,RESULT.textContent.length-1));

    RESULT.textContent = CALCUL.textContent + "=";
    CALCUL.textContent = calcul;        
});

//  CANCEL button
CANCEL.addEventListener("click", () =>{
    let size = CALCUL.textContent.length - 1;
    CALCUL.textContent = CALCUL.textContent.slice(0,size);
});

//  PI button
PI.addEventListener("click", (e) =>{
    let operators = ["+","-","*","/"],
        lastChar = "",
        isLineEmpty = false;

    if(CALCUL.textContent.length > 0)
        lastChar = CALCUL.textContent[CALCUL.length-1];
    else
        isLineEmpty = true;
    
    if(operators.includes(lastChar) || isLineEmpty)
        CALCUL.textContent += Math.PI;    
});

// EXP button


/**
 * @param {string} a The first string to add
 * @param {string} b The second string to add
 * @return {string} Return the string 'a' + string 'b'
 */
