// One Pagers content
document.addEventListener('DOMContentLoaded', function() {
    // One Pagers
    const onePagerslist = document.getElementById('one-pagers-list');
    if (onePagerslist) {
        onePagerslist.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none";
        
        [
            {
                name: "Blue Margin 2025",
                url: "https://drive.google.com/file/d/1LsO96yiQwFwL50u8afOWnSKq3NeAJ3eQ/view",
                img: "images/bm1pg01.png",
                summary: "Overview of Blue Margin's services and vision for 2025."
            },
            {
                name: "Service Tiers Overview",
                url: "https://drive.google.com/file/d/1biVgETD62nIzqrAYx82UjvG9wd3I2SkW/view",
                img: "images/bm1pg02.png",
                summary: "Comprehensive breakdown of Blue Margin's service tier offerings."
            },
            {
                name: "Blue Margin Wrapped",
                url: "https://drive.google.com/file/d/1Gh30MHX7qmC8CgmqBEWDzGyKjGEl9ljf/view",
                img: "images/bmwrapped1pg.png",
                summary: "Annual summary of Blue Margin's achievements and milestones."
            },
            {
                name: "BM Case Study",
                url: "https://drive.google.com/file/d/1v6EFACscOBbcYTEzSGjw83knwqH1tSSk/view?usp=drive_link",
                img: "images/pin1pg.png",
                summary: "Detailed case study showcasing Blue Margin's successful client implementation."
            },
            {
                name: "Hedera April 2024",
                url: "https://drive.google.com/file/d/1PmGrHFr2PRAmLQWj7FLJ1puvwO8DJ2s4/view",
                img: "images/hedera1pg.png",
                summary: "Overview of Hedera blockchain technology and applications as of April 2024."
            },
            {
                name: "Spadafy VDI Managed Services",
                url: "https://drive.google.com/file/d/1gaP-AU0tWmLBBAr4yAuIjG3blwy8oFLL/view",
                img: "images/spad1pg.png",
                summary: "Comprehensive overview of Spadafy's VDI Managed Services offerings."
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
                            <img src="${item.img}" alt="${item.name}" class="w-10 h-10 object-cover rounded" />
                        </div>
                        <div class="flex-grow">
                            <h4 class="text-lg font-semibold font-heading text-black group-hover:text-primary transition-colors">${item.name}</h4>
                        </div>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${item.summary}</p>
                    <div class="mt-3 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                        <span class="mr-1">View Document</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </div>
                </div>
            `;
            onePagerslist.appendChild(div);
        });
    }
});