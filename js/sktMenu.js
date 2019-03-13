//--------------------------------------------------------------------------------//

//jQuery header plugin with menu

//--------------------------------------------------------------------------------//
//Animation 

//slide_in_up
//fx-slide-scaleUp	
//fx-slide-scaleUpDown
//fx-slide-flipInLeft
//fx-slide-flipInRight	
//fx-slide-flipInBottom
//fx-slide-flipInTop
//fx-slide-rotateInNewspaper
//fx-slide-rotatePullRight
//fx-slide-rotatePullLeft
//fx-slide-rotatePullTop
//fx-slide-rotatePullBottom
//fx-slide-rotateUnfoldLeft
//fx-slide-rotateUnfoldRight
//fx-slide-rotateUnfoldTop
//fx-slide-rotateUnfoldBottom
//fx-slide-rotateRoomLeftIn
//fx-slide-rotateRoomRightIn
//fx-slide-rotateRoomTopIn
//fx-slide-rotateRoomBottomIn
//fx-slide-rotateCubeLeftIn
//fx-slide-rotateCubeRightIn
//fx-slide-rotateCubeTopIn
//fx-slide-rotateCubeBottomIn
//fx-slide-rotateCarouselLeftIn
//fx-slide-rotateCarouselRightIn
//fx-slide-rotateCarouselRightIn
//fx-slide-rotateCarouselTopIn
//fx-slide-rotateCarouselBottomIn
//fx-slide-rotateSidesIn
//fx-slide-rotateSlideIn
//--------------------------------------------------------------------------------//
(function($) {

    var option;
    var mobil_responsive_width = 768;

    $.fn.skt_menu = function(options) {

        var _switch_ = true;

        option = $.extend({

            text_color: '#000',
            text_hover_color: '#fff',
            hover_color: '#000',

            header_pic: true,
            header_bottom: true,
            header_bg_color: hexTOrgba('#2F3A45', 30),
            //sub_menu_bg_color : hexTOrgba('#c4c4c4',100),
            sub_menu_bg_color: '#f1f1f1',
            trans_bg: false,

            copyright_bg_color: '#e1e1e1',

            border_top: false,
            border_bottom: false,
            border_bottom_color: '#eeeeee',
            slideSpeed: 300,
            box_shadow: true,
            sub_menu_box_shadow: true,
            box_shadow_color: '#e4e4e4',

            menu_item_border_bottom: true,
            menu_item_border_bottom_color: '#000',
            menu_item_width: '30',
            menu_item_height: '20',

            animation: 'slide_in_up',
            header_animation: 'slide_in_up',
            acordionStyle: true,

            menu_align: 'right',
            //mobil_menu_align : 'center !important'

            logo_txt_enable: true,
            logo_text: 'LOGO HERE',
            logo_text_font_size: '36px',
            //logo_picture : 'images/logo.jpg'

        }, options);

        //========== if border bottom is true ==========
        if (option.border_bottom == true) {
            $('.header').css({
                'border-bottom': '1px solid ' + option.border_bottom_color
            });
        }

        if (option.box_shadow == true) {
            $('.header').css({
                'box-shadow': '1px 1px 5px' + option.box_shadow_color
            });
        }

        if (option.sub_menu_box_shadow == true) {
            $('.menu li ul').css({
                'box-shadow': '1px 3px 8px' + option.box_shadow_color
            });
        }

        if (option.logo_txt_enable == true) {
            $('.logo').text(option.logo_text);
            $('.logo').css({
                'font-size': option.logo_text_font_size
            });
        } else if (option.logo_txt_enable == false) {
            $('.logo').append('<img width="100%" height="100%" src="images/logo.jpg"></img>');
        }

        if (option.header_pic == true) {
            $('.header_bg').css({
                'display': 'block'
            });
        }

        // =========== sub menu style ============
        //$('.menu li ul,.menu li ul li').css({
        $('.menu li ul').css({
            //'border' : '1px solid ' + hexTOrgba(option.text_color , 10),
            'border': '1px solid ' + option.border_bottom_color,
            'border-radius': '5px'
        });

        $('.menu li > ul > li:not(:first-child)').css({
            //'border-bottom' : '1px solid ' + hexTOrgba(option.text_color , 10)
            'border-top': '1px solid ' + option.border_bottom_color
        });
        //========================================

        $('.logo').css({
            'color': option.text_color
        });

        $('.menu').css({
            'text-align': option.menu_align
        });

        $('.menu li ul').css({
            //'background-color' : option.header_bg_color
            'background-color': option.sub_menu_bg_color
        });

        if (option.border_top == true) {
            $('.header').css({
                'border-top': '5px solid' + option.text_color
            });
        }

        $('.menu li > a').css({
            'color': option.text_color,
            //'padding': option.menu_item_height + ' ' + option.menu_item_width
        });

        /**/
        $('.menu li > a').hover(function() {
            $(this).css({
                'color': option.text_hover_color
            });
        }, function() {
            $(this).css({
                'color': option.text_color
            });
        });

        $('.menu > li > a').css({
            'padding': option.menu_item_height + 'px' + ' ' + option.menu_item_width + 'px'
        });

        /**/
        $('.menu li').hover(function() {
            $(this).css({
                'background-color': option.hover_color
            });
        }, function() {
            $(this).css({
                'background-color': ''
            });
        });

        $('.show-menu').hover(function() {
            $(this).css({
                'color': option.hover_color
            });
            $(this).css({
                'background-color': option.copyright_bg_color
            });
        }, function() {
            $(this).css({
                'color': option.text_color
            });
        });

        $('.show-menu').css({
            'color': option.text_color
            //'color' : '#fff'
        });

        $('.copyright').css({
            'color': option.text_color,
            'background-color': option.copyright_bg_color
        });

        // Add animation
        $('.menu li ul').addClass(option.animation);

        $(document).ready(function() {

            if (option.trans_bg == false) {
                $('.header').css({
                    //'opacity' : option.header_bg_opacity,
                    'background-color': option.header_bg_color
                });
            }

            if ($(window).width() <= mobil_responsive_width && _switch_ == true) {

                /*$( 'li' ).has( "ul" ).prepend('<div class="addAngelDown"></div>');	
                /*$( 'li' ).has( "ul" ).prepend('<div class="addAngelDown"></div>');	
				
				$('.addAngelDown').css({
					'color' : option.text_color
				});*/
                $('.addAngelDown').css({
                    'color': option.text_color
                });

                /*$('.menu li').hover(function(){
                	$('.addAngelDown').css({'color':option.text_hover_color});
                },function(){
                	$('.addAngelDown').css({'color':option.text_color});
                });*/

                $('.menu').addClass(option.animation);

                $('.header').css({
                    'background-color': option.header_bg_color
                });

                $('.show-menu').css({
                    'background-color': option.copyright_bg_color
                });

                _switch_ = false;
            }

            if ($(window).width() > mobil_responsive_width) {

                //$( 'li' ).has( "ul" ).prepend('<li class="addAngelDown"></a>');	
                //$( 'li' ).has( "ul" ).prepend('<div class="adddownarrow"></div>');

                //$( 'li' ).has( "ul li a" ).css({'margin-left': '6px','font-family': 'FontAwesome','content': 'v'});		

                //$( 'li' ).has( "ul" ).append($( ' <style> a:after {content: "▼"; font-size:12px; padding-left:8px; } </style>'));

                //$( 'li' ).has( "ul" ).append($( ' <style>  li a:only-child::after {content: "";}</style>'));

                /*$( 'li' ).has( "ul" ).addClass('menu_after');

                $('.adddownarrow').css({
                	'color' : option.text_color,
                	'padding' : option.menu_item_height + 'px' + ' ' + '0px'
                });*/


                $('.menu > li > a').css({
                    'padding': option.menu_item_height + 'px' + ' ' + option.menu_item_width + 'px'
                });

                if (option.menu_item_border_bottom == true) { //tomorrow		

                    /**/
                    $('.menu > li > a').hover(function() {
                        $(this).css({
                            'border-bottom': '6px solid ' + option.menu_item_border_bottom_color
                        });
                        $(this).css({
                            'padding-bottom': (option.menu_item_height - 6) + 'px'
                        });

                    }, function() {
                        $(this).css({
                            'border-bottom': 'none'
                        });
                        $(this).css({
                            'padding-bottom': option.menu_item_height + 'px'
                        });
                    });

                }

            }

            if (option.header_bottom == true && $(window).width() > mobil_responsive_width) {
                var bottom = $(window).innerHeight();
                console.log(bottom);
                $(".header").css({
                    'top': bottom + 'px'
                });

            }

            //select first menu item 
            $('.menu > li:nth-child(1) > a').addClass('selected');

            //$('.selected').css(	'color' , option.text_hover_color , ' !important;' );
            //$('.selected').css(	'border-bottom' , '6px solid ' + option.text_hover_color , ' !important' );	

        });

        $(window).resize(function() {

            /*if($(window).width() <= 1024){
            	$('.menu > li > a').css({
            		'padding': option.menu_item_height + 'px' + ' ' + (option.menu_item_width) + 'px'
            	});
            }

            if($(window).width() > 1024){
            	$('.menu > li > a').css({
            		'padding': option.menu_item_height + 'px' + ' ' + option.menu_item_width + 'px'
            	});
            }*/

            if ($(window).width() <= mobil_responsive_width && _switch_ == true) {

                //$( 'li' ).has( "ul" ).prepend('<div class="addAngelDown"></div>');		
                //$( ".menu li" ).has( "ul" ).addClass('addAngelDown');
                //$('.addAngelDown').css({
                //'color' : option.text_color
                //});	

                /*$('.menu').css({
                	'text-align' : option.mobil_menu_align
                });*/

                $('.menu li ul').css({
                    'box-shadow': 'none'
                });

                $('.menu').addClass(option.animation);

                $('.menu > li > a').css({
                    'padding': option.menu_item_height + 'px' + ' ' + (option.menu_item_width) + 'px'
                });

                $('.header').css({
                    'background-color': option.header_bg_color
                });

                $('.show-menu').css({
                    'background-color': option.copyright_bg_color
                });

                _switch_ = false;

                //console.log('width < mobil_responsive_width');

            }

            if ($(window).width() > mobil_responsive_width && _switch_ == false) {

                $('.menu ul').removeAttr('style');

                $('.menu li ul').css({
                    'background-color': option.sub_menu_bg_color,
                    'border': '1px solid ' + option.border_bottom_color,
                    'border-radius': '1px'
                });

                if (option.sub_menu_box_shadow == true) {
                    $('.menu li ul').css({
                        'box-shadow': '1px 3px 8px' + option.box_shadow_color
                    });
                }

                /*$('li div').remove();*/

                if (option.trans_bg == true) {
                    $('.header').css({
                        'background': 'none'
                    });
                }

                if (option.menu_item_border_bottom == true) {

                    /**/
                    $('.menu > li > a').hover(function() {
                        $(this).css({
                            'border-bottom': '6px solid ' + option.menu_item_border_bottom_color
                        });
                        $(this).css({
                            'padding-bottom': (option.menu_item_height - 6) + 'px'
                        });

                    }, function() {
                        $(this).css({
                            'border-bottom': 'none'
                        });
                        $(this).css({
                            'padding-bottom': option.menu_item_height + 'px'
                        });
                    });

                    $('.menu > li > a').css({
                        'border-bottom-color': '#000 !important'
                    });

                }

                _switch_ = true;

                //console.log('width > mobil_responsive_width');

            }

        });

        $('li a').on("click", function() {

            if (_switch_ == false) {
                if ($(this).hasClass('clicked')) {
                    $(this).removeClass('clicked').next('ul').slideUp(option.slideSpeed);

                } else if ($(this).parents().siblings('a').hasClass('clicked')) {
                    $('.clicked').slideDown();
                    $(this).addClass('clicked').next('ul').slideDown(option.slideSpeed);
                    $(this).css({
                        'transform': 'rotate(0deg)'
                    });

                } else {
                    if (option.acordionStyle) {
                        $('li a').removeClass('clicked').next('ul').slideUp(option.slideSpeed);
                    }

                    $(this).addClass('clicked').next('ul').slideDown(option.slideSpeed);

                }
            }

        });

        $('.menu > li > a').click(function(e) {

            e.preventDefault(); //prevent the link from being followed	    

            $('.menu li a').removeClass('selected');
            $(this).addClass('selected');

            console.log('menu a clicked...');
        });

        return this;
    }



    /*Sticky Menu Start */
    $(window).scroll(function(e) {

        if (option.header_bottom == true && $(window).width() > mobil_responsive_width) {

            var scroller_anchor = $(".scroller-anchor").offset().top + $(window).innerHeight() + $('.header').innerHeight();

        } else {
            var scroller_anchor = $(".scroller-anchor").offset().top + $('.header').innerHeight();
        }

        //console.log(scroller_anchor);

        if ($(this).scrollTop() >= scroller_anchor && $('.scroller').css('position') != 'fixed') {

            if ($(window).width() < mobil_responsive_width) {

                $(".header").removeClass(".scroll");

                if (option.header_bottom == true) {
                    $('.scroller').css({
                        'top': '0px'
                    });
                }
            } else {
                $('.scroller').hide();

                $('.scroller').css({
                    //'top': '0px',           
                    'width': '100%',
                    'left': '0px'
                });

                /**/
                if (option.header_bottom == true) {
                    $('.scroller').css({
                        'top': '0px'
                    });
                }

                $('.menu > li > a').animate({
                    'padding': (option.menu_item_height - 6) + 'px' + ' ' + option.menu_item_width + 'px'
                    //'padding': '10px 60px'
                });
                $('.header').addClass(option.header_animation);
                $('.scroller').fadeIn(250);


                /*$('.scroller').animate({	           
                	'top':'0px',			            
                } ,300); */

                $('.scroller').css({
                    'position': 'fixed'
                });
            }

            if (option.trans_bg == true) {
                $('.header').css({
                    'background-color': option.header_bg_color,
                    'box-shadow': '0px 0px 0px #000'
                });
            }

            $('.header').css({
                'border-bottom': '1px solid ' + option.border_bottom_color
            });
        } else if ($(this).scrollTop() < scroller_anchor && $('.scroller').css('position') != 'absolute') {

            $('.scroller').css({
                'position': 'absolute'
            });

            /**/
            if (option.header_bottom == true) {
                var bottom = $(window).innerHeight();
                //console.log(bottom);
                $(".scroller").css({
                    'top': $(window).innerHeight()
                });

            }

            $('.menu > li > a').animate({
                //'padding': '30px 60px'
                'padding': option.menu_item_height + 'px' + ' ' + option.menu_item_width + 'px'
            });

            $('.header').removeClass(option.header_animation);

            if (option.border_bottom == false) {
                $('.header').css({
                    'border-bottom': 'none'
                });
            }

            if (option.trans_bg == true) {
                $('.header').css({
                    'background-color': 'rgba(0,0,0,0)',
                    'box-shadow': '0px 0px 0px #000'
                });
            }
        }
    });
    /* Sticky Menu Finish */

})(jQuery);

