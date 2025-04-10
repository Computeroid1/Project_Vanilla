//Select the display element
const display = document.getElementById('display');
  
// Helper function to update the display
function updateDisplay(value) {
  display.value += value;
}

// Clear the display
document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});

// Handle backspace (remove last character)
document.getElementById('backspace').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// Handle percentage calculation
document.getElementById('percent').addEventListener('click', () => {
  if (display.value) {
    try {
      display.value = eval(display.value) / 100;
    } catch (error) {
      display.value = 'Error';
    }
  }
});

// Handle number buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.textContent);
  });
});

// Handle operator buttons
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.textContent);
  });
});

// Handle equals button (evaluate the expression)
document.getElementById('equals').addEventListener('click', () => {
  if (display.value) {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
});