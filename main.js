let outputOne = document.getElementById("output-one"),
    outputTwo = document.getElementById("output-two"),
    btnAction = document.getElementsByClassName("action"),
    btnNumber = document.getElementsByClassName("number"),
    reset = document.getElementById("reset"),
    equal = document.getElementById("equal"),
    cancel =  document.getElementById("cancel");

//  add a event on all number button
for (const item of btnNumber) {
    item.addEventListener("click", (e) => {        
        outputOne.textContent += e.target.textContent;
    });
}

//  add a event on all action button
for (const item of btnAction) {
    item.addEventListener("click", (e) => {
        outputOne.textContent += e.target.textContent;
    });
}

//  reset button
reset.addEventListener("click", () => {
    outputOne.textContent = "";
    outputTwo.textContent = "";
});

//  equal button
equal.addEventListener("click", () =>{
    outputTwo.textContent = outputOne.textContent + "=";
    outputOne.textContent = eval(outputOne.textContent);
});

//  cancel button
cancel.addEventListener("click", () =>{
    let size = outputOne.textContent.length - 1;
    outputOne.textContent = outputOne.textContent.slice(0,size);
});