//--------------------------------------------------------------------------------//

//jQuery menu

//--------------------------------------------------------------------------------//

jQuery(document).ready(function() {

    jQuery('.menu').skt_menu({

        text_color: '#2ecc71', // Font color #ff1034
        hover_color: hexTOrgba('#666666', 0), // Menu item hover color b4b4b4
        text_hover_color: '#34495e',

        header_bottom: false, // Header at bottom side enable-desable 
        header_pic: false, // Header background picture enable-desable
        header_bg_color: hexTOrgba('#ffffff', 100), // Header background color  
        border_top: false, // Header border-top enable-desable
        border_bottom: false, // Header border-bottom enable-desable	
        border_bottom_color: '#f1f1f1', // Header border-bottom color
        menu_item_border_bottom_color: '#34495e',
        sub_menu_bg_color: '#ffffff', // Sub menu background color

        box_shadow: false, // Header box-shadow enable-desable
        sub_menu_box_shadow: true,
        trans_bg: true, // Header background transparan enable-desable 
        animation: 'slide_in_up', // Menu animation
        header_animation: 'fx-slide-scaleUp', // Header animation
        slideSpeed: 200, // Mobilephone menu animation speed 

        menu_item_width: '20', // Menu item width
        menu_item_height: '20', // Menu item height

        copyright_bg_color: '#2c3e50',
        menu_align: 'right' // Menu align left/center/right

    });

});