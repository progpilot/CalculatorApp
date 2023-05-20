let theme = 'light'; // Default theme: 'light'

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function changeTheme() {
    theme = document.getElementById("themeSelect").value;
    document.body.className = `${theme}-theme`;
}

document.body.classList.add(`${theme}-theme`);
