let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-btn"),
    decimalBtn = document.getElementById("decimal"),
    result = document.getElementById("result"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";

for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function(e){
        numberPress(e.target.textContent);

    });
}


for(let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
        operationBtn.addEventListener("click", function(e){
            operationPress(e.target.id);
         });
    }

for(let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
        clearBtn.addEventListener("click", function(e){
        clear(e.target.textContent);
        });
    }

decimalBtn.addEventListener("click", decimal);


  function numberPress(number) {
        if ((MemoryNewNumber) || (display.value === "0")) {
             display.value = number;
             MemoryNewNumber = false; 
        }     
     else display.value += number;
    }
       

       function operationPress(op) {
    
        switch (MemoryPendingOperation) {

        case 'plus':
             MemoryCurrentNumber += parseFloat(display.value);
        break;
        
        case 'munus':
            MemoryCurrentNumber -= +display.value;
        break;

        case 'multiply':
            MemoryCurrentNumber *= +display.value;
        break;

        case 'devide':
            MemoryCurrentNumber /= +display.value;
        break;

        case 'rate': 

            MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, +display.value);
            console.log(MemoryCurrentNumber);
        break;

        default:
            MemoryCurrentNumber = +display.value;
         break;
        }
        
       display.value = MemoryCurrentNumber;
       MemoryPendingOperation = op;
       MemoryNewNumber = true;

        }
  

  function decimal() {                
    if(display.value.indexOf(".") === -1) {
           display.value+= ".";
            }
        }
   
     function clear(id) {     
           if(id === "c") {
            display.value = "0";
            MemoryNewNumber = true;
            MemoryCurrentNumber = 0,
            MemoryPendingOperation = "";
        }
    }
  
  
  
