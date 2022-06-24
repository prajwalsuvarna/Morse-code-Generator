const ham=document.querySelector("#ham");
const nav=document.querySelector("nav ul");


ham.addEventListener('click',()=>{
    if(nav.style.display==="none")
    {
        nav.style.display="grid"
        nav.style.gridColumn="1/3"
        nav.style.gridTemplateColumns="auto"
        nav.style.gridTemplateRows="repeat(4, auto)"
    }
    else{
        nav.style.display="none"
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth<=600)
    {
        if(ham.style.display!=="grid")
        {
            ham.style.display="grid";
            nav.style.display="none";
        }
    }
    else{
        ham.style.display="none";
        nav.style.display="grid";   
        nav.style.gridColumn="2/3"
        nav.style.gridTemplateColumns="repeat(4, auto)"
        nav.style.gridTemplateRows="auto"
    }
})

if(window.innerWidth<=600)
{
    ham.style.display="grid";
    nav.style.display="none";
}
else{
    ham.style.display="none";
    nav.style.display="grid";   
    nav.style.gridColumn="2/3"
}