document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // DARK MODE / LIGHT MODE
    // =========================

    const themeButton = document.getElementById("themeButton");

    if (themeButton) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeButton.textContent = "☀️ Light Mode";
        }

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeButton.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");

            } else {

                themeButton.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");

            }

        });
    }


    // =========================
    // HAMBURGER MENU
    // =========================

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });


        // Menutup menu setelah link diklik
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");
                menuButton.textContent = "☰";

            });

        });
    }

});