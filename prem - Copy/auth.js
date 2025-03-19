document.addEventListener('DOMContentLoaded', () => {
    // Handle Student Registration
    const studentRegisterForm = document.getElementById('studentRegisterForm');
    if (studentRegisterForm) {
        studentRegisterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value,
                education: document.getElementById('education').value,
                interests: document.getElementById('interests').value
            };

            // Validate passwords match
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically send the data to your backend
            console.log('Student Registration Data:', formData);
            alert('Registration successful! Please login.');
            window.location.href = 'student-login.html';
        });
    }

    // Handle Trainer Registration
    const trainerRegisterForm = document.getElementById('trainerRegisterForm');
    if (trainerRegisterForm) {
        trainerRegisterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value,
                expertise: document.getElementById('expertise').value,
                experience: document.getElementById('experience').value,
                bio: document.getElementById('bio').value,
                hourlyRate: document.getElementById('hourlyRate').value
            };

            // Validate passwords match
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically send the data to your backend
            console.log('Trainer Registration Data:', formData);
            alert('Registration successful! Please login.');
            window.location.href = 'trainer-login.html';
        });
    }

    // Handle Student Login
    const studentLoginForm = document.getElementById('studentLoginForm');
    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                remember: document.getElementById('remember').checked
            };

            // Here you would typically send the data to your backend
            console.log('Student Login Data:', formData);
            
            // Simulate successful login
            // In a real application, you would verify credentials with your backend
            if (formData.email && formData.password) {
                // Store user data in localStorage (for demo purposes)
                localStorage.setItem('userType', 'student');
                localStorage.setItem('userEmail', formData.email);
                localStorage.setItem('userName', 'John Doe'); // This would come from your backend
                
                // Redirect to student dashboard
                window.location.href = 'student-dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Handle Trainer Login
    const trainerLoginForm = document.getElementById('trainerLoginForm');
    if (trainerLoginForm) {
        trainerLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                remember: document.getElementById('remember').checked
            };

            // Here you would typically send the data to your backend
            console.log('Trainer Login Data:', formData);
            
            // Simulate successful login
            // In a real application, you would verify credentials with your backend
            if (formData.email && formData.password) {
                // Store user data in localStorage (for demo purposes)
                localStorage.setItem('userType', 'trainer');
                localStorage.setItem('userEmail', formData.email);
                localStorage.setItem('userName', 'Sarah Smith'); // This would come from your backend
                
                // Redirect to trainer dashboard
                window.location.href = 'trainer-dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
}); 