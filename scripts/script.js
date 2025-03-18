// Flip card functionality
document.querySelectorAll(".flip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".flip-card-inner").classList.toggle("flipped");
    });
});

// Smooth page fade-in effect
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
});

// Form validation for login and registration
document.querySelector(".flip-card-front button").addEventListener("click", (e) => {
    const email = document.querySelector(".flip-card-front input[type='email']").value;
    const password = document.querySelector(".flip-card-front input[type='password']").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        e.preventDefault();
    }
});

document.querySelector(".flip-card-back button").addEventListener("click", (e) => {
    const name = document.querySelector(".flip-card-back input[type='text']").value;
    const email = document.querySelector(".flip-card-back input[type='email']").value;
    const password = document.querySelector(".flip-card-back input[type='password']").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        e.preventDefault();
    }
});