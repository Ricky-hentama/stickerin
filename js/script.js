$(document).ready(function () {
    // redirect to section1
    $('.rectangle').click(function () {
        window.location.href = "index.html#branding";
    })

    // toggle class branding button
    $('.tombol-branding').click(function (e) {
        console.log(e);
        $(this).toggleClass('tombol-active')
    });
});