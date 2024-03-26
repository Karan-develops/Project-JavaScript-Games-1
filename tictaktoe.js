let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let newbtn=document.querySelector("#newbtn");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;
const winningPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgc.classList.add("hide");
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgc.classList.remove("hide");
    disableBoxes();
}

const drawGame=()=>{
    msg.innerText=`The game is draw`;
}

const checkWinner=()=>{
    for(let pattern of winningPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" || pos2val !="" || pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            box.style.color="blue";
            turnO=false;
        }
        else{
            box.innerText="O";
            box.style.color="green";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

newbtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);