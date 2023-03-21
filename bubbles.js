let type
let canvas
let color
let size
let bubble=[]
function selectt(cname)
{
  return document.querySelector(cname);
  
}
function setup()
{
 
  // canvas(650,650)
  let elt = selectt('#canvas-wrapper');
  console.log("hii")
  canvas =createCanvas(650,650);
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
  let highlight=selectt('#pen-high').checked;
  let size=parseInt(selectt('#pen-size').value);
  color=selectt('#pen-color').value;
  fill(color)
  stroke(color)
  if(pencil)
  {
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  else if(brush){
    ellipse(mouseX,mouseY,size,size)
  }
  else if(deletes)
  {
    fill(255)
    noStroke()
    ellipse(mouseX,mouseY,size,size)

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


function draw()
{  

for(var i=0;i<bubble.length;i++)
    {
      bubble[i].display();
      if(bubble[i].life<2)
      {
        console.log("poped",bubble.length)
        bubble.splice(0,2)
      }
    }
}

function Bubble(x,y)
{
  
  this.col=color
  this.x=x;
  this.y=y;
  this.life=255
  this.display=function()
  {
    noStroke()
    fill(120,this.life)
    ellipse(this.x,this.y,12,12)
    this.life=this.life-5.5;
  };
  this.clicked=function()
  {
   var d=dist(this.x,this.y,mouseX,mouseY);
    if(d<16)
      {
        this.col=color(155,50,78)
      }
  }
  
}