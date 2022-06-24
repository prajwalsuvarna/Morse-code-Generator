const ele=document.querySelector("header");

ele.addEventListener("mousemove",(e)=>{
    let rect=ele.getBoundingClientRect()//holds size and pos info the element
    let x=e.offsetX;//mouse x pos relative to element
    let y=e.offsetY;//mouse y pos relative to element
    let valX=(x-(rect.width/2))/(rect.width/2);
    let valY=(y-(rect.height/2))/(rect.height/2);
    ele.style.transform=`perspective(2000px) rotatey(${valX*15}deg) rotatex(${valY*15}deg)`;
})
ele.addEventListener("mouseout",(e)=>{
    ele.style.transform=``;
})