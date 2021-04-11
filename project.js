//formu seciyorum
cont forSm = document.getElementById("film-form");
const titleElement = document.querySelector("#title");   //imputlari seciyorum
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


//UI objesini Baslatma 
const ui = new UI();

//Tum eventleri yuklemek icin fonksiyon yaziyorum dom projesindeki gibi

eventListeners();

functon eventListeners(){
    form.addEventListener("submit", addFilm)  // submit eventi katiyorum
}
function addFilm(e){

const title = titleElement.Value
const director = directorElement.value;
const url = urlElement.value;

//3 alanin da dolu oldugunu kontrol etmek istiyorum, yani biri bile bos kalirsa hata mesaji versin

if (title === "" || director === "" || url === ""){

    //hata
}
else{
    //yeni film
    const newFilm = new Film(title, director,url);

    ui.addFilmToUI(newFilm)
}




    e.preventDefault();
}
