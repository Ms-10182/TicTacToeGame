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
        setTimeout(()=>{
            checkWinning();
        },0);
    }); 
}

const checkWinning=()=>{
    for(pattern of winCondition){
        if(buttons[pattern[0]].innerText=="X" || buttons[pattern[0]].innerText=="O"){   //checking if button is not compared when it is empty
            if(buttons[pattern[0]].innerText==buttons[pattern[1]].innerText &&
                buttons[pattern[1]].innerText==buttons[pattern[2]].innerText){          //checking if 3 same symbol are in line or not
                    for(a of buttons){
                        a.disabled = true;                                              // when winner found disabling all the buttons
                    }
                    alert(`${buttons[pattern[1]].innerText} is the winner`);
            }
        }
    }
}

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
        buttons[i].disabled=false;
    }
});

