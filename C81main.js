canvas = document.getElementById("ArGusonlycanvas")
ctx1 = canvas.getContext("2d")
color = "yellowgreen";
width1=5

lx="" 
ly=""
width=screen.width

if(width<992){
   document.getElementById("ArGusonlycanvas").width=screen.width-70
   document.getElementById("ArGusonlycanvas").height=screen.height-300
document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
   color=document.getElementById("c").value
   width1=document.getElementById("w").value
   lx=e.touches[0].clientX-canvas.offsetLeft 
   ly=e.touches[0].clientY-canvas.offsetTop 
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
c_x=e.touches[0].clientX-canvas.offsetLeft 
c_y=e.touches[0].clientY-canvas.offsetTop 

ctx1.beginPath()
ctx1.strokeStyle=color
ctx1.lineWidth=width1
ctx1.moveTo(c_x,c_y)
ctx1.lineTo(lx,ly)
ctx1.stroke()

lx=c_x
ly=c_y
}


function clearar(){
    ctx1.clearRect(0,0,canvas.width,canvas.height);
    

}