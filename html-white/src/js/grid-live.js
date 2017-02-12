$(function(){
    function pageLoad(){
        $(".widget-container").sortable({
            connectWith: '.widget-container',
            handle: 'header, .handle',
            cursor: 'move',
            iframeFix: false,
            items: '.widget:not(.locked)',
            opacity: 0.8,
            helper: 'original',
            revert: true,
            forceHelperSize: true,
            placeholder: 'widget widget-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer'
        });

        var $widgets = $('.widget'),
            $newsWidget = $('#news-widget'),
            $sharesWidget = $('#shares-widget'),
            $autoloadWidget = $('#autoload-widget');

        /**
         * fade out background & disable sorting when widget fullscreened
         */
        $widgets.on("fullscreen.widgster", function(){
            $('.widget, .sidebar, .logo, .page-header, .page-title').not($(this)).fadeTo(150, 0);

            //prevent widget from dragging when fullscreened
            $(".widget-container").sortable( "option", "disabled", true );
        }).on("restore.widgster closed.widgster", function(){
            $('.widget, .sidebar, .logo, .page-header, .page-title').not($(this)).fadeTo(150, 1);

            //allow dragging back
            $(".widget-container").sortable( "option", "disabled", false );
        });

        /**
         * Make refresh button spin when loading
         */
        $newsWidget.on("load.widgster", function(){
            $(this).find('[data-widgster="load"] > i').addClass('fa-spin')
        }).on("loaded.widgster", function(){
            $(this).find('[data-widgster="load"] > i').removeClass('fa-spin')
        });

        /**
         * Custom close prompt for news widget
         */
        $newsWidget.widgster({
            showLoader: false,
            closePrompt: function(callback){
                $('#news-close-modal').modal('show');
                $('#news-widget-remove').on('click', function(){
                    $('#news-close-modal').on('hidden.bs.modal', callback).modal('hide');
                });
            }
        });

        /**
         * Use custom loader template
         */
        $sharesWidget.widgster({
            loaderTemplate: '<div class="loader animated fadeIn">' +
                            '   <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>' +
                            '</div>'
        });

        /**
         * Make hidden spinner appear & spin when loading
         */
        $autoloadWidget.on("load.widgster", function(){
            $(this).find('.fa-spinner').addClass('fa-spin in');
        }).on("loaded.widgster", function(){
            $(this).find('.fa-spinner').removeClass('fa-spin in')
        }).on('load.widgster fullscreen.widgster restore.widgster', function(){
            $(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
        });

        /**
         * Init all other widgets with default settings & settings retrieved from data-* attributes
         */
        $widgets.widgster();

        /**
         * Init tooltips for all widget controls on page
         */
        $('.widget-controls > a').tooltip({placement: 'bottom'});
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});