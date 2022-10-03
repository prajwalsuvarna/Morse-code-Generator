var ele = document.querySelector("header");
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
mcode=[];
for (let x in a) {
  b=alp.indexOf(a[x]);
 mcode.push(morse_codes[b]);
}
mcode=mcode.toString().replace(/,/g, ' ');
console.log(mcode);
document.getElementById("mrs-cod").value=mcode;

});

//Decoding Part :
document.getElementById("mrs-cod").addEventListener("keyup", () => {
a=document.getElementById("mrs-cod").value;
a= a.split(" ");
console.log(a);
mcode=[];
for (let x in a) {
  b=morse_codes.indexOf(a[x]);
 mcode.push(alp[b]);
}
mcode=mcode.toString().replace(/,/g, '');
console.log(mcode);
document.getElementById("eng-text").value=mcode;

});

//Audio Function


var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var dot = 1.2 / 15;
var time = context.currentTime;
var oscillator = context.createOscillator();

function play(){
  oscillator.type = "sine";
  oscillator.frequency.value = 600;

  var gainNode = context.createGain();
  gainNode.gain.setValueAtTime(0, time);

  mcode.split("").forEach(function(x) {
      if(x == ".") {
              gainNode.gain.setValueAtTime(1, time);
              time += dot;
              gainNode.gain.setValueAtTime(0, time);
              time += dot;
         }else if(x == "-"){
              gainNode.gain.setValueAtTime(1, time);
              time += 3 * dot;
              gainNode.gain.setValueAtTime(0, time);
              time += dot;
         }else if(x == " "){
           time += 7 * dot;
          }
      });
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start();
}

function stop(){
  oscillator.stop();
}

//Light flash Functionality


let track;
//Check if device is a phone
if(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  var perm = window.confirm("Do you want to use phone flashlight to display morse as light? if yes please click ok and allow camera permission, if not, click cancel.");
  if (perm) {
const SMD = 'mediaDevices' in navigator;
if (SMD) {
  navigator.mediaDevices.enumerateDevices().then(devices => {
  const cameras = devices.filter((device) => device.kind === 'videoinput');
  if (cameras.length === 0) {
  console.log("This device has not an camera");
    }
  const camera = cameras[cameras.length - 1];
  navigator.mediaDevices.getUserMedia({
  video: {
  deviceId: camera.deviceId,
  facingMode: ['user', 'environment'],
      }
    }).then(stream => {
      track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track)
    });
  });
}
  }
}


let curr = 0;
function blink(){
if(curr < mcode.length){
  
  if(mcode[curr] == "-"){
  document.getElementById("light").style.backgroundColor = "red";
  blinkTorch(true);
  navigator.vibrate(500);
  setTimeout(() => {
    document.getElementById("light").style.backgroundColor = "black";
    blinkTorch(false);
  }, 500);
  setTimeout(blink, 700);
  }else if(mcode[curr] == "."){
    document.getElementById("light").style.backgroundColor = "blue";
    blinkTorch(true);
    navigator.vibrate(200);
    setTimeout(() => {
      document.getElementById("light").style.backgroundColor = "black";
      blinkTorch(false);
    }, 300);
    setTimeout(blink, 500);   
 }else if(mcode[curr] == " "){
  setTimeout(blink, 700);   
 }
 curr++;
}else{
  curr = 0;
}
}


function blinkTorch(state){
if(track){
  track.applyConstraints({
    advanced: [{torch: state}]
  });
}
}
