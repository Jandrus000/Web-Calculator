
let operand1;
let equation;
let operand2;
function press(value){
    if(value=='clear'){
        input.innerHTML='_'
        operand1 = undefined
        operatorSymbol = undefined;
        operand2 = undefined;
    }else{
        if(!isNaN(input.innerHTML)) {
            input.innerHTML += value;
        }else{
            input.innerHTML = value;
        }
    }
}

function operator(symbol){
    if (operand1 === undefined && input.innerHTML.trim() != '_'){
        operand1 = input.innerHTML
        if(symbol == '+'){
            equation = (x,y) => { return x + y;}
        }
        else if(symbol == '-'){
            equation = (x,y) => { return x - y;}
        }
        else if(symbol == '*'){
            equation = (x,y) => { return x * y;}
        }
        else if(symbol == '/'){
            equation = (x,y) => { return x / y;}
        }
        input.innerHTML = symbol;
    } else if(operand1 !== undefined && equation !== undefined){
        if(symbol == '+'){
            equation = (x,y) => { return x + y;}
        }
        else if(symbol == '-'){
            equation = (x,y) => { return x - y;}
        }
        else if(symbol == '*'){
            equation = (x,y) => { return x * y;}
        }
        else if(symbol == '/'){
            equation = (x,y) => { return x / y;}
        }
        input.innerHTML = symbol;
    }
}

function output(){
    if(input.innerHTML != '_' && operand1 != undefined){
        operand2 = input.innerHTML;
        let myOutput = equation(Number(operand1),Number(operand2));
        input.innerHTML = myOutput;
        operand1 = myOutput;
        operand2 = undefined;
    }
}