// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    loadContentHighlights();
    loadAlerts();
    loadRecommendations();
});

function loadContentHighlights() {
    const container = document.getElementById("content-highlights-container");
    const highlights = documents.slice(-3).reverse(); // Get last 3 documents

    highlights.forEach(doc => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="assets/images/${doc.type.toLowerCase().replace(' ', '-')}.png" alt="${doc.type}" class="card-image">
            <h3>${doc.title}</h3>
            <p>Type: ${doc.type}</p>
            <p>Author: ${doc.author}</p>
            <p>Department: ${doc.department}</p>
            <button onclick="viewDocument(${doc.id})">View</button>
        `;

        container.appendChild(card);
    });
}

function loadAlerts() {
    const alertsList = document.getElementById("alerts-list");

    alerts.forEach(alert => {
        const listItem = document.createElement("li");
        listItem.textContent = `${alert.date}: ${alert.message}`;
        alertsList.appendChild(listItem);
    });
}

function loadRecommendations() {
    const container = document.getElementById("recommendations-container");
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Simulate AI-Driven Recommendations based on user department
    const recs = recommendations.filter(rec => rec.department === currentUser.department).slice(0, 3);

    recs.forEach(rec => {
        const recCard = document.createElement("div");
        recCard.classList.add("card");

        recCard.innerHTML = `
            <img src="assets/images/${rec.type.toLowerCase().replace(' ', '-')}.png" alt="${rec.type}" class="card-image">
            <h4>${rec.title}</h4>
            <p>Type: ${rec.type}</p>
            <p>Author: ${rec.author}</p>
            <p>${rec.summary}</p>
            <button onclick="viewDocument(${rec.id})">View</button>
        `;

        container.appendChild(recCard);
    });
}

function viewDocument(docId) {
    alert(`Viewing document ID: ${docId}`);
    // In a real system, redirect to document detail page
}
// project/js/modules/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    // Logout Modal Elements
    const logoutButton = document.getElementById('logout-button');
    const logoutModal = document.getElementById('logout-modal');
    const closeLogoutModal = () => {
        logoutModal.classList.add('hidden');
    };
    const confirmLogout = document.getElementById('confirm-logout');

    // Event Listener to Open Logout Modal
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.classList.remove('hidden');
    });

    // Event Listener to Confirm Logout
    confirmLogout.addEventListener('click', () => {
        // Perform logout operations here (e.g., clear session, redirect)
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    });

    // Populate Status Updates with Dummy Data
    const statusUpdates = document.getElementById('status-updates');
    const dummyStatuses = [
        { icon: "fas fa-check-circle", text: "System operational." },
        { icon: "fas fa-exclamation-circle", text: "Scheduled maintenance at 2 AM." },
        { icon: "fas fa-info-circle", text: "New policy documents uploaded." },
        { icon: "fas fa-users-cog", text: "User roles updated." },
        // Add more dummy statuses as needed
    ];

    dummyStatuses.forEach(status => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${status.icon} status-icon"></i> ${status.text}`;
        statusUpdates.appendChild(li);
    });

    // Populate AI-Enhanced Content Highlights with Dynamic Content (if needed)
    // Example: Fetch data from data.js or another source

    // Populate Recommendations with Dynamic Content (if needed)
    // Example: Fetch data from data.js or another source

    // Additional dynamic content can be added here

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Initialize Updates Chart
const ctxUpdates = document.getElementById('updatesChart').getContext('2d');
const updatesChart = new Chart(ctxUpdates, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: 'Document Updates',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Function to Open Recommendation Modal
function openRecommendationModal(title) {
    const modal = document.getElementById('recommendation-modal');
    const modalTitle = document.getElementById('recommendation-title');
    const modalDetails = document.getElementById('recommendation-details');

    // Set Modal Content Based on Recommendation
    if (title === 'Effective Team Communication') {
        modalTitle.textContent = 'Effective Team Communication';
        modalDetails.textContent = 'Detailed strategies and best practices for improving team communication...';
    }
    // Add more conditions for other recommendations

    modal.classList.remove('hidden');
}

// Function to Close Recommendation Modal
function closeRecommendationModal() {
    const modal = document.getElementById('recommendation-modal');
    modal.classList.add('hidden');
}
// dashboard.js

const greetingElement = document.createElement('h3');
const currentHour = new Date().getHours();
let greetingText = 'Welcome back!';

if (currentHour < 12) {
    greetingText = 'Good Morning!';
} else if (currentHour < 18) {
    greetingText = 'Good Afternoon!';
} else {
    greetingText = 'Good Evening!';
}

greetingElement.textContent = greetingText;
document.querySelector('#intro-video').prepend(greetingElement);

// dashboard.js

// Simulated User Activity Data
const userActivity = {
    recentSearches: ['Team Communication', 'Data Security', 'Document Management']
};

// Function to Generate Recommendations Based on Activity
function generateRecommendations(activity) {
    const recommendations = {
        'Team Communication': {
            title: 'Effective Team Communication',
            description: 'Enhance your team\'s communication strategies with this comprehensive guide.',
            link: 'repository.html#effective-communication'
        },
        'Data Security': {
            title: 'Data Security Best Practices',
            description: 'Ensure the integrity and security of your data with these best practices.',
            link: 'repository.html#data-security'
        },
        'Document Management': {
            title: 'Advanced Document Management',
            description: 'Optimize your document management processes with these advanced techniques.',
            link: 'repository.html#document-management'
        }
    };

    const recommendationsContainer = document.getElementById('recommendations-container');

    activity.recentSearches.forEach(search => {
        if (recommendations[search]) {
            const card = document.createElement('div');
            card.classList.add('recommendation-card', 'animate__animated', 'animate__fadeInUp');

            card.innerHTML = `
                <i class="fas fa-file-alt fa-2x"></i>
                <h3>${recommendations[search].title}</h3>
                <p>${recommendations[search].description}</p>
                <a href="${recommendations[search].link}" class="read-more">Read More</a>
            `;

            recommendationsContainer.appendChild(card);
        }
    });
}

// Generate Recommendations on Page Load
generateRecommendations(userActivity);

// project/js/modules/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    // Logout Modal Elements
    const logoutButton = document.getElementById('logout-button');
    const logoutModal = document.getElementById('logout-modal');
    const closeLogoutModal = () => {
        logoutModal.classList.add('hidden');
    };
    const confirmLogout = document.getElementById('confirm-logout');

    // Event Listener to Open Logout Modal
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        logoutModal.classList.remove('hidden');
    });

    // Event Listener to Confirm Logout
    confirmLogout.addEventListener('click', () => {
        // Perform logout operations here (e.g., clear session, redirect)
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    });

    // Populate Status Updates with Dummy Data
    const statusUpdates = document.getElementById('status-updates');
    const dummyStatuses = [
        { icon: "fas fa-check-circle", text: "System operational." },
        { icon: "fas fa-exclamation-circle", text: "Scheduled maintenance at 2 AM." },
        { icon: "fas fa-info-circle", text: "New policy documents uploaded." },
        { icon: "fas fa-users-cog", text: "User roles updated." },
        // Add more dummy statuses as needed
    ];

    dummyStatuses.forEach(status => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="${status.icon} status-icon"></i> ${status.text}`;
        statusUpdates.appendChild(li);
    });

    // Populate AI-Enhanced Content Highlights with Dynamic Content (if needed)
    // Example: Fetch data from data.js or another source

    // Populate Recommendations with Dynamic Content (if needed)
    // Example: Fetch data from data.js or another source

    // Handle "View" Button Clicks
    const viewButtons = document.querySelectorAll('.view-button');
    const aiDetailModal = document.getElementById('ai-detail-modal');
    const aiModalTitle = document.getElementById('ai-modal-title');
    const aiModalContent = document.getElementById('ai-modal-content');
    const closeAIDetailModal = () => {
        aiDetailModal.classList.add('hidden');
    };
    const closeModalButtons = document.querySelectorAll('.close-modal-btn, .close-button');

    // Sample AI-Generated Content based on Card ID
    const aiContent = {
        1: {
            title: "Recent Updates Insights",
            content: "Our AI analysis indicates that recent policy changes in the Human Resources department have led to a 15% increase in employee satisfaction. The implementation of these policies aligns with the latest industry standards and regulatory requirements. Recommended actions include scheduling follow-up training sessions to ensure full compliance and understanding across all teams."
        },
        2: {
            title: "Important Documents Overview",
            content: "The newly updated Employee Handbook includes comprehensive guidelines on workplace conduct, data privacy, and performance evaluation metrics. Our AI suggests that employees engage with these documents to stay informed about their roles and responsibilities. Additionally, related compliance documents have been cross-referenced for easy access."
        },
        3: {
            title: "Document Changes Analysis",
            content: "AI-driven analysis shows that revisions to policy documents have reduced ambiguity by 20%, enhancing clarity and enforceability. These changes are part of our ongoing efforts to streamline knowledge management processes and ensure all documents are up-to-date with current regulations. It's recommended to review these changes to understand their impact on departmental operations."
        }
        // Add more entries as needed
    };

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cardId = button.getAttribute('data-card-id');
            if (aiContent[cardId]) {
                aiModalTitle.textContent = aiContent[cardId].title;
                aiModalContent.textContent = aiContent[cardId].content;
                aiDetailModal.classList.remove('hidden');
            } else {
                aiModalTitle.textContent = "No Data Available";
                aiModalContent.textContent = "There is no additional information available for this item.";
                aiDetailModal.classList.remove('hidden');
            }

            // Optionally, play a notification sound
            const notificationAudio = document.getElementById('notification-audio');
            notificationAudio.play();
        });
    });

    // Close AI-Detail Modal when clicking close buttons
    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            aiDetailModal.classList.add('hidden');
        });
    });

    // Close AI-Detail Modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == aiDetailModal) {
            aiDetailModal.classList.add('hidden');
        }
        if (event.target == logoutModal) {
            logoutModal.classList.add('hidden');
        }
    });

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

