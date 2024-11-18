// admin.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    checkAdmin();
    loadAccessControl();
    loadSecurityAlerts();
    loadAuditLogs();
    loadFeedbackReports();
});

function loadAccessControl() {
    const tableBody = document.getElementById("access-table-body");
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>${user.department}</td>
            <td>
                ${user.username !== currentUser.username ? `<button onclick="changeRole(${user.id})">Change Role</button>` : `<em>Current User</em>`}
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function changeRole(userId) {
    const user = users.find(u => u.id === userId);
    const newRole = prompt("Enter new role for the user (Admin, HR, User):", user.role);
    if (newRole && ["Admin", "HR", "User"].includes(newRole)) {
        user.role = newRole;
        alert("Role updated successfully!");
        location.reload();
    } else {
        alert("Invalid role entered.");
    }
}

function loadSecurityAlerts() {
    const alertsList = document.getElementById("security-alerts");
    // Simulate AI-generated security alerts
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

function loadAuditLogs() {
    const logList = document.getElementById("audit-log-list");
    // Simulate audit logs
    const auditLogs = [
        "2023-09-15 10:23:45 - Alice Johnson updated IT Security Policy.",
        "2023-09-16 14:12:30 - Bob Smith accessed HR Recruitment Guidelines.",
        "2023-09-17 09:45:10 - Charlie Davis commented on Sales Report.",
        "2023-10-01 11:30:25 - Alice Johnson reviewed Best Practices document."
    ];

    auditLogs.forEach(log => {
        const listItem = document.createElement("li");
        listItem.textContent = log;
        logList.appendChild(listItem);
    });
}

function loadFeedbackReports() {
    const aggregatedFeedback = document.getElementById("aggregated-feedback");
    const sentimentAnalysis = document.getElementById("sentiment-analysis");

    // Simulate aggregated feedback
    const feedbackSummary = {
        totalFeedbacks: feedbacks.length,
        averageRating: (feedbacks.reduce((acc, fb) => acc + fb.rating, 0) / feedbacks.length).toFixed(2)
    };

    aggregatedFeedback.innerHTML = `
        <li>Total Feedbacks: ${feedbackSummary.totalFeedbacks}</li>
        <li>Average Rating: ${feedbackSummary.averageRating}/5</li>
    `;

    // Simulate sentiment analysis
    const sentiments = { Positive: 0, Neutral: 0, Negative: 0 };
    feedbacks.forEach(fb => {
        sentiments[fb.sentiment]++;
    });

    sentimentAnalysis.innerHTML = `
        <p>Positive: ${sentiments.Positive}</p>
        <p>Neutral: ${sentiments.Neutral}</p>
        <p>Negative: ${sentiments.Negative}</p>
    `;
}
// project/js/modules/admin.js

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

    // Populate Audit Logs with Dummy Data (if not already in HTML)
    const auditLogList = document.getElementById('audit-log-list');
    const dummyLogs = [
        { timestamp: "2024-04-25 10:15 AM", user: "jdoe", action: "updated policy document." },
        { timestamp: "2024-04-25 11:30 AM", user: "asmith", action: "added a new user to IT department." },
        { timestamp: "2024-04-26 09:45 AM", user: "jdoe", action: "deleted obsolete files from repository." },
        { timestamp: "2024-04-26 02:20 PM", user: "asmith", action: "performed system maintenance." },
        // Add more dummy logs as needed
    ];
    

    dummyLogs.forEach(log => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="timestamp">${log.timestamp}</span> - <strong>${log.user}</strong> ${log.action}`;
        auditLogList.appendChild(li);
    });

    // Populate Aggregated Feedback with Dummy Data (if not already in HTML)
    const aggregatedFeedbackList = document.getElementById('aggregated-feedback-list');
    const dummyFeedback = [
        "The KMS has significantly improved our document management process.",
        "Collaboration tools are intuitive and enhance team productivity.",
        "Analytics features provide valuable insights into knowledge usage.",
        "The user interface is clean and easy to navigate.",
        "Security measures ensure that our data is protected.",
        // Add more dummy feedback as needed
    ];

    dummyFeedback.forEach(feedback => {
        const li = document.createElement('li');
        li.textContent = `"${feedback}"`;
        aggregatedFeedbackList.appendChild(li);
    });

    // Example: Fetch and Display Role-Based Access (Dummy Data already in HTML)
    // If you have dynamic data, implement fetching and rendering here

    // You can also add more interactive functionalities as needed
});
// Populate Activity Log with Dummy Data
const activityLogBody = document.getElementById('activity-log-body');
const dummyActivities = [
    { timestamp: "2024-04-27 09:00 AM", admin: "jdoe", activity: "Logged In", details: "Admin jdoe logged into the system." },
    { timestamp: "2024-04-27 09:15 AM", admin: "asmith", activity: "Uploaded File", details: "Admin asmith uploaded 'Security_Policy.pdf' to the repository." },
    { timestamp: "2024-04-27 09:30 AM", admin: "jdoe", activity: "Edited User Role", details: "Admin jdoe changed user 'mbrown' role from 'User' to 'Manager'." },
    { timestamp: "2024-04-27 10:00 AM", admin: "asmith", activity: "Performed Maintenance", details: "Admin asmith performed scheduled server maintenance." },
    { timestamp: "2024-04-27 10:30 AM", admin: "jdoe", activity: "Deleted File", details: "Admin jdoe deleted 'Old_Document.docx' from the repository." },
    { timestamp: "2024-04-27 11:00 AM", admin: "asmith", activity: "Generated Report", details: "Admin asmith generated 'Security_Report_April.pdf'." },
    { timestamp: "2024-04-27 11:30 AM", admin: "jdoe", activity: "Logged Out", details: "Admin jdoe logged out of the system." },
    { timestamp: "2024-04-27 12:00 PM", admin: "asmith", activity: "Updated System", details: "Admin asmith updated system software to version 2.1." },
    { timestamp: "2024-04-27 12:30 PM", admin: "jdoe", activity: "Added User", details: "Admin jdoe added new user 'cwhite' with role 'Employee'." },
    { timestamp: "2024-04-27 01:00 PM", admin: "asmith", activity: "Reviewed Logs", details: "Admin asmith reviewed security logs for unusual activities." },
    // Add more dummy activities as needed
];

dummyActivities.forEach(activity => {
    const tr = document.createElement('tr');

    const tdTimestamp = document.createElement('td');
    tdTimestamp.textContent = activity.timestamp;
    tr.appendChild(tdTimestamp);

    const tdAdmin = document.createElement('td');
    tdAdmin.textContent = activity.admin;
    tr.appendChild(tdAdmin);

    const tdActivity = document.createElement('td');
    tdActivity.textContent = activity.activity;
    tr.appendChild(tdActivity);

    const tdDetails = document.createElement('td');
    tdDetails.textContent = activity.details;
    tr.appendChild(tdDetails);

    activityLogBody.appendChild(tr);
});
