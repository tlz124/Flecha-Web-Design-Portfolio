// Project data with detailed information
const projects = [
    {
        id: 0,
        title: "Local Flower Shop",
        category: "Small Business",
        description: "Modern florist website with online ordering and delivery",
        fullDescription: "A beautiful, user-friendly website for a local flower shop featuring an elegant gallery of floral arrangements, easy online ordering with customization options, and delivery scheduling. The site includes information about special occasion packages for weddings, funerals, and events. The design captures elegance and warmth while making it simple for customers to browse and order flowers for any occasion.",
        image: "floral_shop.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "Online Ordering", "Local SEO"],
        liveLink: "https://tlz124.github.io/Watsons-Flowers/",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, professional online presence for your flower shop — everything you need to get discovered and make a great first impression.",
                features: [
                    "Mobile Responsive Design",
                    "Photo Gallery",
                    "Contact Form",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/floral-shop-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus expanded features to showcase your products and build customer trust.",
                features: [
                    "Everything in Essential",
                    "Product Catalog with Pricing",
                    "Delivery Area Section",
                    "Testimonials Section",
                    "Expanded Navigation"
                ],
                link: "https://tlz124.github.io/floral-shop-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom build tailored to your exact vision — complex functionality, unique design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Complex Custom Functionality",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/floral-shop-custom/"
            }
        ]
    },
    {
        id: 1,
        title: "Mexican Restaurant",
        category: "Small Business",
        description: "Authentic Mexican restaurant with menu and reservation system",
        fullDescription: "A vibrant website for a Mexican restaurant featuring an interactive menu with high-quality food photography, online reservation system, and information about catering services. The design reflects the restaurant's authentic atmosphere with warm colors and engaging visuals. Includes hours of operation, location details, and special events calendar.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Reservation System", "Menu Display"],
        liveLink: "https://tlz124.github.io/restaurant/",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, professional online presence for your restaurant — everything you need to showcase your menu and get more diners through the door.",
                features: [
                    "Mobile Responsive Design",
                    "Menu Display with Photos",
                    "Contact Form & Reservations",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/restaurant-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus expanded features to highlight your food and build a loyal customer base.",
                features: [
                    "Everything in Essential",
                    "Full Menu Catalog with Pricing",
                    "Online Reservation System",
                    "Customer Testimonials Section",
                    "Expanded Navigation & About Page"
                ],
                link: "https://tlz124.github.io/restaurant-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom build tailored to your restaurant's unique identity — advanced features, custom design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Online Ordering Integration",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/restaurant-custom/"
            }
        ]
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
        category: "Healthcare",
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
        liveLink: "https://tlz124.github.io/architecture-essential/"
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
        liveLink: "https://tlz124.github.io/Beauty",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, elegant online presence for your beauty supply store — everything you need to showcase your brand and attract customers.",
                features: [
                    "Mobile Responsive Design",
                    "Featured Product Showcase",
                    "Contact Form",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/beauty-supply-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus a full product catalog to display your inventory and drive more sales.",
                features: [
                    "Everything in Essential",
                    "Full Product Catalog with Pricing",
                    "Product Categories & Filtering",
                    "Customer Testimonials Section",
                    "Expanded Navigation & About Page"
                ],
                link: "https://tlz124.github.io/beauty-supply-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom e-commerce build tailored to your store — advanced shopping features, custom design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Full E-commerce Shopping Cart",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/beauty-supply-custom/"
            }
        ]
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

function checkCookieConsent() {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
        }, 1000);
    }
}

if (acceptAllBtn) if (acceptAllBtn) acceptAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.add('hidden');
});

if (rejectAllBtn) rejectAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.add('hidden');
});

if (managePreferencesBtn) managePreferencesBtn.addEventListener('click', () => {
    alert('Cookie preferences: You can customize your cookie settings here. For this demo, we only use essential cookies for site functionality.');
    localStorage.setItem('cookieConsent', 'managed');
    cookieConsent.classList.add('hidden');
});

checkCookieConsent();

// ===== Hamburger Menu Functionality =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.menu-link');

hamburgerBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const menuSublinks = document.querySelectorAll('.menu-sublink');
menuSublinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Home Submenu Toggle =====
const homeSubmenuToggle = document.getElementById('homeSubmenuToggle');
const homeSubmenu = document.querySelector('.menu-submenu');

