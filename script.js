let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
// MOUSE ANIMATION 
body.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "power3.out"
    })
})
// SVG CURSOR ANIMATION 
let finalPath = `M 0 90 Q 120 90 590 90`;
let svg_line = document.querySelector(".svg-line");

svg_line.addEventListener("mousemove", (e) => {
    // GUVES THE POSSITION OF SVG-LINE DIV IN SCREEN 
    let rect = svg_line.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let path = `M 0 90 Q ${x} ${y} 590 90`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power2.out"
    });
});

svg_line.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
    });
});

gsap.to(".scroll h1", {
    x: "-164%",
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
