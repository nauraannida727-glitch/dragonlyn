document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const email =
            document.querySelector('input[type="text"]').value;

        localStorage.setItem("username", email);

        window.location.href = "../index.html";

    });

});
