document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            navigation.classList.toggle("show");
        });
    }

    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId !== "#") {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Close mobile menu after clicking a link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navigation) {
                navigation.classList.remove("show");
            }
        });
    });

    // Reveal sections when scrolling
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

    // Animate project cards
    const projectCards = document.querySelectorAll(".project-card");

    const cardObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    projectCards.forEach(function (card, index) {
        card.style.transitionDelay = index * 0.15 + "s";
        cardObserver.observe(card);
    });

    // Animate education and certification cards
    const animatedCards = document.querySelectorAll(
        ".education-card, .certification-card"
    );

    animatedCards.forEach(function (card) {
        cardObserver.observe(card);
    });

    // Update footer year automatically
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll progress bar
    const progressBar = document.createElement("div");

    progressBar.id = "scroll-progress";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (pageHeight > 0) {
            const progress = (scrollTop / pageHeight) * 100;
            progressBar.style.width = progress + "%";
        }
    });

});