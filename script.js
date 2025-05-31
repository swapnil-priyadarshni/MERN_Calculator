function appendValue(value) {
  const display = document.getElementById('display');
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '0';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1) || '0';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
