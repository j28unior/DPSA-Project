// js/main.js

// Handle Logout Button Click
document.addEventListener("DOMContentLoaded", () => {
    const logoutButtons = document.querySelectorAll("#logout-button");
    logoutButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            logout();
        });
    });

    // Customize Navigation based on Role
    customizeNavigation();
});

// Logout Function
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

// Check if User is Logged In (for protected pages)
function checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) {
        window.location.href = "login.html";
    }
}

// Initialize Admin Console Only for Admins
function checkAdmin() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser || currentUser.role !== "Admin") {
        alert("Access Denied. Admins only.");
        window.location.href = "dashboard.html";
    }
}

// Prevent Access to Admin Console if Not Admin
if (window.location.pathname.endsWith("admin.html")) {
    checkAdmin();
}

// Function to play notification sound
function playNotificationSound(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
        console.log("Playing notification sound."); // Debugging
    }
}

// Customize Navigation Links Based on User Role
function customizeNavigation() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser) return; // If not logged in, no need to customize

    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach(li => {
        const link = li.querySelector("a");
        if (!link) return;

        switch(currentUser.role) {
            case "Admin":
                // Admin has access to all links
                break;
            case "Chief Security Officer":
                // Remove Admin-specific links
                if (link.getAttribute("href") === "admin.html") {
                    li.style.display = "none";
                }
                break;
            case "HR Manager":
                // Remove Admin and Security-specific links
                if (["admin.html", "cso_dashboard.html", "security_admin.html"].includes(link.getAttribute("href"))) {
                    li.style.display = "none";
                }
                break;
            case "IT Manager":
                // IT Managers have access to IT Dashboard and general links
                // No need to hide any links unless there are role-specific links
                break;
            case "Sales Manager":
                // Remove Admin and Security-specific links
                if (["admin.html", "cso_dashboard.html", "security_admin.html"].includes(link.getAttribute("href"))) {
                    li.style.display = "none";
                }
                break;
            case "Security Administrator":
                // Remove Admin-specific links
                if (link.getAttribute("href") === "admin.html") {
                    li.style.display = "none";
                }
                break;
            case "Employee":
                // Remove Admin and Security-specific links
                if (["admin.html", "cso_dashboard.html", "security_admin.html"].includes(link.getAttribute("href"))) {
                    li.style.display = "none";
                }
                break;
            default:
                // Hide all protected links if role is undefined
                if (link.getAttribute("href") !== "login.html" && link.getAttribute("href") !== "index.html") {
                    li.style.display = "none";
                }
        }
    });
}
// project/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Responsive Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically Populate Document Statistics (Dummy Data)
    const ctx = document.getElementById('document-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Secure Documents', 'Public Documents'],
            datasets: [{
                label: 'Document Distribution',
                data: [198, 58], // Example data
                backgroundColor: ['#004080', '#00bfff']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });

    // Status Updates: Avoid Repetition
    const updateCards = document.querySelectorAll('.update-card p');
    updateCards.forEach(card => {
        if (!card.innerHTML.trim()) {
            card.innerHTML = 'No new updates available.';
        }
    });

    // Effective Communication: Avoid Repetition
    const commCards = document.querySelectorAll('.communication-card p');
    const uniqueTexts = [...new Set(Array.from(commCards).map(card => card.textContent))];
    commCards.forEach((card, index) => {
        card.textContent = uniqueTexts[index] || 'Communication content missing.';
    });

    // Log UI Fix Confirmation
    console.log("UI fixes and dynamic updates applied successfully.");
});
