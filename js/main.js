(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            imJs.vedioMovement();
            imJs.vedioActivation();
        },
        vedioActivation: function (e) {
            $('#video-play').on('click', function (e) {
                e.preventDefault();
                $('#video-overlay, .video-overlay').addClass('open');
                $("#video-overlay, .video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            });
  
            $('.video-overlay, .video-overlay-close').on('click', function (e) {
                e.preventDefault();
                close_video();
            });
  
            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });
  
            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
          },
        vedioMovement: function () {
            const all_btns = gsap.utils.toArray(".video-icon");
            if (all_btns.length > 0) {
                var all_btn = gsap.utils.toArray(".video-icon");
            }
            else {
                var all_btn = gsap.utils.toArray("#btn_wrapper");
            }
            const all_btn_cirlce = gsap.utils.toArray(".video-play-button");
            all_btn.forEach((btn, i) => {
                $(btn).mousemove(function (e) {
                    callParallax(e);
                });
                function callParallax(e) {
                    parallaxIt(e, all_btn_cirlce[i], 80);
                }

                function parallaxIt(e, target, movement) {
                    var $this = $(btn);
                    var relX = e.pageX - $this.offset().left;
                    var relY = e.pageY - $this.offset().top;

                    gsap.to(target, 0.5, {
                        x: ((relX - $this.width() / 2) / $this.width()) * movement,
                        y: ((relY - $this.height() / 2) / $this.height()) * movement,
                        ease: Power2.easeOut,
                    });
                }
                $(btn).mouseleave(function (e) {
                    gsap.to(all_btn_cirlce[i], 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power2.easeOut,
                    });
                });
            });
        },
    }



    imJs.m();

})(jQuery, window)