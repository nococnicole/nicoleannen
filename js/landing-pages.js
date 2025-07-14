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
                img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
                summary: "Landing page for Blue Margin's Talk Data initiative, designed to engage prospects in data conversations."
            },
            {
                name: "Blue Margin - Legal Data",
                url: "https://bluemargin.com/legaldata",
                img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
                summary: "Specialized landing page for Blue Margin's legal data services and solutions."
            },
            {
                name: "Blue Margin Events",
                url: "https://events.bluemargin.com",
                img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400",
                summary: "Event registration and information landing page for Blue Margin's conferences and webinars."
            },
            {
                name: "PitchAxis",
                url: "https://pitchaxis.io",
                img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
                summary: "My freelancing company landing page showcasing B2B tech marketing services and expertise."
            }
        ].forEach(item => {
            const div = document.createElement('div');
            div.className = "border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden";
            
            // Make the entire card clickable if URL exists
            if (item.url && item.url !== '#') {
                div.onclick = function() {
                    window.open(item.url, '_blank');
                };
            }
            
            div.innerHTML = `
                <div class="relative overflow-hidden">
                    <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div class="p-4">
                    <div class="mb-3">
                        <h4 class="text-lg font-semibold font-heading text-black group-hover:text-primary transition-colors mb-2">${item.name}</h4>
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 9c1.657 0 3 4.03 3 9s-1.343 9-3-9"></path>
                            </svg>
                            <span>Landing Page</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${item.summary}</p>
                    ${item.url && item.url !== '#' ? `
                        <div class="mt-4 flex items-center justify-between">
                            <span class="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform flex items-center">
                                <span class="mr-1">View Live Site</span>
                            </span>
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