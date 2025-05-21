// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animations for sections
gsap.utils.toArray("section").forEach((section) => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );
});

// Animate skill bars on scroll
gsap.utils.toArray(".skill-bar div div").forEach((bar) => {
    gsap.fromTo(
        bar,
        { width: "0%" },
        {
            width: bar.style.width,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bar,
                start: "top 90%",
            },
        }
    );
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});