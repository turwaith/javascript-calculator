const CALCUL = document.getElementById("calcul"),
    RESULT = document.getElementById("result"),
    HISTORY = document.getElementById("history"),
    BTN_ACTION = document.getElementsByClassName("action"),
    BTN_NUMBER = document.getElementsByClassName("number"),
    RESET = document.getElementById("reset"),
    EQUAL = document.getElementById("equal"),
    CANCEL =  document.getElementById("cancel"),
    PI = document.getElementById("pi");

//  add a event on all number button
for (const item of BTN_NUMBER) {
    item.addEventListener("click", (e) => {        
        CALCUL.textContent += e.target.textContent;
    });
}

//  add a event on all action button
for (const item of BTN_ACTION) {
    item.addEventListener("click", (e) => {
        if(CALCUL.textContent === "") return;
        else{
            let lastChar = CALCUL.textContent.slice(-1);
                operators = ["+","-","*","/","^"],
                operator = /[xy]/.test(e.target.textContent) ? "^" :
                    /,/.test(e.target.textContent) ? "." : e.target.textContent;
    
            if(operators.includes(lastChar))
                CALCUL.textContent = CALCUL.textContent.slice(0,-1)+
                    operator;
            else
                CALCUL.textContent += operator;
        }
    });
}

//  RESET button
RESET.addEventListener("click", () => {
    CALCUL.textContent = "";
    RESULT.textContent = "";
});

//  EQUAL button
EQUAL.addEventListener("click", () =>{
    let rgx = /[\*\-\+\/\^]+/,
        calcul = eval(CALCUL.textContent.replace("^","**"));

    //  test if calcul line is empty or doesn't include calcul operator
    if(CALCUL.textContent === "" || !rgx.test(CALCUL.textContent)) return;

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
    let operators = ["+","-","*","/","^"],
        lastChar = "",
        isLineEmpty = false,
        calculSize = CALCUL.textContent.length;

    if(calculSize > 0)
        lastChar = CALCUL.textContent[calculSize-1];
    else
        isLineEmpty = true;

    if(operators.includes(lastChar) || isLineEmpty)
        CALCUL.textContent += Math.PI;    
});