let gameSeq = [];
let userSeq = [];
let btns = ['first','second','third','fourth'];

let started = false;
let level = 0;

let head3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started==false)
        console.log('game started');
    started=true;
    levelUp();
});

function btnFlace(btn){
    btn.classList.add('flace');
    setTimeout(function (){
        btn.classList.remove('flace');
    }, 300);
}

function userFlace(btn){
    btn.classList.add('userFlace');
    setTimeout(function (){
        btn.classList.remove('userFlace');
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    head3.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random()*4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlace(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        head3.innerHTML = `Game Over! <br><b>Score ${level}</b><br> Press any key to restart Game.`;
        document.querySelector('body').classList.add('over');
        setTimeout(function(){ 
            document.querySelector('body').classList.remove('over'); 
        },300);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlace(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}