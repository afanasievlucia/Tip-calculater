let total = document.getElementById("total").value;
let serviceLevel = document.getElementsByName("radio-form");
let persons = document.getElementById("numPers");
let calculate = document.getElementById("calcBtn");
let tipValue = document.getElementById("value")

calculate.addEventListener("click", calc);

function calc () { 
    for (let i = 0; i < serviceLevel.length; i++) {
        if (serviceLevel[i].checked) {
            tipValue.innerHTML = (total * serviceLevel[i].value) / persons.value;
        }
    }
};