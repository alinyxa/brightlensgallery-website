const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        const name = form.elements["name"].value.trim();
        const phone = form.elements["phone"].value.trim();

        if (name.length < 2) {
            alert("Введіть коректне ім’я");
            e.preventDefault();
            return;
        }

        if (phone.length < 10) {
            alert("Введіть коректний номер телефону");
            e.preventDefault();
            return;
        }

        showSuccessMessage();
        form.reset();
    });
}

function showSuccessMessage() {
    const msg = document.getElementById("successMessage");

    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
    }, 10000)
}
