$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: "none" });

  const main = gsap.timeline();

  gsap.to(".swot1 .bar", {
    ease: "slow",
    transform: "scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar",
      start: "bottom 110%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.to(".swot2 .bar1", {
    ease: "slow",
    transform: "rotate(90deg) scaleY(100%)",
    scrollTrigger: {
      trigger: ".swot2 .bar1",
      start: "bottom 110%",
      end: "top 28.5%",
      scrub: true,
    },
  });

  gsap.to(".swot2 .bar", {
    ease: "slow",
    transform: "scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar",
      start: "top 63%",
      end: "bottom 25.6%",
      scrub: true,
    },
  });

  gsap.to(".swot1 .bar1", {
    ease: "slow",
    transform: "rotate(90deg) scaleY(100%)",
    scrollTrigger: {
      trigger: ".bar1",
      start: "top 79%",
      end: "bottom 46%",
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
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#two-bar ",
      start: "top 18%",
      end: "bottom 40%",
      scrub: true,
    },
  });
  //   gsap.from("#two-bar .down-bar", {
  //
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
    ease: "slow",
    transform: "scaleX(100%)",
    scrollTrigger: {
      trigger: "#three-bar ",
      start: "top 83%",
      end: "bottom 79%",
      scrub: true,
    },
  });

  gsap.to("#three-bar .down-bar", {
    ease: "slow",
    transform: " scaleY(100%)",
    scrollTrigger: {
      trigger: "#three-bar ",
      start: "top 30%",
      end: "bottom 40%",
      scrub: true,
    },
  });
  gsap.to("#four-bar .right-bar", {
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
    ease: "slow",
    transform: "scaleX(125%)",
    scrollTrigger: {
      trigger: ".line-1 ",
      start: "top 90%",
      end: "bottom 55%",
      scrub: true,
    },
  });
  gsap.to(".line-2", {
    ease: "slow",
    transform: "scaleX(125%)",
    scrollTrigger: {
      trigger: ".line-2",
      start: "top 90%",
      end: "bottom 55%",
      scrub: true,
    },
  });
  gsap.to(".line-3", {
    ease: "slow",
    transform: "scaleX(120%)",
    left: "100%",
    scrollTrigger: {
      trigger: ".line-3",
      start: "top 95%",
      end: "bottom 55%",
      scrub: true,
    },
  });
});

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

$(document).on("click", "#download", (e) => {
  //   alert("added");
  $("#download .text").css("width", "0").css("padding", "0");
  $("#download .fas").css("animation-name", "rotate");
  $("#download .circle").css("top", "0%");
  $("#download .fas").css("color", "#f50");

  let filename = "/assets/whitepaper.pdf";

  function download() {
    $("#download").attr("download", filename).attr("href", filename);

    setTimeout(() => {
      $("#download").click(() => e.preventDefault());
    }, 3000);
  }

  download();
});
