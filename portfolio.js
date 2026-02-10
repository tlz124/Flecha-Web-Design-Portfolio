// Portfolio page - projects data and dynamic loading
const projectsData = [
    {
        id: 0,
        title: "Local Flower Shop",
        category: "Small Business",
        description: "Modern florist website with online ordering and delivery",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        details: "Custom e-commerce solution for a local florist with seasonal collections and same-day delivery options."
    },
    {
        id: 1,
        title: "Mexican Restaurant",
        category: "Small Business",
        description: "Authentic Mexican restaurant with menu and reservation system",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
        details: "Full-featured restaurant website with online menu, reservation system, and photo gallery."
    },
    {
        id: 2,
        title: "Pet Grooming Salon",
        category: "Small Business",
        description: "Professional pet grooming services with appointment booking",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        details: "Appointment-based website for pet grooming with service packages and customer reviews."
    },
    {
        id: 3,
        title: "Modern Dental Office",
        category: "Small Business",
        description: "Contemporary dental practice with patient portal and services",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        details: "Professional dental website with patient portal, insurance information, and appointment scheduling."
    },
    {
        id: 4,
        title: "Fitness Center",
        category: "Small Business",
        description: "Modern fitness business with class schedules and membership options",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        details: "Dynamic fitness center website with class schedules, trainer profiles, and membership management."
    },
    {
        id: 5,
        title: "Architecture Firm",
        category: "Small Business",
        description: "Professional architecture business showcasing portfolio and services",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
        details: "Portfolio-focused website for architecture firm with project galleries and client testimonials."
    },
    {
        id: 6,
        title: "K-12 School Website",
        category: "Education",
        description: "Comprehensive school website for middle and high school students",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        details: "Full-featured school website with calendars, news, student resources, and parent portal."
    },
    {
        id: 7,
        title: "Nonprofit Organization",
        category: "Education",
        description: "Versatile nonprofit website template for community organizations",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
        details: "Mission-driven nonprofit website with donation integration and volunteer management."
    },
    {
        id: 8,
        title: "Orthodontist Practice",
        category: "Healthcare",
        description: "Modern orthodontist website with treatment information and appointment scheduling",
        image: "https://tlz124.github.io/orthodontist/istockphoto-1274268165-612x612.webp",
        details: "Patient-focused orthodontics website with treatment options, before/after galleries, and online booking."
    },
    {
        id: 9,
        title: "Beauty Supply Store",
        category: "Small Business",
        description: "Modern beauty supply website with curated products and elegant design",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
        details: "E-commerce beauty supply store with product catalogs, shopping cart, and customer reviews."
    },
    {
        id: 10,
        title: "Contemporary Hair Salon",
        category: "Small Business",
        description: "Elegant hair salon website showcasing services and portfolio",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
        details: "Stylish salon website with service menu, stylist profiles, and online booking system."
    },
    {
        id: 11,
        title: "Corporate Law Firm",
        category: "Professional Services",
        description: "Professional law firm website showcasing expertise and legal services",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        details: "Professional law firm website with attorney profiles, practice areas, and client resources."
    }
];

// Get hash from URL to pre-filter
const hash = window.location.hash.substring(1);
let initialFilter = 'all';
if (hash === 'small-business') initialFilter = 'Small Business';
else if (hash === 'healthcare') initialFilter = 'Healthcare';
else if (hash === 'education') initialFilter = 'Education';
else if (hash === 'professional') initialFilter = 'Professional Services';

// Function to render projects
function renderProjects(filterCategory) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filterCategory);
    
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <button class="view-details" data-project="${project.id}">View Details <span class="arrow-icon">→</span></button>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
    
    // Add click handlers for view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = parseInt(e.target.dataset.project || e.target.closest('.view-details').dataset.project);
            showProjectModal(projectId);
        });
    });
}

// Filter button handlers
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;
        renderProjects(filter);
    });
});

// Initial render based on hash or show first category
if (initialFilter !== 'all') {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === initialFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderProjects(initialFilter);
} else {
    // Don't show any projects initially - wait for user to click a filter
    document.getElementById('projectsGrid').innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 3rem; font-size: 1.1rem;">Select a category above to view our projects</p>';
}

// Project modal function (reusing from main JS)
function showProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <img src="${project.image}" alt="${project.title}">
                <div class="modal-details">
                    <span class="modal-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.details}</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => modal.classList.add('active'), 10);
    
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}
