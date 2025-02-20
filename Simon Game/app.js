let actualSeq=[];
let userSeq=[];
let started=false;
let level=0;
h3=document.querySelector('h3');
btns=['red','green','blue','yellow'];
console.log(btns);
document.addEventListener('keypress',()=>{
    if(started==false){
    started=true;
    levelUp();
}  
});
function btnFlash(btn){
    
    btn.classList.add("flash");
    
    setTimeout(()=>{
        btn.classList.remove('flash');
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    // console.log("Random Index : "+randIdx);
    // console.log('Button Color '+btns[randIdx]);
    let btn=document.querySelector(`#${btns[randIdx]}`);
    btnFlash(btn);
    actualSeq.push(btn.id)
    console.log(actualSeq);
    
}
function checkAns(idx){
    
    if(userSeq[idx]==actualSeq[idx]){
        if(userSeq.length==actualSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h3.innerHTML=`Game Over! Your score was <b>${parseInt(level)-1}</b><br>Press any key to try again.`;
        level=0;
        userSeq=[];
        actualSeq=[];
        started=false;
    }
}
function btnPress(){
    let btn=this;
    userSeq.push(btn.classList[btn.classList.length-1]);
    // console.log('User: ',userSeq);
    btnFlash(btn);
    checkAns(userSeq.length-1);
}
for(btn of btns){
    let currBtn=document.querySelector(`#${btn}`);
    currBtn.addEventListener('click', btnPress);
}