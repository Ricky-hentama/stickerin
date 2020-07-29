$(document).ready(function () {
  // chat button

  // kontak spiner
  $("#loadspin").hide();

  // scroll in animation
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    //under 200
    if (wScroll > 200) {
      // branding img
      $(".branding-img").each(function (i) {
        setTimeout(function () {
          $(".branding-img").eq(i).addClass("element-show");
        }, 200 * (i + 1));
      });
      // branding text home
      $(".text-branding").addClass("element-show");

      // halaman aboutme section 2
      $(".img-kanan-2").addClass("element-show");
      $(".text-kiri-2").addClass("element-show");
    }
    // under 350
    if (wScroll > 350) {
      // proses kerja title
      $(".proses-title").addClass("element-show");
    }

    // under 650
    if (wScroll > 650) {
      $(".proses-img").each(function (i) {
        setTimeout(function () {
          $(".proses-img").eq(i).addClass("element-show");
        }, 200 * (i + 1));
      });
      // halaman branding section 3
      $(".text-kanan-3").addClass("element-show");
      $(".img-kiri-3").addClass("element-show");
    }
  });
  // halaman aboutme section 1
  $(window).on("load", function () {
    $(".img-kiri-1").addClass("element-show");
    $(".text-kanan-1").addClass("element-show");
    $(".judul-produk").addClass("element-show");
  });
});
