let numbers = document.querySelectorAll(".number");
let numbers123 = document.querySelectorAll(".number");
let screen = document.querySelector(".result");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equal");
let del = document.querySelector(".delete");
let num = 0;

let separator;

function clearAll(){
    screen.textContent = "";
    num = 0;
}

clear.addEventListener("click", () => {
    clearAll()
});


numbers.forEach(number => {
    number.addEventListener("click", function(){
        num = "";
        num = screen.textContent += this.textContent;
    });
});

/* 
CRIAR MENSAGÆNS DE ERROS PARA INSERIR UM SIMBOLO APOS O PONTO
DOIS SIMBOLOS SEGUIDOS
*/

del.addEventListener("click", ()=>{num = num.substring(0, num.length - 1); screen.textContent = num;})

operators.forEach(operator => {
    operator.addEventListener("click", function(){

        //CHECKS IF THERE IS ALREADY ANY OPERATOR
        for(let i = 0; i < operators.length; i++){
            if(num.includes(operators[i].textContent)){
                finalEqual()
            }
        }

            num = screen.textContent += this.textContent;
            separator = this.textContent;
            oper = this.textContent;

    });
});

function checkNum(numb){
    numb = numb.toString();
    firstChar = numb.indexOf(".");
    lastChar = numb.lastIndexOf("."); 
    console.log(firstChar, lastChar);
    if(firstChar == -1){
        return;
    }
    else if(firstChar != lastChar){
        return Number(numb) = numb.slice(0,lastChar) + numb.slice(lastChar+1);
    }
    
}

// console.log(checkNum("123.12.12"))

function finalEqual(num){
    sumMade = num.split(separator)
    sumMade[0] = Number(sumMade[0]);
    sumMade[1] = Number(sumMade[1]);
    
    let finalResult = operate(sumMade[0], separator, sumMade[1]);
    console.log(finalResult) 
    screen.textContent = finalResult;
    finalResult = num;
}
//DO THE MATH
equals.addEventListener("click", ()=>{
    finalEqual(num)
});



function operate(numb1, oper, numb2){
    let result;
    numb1 = Number(numb1);
    numb2 = Number(numb2)
    switch(oper){
        case("+"):
        result = numb1 + numb2;
        break;

        case("-"):
        result = numb1 - numb2;
        break;

        case("/"):
        if(numb1 == 0 || numb2 == 0){
            result = "What??"
        } else{
        result = numb1 / numb2;
        }
        break;

        case("*"):
        result = numb1 * numb2;
        break;
    }
    return result
}
