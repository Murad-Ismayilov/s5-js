// console.log("Salam, Roman")
// console.log("Salam, Tahir")
// console.log("Salam, Gunay")
// // Regular
// function welcomeUser(istifadeciAdi) {
//     console.log("Salam, " + istifadeciAdi)
// }



// welcomeUser("Gunay") //
// welcomeUser("Roman")
// welcomeUser("Huseynrza")

// // Function vs Function expression
// // Function expression
// const istifadeciniSalamla = function(userName) {
//    return "Welcome, " + userName
// }

// istifadeciniSalamla("Raul")


// // Arrow function



// const istifadeciniSalamlaArrowFunc = (name, surname) =>"Welcome "+ name
// istifadeciniSalamlaArrowFunc("Meherrem")


// //IIFE Immediately Invoked Function Expression


// (function s5QrupunuSalamla(ad,soyad){
//     console.log("Welcome, " + ad +" " +  soyad)
// }("Meherrem", 'Dadashov'))










// API Application Programming Interface

// Asinxron Sinxron


// Hoisting

// JSON JavaScript Object Notation

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
                  <h5 class="card-title">${mehsullar[i].title}</h5>
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

        // Serverde problem yarandi Uncaught reject
    }

    finally {
            console.log("Serverde xeta yarandi")
    }

}

// load, DOMContentLoaded



