const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function videoconAnimation() {
    var video = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    video.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });
    });
    video.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });
    });
    video.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 50,
        });
    });
}
videoconAnimation();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        opacity: 0,
        y: 100,
        dealy: 0.2, // Typo: Should be 'delay' instead of 'dealy'
        duration: 0.9,
        stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
        opacity: 0,
        scale: 0.9,
        dealy: 0.5, // Typo: Should be 'delay' instead of 'dealy'
        duration: 0.3,
    });
}
loadingAnimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function(dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    document.addEventListener("mouseleave", function(dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
        });
    });
    document.querySelector("#child1").addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(1)",
        });
    });

    document.querySelector("#child1").addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(0)",
            backgroundColor: "#f7f2ec",
        });
    });
    document.querySelector("#child2").addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(1)",
        });
    });

    document.querySelector("#child2").addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(0)",
            backgroundColor: "#ececec",
        });
    });
    document.querySelector("#child3").addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(1)",
        });
    });

    document.querySelector("#child3").addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(0)",
            backgroundColor: "#EDE6E6",
        });
    });
    document.querySelector("#child4").addEventListener("mouseenter", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(1)",
        });
    });

    document.querySelector("#child4").addEventListener("mouseleave", function() {
        gsap.to(".cursor", {
            transform: "translate(-50% , -50% ) scale(0)",
            backgroundColor: "#d6e0e0",
        });
    });
}
cursorAnimation();