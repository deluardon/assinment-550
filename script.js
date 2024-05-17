// All category : - https://openapi.programming-hero.com/api/videos/categories
// URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}
// Example: - https://openapi.programming-hero.com/api/videos/category/1000

const categoryAll = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        const data = await res.json();

        data.data.forEach(element => {
            
            const cardContainer = document.getElementById('card-container');
            console.log(data.data[0]);
            const card = document.createElement('div');
            card.innerHTML = `
                <div>
                    <div>
                        <img class="w-[312px] h-[200px]" src="${element.thumbnail}" alt="">
                    </div>
                    <div class="flex items-center gap-3 mt-3">
                        <div>
                            <img class="rounded-full w-[40px] h-[40px]" src="${element.authors[0].profile_picture }" alt="">
                        </div>
                        <div>
                            <h1 class="leading-6 text-[16px] font-bold">${element.title} </h1>
                        </div>
                    </div>
                    <div class="flex gap-2 items-center">
                        <div>
                            <p class="ml-12">${element.authors[0].profile_name }</p>
                        </div>
                        <div>
                        <p class="">${element.authors[0].
                            verified
                             }</p>
                        </div>
                    </div>
                    <p class="ml-12">${element.
                        others.views
                        }</p>
                </div>
            `;
    
            cardContainer.appendChild(card);
        });

      

      
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function with an appropriate id




