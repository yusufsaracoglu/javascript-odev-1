// ***** İsim Kısmı Oluşturuldu
let isim = prompt("Adınızı Giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML= ` ${isim}`

// ***** Saat Kısmı Oluşturuldu
function zaman(){

    const tarih = new Date;

    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    
    let gun =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let gunName = gun[tarih.getDay()]
    
    let clock = document.querySelector("#myClock");
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gunName}`;
}
setInterval(zaman,1000);

