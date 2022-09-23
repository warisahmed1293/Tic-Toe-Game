console.log("Welcome To My Game")

let turn = "X"
let gameover = false;


//For Turn
const changeTurn = ()=> {
    return turn ==='X'?"0": "X"
}


//For Win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' Won'
            gameover = turn
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '300px'
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click',()=> {
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn()
            checkWin()
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Reset Button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = 'X'
    gameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"

})