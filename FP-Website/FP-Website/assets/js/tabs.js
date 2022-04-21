jQuery(document).ready(function () {
    jQuery('.products-tabs-contaier .tab').on("click", function () {
      jQuery(this).addClass('active').siblings().removeClass('active');
      $tabNumber = jQuery(this).index();
      jQuery('.products-tabs-content-contaier .content').eq($tabNumber).addClass("active").siblings().removeClass('active');
    });
    jQuery('.product-list .product-item').each(function () {
      jQuery(this).find('img').parent().addClass('contains-image');
    });
    var mobileTabsAction = function () {
      if (jQuery('.products-tabs-content-contaier').is(':hidden')) {
        jQuery('.products-tabs-contaier .tab1').on("click", function () {
          window.location.replace("#");
        });
        jQuery('.products-tabs-contaier .tab2').on("click", function () {
          window.location.replace("#");
        });
      }
    };
    window.addEventListener('resize', function () {
      mobileTabsAction();
    });
    mobileTabsAction();
  });