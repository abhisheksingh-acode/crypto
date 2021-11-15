$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "none" });

  const main = gsap.timeline();

  gsap.to(".swot1 .bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar",
      start: "top 70%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  gsap.to(".swot2 .bar1", {
    duration: 6000,
    ease: "slow",
    transform: "rotate(90deg) scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar1",
      start: "top 100%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  gsap.to(".swot2 .bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar",
      start: "top 42%",
      end: "bottom 32%",
      scrub: true,
    },
  });

  gsap.to(".swot1 .bar1", {
    duration: 6000,
    ease: "slow",
    transform: "rotate(90deg) scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar1",
      start: "top 63%",
      end: "bottom 33%",
      scrub: true,
    },
  });
});

// product section
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "none" });

  const main = gsap.timeline();

  gsap.to("#one-bar .left-bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(100%)",
    scrollTrigger: {
      trigger: "#one-bar .left-bar",
      start: "top 85%",
      end: "bottom 65%",
      scrub: true,
    },
  });

  gsap.to("#one-bar .down-bar", {
    duration: 6000,
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#one-bar .down-bar",
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  gsap.to("#two-bar .down-bar", {
    duration: 6000,
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#two-bar ",
      start: "top 20%",
      end: "bottom 40%",
      scrub: true,
    },
  });
  //   gsap.from("#two-bar .down-bar", {
  //     duration: 6000,
  //     ease: "slow",
  //     transform: " scaleY(0%)",
  //     scrollTrigger: {
  //       trigger: "#two-bar .down-bar",
  //       start: "top 100%",
  //       end: "bottom 90%",
  //       scrub: true,
  //     },
  //   });

  gsap.to("#two-bar .right-bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(100%)",
    scrollTrigger: {
      trigger: "#two-bar ",
      start: "top 85%",
      end: "bottom 65%",
      scrub: true,
    },
  });

  gsap.to("#three-bar .left-bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(100%)",
    scrollTrigger: {
      trigger: "#three-bar ",
      start: "top 100%",
      end: "bottom 65%",
      scrub: true,
    },
  });

  gsap.to("#three-bar .down-bar", {
    duration: 6000,
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#three-bar ",
      start: "top 10%",
      end: "bottom 40%",
      scrub: true,
    },
  });
  gsap.to("#four-bar .right-bar", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(100%)",
    scrollTrigger: {
      trigger: "#four-bar ",
      start: "top 100%",
      end: "bottom 65%",
      scrub: true,
    },
  });

  gsap.to("#four-bar .down-bar", {
    duration: 6000,
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#four-bar ",
      start: "top 10%",
      end: "bottom 40%",
      scrub: true,
    },
  });

  gsap.to(" .line-1", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(125%)",
    scrollTrigger: {
      trigger: ".line-1 ",
      start: "top 90%",
      end: "bottom 70%",
      scrub: true,
    },
  });
  gsap.to(".line-2", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(125%)",
    scrollTrigger: {
      trigger: ".line-2",
      start: "top 90%",
      end: "bottom 70%",
      scrub: true,
    },
  });
  gsap.to(".line-3", {
    duration: 6000,
    ease: "slow",
    transform: "scaleX(105%)",
    scrollTrigger: {
      trigger: ".line-3",
      start: "top 95%",
      end: "bottom 80%",
      scrub: true,
    },
  });
});

// window.addEventListener("wheel", function (event) {
//   let revert;

//   if (event.deltaY < 0) {
//     $("#float-image").addClass("active-img");
//   } else if (event.deltaY > 0) {
//     $("#float-image").removeClass("active-img");

gsap.to("#float-image", {
  duration: 50000,
  top: "96%",
  scrollTrigger: {
    trigger: "#float-image",
    start: "top 15%",
    end: "bottom -100%",
    scrub: true,
  },
});

//   }
// });

// let tl,
//   downloading = false,
//   points = [],
//   btn = document.querySelector("#svg-btn .btn"),
//   dot = document.querySelector(".dot"),
//   text = document.querySelector(".text"),
//   mainCirc = document.querySelector(".mainCircle"),
//   subCirc = document.querySelector(".subCircle"),
//   mainCircFill = document.querySelector(".mainCircleFill"),
//   arrow = document.querySelector(".arrow"),
//   rect = document.querySelector(".rect");

// TweenLite.set(rect, { transformOrigin: "50% 50%", rotation: 45 });

// btn.addEventListener("click", animation);

// function animation() {
//   if (downloading) return;
//   downloading = !downloading;
//   let downloadTime = Math.random() * 0.5 + 0.7;
//   tl = new TimelineLite();

