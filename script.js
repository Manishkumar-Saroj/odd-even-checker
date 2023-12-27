var intervalId; // Variable to store the interval ID

function check() {
    var numInput = document.getElementById("numInput");
    var resultElement = document.getElementById("result");
    var num = numInput.value.trim();

    if (num === "") {
        // If input is empty, clear the result
        resultElement.innerHTML = "";
        resultElement.style.backgroundColor = "";
    } else if (num % 2 == 0) {
        resultElement.innerHTML = "Even Number";
        resultElement.style.backgroundColor = "lightcoral";
    } else {
        resultElement.innerHTML = "Odd Number";
        resultElement.style.backgroundColor = "lightgreen";
    }
}

function clearInput() {
    var numInput = document.getElementById("numInput");
    var resultElement = document.getElementById("result");

    numInput.value = '';
    resultElement.innerHTML = '';
    resultElement.style.backgroundColor = '';
}

function handleScroll(event) {
    var numInput = document.getElementById("numInput");
    var delta = event.deltaY;

    if (delta > 0) {
        // Scroll down, decrease the number
        numInput.stepDown();
    } else {
        // Scroll up, increase the number
        numInput.stepUp();
    }

    // Trigger the check function after updating the value
    check();
}

function startDecrement() {
    intervalId = setInterval(decrementValue, 100);
}

function startIncrement() {
    intervalId = setInterval(incrementValue, 100);
}

function stopChange() {
    clearInterval(intervalId);
}

function incrementValue() {
    var numInput = document.getElementById("numInput");
    numInput.stepUp();
    check();
}

function decrementValue() {
    var numInput = document.getElementById("numInput");
    numInput.stepDown();
    check();
}
