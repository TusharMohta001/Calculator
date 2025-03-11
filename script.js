const add = document.querySelector(".add");
const addButton = document.querySelector("#add");
const div = document.querySelector(".div");
const divButton = document.querySelector("#div");
const equal = document.querySelector(".equal");
const equalButton = document.querySelector("#equal");
const input = document.querySelector("#input");
const mul = document.querySelector(".mul");
const mulButton = document.querySelector("#mul");
const revalue = document.querySelector("#revalue");
const clearButton = document.querySelector("#clear");
const sub = document.querySelector(".sub");
const subButton = document.querySelector("#sub");
input.focus();
document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem("afterValue");
    localStorage.removeItem("currentValue");
});

// -----> Keyboard Event <-----
document.addEventListener("keydown", function (e) {
    e.preventDefault();
    const key = e.key;
    if (key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === "0") {
        input.placeholder = "";
        input.value += key;
    }


    if (key === "c" || key === "C") {
        input.placeholder = "";
        input.value = "";
        localStorage.removeItem("afterValue");
        localStorage.removeItem("currentValue");
        revalue.textContent = "";
    }

    if (key === "+" || key === "-" || key === "*" || key === "/") {
        e.preventDefault();
        input.placeholder = "";

        const afterValue = localStorage.getItem("afterValue");
        const currentValue = input.value;
        const Operator = localStorage.getItem("currentValue");
        if (!currentValue) {
            revalue.textContent = afterValue ? afterValue + " " + key : "";
            localStorage.setItem("currentValue", key);
            return;
        }

        if (!afterValue) {
            revalue.textContent = currentValue + " " + key;
            localStorage.setItem("afterValue", currentValue);
        } else {
            let result = "";
            if (Operator === "+") {
                result = parseFloat(afterValue) + parseFloat(currentValue);
            }
            if (Operator === "-") {
                result = parseFloat(afterValue) - parseFloat(currentValue);
            }
            if (Operator === "*") {
                result = parseFloat(afterValue) * parseFloat(currentValue);
            }
            if (Operator === "/") {
                result = parseFloat(currentValue) !== 0
                    ? parseFloat(afterValue) / parseFloat(currentValue)
                    : "Error: Division by zero";
            }
            localStorage.setItem("afterValue", result.toString());
            revalue.textContent = result + " " + key;
        }

        localStorage.setItem("currentValue", key);
        input.value = "";
    }


    if (key === "=" || key === "Enter") {
        e.preventDefault();
        const afterValue = localStorage.getItem("afterValue");
        const operation = localStorage.getItem("currentValue");
        const currentValue = input.value;

        if (!operation || !currentValue) return; // Prevent invalid calculations

        let result = "";
        if (operation === "+") {
            result = parseFloat(afterValue) + parseFloat(currentValue);
            revalue.textContent = `${afterValue} + ${currentValue} = ${result}`;
        }
        if (operation === "-") {
            result = parseFloat(afterValue) - parseFloat(currentValue);
            revalue.textContent = `${afterValue} - ${currentValue} = ${result}`;
        }
        if (operation === "*") {
            result = parseFloat(afterValue) * parseFloat(currentValue);
            revalue.textContent = `${afterValue} * ${currentValue} = ${result}`;
        }
        if (operation === "/") {
            result = parseFloat(currentValue) !== 0
                ? parseFloat(afterValue) / parseFloat(currentValue)
                : "Error: Division by zero";
            revalue.textContent = result;
        }
        input.placeholder = result;
        input.value = "";
        localStorage.removeItem("afterValue");
        localStorage.removeItem("currentValue");

    }


    // Backspace functionality
    if (key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
});



// -----> Button Event <-----
document.addEventListener("click", function (e) {
    const button = e.target;
    const type = button.dataset.type;
    const value = button.textContent;
    if (type === "clear") {
        input.placeholder = "";
        input.value = "";
        localStorage.removeItem("afterValue");
        localStorage.removeItem("currentValue");
        revalue.textContent = "";
    }
    if (type === "1" || type === "2" || type === "3" || type === "4" || type === "5" || type === "6" || type === "7" || type === "8" || type === "9" || type === "0") {
        input.placeholder = "";
        input.value += value;
    }
    if (type === "+" || type === "-" || type === "*" || type === "/") {
        e.preventDefault();
        input.placeholder = "";
        const afterValue = localStorage.getItem("afterValue");
        const currentValue = input.value;
        const Operator = localStorage.getItem("currentValue");
        if (!currentValue) {
            revalue.textContent = afterValue ? afterValue + " " + type : "";
            localStorage.setItem("currentValue", type);
            return;
        }

        if (!afterValue) {
            revalue.textContent = currentValue + " " + type;
            localStorage.setItem("afterValue", currentValue);
        } else {
            let result = "";
            if (Operator === "+") {
                result = parseFloat(afterValue) + parseFloat(currentValue);
            }
            if (Operator === "-") {
                result = parseFloat(afterValue) - parseFloat(currentValue);
            }
            if (Operator === "*") {
                result = parseFloat(afterValue) * parseFloat(currentValue);
            }
            if (Operator === "/") {
                result = parseFloat(currentValue) !== 0
                    ? parseFloat(afterValue) / parseFloat(currentValue)
                    : "Error: Division by zero";
            }
            localStorage.setItem("afterValue", result.toString());
            revalue.textContent = result + " " + type;
        }

        localStorage.setItem("currentValue", type);
        input.value = "";
    }
    if (type === "=" || type === "Enter") {
        e.preventDefault();
        const afterValue = localStorage.getItem("afterValue");
        const operation = localStorage.getItem("currentValue");
        const currentValue = input.value;

        if (!operation || !currentValue) return; 

        let result = "";
        if (operation === "+") {
            result = parseFloat(afterValue) + parseFloat(currentValue);
            revalue.textContent = `${afterValue} + ${currentValue} = ${result}`;
        }
        if (operation === "-") {
            result = parseFloat(afterValue) - parseFloat(currentValue);
            revalue.textContent = `${afterValue} - ${currentValue} = ${result}`;
        }
        if (operation === "*") {
            result = parseFloat(afterValue) * parseFloat(currentValue);
            revalue.textContent = `${afterValue} * ${currentValue} = ${result}`;
        }
        if (operation === "/") {
            result = parseFloat(currentValue) !== 0
                ? parseFloat(afterValue) / parseFloat(currentValue)
                : "Error: Division by zero";
            revalue.textContent = result;
        }
        input.placeholder = result;
        input.value = "";
        localStorage.removeItem("afterValue");
        localStorage.removeItem("currentValue");
    }

});


