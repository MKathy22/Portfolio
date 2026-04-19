/* cursor */

const coords={x:0,y:0}
const circles=document.querySelectorAll(".circle")

circles.forEach(circle=>{
circle.x=0
circle.y=0
})

window.addEventListener("mousemove",e=>{
coords.x=e.clientX
coords.y=e.clientY
})

function animate(){

let x=coords.x
let y=coords.y

circles.forEach((circle,index)=>{

circle.style.left=x+"px"
circle.style.top=y+"px"

circle.style.transform=
`translate(-50%,-50%) scale(${(circles.length-index)/circles.length})`

circle.x=x
circle.y=y

const next=circles[index+1]||circles[0]

x+=(next.x-x)*0.3
y+=(next.y-y)*0.3

})

requestAnimationFrame(animate)

}

animate()

/* navigation scroll */

document.querySelectorAll(".section-nav button").forEach(btn=>{

btn.addEventListener("click",()=>{

const target=btn.dataset.target

document.getElementById(target).scrollIntoView({
behavior:"smooth"
})

})

})

/* back to top */

const backTop=document.getElementById("backTop")

backTop.addEventListener("click",()=>{

document.getElementById("top").scrollIntoView({
behavior:"smooth"
})

})