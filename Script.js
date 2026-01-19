const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn, .btn-operator');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');

let expression = "";

// Handle number + operator buttons
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

// Clear button
clearBtn.addEventListener('click', () => {
  expression = "";
  display.value = "";
});

// Equals button
equalBtn.addEventListener('click', () => {
  try {
    expression = eval(expression).toString();
    display.value = expression;
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
});
