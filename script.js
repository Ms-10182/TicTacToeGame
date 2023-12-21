let mode = "X";
let buttons = document.querySelectorAll(".gameButton");
let winCondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerText !== "X" && buttons[i].innerText !== "O") {
            buttons[i].innerText = mode;
            mode = (mode === "X") ? "O" : "X";
        }
    });
}

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    }
});
