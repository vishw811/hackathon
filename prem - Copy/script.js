document.addEventListener('DOMContentLoaded', () => {
    const studentBtn = document.querySelector('.student .btn');
    const trainerBtn = document.querySelector('.trainer .btn');

    if (studentBtn) {
        studentBtn.addEventListener('click', () => {
            window.location.href = 'student-login.html';
        });
    }

    if (trainerBtn) {
        trainerBtn.addEventListener('click', () => {
            window.location.href = 'trainer-login.html';
        });
    }

    // Add hover effect to cards
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 