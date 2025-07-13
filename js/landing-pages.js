// Landing Pages content
document.addEventListener('DOMContentLoaded', function() {
    // Landing Pages
    const landingPagesList = document.getElementById('landing-pages-list');
    if (landingPagesList) {
        landingPagesList.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none";
        
        [
            {
                name: "Blue Margin - Talk Data",
                url: "https://bluemargin.com/talkdata",
                img: "images/bm-landing.png",
                summary: "Landing page for Blue Margin's Talk Data initiative, designed to engage prospects in data conversations.",
                metrics: "High engagement rate"
            },
            {
                name: "Blue Margin - Legal Data",
                url: "https://bluemargin.com/legaldata",
                img: "images/ai-guide-landing.png", 
                summary: "Specialized landing page for Blue Margin's legal data services and solutions.",
                metrics: "Targeted conversion"
            },
            {
                name: "Blue Margin Events",
                url: "https://events.bluemargin.com",
                img: "images/podcast-landing.png",
                summary: "Event registration and information landing page for Blue Margin's conferences and webinars.",
                metrics: "Event registrations"
            },
            {
                name: "PitchAxis",
                url: "https://pitchaxis.io",
                img: "images/pitchaxis-landing.png",
                summary: "My freelancing company landing page showcasing B2B tech marketing services and expertise.",
                metrics: "Lead generation"
            }
        ].forEach(item => {
            const div = document.createElement('div');
            div.className = "border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group";
            
            // Make the entire card clickable if URL exists
            if (item.url && item.url !== '#') {
                div.onclick = function() {
                    window.open(item.url, '_blank');
                };
            }
            
            div.innerHTML = `
                <div class="p-4">
                    <div class="flex items-start gap-3 mb-3">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg font-semibold font-heading text-black group-hover:text-primary transition-colors">${item.name}</h4>
                            <div class="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-1">
                                ${item.metrics}
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${item.summary}</p>
                    ${item.url && item.url !== '#' ? `
                        <div class="mt-3 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                            <span class="mr-1">View Landing Page</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </div>
                    ` : `
                        <div class="mt-3 text-gray-400 text-sm">
                            Internal project
                        </div>
                    `}
                </div>
            `;
            landingPagesList.appendChild(div);
        });
    }
});