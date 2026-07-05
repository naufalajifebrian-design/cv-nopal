const hiddenElements = document.querySelectorAll("section, .card, .sertifikat-card, .item");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});
