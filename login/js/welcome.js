document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {

        localStorage.removeItem("username");

        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {

        document.getElementById("userInfo").innerText =
            "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <a href="#" onclick="logout()">LOGOUT</a>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
