; (function (b) {
    var g, d = b(window), h = b("body"); b(function () {
        b("[data-bg-img]").each(function () { var a = b(this); a.css("background-image", "url(" + a.data("bg-img") + ")").removeAttr("data-bg-img").addClass("bg--img") }); b("[data-parallax-bg-img]").each(function () { var a = b(this); a.parallax({ imageSrc: a.data("parallax-bg-img") }).addClass("bg--img") }); var a = b(".AnimateScrollLink"), c = b(".AnimateScroll"), e = function () { var a = b(this).attr("href"); b(a).animatescroll({ padding: 65, easing: "easeInOutExpo", scrollSpeed: 2E3 }); return !1 };
        a.on("click", e); c.on("click", "a", e); a = b(".CounterUp"); "function" === typeof b.fn.counterUp && a.counterUp({ delay: 10, time: 1E3 }); a = b(".DatePicker"); a.length && a.datepicker(); a = b(".SelectMenu"); a.length && a.selectmenu(); var l = b("#headerNav"); l.find(".nav").on("click", "a", function () { l.collapse("hide") }); var a = b(".contact--form form"), g = b(".contact-form-status"); a.length && a.validate({
            rules: { contactName: "required", contactEmail: { required: !0, email: !0 }, contactSubject: "required", contactMessage: "required" }, messages: {
                contactName: "Please enter your firstname",
                contactEmail: "Please enter a valid email address", contactSubject: "Please enter your phone number", contactMessage: "Plase type your message"
            }, submitHandler: function () { b(this.currentForm).ajaxSubmit({ success: function (a) { g.show().html(a).delay(3E3).fadeOut("slow") } }) }
        }); var f = b("#popupContactForm"), h = b("#hireMeModal"); if (f.length) {
            f.validate({
                rules: { name: "required", email: { required: !0, email: !0 }, project_title: "required", category: "required", budget: "required" }, messages: {
                    name: "Please enter your firstname",
                    email: "Please enter a valid email address", project_title: "Please define your project title", category: "Please type your case category", budget: "Please enter your budget"
                }, submitHandler: function () { f.ajaxSubmit({ success: function () { h.modal("toggle"); f.resetForm() } }) }
            }); var a = f.find("#fileUpload"), k = f.find(".attachment-status span"); a.on("change", function () { var a = b(this).val().split("\\"), a = a[a.length - 1]; a.length && k.text(a) })
        } a = b(".subscribe--form form"); a.length && a.validate({
            rules: {
                EMAIL: {
                    required: !0,
                    email: !0
                }
            }, messages: { EMAIL: "Please enter a valid email address" }
        }); b(".feedback--faq").on("click", "a[data-toggle]", function () { if (b(this).parent(".panel-heading").siblings(".panel-collapse").hasClass("in")) return !1 }); a = b(".FeedbackSlider"); c = function () { var a, c, e; for (a = 0; a < this.$userItems.length; a++)e = this.$userItems[a], e = b(e).data("client-img"), c = this.paginationWrapper.children(".owl-page").eq(a).children("span"), c.html('<img src="' + e + '">'); d.trigger("resize.px.parallax") }; a.length && a.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400, singleItem: !0, autoPlay: !0, dots: !0, afterInit: c, afterUpdate: c
        }); a = b(".BrandsSlider"); a.length && a.owlCarousel({ items: 5, autoPlay: !0, afterUpdate: function () { d.trigger("resize.px.parallax") } }); b(".blog--quick-nav").on("click", ".toggle--btn", function () { b(this).siblings(".posts-filter-menu").toggle("slow") }); a = b("#map"); c = "ontouchend" in document; a.length && "undefined" !== typeof GMaps && (c = new GMaps({
            el: "#map", lat: a.data("latitude"), lng: a.data("longitude"), zoom: a.data("zoom"), scrollwheel: !1,
            draggable: !c
        }), c.addMarker({ lat: a.data("latitude"), lng: a.data("longitude") }), c.addStyle({
            styles: [{ featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: .2 }] }, {
                featureType: "road.arterial",
                elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }]
            }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] }, { elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] }, {
                elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" },
                { lightness: 40 }]
            }, { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] }], mapTypeId: "map_style"
        }), c.setStyle("map_style"))
    }); var k = function () {
        var a = b(".post-items"), c = b(".posts-filter-menu");
        a.length && (a.isotope({ animationEngine: "best-available", masonry: { columnWidth: 0 }, itemSelector: ".post-item" }), c.on("click", "a", function () { var c = b(this).attr("href"); a.isotope({ filter: "*" !== c ? '[data-cat~="' + c + '"]' : c }); return !1 }), c.children("ul").niceScroll({ scrollspeed: 100, touchbehavior: !0, cursoropacitymax: 0 }), a.isotope("on", "arrangeComplete", function () { d.trigger("resize.px.parallax") }))
    }; d.on("load scroll", function () { g = d.scrollTop() }).on("load scroll", function () { 1 < g ? h.addClass("scrolled") : h.removeClass("scrolled") }).on("load",
        function () { var a = b(".gallery-items"), c = b(".gallery-filter-menu"); a.length && (a.isotope({ animationEngine: "best-available", itemSelector: ".gallery-item" }), c.on("click", "a", function () { var c = b(this), d = c.attr("href"); a.isotope({ filter: "*" !== d ? '[data-cat~="' + d + '"]' : d }); c.parent("li").addClass("active").siblings().removeClass("active"); return !1 }), a.isotope("on", "arrangeComplete", function () { d.trigger("resize.px.parallax") })) }).on("load", k).on("resize", function () { setTimeout(function () { k() }, 800) }).on("load resize",
            function () { b(".about--progress-items").find(".progress-bar").each(function () { var a = b(this); a.css("width", 0); a.waypoint(function () { a.css("width", a.data("progress") + "%") }, { triggerOnce: !0, offset: "bottom-in-view" }) }) }).on("load", function () { b("#preloader").fadeOut("slow") })
})(jQuery);