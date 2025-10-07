// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
});

// Search functionality
const searchInput=document.getElementById("searchInput");
searchInput.addEventListener("keyup", ()=>{
  const value=searchInput.value.toLowerCase();
  document.querySelectorAll("section").forEach(sec=>{
    sec.style.display=sec.textContent.toLowerCase().includes(value) ? "block":"none";
  });
});

// Animate project cards on scroll
const cards=document.querySelectorAll(".project-card");
function showOnScroll(){
  cards.forEach((card,i)=>{
    const top=card.getBoundingClientRect().top;
    if(top<window.innerHeight-100){
      card.classList.add("show");
      card.style.animation=`fadeUp 0.8s ease ${i*0.2}s forwards`;
    }
  });
}
window.addEventListener("scroll",showOnScroll);
showOnScroll();

// Animate skill bars on scroll
const skills=document.querySelectorAll('.skill-fill');
function fillSkills(){
  skills.forEach((bar)=>{
    const top=bar.getBoundingClientRect().top;
    if(top<window.innerHeight-100){
      bar.style.width=bar.getAttribute('style').match(/width:(\d+)%/)[1]+'%';
    }
  });
}
window.addEventListener('scroll',fillSkills);
fillSkills();

// Hero button scroll to projects
document.querySelector(".btn").addEventListener("click", ()=>{
  document.querySelector("#projects").scrollIntoView({behavior:"smooth"});
});
// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-fill");

function showSkills() {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    }
  });
}


window.addEventListener("scroll", showSkills);
showSkills();
// Animate project cards on scroll
const projectCards = document.querySelectorAll(".project-card");

function animateProjects() {
  projectCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("show");
      card.style.transitionDelay = `${index * 0.2}s`;
    }
  });
}

window.addEventListener("scroll", animateProjects);
animateProjects();
