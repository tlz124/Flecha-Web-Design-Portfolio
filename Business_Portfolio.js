// Project data with detailed information
const projects = [
    {
        id: 0,
        title: "Organic Chemistry DAT Prep",
        category: "Education",
        description: "Comprehensive study platform for dental admission test preparation",
        fullDescription: "A specialized educational platform designed to help pre-dental students master organic chemistry for the Dental Admission Test (DAT). The site features interactive practice problems, video tutorials, progress tracking, and comprehensive study materials organized by topic. The clean, distraction-free design helps students focus on learning while the intuitive navigation makes it easy to find specific topics and track progress through the curriculum.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Progress Tracking", "Interactive Quizzes"],
        liveLink: "#"
    },
    {
        id: 1,
        title: "Elementary School Website",
        category: "Education",
        description: "Modern school website with parent portal and event calendar",
        fullDescription: "A comprehensive website for an elementary school that serves as a central hub for parents, students, and staff. Features include a parent portal for accessing grades and attendance, an interactive event calendar, staff directory with email contact, photo galleries from school events, and a news section for announcements. The design is bright, welcoming, and easy to navigate for users of all technical abilities, with mobile optimization for parents on the go.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Parent Portal", "Event Calendar", "CMS"],
        liveLink: "#"
    },
    {
        id: 2,
        title: "Lena's Flower Shop",
        category: "Small Business",
        description: "Local florist website with online ordering and delivery",
        fullDescription: "A beautiful, user-friendly website for Lena's Flower Shop, a beloved local florist. The site showcases their stunning floral arrangements with a full-screen image gallery, offers easy online ordering with customization options, provides delivery scheduling within the local area, and includes information about special occasion packages for weddings, funerals, and events. The design captures the elegance and warmth of the shop while making it simple for customers to browse and order flowers for any occasion. Local SEO optimization helps the shop appear in searches for nearby florists.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "E-commerce", "Online Ordering", "Local SEO"],
        liveLink: "#"
    }
];

// ===== Cookie Consent Functionality =====
const cookieConsent = document.getElementById('cookieConsent');
const acceptAllBtn = document.getElementById('acceptAll');
const rejectAllBtn = document.getElementById('rejectAll');
const managePreferencesBtn = document.getElementById('managePreferences');

// Check if user has already made a cookie choice
function checkCookieConsent() {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
        // Show cookie banner after a short delay
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
        }, 1000);
    }
}

acceptAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.add('hidden');
});

rejectAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.add('hidden');
});

managePreferencesBtn.addEventListener('click', () => {
    // For now, just open accept dialog - could be expanded to show preferences modal
    alert('Cookie preferences: You can customize your cookie settings here. For this demo, we only use essential cookies for site functionality.');
    localStorage.setItem('cookieConsent', 'managed');
    cookieConsent.classList.add('hidden');
});

// Initialize cookie consent check
checkCookieConsent();

// ===== Hamburger Menu Functionality =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.menu-link');

// Open menu
hamburgerBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu
closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Project Modal Functionality =====
const projectModal = document.getElementById('projectModal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

// Open project modal with details
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = parseInt(button.getAttribute('data-project'));
        const project = projects[projectId];

        // Populate modal with project data
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.fullDescription;
        
        // Add technologies
        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });

        // Update live link
        document.querySelector('.modal-link').href = project.liveLink;

        // Show modal
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// ===== Legal Modals Functionality =====
const privacyModal = document.getElementById('privacyModal');
const accessibilityModal = document.getElementById('accessibilityModal');
const privacyLink = document.getElementById('privacyLink');
const accessibilityLink = document.getElementById('accessibilityLink');

// Open privacy modal
privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Open accessibility modal
accessibilityLink.addEventListener('click', (e) => {
    e.preventDefault();
    accessibilityModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal functionality
const closeModalButtons = document.querySelectorAll('.close-modal');

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        if (modalId) {
            document.getElementById(modalId).style.display = 'none';
        } else {
            // Close project modal if no data-modal attribute
            projectModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === privacyModal) {
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === accessibilityModal) {
        accessibilityModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (privacyModal.style.display === 'block') {
            privacyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (accessibilityModal.style.display === 'block') {
            accessibilityModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== Consultation Form Handling =====
const consultationForm = document.getElementById('consultationForm');

consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('consultName').value;
    const email = document.getElementById('consultEmail').value;
    const phone = document.getElementById('consultPhone').value;

    // Create mailto link
    const subject = encodeURIComponent('Consultation Request from ' + name);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nI would like to request a consultation for web design services.`
    );
    
    const mailtoLink = `mailto:Flecha-WebDesign@Flecha-WebDesign.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Thank you for your interest! Your email client will open to send the consultation request.');

    // Reset form
    consultationForm.reset();
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for modal links
        if (href === '#privacyModal' || href === '#accessibilityModal') {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Add Scroll Effect to Navbar =====
let lastScroll = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
