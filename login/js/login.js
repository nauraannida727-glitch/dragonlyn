document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(user =>
        user.username === username &&
        user.password === password
    );

    if(validUser){

        localStorage.setItem("username", validUser.username);

        alert("Login berhasil!");

        window.location.href = "../index.html";

    } else {

        const alertBox = document.getElementById("alertBox");

        alertBox.innerText =
            "Username atau Password salah";

        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    }

});
