const numPressed = document.querySelectorAll("#pressedButton");
const textDiv = document.querySelector("#screen-text");
const prevText = document.querySelector("#prev-text");

let buffer0 = "";
let bufferS = "";
let currentOperator = "";
let storedResult = "";

function handleMath(currentOperator) {
    switch (currentOperator) {
        case "+":    
            if (storedResult != "") {
                storedResult += parseInt(buffer0);
                console.log(storedResult);
            } else {
                storedResult = parseInt(bufferS) + parseInt(buffer0);
                console.log(storedResult);
            }
            textDiv.innerText = storedResult;
            break;
        case "-":
            if (storedResult != "") {
                storedResult -= parseInt(buffer0);
                console.log(storedResult);
            } else {
                storedResult = parseInt(bufferS) - parseInt(buffer0);
                console.log(storedResult);
            }
            textDiv.innerText = storedResult;
            break;
        case "*":
            if (storedResult != "") {
                storedResult *= parseInt(buffer0);
                console.log(storedResult);
            } else {
                storedResult = parseInt(bufferS) * parseInt(buffer0);
                console.log(storedResult);
            }
            textDiv.innerText = storedResult;
            break;
        case "/":
            if (storedResult != "") {
                storedResult /= parseInt(buffer0);
                console.log(storedResult);
            } else {
                storedResult = parseInt(bufferS) / parseInt(buffer0);
                console.log(storedResult);
            }
            textDiv.innerText = storedResult;
            break;
    }
}

for (let i = 0; i < numPressed.length; i++) {
    let toPrint = numPressed[i];
    toPrint.addEventListener('click', function() {
        if (toPrint.value != "<-" && toPrint.value != "C") {
            if (!Number(toPrint.value) && toPrint.value != "=") {
                if (currentOperator != "") {
                    handleMath(currentOperator);
                    textDiv.innerText += toPrint.value;
                    prevText.innerText = textDiv.innerText;
                    buffer0 = "";
                } else {
                    textDiv.innerText += toPrint.value;
                    prevText.innerText = textDiv.innerText;
                    currentOperator = toPrint.value;
                    bufferS += buffer0;
                    buffer0 = "";
                } 
            } else if (toPrint.value == "=") {
                handleMath(currentOperator);
                prevText.innerText = textDiv.innerText;
                currentOperator = "";
                buffer0 = "";
            } else {
                textDiv.innerText += toPrint.value;
                buffer0 += parseInt(toPrint.value);
            }
            
        } else if (toPrint.value == "C") {
            textDiv.innerText = "";
            prevText.innerText = "";
            buffer0 = "";
            bufferS = "";
            storedResult = "";
        } else if (toPrint.value == "<-") {
            textDiv.innerText = "";
            buffer0 = "";
        }

    })
}
 // TODO: 0-errors and repeated blocks
