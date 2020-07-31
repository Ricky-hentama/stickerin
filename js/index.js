$(document).ready(function () {
  // redirect to section1
  $(".rectangle").click(function () {
    window.location.href = "index.html#branding";
  });


  // branding section

  $(".tombol-branding").click(function (e) {
    $(this).addClass("tombol-active").siblings().removeClass("tombol-active");

    if (e.target.dataset.target == "branding-mobil") {
      $(".home-branding-mobil").addClass("branding-show").siblings().removeClass("branding-show");
    }
    if (e.target.dataset.target == "branding-kantor") {
      $(".home-branding-kantor").addClass("branding-show").siblings().removeClass("branding-show");
    }
    if (e.target.dataset.target == " digital-printing") {
      $(".home-digital-printing").addClass("branding-show").siblings().removeClass("branding-show");
    }
    if (e.target.dataset.target == " cutting-sticker") {
      $(".home-cutting-sticker").addClass("branding-show").siblings().removeClass("branding-show");
    }
    if (e.target.dataset.target == " stock-sticker") {
      $(".home-stock-sticker").addClass("branding-show").siblings().removeClass("branding-show");
    }
  });

  // polygon arrow
  const icon = $(".rectangle");
  const arrow = $(".polygon");

  arrow.animate(
    [{
        top: "0",
      },
      {
        down: "10px",
      },
      {
        tops: "0",
      },
    ], {
      duration: 700,
      iterations: Infinity,
    }
  );

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
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: jumlahCard,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});