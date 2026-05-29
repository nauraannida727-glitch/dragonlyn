document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");

    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    if (user) {
        if (userInfo) {
            userInfo.innerText = "Halo, " + user;
        }

        if (authArea) {
            authArea.innerHTML = `
                <button onclick="logout()" class="nav-cta">Logout</button>
            `;
        }
    }

    window.goLogin = goLogin;
    window.logout = logout;
});
