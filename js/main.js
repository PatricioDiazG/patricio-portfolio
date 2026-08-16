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
