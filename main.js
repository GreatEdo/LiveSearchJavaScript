const cari = document.getElementById("cari"),
    items = document.querySelectorAll("tbody  tr");

cari.addEventListener("input", (e) => caridata(e.target.value));

function caridata(search){
    items.forEach((item) =>{
        if(item.innerText.toLowerCase().includes(search.toLowerCase())){
            item.classList.remove("d-none");
        }else{
            item.classList.add("d-none");
        }
    });
}