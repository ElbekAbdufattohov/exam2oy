let disCards = document.querySelector(".dis-cards");


products.map((el)=>{
    disCards.innerHTML += `
    <div class="card max-w-[500px] w-full bg-white p-[20px] rounded-[10px] overflow-hidden">
                        <div class="relative w-full h-[200px]">
                            <img class="w-full h-full object-cover " src="${el.images[0]}" alt="${el.name}">
                            <p class="absolute bottom-[20px] left-[20px] rounded-[5px] bg-[orangered] text-white w-[75px] p-[15px]">-50%</p>
                        </div>
                        <div class="flex items-center justify-between mt-[10px]">
                            <h3 class="text-[20px] font-bold">$44</h3>
                            <h3 class="text-[20px] font-bold line-through">$55</h3>
                        </div>
                        <h2 class="text-[orangered] text-[20px] font-bold " >${el.name}</h2>
                        <p class="mt-[5px] line-clamp-[2]">${el.description}</p>
                        <div class="flex items-center gap-[3px]">
                            <img width="25px" src="./general/star-full.svg" alt="">
                            <img width="25px" src="./general/star-full.svg" alt="">
                            <img width="25px" src="./general/star-full.svg" alt="">
                            <img width="25px" src="./general/star-half.svg" alt="">
                        </div>
                        <button class="w-full border-[2px] border-[green] rounded-[4px] p-[8px] mt-[20px] text-[green] text-[20px] font-bold cursor-pointer hover:bg-[orangered] hover:text-white hover:-[orangered] duratin-500 ">B корзину</button>
                    </div>
                    `
})



// products.map((el) => {
//     disCards.innerHTML += `
                      
//     <div class="card max-w-[500px] w-full bg-white p-[20px] rounded-[10px] overflow-hidden">
//                         <div class="relative w-full h-[200px]">
//                             <img class="w-full h-full object-cover " src="${el.images[0]}" alt="${el.name}">
//                             <p class="absolute bottom-[20px] left-[20px] rounded-[5px] bg-[orangered] text-white w-[75px] p-[15px]">-50%</p>
//                         </div>
//                         <div class="flex items-center justify-between mt-[10px]">
//                             <h3 class="text-[20px] font-bold">$${el.price - el.price * rl.discount / 100}</h3>
//                             <h3 class="text-[20px] font-bold line-through">$${el.price}</h3>
//                         </div>
//                         <h2 class="text-[orangered] text-[20px] font-bold " >${el.name}</h2>
//                         <p class="mt-[5px]">${el.description}</p>
//                         <div class="flex items-center gap-[3px]">
//                             <img width="25px" src="./general/star-full.svg" alt="">
//                             <img width="25px" src="./general/star-full.svg" alt="">
//                             <img width="25px" src="./general/star-full.svg" alt="">
//                             <img width="25px" src="./general/star-half.svg" alt="">
//                         </div>
//                         <button class="w-full border-[2px] border-[green] rounded-[4px] p-[8px] mt-[20px] text-[green] text-[20px] font-bold cursor-pointer hover:bg-[orangered] hover:text-white hover:-[orangered] duratin-500 ">B корзину</button>
//                     </div>
    
//                     `
//  })
