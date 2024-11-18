// project/js/modules/collaboration.js

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

    // Close Modals when clicking on close buttons
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

    // AI Chatbot Functionality
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    const collaborationAudio = document.getElementById('collaboration-audio');

    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message === "") return;

        // Display User Message
        displayMessage(message, 'user');

        // Clear Input
        chatInput.value = "";

        // Simulate AI Response after a delay
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            displayMessage(aiResponse, 'ai');

            // Play notification sound
            collaborationAudio.play();
        }, 1000);
    };

    const displayMessage = (message, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.innerHTML = `
            <div class="message-content">
                ${message}
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getAIResponse = (message) => {
        // Simple AI simulation using predefined responses
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi there! What can I do for you?",
            "help": "Sure, I'm here to help. You can ask me about documents, policies, or any other inquiries.",
            "policy": "Our policies are categorized under different sections. Would you like to view them?",
            "thank you": "You're welcome! If you have any more questions, feel free to ask.",
            "default": "I'm sorry, I didn't understand that. Could you please rephrase?"
        };

        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || responses["default"];
    };

    // Event Listeners for Chatbot
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Feedback and Ratings Functionality
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');
    const feedbackAudio = document.getElementById('collaboration-audio');

    // Populate Document Dropdown
    const documentSelect = document.getElementById('document');
    const documents = [
        "Employee Handbook 2024",
        "Data Privacy Policy",
        "Sales Performance Report Q1",
        "IT Security Guidelines",
        "Best Practices in Customer Service"
        // Add more document titles as needed
    ];

    documents.forEach(doc => {
        const option = document.createElement('option');
        option.value = doc;
        option.textContent = doc;
        documentSelect.appendChild(option);
    });

    // Handle Feedback Form Submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedDocument = document.getElementById('document').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (selectedDocument === "" || rating === "") {
            alert("Please select a document and provide a rating.");
            return;
        }

        // Create Feedback Entry
        const feedbackEntry = document.createElement('div');
        feedbackEntry.classList.add('feedback-entry');
        feedbackEntry.innerHTML = `
            <p><strong>Document:</strong> ${selectedDocument}</p>
            <p class="rating">${generateStarRating(rating)}</p>
            <p class="comments">${comments}</p>
        `;
        feedbackList.prepend(feedbackEntry);

        // Reset Form
        feedbackForm.reset();

        // Play notification sound
        feedbackAudio.play();
    });

    const generateStarRating = (rating) => {
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += `<i class="fas fa-star"></i> `;
        }
        for (let i = rating; i < 5; i++) {
            stars += `<i class="far fa-star"></i> `;
        }
        return stars;
    };
});
