$(function(){
    function pageLoad(){
        $("button").tooltip();
        // $('.selectpicker').selectpicker();
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});