document.addEventListener("DOMContentLoaded", () => {

    const photoStack = document.getElementById("photo-stack");

    if (!photoStack) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                photoStack.classList.add("visible");
            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(photoStack);

});
document.addEventListener("DOMContentLoaded", () => {

    const energyStack = document.querySelector(".energy-stack");

    if (energyStack) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    energyStack.classList.add("visible");
                }

            });

        }, {
            threshold: 0.5
        });

        observer.observe(energyStack);
    }

});