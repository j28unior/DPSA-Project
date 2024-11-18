// it_dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    checkITManager(); // Ensure only IT Managers can access
    loadITSecurityAlerts();
    loadITPolicies();
    setupPolicyManagement();
    loadITDocuments();
    setupDocumentManagement();
    loadITAnalytics(); // Load IT Analytics Charts
});


function checkITManager() {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!currentUser || currentUser.role !== "IT Manager") {
        alert("Access Denied. IT Managers only.");
        window.location.href = "dashboard.html";
    }
}

function loadITSecurityAlerts() {
    const alertsList = document.getElementById("active-it-security-alerts");
    itSecurityAlerts.forEach(alert => {
        const listItem = document.createElement("li");
        listItem.textContent = alert;
        alertsList.appendChild(listItem);
    });
}

function loadITPolicies() {
    const policiesList = document.getElementById("it-policies-list");
    // Optional: Implement a list view of IT policies
}

function setupPolicyManagement() {
    const addPolicyButton = document.querySelector("button[onclick='showAddPolicyForm()']");
    const addPolicyForm = document.getElementById("add-policy-form");
    const newPolicyForm = document.getElementById("new-policy-form");
    const cancelAddPolicyButton = document.getElementById("cancel-add-policy");

    addPolicyButton.addEventListener("click", () => {
        addPolicyForm.classList.toggle("hidden");
    });

    newPolicyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("policy-title").value.trim();
        const content = document.getElementById("policy-content").value.trim();
        const author = document.getElementById("policy-author").value.trim();

        if (itPolicies.find(p => p.title === title)) {
            alert("A policy with this title already exists.");
            return;
        }

        const newPolicy = {
            id: itPolicies.length + 1,
            title,
            content,
            author,
            date: new Date().toISOString().split('T')[0],
            department: "IT",
            tags: ["IT Policy"],
            version: 1,
            history: [
                { version: 1, date: new Date().toISOString().split('T')[0], summary: "Initial creation of IT Policy." }
            ]
        };

        itPolicies.push(newPolicy);
        alert("New IT Policy added successfully!");
        newPolicyForm.reset();
        addPolicyForm.classList.add("hidden");
        loadITPolicies(); // Refresh policies list
        playNotificationSound("it-dashboard-audio");
    });

    cancelAddPolicyButton.addEventListener("click", () => {
        addPolicyForm.classList.add("hidden");
        newPolicyForm.reset();
    });
}

function loadITDocuments() {
    const documentsList = document.getElementById("it-documents-list");
    itPolicies.forEach(doc => {
        const docCard = document.createElement("div");
        docCard.classList.add("document-card");

        docCard.innerHTML = `
            <h4>${doc.title}</h4>
            <p>Author: ${doc.author}</p>
            <p>Date: ${doc.date}</p>
            <p>Version: ${doc.version}</p>
            <button onclick="viewITPolicy(${doc.id})">View Policy</button>
            <button onclick="viewVersionHistory(${doc.id})">Version History</button>
        `;

        documentsList.appendChild(docCard);
    });
}

function setupDocumentManagement() {
    // Implement additional document management functionalities if needed
}

function viewITPolicy(docId) {
    const policy = itPolicies.find(p => p.id === docId);
    if (!policy) {
        alert("IT Policy not found.");
        return;
    }

    // Display policy details in a modal or navigate to a detailed page
    alert(`Title: ${policy.title}\nAuthor: ${policy.author}\nDate: ${policy.date}\nContent: ${policy.content}`);
}

function viewVersionHistory(docId) {
    const policy = itPolicies.find(p => p.id === docId);
    if (!policy) {
        alert("IT Policy not found.");
        return;
    }

    let historyText = `Version History for "${policy.title}":\n`;
    policy.history.forEach(ver => {
        historyText += `Version ${ver.version} - ${ver.date}: ${ver.summary}\n`;
    });

    alert(historyText);
}

