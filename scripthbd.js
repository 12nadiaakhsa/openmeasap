const modal = document.getElementById("modal");
const btn = document.getElementById("openBtn");
const span = document.getElementsByClassName("close")[0];
const fireworksContainer = document.getElementById("fireworks");

// Fungsi buka modal
btn.onclick = function() {
    modal.style.display = "block";
    createFirework(); // Pemicu kembang api
}

// Fungsi tutup modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Efek Kembang Api Sederhana
function createFirework() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement("div");
            firework.className = "firework";
            firework.style.left = Math.random() * 100 + "vw";
            firework.style.top = Math.random() * 100 + "vh";
            firework.style.backgroundColor = ["#ffb7b2", "#b2e2f2", "#ffdac1"][Math.floor(Math.random() * 3)];
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => firework.remove(), 1000);
        }, i * 100);
    }
}