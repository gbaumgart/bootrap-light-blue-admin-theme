$(function(){
    function pageLoad(){
        $(".popover-test").popover();
        $(".tooltip-test").tooltip();
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});