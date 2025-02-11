// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert on button click
document.getElementById('get-started').addEventListener('click', function() {
    alert('Thank you for your interest! We will get back to you shortly.');
});

// Load portfolio projects
const portfolioItemsContainer = document.getElementById('portfolio-items');

async function loadPortfolioProjects() {
    const projectCount = 2; // Adjust this according to the number of projects you have
    for (let i = 1; i <= projectCount; i++) {
        try {
            const response = await fetch(`portfolio/project${i}.json`);
            const projectData = await response.json();
            const projectImage = `portfolio/project${i}.jpg`;

            const projectElement = document.createElement('div');
            projectElement.classList.add('portfolio-item');
            projectElement.innerHTML = `
                <img src="${projectImage}" alt="${projectData.title}">
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
                <a href="${projectData.url}" target="_blank" class="project-link">View Project</a>
            `;
            portfolioItemsContainer.appendChild(projectElement);
        } catch (error) {
            console.error('Error loading project:', error);
        }
    }
}

// Burger menu functionality
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Load portfolio projects on page load
loadPortfolioProjects();

