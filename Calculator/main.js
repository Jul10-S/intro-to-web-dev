const numPressed = document.querySelectorAll("#numP");
const textDiv = document.querySelector(".screen-text");
const prevText = document.querySelector(".prev-text");

let buffer0 = "";
let bufferS = "";
let prevOperator = "";
let nextOperator = "";


function handleMath(usedOperator) {
    switch (usedOperator) {
        case "+": 
            textDiv.innerText = parseInt(bufferS) + parseInt(buffer0);
            return parseInt(bufferS) + parseInt(buffer0)
            break;
        case "-":
            textDiv.innerText = parseInt(bufferS) - parseInt(buffer0);
            return parseInt(bufferS) - parseInt(buffer0)
            break;
        case "*":
            textDiv.innerText = parseInt(bufferS) * parseInt(buffer0);
            return parseInt(bufferS) * parseInt(buffer0)
            break;
        case "/":
            textDiv.innerText = parseInt(bufferS) / parseInt(buffer0);
            return parseInt(bufferS) / parseInt(buffer0)
            break;
    } 
}

function handleSymbol(valueT) {
    if (valueT == "+" || valueT == "-" || valueT == "*" || valueT == "/" || valueT == "pi" || valueT == "log"  || valueT == "pow" || valueT == "sqrt") {   
        if (bufferS != "") {
            nextOperator += valueT;             
            bufferS = handleMath(prevOperator);
            buffer0 = "";
            prevText.innerText = "";
            textDiv.innerText = "";
        } else {
            bufferS +=  buffer0;
            prevOperator += valueT;
            buffer0 = "";
            textDiv.innerText = "";
        }
    } else {
        textDiv.innerText += valueT;
        buffer0 += valueT;
    }
}

for (let i = 0; i < numPressed.length; i++) {
    let toPrint = numPressed[i];
    toPrint.addEventListener('click', function() {
        if (toPrint.value != "<-" && toPrint.value != "C") {
            if (toPrint.value != "=") {
                handleSymbol(toPrint.value);
            } else {
                prevText.innerText = `${bufferS} ${prevOperator} ${buffer0}`;
                if (nextOperator != "") {
                    handleMath(nextOperator);
                    prevText.innerText = `${bufferS} ${nextOperator} ${buffer0}`;
                } else {
                    handleMath(prevOperator);
                    prevText.innerText = `${bufferS} ${prevOperator} ${buffer0}`;
                }
                 
            }
    } else if (toPrint.value == "C") {
        textDiv.innerText = "";
        prevText.innerText = "";
        buffer0 = "";
        bufferS = "";
        prevOperator = "";
        nextOperator = "";
    } else if (toPrint.value == "<-") {
        textDiv.innerText = "";
        buffer0 = "";
    }
})
}