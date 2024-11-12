const projects = {
    plutus: {
        title: "Plutus - L'Excellence en Gestion Financière",
        subtitle: "Une révolution dans la gestion de vos finances personnelles",
        github: "https://github.com/votre-repo/plutus",
        liveUrl: "https://plutus.arnaudtricoire.com",
        detailUrl: "project-plutus.html",
        categories: ["app", "web"],
        images: ["plutus/plutus.png"],
        technologies: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "EJS",
            "Bootstrap",
            "Chart.js"
        ],
        description: "Plutus redéfinit la gestion financière personnelle en offrant une expérience utilisateur exceptionnelle. Cette application web innovante combine intelligence artificielle et design intuitif pour transformer la complexité financière en simplicité d'usage. Développée avec passion et expertise technique, elle représente l'aboutissement de ma vision d'une technologie au service de l'utilisateur.",
        features: [
            {
                title: "Gestion Financière Intuitive",
                items: [
                    "Analyse intelligente et personnalisée des flux financiers",
                    "Gestion proactive des dépenses avec alertes intelligentes",
                    "Suivi optimisé des investissements et économies",
                    "Planification budgétaire adaptative"
                ]
            },
            {
                title: "Expérience Utilisateur Premium",
                items: [
                    "Interface élégante et responsive",
                    "Visualisations dynamiques et interactives",
                    "Tableaux de bord personnalisables",
                    "Rapports détaillés et insights pertinents"
                ]
            }
        ],
        stack: [
            "Node.js et Express pour le backend",
            "PostgreSQL avec Sequelize pour la base de données",
            "EJS pour le templating",
            "Bootstrap et CSS personnalisé pour l'interface",
            "Chart.js pour les visualisations",
            "Architecture MVC"
        ],
        objectives: "Plutus vise à transformer la gestion financière personnelle en une expérience enrichissante et intuitive. L'application combine des fonctionnalités puissantes de suivi financier avec une interface utilisateur élégante inspirée de la mythologie grecque, offrant ainsi une approche unique de la gestion budgétaire."
    },
    ofourno: {
        title: "O'fourn'O - Application Web de Recettes Culinaires",
        subtitle: "Une application web intuitive pour découvrir et gérer vos recettes",
        github: "https://github.com/Tricoire-Arnaud/ofourno-back",
        liveUrl: "https://ofourno.arnaudtricoire.com",
        detailUrl: "project-ofourno.html",
        categories: ["web", "symfony"],
        images: ["ofourno/ofourno.png", "ofourno/logo.svg"],
        technologies: [
            "Symfony",
            "React.js",
            "MySQL",
            "API REST",
            "Bootstrap 5",
            "Twig"
        ],
        description: "O'fourn'O est une application web qui permet aux utilisateurs de rechercher des recettes culinaires en fonction des aliments qu'ils ont à leur disposition. Elle offre une expérience conviviale pour les amateurs de cuisine, en proposant une variété de recettes et en permettant aux utilisateurs de sauvegarder leurs recettes favorites.",
        features: [
            {
                title: "Recherche de Recettes",
                items: [
                    "Recherche de recettes selon les ingrédients disponibles",
                    "Affichage détaillé des recettes avec instructions",
                    "Liste d'ingrédients complète",
                    "Interface intuitive de recherche"
                ]
            },
            {
                title: "Gestion des Utilisateurs",
                items: [
                    "Authentification sécurisée",
                    "Sauvegarde des recettes favorites",
                    "Gestion du profil utilisateur",
                    "Back Office (utilisateur: visiteur, mot de passe: visiteur)"
                ]
            },
            {
                title: "Exploration Culinaire",
                items: [
                    "Section recettes populaires",
                    "Découverte des nouveautés",
                    "Tendances culinaires",
                    "Fonctionnalités de partage social"
                ]
            }
        ],
        stack: [
            "Symfony avec Twig pour le backend",
            "React.js pour l'interface utilisateur",
            "API REST pour la communication client-serveur",
            "MySQL pour la base de données",
            "Bootstrap 5 pour le design responsive",
            "Architecture MVC"
        ],
        credentials: {
            backoffice: {
                username: "visiteur",
                password: "visiteur"
            }
        },
        objectives: "O'fourn'O vise à fournir une expérience culinaire complète aux utilisateurs, en leur permettant de découvrir et de cuisiner une variété de recettes en fonction des aliments qu'ils ont à leur disposition. La conception responsive et conviviale garantit une accessibilité maximale sur tous les appareils."
    },
    petiteBerceuse: {
        title: "La Petite Berceuse - Site Vitrine",
        subtitle: "Site web moderne pour une infirmière en puériculture spécialisée dans les soins aux bébés et femmes enceintes",
        github: "https://github.com/Tricoire-Arnaud/la-petite-berceuse",
        liveUrl: "https://lapetiteberceuse.vercel.app/",
        detailUrl: "project-berceuse.html",
        categories: ["web"],
        images: ["berceuse/la petite berceuse.png"],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap"
        ],
        description: "La Petite Berceuse est un site vitrine élégant et intuitif conçu pour une infirmière en puériculture. Le site présente ses services spécialisés dans les soins aux bébés et l'accompagnement des femmes enceintes, mettant en avant son expertise en bains pour bébés et massages prénataux.",
        features: [
            {
                title: "Présentation des Services",
                items: [
                    "Description détaillée des soins pour bébés",
                    "Présentation des massages prénataux",
                    "Galerie photos des installations",
                    "Informations pratiques"
                ]
            },
            {
                title: "Interface Utilisateur",
                items: [
                    "Design moderne et apaisant",
                    "Navigation intuitive",
                    "Responsive design",
                    "Formulaire de contact"
                ]
            }
        ],
        stack: [
            "HTML5 pour la structure",
            "CSS3 pour le style et les animations",
            "JavaScript pour l'interactivité",
            "Bootstrap pour le design responsive"
        ],
        objectives: "L'objectif principal était de créer une présence en ligne professionnelle et chaleureuse pour mettre en valeur les services spécialisés de l'infirmière en puériculture. Le site devait transmettre une image rassurante et professionnelle tout en facilitant la prise de contact pour les futures mamans et les jeunes parents."
    }
};

function displayProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';

    for (const project of Object.values(projects)) {
        const projectHTML = `
            <div class="project-item glass-card animate-fadeInUp" data-category="${project.categories.join(' ')}">
                <div class="project-image">
                    <img src="images/portfolio/${project.images[0]}" 
                         alt="${project.title}" 
                         class="img-fluid">
                    <div class="project-overlay">
                        <div class="project-actions">
                            <a href="${project.detailUrl}" class="btn btn-primary">
                                <i class="bi bi-eye"></i>
                                <span>Détails</span>
                            </a>
                            <a href="${project.github}" class="btn btn-outline" target="_blank">
                                <i class="bi bi-github"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.subtitle}</p>
                    <div class="project-tech">
                        ${project.technologies.slice(0, 4).map(tech => 
                            `<span class="tech-badge">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 4 ? 
                            `<span class="tech-badge">+${project.technologies.length - 4}</span>` : 
                            ''}
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    }

    initializeFilters();
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectItems = document.querySelectorAll('.project-item');

    for (const button of filterButtons) {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Mise à jour des boutons actifs
            for (const btn of filterButtons) {
                btn.classList.remove('active');
            }
            button.classList.add('active');

            // Filtrage des projets
            for (const item of projectItems) {
                const categories = item.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'block';
                    item.classList.add('animate-fadeInUp');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-fadeInUp');
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', displayProjects); 