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




function showProto(stage) {
    const img = document.getElementById('proto-img');
    const title = document.getElementById('proto-title');
    const desc = document.getElementById('proto-desc');
    const btns = document.querySelectorAll('.proto-btn');

    // Remove active class from all buttons
    btns.forEach(btn => btn.classList.remove('active'));
    // Add to clicked
    event.target.classList.add('active');

    if(stage === 'low') {
        img.src = 'img/skillswap/app1.png'; // Update with your actual low-fi image path
        title.innerText = 'Low-Fidelity Wireframes';
        desc.innerText = 'Initial sketches focusing on the core user flow: finding a skill and initiating a swap.';
    } else if(stage === 'mid') {
        img.src = 'img/skillswap/app2.png';
        title.innerText = 'Mid-Fidelity Prototypes';
        desc.innerText = 'Refining the layout, testing the credit system visualization, and project collaboration spaces.';
    } else {
        img.src = 'img/skillswap/app3.png';
        title.innerText = 'High-Fidelity MVP';
        desc.innerText = 'Final interactive prototype with full brand identity, verified login flows, and rating systems.';
    }
}