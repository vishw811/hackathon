document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    const userType = localStorage.getItem('userType');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    if (!userType || !userEmail) {
        // Redirect to appropriate login page if not authenticated
        window.location.href = userType === 'student' ? 'student-login.html' : 'trainer-login.html';
        return;
    }

    // Update welcome message and profile info
    const welcomeMessage = document.querySelector('.welcome-section h1');
    const profileName = document.querySelector('.profile-dropdown span');
    if (welcomeMessage) {
        welcomeMessage.textContent = `Welcome back, ${userName}!`;
    }
    if (profileName) {
        profileName.textContent = userName;
    }

    // Handle Sidebar Menu
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Handle Profile Dropdown
    const profileDropdown = document.querySelector('.profile-dropdown');
    if (profileDropdown) {
        profileDropdown.addEventListener('click', () => {
            // Add dropdown menu functionality here
            console.log('Profile dropdown clicked');
        });
    }

    // Handle Notifications
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', () => {
            // Add notifications panel functionality here
            console.log('Notifications clicked');
        });
    }

    // Handle Course Actions
    const courseActions = document.querySelectorAll('.course-actions button');
    courseActions.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = button.querySelector('i').className;
            if (action.includes('edit')) {
                console.log('Edit course clicked');
            } else if (action.includes('chart-line')) {
                console.log('View analytics clicked');
            }
        });
    });

    // Handle Student Actions
    const studentActions = document.querySelectorAll('.btn-icon');
    studentActions.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = button.querySelector('i').className;
            if (action.includes('envelope')) {
                console.log('Send message clicked');
            } else if (action.includes('eye')) {
                console.log('View profile clicked');
            }
        });
    });

    // Handle Join Now Buttons
    const joinButtons = document.querySelectorAll('.btn-join');
    joinButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Join session clicked');
        });
    });

    // Handle Create New Course Button
    const createCourseBtn = document.querySelector('.btn-primary i.fa-plus');
    if (createCourseBtn) {
        createCourseBtn.parentElement.addEventListener('click', () => {
            console.log('Create new course clicked');
        });
    }

    // Handle Search
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            console.log('Searching for:', searchTerm);
        });
    }

    // Add smooth scrolling for sidebar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add responsive sidebar toggle
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
    };

    // Add window resize listener
    window.addEventListener('resize', toggleSidebar);

    // Handle AI Chat Assistant
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');

    if (chatInput && sendMessageBtn) {
        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                chatInput.value = '';

                // Simulate AI response (replace with actual AI integration)
                setTimeout(() => {
                    const aiResponse = generateAIResponse(message);
                    addMessage(aiResponse, 'ai');
                }, 1000);
            }
        };

        sendMessageBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${content}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateAIResponse(message) {
        // Simple response system (replace with actual AI integration)
        const responses = {
            'help': 'I can help you with:\n- Course materials\n- Assignment questions\n- Study tips\n- Progress tracking\nWhat would you like to know?',
            'progress': 'Based on your current progress:\n- You\'ve completed 3 courses\n- You\'re on track with your learning goals\n- Your next milestone is in 2 weeks',
            'schedule': 'Your upcoming schedule:\n- Web Development Basics: Tomorrow at 2 PM\n- Database Design: Friday at 3 PM\n- Project Review: Next Monday at 10 AM',
            'default': 'I understand you\'re asking about "' + message + '". Could you please provide more details so I can better assist you?'
        };

        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('help')) return responses.help;
        if (lowerMessage.includes('progress')) return responses.progress;
        if (lowerMessage.includes('schedule')) return responses.schedule;
        return responses.default;
    }
}); 