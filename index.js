var nama = "yusuf"
var universitas = "universitas muhammadiyah gresik"
var usia = 22;
var golongan = usia < 23 ? ('masih muda') : ('sudah tua')
var kecamatan = "benjeng"
var kabupaten = "gresik"
var jawaban = ['sudah', 'belum'];
var jawab = jawaban[Math.floor(Math.random() * jawaban.length)];
function javascribt() {
    console.log("JavaScript adalah suatu bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag script.")
}

const jumlah = (a, b) => (a+b)



prompt ('nama saya '+nama+' sekarang saya kuliah di '+universitas+', dan usia saya tahun ini '+usia+' tahun. Di usia saya sekarang saya masih tergolong '+golongan+'. Saya bertempat tinggal di kecamatan'+kecamatan+', kabupaten '+kabupaten+'. Di usia saya sekarang saya '+jawab+' mempunyai kekasih, Terima kasih.');

alert (javascribt);

alert (jumlah(1, 2))

// for (var i = 1; i = 5; i++){
//     prompt ("ini hasil dari for "+i)
// }

var berapa = 5
for (var i = berapa; i >= 1; i--){
    var bintang = " "
    for (var j = 1; j <= i; j++){
        bintang += "*"
    }
    console.log (bintang)
}

for (var i = 1; i<=berapa; i++){
    var bintang = " "
    for (var j = 1; j <= i; j++){
        bintang += "*"
    }
    console.log (bintang)
}