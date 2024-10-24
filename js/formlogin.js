document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    // Mengatasi pengiriman form
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Mencegah pengiriman form secara default

        const username = loginForm.querySelector('input[type="text"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        // Validasi input
        if (validateInput(username, password)) {
            // Periksa kredensial
            if (username === "ipul" && password === "123") {
                // Langsung arahkan ke index.html jika login berhasil
                window.location.href = 'index.html';
            } else {
                alert("Username atau Password salah. Silakan coba lagi.");
            }
        }
    });

    // Fungsi untuk validasi input
    function validateInput(username, password) {
        if (username === "" || password === "") {
            alert("Username dan Password tidak boleh kosong.");
            return false;
        }
        return true;
    }
});
