// Portfolio navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category cards functionality - navigate to dedicated pages
    const categoryCards = document.querySelectorAll('.category-card');
    
    console.log('Category cards found:', categoryCards.length);
    
    // Add click event to category cards for navigation to dedicated pages
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            console.log('Navigating to category page:', category);
            
            // Navigate to dedicated page
            let targetPage;
            switch(category) {
                case 'digital-marketing':
                    targetPage = 'digital-marketing.html';
                    break;
                case 'event-marketing':
                    targetPage = 'event-marketing.html';
                    break;
                case 'landing-pages':
                    targetPage = 'landing-pages.html';
                    break;
                case 'podcasting':
                    targetPage = 'podcasting.html';
                    break;
                case 'one-pagers':
                    targetPage = 'one-pagers.html';
                    break;
                default:
                    targetPage = `${category}.html`;
            }
            
            // Navigate to the dedicated page
            window.location.href = targetPage;
        });
    });
});