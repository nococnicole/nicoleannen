// Podcasting content
document.addEventListener('DOMContentLoaded', function() {
    // Podcasts
    const podcastList = document.getElementById('podcast-list');
    
    if (podcastList) {
        podcastList.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
        
        [
            {
                name: "Dashboard Effect Ep. 1: Data Visualization",
                url: "https://drive.google.com/drive/folders/1IylYd79sJjAZ5zKekyLZzQCJL3EvF1zO",
                img: "images/podcasting.png",
                summary: "Exploring the fundamentals of data visualization and how effective dashboards can transform business decision-making."
            },
            {
                name: "Dashboard Effect Ep. 2: Business Intelligence",
                url: "https://drive.google.com/drive/folders/1IylYd79sJjAZ5zKekyLZzQCJL3EvF1zO",
                img: "images/podcasting.png",
                summary: "Deep dive into business intelligence tools and strategies for leveraging data to drive organizational success."
            },
            {
                name: "Dashboard Effect Ep. 3: Data-Driven Decision Making",
                url: "https://drive.google.com/drive/folders/1IylYd79sJjAZ5zKekyLZzQCJL3EvF1zO",
                img: "images/podcasting.png",
                summary: "Understanding how to build a culture of data-driven decision making within your organization."
            }
        ].forEach(item => {
            const div = document.createElement('div');
            div.className = "border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group";
            
            // Make the entire card clickable
            div.onclick = function() {
                window.open(item.url, '_blank');
            };
            
            div.innerHTML = `
                <div class="p-4">
                    <div class="flex items-start gap-3 mb-3">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg font-semibold font-heading text-black group-hover:text-primary transition-colors">${item.name}</h4>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${item.summary}</p>
                    <div class="mt-3 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        <span class="mr-1">Listen to Episode</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </div>
                </div>
            `;
            podcastList.appendChild(div);
        });
    }
});