let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#newgame-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 
let count = 0;



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
    
]

const resetgame = () => {
    turnO = true;
    count = 0
    enableboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        
        if(turnO){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false ;
            
        
        } else {
            box.innerText = "X";
            box.style.color= "red";
            turnO = true;
            

    
        }
    
        box.disabled = true;

       

        checkWinner();
        count++
       if (count === 9 && showWinner != true ){
            drawmatch();
        }
    })
});
const drawmatch = () => {
    msg.innerText = " This Match is a Draw ";
    msgcontainer.classList.remove("hide");
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText= `congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () =>{
    for (pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if ( pos1val != "" && pos2val != "" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val){
                 showWinner(pos1val)
            }
        }
    }

    

};

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);