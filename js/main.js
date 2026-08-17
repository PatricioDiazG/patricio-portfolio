/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".section-label, .about h2, .about-text, .skill-item, .projects h2, .section-description, .project-category, .experience h2, .timeline-item, .contact h2, .contact > .container > p, .contact-email"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================================
   NAVBAR — SECCIÓN ACTIVA
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-menu a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.4
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});
