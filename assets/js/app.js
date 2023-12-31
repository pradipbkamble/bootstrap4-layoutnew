let cl=console.log;

const toglebtn=document.getElementById("toglebtn");

let onclick=(eve)=>{
cl(eve.target)
eve.target.classList.toggle("fa-xmark");
eve.target.classList.toggle("fa-bars")
}






toglebtn.addEventListener("click",onclick)