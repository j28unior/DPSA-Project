// project/js/modules/search.js

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

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');
    const filterForm = document.getElementById('filter-form');
    const recommendationContainer = document.getElementById('recommendation-container');
    const searchAudio = document.getElementById('search-audio');

    // Sample Data for Autocomplete Suggestions
    const sampleSuggestions = [
        "Employee Handbook 2024",
        "Data Privacy Policy",
        "Effective Team Communication",
        "Analytics in KMS",
        "Data Security Best Practices",
        "Performance Evaluation Metrics",
        "Compliance Guidelines",
        "Document Management System",
        "Collaboration Tools Overview",
        "IT Department Policies"
        // Add more suggestions as needed
    ];

    // Sample Search Results Data
    const sampleSearchResults = [
        {
            title: "Employee Handbook 2024",
            description: "Comprehensive guidelines on workplace conduct, data privacy, and performance evaluation metrics.",
            link: "repository.html#employee-handbook"
        },
        {
            title: "Data Privacy Policy",
            description: "Detailed policy outlining data handling, storage, and security protocols.",
            link: "repository.html#data-privacy-policy"
        },
        // Add more search results as needed
    ];

    // Sample Recommendations Data
    const sampleRecommendations = [
        {
            title: "Effective Team Communication",
            description: "Enhance your team's communication strategies with this comprehensive guide.",
            link: "repository.html#effective-communication"
        },
        {
            title: "Analytics in KMS",
            description: "Discover how to leverage analytics to improve knowledge management.",
            link: "repository.html#analytics-kms"
        },
        {
            title: "Data Security Best Practices",
            description: "Ensure the integrity and security of your data with these best practices.",
            link: "repository.html#data-security"
        }
        // Add more recommendations as needed
    ];

    // Function to Display Autocomplete Suggestions
    const showSuggestions = (query) => {
        suggestionsBox.innerHTML = "";
        if (query.length === 0) {
            suggestionsBox.style.display = "none";
            return;
        }
        const filteredSuggestions = sampleSuggestions.filter(item => 
            item.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Limit to top 5 suggestions

        if (filteredSuggestions.length === 0) {
            suggestionsBox.style.display = "none";
            return;
        }

        filteredSuggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.textContent = suggestion;
            div.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsBox.style.display = "none";
                performSearch(suggestion);
            });
            suggestionsBox.appendChild(div);
        });

        suggestionsBox.style.display = "block";
    };

    // Event Listener for Search Input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        showSuggestions(query);
    });

    // Event Listener for Search Button
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query !== "") {
            performSearch(query);
            searchAudio.play(); // Play notification sound
        }
    });

    // Function to Perform Search
    const performSearch = (query) => {
        // Simulate AI Analysis and Fetch Results
        const filteredResults = sampleSearchResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase())
        );

        displaySearchResults(filteredResults);
        generateRecommendations(query);
    };

    // Function to Display Search Results
    const displaySearchResults = (results) => {
        resultsContainer.innerHTML = "";
        if (results.length === 0) {
            resultsContainer.innerHTML = "<p>No results found. Try adjusting your search criteria.</p>";
            return;
        }

        results.forEach(result => {
            const card = document.createElement('div');
            card.classList.add('result-card');

            card.innerHTML = `
                <h4>${result.title}</h4>
                <p>${result.description}</p>
                <a href="${result.link}" class="read-more">Read More</a>
            `;

            resultsContainer.appendChild(card);
        });
    };

    // Function to Generate AI-Driven Recommendations
    const generateRecommendations = (query) => {
        recommendationContainer.innerHTML = "";
        // Simulate AI Recommendation based on query
        const relatedTopics = getRelatedTopics(query);
        relatedTopics.forEach(topic => {
            const card = document.createElement('div');
            card.classList.add('recommendation-card');

            card.innerHTML = `
                <i class="fas ${topic.icon} fa-2x"></i>
                <h4>${topic.title}</h4>
                <p>${topic.description}</p>
                <a href="${topic.link}" class="read-more">Read More</a>
            `;

            recommendationContainer.appendChild(card);
        });
    };

    // Function to Get Related Topics (Simulating AI Analysis)
    const getRelatedTopics = (query) => {
        // This function simulates AI-driven related topics based on the search query
        const related = [];

        if (query.toLowerCase().includes("communication")) {
            related.push({
                icon: "fa-file-alt",
                title: "Effective Team Communication",
                description: "Enhance your team's communication strategies with this comprehensive guide.",
                link: "repository.html#effective-communication"
            });
        }

        if (query.toLowerCase().includes("data")) {
            related.push({
                icon: "fa-shield-alt",
                title: "Data Security Best Practices",
                description: "Ensure the integrity and security of your data with these best practices.",
                link: "repository.html#data-security"
            });
        }

        if (query.toLowerCase().includes("policy")) {
            related.push({
                icon: "fa-chart-line",
                title: "Analytics in KMS",
                description: "Discover how to leverage analytics to improve knowledge management.",
                link: "repository.html#analytics-kms"
            });
        }

        // Add more conditions based on possible queries

        // If no related topics found, provide general recommendations
        if (related.length === 0) {
            related.push(...sampleRecommendations);
        }

        return related;
    };

    // Handle Filter Form Submission
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const filters = {
            date: document.getElementById('date').value,
            department: document.getElementById('department').value,
            documentType: document.getElementById('document-type').value,
            author: document.getElementById('author').value.trim(),
            relevance: document.getElementById('relevance').value
        };

        // Simulate AI Filtering based on selected filters
        const filteredResults = sampleSearchResults.filter(result => {
            let isValid = true;

            if (filters.date) {
                // Assuming sample data has a date attribute
                // For simulation, we'll skip date filtering
            }

            if (filters.department) {
                // Assuming sample data has a department attribute
                // For simulation, we'll skip department filtering
            }

            if (filters.documentType && !result.title.toLowerCase().includes(filters.documentType.toLowerCase())) {
                isValid = false;
            }

            if (filters.author) {
                // Assuming sample data has an author attribute
                // For simulation, we'll skip author filtering
            }

            if (filters.relevance) {
                // Assuming sample data has a relevance attribute
                // For simulation, we'll skip relevance filtering
            }

            return isValid;
        });

        displaySearchResults(filteredResults);
    });

    // Handle "Read More" Clicks with AI Simulation (Optional)
    // If you want to open a modal with more details, implement here

    // Handle Search Detail Modal (Optional)
    const searchDetailModal = document.getElementById('search-detail-modal');
    const searchModalTitle = document.getElementById('search-modal-title');
    const searchModalContent = document.getElementById('search-modal-content');

    // Function to Open Search Detail Modal
    const openSearchDetailModal = (title, content) => {
        searchModalTitle.textContent = title;
        searchModalContent.textContent = content;
        searchDetailModal.classList.remove('hidden');
        searchAudio.play(); // Play notification sound
    };

    // Close Search Detail Modal
    const closeSearchDetailModal = () => {
        searchDetailModal.classList.add('hidden');
    };

    const closeModalButtons = document.querySelectorAll('.close-modal-btn, .close-button');

    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.closest('#search-detail-modal')) {
                closeSearchDetailModal();
            }
            if (btn.closest('#logout-modal')) {
                closeLogoutModal();
            }
        });
    });

    // Close Modals by Clicking Outside
    window.addEventListener('click', (event) => {
        if (event.target == searchDetailModal) {
            closeSearchDetailModal();
        }
        if (event.target == logoutModal) {
            closeLogoutModal();
        }
    });

    // Responsive Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Initialize Document Types Chart
const ctxDocumentTypes = document.getElementById('documentTypesChart').getContext('2d');
const documentTypesChart = new Chart(ctxDocumentTypes, {
    type: 'pie',
    data: {
        labels: ['Policy', 'Report', 'Guidelines', 'Best Practices'],
        datasets: [{
            label: '# of Documents',
            data: [10, 5, 7, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
