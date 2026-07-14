/* ============================
   Binary Background
============================ */

const binary = document.querySelector(".binary");

if (binary) {

    for (let i = 0; i < 180; i++) {

        const span = document.createElement("span");

        span.innerText = Math.random() > 0.5 ? "0" : "1";

        span.style.left = Math.random() * 100 + "%";

        span.style.top = Math.random() * 100 + "%";

        span.style.fontSize = (12 + Math.random() * 30) + "px";

        span.style.animationDuration = (8 + Math.random() * 12) + "s";

        span.style.animationDelay = Math.random() * 8 + "s";

        binary.appendChild(span);

    }

}

/* ============================
   Typing Effect
============================ */

const heroTitle = document.querySelector(".hero h1 span");

if (heroTitle) {

    const text = "Petchploy";

    heroTitle.textContent = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typing, 180);

        }

    }

    typing();

}

/* ============================
   Scroll Animation
============================ */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "all .8s ease";

    observer.observe(card);

});

/* ============================
   Sidebar Active Link
============================ */

const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => item.parentElement.classList.remove("active"));

        this.parentElement.classList.add("active");

    });

});

/* ============================
   Button Ripple Effect
============================ */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});
