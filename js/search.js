let search = document.querySelector(".search-cards");
let input = document.getElementById("input");


input.addEventListener("input", (e) => {
    serach.innerHTML = "";
    let serachValue = e.target.value;
    let serachProducts = products.filter((el) => el.name.toLowerCase().includes(serachValue.toLowerCase()));

    if(serachValue === ""){
        serach.innerHTML = ""
        serach.classList.add("hidden")
    }else{
        serach.classList.remove("hidden")
    }

    serachProducts.lenght === 0? serach.textContent = "Bunday mahsulot yo'q" :  serachProducts.map((el) => {
        search.innerHTML += `
         <div class="search-cards flex items-end bg-[gray] p-[10px] ">
                    <img width="60px" height="60px" src=${el.images[1]} alt="">
                    <p>${el.description}</p>
        </div>
        `;
    })
})

