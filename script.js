function appendChar(char) {
    document.getElementById('result').value += char;
}

function deleteLastChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = document.getElementById('result').value;
    var output;

    try {
        output = eval(result);
    } catch (error) {
        output = 'Error';
    }

    document.getElementById('result').value = output;
}
