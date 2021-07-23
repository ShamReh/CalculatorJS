"use strict";

const entry1 = document.querySelector("#entry1");
const entry2 = document.querySelector("#entry2");

const result = document.querySelector("#result");

const buttons = document.querySelectorAll("div#calculator > button");

const calculate = (e) => {
    const operator = e.target.innerText;

    switch (operator) {
        case 'C':
            entry1.value = "0";
            entry2.value = "0";
            result.value = "0";
            break;
        case '+':
            result.value = Number.parseFloat(entry1.value) + Number.parseFloat(entry2.value);
            break;
        case '-':
            result.value = Number.parseFloat(entry1.value) - Number.parseFloat(entry2.value);
            break;
        case '*':
            result.value = Number.parseFloat(entry1.value) * Number.parseFloat(entry2.value);
            break;
        case '/':
            result.value = Number.parseFloat(entry1.value) / Number.parseFloat(entry2.value);
            break;
    }
}

// listens for a 'click' event on each button -> calling the calculate function when triggered

buttons.forEach(button => button.addEventListener('click', calculate));
