
const telebeler = [

     {
        fin:"423ER321",
        Ad:"Meherrem",
        Soyad:"Dadashov",
        Tevellud:2004,
        isStudent: true,
       
    },   
    {
        fin:"931FG572",
        Ad:"Murad",
        Soyad:"Ismayilov",
        Tevellud:2008,
        isStudent:false,
        
    },
    {
        fin:"123ER321",
        Ad:"Gunay",
        Soyad:"Mahmutov",
        Tevellud:2001,
        isStudent:true,
      
    }


   
]

for(i=0;  i<telebeler.length ; i++){
    document.querySelector("tbody").innerHTML += `<tr>
    <th scope="row">${telebeler[i].fin}</th>
    <td>${telebeler[i].Ad}</td>
    <td>${telebeler[i].Soyad}</td>
    <td>${telebeler[i].Tevellud}</td>
    <td>${telebeler[i].isStudent ? "Telebe tehsil alir" : "Telebe mezundur"}</td>
    <td><i class="bi bi-pencil-square"></i></td>
    <td><i class="bi bi-trash"></i></td>
    </tr>`
    
}

