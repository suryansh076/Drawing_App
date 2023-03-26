let type
let canvas
let color
let size

let div_height=40
function selectt(cname)
{
  return document.querySelector(cname);
  
}
function setup()
{
 
  // canvas(650,650)
  let elt = selectt('#canvas-wrapper');
  console.log("hii")
  canvas =createCanvas(window.innerWidth, window.innerHeight-div_height-6);
  canvas.parent(elt)
  background(255)


}
function mouePressed()
{
  console.log("pp")
}
function mouseDragged(){
  let pencil=selectt('#pen-pencil').checked;
  let brush=selectt('#pen-brush').checked;
  let deletes=selectt('#pen-delete').checked;
  let size=parseInt(selectt('#pen-size').value);
  color=selectt('#pen-color').value;
  fill(color)
  stroke(color)
  if(pencil)
  {
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  else if(brush){
    stroke(color)
    strokeWeight(size)

    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  else if(deletes)
  {
    // fill(255)
    stroke(255)
    strokeWeight(size)

    line(pmouseX,pmouseY,mouseX,mouseY)

  }
  else if(highlight)
  {
    // fill(155)
    // noStroke()
    // ellipse(mouseX,mouseY,size,size)


    bubble.push(new Bubble(mouseX,mouseY));
  }
}
selectt("#resetC").addEventListener("click",()=>{
  console.log("reset")
  background(255)
})
selectt("#saveC").addEventListener("click",()=>{
  console.log("reset and reset")
  saveCanvas(canvas,"Sketch","png");
  background(255)
})


div_height = document.getElementsByClassName('controls')[0].offsetHeight;
function draw()
{  
 
// background(255)

}


/////


