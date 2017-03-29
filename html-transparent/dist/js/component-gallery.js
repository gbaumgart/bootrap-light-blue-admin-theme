$(function(){
    function pageLoad() {
        $('#grid').magnificPopup({
            delegate: 'li > a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});