// repository.js

document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    setupCategoryButtons();
    setupCaptureForm();
    loadInitialCategory("All");
});

function setupCategoryButtons() {
    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            displayDocumentsByCategory(category);
        });
    });
}

function displayDocumentsByCategory(category) {
    const container = document.getElementById("documents-container");
    container.innerHTML = "";

    let filteredDocs = [];
    if (category === "All") {
        filteredDocs = documents;
    } else {
        filteredDocs = documents.filter(doc => doc.type === category);
    }

    if (filteredDocs.length === 0) {
        container.textContent = "No documents found in this category.";
        return;
    }

    filteredDocs.forEach(doc => {
        const docCard = document.createElement("div");
        docCard.classList.add("card");

        docCard.innerHTML = `
            <img src="assets/images/${doc.type.toLowerCase().replace(' ', '-')}.png" alt="${doc.type}" class="card-image">
            <h4>${doc.title}</h4>
            <p>Author: ${doc.author}</p>
            <p>Date: ${doc.date}</p>
            <p>Tags: ${doc.tags.join(", ")}</p>
            <button onclick="viewDocument(${doc.id})">View</button>
            <button onclick="viewVersionHistory(${doc.id})">Version History</button>
        `;

        container.appendChild(docCard);
    });
}

function viewVersionHistory(docId) {
    const doc = documents.find(d => d.id === docId);
    if (!doc) {
        alert("Document not found.");
        return;
    }

    const versionDiv = document.getElementById("version-history");
    versionDiv.innerHTML = `
        <h4>Version History for "${doc.title}"</h4>
        <ul>
            ${doc.history.map(ver => `<li>Version ${ver.version} - ${ver.date}: ${ver.summary}</li>`).join("")}
        </ul>
    `;
}

function setupCaptureForm() {
    const captureForm = document.getElementById("capture-form");
    const captureAudio = document.getElementById("repository-audio");

    captureForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value.trim();
        const type = document.getElementById("type").value;
        const department = document.getElementById("department").value;
        const author = document.getElementById("author").value.trim();
        const content = document.getElementById("content").value.trim();

        if (!title || !type || !department || !author || !content) {
            alert("Please fill in all fields.");
            return;
        }

        const newDoc = {
            id: documents.length + 1,
            title,
            type,
            department,
            author,
            date: new Date().toISOString().split('T')[0],
            content,
            tags: generateTags(content),
            version: 1,
            history: [
                { version: 1, date: new Date().toISOString().split('T')[0], summary: "Initial creation." }
            ]
        };

        documents.push(newDoc);
        captureAudio.play();
        alert("Document added successfully!");
        captureForm.reset();
        displayDocumentsByCategory(type);
    });
}

function generateTags(content) {
    // Simple AI-Generated Tags Simulation: Extract keywords
    const keywords = content.split(" ").filter(word => word.length > 5);
    return [...new Set(keywords)].slice(0, 5); // Unique tags, limit to 5
}

function viewDocument(docId) {
    alert(`Viewing document ID: ${docId}`);
    // In a real system, redirect to document detail page
}

function loadInitialCategory(category) {
    displayDocumentsByCategory(category);
}

