 function addToScreen(value) {
            let screen = document.getElementById('display');

            if (screen.value == "0") {
                screen.value = value;
            } else {
                screen.value += value;
            }
        }

        // STEP 2: Calculate result
        function getResult() {
            let screen = document.getElementById('display');
            let result = eval(screen.value.replace('×', '*'));
            screen.value = result;
        }

        // STEP 3: Clear screen
        function clearAll() {
            document.getElementById('display').value = "0";
        }