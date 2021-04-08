/*
          New Perspectives on HTML5 and CSS3, 7th Edition
          Assignment 3
          
          Sum Numbers
          Author: Dylan Chohan
          Date: April 1, 2021  
      
          Filename: Chohan-300314983-assignment3.js
         */

//This function will add the two inputted numbers
function AddValue() {
    var operand1 = document.getElementById("val1").value;
    var operand2 = document.getElementById("val2").value;

    inp1 = parseInt(operand1, 10);
    inp2 = parseInt(operand2, 10);

    inp1 = parseFloat(operand1, 10);
    inp2 = parseFloat(operand2, 10);

    var AddResult = inp1 + inp2;
    document.getElementById("numPlace").value = inp1 + ' + ' + inp2 + ' = ' + AddResult
}

//This function will multiply the two inputted numbers
function ProductValue() {
    var operand1 = document.getElementById("val1").value;
    var operand2 = document.getElementById("val2").value;

    inp1 = parseInt(operand1, 10);
    inp2 = parseInt(operand2, 10);

    inp1 = parseFloat(operand1, 10);
    inp2 = parseFloat(operand2, 10);

    var ProductResult = inp1 * inp2;
    document.getElementById("numPlace").value = inp1 + ' x ' + inp2 + ' = ' + ProductResult
}

//This function will divide the two inputted numbers
function DivideValue() {
    var operand1 = document.getElementById("val1").value;
    var operand2 = document.getElementById("val2").value;

    inp1 = parseInt(operand1, 10);
    inp2 = parseInt(operand2, 10);

    inp1 = parseFloat(operand1, 10);
    inp2 = parseFloat(operand2, 10);

    var DivideResult = inp1 / inp2;
    document.getElementById("numPlace").value = inp1 + ' / ' + inp2 + ' = ' + DivideResult
}

//This function will clear all the input/output boxes
function ClearValue() {
    document.getElementById("val1").value = '';
    document.getElementById("val2").value = '';
    document.getElementById("numPlace").value = '';
}