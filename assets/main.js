document.addEventListener('DOMContentLoaded', () => {
    // Animate the hero content when page loads
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(-20px)';
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);

    // Animate the person sections with a slight delay
    const persons = document.querySelectorAll('.person');
    persons.forEach((person, index) => {
        person.style.opacity = '0';
        person.style.transform = 'translateY(20px)';
        person.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            person.style.opacity = '1';
            person.style.transform = 'translateY(0)';
        }, 800 + (index * 300));
    });
}); 