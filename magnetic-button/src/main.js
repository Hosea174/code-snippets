import gsap from "gsap";

const btn = document.querySelector(".my-btn");

btn.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = btn.getBoundingClientRect();

  const xPoint = e.clientX - left - width / 2;
  const yPoint = e.clientY - top - height / 2;

  let strength = 0.4;

  gsap.to(btn, {
    x: xPoint * strength,
    y: yPoint * strength,
    ease: "elastic.out(.4, 0.25)",
  });
});

btn.addEventListener("mouseleave", (e) => {
  gsap.to(btn, {
    x: 0,
    y: 0,
    ease: "elastic.out(.4, 0.25)",
  });
});
