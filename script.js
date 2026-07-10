// ==========================
// Scroll Animation
// ==========================

const hiddenElements = document.querySelectorAll(
"section, .card, .item, .sertifikat-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});

// =====================
// ACTIVE NAVBAR
// =====================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-90;
        const height=section.offsetHeight;

        if(window.scrollY>=top &&
           window.scrollY<top+height){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
    

const text = "Mahasiswa Teknik Informatika";

const sidebarTyping = document.getElementById("typing-sidebar");

let index2 = 0;

function typeSidebar(){

    if(index2 < text.length){

        sidebarTyping.innerHTML += text.charAt(index2);

        index2++;

        setTimeout(typeSidebar,70);

    }

}

typeSidebar();


// ==========================
// SKILL BAR ANIMATION
// ==========================

function animateSkills(){

    document.querySelector(".html").style.width = "0";
    document.querySelector(".css").style.width = "0";
    document.querySelector(".javascript").style.width = "0";
    document.querySelector(".cpp").style.width = "0";

    setTimeout(()=>{
        document.querySelector(".html").style.width = "90%";
    },300);

    setTimeout(()=>{
        document.querySelector(".css").style.width = "85%";
    },700);

    setTimeout(()=>{
        document.querySelector(".javascript").style.width = "75%";
    },1100);

    setTimeout(()=>{
        document.querySelector(".cpp").style.width = "80%";
    },1500);

}

// ==========================
// LOADER
// ==========================   
document.body.style.overflow="hidden";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

            document.body.style.overflow="auto";

            animateSkills();

        },600);

    },1200);

});

// ======================
// SCROLL PROGRESS BAR
// ======================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -
                   document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-number");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = 40;

            const updateCounter = () => {

                if (count < target) {

                    count++;

                    counter.innerText = count;

                    setTimeout(updateCounter, speed);

                }

            };

            updateCounter();

        });

    }

}
window.addEventListener("load",startCounter);
window.addEventListener("scroll", startCounter);

// ==========================
// TOAST NOTIFICATION
// ==========================

const downloadBtn = document.getElementById("downloadBtn");
const toast = document.getElementById("toast");

downloadBtn.addEventListener("click",()=>{

    toast.classList.remove("show");

    setTimeout(()=>{

        toast.classList.add("show");

    },10);

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

});

// Simpan Dark Mode
const darkBtn = document.getElementById("darkMode");
darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        darkBtn.innerHTML="☀";
    }else{
        localStorage.setItem("theme","light");
        darkBtn.innerHTML="🌙";
    }

});

// Saat halaman dibuka
window.addEventListener("DOMContentLoaded", () => {

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
        darkBtn.innerHTML = "☀";
    }

});