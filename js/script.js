
/* =================================
   1. CURRENT YEAR IN THE FOOTER
================================= */

const currentYear = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${currentYear} Abdussalam Hudu Aliyu. All Rights Reserved.`;
}


/* =================================
   2. MOBILE NAVIGATION MENU
================================= */

// Find the navigation elements
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create a menu button
const menuButton = document.createElement("button");

menuButton.className = "menu-toggle";
menuButton.textContent = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");
menuButton.setAttribute("aria-expanded", "false");

if (navbar && navLinks) {
    navbar.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("nav-open");

        menuButton.textContent = isOpen ? "✕" : "☰";

        menuButton.setAttribute("aria-expanded", String(isOpen));

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("nav-open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
