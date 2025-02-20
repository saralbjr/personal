document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                const hash = this.hash;

                // Get the target element
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Calculate the target position
                    const targetOffset = targetElement.offsetTop;

                    // Smooth scroll animation
                    scrollToTarget(targetOffset, hash);
                }
            }
        });
    });

    // Function to animate smooth scrolling
    function scrollToTarget(offset, hash) {
        // Duration of the scroll animation
        const duration = 500;
        // Number of steps for the animation
        const steps = 20;
        // Interval between each step
        const interval = duration / steps;

        // Initial position
        const start = window.pageYOffset;
        // Distance to scroll
        const distance = offset - start;

        // Increment for each step
        const increment = distance / steps;

        // Counter for steps
        let count = 0;

        // Interval function for smooth scrolling animation
        const scrollInterval = setInterval(() => {
            if (count < steps) {
                // Calculate the new position
                const newPosition = start + (increment * count);
                // Scroll to the new position
                window.scrollTo(0, newPosition);
                // Increment counter
                count++;
            } else {
                // Scroll to the final position
                window.scrollTo(0, offset);
                // Add hash to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                // Clear the interval
                clearInterval(scrollInterval);
            }
        }, interval);
    }
});


const header = document.querySelector("header");
document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
