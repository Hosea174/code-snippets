// yarn add gsap
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

let split = SplitText.create(".headline", {
  type: "chars",
  smartWrap: true,
});

gsap.from(split.chars, {
  yPercent: 200,
  stagger: 0.02,
  ease: "power2.inOut",
  duration: 0.4,
});
