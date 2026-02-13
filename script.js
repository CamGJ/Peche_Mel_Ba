// Navigation mobile
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Gestion des onglets de catégories de produits
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // Retirer la classe active de tous les onglets
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        
        // Ajouter la classe active à l'onglet cliqué
        this.classList.add('active');
        
        // Masquer tous les contenus
        document.querySelectorAll('.category-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Afficher le contenu correspondant
        const categoryId = this.getAttribute('data-category');
        document.getElementById(categoryId).classList.add('active');
    });
});

// Charger les images de la galerie dynamiquement
async function loadGalleryImages() {
    const galerieGrid = document.getElementById('galerieGrid');
    
    // Liste des noms de fichiers possibles dans le dossier assets/photo
    // Vous pouvez ajuster cette liste selon vos besoins
    const possibleImages = [
        'croissant1',
        'croissant2',
        'tarte_aux_pommes1',
        'cookies1',
        'cookies2',
        'galette_des_rois',
        'pain_au_chocolat1',
        'pain_au_chocolat2',
        'flan1',
        'foret_noire1',
        'foret_noire2',
        'tarte2',
        'macaron1'
    ];

    // Essayer de charger chaque image
    for (const imageName of possibleImages) {
        const img = new Image();
        img.src = `assets/photo/${imageName}.jpeg`;
        
        img.onload = () => {
            const item = document.createElement('div');
            item.className = 'galerie-item';
            item.innerHTML = `
                <img src="assets/photo/${imageName}.jpeg" alt="Pâtisserie">
                <div class="galerie-overlay">
                    <h3>Délicieuse création ${imageName}</h3>
                </div>
            `;
            galerieGrid.appendChild(item);
        };
    }

    // Vérifier si des images ont été chargées après un délai
    setTimeout(() => {
        if (galerieGrid.children.length === 0) {
            // Afficher des placeholders si aucune image n'est trouvée
            galerieGrid.innerHTML = `
                <div class="galerie-placeholder">
                    <p>📸 Ajoutez vos photos de pâtisseries dans le dossier <strong>assets/photo/</strong></p>
                    <p style="margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">
                        Les images seront automatiquement affichées ici.
                    </p>
                </div>
            `;
        }
    }, 1000);
}

// Charger les images au chargement de la page
document.addEventListener('DOMContentLoaded', loadGalleryImages);

// Smooth scroll lent avec offset pour la navbar fixe
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500; // Durée en millisecondes (1.5 secondes)
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Fonction d'easing pour un défilement doux
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    });
});

// Animation de la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simuler l'envoi (vous pouvez intégrer un vrai service ici)
    console.log('Données du formulaire:', data);
    
    // Afficher un message de confirmation
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    
    // Réinitialiser le formulaire
    contactForm.reset();
});

// Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les sections pour les animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
