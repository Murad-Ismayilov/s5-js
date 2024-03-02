const telebeler = [
    {
        ad:"Meherrem",
        soyad:"Dadashov",
        tevellud:2004,
        isStudent:true,
        telebeninYasiniHesabla:function(){
            return new DataTransfer().getFullYear()-this.tevellud
            
        }
    },
    {
        ad:"Meherrem",
        soyad:"Dadashov",
        tevellud:2004,
        isStudent:true,
        telebeninYasiniHesabla:function(){
            return new DataTransfer().getFullYear()-this.tevellud
            
        }
    },
    {
        ad:"Gunay",
        soyad:"Mahmutov",
        tevellud:2001,
        isStudent:true,
        telebeninYasiniHesabla:function(){
            return new DataTransfer().getFullYear()-this.tevellud
            
        }
    }

]

const tbodyTeqi = document.querySelector("tbody")
for(let i=0; i<telebeler.lenght; i++){
    console.log(telebeler[i].ad)
}