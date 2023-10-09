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

    // Muda o valores da calc
    updateScreen() {
        // os n° da operação atual dentro do TEXTO da operação atual
        this.currentOperationText.innerText += this.currentOperation;
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
            console.log("op:" + value);
        }
    });
});
