// Podcasting content
document.addEventListener('DOMContentLoaded', function() {
    // Podcast Platforms
    const podcastList = document.getElementById('podcast-list');
    
    if (podcastList) {
        podcastList.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
        
        [
            {
                name: "YouTube",
                url: "https://www.youtube.com/@thedashboardeffectpodcast",
                img: "images/youtube.png"
            },
            {
                name: "Spotify",
                url: "https://open.spotify.com/show/your-podcast-id",
                img: "images/spotify.png"
            },
            {
                name: "Apple Podcasts",
                url: "https://podcasts.apple.com/podcast/your-podcast-id",
                img: "images/podcasting.png"
            }
        ].forEach(item => {
            const div = document.createElement('div');
            div.className = "border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer";
            
            if (item.url && item.url !== '#') {
                div.onclick = function() {
                    window.open(item.url, '_blank');
                };
            }
            
            div.innerHTML = `
                <div class="p-4 text-center">
                    <img src="${item.img}" alt="${item.name}" class="w-16 h-16 mx-auto mb-3 object-contain" />
                    <h4 class="text-lg font-semibold font-heading text-black">${item.name}</h4>
                </div>
            `;
            podcastList.appendChild(div);
        });
    }
});