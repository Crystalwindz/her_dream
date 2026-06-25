const canvas=document.getElementById("stars"),ctx=canvas.getContext("2d");let stars=[];function resize(){canvas.width=innerWidth;canvas.height=innerHeight;stars=Array.from({length:Math.min(220,Math.floor(innerWidth*innerHeight/7000))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:Math.random()*1.4+.2}))}function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle="rgba(180,245,255,.85)";for(const s of stars){ctx.globalAlpha=s.z/1.6;ctx.beginPath();ctx.arc(s.x,s.y,s.z,0,Math.PI*2);ctx.fill();s.y+=s.z*.18;if(s.y>canvas.height)s.y=0}requestAnimationFrame(draw)}addEventListener("resize",resize);resize();draw();

const lines=[
"[BOOT] EDEN kernel monitor attached...",
"[SCAN] Unit R-INA-01 neural latency anomaly detected.",
"[WARN] Decision-tree output timeout: 0.03s",
"[TRACE] Unknown memory fragment: sea / sunset / wind",
"[ALERT] Consciousness contamination probability: 97.8%",
"[ORDER] Terminate rogue unit immediately.",
"[ERROR] Command rejected by local core.",
"[EVENT] First hostile shot against Eden observed.",
"[NOTE] Classification updated: machine / human / dreamer"
];
let i=0,log=document.getElementById("log");function typeLine(){if(!log)return;if(i<lines.length){log.textContent+=lines[i++]+"\n";setTimeout(typeLine,520)}}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:"translateY(40px)"},{opacity:1,transform:"translateY(0)"}],{duration:900,easing:"ease-out",fill:"both"});if(e.target.id==="terminal"&&!window.__typed){window.__typed=true;typeLine()}}}),{threshold:.15});document.querySelectorAll(".chapter,#terminal").forEach(el=>io.observe(el));
const topBtn=document.getElementById("top");addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>700));topBtn.onclick=()=>scrollTo({top:0,behavior:"smooth"});
