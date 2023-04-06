var nama = "yusuf"
var universitas = "universitas muhammadiyah gresik"
var usia = 22;
var golongan = usia < 23 ? ('masih muda') : ('sudah tua')
var kecamatan = "benjeng"
var kabupaten = "gresik"
var jawaban = ['sudah', 'belum'];
var jawab = jawaban[Math.floor(Math.random() * jawaban.length)];

prompt ('nama saya '+nama+' sekarang saya kuliah di '+universitas+', dan usia saya tahun ini '+usia+' tahun. Di usia saya sekarang saya masih tergolong '+golongan+'. Saya bertempat tinggal di kecamatan'+kecamatan+', kabupaten '+kabupaten+'. Di usia saya sekarang saya '+jawab+' mempunyai kekasih.');