 function calculateSum() {
            let number1 = document.getElementById("num1").value;
            let number2 = document.getElementById("num2").value;
            let result = document.getElementById("resultNum");

            if (number1 === "") {
                result.textContent = "Please enter number 1";
            }
            else if (number2 === "") {
                result.textContent = "Please enter number 2";
            }
            else {
                let sum = parseInt(number1) + parseInt(number2);
                result.textContent = sum;
            }
        }