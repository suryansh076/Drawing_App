let type
let canvas
let colors
let showcolor
let cnt=0;
let div_height=0
let pencil;
let brush;
let deletes;
let highlight;
let size;
let eColor=255
let isdark=false
function selectt(cname)
{
  return document.querySelector(cname);
  
}
function setup()
{
  // div_height = document.getElementsByClassName('controls')[0].offsetHeight;
  let elt = selectt('#canvas-wrapper');
  console.log("hii")
  canvas =createCanvas(window.innerWidth, window.innerHeight-div_height-6);
  canvas.parent(elt)
  background(255)
  showcolor=selectt('.color')
}
function mouseDragged(){
  console.log(colors)
  stroke(colors)
  if(pencil)
  {
    strokeWeight(2.5)
    console.log("pencil")
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  else if(brush){
    stroke(colors)
    strokeWeight(size)
    line(pmouseX,pmouseY,mouseX,mouseY)
  
  }
  else if(deletes)
  {
    console.log(colors)
    stroke(eColor)
    strokeWeight(size)
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  else if(highlight)
  { 
    stroke('rgba(100,255,0, 0.04)')
    strokeWeight(size+20) 
    line(pmouseX,pmouseY,mouseX,mouseY) 
  }
}
selectt("#resetC").addEventListener("click",()=>{
  console.log("reset")
  background(255)
})
selectt("#saveC").addEventListener("click",()=>{
  console.log("reset and reset")
  saveCanvas(canvas,"Sketch","png");
  // background(255)
})


function mousePressed()
{
// console.log("pfffffff")
colors=selectt('#pen-color').value;
pencil=selectt('#pen-pencil').checked;
brush=selectt('#pen-brush').checked;
deletes=selectt('#pen-delete').checked;
highlight=selectt('#pen-high').checked;
size=parseInt(selectt('#pen-size').value)

}
function draw()
{  
  
  
}

function hide_col() {
  console.log("hidden")
  showcolor.classList.add("removecolor")
}

function show_col() {
  showcolor.classList.remove("removecolor")
}
theme=()=>{
  isdark=!isdark
  colors=selectt('.controls');
  let controls = selectt(".theme-switcher")
  let type = selectt(".type")
  if(isdark)
  {
    background(20); 
    eColor=20
    controls.innerHTML = `<i class="fa-solid fa-sun"></i>`
    colors.style.border = `1px solid #555`
    type.style.border = `1px solid #555`
    colors.style.backgroundColor = `#222`
    colors.style.color = `#fff`;
    
  }
  else{
    background(255)
    eColor=255
    controls.innerHTML = `<i class="fa-solid fa-moon"></i>`
    colors.style.border = `1px solid #ddd`
    type.style.border = `1px solid #ddd`
    colors.style.backgroundColor = `#eee`
    colors.style.color = `#111`;
  }
}
