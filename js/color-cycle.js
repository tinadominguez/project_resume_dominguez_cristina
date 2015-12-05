/* Color Cycle - jQuery Plugin - v0.1.0 - created by: hello@jonathangrover.com */
(function ($) {
    
    $.fn.colorCycle = function( options ) {
        
        var settings = $.extend({
                 colors: ['#549388', '#7A1622', '#601848', '#FC8D4D','#427121', '#FC694D','#88B02B', '#FABA32','#80B26B', '#68B3AF', '#F8CC85', '#1A7F87', '#F47A63', '#3EC9A7', '#98D9B6', '#0DB2AC', '#C04848', '#F07241','#680148'],
                 animationStartRange: 1000,
                 animationEndRange: 2000,
                 loopStartRange: 1000,
                 loopEndRange: 4000
            }, options),
            $el = this,
            generateTime = function (min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            },
            selectColor = function () {
                return settings.colors[Math.floor(Math.random() * settings.colors.length)];
            },
            changeColor = function (ele) {
                ele.animate({
                    'background-color': selectColor()
                }, generateTime(settings.animationStartRange, settings.animationEndRange), function () {
                    setTimeout(function () {
                        changeColor(ele);
                    }, generateTime(settings.loopStartRange, settings.loopEndRange));
                });
            },
            initialize = function () {
                for (i = 0; i < $el.size(); i++){
                    changeColor($el.eq(i));
                }
            };
        
        initialize();
        return $el;  
    }
})
(jQuery);

$('body').colorCycle();