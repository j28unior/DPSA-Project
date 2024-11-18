// project/js/modules/profile.js

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
            if (btn.closest('#edit-profile-modal')) {
                closeEditProfileModal();
            }
            if (btn.closest('#document-detail-modal')) {
                closeDocumentDetailModal();
            }
            if (btn.closest('#logout-modal')) {
                closeLogoutModal();
            }
            if (btn.closest('#course-recommendation-modal')) {
                closeCourseRecommendationModal();
            }
        });
    });

    // Close Modals by Clicking Outside
    window.addEventListener('click', (event) => {
        const editProfileModal = document.getElementById('edit-profile-modal');
        const documentDetailModal = document.getElementById('document-detail-modal');
        const logoutModal = document.getElementById('logout-modal');
        const courseRecommendationModal = document.getElementById('course-recommendation-modal');
        if (event.target == editProfileModal) {
            closeEditProfileModal();
        }
        if (event.target == documentDetailModal) {
            closeDocumentDetailModal();
        }
        if (event.target == logoutModal) {
            closeLogoutModal();
        }
        if (event.target == courseRecommendationModal) {
            closeCourseRecommendationModal();
        }
    });

    // Edit Profile Modal Elements
    const editProfileButton = document.getElementById('edit-profile-button');
    const editProfileModal = document.getElementById('edit-profile-modal');
    const closeEditProfileModal = () => {
        editProfileModal.classList.add('hidden');
    };
    const editProfileForm = document.getElementById('edit-profile-form');

    // Event Listener to Open Edit Profile Modal
    editProfileButton.addEventListener('click', () => {
        populateEditForm();
        editProfileModal.classList.remove('hidden');
    });

    // Populate Edit Form with Current Profile Details
    const populateEditForm = () => {
        document.getElementById('edit-name').value = document.getElementById('user-name').textContent;
        document.getElementById('edit-position').value = document.querySelector('#employee-profile .profile-details p:nth-child(2)').textContent.replace('Position: ', '');
        document.getElementById('edit-department').value = document.querySelector('#employee-profile .profile-details p:nth-child(3)').textContent.replace('Department: ', '');
        document.getElementById('edit-email').value = document.querySelector('#employee-profile .profile-details p:nth-child(4)').textContent.replace('Email: ', '');
        document.getElementById('edit-phone').value = document.querySelector('#employee-profile .profile-details p:nth-child(5)').textContent.replace('Phone: ', '');
    };

    // Handle Edit Profile Form Submission
    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Update Profile Details
        document.getElementById('user-name').textContent = document.getElementById('edit-name').value.trim();
        document.querySelector('#employee-profile .profile-details p:nth-child(2)').textContent = `Position: ${document.getElementById('edit-position').value.trim()}`;
        document.querySelector('#employee-profile .profile-details p:nth-child(3)').textContent = `Department: ${document.getElementById('edit-department').value.trim()}`;
        document.querySelector('#employee-profile .profile-details p:nth-child(4)').textContent = `Email: ${document.getElementById('edit-email').value.trim()}`;
        document.querySelector('#employee-profile .profile-details p:nth-child(5)').textContent = `Phone: ${document.getElementById('edit-phone').value.trim()}`;

        // Close Modal
        closeEditProfileModal();

        // Play notification sound
        const profileAudio = document.getElementById('profile-audio');
        profileAudio.play();

        alert("Profile updated successfully.");
    });

    // Career Questionnaire Functionality
    const careerForm = document.getElementById('career-form');
    const trainingSuggestions = document.getElementById('training-suggestions');

    careerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const careerGoals = document.getElementById('career-goals').value.trim();
        const preferredSkills = document.getElementById('preferred-skills').value.trim().split(',').map(skill => skill.trim());
        const availableTime = document.getElementById('available-time').value;

        // Generate Training Suggestions (Dummy Logic)
        let suggestionsHTML = "<h4>Training Suggestions:</h4><ul>";
        preferredSkills.forEach(skill => {
            const suggestion = getTrainingSuggestion(skill, availableTime);
            suggestionsHTML += `<li><strong>${skill}</strong>: ${suggestion}</li>`;
        });
        suggestionsHTML += "</ul>";

        trainingSuggestions.innerHTML = suggestionsHTML;

        // Play notification sound
        const profileAudio = document.getElementById('profile-audio');
        profileAudio.play();
    });

    const getTrainingSuggestion = (skill, time) => {
        // Dummy data for training suggestions
        const trainingData = {
            "Cloud Security": {
                course: "Cloud Security Certification",
                university: "University of Cape Town",
                duration: "6 Months",
                cost: "R50,000",
                link: "https://www.uct.ac.za/"
            },
            "Data Analytics": {
                course: "Advanced Data Analytics",
                university: "University of Witwatersrand",
                duration: "4 Months",
                cost: "R40,000",
                link: "https://www.wits.ac.za/"
            },
            "Project Management": {
                course: "Certified Project Manager",
                university: "Stellenbosch University",
                duration: "5 Months",
                cost: "R45,000",
                link: "https://www.sun.ac.za/"
            },
            "Communication": {
                course: "Effective Communication Skills",
                university: "University of Pretoria",
                duration: "3 Months",
                cost: "R30,000",
                link: "https://www.up.ac.za/"
            },
            "Technical Writing": {
                course: "Technical Writing Essentials",
                university: "University of Johannesburg",
                duration: "2 Months",
                cost: "R25,000",
                link: "https://www.uj.ac.za/"
            }
            // Add more skills as needed
        };

        if (trainingData[skill]) {
            const { course, university, duration, cost, link } = trainingData[skill];
            return `Enroll in <a href="${link}" target="_blank">${course}</a> at ${university}. Duration: ${duration}, Cost: ${cost}.`;
        } else {
            return "No training suggestions available at the moment.";
        }
    };

    // AI-Powered Course Recommendation on Login
    const courseRecommendationModal = document.getElementById('course-recommendation-modal');

    const recommendCourse = () => {
        // Dummy AI logic to suggest a course based on existing skills and gaps
        const suggestedCourse = {
            course: "Network Security Essentials",
            university: "University of Pretoria",
            duration: "3 Months",
            cost: "R30,000",
            link: "https://www.up.ac.za/"
        };

        const courseDetails = document.querySelector('#course-recommendation-modal .course-details');
        courseDetails.innerHTML = `
            <p><strong>Course Name:</strong> ${suggestedCourse.course}</p>
            <p><strong>University:</strong> ${suggestedCourse.university}</p>
            <p><strong>Duration:</strong> ${suggestedCourse.duration}</p>
            <p><strong>Cost:</strong> ${suggestedCourse.cost}</p>
            <p><strong>Where to Study:</strong> <a href="${suggestedCourse.link}" target="_blank">Visit ${suggestedCourse.university}</a></p>
        `;

        courseRecommendationModal.classList.remove('hidden');

        // Play notification sound
        const profileAudio = document.getElementById('profile-audio');
        profileAudio.play();
    };

    // Close Course Recommendation Modal
    const closeCourseRecommendationModal = () => {
        courseRecommendationModal.classList.add('hidden');
    };

    // Display AI Recommendation on Login
    recommendCourse();

    // Skill and Knowledge Map Enhancements with Tree Map using D3.js
    const createTreeMap = () => {
        const data = {
            name: "Skills Progression",
            children: [
                {
                    name: "Cloud Security",
                    children: [
                        { name: "Understanding Cloud Platforms" },
                        { name: "Implementing Security Protocols" },
                        { 
                            name: "Advanced Cloud Security",
                            children: [
                                { name: "Cloud Security Certification" }
                            ]
                        }
                    ]
                },
                {
                    name: "Data Analytics",
                    children: [
                        { name: "Basic Data Analysis" },
                        { name: "Statistical Methods" },
                        { 
                            name: "Advanced Data Analytics",
                            children: [
                                { name: "Machine Learning" },
                                { name: "Big Data Technologies" }
                            ]
                        }
                    ]
                },
                {
                    name: "Project Management",
                    children: [
                        { name: "Basic Project Planning" },
                        { name: "Risk Management" },
                        { 
                            name: "Certified Project Manager",
                            children: [
                                { name: "Agile Methodologies" },
                                { name: "Resource Allocation" }
                            ]
                        }
                    ]
                },
                {
                    name: "Ideal Job",
                    children: [
                        { name: "Chief Information Security Officer" }
                    ]
                }
            ]
        };

        const width = 800;
        const height = 500;

        const treemap = d3.treemap()
            .size([width, height])
            .padding(1)
            .round(true);

        const root = d3.hierarchy(data)
            .sum(d => d.children ? 0 : 1) // Each leaf node has a value of 1
            .sort((a, b) => b.height - a.height || b.value - a.value);

        treemap(root);

        const svg = d3.select("#treeMap")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        const leaf = svg.selectAll("g")
            .data(root.leaves())
            .enter().append("g")
            .attr("transform", d => `translate(${d.x0},${d.y0})`)
            .attr("class", "skill-node");

        leaf.append("rect")
            .attr("id", d => d.data.name)
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0)
            .attr("fill", d => d.parent.data.name === "Ideal Job" ? "#28a745" : "#6c757d")
            .attr("stroke", "#ffffff");

        leaf.append("text")
            .attr("x", 4)
            .attr("y", 14)
            .text(d => d.data.name)
            .attr("font-size", "12px")
            .attr("fill", "white");

        // Tooltip for additional information
        const tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        leaf.on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(getTooltipContent(d.data.name))
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
    };

    const getTooltipContent = (skillName) => {
        // Dummy data for tooltips
        const skillDetails = {
            "Understanding Cloud Platforms": "Learn about AWS, Azure, and Google Cloud platforms.",
            "Implementing Security Protocols": "Implement best security practices in cloud environments.",
            "Advanced Cloud Security": "Advanced strategies for securing cloud infrastructure.",
            "Cloud Security Certification": "Certification from University of Cape Town.",
            "Basic Data Analysis": "Introduction to data analysis techniques.",
            "Statistical Methods": "Learn statistical methods for data interpretation.",
            "Advanced Data Analytics": "Deep dive into machine learning and big data.",
            "Machine Learning": "Implement machine learning algorithms.",
            "Big Data Technologies": "Handling and analyzing big data using modern technologies.",
            "Basic Project Planning": "Fundamentals of project planning and execution.",
            "Risk Management": "Identify and manage project risks effectively.",
            "Certified Project Manager": "Advanced project management certification.",
            "Agile Methodologies": "Implement Agile methodologies in projects.",
            "Resource Allocation": "Efficiently allocate resources in project management.",
            "Chief Information Security Officer": "Leading the organization's information security strategy."
        };

        return skillDetails[skillName] || "";
    };

    // Initialize Tree Map
    createTreeMap();

    // Skill and Knowledge Map using Chart.js (Radar Chart)
    const ctx = document.getElementById('knowledgeMapCanvas').getContext('2d');
    const knowledgeMapChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Cloud Security', 'Data Analytics', 'Project Management', 'Communication', 'Technical Writing'],
            datasets: [{
                label: 'Proficiency Level',
                data: [3, 4, 5, 4, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: '#003366',
                borderWidth: 2,
                pointBackgroundColor: '#003366'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Add Study Options under Skills
    const knowledgeGapsSection = document.getElementById('knowledge-gaps');
    const studyOptions = {
        "Cloud Security": {
            university: "University of Cape Town",
            course: "Cloud Security Certification",
            duration: "6 Months",
            cost: "R50,000",
            link: "https://www.uct.ac.za/"
        },
        "Data Analytics": {
            university: "University of Witwatersrand",
            course: "Advanced Data Analytics",
            duration: "4 Months",
            cost: "R40,000",
            link: "https://www.wits.ac.za/"
        },
        // Add more skills as needed
    };

    // Function to Display Study Options
    const displayStudyOptions = () => {
        const gaps = knowledgeGapsSection.querySelectorAll('li');
        gaps.forEach(gap => {
            const skill = gap.textContent.trim();
            if (studyOptions[skill]) {
                const { university, course, duration, cost, link } = studyOptions[skill];
                const studyInfo = document.createElement('div');
                studyInfo.classList.add('study-info');
                studyInfo.innerHTML = `
                    <p><strong>Where to Study:</strong> <a href="${link}" target="_blank">${university}</a></p>
                    <p><strong>Course:</strong> ${course}</p>
                    <p><strong>Duration:</strong> ${duration}</p>
                    <p><strong>Cost:</strong> ${cost}</p>
                `;
                gap.appendChild(studyInfo);
            }
        });
    };

    // Call the function to display study options
    displayStudyOptions();

    // AI Chatbot Functionality
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    const profileAudio = document.getElementById('profile-audio');

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
            profileAudio.play();
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
            "hello": "Hello! How can I assist you with your profile today?",
            "hi": "Hi there! What would you like to know?",
            "help": "Sure, I can help you manage your profile, view your skill map, or discuss succession planning.",
            "skills": "Your current skill proficiency levels are displayed in the Skill and Knowledge Map section.",
            "succession": "In the Succession Planning section, you can view suggested successors and their knowledge needs.",
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
});
