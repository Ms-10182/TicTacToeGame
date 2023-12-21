let mode = "X";
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerText !== "X" && buttons[i].innerText !== "O") {
            buttons[i].innerText = mode;
            mode = (mode === "X") ? "O" : "X";
        }
    });
}
