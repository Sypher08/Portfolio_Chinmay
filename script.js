const $=s=>document.querySelector(s);
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1200px) rotateY(${x*-12}deg) rotateX(${y*8}deg)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="perspective(1200px) rotateY(-8deg) rotateX(3deg)");
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  const nav=document.querySelector(".header nav");
  const open=nav.classList.toggle("mobile-open");
  if(open){nav.style.display="flex";nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.flexDirection="column";nav.style.padding="25px 8vw";nav.style.background="#0a0b0e";nav.style.borderBottom="1px solid #292c30"}
  else nav.removeAttribute("style");
});
document.querySelectorAll(".header nav a").forEach(a=>a.addEventListener("click",()=>{
  if(innerWidth<=950) document.querySelector(".menu-btn").click();
}));

function showProject(title,text){$("#modalTitle").textContent=title;$("#modalText").textContent=text;$("#modal").classList.add("open")}
function closeModal(){$("#modal").classList.remove("open")}
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

// Resume button now links directly to Chinmay_Gaikwad_Resume.pdf (see index.html) instead of generating a text file.
