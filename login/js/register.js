document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");

    try {
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        console.log(data);

        if (data.status === "success") {

            message.style.color = "green";
            message.innerText = "✅ Registrasi berhasil, silakan login";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);

        } else {

            message.style.color = "red";
            message.innerText = data.message || "❌ Username sudah digunakan";

        }

    } catch (error) {

        console.log(error);

        message.style.color = "red";
        message.innerText = "❌ Terjadi kesalahan server";

    }
});
