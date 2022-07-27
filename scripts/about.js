const list=document.getElementById("list");
const cir=document.querySelectorAll("#list div");
let l=0
let moveRight=true
let moved=0
let time=0

setInterval(()=>{
    if(moved)
        moved=0
    else{
        next()
        render(l)
        console.log("rendered")
    }
},4000)


function Left(e){
    if(l!==0)
    {
        if(moveRight)
            moveRight=false
        next()
        render(l)
        moveRight=false
        moved=1
    }
    
}
function Right(e){
    if(l!==4)
    {
        if(moveRight==false)
        {
            moveRight=true
        }
        next()
        render(l)
        moved=1
    }
}



function next(){

    if(moveRight)
    {
        if(l===4){
            moveRight=false 
            l--
        }
        else{
            l++
        }
    }
    else{
        if(l===0){
            moveRight=true
            l++;
        }
        else{
            l--;
        }
    }
}


function render(l){
    let k=640-l*320
    list.style.transform="translateX("+k+"px)"

    calc(l)

}

function disp(x)
{
moved=1
render(x)
}

const calc=(l)=>{
    for(let i=0;i<5;i++)
    {

        if(i===l)
        {
            cir[i].style.opacity=1;
            cir[i].style.transformOrigin="50% 50%"
            cir[i].style.transform="perspective(300px) rotateY(0deg)"
        }        
        else if(i-1===l)
        {
            cir[i].style.opacity=1;
            cir[i].style.transformOrigin="0% 50%"
            cir[i].style.transform="perspective(300px) rotateY(30deg)"
        }
        else if(i+1===l)
        {
            cir[i].style.opacity=1;
            cir[i].style.transformOrigin="100% 50%"
            cir[i].style.transform="perspective(300px) rotateY(-30deg)"
        }
        else if(i+2===l)
        {
            cir[i].style.opacity=0;
            cir[i].style.transformOrigin="100% 50%"
            cir[i].style.transform="perspective(300px) rotateY(-90deg)"
        }
        else{
            cir[i].style.opacity=0;  
            cir[i].style.transformOrigin="0% 50%"
            cir[i].style.transform="perspective(300px) rotateY(90deg)"
        }
        
    }
}
