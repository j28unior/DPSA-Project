// hr_dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    loadOpenPositions();
    loadRecentApplications();
    loadHRDocuments();
});

function loadOpenPositions() {
    const positionsList = document.getElementById("open-positions");
    // Simulate open positions
    const positions = [
        "Senior HR Specialist",
        "Recruitment Coordinator",
        "Employee Relations Manager"
    ];

    positions.forEach(position => {
        const listItem = document.createElement("li");
        listItem.textContent = position;
        positionsList.appendChild(listItem);
    });
}

function loadRecentApplications() {
    const applicationsList = document.getElementById("recent-applications");
    // Simulate recent applications
    const applications = [
        "John Doe - Senior HR Specialist",
        "Jane Smith - Recruitment Coordinator",
        "Michael Brown - Employee Relations Manager"
    ];

    applications.forEach(app => {
        const listItem = document.createElement("li");
        listItem.textContent = app;
        applicationsList.appendChild(listItem);
    });
}

function loadHRDocuments() {
    const documentsList = document.getElementById("hr-documents-list");
    // Simulate HR documents
    const hrDocuments = [
        {
            title: "HR Recruitment Guidelines",
            link: "#"
        },
        {
            title: "Employee Onboarding Process",
            link: "#"
        },
        {
            title: "Performance Evaluation Forms",
            link: "#"
        }
    ];

    hrDocuments.forEach(doc => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = doc.link;
        link.textContent = doc.title;
        listItem.appendChild(link);
        documentsList.appendChild(listItem);
    });
}

function manageDocuments() {
    alert("Navigating to HR Document Management...");
    // Implement navigation or functionality as needed
}
document.addEventListener("DOMContentLoaded", () => {
    populateOpenPositions();
    populateRecentApplications();
    renderAnalytics();
});

function populateOpenPositions() {
    const positions = [
        "Software Engineer - IT Department",
        "HR Assistant - HR Department",
        "Project Manager - Operations"
    ];
    const openPositionsList = document.getElementById("open-positions");
    openPositionsList.innerHTML = positions
        .map((position) => `<li>${position}</li>`)
        .join("");
}

function populateRecentApplications() {
    const applications = [
        { name: "Jane Doe", position: "Software Engineer" },
        { name: "John Smith", position: "HR Assistant" },
        { name: "Emily Davis", position: "Project Manager" }
    ];
    const recentApplicationsList = document.getElementById("recent-applications");
    recentApplicationsList.innerHTML = applications
        .map(
            (app) =>
                `<li><strong>${app.name}:</strong> ${app.position}</li>`
        )
        .join("");
}

function manageDocuments() {
    alert("Document management module is under construction.");
}

function viewDocument(documentName) {
    alert(`Viewing details for document: ${documentName}`);
}

function renderAnalytics() {
    const ctx1 = document.getElementById("employee-turnover-chart").getContext("2d");
    new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [
                {
                    label: "Employee Turnover",
                    data: [5, 4, 6, 3, 5],
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 2,
                    fill: false
                }
            ]
        }
    });

    const ctx2 = document.getElementById("department-hiring-chart").getContext("2d");
    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["IT", "HR", "Operations", "Sales"],
            datasets: [
                {
                    label: "Hiring Statistics",
                    data: [10, 7, 5, 8],
                    backgroundColor: "rgba(54, 162, 235, 0.5)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                }
            ]
        }
    });
}
