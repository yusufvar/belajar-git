// var nama = "yusuf"
// var universitas = "universitas muhammadiyah gresik"
// var usia = 22;
// var golongan = usia < 23 ? ('masih muda') : ('sudah tua')
// var kecamatan = "benjeng"
// var kabupaten = "gresik"
// var jawaban = ['sudah', 'belum'];
// var jawab = jawaban[Math.floor(Math.random() * jawaban.length)];
// function javascribt() {
//     console.log("JavaScript adalah suatu bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome, Internet Explorer, Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan dalam halaman web menggunakan tag script.")
// }

// const jumlah = (a, b) => (a+b)



// prompt ('nama saya '+nama+' sekarang saya kuliah di '+universitas+', dan usia saya tahun ini '+usia+' tahun. Di usia saya sekarang saya masih tergolong '+golongan+'. Saya bertempat tinggal di kecamatan'+kecamatan+', kabupaten '+kabupaten+'. Di usia saya sekarang saya '+jawab+' mempunyai kekasih, Terima kasih.');

// alert (javascribt);

// alert (jumlah(1, 2))

// // for (var i = 1; i = 5; i++){
// //     prompt ("ini hasil dari for "+i)
// // }

// var berapa = 5
// for (var i = berapa; i >= 1; i--){
//     var bintang = " "
//     for (var j = 1; j <= i; j++){
//         bintang += "*"
//     }
//     console.log (bintang)
// }

// for (var i = 1; i<=berapa; i++){
//     var bintang = " "
//     for (var j = 1; j <= i; j++){
//         bintang += "*"
//     }
//     console.log (bintang)
// }

// let num1 = parseFloat(prompt("Masukkan bilangan pertama : "))
// let num2 = parseFloat(prompt("Masukkan bilangan kedua : "))

// alert('Hasil penjumlahan dari bilangan '+ num1+'+'+num2+' adalah '+ (num1+num2)+'\n'+
// 'Hasil pengurangan dari bilangan '+ num1+'-'+num2+' adalah '+ (num1-num2)+'\n'+
// 'Hasil perkalian dari bilangan '+ num1+'x'+num2+' adalah '+(num1*num2)+'\n'+
// 'Hasil pembagian dari bilangan '+num1+':'+num2+' adalah '+(num1/num2))

const num1 = prompt("masukkan angka : ")
const num2 = prompt("masukkan angka : ")

const sum = parseFloat(num1)+parseFloat(num2)
const sum1 = parseFloat(num1)-parseFloat(num2)

alert("hasil dari "+num1+"+"+num2+"="+sum+"\n"+"hasil dari "+num1+"-"+num2+"="+sum1)