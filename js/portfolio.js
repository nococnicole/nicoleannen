// Portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category cards functionality
    const categoryCards = document.querySelectorAll('.category-card');
    const categoryContents = document.querySelectorAll('.category-content');
    const backButton = document.getElementById('back-to-categories');
    const portfolioCardsContainer = document.querySelector('#portfolio .grid');
    
    console.log('Category cards found:', categoryCards.length);
    console.log('Category contents found:', categoryContents.length);
    console.log('Portfolio cards container:', portfolioCardsContainer);
    
    // Add click event to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            console.log('Clicked category:', category);
            
            // Set flag to indicate a portfolio item is selected
            window.portfolioItemSelected = true;
            
            // Hide the main portfolio grid
            if (portfolioCardsContainer) {
                portfolioCardsContainer.classList.add('hidden');
            }
            
            // Hide all category contents first
            categoryContents.forEach(content => {
                content.classList.add('hidden');
                console.log('Hiding content:', content.id);
            });
            
            // Show selected category content
            const targetContent = document.getElementById(`${category}-content`);
            console.log('Target content element:', targetContent);
            
            if (targetContent) {
                targetContent.classList.remove('hidden');
                console.log('Showing content:', targetContent.id);
            } else {
                console.error('Target content not found for category:', category);
            }
            
            // Show back button
            if (backButton) {
                backButton.classList.remove('hidden');
            }
        });
    });
    
    // Back button functionality
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log('Back button clicked');
            
            // Reset flag when returning to main view
            window.portfolioItemSelected = false;
            
            // Hide all category contents
            categoryContents.forEach(content => {
                content.classList.add('hidden');
                console.log('Hiding content on back:', content.id);
            });
            
            // Show the main portfolio grid
            if (portfolioCardsContainer) {
                portfolioCardsContainer.classList.remove('hidden');
            }
            
            // Hide back button
            backButton.classList.add('hidden');
        });
    }
});