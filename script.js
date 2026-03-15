gsap.to(".scroll h1", {
    x: "-150%",
    scrollTrigger: {
        trigger: ".scroll",
        scroller: "body",
        markers: true,
        start: "top 10%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})
