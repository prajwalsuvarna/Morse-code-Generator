const ele=document.querySelector("header");

ele.addEventListener("mousemove",(e)=>{
    let rect=ele.getBoundingClientRect()//holds size and pos info the element
    let x=e.offsetX;//mouse x pos relative to element
    let y=e.offsetY;//mouse y pos relative to element
    let valX=(x-(rect.width/2))/(rect.width/2);
    let valY=(y-(rect.height/2))/(rect.height/2);
    ele.style.transform=`perspective(2000px) rotatey(${valX*10}deg) rotatex(${-valY*10}deg)`;
})
ele.addEventListener("mouseout",(e)=>{
    ele.style.transform=``;
})

// Morse code Logic 

let a;
let b;
const alp=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',' ','0','1','2','3','4','5','6','7','8','9'];
const morse_codes= [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","/","-----",".----","..---","...--","....-",".....","-....","--...","---..","----."];
let mcode=[];

// Encoding part :
const Enc=document.getElementById("eng-text");
Enc.addEventListener("keyup", () => { 
a=document.getElementById("eng-text").value.toUpperCase();
a= a.split("");
for (let x in a) {
  b=alp.indexOf(a[x]);
 mcode.push(morse_codes[b]);
}
mcode=mcode.toString().replace(/,/g, ' ');
console.log(mcode);
document.getElementById("mrs-cod").value=mcode;
mcode=[];
});

//Decoding Part :
document.getElementById("mrs-cod").addEventListener("keyup", () => {
a=document.getElementById("mrs-cod").value;
a= a.split(" ");
console.log(a);
for (let x in a) {
  b=morse_codes.indexOf(a[x]);
 mcode.push(alp[b]);
}
mcode=mcode.toString().replace(/,/g, '');
console.log(mcode);
document.getElementById("eng-text").value=mcode;
mcode=[];
});

//Light flash Functionality
