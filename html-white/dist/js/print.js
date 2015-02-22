$(function(){
    function pageLoad(){
        $('#print').click(function(){
            window.print();
        })
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});