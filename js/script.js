/**
 * @file
 * script.js
 */
jQuery(document).ready(function () {
    var slideNavItems = jQuery('.custom-slideshow .item-bg');
    slideNavItems.each(function(k,v) {
        jQuery(v).parent().parent().parent().css('background-image','url('+jQuery(v).attr("title")+')');
    });

    jQuery('.billedrotator').mouseover(function() {
        jQuery('.custom-slideshow .active').addClass('hover');
        jQuery('#views_slideshow_cycle_main_os2web_base_panels_view_rotating-block').addClass('hover');
        jQuery('#views_slideshow_cycle_main_os2web_base_panels_view_rotating-block_1').addClass('hover');
    }).mouseout(function() {
        jQuery('.custom-slideshow .hover').removeClass('hover', 500);
    });

    jQuery('.pane-os2web-base-panels-view-newslist ul li').not(':last-child').each(function(k,v) {
        jQuery(v).find('.news-list-next').html(jQuery(v).next().find('.news-list-right').html());
    });

    if(jQuery('#region-sidebar-first .active').children('.menu').length > 0) {
      jQuery('#region-sidebar-first .active').children('.menu').addClass('menuActive');
    } else {
      jQuery('#region-sidebar-first .active').parent().addClass('menuActive');
    }

    jQuery('.vis-andre-sites a, .skjul-andre-sites a').click(function(event) {
        event.preventDefault();
        jQuery('#'+jQuery(this).data('target')).toggle();
        jQuery('.vis-andre-sites a').toggle();
    });

    jQuery('#edit-field-os2web-hearings-type-value').yaselect();

});

