$(document).ready(function () {
  // redirect to section1
  $(".rectangle").click(function () {
    window.location.href = "index.html#branding";
  });

  // toggle class branding button
  $(".tombol-branding").click(function () {
    $(this).addClass("tombol-active").siblings().removeClass("tombol-active");
  });
  // responsive card
  var layar = $(window).width();
  if (layar > 750) {
    jumlahCard = 4;
  } else if (layar < 750 && layar > 550) {
    jumlahCard = 3;
  } else {
    jumlahCard = 2;
  }
  var jumlahCard;
  var swiper = new Swiper('.swiper-container', {

    slidesPerView: jumlahCard,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
});