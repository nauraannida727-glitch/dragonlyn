document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user =>
        user.username === username
    );

    if(userExists){

        document.getElementById("message").innerText =
            "Username sudah digunakan";

        return;
    }

    users.push({
        username,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil!");

    window.location.href = "index.html";

});