if (homeSubmenuToggle && homeSubmenu) {
    homeSubmenuToggle.addEventListener('click', () => {
        const isCollapsed = homeSubmenu.classList.contains('menu-submenu--collapsed');
        homeSubmenu.classList.toggle('menu-submenu--collapsed', !isCollapsed);
        homeSubmenuToggle.classList.toggle('open', isCollapsed);
    });
}

// ===== Project Modal Functionality =====
const projectModal = document.getElementById('projectModal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = parseInt(button.getAttribute('data-project'));
        const project = projects[projectId];

        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.fullDescription;

        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });

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

        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// ===== Tier Card Click Handlers =====
const tierModal = document.getElementById('tierModal');

document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const projectId = parseInt(card.getAttribute('data-project'));
        const tierIndex = parseInt(card.getAttribute('data-tier'));
        const project = projects[projectId];
        const tier = project.tiers[tierIndex];
        if (!tier) return;

        // Apply tier-specific styling
        const tierContent = document.getElementById('tierModalContent');
        tierContent.className = 'tier-modal-content tier-modal-content--' + (tierIndex + 1);

        // Populate modal
        document.getElementById('tierModalName').textContent = tier.label;
        document.getElementById('tierModalDiamonds').textContent = '◆'.repeat(tierIndex + 1);
        document.getElementById('tierModalPrice').textContent = tier.price;
        document.getElementById('tierModalDescription').textContent = tier.description;

        const featuresList = document.getElementById('tierModalFeatures');
        featuresList.innerHTML = '';
        tier.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Wire up demo button — it's a <button> so no anchor/scroll conflicts
        const demoBtn = document.getElementById('tierModalDemoLink');
        const newDemoBtn = demoBtn.cloneNode(true);
        demoBtn.parentNode.replaceChild(newDemoBtn, demoBtn);
        newDemoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(tier.link, '_blank', 'noopener,noreferrer');
        });

        tierModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close tier modal
document.getElementById('closeTierModal').addEventListener('click', () => {
    tierModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// ===== Legal Modals =====
const privacyModal = document.getElementById('privacyModal');
const accessibilityModal = document.getElementById('accessibilityModal');
const privacyLink = document.getElementById('privacyLink');
const accessibilityLink = document.getElementById('accessibilityLink');

privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

accessibilityLink.addEventListener('click', (e) => {
    e.preventDefault();
    accessibilityModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal buttons (X)
const closeModalButtons = document.querySelectorAll('.close-modal');
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        if (modalId) {
            document.getElementById(modalId).style.display = 'none';
        } else {
            projectModal.style.display = 'none';
            tierModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    });
});

// Close modals by clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === tierModal) {
        tierModal.style.display = 'none';
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

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [projectModal, tierModal, privacyModal, accessibilityModal].forEach(modal => {
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        if (menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== Smooth Scroll (navigation links only) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip tier card buttons — they have their own handler
        if (this.classList.contains('tier-card')) return;

        // Allow footer modal links to work normally
        if (href === '#privacyModal' || href === '#accessibilityModal') return;

        // Prevent bare # from scrolling to top
        if (href === '#') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    navbar.style.boxShadow = currentScroll <= 0
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
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

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const allProjectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        allProjectCards.forEach(card => {
            const category = card.querySelector('.project-category').textContent;
            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== Hero Canvas Node Network Effect =====
(function() {
    const heroCanvas = document.getElementById('heroCanvas');
    if (!heroCanvas) return;

    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let animationFrameId = null;

    function resizeCanvas() {
        heroCanvas.width = heroCanvas.offsetWidth;
        heroCanvas.height = heroCanvas.offsetHeight;
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        initParticles();
    }

    function initParticles() {
        const isMobile = heroCanvas.width <= 768;
        const isPortrait = heroCanvas.width < heroCanvas.height;
        let particleCount = isMobile ? (isPortrait ? 30 : 40) : 80;
        const connectionDistance = isMobile ? 100 : 150;
        particles = Array.from({ length: particleCount }, () => new Particle(connectionDistance));
    }

    class Particle {
        constructor(connectionDistance) {
            this.connectionDistance = connectionDistance;
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            const speedMultiplier = window.innerWidth <= 768 ? 0.3 : 0.5;
            this.vx = (Math.random() - 0.5) * speedMultiplier;
            this.vy = (Math.random() - 0.5) * speedMultiplier;
            this.radius = window.innerWidth <= 768 ? 2.5 : 2;
            this.baseRadius = this.radius;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > heroCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > heroCanvas.height) this.vy *= -1;
            this.x = Math.max(0, Math.min(heroCanvas.width, this.x));
            this.y = Math.max(0, Math.min(heroCanvas.height, this.y));

            if (mouse.x !== null && window.innerWidth > 768) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                    this.radius = this.baseRadius * (1 + force * 0.5);
                } else {
                    this.radius = this.baseRadius;
                }
            } else {
                this.radius = this.baseRadius;
            }
        }

        draw() {
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(102, 126, 234, 0.8)';
            ctx.fillStyle = 'rgba(102, 126, 234, 0.9)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        connect(otherParticle) {
            const dx = otherParticle.x - this.x;
            const dy = otherParticle.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.connectionDistance) {
                const opacity = (1 - distance / this.connectionDistance) * 0.5;
                const gradient = ctx.createLinearGradient(this.x, this.y, otherParticle.x, otherParticle.y);
                gradient.addColorStop(0, `rgba(102, 126, 234, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(118, 75, 162, ${opacity})`);
                gradient.addColorStop(1, `rgba(102, 126, 234, ${opacity})`);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
            }
        }
    }

    heroCanvas.addEventListener('mousemove', (e) => {
        const rect = heroCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    heroCanvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    heroCanvas.addEventListener('touchstart', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = heroCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    });
    heroCanvas.addEventListener('touchmove', (e) => {
        if (window.innerWidth <= 768) return;
        e.preventDefault();
        const rect = heroCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
    });
    heroCanvas.addEventListener('touchend', () => { mouse.x = null; mouse.y = null; });

    resizeCanvas();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 250);
    });

    let lastFrameTime = 0;
    const targetFPS = window.innerWidth <= 768 ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    function animateParticles(currentTime) {
        animationFrameId = requestAnimationFrame(animateParticles);
        const deltaTime = currentTime - lastFrameTime;
        if (deltaTime < frameInterval) return;
        lastFrameTime = currentTime - (deltaTime % frameInterval);

        ctx.fillStyle = 'rgba(26, 35, 62, 0.05)';
        ctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

        particles.forEach((particle, i) => {
            particle.update();
            particle.draw();
            for (let j = i + 1; j < particles.length; j++) {
                particle.connect(particles[j]);
            }
        });
    }

    animateParticles(0);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = null; }
        } else {
            if (!animationFrameId) animateParticles(0);
        }
    });
})();



