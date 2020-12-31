var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/kitap-detay", (req, res) => {

    /*
    Kitap Adı: Beyaz Diş
    Yazar:Jack London
    Çevirmen:Eda Ergene
    Yayınevi: İstek
    Hamur Tipi: 2. Hamur
    Ebat: 13,5 x 20
    İlk Baskı Yılı: 2018
    Baskı Sayısı: 1. Basım
    Barkod: 9786056802867 
    */

    var bookData = {
        kitapYazar: "Jack London",
        kitapAdi: "Beyaz Diş",
        kitapCevirmen: "Eda Ergene",
        kitapYayinevi: "İstek",
        kitapHamurTip: "2. Hamur",
        kitapEbat: "13,5 x 20",
        kitapIlkBaskiYili: "2018",
        kitapBaskiSayisi: "1. Basım",
        kitapBarkod: "9786056802867",
        kitapHakkinda: 'Asıl adı John Griffith Chaney olan Jack London 1876’da San Francisco’da doğdu, 1916’da öldü. Çocukluğu yoksulluk içinde geçti. On dört yaşından itibaren fabrika işçiliği, balıkçılık, tayfalık gibi işlerde çalıştı. Yirmi iki yaşında yazar olan Jack London, yirmi yedi yaşında Vahşetin Çağrısı adlı romanı ile dünyaca ün kazandı. Eserleri filme alınan ilk yazarlardandır. Eserlerinde hayat kavgasını ve düzen eleştirisini romantik bir üslupla anlatır. En bilinen kitapları Demir Ökçe, Martin Eden, Deniz Kurdu ve Beyaz Diş’tir. Beyaz Diş, vahşi doğanın çetin yaşam koşullarının tüm canlılar için hayatta kalma mücadelesi anlamına geldiğini anlatan en büyüleyici romanlardan biridir. Bir mağarada doğan Beyaz Diş’in büyürken, dünyanın kapılarını yavaş yavaş aralamasını, kendisini ve doğayı keşfederek ehlileşme serüvenini konu alır. Kitap, vahşi doğada bile her canlının sevgiye ihtiyacı olduğunu savunur.',
        kitapOzet:'Beyaz Diş annesinin diğer yavrularından çok farklı olan gri tüylü bir kurttur. Her yavru gibi o da annesine muhtaç, annesinin yaptıklarını izler durur. Yavru kurt olmanın merakı ile bir gün yuvasından dışarı çıkar ve etrafı incelemeye başlar, dışarıda bir insan görür. İnsanı incelemeye başlayan beyaz diş, ardından yavaş yavaş adama yaklaşır. Annesi beyaz dişin yuvadan ayrıldığını, sesini duyarak anlar ve yavrusu kurtarmak için adama doğru koşar, ancak adam yavru kurt u ve annesini de yakalayarak bir toplama kampına götürür. Burada diğer köpekler tarafından yavru kurt a beyaz diş ismi takılır. Beyaz Diş diğer köpeklerden farklı olması nedeniyle köpeklerin saldırısına uğramaktadır. Yavru küçük bir kurt olması sebebiyle kendisin savunamamaktadır. Bir yandan da annesini başka bir yere gönderilir. İyice tek başına kalan yavrumuz hayatta kalmayı mücadele etmeyi kendi korumayı öğrenir. Bir gün barınağın sahibinin çocuğunu diğer çocukların saldırsın dan korur. Sahibi tarafından daha iyi bir bakıma alınır ve daha çok sevilir.Günler geçer aylar geçer. Bir gün kapta kıtlık başlar o kadar zor günler gelir ki köpekleri yenmeye bile başlanır. Yavru kurdumuz gitme zamanın geldiğini anlar ve kaptan kaçar ancak belli bir süre sonra kampa geri döner sahibi onunun güçlü olduğunun farkına varır. Beyaz Diş i satmaya karar verir. Yeni sahibi Beyaz Dişi köpek dövüşlerin de kullanır ve ona çok kötü davranır her gün daha da hırçınlaşır, baya bir kavgada kazanır. Yeni birisi beyaz dişi görür ve onu satın alır yeni sahibi çok iyidir. Kurt yeni sahibine çok bağlanır öyle ki yeni sahibi scott a saldıran bir adama karşı sahibini korur. Bu esnada ağır yaralanır. öleceği söylenir ancak sahibi ona çok iyi bakar bu hikayeden sonra beyaz dişin namı dil den dile yayılır.',
        kitapFiyat:"7.60 ₺",
        kitapEskiFiyat:"10 ₺",
        kitapResim1:"https://i.idefix.com/cache/500x400-0/originals/0001776353001-1.jpg",
        kitapResim2:"https://i.idefix.com/cache/500x400-0/originals/0001804111001-1.jpg"
    
    }

    res.render("book-detail", bookData);
});




app.listen(8000, () => {
    console.log("Server çalışıyor no problem!!!")
})