function manageITDocuments() {
    alert("Navigating to IT Document Management...");
    // Implement navigation or functionality as needed
}
function viewITPolicy(docId) {
    const policy = itPolicies.find(p => p.id === docId);
    if (!policy) {
        alert("IT Policy not found.");
        return;
    }

    // Create modal elements
    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h3>${policy.title}</h3>
            <p><strong>Author:</strong> ${policy.author}</p>
            <p><strong>Date:</strong> ${policy.date}</p>
            <p><strong>Version:</strong> ${policy.version}</p>
            <hr>
            <p>${policy.content}</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.remove();
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
function searchITPolicies() {
    const query = document.getElementById("it-policy-search").value.toLowerCase();
    const policiesList = document.getElementById("it-documents-list");
    policiesList.innerHTML = ""; // Clear existing policies

    const filteredPolicies = itPolicies.filter(policy => policy.title.toLowerCase().includes(query) || policy.content.toLowerCase().includes(query));

    if (filteredPolicies.length === 0) {
        policiesList.innerHTML = "<p>No IT policies found.</p>";
        return;
    }

    filteredPolicies.forEach(policy => {
        const docCard = document.createElement("div");
        docCard.classList.add("document-card");

        docCard.innerHTML = `
            <h4>${policy.title}</h4>
            <p>Author: ${policy.author}</p>
            <p>Date: ${policy.date}</p>
            <p>Version: ${policy.version}</p>
            <button onclick="viewITPolicy(${policy.id})">View Policy</button>
            <button onclick="viewVersionHistory(${policy.id})">Version History</button>
        `;

        policiesList.appendChild(docCard);
    });
}
function loadITAnalytics() {
    // System Uptime Chart
    const ctx1 = document.getElementById('system-uptime-chart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'System Uptime (%)',
                data: [99.9, 99.8, 99.95, 99.7, 99.85, 99.9],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });

    // Average Response Time Chart
    const ctx2 = document.getElementById('response-time-chart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Average Response Time (ms)',
                data: [180, 190, 200, 210, 195, 200],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Active Users Chart
    const ctx3 = document.getElementById('active-users-chart').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Active Users'],
            datasets: [{
                label: 'Active Users',
                data: [150],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}
function setupFeedbackForm() {
    const feedbackForm = document.getElementById("it-feedback-form");
    const policySelect = document.getElementById("policy-select");
    const feedbackMessage = document.getElementById("feedback-message");

    // Populate policy options
    itPolicies.forEach(policy => {
        const option = document.createElement("option");
        option.value = policy.id;
        option.textContent = policy.title;
        policySelect.appendChild(option);
    });

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const policyId = parseInt(document.getElementById("policy-select").value);
        const rating = parseInt(document.getElementById("feedback-rating").value);
        const comments = document.getElementById("feedback-comments").value.trim();

        if (!policyId || !rating || !comments) {
            alert("Please fill in all feedback fields.");
            return;
        }

        const newFeedback = {
            id: feedbacks.length + 1,
            policyId,
            rating,
            comments,
            sentiment: analyzeSentiment(comments)
        };

        feedbacks.push(newFeedback);
        feedbackMessage.textContent = "Feedback submitted successfully!";
        feedbackForm.reset();
        playNotificationSound("it-dashboard-audio");
    });
}

function analyzeSentiment(text) {
    // Simple sentiment analysis simulation
    const positiveWords = ["good", "excellent", "helpful", "great", "fantastic", "insightful"];
    const negativeWords = ["bad", "terrible", "poor", "hate", "dislike", "needs", "generic"];

    let score = 0;
    const words = text.toLowerCase().split(" ");
    words.forEach(word => {
        if (positiveWords.includes(word)) score++;
        if (negativeWords.includes(word)) score--;
    });

    if (score > 0) return "Positive";
    if (score < 0) return "Negative";
    return "Neutral";
}
// js/modules/it_dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Elements
    const addPolicyButton = document.getElementById('add-policy-button');
    const addPolicyModal = document.getElementById('add-policy-modal');
    const newPolicyForm = document.getElementById('new-policy-form');
    const cancelAddPolicyButton = document.getElementById('cancel-add-policy');
    const itPoliciesList = document.getElementById('it-policies-list');
    const itPolicySearch = document.getElementById('it-policy-search');
    const manageDocumentsButton = document.getElementById('manage-documents-button');
    const manageDocumentsModal = document.getElementById('manage-documents-modal');
    const itDocumentsList = document.getElementById('it-documents-list');
    const itFeedbackForm = document.getElementById('it-feedback-form');
    const feedbackMessage = document.getElementById('feedback-message');
    const itDashboardAudio = document.getElementById('it-dashboard-audio');

    // Sample Data (Could be fetched from data.js or an API)
    let itPolicies = [
        {
            title: "Data Privacy Policy",
            author: "Jane Smith",
            date: "2024-04-15",
            content: "This policy outlines how data privacy is maintained within the organization..."
        },
        {
            title: "Network Security Guidelines",
            author: "John Doe",
            date: "2024-03-10",
            content: "These guidelines provide a framework for securing the organization's network infrastructure..."
        }
        // Add more policies as needed
    ];

    let itDocuments = [
        "Server Configuration Guide",
        "IT Asset Inventory",
        "Backup Procedures Document"
        // Add more documents as needed
    ];

    // Function to Render IT Policies
    function renderITPolicies() {
        itPoliciesList.innerHTML = '';
        itPolicies.forEach(policy => {
            const policyCard = document.createElement('div');
            policyCard.classList.add('document-card');
            policyCard.innerHTML = `
                <h3>${policy.title}</h3>
                <p><strong>Author:</strong> ${policy.author}</p>
                <p><strong>Date:</strong> ${policy.date}</p>
                <button onclick="viewPolicyDetails('${policy.title}')"><i class="fas fa-eye"></i> View Details</button>
            `;
            itPoliciesList.appendChild(policyCard);
        });

        populatePolicySelect();
    }

    // Function to Populate Policy Select in Feedback Form
    function populatePolicySelect() {
        const policySelect = document.getElementById('policy-select');
        policySelect.innerHTML = '<option value="">--Select Policy--</option>';
        itPolicies.forEach(policy => {
            const option = document.createElement('option');
            option.value = policy.title;
            option.textContent = policy.title;
            policySelect.appendChild(option);
        });
    }

    // Function to Handle Add Policy Form Submission
    newPolicyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('policy-title').value.trim();
        const content = document.getElementById('policy-content').value.trim();
        const author = document.getElementById('policy-author').value.trim();
        const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD

        // Create New Policy Object
        const newPolicy = {
            title,
            author,
            date,
            content
        };

        // Add to Policies Array
        itPolicies.push(newPolicy);

        // Re-render Policies List
        renderITPolicies();

        // Reset and Close Form
        newPolicyForm.reset();
        closeAddPolicyModal();

        // Play Notification Sound
        itDashboardAudio.play();

        alert("New IT Policy added successfully.");
    });

    // Function to Search IT Policies
    function searchITPolicies() {
        const query = itPolicySearch.value.toLowerCase();
        const filteredPolicies = itPolicies.filter(policy => policy.title.toLowerCase().includes(query));

        itPoliciesList.innerHTML = '';
        filteredPolicies.forEach(policy => {
            const policyCard = document.createElement('div');
            policyCard.classList.add('document-card');
            policyCard.innerHTML = `
                <h3>${policy.title}</h3>
                <p><strong>Author:</strong> ${policy.author}</p>
                <p><strong>Date:</strong> ${policy.date}</p>
                <button onclick="viewPolicyDetails('${policy.title}')"><i class="fas fa-eye"></i> View Details</button>
            `;
            itPoliciesList.appendChild(policyCard);
        });
    }

    // Function to Manage IT Documents
    function renderITDocuments() {
        itDocumentsList.innerHTML = '';
        itDocuments.forEach(documentName => {
            const docItem = document.createElement('li');
            docItem.innerHTML = `
                <span>${documentName}</span>
                <button onclick="downloadDocument('${documentName}')"><i class="fas fa-download"></i> Download</button>
            `;
            itDocumentsList.appendChild(docItem);
        });
    }

    // Function to Handle IT Feedback Form Submission
    itFeedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedPolicy = document.getElementById('policy-select').value;
        const rating = document.getElementById('feedback-rating').value;
        const comments = document.getElementById('feedback-comments').value.trim();

        if (selectedPolicy && rating && comments) {
            // Process Feedback (e.g., send to server or store locally)
            console.log("Feedback Submitted:", { selectedPolicy, rating, comments });

            // Reset Form
            itFeedbackForm.reset();

            // Display Success Message
            feedbackMessage.textContent = "Thank you for your feedback!";
            feedbackMessage.style.display = "block";

            // Play Notification Sound
            itDashboardAudio.play();

            // Hide Message After 3 Seconds
            setTimeout(() => {
                feedbackMessage.style.display = "none";
            }, 3000);
        }
    });

    // Render Initial Data
    renderITPolicies();
    renderITDocuments();

    // Initialize Charts
    // System Uptime Chart
    const systemUptimeCtx = document.getElementById('system-uptime-chart').getContext('2d');
    const systemUptimeChart = new Chart(systemUptimeCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'System Uptime (%)',
                data: [99.8, 99.9, 99.95, 99.9, 99.85, 99.9],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: '#003366',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Response Time Chart
    const responseTimeCtx = document.getElementById('response-time-chart').getContext('2d');
    const responseTimeChart = new Chart(responseTimeCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Average Response Time (ms)',
                data: [180, 190, 175, 200, 185, 190],
                backgroundColor: '#28a745',
                borderColor: '#1e7e34',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Active Users Chart
    const activeUsersCtx = document.getElementById('active-users-chart').getContext('2d');
    const activeUsersChart = new Chart(activeUsersCtx, {
        type: 'doughnut',
        data: {
            labels: ['Internal Users', 'External Users'],
            datasets: [{
                label: 'Active Users',
                data: [120, 30],
                backgroundColor: [
                    '#ffc107',
                    '#17a2b8'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true
        }
    });
});
