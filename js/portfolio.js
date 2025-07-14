// Portfolio navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category cards functionality - change to navigation instead of hide/show
    const categoryCards = document.querySelectorAll('.category-card');
    
    console.log('Category cards found:', categoryCards.length);
    
    // Add click event to category cards for navigation
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            console.log('Navigating to category:', category);
            
            // Map category names to actual section IDs that exist in the HTML
            let targetSectionId;
            switch(category) {
                case 'digital-marketing':
                    targetSectionId = 'videos-list';
                    break;
                case 'event-marketing':
                    targetSectionId = 'event-marketing-list';
                    break;
                case 'landing-pages':
                    targetSectionId = 'landing-pages-list';
                    break;
                default:
                    targetSectionId = category;
            }
            
            // Navigate to the category section
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error('Target section not found:', targetSectionId);
            }
        });
    });
});