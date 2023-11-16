let icon = document.querySelector("header .icon");
let nav = document.querySelector("header nav");
icon.onclick = function (e) {
    e.preventDefault();
  nav.classList.toggle("open");
};


$(document).ready(function(){
    $(".landing").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});
});


$(".wrapper").owlCarousel({
  dots: false,
  autoplay: true,
  loop: true,
  rtl: true,
  margin:20,
  autoplayHoverPause: true,
  nav:false,
  smartSpeed: 500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
});

document.querySelectorAll(".features .imgs-content .box-content .icon li a").forEach(e => {
    e.addEventListener("click", (e) => {
        e.preventDefault();
    })
})
let imgs = ["image/services-img-one.jpg", "image/services-img-two.jpg", "image/services-img-three.jpg", "image/services-img-4.jpg", "image/services-img-5.jpg", "image/services-img-6.jpg", "image/services-img-7.jpg", "image/services-img-8.jpg", "image/services-img-9.jpg"];
document.querySelectorAll(".features .imgs-content .box-content .icon li a.show").forEach(e => {
    e.addEventListener("click", (e) => {
        e.preventDefault();
        let overly = document.createElement("div");
        overly.className = "overly";
        document.body.appendChild(overly);

        
        let el = document.createElement("div");
        el.className = "overly-box";
        
        let span = document.createElement("span");
        span.textContent = 'X';
        el.appendChild(span);
        
        let img = document.createElement("img");
        img.src = imgs[e.target.dataset.imgnumber];
        
        el.appendChild(img);
        document.querySelector(".features").appendChild(el);
        document.body.style.overflow = "hidden";
    })
})

document.addEventListener("click", (e) => {
    if (e.target.textContent === "X") {
          document.querySelector(".overly").remove();
      e.target.parentElement.remove();
        document.body.style.overflow = "auto";
    }
  });



// Counter JS
$('.counter').counterUp({
    delay: 10,
    time: 2000
});


// aos Animation
AOS.init();


let option = document.querySelectorAll(".contact-us .text .box .select .select-option li");
option.forEach(e => {
    e.addEventListener("click", () => {
        let text = e.innerHTML;
        let value = e.parentElement.previousElementSibling;
        value.innerHTML = text;
    })
})
let select = document.querySelectorAll(".contact-us .text .box .select");
select.forEach(e => {
    e.addEventListener("click", () => {
        e.children[2].classList.toggle("active");
        e.children[1].classList.toggle("rotate");
    })
})


let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.position = "fixed";
        header.style.background = "#000";
    } else {
        header.style.position = "absolute";
        header.style.background = "transparent";
    }
})

let headerServices = document.querySelector(".head-services");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        headerServices.style.position = "fixed";
        headerServices.style.background = "#fff";
    } else {
        headerServices.style.position = "relative";
        headerServices.style.background = "#FFF";
    }
})


function* generateBox() {
    let generator1 = document.querySelectorAll(".generatot1");
    generator1.forEach(e => {
        e.style.display = "block";
    })
    yield 1;
    let generator2 = document.querySelectorAll(".generatot2");
    generator2.forEach(e => {
        e.style.display = "block";
    })
    yield 2;
    let generator3 = document.querySelectorAll(".generatot3");
    generator3.forEach(e => {
        e.style.display = "block";
    })
}
let generator = generateBox();
let more = document.querySelector(".features .link.srv");
more.onclick = function(e) {
    e.preventDefault();
    generator.next();
}