// Dummy Users Data
const users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        name: "Alice Johnson",
        role: "Admin",
        department: "IT",
        expertise: ["Security", "Networking"],
        recentContributions: ["Updated IT Policy", "Network Diagram"],
        email: "alice.johnson@dpsa.gov.za",
        phone: "123-456-7890",
        otp: "654321" // Predefined Dummy OTP
    },
    {
        id: 2,
        username: "cso",
        password: "cso123",
        name: "Bob Smith",
        role: "Chief Security Officer",
        department: "Security",
        expertise: ["Cybersecurity", "Risk Management"],
        recentContributions: ["Security Audit Report"],
        email: "bob.smith@dpsa.gov.za",
        phone: "234-567-8901",
        otp: "123456"
    },
    {
        id: 3,
        username: "hrmanager",
        password: "hrm123",
        name: "Carol Williams",
        role: "HR Manager",
        department: "Human Resources",
        expertise: ["Recruitment", "Employee Relations"],
        recentContributions: ["Employee Onboarding Process"],
        email: "carol.williams@dpsa.gov.za",
        phone: "345-678-9012",
        otp: "234567"
    },
    {
        id: 4,
        username: "employee1",
        password: "emp123",
        name: "Bavumile Cele",
        role: "Employee",
        department: "Sales",
        expertise: ["Client Relations", "Sales Strategies"],
        recentContributions: ["Sales Pitch Deck"],
        email: "bavumile.cele@dpsa.gov.za",
        phone: "456-789-0123",
        otp: "345678"
    },
    {
        id: 5,
        username: "employee2",
        password: "emp456",
        name: "Eva Green",
        role: "Employee",
        department: "IT",
        expertise: ["System Administration", "Cloud Computing"],
        recentContributions: ["Cloud Migration Plan"],
        email: "eva.green@dpsa.gov.za",
        phone: "567-890-1234",
        otp: "456789"
    },
    {
        id: 6,
        username: "itmanager",
        password: "itm123",
        name: "Monwabisa Sibiya",
        role: "IT Manager",
        department: "IT",
        expertise: ["IT Infrastructure", "Software Development"],
        recentContributions: ["IT Infrastructure Upgrade"],
        email: "monwabisa.sibbiya@dpsa.gov.za",
        phone: "678-901-2345",
        otp: "567890"
    },
    {
        id: 7,
        username: "salesmanager",
        password: "sm123",
        name: "Patrick Zungu",
        role: "Sales Manager",
        department: "Sales",
        expertise: ["Sales Management", "Market Analysis"],
        recentContributions: ["Q1 Sales Report"],
        email: "patrick.zungu@dpsa.gov.za",
        phone: "789-012-3456",
        otp: "678901"
    },
    {
        id: 8,
        username: "securityadmin",
        password: "sa123",
        name: "Innocent Junior",
        role: "Security Administrator",
        department: "Security",
        expertise: ["Access Control", "Security Policies"],
        recentContributions: ["Access Control Update"],
        email: "Inno.manganyi@dpsa.gov.za",
        phone: "890-123-4567",
        otp: "789012"
    }
];


// Dummy Documents Data
let documents = [
    {
        id: 101,
        title: "IT Security Policy",
        type: "Policy",
        department: "IT",
        author: "Bavumile Cele",
        date: "2023-09-15",
        content: "Content of IT Security Policy...",
        tags: ["Security", "IT", "Policy"],
        version: 3,
        history: [
            { version: 1, date: "2023-01-10", summary: "Initial draft." },
            { version: 2, date: "2023-05-22", summary: "Added network security protocols." },
            { version: 3, date: "2023-09-15", summary: "Updated encryption standards." }
        ]
    },
    {
        id: 102,
        title: "HR Recruitment Guidelines",
        type: "Guidelines",
        department: "Human Resources",
        author: "Monwabisa Sibiya",
        date: "2023-07-20",
        content: "Content of HR Recruitment Guidelines...",
        tags: ["Recruitment", "HR", "Guidelines"],
        version: 2,
        history: [
            { version: 1, date: "2023-03-05", summary: "Initial guidelines." },
            { version: 2, date: "2023-07-20", summary: "Incorporated remote hiring procedures." }
        ]
    },
    {
        id: 103,
        title: "Quarterly Sales Report",
        type: "Report",
        department: "Sales",
        author: "Sibonelo Masondo",
        date: "2023-08-30",
        content: "Content of Quarterly Sales Report...",
        tags: ["Sales", "Report", "Quarterly"],
        version: 1,
        history: [
            { version: 1, date: "2023-08-30", summary: "First quarter sales data." }
        ]
    },
    {
        id: 104,
        title: "Best Practices in Customer Service",
        type: "Best Practices",
        department: "Sales",
        author: "Junior Manganyi",
        date: "2023-10-10",
        content: "Content of Best Practices in Customer Service...",
        tags: ["Customer Service", "Best Practices"],
        version: 1,
        history: [
            { version: 1, date: "2023-10-10", summary: "Initial compilation." }
        ]
    }
];