//   tl.restart()
//     .play()
//     .to(
//       arrow,
//       0.35,
//       {
//         y: 2.5,
//         ease: CustomEase.create(
//           "custom",
//           "M0,0,C0.042,0.14,0.374,1,0.5,1,0.64,1,0.964,0.11,1,0"
//         ),
//       },
//       "click"
//     )
//     .to(
//       text,
//       0.3,
//       {
//         svgOrigin: "55% 35%",
//         scale: 0.77,
//         ease: CustomEase.create(
//           "custom",
//           "M0,0,C0.042,0.14,0.374,1,0.5,1,0.64,1,0.964,0.11,1,0"
//         ),
//       },
//       "click+=.05"
//     )
//     .set(subCirc, { fillOpacity: 1, strokeOpacity: 1 }, "squeeze-=.3")
//     .to(
//       subCirc,
//       0.35,
//       { fillOpacity: 0, ease: Power1.easeInOut },
//       "squeeze-=.3"
//     )
//     .to(
//       subCirc,
//       0.45,
//       {
//         attr: { r: 13 },
//         strokeOpacity: 0,
//         className: "+=strokeW",
//         ease: Power0.easeNone,
//       },
//       "squeeze-=.3"
//     )
//     .to(
//       btn,
//       0.7,
//       {
//         attr: {
//           d: "M50,25 h0 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s0,0 0,0  a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h0",
//         },
//         ease: Sine.easeOut,
//       },
//       "squeeze"
//     )
//     .to(
//       [mainCirc, mainCircFill, rect, arrow],
//       0.7,
//       { x: 30, ease: Sine.easeOut },
//       "squeeze"
//     )
//     .to(
//       rect,
//       0.7,
//       { fill: "#fff", rotation: 270, ease: Sine.easeOut },
//       "squeeze"
//     )
//     .to(text, 0.3, { autoAlpha: 0, y: 7, onComplete: changeText }, "squeeze")
//     .to(
//       arrow,
//       0.7,
//       {
//         attr: {
//           d: "M20,39 l3.5,-3.5 l-3.5,-3.5 M20,39 l-3.5,-3.5 l3.5,-3.5 M20,39 l0,0",
//         },
//         transformOrigin: "50% 50%",
//         rotation: 225,
//         ease: Sine.easeOut,
//       },
//       "squeeze"
//     )
//     .to(dot, 0.4, { attr: { r: 1.5 }, ease: Back.easeOut.config(7) })
//     .set(subCirc, {
//       drawSVG: 0,
//       strokeOpacity: 1,
//       transformOrigin: "50% 50%",
//       x: 30,
//       rotation: -90,
//       attr: { r: 9.07 },
//     })
//     .to(
//       subCirc,
//       downloadTime,
//       { drawSVG: "102%", ease: Power2.easeIn },
//       "fill+=.02"
//     )
//     .to(
//       dot,
//       downloadTime,
//       {
//         bezier: { type: "cubic", values: points },
//         attr: { r: 2.7 },
//         ease: Power2.easeIn,
//       },
//       "fill"
//     )
//     .to(
//       ".gradient",
//       downloadTime,
//       { attr: { offset: "0%" }, ease: Power2.easeIn },
//       "fill"
//     )
//     .to(
//       dot,
//       0.44,
//       { fill: "#6c757d", y: -22, ease: Power1.easeOut },
//       "stretch-=.01"
//     )
//     .to(
//       dot,
//       0.27,
//       {
//         transformOrigin: "50% 50%",
//         scaleX: 0.5,
//         ease: SlowMo.ease.config(0.1, 2, true),
//       },
//       "stretch+=.04"
//     )
//     .to(
//       dot,
//       0.3,
//       { scaleY: 0.6, ease: SlowMo.ease.config(0.1, 2, true) },
//       "stretch+=.31"
//     )
//     .to(dot, 0.44, { scaleX: 0.4, y: 22, ease: Power2.easeIn }, "stretch+=.45")
//     .to(
//       [mainCirc, subCirc, arrow, rect, mainCircFill],
//       0.33,
//       { opacity: 0, ease: Power2.easeOut },
//       "stretch+=.2"
//     )
//     .to(
//       btn,
//       0.4,
//       {
//         attr: {
//           d: "M50,25 h20 a10,10 0 0,1 10,10 a10,10 0 0,1 -10,10 s-20,0 -40,0 a10,10 0 0,1 -10,-10 a10,10 0 0,1 10,-10 h20",
//         },
//         ease: Power1.easeOut,
//       },
//       "stretch+=.2"
//     )
//     .set(dot, { opacity: 0 }, "stretch+=.875")
//     .to(btn, 0.01, { stroke: "#6c757d", ease: Power2.easeIn }, "stretch+=.87")
//     .to(
//       btn,
//       0.3,
//       {
//         attr: {
//           d: "M50,25 h20 a10,10 0 0,1 10,10 a12,12 0 0,1 -10,10.5 s-20,6 -40,0 a12,12 0 0,1 -10,-10.5 a10,10 0 0,1 10,-10 h20",
//         },
//         ease: CustomEase.create(
//           "custom",
//           "M0,0 C0.046,0.062 0.018,1 0.286,1 0.532,1 0.489,-0.206 0.734,-0.206 0.784,-0.206 0.832,-0.174 1,0"
//         ),
//       },
//       "stretch+=.869"
//     )
//     .to(
//       text,
//       0.45,
//       { autoAlpha: 1, y: 0, ease: Back.easeOut.config(2.5) },
//       "stretch+=.855"
//     );
// }

// function restart() {
//   setTimeout(() => {
//     tl.seek(0).pause();
//     text.textContent = "Whitepaper";
//     TweenLite.set(text, { x: 0 });
//     downloading = false;
//   }, 2000);
// }

// function changeText() {
//   text.textContent = "Download";
//   TweenLite.set(text, { x: -5 });
// }

// (function () {
//   let data = Snap.path.toCubic("M0,0 a9,9 0 0,1 0,18 a9,9 0 0,1 0,-18"),
//     dataLen = data.length;
//   for (let i = 0; i < dataLen; i++) {
//     let seg = data[i];
//     if (seg[0] === "M") {
//       let point = {};
//       point.x = seg[1];
//       point.y = seg[2];
//       points.push(point);
//     } else {
//       for (let i = 1; i < 6; i += 2) {
//         let point = {};
//         point.x = seg[i];
//         point.y = seg[i + 1];
//         points.push(point);
//       }
//     }
//   }
// })();

$(document).on("click", "#download", () => {
  //   alert("added");
  $("#download .text").css("width", "0").css("padding", "0");
  $("#download .fas").css("animation-name", "rotate");
  $("#download .circle").css("top", "0%");
  $("#download .fas").css("color", "#f50");
});
