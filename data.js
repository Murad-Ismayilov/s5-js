const mehsullarinYerlesheceyiYer = document.querySelector("#mehsullar")
window.addEventListener("load", getMelumatlariGetir)

async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab =  await fetch(unvan)
        const mehsullar = await cavab.json()
        

        for(let i=0; i<mehsullar.length; i++) {
            mehsullarinYerlesheceyiYer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
            <div class="card my-2 border-0" >
                <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-evenly">
                  <h5 class="card-title text-center">${mehsullar[i].title}</h5>
                  <p class="card-text">${mehsullar[i].description.slice(0,40)}...</p>
                  <a href="/details.html" class="btn btn-primary">Read more</a>
                </div>
              </div>
            </div>
            `
            
        }

    }

    catch(err) {
        console.log("Serverde bash veren xeta: ", err.message)
    }

    finally {
            console.log("Serverde xeta yarandi")
    }

}



const overlayMenyuDivi = document.querySelector(".overlay-menu")

const navbarButtonu = document.querySelector(".navbar-toggler-icon")

const closeIcon = document.querySelector(".bi-x-circle")

const linkIcon = document.querySelector(".bi-whatsapp")

navbarButtonu.addEventListener("click", navbarMenyunuAc)

closeIcon.addEventListener("click", menyunuBagla)


function navbarMenyunuAc() {

    overlayMenyuDivi.style.width="100%"
}

function menyunuBagla(){
 
    overlayMenyuDivi.style.width="0"
}