// project/js/modules/repository.js

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

    // Sample Documents Data
    const documents = [
        {
            id: 1,
            title: "Employee Handbook 2024",
            type: "Policy",
            department: "Human Resources",
            author: "Patrick Zungu",
            content: "Comprehensive guidelines on workplace conduct, data privacy, and performance evaluation metrics.",
            tags: ["Workplace Conduct", "Data Privacy", "Performance Evaluation"],
            history: [
                { version: "1.0", date: "2024-01-15", editor: "Innocent Manganyi", summary: "Initial creation of the handbook." },
                { version: "1.1", date: "2024-03-10", editor: "Bavumile Cele", summary: "Updated data privacy section." }
            ]
        },
        {
            id: 2,
            title: "Data Privacy Policy",
            type: "Policy",
            department: "IT",
            author: "Sibonelo Masondo",
            content: "Detailed policy outlining data handling, storage, and security protocols.",
            tags: ["Data Handling", "Storage", "Security Protocols"],
            history: [
                { version: "1.0", date: "2024-02-20", editor: "Patrick Zungu", summary: "Initial creation of data privacy policy." }
            ]
        },
        {
            id: 3,
            title: "Sales Performance Report Q1",
            type: "Report",
            department: "Sales",
            author: "Monwabisa Sibiya",
            content: "Analysis of sales performance metrics for the first quarter.",
            tags: ["Sales Performance", "Q1 Analysis", "Metrics"],
            history: [
                { version: "1.0", date: "2024-04-05", editor: "Innocent Manganyi", summary: "Initial report creation." },
                { version: "1.1", date: "2024-04-15", editor: "Innocent Manganyi", summary: "Added Q1 sales trends." }
            ]
        }
        // Add more documents as needed
    ];

    // Function to Generate AI Tags (Simulated)
    const generateAITags = (content) => {
        // Simulate AI by extracting keywords
        const keywords = content.match(/\b\w{6,}\b/g) || [];
        // Return unique keywords as tags
        return [...new Set(keywords.map(word => word.charAt(0).toUpperCase() + word.slice(1)))];
    };

    // Function to Display Documents
    const displayDocuments = (docs) => {
        const documentsContainer = document.getElementById('documents-container');
        documentsContainer.innerHTML = "";

        if (docs.length === 0) {
            documentsContainer.innerHTML = "<p>No documents found in this category.</p>";
            return;
        }

        docs.forEach(doc => {
            const card = document.createElement('div');
            card.classList.add('document-card');

            // Generate AI Tags if not present
            if (!doc.tags || doc.tags.length === 0) {
                doc.tags = generateAITags(doc.content);
            }

            // Generate AI Suggestions (Simulated)
            const suggestions = generateAISuggestions(doc);

            card.innerHTML = `
                <h4>${doc.title}</h4>
                <p><strong>Type:</strong> ${doc.type} | <strong>Department:</strong> ${doc.department}</p>
                <p><strong>Author:</strong> ${doc.author}</p>
                <p>${doc.content}</p>
                <div class="tags-container">
                    ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="read-more" data-doc-id="${doc.id}">Read More</a>
            `;

            documentsContainer.appendChild(card);
        });

        // Add Event Listeners to "Read More" Links
        const readMoreLinks = document.querySelectorAll('.read-more');
        readMoreLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const docId = parseInt(link.getAttribute('data-doc-id'));
                const documentDetail = documents.find(d => d.id === docId);
                if (documentDetail) {
                    openDocumentDetailModal(documentDetail);
                }
            });
        });
    };

    // Function to Generate AI Suggestions (Simulated)
    const generateAISuggestions = (doc) => {
        // Simulate AI suggestions based on document type
        const suggestions = [];
        switch(doc.type) {
            case "Policy":
                suggestions.push("Compliance", "Regulations");
                break;
            case "Report":
                suggestions.push("Analytics", "Trends");
                break;
            case "Guidelines":
                suggestions.push("Best Practices", "Procedures");
                break;
            case "Best Practices":
                suggestions.push("Case Studies", "Success Stories");
                break;
            default:
                suggestions.push("General");
        }
        return suggestions;
    };

    // Function to Open Document Detail Modal
    const openDocumentDetailModal = (doc) => {
        const modal = document.getElementById('document-detail-modal');
        const modalTitle = document.getElementById('document-modal-title');
        const modalContent = document.getElementById('document-modal-content');

        modalTitle.textContent = doc.title;
        modalContent.innerHTML = `
            <p><strong>Type:</strong> ${doc.type}</p>
            <p><strong>Department:</strong> ${doc.department}</p>
            <p><strong>Author:</strong> ${doc.author}</p>
            <p>${doc.content}</p>
            <h4>Tags:</h4>
            <div class="tags-container">
                ${doc.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h4>Version History:</h4>
            <ul>
                ${doc.history.map(version => `
                    <li>
                        <strong>Version ${version.version}</strong> - ${version.date} by ${version.editor}
                        <p>${version.summary}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        modal.classList.remove('hidden');

        // Optionally, play a notification sound
        const repositoryAudio = document.getElementById('repository-audio');
        repositoryAudio.play();
    };

    // Function to Close Document Detail Modal
    const closeDocumentDetailModal = () => {
        const modal = document.getElementById('document-detail-modal');
        modal.classList.add('hidden');
    };

    // Event Listeners for Closing Modals
    const closeModalButtons = document.querySelectorAll('.close-modal-btn, .close-button');
    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.closest('#document-detail-modal')) {
                closeDocumentDetailModal();
            }
            if (btn.closest('#logout-modal')) {
                closeLogoutModal();
            }
        });
    });

    // Close Modals by Clicking Outside
    window.addEventListener('click', (event) => {
        const documentModal = document.getElementById('document-detail-modal');
        const logoutModal = document.getElementById('logout-modal');
        if (event.target == documentModal) {
            closeDocumentDetailModal();
        }
        if (event.target == logoutModal) {
            closeLogoutModal();
        }
    });

    // Category Filtering
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Get selected category
            const selectedCategory = button.getAttribute('data-category');
            // Filter documents
            if (selectedCategory === "All") {
                displayDocuments(documents);
            } else {
                const filteredDocs = documents.filter(doc => doc.type === selectedCategory);
                displayDocuments(filteredDocs);
            }
        });
    });

    // Display All Documents on Page Load
    displayDocuments(documents);

    // Handle Knowledge Capture Form Submission
    const captureForm = document.getElementById('capture-form');
    captureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newDoc = {
            id: documents.length + 1,
            title: document.getElementById('title').value.trim(),
            type: document.getElementById('type').value,
            department: document.getElementById('department').value,
            author: document.getElementById('author').value.trim(),
            content: document.getElementById('content').value.trim(),
            tags: generateAITags(document.getElementById('content').value.trim()),
            history: [
                { version: "1.0", date: new Date().toISOString().split('T')[0], editor: document.getElementById('author').value.trim(), summary: "Initial creation of the document." }
            ]
        };
        documents.push(newDoc);
        displayDocuments(documents);
        captureForm.reset();

        // Optionally, play a notification sound
        const repositoryAudio = document.getElementById('repository-audio');
        repositoryAudio.play();

        alert("New document has been submitted successfully.");
    });

    // Version Control Display (Optional)
    const versionHistoryContainer = document.getElementById('version-history');
    const displayVersionHistory = () => {
        versionHistoryContainer.innerHTML = "";
        documents.forEach(doc => {
            doc.history.forEach(version => {
                const entry = document.createElement('div');
                entry.classList.add('version-entry');
                entry.innerHTML = `
                    <h4>Version ${version.version}</h4>
                    <p><strong>Date:</strong> ${version.date} | <strong>Editor:</strong> ${version.editor}</p>
                    <p>${version.summary}</p>
                `;
                versionHistoryContainer.appendChild(entry);
            });
        });
    };

    // Display Version History on Page Load
    displayVersionHistory();
});
