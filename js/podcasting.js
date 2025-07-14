// Podcasting content
document.addEventListener('DOMContentLoaded', function() {
    // Podcast Platforms
    const podcastList = document.getElementById('podcast-list');
    
    if (podcastList) {
        podcastList.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
        
        [
            {
                name: "YouTube",
                url: "https://youtube.com/@nicoleannen",
                img: "images/youtube.png",
                summary: "Watch full podcast episodes and video content on YouTube with visual elements and engaging discussions."
            },
            {
                name: "Spotify",
                url: "https://open.spotify.com/show/your-podcast-id",
                img: "images/spotify.png",
                summary: "Listen to The Dashboard Effect podcast on Spotify for convenient audio streaming and offline listening."
            },
            {
                name: "Apple Podcasts",
                url: "https://podcasts.apple.com/podcast/your-podcast-id",
                img: "images/podcasting.png",
                summary: "Subscribe to The Dashboard Effect on Apple Podcasts for seamless integration with your iOS devices."
            },
            {
                name: "Google Podcasts",
                url: "https://podcasts.google.com/feed/your-podcast-feed",
                img: "images/podcasting.png",
                summary: "Access episodes through Google Podcasts for Android users and Google ecosystem integration."
            },
            {
                name: "Overcast",
                url: "https://overcast.fm/your-podcast",
                img: "images/overcast.webp",
                summary: "Listen on Overcast with smart speed and voice boost features for an enhanced listening experience."
            },
            {
                name: "RSS Feed",
                url: "#",
                img: "images/podcasting.png",
                summary: "Subscribe directly via RSS feed for use with any podcast app or player of your choice."
            }
        ].forEach(item => {
            const div = document.createElement('div');
            div.className = "border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group";
            
            // Make the entire card clickable if URL exists and is not placeholder
            if (item.url && item.url !== '#') {
                div.onclick = function() {
                    window.open(item.url, '_blank');
                };
            }
            
            div.innerHTML = `
                <div class="p-4">
                    <div class="flex items-start gap-3 mb-3">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <img src="${item.img}" alt="${item.name}" class="w-8 h-8 object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                            <svg class="w-6 h-6 text-primary hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg font-semibold font-heading text-black group-hover:text-primary transition-colors">${item.name}</h4>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${item.summary}</p>
                    ${item.url && item.url !== '#' ? `
                        <div class="mt-3 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                            <span class="mr-1">Listen on ${item.name}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </div>
                    ` : `
                        <div class="mt-3 text-gray-400 text-sm">
                            Coming soon
                        </div>
                    `}
                </div>
            `;
            podcastList.appendChild(div);
        });
    }
});