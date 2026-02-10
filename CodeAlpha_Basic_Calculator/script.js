const display = document.querySelector("#display");

//Append value
function appendValue(value) {
  const current = display.innerText;
  const lastChar = current.slice(-1);

    // Prevent multiple operators together
  if ("+-*/".includes(lastChar) && "+-*/".includes(value)) return;
 
  // Prevent multiple dots in a numberif (value === "." && lastChar === ".") return;
  if (current === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
//clear display
function clearDisplay() {
  display.innerText = "0";
}

//delete last
function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

//calculate
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

//Keyboard support
document.addEventListener("keydown", (e) =>{
    if("0123456789+-*/.".includes(e.key)) appendValue(e.key);
    if(e.key ==="Enter") calculate();
    if(e.key ==="Backspace") deleteLast();
    if(e.key === "Escape") clearDisplay();
});
