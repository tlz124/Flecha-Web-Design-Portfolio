// Project data with detailed information
const projects = [
    {
        id: 0,
        title: "Local Flower Shop",
        category: "Small Business",
        description: "Modern florist website with online ordering and delivery",
        fullDescription: "A beautiful, user-friendly website for a local flower shop featuring an elegant gallery of floral arrangements, easy online ordering with customization options, and delivery scheduling. The site includes information about special occasion packages for weddings, funerals, and events. The design captures elegance and warmth while making it simple for customers to browse and order flowers for any occasion.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Online Ordering", "Local SEO"],
        liveLink: "https://tlz124.github.io/Watsons-Flowers/"
    },
    {
        id: 1,
        title: "Mexican Restaurant",
        category: "Small Business",
        description: "Authentic Mexican restaurant with menu and reservation system",
        fullDescription: "A vibrant website for a Mexican restaurant featuring an interactive menu with high-quality food photography, online reservation system, and information about catering services. The design reflects the restaurant's authentic atmosphere with warm colors and engaging visuals. Includes hours of operation, location details, and special events calendar.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Reservation System", "Menu Display"],
        liveLink: "https://tlz124.github.io/restaurant/"
    },
    {
        id: 2,
        title: "Pet Grooming Salon",
        category: "Small Business",
        description: "Professional pet grooming services with appointment booking",
        fullDescription: "A comprehensive website for a pet grooming business featuring service descriptions, pricing information, and an easy-to-use appointment booking system. The site showcases grooming services for various pet types, includes customer testimonials, and provides care tips for pet owners. The friendly, approachable design appeals to pet lovers while maintaining professionalism.",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Service Catalog"],
        liveLink: "https://tlz124.github.io/pet-grooming/"
    },
    {
        id: 3,
        title: "Modern Dental Office",
        category: "Small Business",
        description: "Contemporary dental practice with patient portal and services",
        fullDescription: "A professional website for a modern dental office featuring comprehensive service descriptions, dentist profiles, patient portal access, and online appointment scheduling. The site includes educational resources about dental health, insurance information, and virtual office tours. The clean, trustworthy design helps patients feel comfortable while emphasizing the practice's expertise and modern technology.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Patient Portal", "Appointment System"],
        liveLink: "https://tlz124.github.io/dental-office-website/"
    },
    {
        id: 4,
        title: "Fitness Center",
        category: "Small Business",
        description: "Modern fitness business with class schedules and membership options",
        fullDescription: "A dynamic website for a fitness business featuring class schedules, trainer profiles, membership pricing, and online sign-up capabilities. The site showcases fitness programs, includes success stories and testimonials, and provides information about facilities and equipment. The energetic design motivates visitors while making it easy to explore services and join.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Class Scheduling", "Membership Portal"],
        liveLink: "https://tlz124.github.io/fitness/"
    },
    {
        id: 5,
        title: "Architecture Firm",
        category: "Small Business",
        description: "Professional architecture business showcasing portfolio and services",
        fullDescription: "A sophisticated website for an architecture firm featuring a stunning portfolio gallery, detailed service descriptions, and project case studies. The site highlights the firm's design philosophy, team expertise, and past projects with high-quality imagery. The clean, modern design reflects architectural precision while making it easy for potential clients to explore work and request consultations.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio Gallery", "Project Showcase"],
        liveLink: "https://tlz124.github.io/architecture/"
    },
    {
        id: 6,
        title: "K-12 School Website",
        category: "Education",
        description: "Comprehensive school website for middle and high school students",
        fullDescription: "A modern, full-featured website designed for K-12 schools with a focus on middle and high school students. Features include student portals, parent access to grades and attendance, event calendars, staff directories, club and sports information, and news announcements. The responsive design works seamlessly on mobile devices for students and parents on the go.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Student Portal", "Event Calendar", "CMS"],
        liveLink: "https://tlz124.github.io/school/"
    },
    {
        id: 7,
        title: "Nonprofit Organization",
        category: "Education",
        description: "Versatile nonprofit website template for community organizations",
        fullDescription: "A flexible, professional website designed for nonprofit organizations. Features include mission statement display, program information, volunteer sign-up forms, donation integration, event calendars, and impact stories. The adaptable design can be customized for various causes and community organizations while maintaining a clean, trustworthy appearance that encourages engagement and support.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Donation Forms", "Volunteer Management"],
        liveLink: "https://tlz124.github.io/nonprofit/"
    },
    {
        id: 8,
        title: "Orthodontist Practice",
        category: "Healthcare",
        description: "Modern orthodontist website with treatment information and appointment scheduling",
        fullDescription: "A clean, professional website designed for an orthodontist practice. Features include detailed treatment information, before-and-after galleries, appointment scheduling, patient resources, and an FAQ section. The modern design builds trust and makes it easy for patients to learn about orthodontic services and book consultations online.",
        image: "https://tlz124.github.io/orthodontist/istockphoto-1274268165-612x612.webp",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Scheduling", "Patient Portal"],
        liveLink: "https://tlz124.github.io/orthodontist/"
    },
    {
        id: 9,
        title: "Beauty Supply Store",
        category: "Small Business",
        description: "Modern beauty supply website with curated products and elegant design",
        fullDescription: "A sophisticated website for Lumière Beauty Supply featuring curated beauty essentials from top brands. Includes product showcases, shopping categories, bestseller highlights, and a clean, elegant design that emphasizes luxury and quality.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Product Catalog", "E-commerce Ready"],
        liveLink: "https://tlz124.github.io/Beauty"
    },
    {
        id: 10,
        title: "Contemporary Hair Salon",
        category: "Small Business",
        description: "Elegant hair salon website showcasing services and portfolio",
        fullDescription: "A luxurious website for Atelier Noir, a contemporary hair salon. Features include service listings with pricing, visual portfolio gallery, stylist information, appointment booking system, and sophisticated dark theme design that reflects the salon's modern aesthetic.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Portfolio Gallery"],
        liveLink: "https://tlz124.github.io/salon"
    },
    {
        id: 11,
        title: "Corporate Law Firm",
        category: "Professional Services",
        description: "Professional law firm website showcasing expertise and legal services",
        fullDescription: "A sophisticated website for Sterling & Associates, a corporate law firm specializing in mergers & acquisitions, securities law, and business litigation. Features include practice area details, attorney profiles, case results, consultation booking, and a professional design that conveys trust and expertise.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Consultation Booking", "Attorney Profiles"],
        liveLink: "https://tlz124.github.io/legal"
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

        // Update live link - use onclick to force it to work
        const liveLink = document.getElementById('modalLiveLink');
        if (liveLink) {
            liveLink.href = project.liveLink;
            liveLink.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                return false;
            };
        }

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

// Close modal when clicking outside (but not on links or content)
window.addEventListener('click', (e) => {
    // Don't close if clicking on a link inside the modal
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
    }
    
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
    
    const mailtoLink = `mailto:LMartinez@flecha-webdesign.com?subject=${subject}&body=${body}`;
    
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
