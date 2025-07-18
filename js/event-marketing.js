// Event Marketing and One Pagers content
document.addEventListener('DOMContentLoaded', function() {
    // Event Marketing
    const eventMarketingList = document.getElementById('event-marketing-list');
    if (eventMarketingList) {
        eventMarketingList.className = "grid grid-cols-1 md:grid-cols-3 gap-4 list-none";
        
        [
            {
                name: "Spadafy Booth Design",
                img: "images/spadbooth1.png",
                modalImages: ["images/spadbooth1.png"],
                summary: "Booth design for Spadafy at industry conferences, showcasing their VDI managed services."
            },
            {
                name: "Blue Margin Banner Design",
                img: "images/bluem-confsign.png",
                modalImages: ["images/bluem-confsign.png"],
                summary: "Banner design for Blue Margin's conference presence, highlighting their data intelligence services."
            },
            {
                name: "Value Technology Alliance Booth Design",
                img: "images/ValueTechBooth.jpg",
                modalImages: ["images/ValueTechBooth.jpg"],
                summary: "Booth design for Value Technology Alliance at blockchain and cryptocurrency conferences."
            },
            {
                name: "Blue Margin Lunch and Learn - Preparing Your Data for AI",
                img: "images/1750893501285.jpg",
                modalImages: ["images/1750893501285.jpg", "images/1750893501869.jpg"],
                summary: "Lunch and Learn event for Blue Margin at Elways in Denver, focusing on preparing data for AI implementation."
            }
        ].forEach((item, index) => {
            const li = document.createElement('li');
            li.className = "rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-300";
            li.setAttribute('data-modal-target', `event-modal-${index}`);
            
            // Make the entire card clickable
            li.addEventListener('click', function() {
                openEventModal(item.name, item.modalImages);
            });
            
            li.innerHTML = `
                <div class="p-3">
                    <div class="flex items-center gap-2">
                        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />
                        <h4 class="text-base font-medium font-heading text-black">${item.name}</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-2">${item.summary}</p>
                </div>
            `;
            eventMarketingList.appendChild(li);
        });
    }
});