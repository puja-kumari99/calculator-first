let display = document.getElementById("display");

document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        let value = button.innerText;

        if (value === "=") display.value = eval(display.value);
        else if (value === "C") display.value = "";
        else display.value += value;
    };
});





