// event pada saat di klik
$('.page-scroll').on('click', function(){
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var alamatujuan =$(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: alamatujuan.offset().top - 50
    });
});