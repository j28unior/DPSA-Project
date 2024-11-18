// cso_dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    loadSecurityAlerts();
    loadUnusualAccess();
    loadIncidentLogs();
});

function loadSecurityAlerts() {
    const alertsList = document.getElementById("active-security-alerts");
    // Simulate AI-generated security alerts for CSO
    const simulatedAlerts = [
        "Unusual login attempt detected for user Alice Johnson.",
        "Multiple failed access attempts on IT Policy document.",
        "Access from unauthorized device for Bob Smith.",
        "Suspicious activity detected in Sales Department."
    ];

    simulatedAlerts.forEach(alert => {
        const listItem = document.createElement("li");
        listItem.textContent = alert;
        alertsList.appendChild(listItem);
    });
}

function loadUnusualAccess() {
    const accessList = document.getElementById("unusual-access-list");
    // Simulate unusual access behaviors
    const unusualAccess = [
        "User David Brown accessed sensitive documents outside of business hours.",
        "User Eva Green attempted multiple deletions in the repository.",
        "Unauthorized device connected to the IT network."
    ];

    unusualAccess.forEach(access => {
        const listItem = document.createElement("li");
        listItem.textContent = access;
        accessList.appendChild(listItem);
    });
}

function loadIncidentLogs() {
    const incidentsList = document.getElementById("incidents-list");
    // Simulate incident logs
    const incidents = [
        "2024-01-15 09:23:45 - Detected unauthorized access attempt by user David Brown.",
        "2024-02-10 14:12:30 - Blocked suspicious IP address from accessing IT Policies.",
        "2024-03-05 11:45:10 - Responded to malware detection in Sales Department."
    ];

    incidents.forEach(incident => {
        const listItem = document.createElement("li");
        listItem.textContent = incident;
        incidentsList.appendChild(listItem);
    });
}

function viewIncidents() {
    const incidentsList = document.getElementById("incidents-list");
    incidentsList.classList.toggle("hidden"); // Toggle visibility
}
document.addEventListener("DOMContentLoaded", () => {
    loadActiveSecurityAlerts();
    loadUnusualAccessBehaviors();
    renderSecurityAnalytics();
});

function loadActiveSecurityAlerts() {
    const alerts = [
        "Unauthorized access attempt from IP 192.168.1.15",
        "Failed login attempts exceeded threshold for user HR_Admin",
        "Malware detected on workstation 203"
    ];

    const alertsList = document.getElementById("active-security-alerts");
    alertsList.innerHTML = alerts
        .map(alert => `<li>${alert}</li>`)
        .join("");
}

function loadUnusualAccessBehaviors() {
    const behaviors = [
        "User Jane accessed documents outside of working hours",
        "Multiple failed logins detected for user IT_Support",
        "Sensitive file download by user with limited clearance"
    ];

    const accessList = document.getElementById("unusual-access-list");
    accessList.innerHTML = behaviors
        .map(behavior => `<li>${behavior}</li>`)
        .join("");
}

function viewIncidents() {
    const incidents = [
        { id: 101, type: "Phishing Attempt", status: "Resolved" },
        { id: 102, type: "Unauthorized Access", status: "Investigating" },
        { id: 103, type: "Data Breach", status: "Critical" }
    ];

    const incidentsList = document.getElementById("incidents-list");
    incidentsList.innerHTML = incidents
        .map(
            incident =>
                `<div class="incident">
                    <p><strong>ID:</strong> ${incident.id}</p>
                    <p><strong>Type:</strong> ${incident.type}</p>
                    <p><strong>Status:</strong> ${incident.status}</p>
                </div>`
        )
        .join("");
}

function renderSecurityAnalytics() {
    const accessTrendsCtx = document.getElementById("access-trends-chart").getContext("2d");
    new Chart(accessTrendsCtx, {
        type: "line",
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [
                {
                    label: "Access Attempts",
                    data: [20, 40, 50, 30, 60],
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 2,
                    fill: false
                }
            ]
        }
    });

    const alertsTrendsCtx = document.getElementById("alerts-trends-chart").getContext("2d");
    new Chart(alertsTrendsCtx, {
        type: "bar",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
                {
                    label: "Security Alerts",
                    data: [15, 30, 20, 40],
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                }
            ]
        }
    });
}
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
