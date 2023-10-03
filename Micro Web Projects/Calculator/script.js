document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded waits for the complete page to be loaded
    // Get references to the calculator elements
    const display = document.querySelector(".current");
    const previous = document.querySelector(".previous");
    const buttons = document.querySelectorAll(".calculator-grid button");
  
    // Initialize variables to store the current expression
    let currentExpression = "";
    let previousExpression = "";
  
    // Add click event listeners to the buttons
    buttons.forEach(button => {
      button.addEventListener("click", function (event) {
        
        const buttonValue = event.target.getAttribute(`data-${event.target.getAttribute("data-type")}`);
  
        switch (event.target.getAttribute("data-type")) {
          case "operator":
            currentExpression += buttonValue;
            display.textContent = currentExpression;
            break;
  
          case "number":
            currentExpression += buttonValue;
            display.textContent = currentExpression;
            break;
  
          case "equals":
            try {
              previousExpression = currentExpression;
              const result = eval(currentExpression);
              previous.textContent = previousExpression;
              display.textContent = result;
              currentExpression = result.toString(); 
            } catch (error) {
              display.textContent = "Error";
              currentExpression = ""; 
            }
            break;
  
          case "point":
            currentExpression += buttonValue;
            display.textContent = currentExpression;
            break;
          case "delete":
            currentExpression = currentExpression.slice(0,-1)
            display.textContent = currentExpression;
            break;
        
        case "allClear":
            previous.textContent = ""
            display.textContent = "";
            break;

          default:
            break;
        }
      });
    });
  });
  