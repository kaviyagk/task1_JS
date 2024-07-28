document.querySelector("h2").innerHTML = "Hello World";

function addNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result1").innerHTML = "Result: " + result;
}

function calculateSqrt() {
    let num = Number(document.getElementById("numSqr").value);
    let result = Math.sqrt(num).toFixed(3);
    document.getElementById("result2").innerHTML = "Result: " + result;
}

function checkEvenOdd() {
    let num = Number(document.getElementById("numEvenOdd").value);
    if (num % 2 === 0) {
        document.getElementById("result3").innerHTML = "Number is even";
    } else {
        document.getElementById("result3").innerHTML = "Number is odd";
    }
}

function generateRandomNumber() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result4").innerHTML = "Random Number: " + randomNum;
}

function findLargest() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    let numC = Number(document.getElementById("numC").value);
    let largest = Math.max(numA, numB, numC);
    document.getElementById("result5").innerHTML = "Largest Number: " + largest;
}

function printName() {
    let name = document.getElementById("userName").value;
    let names = "";
    for (let i = 0; i < 20; i++) {
        names += name + "<br>";
    }
    document.getElementById("result6").innerHTML = names;
}

function checkLastDigit() {
    let numD = Number(document.getElementById("numD").value);
    let numE = Number(document.getElementById("numE").value);
    if (numD % 10 === numE % 10) {
        document.getElementById("result7").innerHTML = "Yes, they have the same last digit!";
    } else {
        document.getElementById("result7").innerHTML = "No, they don't have the same last digit!";
    }
}

function replaceCharacter() {
    let str = document.getElementById("stringInput").value;
    let oldChar = document.getElementById("oldCharacter").value;
    let newChar = document.getElementById("newCharacter").value;
    let replacedStr = str.split(oldChar).join(newChar);
    document.getElementById("result8").innerHTML = "Replaced String: " + replacedStr;
}

function appendArrays() {
    let array1 = document.getElementById("array1").value.split(",");
    let array2 = document.getElementById("array2").value.split(",");
    let concatenatedArray = array1.concat(array2);
    document.getElementById("result9").innerHTML = "Result: " + concatenatedArray.join(", ");
}