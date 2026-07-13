const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.onclick = function(){

    surprise.classList.remove("hidden");

    startConfetti();

}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles=[];

function startConfetti(){

    particles=[];

    for(let i=0;i<250;i++){

        particles.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height-canvas.height,

            r:Math.random()*6+2,

            d:Math.random()*250,

            color:`hsl(${Math.random()*360},100%,50%)`,

            tilt:Math.random()*10-10

        });

    }

    animate();

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.fillStyle=p.color;

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fill();

        p.y+=3;

        p.x+=Math.sin(p.d);

        if(p.y>canvas.height){

            p.y=-20;

        }

    });

    requestAnimationFrame(animate);

}
