/* Seleção de elemntos */
const previousOperationText = document.querySelector("#orevious-opration");
const currentOperationText = document.querySelector("#current-opration");
const buttons = document.querySelectorAll("#buttons-container button");

console.log(buttons);

/* Lógica da aplicação */
class Calculator {

}

/* eventos */

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        /* || operador lógico OU */
        if(+value >= 0 || value === ".") {
            console.log(value);
        } else {
            console.log("op:" + value);
        }

    });
});