// ===== Process Step Collapsible Toggle =====
document.querySelectorAll('.process-step:not(.process-step--questionnaire) .step-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const step = btn.closest('.process-step');
        const body = step.querySelector('.step-body');
        const isOpen = body.classList.contains('open');
        body.classList.toggle('open', !isOpen);
        btn.classList.toggle('open', !isOpen);
    });
});

// ===== Date Input =====
const dateInput = document.getElementById('preferred_date');
dateInput.addEventListener('focus', function() { this.type = 'date'; });
dateInput.addEventListener('blur', function() { if (!this.value) this.type = 'text'; });

// ===== Back to Top Button =====
(function() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (navigator.vibrate) navigator.vibrate(30);
    });
})();

// ===== E-Commerce / Non E-Commerce Pricing Toggle =====
const ecomBtn = document.getElementById('ecomBtn');
const nonEcomBtn = document.getElementById('nonEcomBtn');
const ecomPricing = document.getElementById('ecomPricing');
const nonEcomPricing = document.getElementById('nonEcomPricing');

if (ecomBtn && nonEcomBtn) {
    ecomBtn.addEventListener('click', () => {
        ecomBtn.classList.add('active');
        nonEcomBtn.classList.remove('active');
        ecomPricing.style.display = '';
        nonEcomPricing.style.display = 'none';
    });

    nonEcomBtn.addEventListener('click', () => {
        nonEcomBtn.classList.add('active');
        ecomBtn.classList.remove('active');
        nonEcomPricing.style.display = '';
        ecomPricing.style.display = 'none';
    });
}

// ===== Nested Pricing Feature Toggles =====
document.querySelectorAll('.pricing-feature-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const sub = btn.closest('.pricing-feature-expandable').querySelector('.pricing-feature-sub');
        const isOpen = sub.classList.contains('open');
        sub.classList.toggle('open', !isOpen);
        btn.classList.toggle('open', !isOpen);
    });
});
