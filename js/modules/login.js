// project/js/modules/login.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Login module loaded."); // Debugging

    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
    const otpContainer = document.getElementById("otp-container");
    const otpForm = document.getElementById("otp-form");
    const otpError = document.getElementById("otp-error");
    const ssoButton = document.getElementById("sso-button");
    // const loginAudio = document.getElementById("login-audio"); // Temporarily disable

    let currentUser = null;

    // Debug: Check if 'users' array is accessible
    console.log("Users array:", users);

    // Traditional Login Handler
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Login form submitted."); // Debugging

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        console.log(`Entered Username: ${username}, Password: ${password}`); // Debugging

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log("User found:", user); // Debugging
            currentUser = user;
            // Simulate sending OTP (In reality, send via email/SMS)
            console.log(`OTP for ${user.email}: ${user.otp}`);
            // playNotificationSound("login-audio"); // Temporarily disable
            otpContainer.classList.remove("hidden");
            loginForm.classList.add("hidden");
            console.log("OTP modal should now be visible."); // Debugging
        } else {
            console.log("Invalid credentials."); // Debugging
            loginError.textContent = "Invalid username or password.";
            // playNotificationSound("login-audio"); // Temporarily disable
        }
    });

    // SSO Login Handler
    ssoButton.addEventListener("click", () => {
        console.log("SSO login button clicked."); // Debugging

        // Simulate SSO authentication delay
        setTimeout(() => {
            // For simulation, automatically select a predefined user
            const ssoUser = users.find(u => u.username === "admin"); // Change as needed
            if (ssoUser) {
                console.log("SSO User found:", ssoUser); // Debugging
                currentUser = ssoUser;
                // Simulate sending OTP (In reality, send via email/SMS)
                console.log(`OTP for ${ssoUser.email}: ${ssoUser.otp}`);
                // playNotificationSound("login-audio"); // Temporarily disable
                otpContainer.classList.remove("hidden");
                loginForm.classList.add("hidden");
                console.log("OTP modal should now be visible for SSO user."); // Debugging
            } else {
                console.log("SSO User not found."); // Debugging
                loginError.textContent = "SSO authentication failed. Please try again.";
            }
        }, 1000); // 1-second delay to simulate authentication
    });

    // OTP Form Handler
    otpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("OTP form submitted."); // Debugging

        const enteredOtp = document.getElementById("otp-input").value.trim();
        console.log(`Entered OTP: ${enteredOtp}`); // Debugging

        if (currentUser && enteredOtp === currentUser.otp) {
            console.log("OTP verified. Logging in."); // Debugging
            // Successful login
            localStorage.setItem("loggedInUser", JSON.stringify(currentUser));
            // playNotificationSound("login-audio"); // Temporarily disable
            redirectUser(currentUser.role);
        } else {
            console.log("Invalid OTP."); // Debugging
            otpError.textContent = "Invalid OTP. Please try again.";
        }
    });

    // Function to redirect user based on role
    function redirectUser(role) {
        console.log(`Redirecting to ${role} dashboard.`); // Debugging
        switch(role) {
            case "Admin":
                window.location.href = "admin.html";
                break;
            case "Chief Security Officer":
                window.location.href = "cso_dashboard.html";
                break;
            case "HR Manager":
                window.location.href = "hr_dashboard.html";
                break;
            case "IT Manager":
                window.location.href = "it_dashboard.html";
                break;
            case "Sales Manager":
                window.location.href = "sales_dashboard.html";
                break;
            case "Security Administrator":
                window.location.href = "security_admin.html";
                break;
            case "Employee":
                window.location.href = "dashboard.html";
                break;
            default:
                window.location.href = "dashboard.html";
        }
    }

    /*
    // Function to play notification sound
    function playNotificationSound(audioId) {
        const audio = document.getElementById(audioId);
        if (audio) {
            audio.play();
            console.log("Playing notification sound."); // Debugging
        }
    }
    */

    // Function to close OTP modal when clicking on close button
    window.closeOtpModal = function() {
        otpContainer.classList.add("hidden");
        loginForm.classList.remove("hidden");
        otpForm.reset();
        otpError.textContent = "";
    }
});
