$(function () {
  var winht = $(window).height(),
    winhwt = $(window).width();
  var controller = new ScrollMagic.Controller({
    container: window,
  });
  $(".appi-portfolio-sec").css("height", winht * 8);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: 30,
    duration: winht,
  })
    .on("enter", function () {
      $(".clock-dial-center-wrap").removeClass("active");
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "0,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.one", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".nexgtv-center-text .text-big p", 1, {
        ease: Power4.easeInOut,
        top: "95px",
      });
      TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
          visibility: "hidden",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.8, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".nexgtv-img figure.l1", 1, {
        ease: Power4.easeInOut,
        bottom: "-1000px",
      });
      TweenLite.to(".nexgtv-img figure.l2", 1.2, {
        ease: Power4.easeInOut,
        bottom: "-1000px",
      });
      TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(
        ".dotsstro, .dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0,
          },
        }
      );
      TweenLite.to(
        ".dotsfill, .dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0.4,
            fill: "#fff",
          },
        }
      );
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: 0,
    duration: winht * 7,
  })
    .setPin(".appi-ins-portfolio-sec")
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: (-winht * 2) / 2,
    duration: winht * 2,
  })
    .on("enter", function () {
      $(".clock-dial-center-wrap").addClass("active");
      TweenLite.to(".appi-portfolio-sec-left figure.one", 1, {
        ease: Power4.easeInOut,
        css: { opacity: "1" },
      });
      setTimeout(function () {
        TweenLite.to("#Opaque_Ring", 1, {
          ease: Power4.easeInOut,
          strokeDasharray: "10,1000",
        });
        TweenLite.to(".dotsstro", 1.5, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill", 1.5, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: 1,
          },
        });
      }, 200);
      TweenLite.to(".nexgtv-center-text .text-big p", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".nexgtv-center-text .text-sm p", 1.3, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".nexgtv-center-text .text-big .plus", 1.3, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.8, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".nexgtv-img", 1, {
        ease: Power4.easeInOut,
        opacity: "1",
        visibility: "visible",
      });
      TweenLite.to(".nexgtv-img figure.l1", 1, {
        ease: Power4.easeInOut,
        bottom: "-68px",
      });
      TweenLite.to(".nexgtv-img figure.l2", 1.2, {
        ease: Power4.easeInOut,
        bottom: "-184px",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#d2d2d5",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#095cbb",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1, {
        ease: Power4.easeInOut,
        top: "65px",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1.8, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".vemeport-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
          visibility: "hideen",
        },
      });
      TweenLite.to(".vemeport-img figure.l1 img", 1, {
        ease: Power4.easeInOut,
        top: "100vh",
      });
      TweenLite.to(".vemeport-img figure.l2 img", 1.3, {
        ease: Power4.easeInOut,
        top: "-100vh",
      });
      TweenLite.to(
        ".dotsstro1, .dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0,
          },
        }
      );
      TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      TweenLite.to(
        ".dotsfill1, .dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0.4,
            fill: "#fff",
          },
        }
      );
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht,
    duration: winht,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "152,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.one", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".nexgtv-center-text .text-big p", 1, {
        ease: Power4.easeInOut,
        top: "-115px",
      });
      TweenLite.to(".nexgtv-center-text .text-sm p", 1, {
        ease: Power4.easeInOut,
        top: "-38px",
      });
      TweenLite.to(".nexgtv-center-text .text-big .plus", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l1", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l1", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l1",
        1.1,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l2",
        1.3,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l1 p .l3",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l2", 1.5, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".nexgtv-img figure.l1", 1, {
        ease: Power4.easeInOut,
        bottom: "-1000px",
      });
      TweenLite.to(".nexgtv-img figure.l2", 1, {
        ease: Power4.easeInOut,
        bottom: "-1000px",
      });

      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#1f046d",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#562dd3",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro1", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill1", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 800);
      TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1.3, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1.5, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1.8, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1.8, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".vemeport-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(" .vemeport-img figure.l1 img", 1.5, {
        ease: Power4.easeInOut,
        top: "0vh",
      });
      TweenLite.to(" .vemeport-img figure.l2 img", 1.8, {
        ease: Power4.easeInOut,
        top: "0vh",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "89px",
      });
      TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1.5, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".nasa-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(" .nasa-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(
        ".dotsstro2, .dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0,
          },
        }
      );
      TweenLite.to(
        ".dotsfill2, .dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6",
        0.1,
        {
          ease: Power4.easeInOut,
          css: {
            opacity: 0.4,
            fill: "#fff",
          },
        }
      );
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht * 2,
    duration: winht,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "282,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.two", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.blockchain .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .middel-text .l2", 1, {
        ease: Power4.easeInOut,
        top: "-65px",
      });
      TweenLite.to(".appi-port-clocktext.blockchain .down-text .l3", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l2", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l2 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l1", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".vemeport-img figure.l1 img", 1, {
        ease: Power4.easeInOut,
        top: "100vh",
      });
      TweenLite.to(".vemeport-img figure.l2 img", 1.3, {
        ease: Power4.easeInOut,
        top: "-100vh",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#141751",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#0e1041",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro2", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill2", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 800);
      TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1.3, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.5, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.nasa-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(".nasa-img figure.l1", 1.5, {
        ease: Power4.easeInOut,
        bottom: "-6%",
      });
      TweenLite.to(".nasa-img figure.l2", 1.8, {
        ease: Power4.easeInOut,
        top: "-9%",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1",
        1,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "75px",
      });
      TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.4, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1, {
        ease: Power4.easeInOut,
        top: "-450px",
      });

      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "-50%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        bottom: "-80%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-250px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        right: "-150px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
        ease: Power4.easeInOut,
        right: "-50%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
        ease: Power4.easeInOut,
        left: "-50%",
      });

      TweenLite.to(".dotsstro3, .dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0,
        },
      });
      TweenLite.to(".dotsfill3, .dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0.4,
          fill: "#fff",
        },
      });
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht * 3,
    duration: winht,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "405,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.three", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.nasa .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-clocktext.nasa .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "-89px",
      });
      TweenLite.to(".appi-port-clocktext.nasa .down-text .l3", 1.5, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l3", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l3 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l3", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(" .nasa-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(" .nasa-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#0d141c",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#162b44",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro3", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill3", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 800);
      TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.4, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1.4, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        top: "3%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        bottom: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-50px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        right: "150px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
        ease: Power4.easeInOut,
        right: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
        ease: Power4.easeInOut,
        left: "0",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1",
        1,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "70px",
      });
      TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.4, {
        ease: Power4.easeInOut,
        top: "30px",
      });

      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        left: "120%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });

      TweenLite.to(".dotsstro4, .dotsstro5, .dotsstro6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0,
        },
      });
      TweenLite.to(".dotsfill4, .dotsfill5, .dotsfill6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0.4,
          fill: "#fff",
        },
      });
    })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht * 4,
    duration: winht,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "535,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.four", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l4", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l1",
        1,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l2",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l4 p .l3",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l4", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-port-clocktext.dominos .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-clocktext.dominos .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "-80px",
      });
      TweenLite.to(".appi-port-clocktext.dominos .down-text .l3", 1.2, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-portfolio-sec-left figure .donimg", 1.4, {
        ease: Power4.easeInOut,
        top: "-450px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "-50%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        bottom: "-80%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-250px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        right: "-150px",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l6", 1.3, {
        ease: Power4.easeInOut,
        right: "-50%",
      });
      TweenLite.to(".appi-ins-portfolio-right.dominos-img figure.l7", 1.5, {
        ease: Power4.easeInOut,
        left: "-50%",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#25d5eb",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#1070ea",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro4", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill4", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 800);
      TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.4, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        top: "7%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        bottom: "2%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        left: "70%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-13%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-18%",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "65px",
      });
      TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.3, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".dotsstro5, .dotsstro6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0,
        },
      });
      TweenLite.to(".dotsfill5, .dotsfill6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0.4,
          fill: "#fff",
        },
      });
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht * 5,
    duration: winht,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "680,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.five", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l5", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l5 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l5", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-port-clocktext.binkx .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-clocktext.binkx .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "-80px",
      });
      TweenLite.to(".appi-port-clocktext.binkx .down-text .l3", 1.3, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l3", 1.5, {
        ease: Power4.easeInOut,
        left: "120%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l4", 1.1, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.binkx-img figure.l5", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#fea700",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#00319c",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro5", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill5", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 800);
      TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.4, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1.3, {
        ease: Power4.easeInOut,
        bottom: "0%",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.seven", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l7", 1, {
        ease: Power4.easeInOut,
        top: "45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l7", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-port-clocktext.melltoo .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-port-clocktext.melltoo .middel-text .l2", 1.2, {
        ease: Power4.easeInOut,
        top: "65px",
      });
      TweenLite.to(".appi-port-clocktext.melltoo .down-text .l3", 1.6, {
        ease: Power4.easeInOut,
        top: "30px",
      });
      TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l1", 1.1, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l2", 1.3, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l2", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".dotsstro6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0,
        },
      });
      TweenLite.to(".dotsfill6", 0.1, {
        ease: Power4.easeInOut,
        css: {
          opacity: 0.4,
          fill: "#fff",
        },
      });
    })
    .addTo(controller);
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    offset: winht * 6,
    duration: winht - winht / 3,
  })
    .on("enter", function () {
      TweenLite.to("#Opaque_Ring", 1, {
        ease: Power4.easeInOut,
        strokeDasharray: "815,1000",
      });
      TweenLite.to(".appi-portfolio-sec-left figure.six", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-left-content .pp-head p .l6", 1, {
        ease: Power4.easeInOut,
        top: "-45px",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l6 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "-30px",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l6", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 0,
          zIndex: "-1",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "0",
        },
      });
      TweenLite.to(".appi-port-clocktext.ikea .up-text .l1", 1, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-port-clocktext.ikea .middel-text .l2", 1.1, {
        ease: Power4.easeInOut,
        top: "-80px",
      });
      TweenLite.to(".appi-port-clocktext.ikea .down-text .l3", 1.3, {
        ease: Power4.easeInOut,
        top: "-30px",
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l1", 1, {
        ease: Power4.easeInOut,
        bottom: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l2", 1.1, {
        ease: Power4.easeInOut,
        right: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-right.ikea-img figure.l3", 1.3, {
        ease: Power4.easeInOut,
        top: "-100%",
      });
      TweenLite.to(".appi-ins-portfolio-sec", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#00bf72",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left, .clockbg-dial", 1, {
        ease: Power4.easeInOut,
        css: {
          backgroundColor: "#008d54",
        },
      });
      TweenLite.to(".appi-portfolio-sec-left figure.seven", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      setTimeout(function () {
        TweenLite.to(".dotsstro6", 1, {
          ease: Power4.easeInOut,
          css: {
            opacity: 1,
          },
        });
        TweenLite.to(".dotsfill6", 1, {
          ease: Power4.easeInOut,
          css: {
            fill: "#0092ff",
            opacity: "1",
          },
        });
      }, 500);
      TweenLite.to(".appi-port-left-content .pp-head p .l7", 1, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l1",
        1.2,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l2",
        1.4,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(
        ".appi-port-left-content .appi-pp-para .appi-cont.appi-pp-l7 p .l3",
        1.6,
        {
          ease: Power4.easeInOut,
          top: "0",
        }
      );
      TweenLite.to(".appi-casestudy-navi .pp-navi.l7", 1, {
        ease: Power4.easeInOut,
        css: {
          scale: 1,
          zIndex: "1",
        },
      });
      TweenLite.to(".appi-port-clocktext.melltoo .up-text .l1", 1.2, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.melltoo .middel-text .l2", 1.4, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-port-clocktext.melltoo .down-text .l3", 1.6, {
        ease: Power4.easeInOut,
        top: "0",
      });
      TweenLite.to(".appi-ins-portfolio-right.melltoo-img", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
          visibility: "visible",
        },
        onStart: function () {},
      });
      TweenLite.to(".appi-portfolio-sec-left .award-grp figure.l2", 1, {
        ease: Power4.easeInOut,
        css: {
          opacity: "1",
        },
      });
      TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l1", 1.2, {
        ease: Power4.easeInOut,
        bottom: "-10%",
      });
      TweenLite.to(".appi-ins-portfolio-right.melltoo-img figure.l2", 1.4, {
        ease: Power4.easeInOut,
        bottom: "-17%",
      });
    })
    .addIndicators()
    .addTo(controller);
});
// }
