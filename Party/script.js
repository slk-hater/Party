let headerDefaultColor;
window.onload = function(){
  headerDefaultColor = document.querySelector("h1").style.color;
}

function RandomColor(){
  let r = Math.trunc(Math.random()*256);
  let g = Math.trunc(Math.random()*256);
  let b = Math.trunc(Math.random()*256);
  return `rgba(${r},${g},${b})`;
}

let p = document.getElementsByTagName("p");
let running = false;
let timer;
document.addEventListener("keypress", e => {
  if(e.key.toLowerCase() == "r"){
    let header = document.querySelector("h1");
    if(!running){
      running = true;
      p[0].innerHTML = "Press 'R' to stop the party!";
      timer = setInterval(function(){
        document.body.style.backgroundColor = RandomColor();
        header.style.color = RandomColor();
        for(let i = 1; i < p.length; i++){
          p[i].style.color = RandomColor();
        }
      }, 100);
    }
    else{
      running = false;
      p[0].innerHTML = "Press 'R' to make a party!";
      clearInterval(timer);
      document.body.style.backgroundColor = "white";
      header.style.color = headerDefaultColor;
      for(let i = 1; i < p.length; i++){
        p[i].style.color = "black";
      }
    }
  }
});