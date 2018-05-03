document.onmousemove = animateCircle;

function animateCircle(event){
  var divs = document.createElement("div");
  divs.setAttribute("class","circle");
  document.body.appendChild(divs);
  
  divs.style.left = event.clientX + 'px';
  divs.style.top = event.clientY + 'px';
  
  divs.style.transition = "all 0.5s linear 0s";
  divs.style.left = divs.offsetLeft - 20 + 'px';
  divs.style.right = divs.offsetTop - 20 + 'px';
  
  divs.style.width = "50px";  
  divs.style.height = "50px";
  divs.style.backgroundColor = randomColor();
  divs.style.opacity = 0;
  
  
  setTimeout(function(){
    document.body.removeChild(divs);
  },500);
}

function randomColor(){
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255); 
  var b = Math.floor(Math.random()*255);
  
  return `rgb(${r},${g},${b})`;
}