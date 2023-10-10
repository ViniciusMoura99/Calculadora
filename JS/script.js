/* Seleção de elemntos */
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

//console.log(buttons);

/* Lógica da aplicação */
class Calculator {
    /* elementos passados no constructor, depois os atributos com this */
    constructor(previousOperationText,currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        /* valor impresso na tela */
        this.currentOperation = "";
        /* valor que o usuário vai digitar */
    }
    // adiciona o digito da calc 
    addDigit(digit) {
        // checkar se tem ponto ou não
    if(digit === "." && this.currentOperationText.innerText.includes(".")){
        return;
    }
        // console.log(digit);
        this.currentOperation = digit;
        this.updateScreen();
    }

    // processar todas as operações
    processOperation(operation) {
        console.log(operation);   

        // checkar se o valor atual é vazio
        if(this.currentOperationText.innerText === "" && operation !== "C"){
            //muda a opreção
            if(this.previousOperationText.innerText !== ""){ 
                this.changeOperation(operation);
            }
            return;
        }


    
    // let declara a variável,, this para referenciar objeto ou instancia,, innerText fala com op HTML
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText; // pegar o valor atual e o anterior

    switch(operation){
        case "+":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "-":
            operationValue = previous - current
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "*":
            operationValue = previous * current
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "/":
            operationValue = previous / current
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "DEL":
            this.processDelOperator();
            break;
        case "CE":
            this.processClearOperation();
            break;
        case "C":
            this.processClearAllOperation();
            break;
        case "=":
            this.processEqualOperation();
            break;
        default:
            return;
    }

    }

    // Muda o valores da calc
    updateScreen(
        operationValue = null, // resultado de algo do meu swtich
        operation = null, // oq o usuário envia quando acessa o método processOperation
        current = null, // resultado das minhas declarações 
        previous = null
    ){
        console.log(operationValue, operation, previous, current);
        if(operationValue === null){ 
            this.currentOperationText.innerText += this.currentOperation; // os números da operação atual dentro do TEXTO da operação atual
    }      else { // checkar se o valor é zero
        if(previous === 0){
            operationValue = current;
        }
        // add o valor para o anterior value
        this.previousOperationText.innerText = `${operationValue} ${operation}`; // incorpora valores dentro de uma string, no caso pra subir o previousValue na caluladora de fato 
        this.currentOperationText.innerText = "";
    }
}
// mudar o operador
changeOperation(operation){
    const mathOperations = ["*", "/", "+", "-"]
    
    if(!mathOperations.includes(operation)){
        return;
    }

    this.previousOperationText.innerText =
     this.previousOperationText.innerText.slice(0, -1) + operation;
}

//deletar o ultimo digito
    processDelOperator(){ 
        this.currentOperationText.innerText = 
        this.currentOperationText.innerText.slice(0, -1);
    }

//Apagar meu valor atual
    processClearOperation(){
        this.currentOperationText.innerText = "";
}
//Apagar tudo 
    processClearAllOperation(){
        this.currentOperationText.innerText ="";
        this.previousOperationText.innerText =""; 
}
// mostrar o resultado atual 
    processEqualOperation(){
        const operation = previousOperationText.innerText.split("")[1];
        this.processOperation(operation);
    }

}

const calc = new Calculator (previousOperationText, currentOperationText);

/* eventos */

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        /* || operador lógico OU /
        /* operador + converte em número */
        /* "." está simbolizando se é caractere/string 
        pois ele tem que ser número ou caractere
        basicamente: o if vai verificar se o value é n° ou caractere*/
        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});
