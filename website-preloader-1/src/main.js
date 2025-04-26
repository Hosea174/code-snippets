// npm install gsap
import gsap from "gsap"; 
// npm install imagesloaded
import imagesLoaded from "imagesloaded"; 

const main = document.querySelector("main");
const imgLoad = imagesLoaded(main); 

imgLoad.on("done", () => {
  const tl = gsap.timeline();

  tl.to(".logo.fill", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    webkitClipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  tl.to(".logo-wrapper", {
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
  });

  tl.to(".loader", {
    height: 0,
    borderRadius: "0% 0% 100% 100%",
    duration: 0.5,
    ease: "power2.out",
  });
});

