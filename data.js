const mehsullarinYerlesheceyiYer = document.querySelector("#mehsullar")
window.addEventListener("load", getMelumatlariGetir)

async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab =  await fetch(unvan) //gedir sayta girir (request(istek) gonderir)
        const mehsullar = await cavab.json()
        

        for(let i=0; i<mehsullar.length; i++) {
            mehsullarinYerlesheceyiYer.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
            <div class="card my-2 p-4" >
                <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${mehsullar[i].title.slice(0, 40)}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
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