// Dummy Alerts Data
const alerts = [
    {
        id: 201,
        message: "New IT Policy has been updated.",
        date: "2023-09-15"
    },
    {
        id: 202,
        message: "HR Recruitment Guidelines have new procedures.",
        date: "2023-07-20"
    },
    {
        id: 203,
        message: "Quarterly Sales Report is now available.",
        date: "2023-08-30"
    },
    {
        id: 204,
        message: "Best Practices in Customer Service added to the repository.",
        date: "2023-10-10"
    }
];

// Dummy Recommendations Data
const recommendations = [
    {
        id: 301,
        title: "Network Security Enhancements",
        type: "Report",
        department: "IT",
        author: "Alice Johnson",
        summary: "A comprehensive report on network security improvements."
    },
    {
        id: 302,
        title: "Employee Onboarding Process",
        type: "Guidelines",
        department: "Human Resources",
        author: "Bob Smith",
        summary: "Guidelines for efficient employee onboarding."
    },
    {
        id: 303,
        title: "Advanced Sales Techniques",
        type: "Best Practices",
        department: "Sales",
        author: "Monwabisa Sibiya",
        summary: "Best practices for enhancing sales performance."
    },
    {
        id: 304,
        title: "Customer Engagement Strategies",
        type: "Report",
        department: "Sales",
        author: "Sibonelo Masondo",
        summary: "Strategies to improve customer engagement and retention."
    }
];
// Dummy IT Policies Data
let itPolicies = [
    {
        id: 1,
        title: "IT Security Policy",
        content: "This policy outlines the security measures and protocols to be followed within the IT department...",
        author: "Innocent Manganyi",
        date: "2024-01-10",
        department: "IT",
        tags: ["Security", "IT Policy"],
        version: 1,
        history: [
            { version: 1, date: "2024-01-10", summary: "Initial creation of IT Security Policy." }
        ]
    },
    {
        id: 2,
        title: "Cloud Computing Guidelines",
        content: "Guidelines for deploying and managing cloud-based services within the organization...",
        author: "Patrick Zungu",
        date: "2024-02-15",
        department: "IT",
        tags: ["Cloud", "Guidelines"],
        version: 1,
        history: [
            { version: 1, date: "2024-02-15", summary: "Initial creation of Cloud Computing Guidelines." }
        ]
    },
    {
        id: 3,
        title: "System Administration Best Practices",
        content: "Best practices for system administrators to maintain and secure organizational IT infrastructure...",
        author: "Bavumile Cele",
        date: "2024-03-20",
        department: "IT",
        tags: ["System Administration", "Best Practices"],
        version: 1,
        history: [
            { version: 1, date: "2024-03-20", summary: "Initial creation of System Administration Best Practices." }
        ]
    }
];

// Dummy IT Security Alerts Data
const itSecurityAlerts = [
    "Unauthorized access attempt detected on IT Security Policy document.",
    "Multiple failed login attempts for user Eva Green.",
    "Suspicious activity detected in the Cloud Computing section.",
    "Firewall breach attempt from external IP address 192.168.1.100."
];
// Dummy Feedback Data
let feedbacks = [
    {
        id: 1,
        documentId: 101,
        rating: 5,
        comments: "Excellent policy, very clear and comprehensive.",
        sentiment: "Positive"
    },
    {
        id: 2,
        documentId: 102,
        rating: 3,
        comments: "Guidelines are okay but need more examples.",
        sentiment: "Neutral"
    },
    {
        id: 3,
        documentId: 103,
        rating: 4,
        comments: "Good report, insightful data.",
        sentiment: "Positive"
    },
    {
        id: 4,
        documentId: 104,
        rating: 2,
        comments: "Best practices are too generic.",
        sentiment: "Negative"
    }
];
// js/data.js


// Sample IT Documents
const itDocumentsData = [
    "Server Configuration Guide",
    "IT Asset Inventory",
    "Backup Procedures Document"
    // Add more documents as needed
];
