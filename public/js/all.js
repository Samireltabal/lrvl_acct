/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
 * Resize function without multiple trigger
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 */
(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args); 
                timeout = null; 
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

	
	
// Sidebar
function init_sidebar() {
// TODO: This is some kind of easy fix, maybe we can improve this
var setContentHeight = function () {
	// reset height
	$RIGHT_COL.css('min-height', $(window).height());

	var bodyHeight = $BODY.outerHeight(),
		footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
		leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
		contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

	// normalize content
	contentHeight -= $NAV_MENU.height() + footerHeight;

	$RIGHT_COL.css('min-height', contentHeight);
};

  $SIDEBAR_MENU.find('a').on('click', function(ev) {
	  console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }else
            {
				if ( $BODY.is( ".nav-sm" ) )
				{
					$SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
					$SIDEBAR_MENU.find( "li ul" ).slideUp();
				}
			}
            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

// toggle small or large menu 
$MENU_TOGGLE.on('click', function() {
		console.log('clicked - menu toggle');
		
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}

	$BODY.toggleClass('nav-md nav-sm');

	setContentHeight();
});

	// check active menu
	$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

	$SIDEBAR_MENU.find('a').filter(function () {
		return this.href == CURRENT_URL;
	}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
		setContentHeight();
	}).parent().addClass('active');

	// recompute content when resizing
	$(window).smartresize(function(){  
		setContentHeight();
	});

	setContentHeight();

	// fixed sidebar
	if ($.fn.mCustomScrollbar) {
		$('.menu_fixed').mCustomScrollbar({
			autoHideScrollbar: true,
			theme: 'minimal',
			mouseWheel:{ preventDefault: true }
		});
	}
};
// /Sidebar

	var randNum = function() {
	  return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
	};


// Panel toolbox
$(document).ready(function() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
});
// /Panel toolbox

// Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});
// /Tooltip

// Progressbar
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function() {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
});
// /Switchery


// iCheck
$(document).ready(function() {
    if ($("input.flat")[0]) {
        $(document).ready(function () {
            $('input.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
        });
    }
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    checkState = 'all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    checkState = 'none';
    countChecked();
});

function countChecked() {
    if (checkState === 'all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (checkState === 'none') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }

    var checkCount = $(".bulk_action input[name='table_records']:checked").length;

    if (checkCount) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(checkCount + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}



// Accordion
$(document).ready(function() {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

// NProgress
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).load(function () {
        NProgress.done();
    });
}

	
	  //hover and retain popover when on popover content
        var originalLeave = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(obj) {
          var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
          var container, timeout;

          originalLeave.call(this, obj);

          if (obj.currentTarget) {
            container = $(obj.currentTarget).siblings('.popover');
            timeout = self.timeout;
            container.one('mouseenter', function() {
              //We entered the actual popover – call off the dogs
              clearTimeout(timeout);
              //Let's monitor popover content instead
              container.one('mouseleave', function() {
                $.fn.popover.Constructor.prototype.leave.call(self, self);
              });
            });
          }
        };

        $('body').popover({
          selector: '[data-popover]',
          trigger: 'click hover',
          delay: {
            show: 50,
            hide: 400
          }
        });


	function gd(year, month, day) {
		return new Date(year, month - 1, day).getTime();
	}
	  
	
	function init_flot_chart(){
		
		if( typeof ($.plot) === 'undefined'){ return; }
		
		console.log('init_flot_chart');
		
		
		
		var arr_data1 = [
			[gd(2012, 1, 1), 17],
			[gd(2012, 1, 2), 74],
			[gd(2012, 1, 3), 6],
			[gd(2012, 1, 4), 39],
			[gd(2012, 1, 5), 20],
			[gd(2012, 1, 6), 85],
			[gd(2012, 1, 7), 7]
		];

		var arr_data2 = [
		  [gd(2012, 1, 1), 82],
		  [gd(2012, 1, 2), 23],
		  [gd(2012, 1, 3), 66],
		  [gd(2012, 1, 4), 9],
		  [gd(2012, 1, 5), 119],
		  [gd(2012, 1, 6), 6],
		  [gd(2012, 1, 7), 9]
		];
		
		var arr_data3 = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		var chart_plot_02_data = [];
		
		var chart_plot_03_data = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		
		for (var i = 0; i < 30; i++) {
		  chart_plot_02_data.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
		}
		
		
		var chart_plot_01_settings = {
          series: {
            lines: {
              show: false,
              fill: true
            },
            splines: {
              show: true,
              tension: 0.4,
              lineWidth: 1,
              fill: 0.4
            },
            points: {
              radius: 0,
              show: true
            },
            shadowSize: 2
          },
          grid: {
            verticalLines: true,
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#fff'
          },
          colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
          xaxis: {
            tickColor: "rgba(51, 51, 51, 0.06)",
            mode: "time",
            tickSize: [1, "day"],
            //tickLength: 10,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
          },
          yaxis: {
            ticks: 8,
            tickColor: "rgba(51, 51, 51, 0.06)",
          },
          tooltip: false
        }
		
		var chart_plot_02_settings = {
			grid: {
				show: true,
				aboveData: true,
				color: "#3f3f3f",
				labelMargin: 10,
				axisMargin: 0,
				borderWidth: 0,
				borderColor: null,
				minBorderMargin: 5,
				clickable: true,
				hoverable: true,
				autoHighlight: true,
				mouseActiveRadius: 100
			},
			series: {
				lines: {
					show: true,
					fill: true,
					lineWidth: 2,
					steps: false
				},
				points: {
					show: true,
					radius: 4.5,
					symbol: "circle",
					lineWidth: 3.0
				}
			},
			legend: {
				position: "ne",
				margin: [0, -25],
				noColumns: 0,
				labelBoxBorderColor: null,
				labelFormatter: function(label, series) {
					return label + '&nbsp;&nbsp;';
				},
				width: 40,
				height: 1
			},
			colors: ['#96CA59', '#3F97EB', '#72c380', '#6f7a8a', '#f7cb38', '#5a8022', '#2c7282'],
			shadowSize: 0,
			tooltip: true,
			tooltipOpts: {
				content: "%s: %y.0",
				xDateFormat: "%d/%m",
			shifts: {
				x: -30,
				y: -50
			},
			defaultTheme: false
			},
			yaxis: {
				min: 0
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "day"],
				timeformat: "%d/%m/%y",
				min: chart_plot_02_data[0][0],
				max: chart_plot_02_data[20][0]
			}
		};	
	
		var chart_plot_03_settings = {
			series: {
				curvedLines: {
					apply: true,
					active: true,
					monotonicFit: true
				}
			},
			colors: ["#26B99A"],
			grid: {
				borderWidth: {
					top: 0,
					right: 0,
					bottom: 1,
					left: 1
				},
				borderColor: {
					bottom: "#7F8790",
					left: "#7F8790"
				}
			}
		};
        
		
        if ($("#chart_plot_01").length){
			console.log('Plot1');
			
			$.plot( $("#chart_plot_01"), [ arr_data1, arr_data2 ],  chart_plot_01_settings );
		}
		
		
		if ($("#chart_plot_02").length){
			console.log('Plot2');
			
			$.plot( $("#chart_plot_02"), 
			[{ 
				label: "Email Sent", 
				data: chart_plot_02_data, 
				lines: { 
					fillColor: "rgba(150, 202, 89, 0.12)" 
				}, 
				points: { 
					fillColor: "#fff" } 
			}], chart_plot_02_settings);
			
		}
		
		if ($("#chart_plot_03").length){
			console.log('Plot3');
			
			
			$.plot($("#chart_plot_03"), [{
				label: "Registrations",
				data: chart_plot_03_data,
				lines: {
					fillColor: "rgba(150, 202, 89, 0.12)"
				}, 
				points: {
					fillColor: "#fff"
				}
			}], chart_plot_03_settings);
			
		};
	  
	} 
	
		
	/* STARRR */
			
	function init_starrr() {
		
		if( typeof (starrr) === 'undefined'){ return; }
		console.log('init_starrr');
		
		$(".stars").starrr();

		$('.stars-existing').starrr({
		  rating: 4
		});

		$('.stars').on('starrr:change', function (e, value) {
		  $('.stars-count').html(value);
		});

		$('.stars-existing').on('starrr:change', function (e, value) {
		  $('.stars-count-existing').html(value);
		});
		
	  };
	
	
	function init_JQVmap(){

		//console.log('check init_JQVmap [' + typeof (VectorCanvas) + '][' + typeof (jQuery.fn.vectorMap) + ']' );	
		
		if(typeof (jQuery.fn.vectorMap) === 'undefined'){ return; }
		
		console.log('init_JQVmap');
	     
			if ($('#world-map-gdp').length ){
		 
				$('#world-map-gdp').vectorMap({
					map: 'world_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
			if ($('#usa_map').length ){
			
				$('#usa_map').vectorMap({
					map: 'usa_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
	};
			
	    
	function init_skycons(){
				
			if( typeof (Skycons) === 'undefined'){ return; }
			console.log('init_skycons');
		
			var icons = new Skycons({
				"color": "#73879C"
			  }),
			  list = [
				"clear-day", "clear-night", "partly-cloudy-day",
				"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
				"fog"
			  ],
			  i;

			for (i = list.length; i--;)
			  icons.set(list[i], list[i]);

			icons.play();
	
	}  
	   
	   
	function init_chart_doughnut(){
				
		if( typeof (Chart) === 'undefined'){ return; }
		
		console.log('init_chart_doughnut');
	 
		if ($('.canvasDoughnut').length){
			
		var chart_doughnut_settings = {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: {
					labels: [
						"Symbian",
						"Blackberry",
						"Other",
						"Android",
						"IOS"
					],
					datasets: [{
						data: [15, 20, 30, 10, 30],
						backgroundColor: [
							"#BDC3C7",
							"#9B59B6",
							"#E74C3C",
							"#26B99A",
							"#3498DB"
						],
						hoverBackgroundColor: [
							"#CFD4D8",
							"#B370CF",
							"#E95E4F",
							"#36CAAB",
							"#49A9EA"
						]
					}]
				},
				options: { 
					legend: false, 
					responsive: false 
				}
			}
		
			$('.canvasDoughnut').each(function(){
				
				var chart_element = $(this);
				var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);
				
			});			
		
		}  
	   
	}
	   
	function init_gauge() {
			
		if( typeof (Gauge) === 'undefined'){ return; }
		
		console.log('init_gauge [' + $('.gauge-chart').length + ']');
		
		console.log('init_gauge');
		

		  var chart_gauge_settings = {
		  lines: 12,
		  angle: 0,
		  lineWidth: 0.4,
		  pointer: {
			  length: 0.75,
			  strokeWidth: 0.042,
			  color: '#1D212A'
		  },
		  limitMax: 'false',
		  colorStart: '#1ABC9C',
		  colorStop: '#1ABC9C',
		  strokeColor: '#F0F3F3',
		  generateGradient: true
	  };
		
		
		if ($('#chart_gauge_01').length){ 
		
			var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
			var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);
			
		}	
		
		
		if ($('#gauge-text').length){ 
		
			chart_gauge_01.maxValue = 6000;
			chart_gauge_01.animationSpeed = 32;
			chart_gauge_01.set(3200);
			chart_gauge_01.setTextField(document.getElementById("gauge-text"));
		
		}
		
		if ($('#chart_gauge_02').length){
		
			var chart_gauge_02_elem = document.getElementById('chart_gauge_02');
			var chart_gauge_02 = new Gauge(chart_gauge_02_elem).setOptions(chart_gauge_settings);
			
		}
		
		
		if ($('#gauge-text2').length){
			
			chart_gauge_02.maxValue = 9000;
			chart_gauge_02.animationSpeed = 32;
			chart_gauge_02.set(2400);
			chart_gauge_02.setTextField(document.getElementById("gauge-text2"));
		
		}
	
	
	}   
	   	   
	/* SPARKLINES */
			
		function init_sparklines() {
			
			if(typeof (jQuery.fn.sparkline) === 'undefined'){ return; }
			console.log('init_sparklines'); 
			
			
			$(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '125',
				barWidth: 13,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '40',
				barWidth: 9,
				colorMap: {
					'7': '#a1a1a1'	
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'line',
				width: '200',
				height: '40',
				lineColor: '#26B99A',
				fillColor: 'rgba(223, 223, 223, 0.57)',
				lineWidth: 2,
				spotColor: '#26B99A',
				minSpotColor: '#26B99A'
			});
			
			
			$(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '40',
				barWidth: 8,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
				type: 'line',
				height: '40',
				width: '200',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				lineWidth: 3,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
	
	
			$(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'bar',
				colorMap: {
					'7': '#a1a1a1'
				},
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#26B99A',
				spotColor: '#4578a0',
				minSpotColor: '#728fb2',
				maxSpotColor: '#6d93c4',
				highlightSpotColor: '#ef5179',
				highlightLineColor: '#8ba8bf',
				spotRadius: 2.5,
				width: 85
			});
			
			
			$(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				width: 85,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
			
			
			$(".sparkline_pie").sparkline([1, 1, 2, 1], {
				type: 'pie',
				sliceColors: ['#26B99A', '#ccc', '#75BCDD', '#D66DE2']
			});
			
			
			$(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
				type: 'discrete',
				barWidth: 3,
				lineColor: '#26B99A',
				width: '85',
			});

			
		};   
	   
	   
	   /* AUTOCOMPLETE */
			
		function init_autocomplete() {
			
			if( typeof (autocomplete) === 'undefined'){ return; }
			console.log('init_autocomplete');
			
			var countries = { AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region" };

			var countriesArray = $.map(countries, function(value, key) {
			  return {
				value: value,
				data: key
			  };
			});

			// initialize autocomplete with custom appendTo
			$('#autocomplete-custom-append').autocomplete({
			  lookup: countriesArray
			});
			
		};
	   
	 /* AUTOSIZE */
			
		function init_autosize() {
			
			if(typeof $.fn.autosize !== 'undefined'){
			
			autosize($('.resizable_textarea'));
			
			}
			
		};  
	   
	   /* PARSLEY */
			
		function init_parsley() {
			
			if( typeof (parsley) === 'undefined'){ return; }
			console.log('init_parsley');
			
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form .btn').on('click', function() {
			  $('#demo-form').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
		  
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form2 .btn').on('click', function() {
			  $('#demo-form2').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form2').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
			
			  try {
				hljs.initHighlightingOnLoad();
			  } catch (err) {}
			
		};
	   
		
		  /* INPUTS */
		  
			function onAddTag(tag) {
				alert("Added a tag: " + tag);
			  }

			  function onRemoveTag(tag) {
				alert("Removed a tag: " + tag);
			  }

			  function onChangeTag(input, tag) {
				alert("Changed a tag: " + tag);
			  }

			  //tags input
			function init_TagsInput() {
				  
				if(typeof $.fn.tagsInput !== 'undefined'){	
				 
				$('#tags_1').tagsInput({
				  width: 'auto'
				});
				
				}
				
		    };
	   
		/* SELECT2 */
	  
		function init_select2() {
			 
			if( typeof (select2) === 'undefined'){ return; }
			console.log('init_toolbox');
			 
			$(".select2_single").select2({
			  placeholder: "Select a state",
			  allowClear: true
			});
			$(".select2_group").select2({});
			$(".select2_multiple").select2({
			  maximumSelectionLength: 4,
			  placeholder: "With Max Selection limit 4",
			  allowClear: true
			});
			
		};
	   
	   /* WYSIWYG EDITOR */

		function init_wysiwyg() {
			
		if( typeof ($.fn.wysiwyg) === 'undefined'){ return; }
		console.log('init_wysiwyg');	
			
        function init_ToolbarBootstrapBindings() {
          var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
              'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
              'Times New Roman', 'Verdana'
            ],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
          $.each(fonts, function(idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
          });
          $('a[title]').tooltip({
            container: 'body'
          });
          $('.dropdown-menu input').click(function() {
              return false;
            })
            .change(function() {
              $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
            })
            .keydown('esc', function() {
              this.value = '';
              $(this).change();
            });

          $('[data-role=magic-overlay]').each(function() {
            var overlay = $(this),
              target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
          });

          if ("onwebkitspeechchange" in document.createElement("input")) {
            var editorOffset = $('#editor').offset();

            $('.voiceBtn').css('position', 'absolute').offset({
              top: editorOffset.top,
              left: editorOffset.left + $('#editor').innerWidth() - 35
            });
          } else {
            $('.voiceBtn').hide();
          }
        }

        function showErrorAlert(reason, detail) {
          var msg = '';
          if (reason === 'unsupported-file-type') {
            msg = "Unsupported format " + detail;
          } else {
            console.log("error uploading file", reason, detail);
          }
          $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }

       $('.editor-wrapper').each(function(){
			var id = $(this).attr('id');	//editor-one
			
			$(this).wysiwyg({
				toolbarSelector: '[data-target="#' + id + '"]',
				fileUploadError: showErrorAlert
			});	
		});
 
		
        window.prettyPrint;
        prettyPrint();
	
    };
	  
	/* CROPPER */
		
		function init_cropper() {
			
			
			if( typeof ($.fn.cropper) === 'undefined'){ return; }
			console.log('init_cropper');
			
			var $image = $('#image');
			var $download = $('#download');
			var $dataX = $('#dataX');
			var $dataY = $('#dataY');
			var $dataHeight = $('#dataHeight');
			var $dataWidth = $('#dataWidth');
			var $dataRotate = $('#dataRotate');
			var $dataScaleX = $('#dataScaleX');
			var $dataScaleY = $('#dataScaleY');
			var options = {
				  aspectRatio: 16 / 9,
				  preview: '.img-preview',
				  crop: function (e) {
					$dataX.val(Math.round(e.x));
					$dataY.val(Math.round(e.y));
					$dataHeight.val(Math.round(e.height));
					$dataWidth.val(Math.round(e.width));
					$dataRotate.val(e.rotate);
					$dataScaleX.val(e.scaleX);
					$dataScaleY.val(e.scaleY);
				  }
				};


			// Tooltip
			$('[data-toggle="tooltip"]').tooltip();


			// Cropper
			$image.on({
			  'build.cropper': function (e) {
				console.log(e.type);
			  },
			  'built.cropper': function (e) {
				console.log(e.type);
			  },
			  'cropstart.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropmove.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropend.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'crop.cropper': function (e) {
				console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
			  },
			  'zoom.cropper': function (e) {
				console.log(e.type, e.ratio);
			  }
			}).cropper(options);


			// Buttons
			if (!$.isFunction(document.createElement('canvas').getContext)) {
			  $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
			}

			if (typeof document.createElement('cropper').style.transition === 'undefined') {
			  $('button[data-method="rotate"]').prop('disabled', true);
			  $('button[data-method="scale"]').prop('disabled', true);
			}


			// Download
			if (typeof $download[0].download === 'undefined') {
			  $download.addClass('disabled');
			}


			// Options
			$('.docs-toggles').on('change', 'input', function () {
			  var $this = $(this);
			  var name = $this.attr('name');
			  var type = $this.prop('type');
			  var cropBoxData;
			  var canvasData;

			  if (!$image.data('cropper')) {
				return;
			  }

			  if (type === 'checkbox') {
				options[name] = $this.prop('checked');
				cropBoxData = $image.cropper('getCropBoxData');
				canvasData = $image.cropper('getCanvasData');

				options.built = function () {
				  $image.cropper('setCropBoxData', cropBoxData);
				  $image.cropper('setCanvasData', canvasData);
				};
			  } else if (type === 'radio') {
				options[name] = $this.val();
			  }

			  $image.cropper('destroy').cropper(options);
			});


			// Methods
			$('.docs-buttons').on('click', '[data-method]', function () {
			  var $this = $(this);
			  var data = $this.data();
			  var $target;
			  var result;

			  if ($this.prop('disabled') || $this.hasClass('disabled')) {
				return;
			  }

			  if ($image.data('cropper') && data.method) {
				data = $.extend({}, data); // Clone a new one

				if (typeof data.target !== 'undefined') {
				  $target = $(data.target);

				  if (typeof data.option === 'undefined') {
					try {
					  data.option = JSON.parse($target.val());
					} catch (e) {
					  console.log(e.message);
					}
				  }
				}

				result = $image.cropper(data.method, data.option, data.secondOption);

				switch (data.method) {
				  case 'scaleX':
				  case 'scaleY':
					$(this).data('option', -data.option);
					break;

				  case 'getCroppedCanvas':
					if (result) {

					  // Bootstrap's Modal
					  $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

					  if (!$download.hasClass('disabled')) {
						$download.attr('href', result.toDataURL());
					  }
					}

					break;
				}

				if ($.isPlainObject(result) && $target) {
				  try {
					$target.val(JSON.stringify(result));
				  } catch (e) {
					console.log(e.message);
				  }
				}

			  }
			});

			// Keyboard
			$(document.body).on('keydown', function (e) {
			  if (!$image.data('cropper') || this.scrollTop > 300) {
				return;
			  }

			  switch (e.which) {
				case 37:
				  e.preventDefault();
				  $image.cropper('move', -1, 0);
				  break;

				case 38:
				  e.preventDefault();
				  $image.cropper('move', 0, -1);
				  break;

				case 39:
				  e.preventDefault();
				  $image.cropper('move', 1, 0);
				  break;

				case 40:
				  e.preventDefault();
				  $image.cropper('move', 0, 1);
				  break;
			  }
			});

			// Import image
			var $inputImage = $('#inputImage');
			var URL = window.URL || window.webkitURL;
			var blobURL;

			if (URL) {
			  $inputImage.change(function () {
				var files = this.files;
				var file;

				if (!$image.data('cropper')) {
				  return;
				}

				if (files && files.length) {
				  file = files[0];

				  if (/^image\/\w+$/.test(file.type)) {
					blobURL = URL.createObjectURL(file);
					$image.one('built.cropper', function () {

					  // Revoke when load complete
					  URL.revokeObjectURL(blobURL);
					}).cropper('reset').cropper('replace', blobURL);
					$inputImage.val('');
				  } else {
					window.alert('Please choose an image file.');
				  }
				}
			  });
			} else {
			  $inputImage.prop('disabled', true).parent().addClass('disabled');
			}
			
			
		};
		
		/* CROPPER --- end */  
	  
		/* KNOB */
	  
		function init_knob() {
		
				if( typeof ($.fn.knob) === 'undefined'){ return; }
				console.log('init_knob');
	
				$(".knob").knob({
				  change: function(value) {
					//console.log("change : " + value);
				  },
				  release: function(value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				  },
				  cancel: function() {
					console.log("cancel : ", this);
				  },
				  /*format : function (value) {
				   return value + '%';
				   },*/
				  draw: function() {

					// "tron" case
					if (this.$.data('skin') == 'tron') {

					  this.cursorExt = 0.3;

					  var a = this.arc(this.cv) // Arc
						,
						pa // Previous arc
						, r = 1;

					  this.g.lineWidth = this.lineWidth;

					  if (this.o.displayPrevious) {
						pa = this.arc(this.v);
						this.g.beginPath();
						this.g.strokeStyle = this.pColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
						this.g.stroke();
					  }

					  this.g.beginPath();
					  this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
					  this.g.stroke();

					  this.g.lineWidth = 2;
					  this.g.beginPath();
					  this.g.strokeStyle = this.o.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
					  this.g.stroke();

					  return false;
					}
				  }
				  
				});

				// Example of infinite knob, iPod click wheel
				var v, up = 0,
				  down = 0,
				  i = 0,
				  $idir = $("div.idir"),
				  $ival = $("div.ival"),
				  incr = function() {
					i++;
					$idir.show().html("+").fadeOut();
					$ival.html(i);
				  },
				  decr = function() {
					i--;
					$idir.show().html("-").fadeOut();
					$ival.html(i);
				  };
				$("input.infinite").knob({
				  min: 0,
				  max: 20,
				  stopper: false,
				  change: function() {
					if (v > this.cv) {
					  if (up) {
						decr();
						up = 0;
					  } else {
						up = 1;
						down = 0;
					  }
					} else {
					  if (v < this.cv) {
						if (down) {
						  incr();
						  down = 0;
						} else {
						  down = 1;
						  up = 0;
						}
					  }
					}
					v = this.cv;
				  }
				});
				
		};
	 
		/* INPUT MASK */
			
		function init_InputMask() {
			
			if( typeof ($.fn.inputmask) === 'undefined'){ return; }
			console.log('init_InputMask');
			
				$(":input").inputmask();
				
		};
	  
		/* COLOR PICKER */
			 
		function init_ColorPicker() {
			
			if( typeof ($.fn.colorpicker) === 'undefined'){ return; }
			console.log('init_ColorPicker');
			
				$('.demo1').colorpicker();
				$('.demo2').colorpicker();

				$('#demo_forceformat').colorpicker({
					format: 'rgba',
					horizontal: true
				});

				$('#demo_forceformat3').colorpicker({
					format: 'rgba',
				});

				$('.demo-auto').colorpicker();
			
		}; 
	   
	   
		/* ION RANGE SLIDER */
			
		function init_IonRangeSlider() {
			
			if( typeof ($.fn.ionRangeSlider) === 'undefined'){ return; }
			console.log('init_IonRangeSlider');
			
			$("#range_27").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true,
			  force_edges: true
			});
			$("#range").ionRangeSlider({
			  hide_min_max: true,
			  keyboard: true,
			  min: 0,
			  max: 5000,
			  from: 1000,
			  to: 4000,
			  type: 'double',
			  step: 1,
			  prefix: "$",
			  grid: true
			});
			$("#range_25").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true
			});
			$("#range_26").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 10000,
			  step: 500,
			  grid: true,
			  grid_snap: true
			});
			$("#range_31").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  from_fixed: true
			});
			$(".range_min_max").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  max_interval: 50
			});
			$(".range_time24").ionRangeSlider({
			  min: +moment().subtract(12, "hours").format("X"),
			  max: +moment().format("X"),
			  from: +moment().subtract(6, "hours").format("X"),
			  grid: true,
			  force_edges: true,
			  prettify: function(num) {
				var m = moment(num, "X");
				return m.format("Do MMMM, HH:mm");
			  }
			});
			
		};
	   
	   
	   /* DATERANGEPICKER */
	   
		function init_daterangepicker() {

			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker');
		
			var cb = function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			  $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			};

			var optionSet1 = {
			  startDate: moment().subtract(29, 'days'),
			  endDate: moment(),
			  minDate: '01/01/2012',
			  maxDate: '12/31/2015',
			  dateLimit: {
				days: 60
			  },
			  showDropdowns: true,
			  showWeekNumbers: true,
			  timePicker: false,
			  timePickerIncrement: 1,
			  timePicker12Hour: true,
			  ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			  },
			  opens: 'left',
			  buttonClasses: ['btn btn-default'],
			  applyClass: 'btn-small btn-primary',
			  cancelClass: 'btn-small',
			  format: 'MM/DD/YYYY',
			  separator: ' to ',
			  locale: {
				applyLabel: 'Submit',
				cancelLabel: 'Clear',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				firstDay: 1
			  }
			};
			
			$('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
			$('#reportrange').daterangepicker(optionSet1, cb);
			$('#reportrange').on('show.daterangepicker', function() {
			  console.log("show event fired");
			});
			$('#reportrange').on('hide.daterangepicker', function() {
			  console.log("hide event fired");
			});
			$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
			  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
			});
			$('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
			  console.log("cancel event fired");
			});
			$('#options1').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
			});
			$('#options2').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
			});
			$('#destroy').click(function() {
			  $('#reportrange').data('daterangepicker').remove();
			});
   
		}
   	   
	   function init_daterangepicker_right() {
	      
				if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
				console.log('init_daterangepicker_right');
		  
				var cb = function(start, end, label) {
				  console.log(start.toISOString(), end.toISOString(), label);
				  $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
				};

				var optionSet1 = {
				  startDate: moment().subtract(29, 'days'),
				  endDate: moment(),
				  minDate: '01/01/2012',
				  maxDate: '12/31/2020',
				  dateLimit: {
					days: 60
				  },
				  showDropdowns: true,
				  showWeekNumbers: true,
				  timePicker: false,
				  timePickerIncrement: 1,
				  timePicker12Hour: true,
				  ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				  },
				  opens: 'right',
				  buttonClasses: ['btn btn-default'],
				  applyClass: 'btn-small btn-primary',
				  cancelClass: 'btn-small',
				  format: 'MM/DD/YYYY',
				  separator: ' to ',
				  locale: {
					applyLabel: 'Submit',
					cancelLabel: 'Clear',
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				  }
				};

				$('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

				$('#reportrange_right').daterangepicker(optionSet1, cb);

				$('#reportrange_right').on('show.daterangepicker', function() {
				  console.log("show event fired");
				});
				$('#reportrange_right').on('hide.daterangepicker', function() {
				  console.log("hide event fired");
				});
				$('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
				  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
				});
				$('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
				  console.log("cancel event fired");
				});

				$('#options1').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
				});

				$('#options2').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
				});

				$('#destroy').click(function() {
				  $('#reportrange_right').data('daterangepicker').remove();
				});

	   }
	   
	    function init_daterangepicker_single_call() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_single_call');
		   
			$('#single_cal1').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_1"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal2').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_2"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal3').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_3"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal4').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_4"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
  
  
		}
		
		 
		function init_daterangepicker_reservation() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_reservation');
		 
			$('#reservation').daterangepicker(null, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});

			$('#reservation-time').daterangepicker({
			  timePicker: true,
			  timePickerIncrement: 30,
			  locale: {
				format: 'MM/DD/YYYY h:mm A'
			  }
			});
	
		}
	   
	   /* SMART WIZARD */
		
		function init_SmartWizard() {
			
			if( typeof ($.fn.smartWizard) === 'undefined'){ return; }
			console.log('init_SmartWizard');
			
			$('#wizard').smartWizard();

			$('#wizard_verticle').smartWizard({
			  transitionEffect: 'slide'
			});

			$('.buttonNext').addClass('btn btn-success');
			$('.buttonPrevious').addClass('btn btn-primary');
			$('.buttonFinish').addClass('btn btn-default');
			
		};
	   
	   
	  /* VALIDATOR */

	  function init_validator () {
		 
		if( typeof (validator) === 'undefined'){ return; }
		console.log('init_validator'); 
	  
	  // initialize the validator function
      validator.message.date = 'not a real date';

      // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
      $('form')
        .on('blur', 'input[required], input.optional, select.required', validator.checkField)
        .on('change', 'select.required', validator.checkField)
        .on('keypress', 'input[required][pattern]', validator.keypress);

      $('.multi.required').on('keyup blur', 'input', function() {
        validator.checkField.apply($(this).siblings().last()[0]);
      });

      $('form').submit(function(e) {
        e.preventDefault();
        var submit = true;

        // evaluate the form using generic validaing
        if (!validator.checkAll($(this))) {
          submit = false;
        }

        if (submit)
          this.submit();

        return false;
		});
	  
	  };
	   
	  	/* PNotify */
			
		function init_PNotify() {
			
			if( typeof (PNotify) === 'undefined'){ return; }
			console.log('init_PNotify');
			
			new PNotify({
			  title: "PNotify",
			  type: "info",
			  text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
			  nonblock: {
				  nonblock: true
			  },
			  addclass: 'dark',
			  styling: 'bootstrap3',
			  hide: false,
			  before_close: function(PNotify) {
				PNotify.update({
				  title: PNotify.options.title + " - Enjoy your Stay",
				  before_close: null
				});

				PNotify.queueRemove();

				return false;
			  }
			});

		}; 
	   
	   
	   /* CUSTOM NOTIFICATION */
			
		function init_CustomNotification() {
			
			console.log('run_customtabs');
			
			if( typeof (CustomTabs) === 'undefined'){ return; }
			console.log('init_CustomTabs');
			
			var cnt = 10;

			TabbedNotification = function(options) {
			  var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
				"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

			  if (!document.getElementById('custom_notifications')) {
				alert('doesnt exists');
			  } else {
				$('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
				$('#custom_notifications #notif-group').append(message);
				cnt++;
				CustomTabs(options);
			  }
			};

			CustomTabs = function(options) {
			  $('.tabbed_notifications > div').hide();
			  $('.tabbed_notifications > div:first-of-type').show();
			  $('#custom_notifications').removeClass('dsp_none');
			  $('.notifications a').click(function(e) {
				e.preventDefault();
				var $this = $(this),
				  tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
				  others = $this.closest('li').siblings().children('a'),
				  target = $this.attr('href');
				others.removeClass('active');
				$this.addClass('active');
				$(tabbed_notifications).children('div').hide();
				$(target).show();
			  });
			};

			CustomTabs();

			var tabid = idname = '';

			$(document).on('click', '.notification_close', function(e) {
			  idname = $(this).parent().parent().attr("id");
			  tabid = idname.substr(-2);
			  $('#ntf' + tabid).remove();
			  $('#ntlink' + tabid).parent().remove();
			  $('.notifications a').first().addClass('active');
			  $('#notif-group div').first().css('display', 'block');
			});
			
		};
		
			/* EASYPIECHART */
			
			function init_EasyPieChart() {
				
				if( typeof ($.fn.easyPieChart) === 'undefined'){ return; }
				console.log('init_EasyPieChart');
				
				$('.chart').easyPieChart({
				  easing: 'easeOutElastic',
				  delay: 3000,
				  barColor: '#26B99A',
				  trackColor: '#fff',
				  scaleColor: false,
				  lineWidth: 20,
				  trackWidth: 16,
				  lineCap: 'butt',
				  onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				  }
				});
				var chart = window.chart = $('.chart').data('easyPieChart');
				$('.js_update').on('click', function() {
				  chart.update(Math.random() * 200 - 100);
				});

				//hover and retain popover when on popover content
				var originalLeave = $.fn.popover.Constructor.prototype.leave;
				$.fn.popover.Constructor.prototype.leave = function(obj) {
				  var self = obj instanceof this.constructor ?
					obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
				  var container, timeout;

				  originalLeave.call(this, obj);

				  if (obj.currentTarget) {
					container = $(obj.currentTarget).siblings('.popover');
					timeout = self.timeout;
					container.one('mouseenter', function() {
					  //We entered the actual popover – call off the dogs
					  clearTimeout(timeout);
					  //Let's monitor popover content instead
					  container.one('mouseleave', function() {
						$.fn.popover.Constructor.prototype.leave.call(self, self);
					  });
					});
				  }
				};

				$('body').popover({
				  selector: '[data-popover]',
				  trigger: 'click hover',
				  delay: {
					show: 50,
					hide: 400
				  }
				});
				
			};
	   
		
		function init_charts() {
			
				console.log('run_charts  typeof [' + typeof (Chart) + ']');
			
				if( typeof (Chart) === 'undefined'){ return; }
				
				console.log('init_charts');
			
				
				Chart.defaults.global.legend = {
					enabled: false
				};
				
				

			if ($('#canvas_line').length ){
				
				var canvas_line_00 = new Chart(document.getElementById("canvas_line"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
				
			}

			
			if ($('#canvas_line1').length ){
			
				var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
			
			}
				
				
			if ($('#canvas_line2').length ){		
			
				var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line3').length ){
			
				var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line4').length ){
				
				var canvas_line_04 = new Chart(document.getElementById("canvas_line4"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});		
				
			}
			
				
			  // Line chart
			 
			if ($('#lineChart').length ){	
			
			  var ctx = document.getElementById("lineChart");
			  var lineChart = new Chart(ctx, {
				type: 'line',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: "My First dataset",
					backgroundColor: "rgba(38, 185, 154, 0.31)",
					borderColor: "rgba(38, 185, 154, 0.7)",
					pointBorderColor: "rgba(38, 185, 154, 0.7)",
					pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointBorderWidth: 1,
					data: [31, 74, 6, 39, 20, 85, 7]
				  }, {
					label: "My Second dataset",
					backgroundColor: "rgba(3, 88, 106, 0.3)",
					borderColor: "rgba(3, 88, 106, 0.70)",
					pointBorderColor: "rgba(3, 88, 106, 0.70)",
					pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(151,187,205,1)",
					pointBorderWidth: 1,
					data: [82, 23, 66, 9, 99, 4, 2]
				  }]
				},
			  });
			
			}
				
			  // Bar chart
			  
			if ($('#mybarChart').length ){ 
			  
			  var ctx = document.getElementById("mybarChart");
			  var mybarChart = new Chart(ctx, {
				type: 'bar',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: '# of Votes',
					backgroundColor: "#26B99A",
					data: [51, 30, 40, 28, 92, 50, 45]
				  }, {
					label: '# of Votes',
					backgroundColor: "#03586A",
					data: [41, 56, 25, 48, 72, 34, 12]
				  }]
				},

				options: {
				  scales: {
					yAxes: [{
					  ticks: {
						beginAtZero: true
					  }
					}]
				  }
				}
			  });
			  
			} 
			  

			  // Doughnut chart
			  
			if ($('#canvasDoughnut').length ){ 
			  
			  var ctx = document.getElementById("canvasDoughnut");
			  var data = {
				labels: [
				  "Dark Grey",
				  "Purple Color",
				  "Gray Color",
				  "Green Color",
				  "Blue Color"
				],
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  hoverBackgroundColor: [
					"#34495E",
					"#B370CF",
					"#CFD4D8",
					"#36CAAB",
					"#49A9EA"
				  ]

				}]
			  };

			  var canvasDoughnut = new Chart(ctx, {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data
			  });
			 
			} 

			  // Radar chart
			  
			if ($('#canvasRadar').length ){ 
			  
			  var ctx = document.getElementById("canvasRadar");
			  var data = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [{
				  label: "My First dataset",
				  backgroundColor: "rgba(3, 88, 106, 0.2)",
				  borderColor: "rgba(3, 88, 106, 0.80)",
				  pointBorderColor: "rgba(3, 88, 106, 0.80)",
				  pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
				  pointHoverBackgroundColor: "#fff",
				  pointHoverBorderColor: "rgba(220,220,220,1)",
				  data: [65, 59, 90, 81, 56, 55, 40]
				}, {
				  label: "My Second dataset",
				  backgroundColor: "rgba(38, 185, 154, 0.2)",
				  borderColor: "rgba(38, 185, 154, 0.85)",
				  pointColor: "rgba(38, 185, 154, 0.85)",
				  pointStrokeColor: "#fff",
				  pointHighlightFill: "#fff",
				  pointHighlightStroke: "rgba(151,187,205,1)",
				  data: [28, 48, 40, 19, 96, 27, 100]
				}]
			  };

			  var canvasRadar = new Chart(ctx, {
				type: 'radar',
				data: data,
			  });
			
			}
			
			
			  // Pie chart
			  if ($('#pieChart').length ){
				  
				  var ctx = document.getElementById("pieChart");
				  var data = {
					datasets: [{
					  data: [120, 50, 140, 180, 100],
					  backgroundColor: [
						"#455C73",
						"#9B59B6",
						"#BDC3C7",
						"#26B99A",
						"#3498DB"
					  ],
					  label: 'My dataset' // for legend
					}],
					labels: [
					  "Dark Gray",
					  "Purple",
					  "Gray",
					  "Green",
					  "Blue"
					]
				  };

				  var pieChart = new Chart(ctx, {
					data: data,
					type: 'pie',
					otpions: {
					  legend: false
					}
				  });
				  
			  }
			
			  
			  // PolarArea chart

			if ($('#polarArea').length ){

				var ctx = document.getElementById("polarArea");
				var data = {
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  label: 'My dataset'
				}],
				labels: [
				  "Dark Gray",
				  "Purple",
				  "Gray",
				  "Green",
				  "Blue"
				]
				};

				var polarArea = new Chart(ctx, {
				data: data,
				type: 'polarArea',
				options: {
				  scale: {
					ticks: {
					  beginAtZero: true
					}
				  }
				}
				});
			
			}
		}

		/* COMPOSE */
		
		function init_compose() {
		
			if( typeof ($.fn.slideToggle) === 'undefined'){ return; }
			console.log('init_compose');
		
			$('#compose, .compose-close').click(function(){
				$('.compose').slideToggle();
			});
		
		};
	   
	   	/* CALENDAR */
		  
		    function  init_calendar() {
					
				if( typeof ($.fn.fullCalendar) === 'undefined'){ return; }
				console.log('init_calendar');
					
				var date = new Date(),
					d = date.getDate(),
					m = date.getMonth(),
					y = date.getFullYear(),
					started,
					categoryClass;

				var calendar = $('#calendar').fullCalendar({
				  header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay,listMonth'
				  },
				  selectable: true,
				  selectHelper: true,
				  select: function(start, end, allDay) {
					$('#fc_create').click();

					started = start;
					ended = end;

					$(".antosubmit").on("click", function() {
					  var title = $("#title").val();
					  if (end) {
						ended = end;
					  }

					  categoryClass = $("#event_type").val();

					  if (title) {
						calendar.fullCalendar('renderEvent', {
							title: title,
							start: started,
							end: end,
							allDay: allDay
						  },
						  true // make the event "stick"
						);
					  }

					  $('#title').val('');

					  calendar.fullCalendar('unselect');

					  $('.antoclose').click();

					  return false;
					});
				  },
				  eventClick: function(calEvent, jsEvent, view) {
					$('#fc_edit').click();
					$('#title2').val(calEvent.title);

					categoryClass = $("#event_type").val();

					$(".antosubmit2").on("click", function() {
					  calEvent.title = $("#title2").val();

					  calendar.fullCalendar('updateEvent', calEvent);
					  $('.antoclose2').click();
					});

					calendar.fullCalendar('unselect');
				  },
				  editable: true,
				  events: [{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				  }, {
					title: 'Long Event',
					start: new Date(y, m, d - 5),
					end: new Date(y, m, d - 2)
				  }, {
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				  }, {
					title: 'Lunch',
					start: new Date(y, m, d + 14, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				  }, {
					title: 'Birthday Party',
					start: new Date(y, m, d + 1, 19, 0),
					end: new Date(y, m, d + 1, 22, 30),
					allDay: false
				  }, {
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				  }]
				});
				
			};
	   
		/* DATA TABLES */
			
			function init_DataTables() {
				
				console.log('run_datatables');
				
				if( typeof ($.fn.DataTable) === 'undefined'){ return; }
				console.log('init_DataTables');
				
				var handleDataTableButtons = function() {
				  if ($("#datatable-buttons").length) {
					$("#datatable-buttons").DataTable({
					  dom: "Bfrtip",
					  buttons: [
						{
						  extend: "copy",
						  className: "btn-sm"
						},
						{
						  extend: "csv",
						  className: "btn-sm"
						},
						{
						  extend: "excel",
						  className: "btn-sm"
						},
						{
						  extend: "pdfHtml5",
						  className: "btn-sm"
						},
						{
						  extend: "print",
						  className: "btn-sm"
						},
					  ],
					  responsive: true
					});
				  }
				};

				TableManageButtons = function() {
				  "use strict";
				  return {
					init: function() {
					  handleDataTableButtons();
					}
				  };
				}();

				$('#datatable').dataTable();

				$('#datatable-keytable').DataTable({
				  keys: true
				});

				$('#datatable-responsive').DataTable();

				$('#datatable-scroller').DataTable({
				  ajax: "js/datatables/json/scroller-demo.json",
				  deferRender: true,
				  scrollY: 380,
				  scrollCollapse: true,
				  scroller: true
				});

				$('#datatable-fixed-header').DataTable({
				  fixedHeader: true
				});

				var $datatable = $('#datatable-checkbox');

				$datatable.dataTable({
				  'order': [[ 1, 'asc' ]],
				  'columnDefs': [
					{ orderable: false, targets: [0] }
				  ]
				});
				$datatable.on('draw.dt', function() {
				  $('checkbox input').iCheck({
					checkboxClass: 'icheckbox_flat-green'
				  });
				});

				TableManageButtons.init();
				
			};
	   
			/* CHART - MORRIS  */
		
		function init_morris_charts() {
			
			if( typeof (Morris) === 'undefined'){ return; }
			console.log('init_morris_charts');
			
			if ($('#graph_bar').length){ 
			
				Morris.Bar({
				  element: 'graph_bar',
				  data: [
					{device: 'iPhone 4', geekbench: 380},
					{device: 'iPhone 4S', geekbench: 655},
					{device: 'iPhone 3GS', geekbench: 275},
					{device: 'iPhone 5', geekbench: 1571},
					{device: 'iPhone 5S', geekbench: 655},
					{device: 'iPhone 6', geekbench: 2154},
					{device: 'iPhone 6 Plus', geekbench: 1144},
					{device: 'iPhone 6S', geekbench: 2371},
					{device: 'iPhone 6S Plus', geekbench: 1471},
					{device: 'Other', geekbench: 1371}
				  ],
				  xkey: 'device',
				  ykeys: ['geekbench'],
				  labels: ['Geekbench'],
				  barRatio: 0.4,
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  xLabelAngle: 35,
				  hideHover: 'auto',
				  resize: true
				});

			}	
			
			if ($('#graph_bar_group').length ){
			
				Morris.Bar({
				  element: 'graph_bar_group',
				  data: [
					{"period": "2016-10-01", "licensed": 807, "sorned": 660},
					{"period": "2016-09-30", "licensed": 1251, "sorned": 729},
					{"period": "2016-09-29", "licensed": 1769, "sorned": 1018},
					{"period": "2016-09-20", "licensed": 2246, "sorned": 1461},
					{"period": "2016-09-19", "licensed": 2657, "sorned": 1967},
					{"period": "2016-09-18", "licensed": 3148, "sorned": 2627},
					{"period": "2016-09-17", "licensed": 3471, "sorned": 3740},
					{"period": "2016-09-16", "licensed": 2871, "sorned": 2216},
					{"period": "2016-09-15", "licensed": 2401, "sorned": 1656},
					{"period": "2016-09-10", "licensed": 2115, "sorned": 1022}
				  ],
				  xkey: 'period',
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  ykeys: ['licensed', 'sorned'],
				  labels: ['Licensed', 'SORN'],
				  hideHover: 'auto',
				  xLabelAngle: 60,
				  resize: true
				});

			}
			
			if ($('#graphx').length ){
			
				Morris.Bar({
				  element: 'graphx',
				  data: [
					{x: '2015 Q1', y: 2, z: 3, a: 4},
					{x: '2015 Q2', y: 3, z: 5, a: 6},
					{x: '2015 Q3', y: 4, z: 3, a: 2},
					{x: '2015 Q4', y: 2, z: 4, a: 5}
				  ],
				  xkey: 'x',
				  ykeys: ['y', 'z', 'a'],
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  hideHover: 'auto',
				  labels: ['Y', 'Z', 'A'],
				  resize: true
				}).on('click', function (i, row) {
					console.log(i, row);
				});

			}
			
			if ($('#graph_area').length ){
			
				Morris.Area({
				  element: 'graph_area',
				  data: [
					{period: '2014 Q1', iphone: 2666, ipad: null, itouch: 2647},
					{period: '2014 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
					{period: '2014 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
					{period: '2014 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
					{period: '2015 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
					{period: '2015 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
					{period: '2015 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
					{period: '2015 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
					{period: '2016 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
					{period: '2016 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
				  ],
				  xkey: 'period',
				  ykeys: ['iphone', 'ipad', 'itouch'],
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  labels: ['iPhone', 'iPad', 'iPod Touch'],
				  pointSize: 2,
				  hideHover: 'auto',
				  resize: true
				});

			}
			
			if ($('#graph_donut').length ){
			
				Morris.Donut({
				  element: 'graph_donut',
				  data: [
					{label: 'Jam', value: 25},
					{label: 'Frosted', value: 40},
					{label: 'Custard', value: 25},
					{label: 'Sugar', value: 10}
				  ],
				  colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  formatter: function (y) {
					return y + "%";
				  },
				  resize: true
				});

			}
			
			if ($('#graph_line').length ){
			
				Morris.Line({
				  element: 'graph_line',
				  xkey: 'year',
				  ykeys: ['value'],
				  labels: ['Value'],
				  hideHover: 'auto',
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  data: [
					{year: '2012', value: 20},
					{year: '2013', value: 10},
					{year: '2014', value: 5},
					{year: '2015', value: 5},
					{year: '2016', value: 20}
				  ],
				  resize: true
				});

				$MENU_TOGGLE.on('click', function() {
				  $(window).resize();
				});
			
			}
			
		};
	   
		
		
		/* ECHRTS */
	
		
		function init_echarts() {
		
				if( typeof (echarts) === 'undefined'){ return; }
				console.log('init_echarts');
			
		
				  var theme = {
				  color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ],

				  title: {
					  itemGap: 8,
					  textStyle: {
						  fontWeight: 'normal',
						  color: '#408829'
					  }
				  },

				  dataRange: {
					  color: ['#1f610a', '#97b58d']
				  },

				  toolbox: {
					  color: ['#408829', '#408829', '#408829', '#408829']
				  },

				  tooltip: {
					  backgroundColor: 'rgba(0,0,0,0.5)',
					  axisPointer: {
						  type: 'line',
						  lineStyle: {
							  color: '#408829',
							  type: 'dashed'
						  },
						  crossStyle: {
							  color: '#408829'
						  },
						  shadowStyle: {
							  color: 'rgba(200,200,200,0.3)'
						  }
					  }
				  },

				  dataZoom: {
					  dataBackgroundColor: '#eee',
					  fillerColor: 'rgba(64,136,41,0.2)',
					  handleColor: '#408829'
				  },
				  grid: {
					  borderWidth: 0
				  },

				  categoryAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },

				  valueAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitArea: {
						  show: true,
						  areaStyle: {
							  color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },
				  timeline: {
					  lineStyle: {
						  color: '#408829'
					  },
					  controlStyle: {
						  normal: {color: '#408829'},
						  emphasis: {color: '#408829'}
					  }
				  },

				  k: {
					  itemStyle: {
						  normal: {
							  color: '#68a54a',
							  color0: '#a9cba2',
							  lineStyle: {
								  width: 1,
								  color: '#408829',
								  color0: '#86b379'
							  }
						  }
					  }
				  },
				  map: {
					  itemStyle: {
						  normal: {
							  areaStyle: {
								  color: '#ddd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  },
						  emphasis: {
							  areaStyle: {
								  color: '#99d2dd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  }
					  }
				  },
				  force: {
					  itemStyle: {
						  normal: {
							  linkStyle: {
								  strokeColor: '#408829'
							  }
						  }
					  }
				  },
				  chord: {
					  padding: 4,
					  itemStyle: {
						  normal: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  },
						  emphasis: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  }
					  }
				  },
				  gauge: {
					  startAngle: 225,
					  endAngle: -45,
					  axisLine: {
						  show: true,
						  lineStyle: {
							  color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
							  width: 8
						  }
					  },
					  axisTick: {
						  splitNumber: 10,
						  length: 12,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  axisLabel: {
						  textStyle: {
							  color: 'auto'
						  }
					  },
					  splitLine: {
						  length: 18,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  pointer: {
						  length: '90%',
						  color: 'auto'
					  },
					  title: {
						  textStyle: {
							  color: '#333'
						  }
					  },
					  detail: {
						  textStyle: {
							  color: 'auto'
						  }
					  }
				  },
				  textStyle: {
					  fontFamily: 'Arial, Verdana, sans-serif'
				  }
			  };

			  
			  //echart Bar
			  
			if ($('#mainb').length ){
			  
				  var echartBar = echarts.init(document.getElementById('mainb'), theme);

				  echartBar.setOption({
					title: {
					  text: 'Graph title',
					  subtext: 'Graph Sub-text'
					},
					tooltip: {
					  trigger: 'axis'
					},
					legend: {
					  data: ['sales', 'purchases']
					},
					toolbox: {
					  show: false
					},
					calculable: false,
					xAxis: [{
					  type: 'category',
					  data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
					}],
					yAxis: [{
					  type: 'value'
					}],
					series: [{
					  name: 'sales',
					  type: 'bar',
					  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					  markPoint: {
						data: [{
						  type: 'max',
						  name: '???'
						}, {
						  type: 'min',
						  name: '???'
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}, {
					  name: 'purchases',
					  type: 'bar',
					  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					  markPoint: {
						data: [{
						  name: 'sales',
						  value: 182.2,
						  xAxis: 7,
						  yAxis: 183,
						}, {
						  name: 'purchases',
						  value: 2.3,
						  xAxis: 11,
						  yAxis: 3
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}]
				  });

			}
			  
			  
			  
			  
			   //echart Radar
			  
			if ($('#echart_sonar').length ){ 
			  
			  var echartRadar = echarts.init(document.getElementById('echart_sonar'), theme);

			  echartRadar.setOption({
				title: {
				  text: 'Budget vs spending',
				  subtext: 'Subtitle'
				},
				 tooltip: {
					trigger: 'item'
				},
				legend: {
				  orient: 'vertical',
				  x: 'right',
				  y: 'bottom',
				  data: ['Allocated Budget', 'Actual Spending']
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				polar: [{
				  indicator: [{
					text: 'Sales',
					max: 6000
				  }, {
					text: 'Administration',
					max: 16000
				  }, {
					text: 'Information Techology',
					max: 30000
				  }, {
					text: 'Customer Support',
					max: 38000
				  }, {
					text: 'Development',
					max: 52000
				  }, {
					text: 'Marketing',
					max: 25000
				  }]
				}],
				calculable: true,
				series: [{
				  name: 'Budget vs spending',
				  type: 'radar',
				  data: [{
					value: [4300, 10000, 28000, 35000, 50000, 19000],
					name: 'Allocated Budget'
				  }, {
					value: [5000, 14000, 28000, 31000, 42000, 21000],
					name: 'Actual Spending'
				  }]
				}]
			  });

			} 
			  
			   //echart Funnel
			  
			if ($('#echart_pyramid').length ){ 
			  
			  var echartFunnel = echarts.init(document.getElementById('echart_pyramid'), theme);

			  echartFunnel.setOption({
				title: {
				  text: 'Echart Pyramid Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				legend: {
				  data: ['Something #1', 'Something #2', 'Something #3', 'Something #4', 'Something #5'],
				  orient: 'vertical',
				  x: 'left',
				  y: 'bottom'
				},
				calculable: true,
				series: [{
				  name: '漏斗图',
				  type: 'funnel',
				  width: '40%',
				  data: [{
					value: 60,
					name: 'Something #1'
				  }, {
					value: 40,
					name: 'Something #2'
				  }, {
					value: 20,
					name: 'Something #3'
				  }, {
					value: 80,
					name: 'Something #4'
				  }, {
					value: 100,
					name: 'Something #5'
				  }]
				}]
			  });

			} 
			  
			   //echart Gauge
			  
			if ($('#echart_gauge').length ){ 
			  
			  var echartGauge = echarts.init(document.getElementById('echart_gauge'), theme);

			  echartGauge.setOption({
				tooltip: {
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Performance',
				  type: 'gauge',
				  center: ['50%', '50%'],
				  startAngle: 140,
				  endAngle: -140,
				  min: 0,
				  max: 100,
				  precision: 0,
				  splitNumber: 10,
				  axisLine: {
					show: true,
					lineStyle: {
					  color: [
						[0.2, 'lightgreen'],
						[0.4, 'orange'],
						[0.8, 'skyblue'],
						[1, '#ff4500']
					  ],
					  width: 30
					}
				  },
				  axisTick: {
					show: true,
					splitNumber: 5,
					length: 8,
					lineStyle: {
					  color: '#eee',
					  width: 1,
					  type: 'solid'
					}
				  },
				  axisLabel: {
					show: true,
					formatter: function(v) {
					  switch (v + '') {
						case '10':
						  return 'a';
						case '30':
						  return 'b';
						case '60':
						  return 'c';
						case '90':
						  return 'd';
						default:
						  return '';
					  }
					},
					textStyle: {
					  color: '#333'
					}
				  },
				  splitLine: {
					show: true,
					length: 30,
					lineStyle: {
					  color: '#eee',
					  width: 2,
					  type: 'solid'
					}
				  },
				  pointer: {
					length: '80%',
					width: 8,
					color: 'auto'
				  },
				  title: {
					show: true,
					offsetCenter: ['-65%', -10],
					textStyle: {
					  color: '#333',
					  fontSize: 15
					}
				  },
				  detail: {
					show: true,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 0,
					borderColor: '#ccc',
					width: 100,
					height: 40,
					offsetCenter: ['-60%', 10],
					formatter: '{value}%',
					textStyle: {
					  color: 'auto',
					  fontSize: 30
					}
				  },
				  data: [{
					value: 50,
					name: 'Performance'
				  }]
				}]
			  });

			} 
			  
			   //echart Line
			  
			if ($('#echart_line').length ){ 
			  
			  var echartLine = echarts.init(document.getElementById('echart_line'), theme);

			  echartLine.setOption({
				title: {
				  text: 'Line Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 220,
				  y: 40,
				  data: ['Intent', 'Pre-order', 'Deal']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  title: {
						line: 'Line',
						bar: 'Bar',
						stack: 'Stack',
						tiled: 'Tiled'
					  },
					  type: ['line', 'bar', 'stack', 'tiled']
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'category',
				  boundaryGap: false,
				  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}],
				yAxis: [{
				  type: 'value'
				}],
				series: [{
				  name: 'Deal',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [10, 12, 21, 54, 260, 830, 710]
				}, {
				  name: 'Pre-order',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [30, 182, 434, 791, 390, 30, 10]
				}, {
				  name: 'Intent',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [1320, 1132, 601, 234, 120, 90, 20]
				}]
			  });

			} 
			  
			   //echart Scatter
			  
			if ($('#echart_scatter').length ){ 
			  
			  var echartScatter = echarts.init(document.getElementById('echart_scatter'), theme);

			  echartScatter.setOption({
				title: {
				  text: 'Scatter Graph',
				  subtext: 'Heinz  2003'
				},
				tooltip: {
				  trigger: 'axis',
				  showDelay: 0,
				  axisPointer: {
					type: 'cross',
					lineStyle: {
					  type: 'dashed',
					  width: 1
					}
				  }
				},
				legend: {
				  data: ['Data2', 'Data1']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				xAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} cm'
				  }
				}],
				yAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} kg'
				  }
				}],
				series: [{
				  name: 'Data1',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[161.2, 51.6],
					[167.5, 59.0],
					[159.5, 49.2],
					[157.0, 63.0],
					[155.8, 53.6],
					[170.0, 59.0],
					[159.1, 47.6],
					[166.0, 69.8],
					[176.2, 66.8],
					[160.2, 75.2],
					[172.5, 55.2],
					[170.9, 54.2],
					[172.9, 62.5],
					[153.4, 42.0],
					[160.0, 50.0],
					[147.2, 49.8],
					[168.2, 49.2],
					[175.0, 73.2],
					[157.0, 47.8],
					[167.6, 68.8],
					[159.5, 50.6],
					[175.0, 82.5],
					[166.8, 57.2],
					[176.5, 87.8],
					[170.2, 72.8],
					[174.0, 54.5],
					[173.0, 59.8],
					[179.9, 67.3],
					[170.5, 67.8],
					[160.0, 47.0],
					[154.4, 46.2],
					[162.0, 55.0],
					[176.5, 83.0],
					[160.0, 54.4],
					[152.0, 45.8],
					[162.1, 53.6],
					[170.0, 73.2],
					[160.2, 52.1],
					[161.3, 67.9],
					[166.4, 56.6],
					[168.9, 62.3],
					[163.8, 58.5],
					[167.6, 54.5],
					[160.0, 50.2],
					[161.3, 60.3],
					[167.6, 58.3],
					[165.1, 56.2],
					[160.0, 50.2],
					[170.0, 72.9],
					[157.5, 59.8],
					[167.6, 61.0],
					[160.7, 69.1],
					[163.2, 55.9],
					[152.4, 46.5],
					[157.5, 54.3],
					[168.3, 54.8],
					[180.3, 60.7],
					[165.5, 60.0],
					[165.0, 62.0],
					[164.5, 60.3],
					[156.0, 52.7],
					[160.0, 74.3],
					[163.0, 62.0],
					[165.7, 73.1],
					[161.0, 80.0],
					[162.0, 54.7],
					[166.0, 53.2],
					[174.0, 75.7],
					[172.7, 61.1],
					[167.6, 55.7],
					[151.1, 48.7],
					[164.5, 52.3],
					[163.5, 50.0],
					[152.0, 59.3],
					[169.0, 62.5],
					[164.0, 55.7],
					[161.2, 54.8],
					[155.0, 45.9],
					[170.0, 70.6],
					[176.2, 67.2],
					[170.0, 69.4],
					[162.5, 58.2],
					[170.3, 64.8],
					[164.1, 71.6],
					[169.5, 52.8],
					[163.2, 59.8],
					[154.5, 49.0],
					[159.8, 50.0],
					[173.2, 69.2],
					[170.0, 55.9],
					[161.4, 63.4],
					[169.0, 58.2],
					[166.2, 58.6],
					[159.4, 45.7],
					[162.5, 52.2],
					[159.0, 48.6],
					[162.8, 57.8],
					[159.0, 55.6],
					[179.8, 66.8],
					[162.9, 59.4],
					[161.0, 53.6],
					[151.1, 73.2],
					[168.2, 53.4],
					[168.9, 69.0],
					[173.2, 58.4],
					[171.8, 56.2],
					[178.0, 70.6],
					[164.3, 59.8],
					[163.0, 72.0],
					[168.5, 65.2],
					[166.8, 56.6],
					[172.7, 105.2],
					[163.5, 51.8],
					[169.4, 63.4],
					[167.8, 59.0],
					[159.5, 47.6],
					[167.6, 63.0],
					[161.2, 55.2],
					[160.0, 45.0],
					[163.2, 54.0],
					[162.2, 50.2],
					[161.3, 60.2],
					[149.5, 44.8],
					[157.5, 58.8],
					[163.2, 56.4],
					[172.7, 62.0],
					[155.0, 49.2],
					[156.5, 67.2],
					[164.0, 53.8],
					[160.9, 54.4],
					[162.8, 58.0],
					[167.0, 59.8],
					[160.0, 54.8],
					[160.0, 43.2],
					[168.9, 60.5],
					[158.2, 46.4],
					[156.0, 64.4],
					[160.0, 48.8],
					[167.1, 62.2],
					[158.0, 55.5],
					[167.6, 57.8],
					[156.0, 54.6],
					[162.1, 59.2],
					[173.4, 52.7],
					[159.8, 53.2],
					[170.5, 64.5],
					[159.2, 51.8],
					[157.5, 56.0],
					[161.3, 63.6],
					[162.6, 63.2],
					[160.0, 59.5],
					[168.9, 56.8],
					[165.1, 64.1],
					[162.6, 50.0],
					[165.1, 72.3],
					[166.4, 55.0],
					[160.0, 55.9],
					[152.4, 60.4],
					[170.2, 69.1],
					[162.6, 84.5],
					[170.2, 55.9],
					[158.8, 55.5],
					[172.7, 69.5],
					[167.6, 76.4],
					[162.6, 61.4],
					[167.6, 65.9],
					[156.2, 58.6],
					[175.2, 66.8],
					[172.1, 56.6],
					[162.6, 58.6],
					[160.0, 55.9],
					[165.1, 59.1],
					[182.9, 81.8],
					[166.4, 70.7],
					[165.1, 56.8],
					[177.8, 60.0],
					[165.1, 58.2],
					[175.3, 72.7],
					[154.9, 54.1],
					[158.8, 49.1],
					[172.7, 75.9],
					[168.9, 55.0],
					[161.3, 57.3],
					[167.6, 55.0],
					[165.1, 65.5],
					[175.3, 65.5],
					[157.5, 48.6],
					[163.8, 58.6],
					[167.6, 63.6],
					[165.1, 55.2],
					[165.1, 62.7],
					[168.9, 56.6],
					[162.6, 53.9],
					[164.5, 63.2],
					[176.5, 73.6],
					[168.9, 62.0],
					[175.3, 63.6],
					[159.4, 53.2],
					[160.0, 53.4],
					[170.2, 55.0],
					[162.6, 70.5],
					[167.6, 54.5],
					[162.6, 54.5],
					[160.7, 55.9],
					[160.0, 59.0],
					[157.5, 63.6],
					[162.6, 54.5],
					[152.4, 47.3],
					[170.2, 67.7],
					[165.1, 80.9],
					[172.7, 70.5],
					[165.1, 60.9],
					[170.2, 63.6],
					[170.2, 54.5],
					[170.2, 59.1],
					[161.3, 70.5],
					[167.6, 52.7],
					[167.6, 62.7],
					[165.1, 86.3],
					[162.6, 66.4],
					[152.4, 67.3],
					[168.9, 63.0],
					[170.2, 73.6],
					[175.2, 62.3],
					[175.2, 57.7],
					[160.0, 55.4],
					[165.1, 104.1],
					[174.0, 55.5],
					[170.2, 77.3],
					[160.0, 80.5],
					[167.6, 64.5],
					[167.6, 72.3],
					[167.6, 61.4],
					[154.9, 58.2],
					[162.6, 81.8],
					[175.3, 63.6],
					[171.4, 53.4],
					[157.5, 54.5],
					[165.1, 53.6],
					[160.0, 60.0],
					[174.0, 73.6],
					[162.6, 61.4],
					[174.0, 55.5],
					[162.6, 63.6],
					[161.3, 60.9],
					[156.2, 60.0],
					[149.9, 46.8],
					[169.5, 57.3],
					[160.0, 64.1],
					[175.3, 63.6],
					[169.5, 67.3],
					[160.0, 75.5],
					[172.7, 68.2],
					[162.6, 61.4],
					[157.5, 76.8],
					[176.5, 71.8],
					[164.4, 55.5],
					[160.7, 48.6],
					[174.0, 66.4],
					[163.8, 67.3]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}, {
				  name: 'Data2',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[174.0, 65.6],
					[175.3, 71.8],
					[193.5, 80.7],
					[186.5, 72.6],
					[187.2, 78.8],
					[181.5, 74.8],
					[184.0, 86.4],
					[184.5, 78.4],
					[175.0, 62.0],
					[184.0, 81.6],
					[180.0, 76.6],
					[177.8, 83.6],
					[192.0, 90.0],
					[176.0, 74.6],
					[174.0, 71.0],
					[184.0, 79.6],
					[192.7, 93.8],
					[171.5, 70.0],
					[173.0, 72.4],
					[176.0, 85.9],
					[176.0, 78.8],
					[180.5, 77.8],
					[172.7, 66.2],
					[176.0, 86.4],
					[173.5, 81.8],
					[178.0, 89.6],
					[180.3, 82.8],
					[180.3, 76.4],
					[164.5, 63.2],
					[173.0, 60.9],
					[183.5, 74.8],
					[175.5, 70.0],
					[188.0, 72.4],
					[189.2, 84.1],
					[172.8, 69.1],
					[170.0, 59.5],
					[182.0, 67.2],
					[170.0, 61.3],
					[177.8, 68.6],
					[184.2, 80.1],
					[186.7, 87.8],
					[171.4, 84.7],
					[172.7, 73.4],
					[175.3, 72.1],
					[180.3, 82.6],
					[182.9, 88.7],
					[188.0, 84.1],
					[177.2, 94.1],
					[172.1, 74.9],
					[167.0, 59.1],
					[169.5, 75.6],
					[174.0, 86.2],
					[172.7, 75.3],
					[182.2, 87.1],
					[164.1, 55.2],
					[163.0, 57.0],
					[171.5, 61.4],
					[184.2, 76.8],
					[174.0, 86.8],
					[174.0, 72.2],
					[177.0, 71.6],
					[186.0, 84.8],
					[167.0, 68.2],
					[171.8, 66.1],
					[182.0, 72.0],
					[167.0, 64.6],
					[177.8, 74.8],
					[164.5, 70.0],
					[192.0, 101.6],
					[175.5, 63.2],
					[171.2, 79.1],
					[181.6, 78.9],
					[167.4, 67.7],
					[181.1, 66.0],
					[177.0, 68.2],
					[174.5, 63.9],
					[177.5, 72.0],
					[170.5, 56.8],
					[182.4, 74.5],
					[197.1, 90.9],
					[180.1, 93.0],
					[175.5, 80.9],
					[180.6, 72.7],
					[184.4, 68.0],
					[175.5, 70.9],
					[180.6, 72.5],
					[177.0, 72.5],
					[177.1, 83.4],
					[181.6, 75.5],
					[176.5, 73.0],
					[175.0, 70.2],
					[174.0, 73.4],
					[165.1, 70.5],
					[177.0, 68.9],
					[192.0, 102.3],
					[176.5, 68.4],
					[169.4, 65.9],
					[182.1, 75.7],
					[179.8, 84.5],
					[175.3, 87.7],
					[184.9, 86.4],
					[177.3, 73.2],
					[167.4, 53.9],
					[178.1, 72.0],
					[168.9, 55.5],
					[157.2, 58.4],
					[180.3, 83.2],
					[170.2, 72.7],
					[177.8, 64.1],
					[172.7, 72.3],
					[165.1, 65.0],
					[186.7, 86.4],
					[165.1, 65.0],
					[174.0, 88.6],
					[175.3, 84.1],
					[185.4, 66.8],
					[177.8, 75.5],
					[180.3, 93.2],
					[180.3, 82.7],
					[177.8, 58.0],
					[177.8, 79.5],
					[177.8, 78.6],
					[177.8, 71.8],
					[177.8, 116.4],
					[163.8, 72.2],
					[188.0, 83.6],
					[198.1, 85.5],
					[175.3, 90.9],
					[166.4, 85.9],
					[190.5, 89.1],
					[166.4, 75.0],
					[177.8, 77.7],
					[179.7, 86.4],
					[172.7, 90.9],
					[190.5, 73.6],
					[185.4, 76.4],
					[168.9, 69.1],
					[167.6, 84.5],
					[175.3, 64.5],
					[170.2, 69.1],
					[190.5, 108.6],
					[177.8, 86.4],
					[190.5, 80.9],
					[177.8, 87.7],
					[184.2, 94.5],
					[176.5, 80.2],
					[177.8, 72.0],
					[180.3, 71.4],
					[171.4, 72.7],
					[172.7, 84.1],
					[172.7, 76.8],
					[177.8, 63.6],
					[177.8, 80.9],
					[182.9, 80.9],
					[170.2, 85.5],
					[167.6, 68.6],
					[175.3, 67.7],
					[165.1, 66.4],
					[185.4, 102.3],
					[181.6, 70.5],
					[172.7, 95.9],
					[190.5, 84.1],
					[179.1, 87.3],
					[175.3, 71.8],
					[170.2, 65.9],
					[193.0, 95.9],
					[171.4, 91.4],
					[177.8, 81.8],
					[177.8, 96.8],
					[167.6, 69.1],
					[167.6, 82.7],
					[180.3, 75.5],
					[182.9, 79.5],
					[176.5, 73.6],
					[186.7, 91.8],
					[188.0, 84.1],
					[188.0, 85.9],
					[177.8, 81.8],
					[174.0, 82.5],
					[177.8, 80.5],
					[171.4, 70.0],
					[185.4, 81.8],
					[185.4, 84.1],
					[188.0, 90.5],
					[188.0, 91.4],
					[182.9, 89.1],
					[176.5, 85.0],
					[175.3, 69.1],
					[175.3, 73.6],
					[188.0, 80.5],
					[188.0, 82.7],
					[175.3, 86.4],
					[170.5, 67.7],
					[179.1, 92.7],
					[177.8, 93.6],
					[175.3, 70.9],
					[182.9, 75.0],
					[170.8, 93.2],
					[188.0, 93.2],
					[180.3, 77.7],
					[177.8, 61.4],
					[185.4, 94.1],
					[168.9, 75.0],
					[185.4, 83.6],
					[180.3, 85.5],
					[174.0, 73.9],
					[167.6, 66.8],
					[182.9, 87.3],
					[160.0, 72.3],
					[180.3, 88.6],
					[167.6, 75.5],
					[186.7, 101.4],
					[175.3, 91.1],
					[175.3, 67.3],
					[175.9, 77.7],
					[175.3, 81.8],
					[179.1, 75.5],
					[181.6, 84.5],
					[177.8, 76.6],
					[182.9, 85.0],
					[177.8, 102.5],
					[184.2, 77.3],
					[179.1, 71.8],
					[176.5, 87.9],
					[188.0, 94.3],
					[174.0, 70.9],
					[167.6, 64.5],
					[170.2, 77.3],
					[167.6, 72.3],
					[188.0, 87.3],
					[174.0, 80.0],
					[176.5, 82.3],
					[180.3, 73.6],
					[167.6, 74.1],
					[188.0, 85.9],
					[180.3, 73.2],
					[167.6, 76.3],
					[183.0, 65.9],
					[183.0, 90.9],
					[179.1, 89.1],
					[170.2, 62.3],
					[177.8, 82.7],
					[179.1, 79.1],
					[190.5, 98.2],
					[177.8, 84.1],
					[180.3, 83.2],
					[180.3, 83.2]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}]
			  });

			} 
			  
			   //echart Bar Horizontal
			  
			if ($('#echart_bar_horizontal').length ){ 
			  
			  var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

			  echartBar.setOption({
				title: {
				  text: 'Bar Graph',
				  subtext: 'Graph subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 100,
				  data: ['2015', '2016']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'value',
				  boundaryGap: [0, 0.01]
				}],
				yAxis: [{
				  type: 'category',
				  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
				}],
				series: [{
				  name: '2015',
				  type: 'bar',
				  data: [18203, 23489, 29034, 104970, 131744, 630230]
				}, {
				  name: '2016',
				  type: 'bar',
				  data: [19325, 23438, 31000, 121594, 134141, 681807]
				}]
			  });

			} 
			  
			   //echart Pie Collapse
			  
			if ($('#echart_pie2').length ){ 
			  
			  var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);
			  
			  echartPieCollapse.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel']
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: 'Area Mode',
				  type: 'pie',
				  radius: [25, 90],
				  center: ['50%', 170],
				  roseType: 'area',
				  x: '50%',
				  max: 40,
				  sort: 'ascending',
				  data: [{
					value: 10,
					name: 'rose1'
				  }, {
					value: 5,
					name: 'rose2'
				  }, {
					value: 15,
					name: 'rose3'
				  }, {
					value: 25,
					name: 'rose4'
				  }, {
					value: 20,
					name: 'rose5'
				  }, {
					value: 35,
					name: 'rose6'
				  }]
				}]
			  });

			} 
			  
			   //echart Donut
			  
			if ($('#echart_donut').length ){  
			  
			  var echartDonut = echarts.init(document.getElementById('echart_donut'), theme);
			  
			  echartDonut.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				calculable: true,
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'center',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Access to the resource',
				  type: 'pie',
				  radius: ['35%', '55%'],
				  itemStyle: {
					normal: {
					  label: {
						show: true
					  },
					  labelLine: {
						show: true
					  }
					},
					emphasis: {
					  label: {
						show: true,
						position: 'center',
						textStyle: {
						  fontSize: '14',
						  fontWeight: 'normal'
						}
					  }
					}
				  },
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			} 
			  
			   //echart Pie
			  
			if ($('#echart_pie').length ){  
			  
			  var echartPie = echarts.init(document.getElementById('echart_pie'), theme);

			  echartPie.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'left',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: '访问来源',
				  type: 'pie',
				  radius: '55%',
				  center: ['50%', '48%'],
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			  var dataStyle = {
				normal: {
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				}
			  };

			  var placeHolderStyle = {
				normal: {
				  color: 'rgba(0,0,0,0)',
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				},
				emphasis: {
				  color: 'rgba(0,0,0,0)'
				}
			  };

			} 
			  
			   //echart Mini Pie
			  
			if ($('#echart_mini_pie').length ){ 
			  
			  var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

			  echartMiniPie .setOption({
				title: {
				  text: 'Chart #2',
				  subtext: 'From ExcelHome',
				  sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
				  x: 'center',
				  y: 'center',
				  itemGap: 20,
				  textStyle: {
					color: 'rgba(30,144,255,0.8)',
					fontFamily: '微软雅黑',
					fontSize: 35,
					fontWeight: 'bolder'
				  }
				},
				tooltip: {
				  show: true,
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  orient: 'vertical',
				  x: 170,
				  y: 45,
				  itemGap: 12,
				  data: ['68%Something #1', '29%Something #2', '3%Something #3'],
				},
				toolbox: {
				  show: true,
				  feature: {
					mark: {
					  show: true
					},
					dataView: {
					  show: true,
					  title: "Text View",
					  lang: [
						"Text View",
						"Close",
						"Refresh",
					  ],
					  readOnly: false
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: '1',
				  type: 'pie',
				  clockWise: false,
				  radius: [105, 130],
				  itemStyle: dataStyle,
				  data: [{
					value: 68,
					name: '68%Something #1'
				  }, {
					value: 32,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '2',
				  type: 'pie',
				  clockWise: false,
				  radius: [80, 105],
				  itemStyle: dataStyle,
				  data: [{
					value: 29,
					name: '29%Something #2'
				  }, {
					value: 71,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '3',
				  type: 'pie',
				  clockWise: false,
				  radius: [25, 80],
				  itemStyle: dataStyle,
				  data: [{
					value: 3,
					name: '3%Something #3'
				  }, {
					value: 97,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}]
			  });

			} 
			  
			   //echart Map
			  
			if ($('#echart_world_map').length ){ 
			  
				  var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);
				  
				   
				  echartMap.setOption({
					title: {
					  text: 'World Population (2010)',
					  subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
					  x: 'center',
					  y: 'top'
					},
					tooltip: {
					  trigger: 'item',
					  formatter: function(params) {
						var value = (params.value + '').split('.');
						value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					  }
					},
					toolbox: {
					  show: true,
					  orient: 'vertical',
					  x: 'right',
					  y: 'center',
					  feature: {
						mark: {
						  show: true
						},
						dataView: {
						  show: true,
						  title: "Text View",
						  lang: [
							"Text View",
							"Close",
							"Refresh",
						  ],
						  readOnly: false
						},
						restore: {
						  show: true,
						  title: "Restore"
						},
						saveAsImage: {
						  show: true,
						  title: "Save Image"
						}
					  }
					},
					dataRange: {
					  min: 0,
					  max: 1000000,
					  text: ['High', 'Low'],
					  realtime: false,
					  calculable: true,
					  color: ['#087E65', '#26B99A', '#CBEAE3']
					},
					series: [{
					  name: 'World Population (2010)',
					  type: 'map',
					  mapType: 'world',
					  roam: false,
					  mapLocation: {
						y: 60
					  },
					  itemStyle: {
						emphasis: {
						  label: {
							show: true
						  }
						}
					  },
					  data: [{
						name: 'Afghanistan',
						value: 28397.812
					  }, {
						name: 'Angola',
						value: 19549.124
					  }, {
						name: 'Albania',
						value: 3150.143
					  }, {
						name: 'United Arab Emirates',
						value: 8441.537
					  }, {
						name: 'Argentina',
						value: 40374.224
					  }, {
						name: 'Armenia',
						value: 2963.496
					  }, {
						name: 'French Southern and Antarctic Lands',
						value: 268.065
					  }, {
						name: 'Australia',
						value: 22404.488
					  }, {
						name: 'Austria',
						value: 8401.924
					  }, {
						name: 'Azerbaijan',
						value: 9094.718
					  }, {
						name: 'Burundi',
						value: 9232.753
					  }, {
						name: 'Belgium',
						value: 10941.288
					  }, {
						name: 'Benin',
						value: 9509.798
					  }, {
						name: 'Burkina Faso',
						value: 15540.284
					  }, {
						name: 'Bangladesh',
						value: 151125.475
					  }, {
						name: 'Bulgaria',
						value: 7389.175
					  }, {
						name: 'The Bahamas',
						value: 66402.316
					  }, {
						name: 'Bosnia and Herzegovina',
						value: 3845.929
					  }, {
						name: 'Belarus',
						value: 9491.07
					  }, {
						name: 'Belize',
						value: 308.595
					  }, {
						name: 'Bermuda',
						value: 64.951
					  }, {
						name: 'Bolivia',
						value: 716.939
					  }, {
						name: 'Brazil',
						value: 195210.154
					  }, {
						name: 'Brunei',
						value: 27.223
					  }, {
						name: 'Bhutan',
						value: 716.939
					  }, {
						name: 'Botswana',
						value: 1969.341
					  }, {
						name: 'Central African Republic',
						value: 4349.921
					  }, {
						name: 'Canada',
						value: 34126.24
					  }, {
						name: 'Switzerland',
						value: 7830.534
					  }, {
						name: 'Chile',
						value: 17150.76
					  }, {
						name: 'China',
						value: 1359821.465
					  }, {
						name: 'Ivory Coast',
						value: 60508.978
					  }, {
						name: 'Cameroon',
						value: 20624.343
					  }, {
						name: 'Democratic Republic of the Congo',
						value: 62191.161
					  }, {
						name: 'Republic of the Congo',
						value: 3573.024
					  }, {
						name: 'Colombia',
						value: 46444.798
					  }, {
						name: 'Costa Rica',
						value: 4669.685
					  }, {
						name: 'Cuba',
						value: 11281.768
					  }, {
						name: 'Northern Cyprus',
						value: 1.468
					  }, {
						name: 'Cyprus',
						value: 1103.685
					  }, {
						name: 'Czech Republic',
						value: 10553.701
					  }, {
						name: 'Germany',
						value: 83017.404
					  }, {
						name: 'Djibouti',
						value: 834.036
					  }, {
						name: 'Denmark',
						value: 5550.959
					  }, {
						name: 'Dominican Republic',
						value: 10016.797
					  }, {
						name: 'Algeria',
						value: 37062.82
					  }, {
						name: 'Ecuador',
						value: 15001.072
					  }, {
						name: 'Egypt',
						value: 78075.705
					  }, {
						name: 'Eritrea',
						value: 5741.159
					  }, {
						name: 'Spain',
						value: 46182.038
					  }, {
						name: 'Estonia',
						value: 1298.533
					  }, {
						name: 'Ethiopia',
						value: 87095.281
					  }, {
						name: 'Finland',
						value: 5367.693
					  }, {
						name: 'Fiji',
						value: 860.559
					  }, {
						name: 'Falkland Islands',
						value: 49.581
					  }, {
						name: 'France',
						value: 63230.866
					  }, {
						name: 'Gabon',
						value: 1556.222
					  }, {
						name: 'United Kingdom',
						value: 62066.35
					  }, {
						name: 'Georgia',
						value: 4388.674
					  }, {
						name: 'Ghana',
						value: 24262.901
					  }, {
						name: 'Guinea',
						value: 10876.033
					  }, {
						name: 'Gambia',
						value: 1680.64
					  }, {
						name: 'Guinea Bissau',
						value: 10876.033
					  }, {
						name: 'Equatorial Guinea',
						value: 696.167
					  }, {
						name: 'Greece',
						value: 11109.999
					  }, {
						name: 'Greenland',
						value: 56.546
					  }, {
						name: 'Guatemala',
						value: 14341.576
					  }, {
						name: 'French Guiana',
						value: 231.169
					  }, {
						name: 'Guyana',
						value: 786.126
					  }, {
						name: 'Honduras',
						value: 7621.204
					  }, {
						name: 'Croatia',
						value: 4338.027
					  }, {
						name: 'Haiti',
						value: 9896.4
					  }, {
						name: 'Hungary',
						value: 10014.633
					  }, {
						name: 'Indonesia',
						value: 240676.485
					  }, {
						name: 'India',
						value: 1205624.648
					  }, {
						name: 'Ireland',
						value: 4467.561
					  }, {
						name: 'Iran',
						value: 240676.485
					  }, {
						name: 'Iraq',
						value: 30962.38
					  }, {
						name: 'Iceland',
						value: 318.042
					  }, {
						name: 'Israel',
						value: 7420.368
					  }, {
						name: 'Italy',
						value: 60508.978
					  }, {
						name: 'Jamaica',
						value: 2741.485
					  }, {
						name: 'Jordan',
						value: 6454.554
					  }, {
						name: 'Japan',
						value: 127352.833
					  }, {
						name: 'Kazakhstan',
						value: 15921.127
					  }, {
						name: 'Kenya',
						value: 40909.194
					  }, {
						name: 'Kyrgyzstan',
						value: 5334.223
					  }, {
						name: 'Cambodia',
						value: 14364.931
					  }, {
						name: 'South Korea',
						value: 51452.352
					  }, {
						name: 'Kosovo',
						value: 97.743
					  }, {
						name: 'Kuwait',
						value: 2991.58
					  }, {
						name: 'Laos',
						value: 6395.713
					  }, {
						name: 'Lebanon',
						value: 4341.092
					  }, {
						name: 'Liberia',
						value: 3957.99
					  }, {
						name: 'Libya',
						value: 6040.612
					  }, {
						name: 'Sri Lanka',
						value: 20758.779
					  }, {
						name: 'Lesotho',
						value: 2008.921
					  }, {
						name: 'Lithuania',
						value: 3068.457
					  }, {
						name: 'Luxembourg',
						value: 507.885
					  }, {
						name: 'Latvia',
						value: 2090.519
					  }, {
						name: 'Morocco',
						value: 31642.36
					  }, {
						name: 'Moldova',
						value: 103.619
					  }, {
						name: 'Madagascar',
						value: 21079.532
					  }, {
						name: 'Mexico',
						value: 117886.404
					  }, {
						name: 'Macedonia',
						value: 507.885
					  }, {
						name: 'Mali',
						value: 13985.961
					  }, {
						name: 'Myanmar',
						value: 51931.231
					  }, {
						name: 'Montenegro',
						value: 620.078
					  }, {
						name: 'Mongolia',
						value: 2712.738
					  }, {
						name: 'Mozambique',
						value: 23967.265
					  }, {
						name: 'Mauritania',
						value: 3609.42
					  }, {
						name: 'Malawi',
						value: 15013.694
					  }, {
						name: 'Malaysia',
						value: 28275.835
					  }, {
						name: 'Namibia',
						value: 2178.967
					  }, {
						name: 'New Caledonia',
						value: 246.379
					  }, {
						name: 'Niger',
						value: 15893.746
					  }, {
						name: 'Nigeria',
						value: 159707.78
					  }, {
						name: 'Nicaragua',
						value: 5822.209
					  }, {
						name: 'Netherlands',
						value: 16615.243
					  }, {
						name: 'Norway',
						value: 4891.251
					  }, {
						name: 'Nepal',
						value: 26846.016
					  }, {
						name: 'New Zealand',
						value: 4368.136
					  }, {
						name: 'Oman',
						value: 2802.768
					  }, {
						name: 'Pakistan',
						value: 173149.306
					  }, {
						name: 'Panama',
						value: 3678.128
					  }, {
						name: 'Peru',
						value: 29262.83
					  }, {
						name: 'Philippines',
						value: 93444.322
					  }, {
						name: 'Papua New Guinea',
						value: 6858.945
					  }, {
						name: 'Poland',
						value: 38198.754
					  }, {
						name: 'Puerto Rico',
						value: 3709.671
					  }, {
						name: 'North Korea',
						value: 1.468
					  }, {
						name: 'Portugal',
						value: 10589.792
					  }, {
						name: 'Paraguay',
						value: 6459.721
					  }, {
						name: 'Qatar',
						value: 1749.713
					  }, {
						name: 'Romania',
						value: 21861.476
					  }, {
						name: 'Russia',
						value: 21861.476
					  }, {
						name: 'Rwanda',
						value: 10836.732
					  }, {
						name: 'Western Sahara',
						value: 514.648
					  }, {
						name: 'Saudi Arabia',
						value: 27258.387
					  }, {
						name: 'Sudan',
						value: 35652.002
					  }, {
						name: 'South Sudan',
						value: 9940.929
					  }, {
						name: 'Senegal',
						value: 12950.564
					  }, {
						name: 'Solomon Islands',
						value: 526.447
					  }, {
						name: 'Sierra Leone',
						value: 5751.976
					  }, {
						name: 'El Salvador',
						value: 6218.195
					  }, {
						name: 'Somaliland',
						value: 9636.173
					  }, {
						name: 'Somalia',
						value: 9636.173
					  }, {
						name: 'Republic of Serbia',
						value: 3573.024
					  }, {
						name: 'Suriname',
						value: 524.96
					  }, {
						name: 'Slovakia',
						value: 5433.437
					  }, {
						name: 'Slovenia',
						value: 2054.232
					  }, {
						name: 'Sweden',
						value: 9382.297
					  }, {
						name: 'Swaziland',
						value: 1193.148
					  }, {
						name: 'Syria',
						value: 7830.534
					  }, {
						name: 'Chad',
						value: 11720.781
					  }, {
						name: 'Togo',
						value: 6306.014
					  }, {
						name: 'Thailand',
						value: 66402.316
					  }, {
						name: 'Tajikistan',
						value: 7627.326
					  }, {
						name: 'Turkmenistan',
						value: 5041.995
					  }, {
						name: 'East Timor',
						value: 10016.797
					  }, {
						name: 'Trinidad and Tobago',
						value: 1328.095
					  }, {
						name: 'Tunisia',
						value: 10631.83
					  }, {
						name: 'Turkey',
						value: 72137.546
					  }, {
						name: 'United Republic of Tanzania',
						value: 44973.33
					  }, {
						name: 'Uganda',
						value: 33987.213
					  }, {
						name: 'Ukraine',
						value: 46050.22
					  }, {
						name: 'Uruguay',
						value: 3371.982
					  }, {
						name: 'United States of America',
						value: 312247.116
					  }, {
						name: 'Uzbekistan',
						value: 27769.27
					  }, {
						name: 'Venezuela',
						value: 236.299
					  }, {
						name: 'Vietnam',
						value: 89047.397
					  }, {
						name: 'Vanuatu',
						value: 236.299
					  }, {
						name: 'West Bank',
						value: 13.565
					  }, {
						name: 'Yemen',
						value: 22763.008
					  }, {
						name: 'South Africa',
						value: 51452.352
					  }, {
						name: 'Zambia',
						value: 13216.985
					  }, {
						name: 'Zimbabwe',
						value: 13076.978
					  }]
					}]
				  });
	   
			}
	   
		}  
	   
	   
	$(document).ready(function() {
				
		init_sparklines();
		init_flot_chart();
		init_sidebar();
		init_wysiwyg();
		init_InputMask();
		init_JQVmap();
		init_cropper();
		init_knob();
		init_IonRangeSlider();
		init_ColorPicker();
		init_TagsInput();
		init_parsley();
		init_daterangepicker();
		init_daterangepicker_right();
		init_daterangepicker_single_call();
		init_daterangepicker_reservation();
		init_SmartWizard();
		init_EasyPieChart();
		init_charts();
		init_echarts();
		init_morris_charts();
		init_skycons();
		init_select2();
		init_validator();
		init_DataTables();
		init_chart_doughnut();
		init_gauge();
		init_PNotify();
		init_starrr();
		init_calendar();
		init_compose();
		init_CustomNotification();
		init_autosize();
		init_autocomplete();
				
	});	
	


;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.4
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function t(e,i,a){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(n)return n(r,!0);var h=new Error("Cannot find module '"+r+"'");throw h.code="MODULE_NOT_FOUND",h}var d=i[r]={exports:{}};e[r][0].call(d.exports,function(t){var i=e[r][1][t];return o(i?i:t)},d,d.exports,t,e,i,a)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<a.length;r++)o(a[r]);return o}({1:[function(t,e,i){},{}],2:[function(t,e,i){function a(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,i=/^#([a-fA-F0-9]{6})$/,a=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=/(\w+)/,r=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l[h]+l[h],16)}else if(l=t.match(i)){l=l[1];for(var h=0;h<r.length;h++)r[h]=parseInt(l.slice(2*h,2*h+2),16)}else if(l=t.match(a)){for(var h=0;h<r.length;h++)r[h]=parseInt(l[h+1]);s=parseFloat(l[4])}else if(l=t.match(o)){for(var h=0;h<r.length;h++)r[h]=Math.round(2.55*parseFloat(l[h+1]));s=parseFloat(l[4])}else if(l=t.match(n)){if("transparent"==l[1])return[0,0,0,0];if(r=y[l[1]],!r)return}for(var h=0;h<r.length;h++)r[h]=v(r[h],0,255);return s=s||0==s?v(s,0,1):1,r[3]=s,r}}function o(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=v(parseInt(i[1]),0,360),n=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(a)?1:a,0,1);return[o,n,r,s]}}}function n(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,i=t.match(e);if(i){var a=parseFloat(i[4]),o=v(parseInt(i[1]),0,360),n=v(parseFloat(i[2]),0,100),r=v(parseFloat(i[3]),0,100),s=v(isNaN(a)?1:a,0,1);return[o,n,r,s]}}}function r(t){var e=a(t);return e&&e.slice(0,3)}function s(t){var e=o(t);return e&&e.slice(0,3)}function l(t){var e=a(t);return e?e[3]:(e=o(t))?e[3]:(e=n(t))?e[3]:void 0}function h(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function d(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function u(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgb("+i+"%, "+a+"%, "+o+"%)"}function f(t,e){var i=Math.round(t[0]/255*100),a=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgba("+i+"%, "+a+"%, "+o+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function v(t,e,i){return Math.min(Math.max(e,t),i)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t("color-name");e.exports={getRgba:a,getHsla:o,getRgb:r,getHsl:s,getHwb:n,getAlpha:l,hexString:h,rgbString:d,rgbaString:c,percentString:u,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:b};var k={};for(var S in y)k[y[S]]=S},{"color-name":6}],3:[function(t,e,i){var a=t("color-convert"),o=t("chartjs-color-string"),n=function(t){if(t instanceof n)return t;if(!(this instanceof n))return new n(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=o.getRgba(t))this.setValues("rgb",e);else if(e=o.getHsla(t))this.setValues("hsl",e);else{if(!(e=o.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};n.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var a=t[i]/255;e[i]=.03928>=a?a/12.92:Math.pow((a+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=0>i?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,a=t,o=void 0===e?.5:e,n=2*o-1,r=i.alpha()-a.alpha(),s=((n*r===-1?n:(n+r)/(1+n*r))+1)/2,l=1-s;return this.rgb(s*i.red()+l*a.red(),s*i.green()+l*a.green(),s*i.blue()+l*a.blue()).alpha(i.alpha()*o+a.alpha()*(1-o))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new n,a=this.values,o=i.values;for(var r in a)a.hasOwnProperty(r)&&(t=a[r],e={}.toString.call(t),"[object Array]"===e?o[r]=t.slice(0):"[object Number]"===e?o[r]=t:console.error("unexpected color value:",t));return i}},n.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},n.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},n.prototype.getValues=function(t){for(var e=this.values,i={},a=0;a<t.length;a++)i[t.charAt(a)]=e[t][a];return 1!==e.alpha&&(i.a=e.alpha),i},n.prototype.setValues=function(t,e){var i,o=this.values,n=this.spaces,r=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)o[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)o[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[n[t][0]]){var l=n[t];for(i=0;i<t.length;i++)o[t][i]=e[l[i]];s=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===s?o.alpha:s)),"alpha"===t)return!1;var h;for(i=0;i<t.length;i++)h=Math.max(0,Math.min(r[t][i],o[t][i])),o[t][i]=Math.round(h);for(var d in n)d!==t&&(o[d]=a[t][d](o[t]));return!0},n.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},n.prototype.setChannel=function(t,e,i){var a=this.values[t];return void 0===i?a[e]:i===a[e]?this:(a[e]=i,this.setValues(t,a),this)},"undefined"!=typeof window&&(window.Color=n),e.exports=n},{"chartjs-color-string":2,"color-convert":5}],4:[function(t,e,i){function a(t){var e,i,a,o=t[0]/255,n=t[1]/255,r=t[2]/255,s=Math.min(o,n,r),l=Math.max(o,n,r),h=l-s;return l==s?e=0:o==l?e=(n-r)/h:n==l?e=2+(r-o)/h:r==l&&(e=4+(o-n)/h),e=Math.min(60*e,360),0>e&&(e+=360),a=(s+l)/2,i=l==s?0:.5>=a?h/(l+s):h/(2-l-s),[e,100*i,100*a]}function o(t){var e,i,a,o=t[0],n=t[1],r=t[2],s=Math.min(o,n,r),l=Math.max(o,n,r),h=l-s;return i=0==l?0:h/l*1e3/10,l==s?e=0:o==l?e=(n-r)/h:n==l?e=2+(r-o)/h:r==l&&(e=4+(o-n)/h),e=Math.min(60*e,360),0>e&&(e+=360),a=l/255*1e3/10,[e,i,a]}function n(t){var e=t[0],i=t[1],o=t[2],n=a(t)[0],r=1/255*Math.min(e,Math.min(i,o)),o=1-1/255*Math.max(e,Math.max(i,o));return[n,100*r,100*o]}function s(t){var e,i,a,o,n=t[0]/255,r=t[1]/255,s=t[2]/255;return o=Math.min(1-n,1-r,1-s),e=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0,a=(1-s-o)/(1-o)||0,[100*e,100*i,100*a,100*o]}function l(t){return G[JSON.stringify(t)]}function h(t){var e=t[0]/255,i=t[1]/255,a=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;var o=.4124*e+.3576*i+.1805*a,n=.2126*e+.7152*i+.0722*a,r=.0193*e+.1192*i+.9505*a;return[100*o,100*n,100*r]}function d(t){var e,i,a,o=h(t),n=o[0],r=o[1],s=o[2];return n/=95.047,r/=100,s/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*r-16,i=500*(n-r),a=200*(r-s),[e,i,a]}function c(t){return B(d(t))}function u(t){var e,i,a,o,n,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return n=255*l,[n,n,n];i=.5>l?l*(1+s):l+s-l*s,e=2*l-i,o=[0,0,0];for(var h=0;3>h;h++)a=r+1/3*-(h-1),0>a&&a++,a>1&&a--,n=1>6*a?e+6*(i-e)*a:1>2*a?i:2>3*a?e+(i-e)*(2/3-a)*6:e,o[h]=255*n;return o}function f(t){var e,i,a=t[0],o=t[1]/100,n=t[2]/100;return 0===n?[0,0,0]:(n*=2,o*=1>=n?n:2-n,i=(n+o)/2,e=2*o/(n+o),[a,100*e,100*i])}function p(t){return n(u(t))}function m(t){return s(u(t))}function v(t){return l(u(t))}function x(t){var e=t[0]/60,i=t[1]/100,a=t[2]/100,o=Math.floor(e)%6,n=e-Math.floor(e),r=255*a*(1-i),s=255*a*(1-i*n),l=255*a*(1-i*(1-n)),a=255*a;switch(o){case 0:return[a,l,r];case 1:return[s,a,r];case 2:return[r,a,l];case 3:return[r,s,a];case 4:return[l,r,a];case 5:return[a,r,s]}}function y(t){var e,i,a=t[0],o=t[1]/100,n=t[2]/100;return i=(2-o)*n,e=o*n,e/=1>=i?i:2-i,e=e||0,i/=2,[a,100*e,100*i]}function k(t){return n(x(t))}function S(t){return s(x(t))}function C(t){return l(x(t))}function w(t){var e,i,a,o,n=t[0]/360,s=t[1]/100,l=t[2]/100,h=s+l;switch(h>1&&(s/=h,l/=h),e=Math.floor(6*n),i=1-l,a=6*n-e,0!=(1&e)&&(a=1-a),o=s+a*(i-s),e){default:case 6:case 0:r=i,g=o,b=s;break;case 1:r=o,g=i,b=s;break;case 2:r=s,g=i,b=o;break;case 3:r=s,g=o,b=i;break;case 4:r=o,g=s,b=i;break;case 5:r=i,g=s,b=o}return[255*r,255*g,255*b]}function M(t){return a(w(t))}function D(t){return o(w(t))}function A(t){return s(w(t))}function I(t){return l(w(t))}function F(t){var e,i,a,o=t[0]/100,n=t[1]/100,r=t[2]/100,s=t[3]/100;return e=1-Math.min(1,o*(1-s)+s),i=1-Math.min(1,n*(1-s)+s),a=1-Math.min(1,r*(1-s)+s),[255*e,255*i,255*a]}function _(t){return a(F(t))}function P(t){return o(F(t))}function T(t){return n(F(t))}function V(t){return l(F(t))}function R(t){var e,i,a,o=t[0]/100,n=t[1]/100,r=t[2]/100;return e=3.2406*o+-1.5372*n+r*-.4986,i=o*-.9689+1.8758*n+.0415*r,a=.0557*o+n*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=12.92*a,e=Math.min(Math.max(0,e),1),i=Math.min(Math.max(0,i),1),a=Math.min(Math.max(0,a),1),[255*e,255*i,255*a]}function O(t){var e,i,a,o=t[0],n=t[1],r=t[2];return o/=95.047,n/=100,r/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*n-16,i=500*(o-n),a=200*(n-r),[e,i,a]}function W(t){return B(O(t))}function L(t){var e,i,a,o,n=t[0],r=t[1],s=t[2];return 8>=n?(i=100*n/903.3,o=7.787*(i/100)+16/116):(i=100*Math.pow((n+16)/116,3),o=Math.pow(i/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+o-16/116)/7.787:95.047*Math.pow(r/500+o,3),a=.008859>=a/108.883?a=108.883*(o-s/200-16/116)/7.787:108.883*Math.pow(o-s/200,3),[e,i,a]}function B(t){var e,i,a,o=t[0],n=t[1],r=t[2];return e=Math.atan2(r,n),i=360*e/2/Math.PI,0>i&&(i+=360),a=Math.sqrt(n*n+r*r),[o,a,i]}function z(t){return R(L(t))}function H(t){var e,i,a,o=t[0],n=t[1],r=t[2];return a=r/360*2*Math.PI,e=n*Math.cos(a),i=n*Math.sin(a),[o,e,i]}function N(t){return L(H(t))}function E(t){return z(H(t))}function U(t){return Q[t]}function j(t){return a(U(t))}function q(t){return o(U(t))}function Y(t){return n(U(t))}function J(t){return s(U(t))}function Z(t){return d(U(t))}function X(t){return h(U(t))}e.exports={rgb2hsl:a,rgb2hsv:o,rgb2hwb:n,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:h,rgb2lab:d,rgb2lch:c,hsl2rgb:u,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:C,hwb2rgb:w,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:A,hwb2keyword:I,cmyk2rgb:F,cmyk2hsl:_,cmyk2hsv:P,cmyk2hwb:T,cmyk2keyword:V,keyword2rgb:U,keyword2hsl:j,keyword2hsv:q,keyword2hwb:Y,keyword2cmyk:J,keyword2lab:Z,keyword2xyz:X,xyz2rgb:R,xyz2lab:O,xyz2lch:W,lab2xyz:L,lab2rgb:z,lab2lch:B,lch2lab:H,lch2xyz:N,lch2rgb:E};var Q={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={};for(var $ in Q)G[JSON.stringify(Q[$])]=$},{}],5:[function(t,e,i){var a=t("./conversions"),o=function(){return new h};for(var n in a){o[n+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),a[t](e)}}(n);var r=/(\w+)2(\w+)/.exec(n),s=r[1],l=r[2];o[s]=o[s]||{},o[s][l]=o[n]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=a[t](e);if("string"==typeof i||void 0===i)return i;for(var o=0;o<i.length;o++)i[o]=Math.round(i[o]);return i}}(n)}var h=function(){this.convs={}};h.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},h.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},h.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,a=this.convs[i];e=o[i][t](a),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){h.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=o},{"./conversions":4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var a=t("./core/core.js")();t("./core/core.helpers")(a),t("./core/core.element")(a),t("./core/core.animation")(a),t("./core/core.controller")(a),t("./core/core.datasetController")(a),t("./core/core.layoutService")(a),t("./core/core.legend")(a),t("./core/core.plugin.js")(a),t("./core/core.scale")(a),t("./core/core.scaleService")(a),t("./core/core.title")(a),t("./core/core.tooltip")(a),t("./elements/element.arc")(a),t("./elements/element.line")(a),t("./elements/element.point")(a),t("./elements/element.rectangle")(a),t("./scales/scale.category")(a),t("./scales/scale.linear")(a),t("./scales/scale.logarithmic")(a),t("./scales/scale.radialLinear")(a),t("./scales/scale.time")(a),t("./controllers/controller.bar")(a),t("./controllers/controller.bubble")(a),t("./controllers/controller.doughnut")(a),t("./controllers/controller.line")(a),t("./controllers/controller.polarArea")(a),t("./controllers/controller.radar")(a),t("./charts/Chart.Bar")(a),t("./charts/Chart.Bubble")(a),t("./charts/Chart.Doughnut")(a),t("./charts/Chart.Line")(a),t("./charts/Chart.PolarArea")(a),t("./charts/Chart.Radar")(a),t("./charts/Chart.Scatter")(a),window.Chart=e.exports=a},{"./charts/Chart.Bar":8,"./charts/Chart.Bubble":9,"./charts/Chart.Doughnut":10,"./charts/Chart.Line":11,"./charts/Chart.PolarArea":12,"./charts/Chart.Radar":13,"./charts/Chart.Scatter":14,"./controllers/controller.bar":15,"./controllers/controller.bubble":16,"./controllers/controller.doughnut":17,"./controllers/controller.line":18,"./controllers/controller.polarArea":19,"./controllers/controller.radar":20,"./core/core.animation":21,"./core/core.controller":22,"./core/core.datasetController":23,"./core/core.element":24,"./core/core.helpers":25,"./core/core.js":26,"./core/core.layoutService":27,"./core/core.legend":28,"./core/core.plugin.js":29,"./core/core.scale":30,"./core/core.scaleService":31,"./core/core.title":32,"./core/core.tooltip":33,"./elements/element.arc":34,"./elements/element.line":35,"./elements/element.point":36,"./elements/element.rectangle":37,"./scales/scale.category":38,"./scales/scale.linear":39,"./scales/scale.logarithmic":40,"./scales/scale.radialLinear":41,"./scales/scale.time":42}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.options=t.helpers.configMerge({aspectRatio:1},i.options),i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,i){t.DatasetController.prototype.initialize.call(this,e,i),this.getMeta().bar=!0},getBarCount:function(){var t=0;return e.each(this.chart.data.datasets,function(e,i){var a=this.chart.getDatasetMeta(i);a.bar&&this.chart.isDatasetVisible(i)&&++t},this),t},update:function(t){e.each(this.getMeta().data,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o=this.getMeta(),n=this.getScaleForId(o.xAxisID),r=this.getScaleForId(o.yAxisID),s=r.getBasePixel(),l=this.chart.options.elements.rectangle,h=t.custom||{},d=this.getDataset();e.extend(t,{_xScale:n,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:this.calculateBarX(i,this.index),y:a?s:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:a?s:this.calculateBarBase(this.index,i),width:this.calculateBarWidth(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,l.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:l.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,l.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,l.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=0;if(a.options.stacked){var n=this.chart,r=n.data.datasets,s=r[t].data[e];if(0>s)for(var l=0;t>l;l++){var h=r[l],d=n.getDatasetMeta(l);d.bar&&d.yAxisID===a.id&&n.isDatasetVisible(l)&&(o+=h.data[e]<0?h.data[e]:0)}else for(var c=0;t>c;c++){var u=r[c],f=n.getDatasetMeta(c);f.bar&&f.yAxisID===a.id&&n.isDatasetVisible(c)&&(o+=u.data[e]>0?u.data[e]:0)}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var n=e*a.options.categoryPercentage,r=(e-e*a.options.categoryPercentage)/2,s=n/o;if(a.ticks.length!==this.chart.data.labels.length){var l=a.ticks.length/this.chart.data.labels.length;s*=l}var h=s*a.options.barPercentage,d=s-s*a.options.barPercentage;return{datasetCount:o,tickWidth:e,categoryWidth:n,categorySpacing:r,fullBarWidth:s,barWidth:h,barSpacing:d}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryWidth:i.barWidth},getBarIndex:function(t){var e,i,a=0;for(i=0;t>i;++i)e=this.chart.getDatasetMeta(i),e.bar&&this.chart.isDatasetVisible(i)&&++a;return a},calculateBarX:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getBarIndex(e),n=this.getRuler(t),r=a.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?n.tickWidth/2:0,a.options.stacked?r+n.categoryWidth/2+n.categorySpacing:r+n.barWidth/2+n.categorySpacing+n.barWidth*o+n.barSpacing/2+n.barSpacing*o},calculateBarY:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getDataset().data[t];if(a.options.stacked){for(var n=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.yAxisID===a.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:n+=l.data[t]||0)}return 0>o?a.getPixelForValue(r+o):a.getPixelForValue(n+o)}return a.getPixelForValue(o)},draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){var a=this.getDataset().data[e];null===a||void 0===a||isNaN(a)||t.transition(i).draw()},this)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor?o.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model,r=this.chart.options.elements.rectangle;n.backgroundColor=o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,a,r.backgroundColor),n.borderColor=o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(i.borderColor,a,r.borderColor),n.borderWidth=o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,a,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,i,a,o){var n=this.getMeta(),r=this.getScaleForId(n.xAxisID),s=this.getScaleForId(n.yAxisID),l=r.getBasePixel(),h=t.custom||{},d=this.getDataset(),c=this.chart.options.elements.rectangle;
e.extend(t,{_xScale:r,_yScale:s,_datasetIndex:this.index,_index:i,_model:{x:a?l:this.calculateBarX(i,this.index),y:this.calculateBarY(i,this.index),label:this.chart.data.labels[i],datasetLabel:d.label,base:a?l:this.calculateBarBase(this.index,i),height:this.calculateBarHeight(i),backgroundColor:h.backgroundColor?h.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,i,c.backgroundColor),borderSkipped:h.borderSkipped?h.borderSkipped:c.borderSkipped,borderColor:h.borderColor?h.borderColor:e.getValueAtIndexOrDefault(d.borderColor,i,c.borderColor),borderWidth:h.borderWidth?h.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,i,c.borderWidth)},draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,a=i.height/2,o=i.y-a,n=i.y+a,r=i.base-(i.base-i.x),s=i.borderWidth/2;i.borderWidth&&(o+=s,n-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[i.base,n],[i.base,o],[r,o],[r,n]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),i.borderWidth&&e.stroke()},inRange:function(t,e){var i=this._view,a=!1;return i&&(a=i.x<i.base?e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.x&&t<=i.base:e>=i.y-i.height/2&&e<=i.y+i.height/2&&t>=i.base&&t<=i.x),a}}),t.pivot()},calculateBarBase:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=0;if(a.options.stacked){var n=this.chart.data.datasets[t].data[e];if(0>n)for(var r=0;t>r;r++){var s=this.chart.data.datasets[r],l=this.chart.getDatasetMeta(r);l.bar&&l.xAxisID===a.id&&this.chart.isDatasetVisible(r)&&(o+=s.data[e]<0?s.data[e]:0)}else for(var h=0;t>h;h++){var d=this.chart.data.datasets[h],c=this.chart.getDatasetMeta(h);c.bar&&c.xAxisID===a.id&&this.chart.isDatasetVisible(h)&&(o+=d.data[e]>0?d.data[e]:0)}return a.getPixelForValue(o)}return a.getBasePixel()},getRuler:function(t){var e,i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getBarCount();e="category"===a.options.type?a.getPixelForTick(t+1)-a.getPixelForTick(t):a.width/a.ticks.length;var n=e*a.options.categoryPercentage,r=(e-e*a.options.categoryPercentage)/2,s=n/o;if(a.ticks.length!==this.chart.data.labels.length){var l=a.ticks.length/this.chart.data.labels.length;s*=l}var h=s*a.options.barPercentage,d=s-s*a.options.barPercentage;return{datasetCount:o,tickHeight:e,categoryHeight:n,categorySpacing:r,fullBarHeight:s,barHeight:h,barSpacing:d}},calculateBarHeight:function(t){var e=this.getScaleForId(this.getMeta().yAxisID),i=this.getRuler(t);return e.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.xAxisID),o=this.getDataset().data[t];if(a.options.stacked){for(var n=0,r=0,s=0;e>s;s++){var l=this.chart.data.datasets[s],h=this.chart.getDatasetMeta(s);h.bar&&h.xAxisID===a.id&&this.chart.isDatasetVisible(s)&&(l.data[t]<0?r+=l.data[t]||0:n+=l.data[t]||0)}return 0>o?a.getPixelForValue(r+o):a.getPixelForValue(n+o)}return a.getPixelForValue(o)},calculateBarY:function(t,e){var i=this.getMeta(),a=this.getScaleForId(i.yAxisID),o=this.getBarIndex(e),n=this.getRuler(t),r=a.getPixelForValue(null,t,e,this.chart.isCombo);return r-=this.chart.isCombo?n.tickHeight/2:0,a.options.stacked?r+n.categoryHeight/2+n.categorySpacing:r+n.barHeight/2+n.categorySpacing+n.barHeight*o+n.barSpacing/2+n.barSpacing*o}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",a=e.datasets[t.datasetIndex].data[t.index];return i+": ("+a.x+", "+a.y+", "+a.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var i=this.getMeta(),a=i.data;e.each(a,function(e,i){this.updateElement(e,i,t)},this)},updateElement:function(t,i,a){var o=this.getMeta(),n=this.getScaleForId(o.xAxisID),r=this.getScaleForId(o.yAxisID),s=t.custom||{},l=this.getDataset(),h=l.data[i],d=this.chart.options.elements.point;e.extend(t,{_xScale:n,_yScale:r,_datasetIndex:this.index,_index:i,_model:{x:a?n.getPixelForDecimal(.5):n.getPixelForValue(h,i,this.index,this.chart.isCombo),y:a?r.getBasePixel():r.getPixelForValue(h,i,this.index),radius:a?0:s.radius?s.radius:this.getRadius(h),backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(l.backgroundColor,i,d.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(l.borderColor,i,d.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(l.borderWidth,i,d.borderWidth),hitRadius:s.hitRadius?s.hitRadius:e.getValueAtIndexOrDefault(l.hitRadius,i,d.hitRadius)}});var c=t._model;c.skip=s.skip?s.skip:isNaN(c.x)||isNaN(c.y),t.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(i.hoverRadius,a,this.chart.options.elements.point.hoverRadius)+this.getRadius(this.getDataset().data[t._index]),n.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor?o.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model,r=this.chart.options.elements.point;n.radius=o.radius?o.radius:this.getRadius(i.data[t._index]),n.backgroundColor=o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,a,r.backgroundColor),n.borderColor=o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(i.borderColor,a,r.borderColor),n.borderWidth=o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,a,r.borderWidth)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults;i.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,a=i.datasets,o=i.labels;if(a.length)for(var n=0;n<a[0].data.length;++n)e.push('<li><span style="background-color:'+a[0].backgroundColor[n]+'"></span>'),o[n]&&e.push(o[n]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var n=t.getDatasetMeta(0),r=i.datasets[0],s=n.data[o],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,o,d.backgroundColor),u=l.borderColor?l.borderColor:h(r.borderColor,o,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,o,d.borderWidth);return{text:a,fillStyle:c,strokeStyle:u,lineWidth:f,hidden:isNaN(r.data[o])||n.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,a,o,n=e.index,r=this.chart;for(i=0,a=(r.data.datasets||[]).length;a>i;++i)o=r.getDatasetMeta(i),o.data[n].hidden=!o.data[n].hidden;r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},i.pie=e.clone(i.doughnut),e.extend(i.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,i=0;t>i;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this,a=i.chart,o=a.chartArea,n=a.options,r=n.elements.arc,s=o.right-o.left-r.borderWidth,l=o.bottom-o.top-r.borderWidth,h=Math.min(s,l),d={x:0,y:0},c=i.getMeta(),u=n.cutoutPercentage,f=n.circumference;if(f<2*Math.PI){var g=n.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},b={x:Math.cos(p),y:Math.sin(p)},v=0>=g&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=u/100,C={x:y?-1:Math.min(m.x*(m.x<0?1:S),b.x*(b.x<0?1:S)),y:k?-1:Math.min(m.y*(m.y<0?1:S),b.y*(b.y<0?1:S))},w={x:v?1:Math.max(m.x*(m.x>0?1:S),b.x*(b.x>0?1:S)),y:x?1:Math.max(m.y*(m.y>0?1:S),b.y*(b.y>0?1:S))},M={width:.5*(w.x-C.x),height:.5*(w.y-C.y)};h=Math.min(s/M.width,l/M.height),d={x:(w.x+C.x)*-.5,y:(w.y+C.y)*-.5}}a.outerRadius=Math.max(h/2,0),a.innerRadius=Math.max(u?a.outerRadius/100*u:1,0),a.radiusLength=(a.outerRadius-a.innerRadius)/a.getVisibleDatasetCount(),a.offsetX=d.x*a.outerRadius,a.offsetY=d.y*a.outerRadius,c.total=i.calculateTotal(),i.outerRadius=a.outerRadius-a.radiusLength*i.getRingIndex(i.index),i.innerRadius=i.outerRadius-a.radiusLength,e.each(c.data,function(e,a){i.updateElement(e,a,t)})},updateElement:function(t,i,a){var o=this,n=o.chart,r=n.chartArea,s=n.options,l=s.animation,h=s.elements.arc,d=(r.left+r.right)/2,c=(r.top+r.bottom)/2,u=s.rotation,f=s.rotation,g=o.getDataset(),p=a&&l.animateRotate?0:t.hidden?0:o.calculateCircumference(g.data[i])*(s.circumference/(2*Math.PI)),m=a&&l.animateScale?0:o.innerRadius,b=a&&l.animateScale?0:o.outerRadius,v=t.custom||{},x=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:o.index,_index:i,_model:{x:d+n.offsetX,y:c+n.offsetY,startAngle:u,endAngle:f,circumference:p,outerRadius:b,innerRadius:m,label:x(g.label,i,n.data.labels[i])}});var y=t._model;y.backgroundColor=v.backgroundColor?v.backgroundColor:x(g.backgroundColor,i,h.backgroundColor),y.hoverBackgroundColor=v.hoverBackgroundColor?v.hoverBackgroundColor:x(g.hoverBackgroundColor,i,h.hoverBackgroundColor),y.borderWidth=v.borderWidth?v.borderWidth:x(g.borderWidth,i,h.borderWidth),y.borderColor=v.borderColor?v.borderColor:x(g.borderColor,i,h.borderColor),a&&l.animateRotate||(0===i?y.startAngle=s.rotation:y.startAngle=o.getMeta().data[i-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,i=this.getDataset(),a=this.getMeta(),o=0;return e.each(a.data,function(e,a){t=i.data[a],isNaN(t)||e.hidden||(o+=Math.abs(t))}),o},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(e){var i=this,a=i.chart.options;t.DatasetController.prototype.addElementAndReset.call(i,e),a.showLines&&0!==a.elements.line.tension&&i.updateBezierControlPoints()},update:function(t){var i,a,o,n,r=this,s=r.getMeta(),l=s.dataset,h=s.data||[],d=r.chart.options,c=d.elements.line,u=r.getScaleForId(s.yAxisID);for(d.showLines&&(o=r.getDataset(),n=l.custom||{},void 0!==o.tension&&void 0===o.lineTension&&(o.lineTension=o.tension),l._scale=u,l._datasetIndex=r.index,l._children=h,l._model={tension:n.tension?n.tension:e.getValueOrDefault(o.lineTension,c.tension),backgroundColor:n.backgroundColor?n.backgroundColor:o.backgroundColor||c.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:o.borderWidth||c.borderWidth,borderColor:n.borderColor?n.borderColor:o.borderColor||c.borderColor,borderCapStyle:n.borderCapStyle?n.borderCapStyle:o.borderCapStyle||c.borderCapStyle,borderDash:n.borderDash?n.borderDash:o.borderDash||c.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:o.borderDashOffset||c.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:o.borderJoinStyle||c.borderJoinStyle,fill:n.fill?n.fill:void 0!==o.fill?o.fill:c.fill,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePixel()},l.pivot()),i=0,a=h.length;a>i;++i)r.updateElement(h[i],i,t);d.showLines&&0!==c.tension&&r.updateBezierControlPoints()},getPointBackgroundColor:function(t,i){var a=this.chart.options.elements.point.backgroundColor,o=this.getDataset(),n=t.custom||{};return n.backgroundColor?a=n.backgroundColor:o.pointBackgroundColor?a=e.getValueAtIndexOrDefault(o.pointBackgroundColor,i,a):o.backgroundColor&&(a=o.backgroundColor),a},getPointBorderColor:function(t,i){var a=this.chart.options.elements.point.borderColor,o=this.getDataset(),n=t.custom||{};return n.borderColor?a=n.borderColor:o.pointBorderColor?a=e.getValueAtIndexOrDefault(o.pointBorderColor,i,a):o.borderColor&&(a=o.borderColor),a},getPointBorderWidth:function(t,i){var a=this.chart.options.elements.point.borderWidth,o=this.getDataset(),n=t.custom||{};return n.borderWidth?a=n.borderWidth:o.pointBorderWidth?a=e.getValueAtIndexOrDefault(o.pointBorderWidth,i,a):o.borderWidth&&(a=o.borderWidth),a},updateElement:function(t,i,a){var o,n,r=this,s=r.getMeta(),l=t.custom||{},h=r.getDataset(),d=r.index,c=h.data[i],u=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),g=r.chart.options.elements.point;void 0!==h.radius&&void 0===h.pointRadius&&(h.pointRadius=h.radius),void 0!==h.hitRadius&&void 0===h.pointHitRadius&&(h.pointHitRadius=h.hitRadius),o=f.getPixelForValue(c,i,d,r.chart.isCombo),n=a?u.getBasePixel():r.calculatePointY(c,i,d,r.chart.isCombo),t._xScale=f,t._yScale=u,t._datasetIndex=d,t._index=i,t._model={x:o,y:n,skip:l.skip||isNaN(o)||isNaN(n),radius:l.radius||e.getValueAtIndexOrDefault(h.pointRadius,i,g.radius),pointStyle:l.pointStyle||e.getValueAtIndexOrDefault(h.pointStyle,i,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,i),borderColor:r.getPointBorderColor(t,i),borderWidth:r.getPointBorderWidth(t,i),tension:s.dataset._model?s.dataset._model.tension:0,hitRadius:l.hitRadius||e.getValueAtIndexOrDefault(h.pointHitRadius,i,g.hitRadius)}},calculatePointY:function(t,e,i,a){var o,n,r,s=this,l=s.chart,h=s.getMeta(),d=s.getScaleForId(h.yAxisID),c=0,u=0;if(d.options.stacked){for(o=0;i>o;o++)n=l.data.datasets[o],r=l.getDatasetMeta(o),"line"===r.type&&l.isDatasetVisible(o)&&(n.data[e]<0?u+=n.data[e]||0:c+=n.data[e]||0);return 0>t?d.getPixelForValue(u+t):d.getPixelForValue(c+t)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){var t,i,a,o,n,r=this.getMeta(),s=this.chart.chartArea,l=r.data||[];for(t=0,i=l.length;i>t;++t)a=l[t],o=a._model,n=e.splineCurve(e.previousItem(l,t)._model,o,e.nextItem(l,t)._model,r.dataset._model.tension),o.controlPointPreviousX=Math.max(Math.min(n.previous.x,s.right),s.left),o.controlPointPreviousY=Math.max(Math.min(n.previous.y,s.bottom),s.top),o.controlPointNextX=Math.max(Math.min(n.next.x,s.right),s.left),o.controlPointNextY=Math.max(Math.min(n.next.y,s.bottom),s.top),a.pivot()},draw:function(t){var e,i,a=this.getMeta(),o=a.data||[],n=t||1;for(e=0,i=o.length;i>e;++e)o[e].transition(n);for(this.chart.options.showLines&&a.dataset.transition(n).draw(),e=0,i=o.length;i>e;++e)o[e].draw()},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=t._model;n.radius=o.hoverRadius||e.getValueAtIndexOrDefault(i.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),n.backgroundColor=o.hoverBackgroundColor||e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,a,e.getHoverColor(n.backgroundColor)),n.borderColor=o.hoverBorderColor||e.getValueAtIndexOrDefault(i.pointHoverBorderColor,a,e.getHoverColor(n.borderColor)),n.borderWidth=o.hoverBorderWidth||e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,a,n.borderWidth)},removeHoverStyle:function(t){var i=this,a=i.chart.data.datasets[t._datasetIndex],o=t._index,n=t.custom||{},r=t._model;void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),r.radius=n.radius||e.getValueAtIndexOrDefault(a.pointRadius,o,i.chart.options.elements.point.radius),r.backgroundColor=i.getPointBackgroundColor(t,o),r.borderColor=i.getPointBorderColor(t,o),r.borderWidth=i.getPointBorderWidth(t,o)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,a=i.datasets,o=i.labels;if(a.length)for(var n=0;n<a[0].data.length;++n)e.push('<li><span style="background-color:'+a[0].backgroundColor[n]+'">'),o[n]&&e.push(o[n]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(a,o){var n=t.getDatasetMeta(0),r=i.datasets[0],s=n.data[o],l=s.custom||{},h=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:h(r.backgroundColor,o,d.backgroundColor),u=l.borderColor?l.borderColor:h(r.borderColor,o,d.borderColor),f=l.borderWidth?l.borderWidth:h(r.borderWidth,o,d.borderWidth);return{text:a,fillStyle:c,strokeStyle:u,lineWidth:f,hidden:isNaN(r.data[o])||n.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,a,o,n=e.index,r=this.chart;for(i=0,a=(r.data.datasets||[]).length;a>i;++i)o=r.getDatasetMeta(i),o.data[n].hidden=!o.data[n].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var i=this,a=i.chart,o=a.chartArea,n=this.getMeta(),r=a.options,s=r.elements.arc,l=Math.min(o.right-o.left,o.bottom-o.top);a.outerRadius=Math.max((l-s.borderWidth/2)/2,0),a.innerRadius=Math.max(r.cutoutPercentage?a.outerRadius/100*r.cutoutPercentage:1,0),a.radiusLength=(a.outerRadius-a.innerRadius)/a.getVisibleDatasetCount(),i.outerRadius=a.outerRadius-a.radiusLength*i.index,i.innerRadius=i.outerRadius-a.radiusLength,n.count=i.countVisibleElements(),e.each(n.data,function(e,a){i.updateElement(e,a,t)})},updateElement:function(t,i,a){for(var o=this,n=o.chart,r=n.chartArea,s=o.getDataset(),l=n.options,h=l.animation,d=l.elements.arc,c=t.custom||{},u=n.scale,f=e.getValueAtIndexOrDefault,g=n.data.labels,p=o.calculateCircumference(s.data[i]),m=(r.left+r.right)/2,b=(r.top+r.bottom)/2,v=0,x=o.getMeta(),y=0;i>y;++y)isNaN(s.data[y])||x.data[y].hidden||++v;var k=t.hidden?0:u.getDistanceFromCenterForValue(s.data[i]),S=-.5*Math.PI+p*v,C=S+(t.hidden?0:p),w={x:m,y:b,innerRadius:0,outerRadius:h.animateScale?0:u.getDistanceFromCenterForValue(s.data[i]),startAngle:h.animateRotate?Math.PI*-.5:S,endAngle:h.animateRotate?Math.PI*-.5:C,backgroundColor:c.backgroundColor?c.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:c.borderWidth?c.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:c.borderColor?c.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])};e.extend(t,{_datasetIndex:o.index,_index:i,_scale:u,_model:a?w:{x:m,y:b,innerRadius:0,outerRadius:k,startAngle:S,endAngle:C,backgroundColor:c.backgroundColor?c.backgroundColor:f(s.backgroundColor,i,d.backgroundColor),borderWidth:c.borderWidth?c.borderWidth:f(s.borderWidth,i,d.borderWidth),borderColor:c.borderColor?c.borderColor:f(s.borderColor,i,d.borderColor),label:f(g,i,g[i])}}),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||a++}),a},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var i=this.getMeta(),a=i.dataset,o=i.data,n=a.custom||{},r=this.getDataset(),s=this.chart.options.elements.line,l=this.chart.scale;void 0!==r.tension&&void 0===r.lineTension&&(r.lineTension=r.tension),e.extend(i.dataset,{_datasetIndex:this.index,_children:o,_loop:!0,_model:{tension:n.tension?n.tension:e.getValueOrDefault(r.lineTension,s.tension),backgroundColor:n.backgroundColor?n.backgroundColor:r.backgroundColor||s.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:r.borderWidth||s.borderWidth,borderColor:n.borderColor?n.borderColor:r.borderColor||s.borderColor,fill:n.fill?n.fill:void 0!==r.fill?r.fill:s.fill,borderCapStyle:n.borderCapStyle?n.borderCapStyle:r.borderCapStyle||s.borderCapStyle,borderDash:n.borderDash?n.borderDash:r.borderDash||s.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:r.borderDashOffset||s.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:r.borderJoinStyle||s.borderJoinStyle,scaleTop:l.top,scaleBottom:l.bottom,scaleZero:l.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){this.updateElement(e,i,t)},this),this.updateBezierControlPoints()},updateElement:function(t,i,a){var o=t.custom||{},n=this.getDataset(),r=this.chart.scale,s=this.chart.options.elements.point,l=r.getPointPositionForValue(i,n.data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:r,_model:{x:a?r.xCenter:l.x,y:a?r.yCenter:l.y,tension:o.tension?o.tension:e.getValueOrDefault(n.tension,this.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(n.pointRadius,i,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,i,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,i,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,i,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(n.pointStyle,i,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(n.hitRadius,i,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,i=this.getMeta();e.each(i.data,function(a,o){var n=a._model,r=e.splineCurve(e.previousItem(i.data,o,!0)._model,n,e.nextItem(i.data,o,!0)._model,n.tension);n.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),n.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),n.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),n.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),a.pivot()},this)},draw:function(t){var i=this.getMeta(),a=t||1;e.each(i.data,function(t,e){t.transition(a)}),i.dataset.transition(a).draw(),e.each(i.data,function(t){t.draw()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t.custom||{},o=t._index,n=t._model;n.radius=a.hoverRadius?a.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,o,this.chart.options.elements.point.hoverRadius),n.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,o,e.getHoverColor(n.backgroundColor)),n.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,o,e.getHoverColor(n.borderColor)),n.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,o,n.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t.custom||{},o=t._index,n=t._model,r=this.chart.options.elements.point;n.radius=a.radius?a.radius:e.getValueAtIndexOrDefault(i.radius,o,r.radius),n.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(i.pointBackgroundColor,o,r.backgroundColor),n.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(i.pointBorderColor,o,r.borderColor),n.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(i.pointBorderWidth,o,r.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,a){a||(t.animating=!0);for(var o=0;o<this.animations.length;++o)if(this.animations[o].chartInstance===t)return void(this.animations[o].animationObject=e);this.animations.push({chartInstance:t,animationObject:e}),1===this.animations.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1);for(var i=0;i<this.animations.length;)null===this.animations[i].animationObject.currentStep&&(this.animations[i].animationObject.currentStep=0),this.animations[i].animationObject.currentStep+=1+e,this.animations[i].animationObject.currentStep>this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.currentStep=this.animations[i].animationObject.numSteps),this.animations[i].animationObject.render(this.animations[i].chartInstance,this.animations[i].animationObject),this.animations[i].animationObject.onAnimationProgress&&this.animations[i].animationObject.onAnimationProgress.call&&this.animations[i].animationObject.onAnimationProgress.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].animationObject.currentStep===this.animations[i].animationObject.numSteps?(this.animations[i].animationObject.onAnimationComplete&&this.animations[i].animationObject.onAnimationComplete.call&&this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance,this.animations[i]),this.animations[i].chartInstance.animating=!1,this.animations.splice(i,1)):++i;var a=Date.now(),o=(a-t)/this.frameDuration;this.dropFrames+=o,this.animations.length>0&&this.requestAnimationFrame()}}}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(i){return this.chart=i,this.config=i.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){return t.pluginService.notifyPlugins("beforeInit",[this]),this.bindEvents(),this.ensureScalesHaveIDs(),this.buildOrUpdateControllers(),this.buildScales(),this.buildSurroundingItems(),this.updateLayout(),this.resetElements(),this.initToolTip(),this.update(),t.pluginService.notifyPlugins("afterInit",[this]),this},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var i=this.chart.canvas,a=e.getMaximumWidth(this.chart.canvas),o=this.options.maintainAspectRatio&&isNaN(this.chart.aspectRatio)===!1&&isFinite(this.chart.aspectRatio)&&0!==this.chart.aspectRatio?a/this.chart.aspectRatio:e.getMaximumHeight(this.chart.canvas),n=this.chart.width!==a||this.chart.height!==o;return n?(i.width=this.chart.width=a,i.height=this.chart.height=o,e.retinaScale(this.chart),t||(this.stop(),this.update(this.options.responsiveAnimationDuration)),this):this},ensureScalesHaveIDs:function(){var t=this.options,i=t.scales||{},a=t.scale;e.each(i.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(i.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),a&&(a.id=a.id||"scale")},buildScales:function(){var i=this,a=i.options,o=i.scales={},n=[];a.scales&&(n=n.concat((a.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(a.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),a.scale&&n.push({options:a.scale,dtype:"radialLinear",isDefault:!0}),e.each(n,function(a,n){var r=a.options,s=e.getValueOrDefault(r.type,a.dtype),l=t.scaleService.getScaleConstructor(s);if(l){var h=new l({id:r.id,options:r,ctx:i.chart.ctx,chart:i});o[h.id]=h,a.isDefault&&(i.scale=h)}}),t.scaleService.addScalesToLayout(this)},buildSurroundingItems:function(){this.options.title&&(this.titleBlock=new t.Title({ctx:this.chart.ctx,options:this.options.title,chart:this}),t.layoutService.addBox(this,this.titleBlock)),this.options.legend&&(this.legend=new t.Legend({ctx:this.chart.ctx,options:this.options.legend,chart:this}),t.layoutService.addBox(this,this.legend))},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var i=[],a=[];if(e.each(this.data.datasets,function(e,o){var n=this.getDatasetMeta(o);n.type||(n.type=e.type||this.config.type),i.push(n.type),n.controller?n.controller.updateIndex(o):(n.controller=new t.controllers[n.type](this,o),a.push(n.controller))},this),i.length>1)for(var o=1;o<i.length;o++)if(i[o]!==i[o-1]){this.isCombo=!0;break}return a},resetElements:function(){e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.reset()},this)},update:function(i,a){t.pluginService.notifyPlugins("beforeUpdate",[this]),this.tooltip._data=this.data;var o=this.buildOrUpdateControllers();e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.buildOrUpdateElements()},this),t.layoutService.update(this,this.chart.width,this.chart.height),t.pluginService.notifyPlugins("afterScaleUpdate",[this]),e.each(o,function(t){t.reset()}),e.each(this.data.datasets,function(t,e){this.getDatasetMeta(e).controller.update()},this),t.pluginService.notifyPlugins("afterUpdate",[this]),this.render(i,a)},render:function(i,a){t.pluginService.notifyPlugins("beforeRender",[this]);var o=this.options.animation;if(o&&("undefined"!=typeof i&&0!==i||"undefined"==typeof i&&0!==o.duration)){var n=new t.Animation;n.numSteps=(i||o.duration)/16.66,n.easing=o.easing,n.render=function(t,i){var a=e.easingEffects[i.easing],o=i.currentStep/i.numSteps,n=a(o);t.draw(n,o,i.currentStep)},n.onAnimationProgress=o.onProgress,n.onAnimationComplete=o.onComplete,t.animationService.addAnimation(this,n,i,a)}else this.draw(),o&&o.onComplete&&o.onComplete.call&&o.onComplete.call(this);return this},draw:function(i){var a=i||1;this.clear(),t.pluginService.notifyPlugins("beforeDraw",[this,a]),e.each(this.boxes,function(t){t.draw(this.chartArea)},this),this.scale&&this.scale.draw();var o=this.chart.ctx;o.save(),o.beginPath(),o.rect(this.chartArea.left,this.chartArea.top,this.chartArea.right-this.chartArea.left,this.chartArea.bottom-this.chartArea.top),o.clip(),e.each(this.data.datasets,function(t,e){this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.draw(i)},this,!0),o.restore(),this.tooltip.transition(a).draw(),t.pluginService.notifyPlugins("afterDraw",[this,a])},getElementAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[];return e.each(this.data.datasets,function(t,o){if(this.isDatasetVisible(o)){var n=this.getDatasetMeta(o);e.each(n.data,function(t,e){
return t.inRange(i.x,i.y)?(a.push(t),a):void 0})}},this),a},getElementsAtEvent:function(t){var i=e.getRelativePosition(t,this.chart),a=[],o=function(){if(this.data.datasets)for(var t=0;t<this.data.datasets.length;t++){var e=this.getDatasetMeta(t);if(this.isDatasetVisible(t))for(var a=0;a<e.data.length;a++)if(e.data[a].inRange(i.x,i.y))return e.data[a]}}.call(this);return o?(e.each(this.data.datasets,function(t,e){if(this.isDatasetVisible(e)){var i=this.getDatasetMeta(e);a.push(i.data[o._index])}},this),a):a},getElementsAtEventForMode:function(t,e){var i=this;switch(e){case"single":return i.getElementAtEvent(t);case"label":return i.getElementsAtEvent(t);case"dataset":return i.getDatasetAtEvent(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;i>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){this.clear(),e.unbindEvents(this,this.events),e.removeResizeListener(this.chart.canvas.parentNode);var i=this.chart.canvas;i.width=this.chart.width,i.height=this.chart.height,void 0!==this.chart.originalDevicePixelRatio&&this.chart.ctx.scale(1/this.chart.originalDevicePixelRatio,1/this.chart.originalDevicePixelRatio),i.style.width=this.chart.originalCanvasStyleWidth,i.style.height=this.chart.originalCanvasStyleHeight,t.pluginService.notifyPlugins("destroy",[this]),delete t.instances[this.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this.chart,_chartInstance:this,_data:this.data,_options:this.options},this)},bindEvents:function(){e.bindEvents(this,this.options.events,function(t){this.eventHandler(t)})},updateHoverStyle:function(t,e,i){var a,o,n,r=i?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":break;default:return}for(o=0,n=t.length;n>o;++o)a=t[o],a&&this.getDatasetMeta(a._datasetIndex).controller[r](a)},eventHandler:function(t){var i=this,a=i.tooltip,o=i.options||{},n=o.hover,r=o.tooltips;return i.lastActive=i.lastActive||[],i.lastTooltipActive=i.lastTooltipActive||[],"mouseout"===t.type?(i.active=[],i.tooltipActive=[]):(i.active=i.getElementsAtEventForMode(t,n.mode),i.tooltipActive=i.getElementsAtEventForMode(t,r.mode)),n.onHover&&n.onHover.call(i,i.active),("mouseup"===t.type||"click"===t.type)&&(o.onClick&&o.onClick.call(i,t,i.active),i.legend&&i.legend.handleEvent&&i.legend.handleEvent(t)),i.lastActive.length&&i.updateHoverStyle(i.lastActive,n.mode,!1),i.active.length&&n.mode&&i.updateHoverStyle(i.active,n.mode,!0),(r.enabled||r.custom)&&(a.initialize(),a._active=i.tooltipActive,a.update(!0)),a.pivot(),i.animating||e.arrayEquals(i.active,i.lastActive)&&e.arrayEquals(i.tooltipActive,i.lastTooltipActive)||(i.stop(),(r.enabled||r.custom)&&a.update(!0),i.render(n.animationDuration,!0)),i.lastActive=i.active,i.lastTooltipActive=i.tooltipActive,i}})}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,i=e.dataElementType;return i&&new i({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,i=this,a=i.getMeta(),o=i.getDataset().data||[],n=a.data;for(t=0,e=o.length;e>t;++t)n[t]=n[t]||i.createMetaData(a,t);a.dataset=a.dataset||i.createMetaDataset()},addElementAndReset:function(t){var e=this,i=e.createMetaData(t);e.getMeta().data.splice(t,0,i),e.updateElement(i,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,i=this.getDataset().data.length,a=e.length;if(a>i)e.splice(i,a-i);else if(i>a)for(var o=a;i>o;++o)this.addElementAndReset(o)},update:i,draw:function(t){var i=t||1;e.each(this.getMeta().data,function(t,e){t.transition(i).draw()})},removeHoverStyle:function(t,i){var a=this.chart.data.datasets[t._datasetIndex],o=t._index,n=t.custom||{},r=e.getValueAtIndexOrDefault,s=(e.color,t._model);s.backgroundColor=n.backgroundColor?n.backgroundColor:r(a.backgroundColor,o,i.backgroundColor),s.borderColor=n.borderColor?n.borderColor:r(a.borderColor,o,i.borderColor),s.borderWidth=n.borderWidth?n.borderWidth:r(a.borderWidth,o,i.borderWidth)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},n=e.getValueAtIndexOrDefault,r=(e.color,e.getHoverColor),s=t._model;s.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:n(i.hoverBackgroundColor,a,r(s.backgroundColor)),s.borderColor=o.hoverBorderColor?o.hoverBorderColor:n(i.hoverBorderColor,a,r(s.borderColor)),s.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:n(i.hoverBorderWidth,a,s.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start=e.clone(this._view),this},transition:function(t){return this._view||(this._view=e.clone(this._model)),1===t?(this._view=this._model,this._start=null,this):(this._start||this.pivot(),e.each(this._model,function(i,a){if("_"===a[0]);else if(this._view.hasOwnProperty(a))if(i===this._view[a]);else if("string"==typeof i)try{var o=e.color(this._model[a]).mix(e.color(this._start[a]),t);this._view[a]=o.rgbString()}catch(n){this._view[a]=i}else if("number"==typeof i){var r=void 0!==this._start[a]&&isNaN(this._start[a])===!1?this._start[a]:0;this._view[a]=(this._model[a]-r)*t+r}else this._view[a]=i;else"number"!=typeof i||isNaN(this._view[a])?this._view[a]=i:this._view[a]=i*t},this),this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var a=t("chartjs-color");e.exports=function(t){function e(t,e,i){var a;return"string"==typeof t?(a=parseInt(t,10),-1!=t.indexOf("%")&&(a=a/100*e.parentNode[i])):a=t,a}function i(t){return void 0!==t&&null!==t&&"none"!==t}function o(t,a,o){var n=document.defaultView,r=t.parentNode,s=n.getComputedStyle(t)[a],l=n.getComputedStyle(r)[a],h=i(s),d=i(l),c=Number.POSITIVE_INFINITY;return h||d?Math.min(h?e(s,t,o):c,d?e(l,r,o):c):"none"}var n=t.helpers={};n.each=function(t,e,i,a){var o,r;if(n.isArray(t))if(r=t.length,a)for(o=r-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;r>o;o++)e.call(i,t[o],o);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,o=0;r>o;o++)e.call(i,t[s[o]],s[o])}},n.clone=function(t){var e={};return n.each(t,function(t,i){n.isArray(t)?e[i]=t.slice(0):"object"==typeof t&&null!==t?e[i]=n.clone(t):e[i]=t}),e},n.extend=function(t){for(var e=arguments.length,i=[],a=1;e>a;a++)i.push(arguments[a]);return n.each(i,function(e){n.each(e,function(e,i){t[i]=e})}),t},n.configMerge=function(e){var i=n.clone(e);return n.each(Array.prototype.slice.call(arguments,1),function(e){n.each(e,function(e,a){if("scales"===a)i[a]=n.scaleMerge(i.hasOwnProperty(a)?i[a]:{},e);else if("scale"===a)i[a]=n.configMerge(i.hasOwnProperty(a)?i[a]:{},t.scaleService.getScaleDefaults(e.type),e);else if(i.hasOwnProperty(a)&&n.isArray(i[a])&&n.isArray(e)){var o=i[a];n.each(e,function(t,e){e<o.length?"object"==typeof o[e]&&null!==o[e]&&"object"==typeof t&&null!==t?o[e]=n.configMerge(o[e],t):o[e]=t:o.push(t)})}else i.hasOwnProperty(a)&&"object"==typeof i[a]&&null!==i[a]&&"object"==typeof e?i[a]=n.configMerge(i[a],e):i[a]=e})}),i},n.extendDeep=function(t){function e(t){return n.each(arguments,function(i){i!==t&&n.each(i,function(i,a){t[a]&&t[a].constructor&&t[a].constructor===Object?e(t[a],i):t[a]=i})}),t}return e.apply(this,arguments)},n.scaleMerge=function(e,i){var a=n.clone(e);return n.each(i,function(e,i){"xAxes"===i||"yAxes"===i?a.hasOwnProperty(i)?n.each(e,function(e,o){var r=n.getValueOrDefault(e.type,"xAxes"===i?"category":"linear"),s=t.scaleService.getScaleDefaults(r);o>=a[i].length||!a[i][o].type?a[i].push(n.configMerge(s,e)):e.type&&e.type!==a[i][o].type?a[i][o]=n.configMerge(a[i][o],s,e):a[i][o]=n.configMerge(a[i][o],e)}):(a[i]=[],n.each(e,function(e){var o=n.getValueOrDefault(e.type,"xAxes"===i?"category":"linear");a[i].push(n.configMerge(t.scaleService.getScaleDefaults(o),e))})):a.hasOwnProperty(i)&&"object"==typeof a[i]&&null!==a[i]&&"object"==typeof e?a[i]=n.configMerge(a[i],e):a[i]=e}),a},n.getValueAtIndexOrDefault=function(t,e,i){return void 0===t||null===t?i:n.isArray(t)?e<t.length?t[e]:i:t},n.getValueOrDefault=function(t,e){return void 0===t?e:t},n.indexOf=function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},n.where=function(t,e){if(n.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return n.each(t,function(t){e(t)&&i.push(t)}),i},n.findIndex=function(t,e,i){var a=-1;if(Array.prototype.findIndex)a=t.findIndex(e,i);else for(var o=0;o<t.length;++o)if(i=void 0!==i?i:t,e.call(i,t[o],o,t)){a=o;break}return a},n.findNextWhere=function(t,e,i){(void 0===i||null===i)&&(i=-1);for(var a=i+1;a<t.length;a++){var o=t[a];if(e(o))return o}},n.findPreviousWhere=function(t,e,i){(void 0===i||null===i)&&(i=t.length);for(var a=i-1;a>=0;a--){var o=t[a];if(e(o))return o}},n.inherits=function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},a=function(){this.constructor=i};return a.prototype=e.prototype,i.prototype=new a,i.extend=n.inherits,t&&n.extend(i.prototype,t),i.__super__=e.prototype,i},n.noop=function(){},n.uid=function(){var t=0;return function(){return t++}}(),n.warn=function(t){console&&"function"==typeof console.warn&&console.warn(t)},n.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},n.almostEquals=function(t,e,i){return Math.abs(t-e)<i},n.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},n.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},n.sign=function(t){return Math.sign?Math.sign(t):(t=+t,0===t||isNaN(t)?t:t>0?1:-1)},n.log10=function(t){return Math.log10?Math.log10(t):Math.log(t)/Math.LN10},n.toRadians=function(t){return t*(Math.PI/180)},n.toDegrees=function(t){return t*(180/Math.PI)},n.getAngleFromPoint=function(t,e){var i=e.x-t.x,a=e.y-t.y,o=Math.sqrt(i*i+a*a),n=Math.atan2(a,i);return n<-.5*Math.PI&&(n+=2*Math.PI),{angle:n,distance:o}},n.aliasPixel=function(t){return t%2===0?0:.5},n.splineCurve=function(t,e,i,a){var o=t.skip?e:t,n=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(n.x-o.x,2)+Math.pow(n.y-o.y,2)),l=Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2)),h=s/(s+l),d=l/(s+l);h=isNaN(h)?0:h,d=isNaN(d)?0:d;var c=a*h,u=a*d;return{previous:{x:n.x-c*(r.x-o.x),y:n.y-c*(r.y-o.y)},next:{x:n.x+u*(r.x-o.x),y:n.y+u*(r.y-o.y)}}},n.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},n.previousItem=function(t,e,i){return i?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},n.niceNum=function(t,e){var i,a=Math.floor(n.log10(t)),o=t/Math.pow(10,a);return i=e?1.5>o?1:3>o?2:7>o?5:10:1>=o?1:2>=o?2:5>=o?5:10,i*Math.pow(10,a)};var r=n.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),-(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)))},easeOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:1===(t/=1)?1:(i||(i=.3),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),a*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,a=1;return 0===t?0:2===(t/=.5)?1:(i||(i=1*(.3*1.5)),a<Math.abs(1)?(a=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/a),1>t?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)):a*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};n.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),n.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),n.getRelativePosition=function(t,e){var i,a,o=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=o.touches;l&&l.length>0?(i=l[0].clientX,a=l[0].clientY):(i=o.clientX,a=o.clientY);var h=parseFloat(n.getStyle(r,"padding-left")),d=parseFloat(n.getStyle(r,"padding-top")),c=parseFloat(n.getStyle(r,"padding-right")),u=parseFloat(n.getStyle(r,"padding-bottom")),f=s.right-s.left-h-c,g=s.bottom-s.top-d-u;return i=Math.round((i-s.left-h)/f*r.width/e.currentDevicePixelRatio),a=Math.round((a-s.top-d)/g*r.height/e.currentDevicePixelRatio),{x:i,y:a}},n.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},n.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=n.noop},n.bindEvents=function(t,e,i){var a=t.events=t.events||{};n.each(e,function(e){a[e]=function(){i.apply(t,arguments)},n.addEvent(t.chart.canvas,e,a[e])})},n.unbindEvents=function(t,e){var i=t.chart.canvas;n.each(e,function(t,e){n.removeEvent(i,e,t)})},n.getConstraintWidth=function(t){return o(t,"max-width","clientWidth")},n.getConstraintHeight=function(t){return o(t,"max-height","clientHeight")},n.getMaximumWidth=function(t){var e=t.parentNode,i=parseInt(n.getStyle(e,"padding-left"))+parseInt(n.getStyle(e,"padding-right")),a=e.clientWidth-i,o=n.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},n.getMaximumHeight=function(t){var e=t.parentNode,i=parseInt(n.getStyle(e,"padding-top"))+parseInt(n.getStyle(e,"padding-bottom")),a=e.clientHeight-i,o=n.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},n.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},n.retinaScale=function(t){var e=t.ctx,i=t.canvas,a=i.width,o=i.height,n=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==n&&(i.height=o*n,i.width=a*n,e.scale(n,n),t.originalDevicePixelRatio=t.originalDevicePixelRatio||n),i.style.width=a+"px",i.style.height=o+"px"},n.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},n.fontString=function(t,e,i){return e+" "+t+"px "+i},n.longestText=function(t,e,i,a){a=a||{};var o=a.data=a.data||{},r=a.garbageCollect=a.garbageCollect||[];a.font!==e&&(o=a.data={},r=a.garbageCollect=[],a.font=e),t.font=e;var s=0;n.each(i,function(e){if(void 0!==e&&null!==e){var i=o[e];i||(i=o[e]=t.measureText(e).width,r.push(e)),i>s&&(s=i)}});var l=r.length/2;if(l>i.length){for(var h=0;l>h;h++)delete o[r[h]];r.splice(0,l)}return s},n.drawRoundedRectangle=function(t,e,i,a,o,n){t.beginPath(),t.moveTo(e+n,i),t.lineTo(e+a-n,i),t.quadraticCurveTo(e+a,i,e+a,i+n),t.lineTo(e+a,i+o-n),t.quadraticCurveTo(e+a,i+o,e+a-n,i+o),t.lineTo(e+n,i+o),t.quadraticCurveTo(e,i+o,e,i+o-n),t.lineTo(e,i+n),t.quadraticCurveTo(e,i,e+n,i),t.closePath()},n.color=function(e){return a?a(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},n.addResizeListener=function(t,e){var i=document.createElement("iframe"),a="chartjs-hidden-iframe";i.classlist?i.classlist.add(a):i.setAttribute("class",a);var o=i.style;o.width="100%",o.display="block",o.border=0,o.height=0,o.margin=0,o.position="absolute",o.left=0,o.right=0,o.top=0,o.bottom=0,t.insertBefore(i,t.firstChild),(i.contentWindow||i).onresize=function(){e&&e()}},n.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},n.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},n.arrayEquals=function(t,e){var i,a,o,r;if(!t||!e||t.length!=e.length)return!1;for(i=0,a=t.length;a>i;++i)if(o=t[i],r=e[i],o instanceof Array&&r instanceof Array){if(!n.arrayEquals(o,r))return!1}else if(o!=r)return!1;return!0},n.pushAllIfDefined=function(t,e){"undefined"!=typeof t&&(n.isArray(t)?e.push.apply(e,t):e.push(t))},n.callCallback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},n.getHoverColor=function(t){return t instanceof CanvasPattern?t:n.color(t).saturate(.5).darken(.1).rgbString()}}},{"chartjs-color":3}],26:[function(t,e,i){"use strict";e.exports=function(){var t=function(e,i){this.config=i,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),this.ctx=e,this.canvas=e.canvas,this.width=e.canvas.width||parseInt(t.helpers.getStyle(e.canvas,"width"))||t.helpers.getMaximumWidth(e.canvas),this.height=e.canvas.height||parseInt(t.helpers.getStyle(e.canvas,"height"))||t.helpers.getMaximumHeight(e.canvas),this.aspectRatio=this.width/this.height,(isNaN(this.aspectRatio)||isFinite(this.aspectRatio)===!1)&&(this.aspectRatio=void 0!==i.aspectRatio?i.aspectRatio:2),this.originalCanvasStyleWidth=e.canvas.style.width,this.originalCanvasStyleHeight=e.canvas.style.height,t.helpers.retinaScale(this),i&&(this.controller=new t.Controller(this));var a=this;return t.helpers.addResizeListener(e.canvas.parentNode,function(){a.controller&&a.controller.config.options.responsive&&a.controller.resize()}),this.controller?this.controller:this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t}},{}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,i,a){function o(t){var e,i=t.isHorizontal();i?(e=t.update(t.options.fullWidth?p:k,y),S-=e.height):(e=t.update(x,v),k-=e.width),C.push({horizontal:i,minSize:e,box:t})}function n(t){var i=e.findNextWhere(C,function(e){return e.box===t});if(i)if(t.isHorizontal()){var a={left:w,right:M,top:0,bottom:0};t.update(t.options.fullWidth?p:k,m/2,a)}else t.update(i.minSize.width,S)}function r(t){var i=e.findNextWhere(C,function(e){return e.box===t}),a={left:0,right:0,top:D,bottom:A};i&&t.update(i.minSize.width,S,a)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?l:w,t.right=t.options.fullWidth?i-l:w+k,t.top=P,t.bottom=P+t.height,P=t.bottom):(t.left=_,t.right=_+t.width,t.top=D,t.bottom=D+S,_=t.right)}if(t){var l=0,h=0,d=e.where(t.boxes,function(t){return"left"===t.options.position}),c=e.where(t.boxes,function(t){return"right"===t.options.position}),u=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});u.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var p=i-2*l,m=a-2*h,b=p/2,v=m/2,x=(i-b)/(d.length+c.length),y=(a-v)/(u.length+f.length),k=p,S=m,C=[];e.each(d.concat(c,u,f),o);var w=l,M=l,D=h,A=h;e.each(d.concat(c),n),e.each(d,function(t){w+=t.width}),e.each(c,function(t){M+=t.width}),e.each(u.concat(f),n),e.each(u,function(t){D+=t.height}),e.each(f,function(t){A+=t.height}),e.each(d.concat(c),r),w=l,M=l,D=h,A=h,e.each(d,function(t){w+=t.width}),e.each(c,function(t){M+=t.width}),e.each(u,function(t){D+=t.height}),e.each(f,function(t){A+=t.height});var I=a-D-A,F=i-w-M;(F!==k||I!==S)&&(e.each(d,function(t){t.height=I}),e.each(c,function(t){t.height=I}),e.each(u,function(t){t.options.fullWidth||(t.width=F)}),e.each(f,function(t){t.options.fullWidth||(t.width=F)}),S=I,k=F);var _=l,P=h;e.each(d.concat(u),s),_+=k,P+=S,e.each(c,s),e.each(f,s),t.chartArea={left:w,top:D,right:w+k,bottom:D+S},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var i=e.datasetIndex,a=this.chart,o=a.getDatasetMeta(i);o.hidden=null===o.hidden?!a.data.datasets[i].hidden:null,a.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(e,i){return{text:e.label,fillStyle:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){this.legendItems=this.options.labels.generateLabels.call(this,this.chart),this.options.reverse&&this.legendItems.reverse()},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this.options,a=i.labels,o=i.display,n=this.ctx,r=t.defaults.global,s=e.getValueOrDefault,l=s(a.fontSize,r.defaultFontSize),h=s(a.fontStyle,r.defaultFontStyle),d=s(a.fontFamily,r.defaultFontFamily),c=e.fontString(l,h,d),u=this.legendHitBoxes=[],f=this.minSize,g=this.isHorizontal();if(g?(f.width=this.maxWidth,f.height=o?10:0):(f.width=o?10:0,f.height=this.maxHeight),o&&g){var p=this.lineWidths=[0],m=this.legendItems.length?l+a.padding:0;n.textAlign="left",n.textBaseline="top",n.font=c,e.each(this.legendItems,function(t,e){var i=a.boxWidth+l/2+n.measureText(t.text).width;p[p.length-1]+i+a.padding>=this.width&&(m+=l+a.padding,p[p.length]=this.left),u[e]={left:0,top:0,width:i,height:l},p[p.length-1]+=i+a.padding},this),f.height+=m}this.width=f.width,this.height=f.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this.options,a=i.labels,o=t.defaults.global,n=o.elements.line,r=this.width,s=this.lineWidths;if(i.display){var l=this.ctx,h={x:this.left+(r-s[0])/2,y:this.top+a.padding,line:0},d=e.getValueOrDefault,c=d(a.fontColor,o.defaultFontColor),u=d(a.fontSize,o.defaultFontSize),f=d(a.fontStyle,o.defaultFontStyle),g=d(a.fontFamily,o.defaultFontFamily),p=e.fontString(u,f,g);if(this.isHorizontal()){l.textAlign="left",l.textBaseline="top",l.lineWidth=.5,l.strokeStyle=c,l.fillStyle=c,l.font=p;var m=a.boxWidth,b=this.legendHitBoxes;e.each(this.legendItems,function(t,e){var i=l.measureText(t.text).width,c=m+u/2+i,f=h.x,g=h.y;f+c>=r&&(g=h.y+=u+a.padding,h.line++,f=h.x=this.left+(r-s[h.line])/2),l.save(),l.fillStyle=d(t.fillStyle,o.defaultColor),l.lineCap=d(t.lineCap,n.borderCapStyle),l.lineDashOffset=d(t.lineDashOffset,n.borderDashOffset),l.lineJoin=d(t.lineJoin,n.borderJoinStyle),l.lineWidth=d(t.lineWidth,n.borderWidth),l.strokeStyle=d(t.strokeStyle,o.defaultColor),l.setLineDash&&l.setLineDash(d(t.lineDash,n.borderDash)),l.strokeRect(f,g,m,u),l.fillRect(f,g,m,u),l.restore(),b[e].left=f,b[e].top=g,l.fillText(t.text,m+u/2+f,g),t.hidden&&(l.beginPath(),l.lineWidth=2,l.moveTo(m+u/2+f,g+u/2),l.lineTo(m+u/2+f+i,g+u/2),l.stroke()),h.x+=c+a.padding},this)}}},handleEvent:function(t){var i=e.getRelativePosition(t,this.chart.chart),a=i.x,o=i.y,n=this.options;if(a>=this.left&&a<=this.right&&o>=this.top&&o<=this.bottom)for(var r=this.legendHitBoxes,s=0;s<r.length;++s){var l=r[s];if(a>=l.left&&a<=l.left+l.width&&o>=l.top&&o<=l.top+l.height){n.onClick&&n.onClick.call(this,t,this.legendItems[s]);break}}}})}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.plugins=[],t.pluginService={register:function(e){var i=t.plugins;-1===i.indexOf(e)&&i.push(e)},remove:function(e){var i=t.plugins,a=i.indexOf(e);-1!==a&&i.splice(a,1)},notifyPlugins:function(i,a,o){e.each(t.plugins,function(t){t[i]&&"function"==typeof t[i]&&t[i].apply(o,a)},o)}};var i=e.noop;t.PluginBase=t.Element.extend({beforeInit:i,afterInit:i,beforeUpdate:i,afterUpdate:i,beforeDraw:i,afterDraw:i,destroy:i})}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,i,a){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},a),this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){this.ticks=this.ticks.map(function(t,e,i){return this.options.ticks.userCallback?this.options.ticks.userCallback(t,e,i):this.options.ticks.callback(t,e,i)},this)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var i=this.ctx,a=t.defaults.global,o=this.options.ticks,n=e.getValueOrDefault(o.fontSize,a.defaultFontSize),r=e.getValueOrDefault(o.fontStyle,a.defaultFontStyle),s=e.getValueOrDefault(o.fontFamily,a.defaultFontFamily),l=e.fontString(n,r,s);i.font=l;var h,d=i.measureText(this.ticks[0]).width,c=i.measureText(this.ticks[this.ticks.length-1]).width;if(this.labelRotation=o.minRotation||0,this.paddingRight=0,this.paddingLeft=0,this.options.display&&this.isHorizontal()){this.paddingRight=c/2+3,this.paddingLeft=d/2+3,this.longestTextCache||(this.longestTextCache={});for(var u,f,g=e.longestText(i,l,this.ticks,this.longestTextCache),p=g,m=this.getPixelForTick(1)-this.getPixelForTick(0)-6;p>m&&this.labelRotation<o.maxRotation;){
if(u=Math.cos(e.toRadians(this.labelRotation)),f=Math.sin(e.toRadians(this.labelRotation)),h=u*d,h+n/2>this.yLabelWidth&&(this.paddingLeft=h+n/2),this.paddingRight=n/2,f*g>this.maxHeight){this.labelRotation--;break}this.labelRotation++,p=u*g}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var i=this.minSize={width:0,height:0},a=this.options,o=t.defaults.global,n=a.ticks,r=a.scaleLabel,s=a.display,l=this.isHorizontal(),h=e.getValueOrDefault(n.fontSize,o.defaultFontSize),d=e.getValueOrDefault(n.fontStyle,o.defaultFontStyle),c=e.getValueOrDefault(n.fontFamily,o.defaultFontFamily),u=e.fontString(h,d,c),f=e.getValueOrDefault(r.fontSize,o.defaultFontSize),g=e.getValueOrDefault(r.fontStyle,o.defaultFontStyle),p=e.getValueOrDefault(r.fontFamily,o.defaultFontFamily),m=(e.fontString(f,g,p),a.gridLines.tickMarkLength);if(l?i.width=this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:i.width=s?m:0,l?i.height=s?m:0:i.height=this.maxHeight,r.display&&s&&(l?i.height+=1.5*f:i.width+=1.5*f),n.display&&s){this.longestTextCache||(this.longestTextCache={});var b=e.longestText(this.ctx,u,this.ticks,this.longestTextCache);if(l){this.longestLabelWidth=b;var v=Math.sin(e.toRadians(this.labelRotation))*this.longestLabelWidth+1.5*h;i.height=Math.min(this.maxHeight,i.height+v),this.ctx.font=u;var x=this.ctx.measureText(this.ticks[0]).width,y=this.ctx.measureText(this.ticks[this.ticks.length-1]).width,k=Math.cos(e.toRadians(this.labelRotation)),S=Math.sin(e.toRadians(this.labelRotation));this.paddingLeft=0!==this.labelRotation?k*x+3:x/2+3,this.paddingRight=0!==this.labelRotation?S*(h/2)+3:y/2+3}else{var C=this.maxWidth-i.width,w=n.mirror;w?b=0:b+=this.options.ticks.padding,C>b?i.width+=b:i.width=this.maxWidth,this.paddingTop=h/2,this.paddingBottom=h/2}}this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0)),this.width=i.width,this.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function i(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:i(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=this.width-(this.paddingLeft+this.paddingRight),a=i/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),o=a*t+this.paddingLeft;e&&(o+=a/2);var n=this.left+Math.round(o);return n+=this.isFullWidth()?this.margins.left:0}var r=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(r/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=this.width-(this.paddingLeft+this.paddingRight),i=e*t+this.paddingLeft,a=this.left+Math.round(i);return a+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},getBasePixel:function(){var t=this,e=t.min,i=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(i){var a=this.options;if(a.display){var o,n,r,s,l,h=this.ctx,d=t.defaults.global,c=a.ticks,u=a.gridLines,f=a.scaleLabel,g=0!==this.labelRotation,p=c.autoSkip;c.maxTicksLimit&&(l=c.maxTicksLimit);var m=e.getValueOrDefault(c.fontColor,d.defaultFontColor),b=e.getValueOrDefault(c.fontSize,d.defaultFontSize),v=e.getValueOrDefault(c.fontStyle,d.defaultFontStyle),x=e.getValueOrDefault(c.fontFamily,d.defaultFontFamily),y=e.fontString(b,v,x),k=u.tickMarkLength,S=e.getValueOrDefault(f.fontColor,d.defaultFontColor),C=e.getValueOrDefault(f.fontSize,d.defaultFontSize),w=e.getValueOrDefault(f.fontStyle,d.defaultFontStyle),M=e.getValueOrDefault(f.fontFamily,d.defaultFontFamily),D=e.fontString(C,w,M),A=e.toRadians(this.labelRotation),I=Math.cos(A),F=(Math.sin(A),this.longestLabelWidth*I);if(h.fillStyle=m,this.isHorizontal()){o=!0;var _="bottom"===a.position?this.top:this.bottom-k,P="bottom"===a.position?this.top+k:this.bottom;if(n=!1,g&&(F/=2),(F+c.autoSkipPadding)*this.ticks.length>this.width-(this.paddingLeft+this.paddingRight)&&(n=1+Math.floor((F+c.autoSkipPadding)*this.ticks.length/(this.width-(this.paddingLeft+this.paddingRight)))),l&&this.ticks.length>l)for(;!n||this.ticks.length/(n||1)>l;)n||(n=1),n+=1;p||(n=!1),e.each(this.ticks,function(t,r){var s=this.ticks.length===r+1,l=n>1&&r%n>0||r%n===0&&r+n>=this.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var d=this.getPixelForTick(r),f=this.getPixelForTick(r,u.offsetGridLines);u.display&&(r===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=u.zeroLineWidth,h.strokeStyle=u.zeroLineColor,o=!0):o&&(h.lineWidth=u.lineWidth,h.strokeStyle=u.color,o=!1),d+=e.aliasPixel(h.lineWidth),h.beginPath(),u.drawTicks&&(h.moveTo(d,_),h.lineTo(d,P)),u.drawOnChartArea&&(h.moveTo(d,i.top),h.lineTo(d,i.bottom)),h.stroke()),c.display&&(h.save(),h.translate(f+c.labelOffset,g?this.top+12:"top"===a.position?this.bottom-k:this.top+k),h.rotate(-1*A),h.font=y,h.textAlign=g?"right":"center",h.textBaseline=g?"middle":"top"===a.position?"bottom":"top",h.fillText(t,0,0),h.restore())}},this),f.display&&(h.textAlign="center",h.textBaseline="middle",h.fillStyle=S,h.font=D,r=this.left+(this.right-this.left)/2,s="bottom"===a.position?this.bottom-C/2:this.top+C/2,h.fillText(f.labelString,r,s))}else{o=!0;var T="right"===a.position?this.left:this.right-5,V="right"===a.position?this.left+5:this.right;if(e.each(this.ticks,function(t,n){if(void 0!==t&&null!==t){var r=this.getPixelForTick(n);if(u.display&&(n===("undefined"!=typeof this.zeroLineIndex?this.zeroLineIndex:0)?(h.lineWidth=u.zeroLineWidth,h.strokeStyle=u.zeroLineColor,o=!0):o&&(h.lineWidth=u.lineWidth,h.strokeStyle=u.color,o=!1),r+=e.aliasPixel(h.lineWidth),h.beginPath(),u.drawTicks&&(h.moveTo(T,r),h.lineTo(V,r)),u.drawOnChartArea&&(h.moveTo(i.left,r),h.lineTo(i.right,r)),h.stroke()),c.display){var s,l=this.getPixelForTick(n,u.offsetGridLines);h.save(),"left"===a.position?c.mirror?(s=this.right+c.padding,h.textAlign="left"):(s=this.right-c.padding,h.textAlign="right"):c.mirror?(s=this.left-c.padding,h.textAlign="right"):(s=this.left+c.padding,h.textAlign="left"),h.translate(s,l+c.labelOffset),h.rotate(-1*A),h.font=y,h.textBaseline="middle",h.fillText(t,0,0),h.restore()}}},this),f.display){r="left"===a.position?this.left+C/2:this.right-C/2,s=this.top+(this.bottom-this.top)/2;var R="left"===a.position?-.5*Math.PI:.5*Math.PI;h.save(),h.translate(r,s),h.rotate(R),h.textAlign="center",h.fillStyle=S,h.font=D,h.textBaseline="middle",h.fillText(f.labelString,0,0),h.restore()}}if(u.drawBorder){h.lineWidth=u.lineWidth,h.strokeStyle=u.color;var O=this.left,W=this.right,L=this.top,B=this.bottom,z=e.aliasPixel(h.lineWidth);this.isHorizontal()?(L=B="top"===a.position?this.bottom:this.top,L+=z,B+=z):(O=W="left"===a.position?this.right:this.left,O+=z,W+=z),h.beginPath(),h.moveTo(O,L),h.lineTo(W,B),h.stroke()}}}})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,a){this.constructors[t]=i,this.defaults[t]=e.clone(a)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var a=this.defaults;a.hasOwnProperty(t)&&(a[t]=e.extend(a[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){t.layoutService.addBox(i,e)})}}}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=e.noop;t.Title=t.Element.extend({initialize:function(i){e.extend(this,i),this.options=e.configMerge(t.defaults.global.title,i.options),this.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var i=this,a=(i.ctx,e.getValueOrDefault),o=i.options,n=t.defaults.global,r=o.display,s=a(o.fontSize,n.defaultFontSize),l=i.minSize;i.isHorizontal()?(l.width=i.maxWidth,l.height=r?s+2*o.padding:0):(l.width=r?s+2*o.padding:0,l.height=i.maxHeight),i.width=l.width,i.height=l.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this,a=i.ctx,o=e.getValueOrDefault,n=i.options,r=t.defaults.global;if(n.display){var s,l,h=o(n.fontSize,r.defaultFontSize),d=o(n.fontStyle,r.defaultFontStyle),c=o(n.fontFamily,r.defaultFontFamily),u=e.fontString(h,d,c),f=0,g=i.top,p=i.left,m=i.bottom,b=i.right;a.fillStyle=o(n.fontColor,r.defaultFontColor),a.font=u,i.isHorizontal()?(s=p+(b-p)/2,l=g+(m-g)/2):(s="left"===n.position?p+h/2:b-h/2,l=g+(m-g)/2,f=Math.PI*("left"===n.position?-.5:.5)),a.save(),a.translate(s,l),a.rotate(f),a.textAlign="center",a.textBaseline="middle",a.fillText(n.text,0,0),a.restore()}}})}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){function e(t,e){return e&&(i.isArray(e)?t=t.concat(e):t.push(e)),t}var i=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleColor:"#fff",titleAlign:"left",bodySpacing:2,bodyColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:i.noop,title:function(t,e){var i="";return t.length>0&&(t[0].xLabel?i=t[0].xLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},afterTitle:i.noop,beforeBody:i.noop,beforeLabel:i.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i+": "+t.yLabel},afterLabel:i.noop,afterBody:i.noop,beforeFooter:i.noop,footer:i.noop,afterFooter:i.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=t.defaults.global,a=this._options,o=a.tooltips;i.extend(this,{_model:{xPadding:o.xPadding,yPadding:o.yPadding,xAlign:o.yAlign,yAlign:o.xAlign,bodyColor:o.bodyColor,_bodyFontFamily:i.getValueOrDefault(o.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i.getValueOrDefault(o.bodyFontStyle,e.defaultFontStyle),_bodyAlign:o.bodyAlign,bodyFontSize:i.getValueOrDefault(o.bodyFontSize,e.defaultFontSize),bodySpacing:o.bodySpacing,titleColor:o.titleColor,_titleFontFamily:i.getValueOrDefault(o.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i.getValueOrDefault(o.titleFontStyle,e.defaultFontStyle),titleFontSize:i.getValueOrDefault(o.titleFontSize,e.defaultFontSize),_titleAlign:o.titleAlign,titleSpacing:o.titleSpacing,titleMarginBottom:o.titleMarginBottom,footerColor:o.footerColor,_footerFontFamily:i.getValueOrDefault(o.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i.getValueOrDefault(o.footerFontStyle,e.defaultFontStyle),footerFontSize:i.getValueOrDefault(o.footerFontSize,e.defaultFontSize),_footerAlign:o.footerAlign,footerSpacing:o.footerSpacing,footerMarginTop:o.footerMarginTop,caretSize:o.caretSize,cornerRadius:o.cornerRadius,backgroundColor:o.backgroundColor,opacity:0,legendColorBackground:o.multiKeyBackground}})},getTitle:function(){var t=this._options.tooltips.callbacks.beforeTitle.apply(this,arguments),i=this._options.tooltips.callbacks.title.apply(this,arguments),a=this._options.tooltips.callbacks.afterTitle.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getBeforeBody:function(){var t=this._options.tooltips.callbacks.beforeBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var a=[];return i.each(t,function(t){i.pushAllIfDefined(this._options.tooltips.callbacks.beforeLabel.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.label.call(this,t,e),a),i.pushAllIfDefined(this._options.tooltips.callbacks.afterLabel.call(this,t,e),a)},this),a},getAfterBody:function(){var t=this._options.tooltips.callbacks.afterBody.apply(this,arguments);return i.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.tooltips.callbacks.beforeFooter.apply(this,arguments),i=this._options.tooltips.callbacks.footer.apply(this,arguments),a=this._options.tooltips.callbacks.afterFooter.apply(this,arguments),o=[];return o=e(o,t),o=e(o,i),o=e(o,a)},getAveragePosition:function(t){if(!t.length)return!1;var e=[],a=[];i.each(t,function(t){if(t&&t.hasValue()){var i=t.tooltipPosition();e.push(i.x),a.push(i.y)}});for(var o=0,n=0,r=0;r<e.length;r++)o+=e[r],n+=a[r];return{x:Math.round(o/e.length),y:Math.round(n/e.length)}},update:function(t){if(this._active.length){this._model.opacity=1;var e,a=this._active[0],o=[],n=[];if("single"===this._options.tooltips.mode){var r=a._yScale||a._scale;n.push({xLabel:a._xScale?a._xScale.getLabelForIndex(a._index,a._datasetIndex):"",yLabel:r?r.getLabelForIndex(a._index,a._datasetIndex):"",index:a._index,datasetIndex:a._datasetIndex}),e=this.getAveragePosition(this._active)}else i.each(this._data.datasets,function(t,e){if(this._chartInstance.isDatasetVisible(e)){var i=this._chartInstance.getDatasetMeta(e),o=i.data[a._index];if(o){var r=a._yScale||a._scale;n.push({xLabel:o._xScale?o._xScale.getLabelForIndex(o._index,o._datasetIndex):"",yLabel:r?r.getLabelForIndex(o._index,o._datasetIndex):"",index:a._index,datasetIndex:e})}}},this),i.each(this._active,function(t){t&&o.push({borderColor:t._view.borderColor,backgroundColor:t._view.backgroundColor})},null),e=this.getAveragePosition(this._active);i.extend(this._model,{title:this.getTitle(n,this._data),beforeBody:this.getBeforeBody(n,this._data),body:this.getBody(n,this._data),afterBody:this.getAfterBody(n,this._data),footer:this.getFooter(n,this._data)}),i.extend(this._model,{x:Math.round(e.x),y:Math.round(e.y),caretPadding:i.getValueOrDefault(e.padding,2),labelColors:o});var s=this.getTooltipSize(this._model);this.determineAlignment(s),i.extend(this._model,this.getBackgroundPoint(this._model,s))}else this._model.opacity=0;return t&&this._options.tooltips.custom&&this._options.tooltips.custom.call(this,this._model),this},getTooltipSize:function(t){var e=this._chart.ctx,a={height:2*t.yPadding,width:0},o=t.body.length+t.beforeBody.length+t.afterBody.length;return a.height+=t.title.length*t.titleFontSize,a.height+=(t.title.length-1)*t.titleSpacing,a.height+=t.title.length?t.titleMarginBottom:0,a.height+=o*t.bodyFontSize,a.height+=o?(o-1)*t.bodySpacing:0,a.height+=t.footer.length?t.footerMarginTop:0,a.height+=t.footer.length*t.footerFontSize,a.height+=t.footer.length?(t.footer.length-1)*t.footerSpacing:0,e.font=i.fontString(t.titleFontSize,t._titleFontStyle,t._titleFontFamily),i.each(t.title,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),e.font=i.fontString(t.bodyFontSize,t._bodyFontStyle,t._bodyFontFamily),i.each(t.beforeBody.concat(t.afterBody),function(t){a.width=Math.max(a.width,e.measureText(t).width)}),i.each(t.body,function(i){a.width=Math.max(a.width,e.measureText(i).width+("single"!==this._options.tooltips.mode?t.bodyFontSize+2:0))},this),e.font=i.fontString(t.footerFontSize,t._footerFontStyle,t._footerFontFamily),i.each(t.footer,function(t){a.width=Math.max(a.width,e.measureText(t).width)}),a.width+=2*t.xPadding,a},determineAlignment:function(t){this._model.y<t.height?this._model.yAlign="top":this._model.y>this._chart.height-t.height&&(this._model.yAlign="bottom");var e,i,a,o,n,r=this,s=(this._chartInstance.chartArea.left+this._chartInstance.chartArea.right)/2,l=(this._chartInstance.chartArea.top+this._chartInstance.chartArea.bottom)/2;"center"===this._model.yAlign?(e=function(t){return s>=t},i=function(t){return t>s}):(e=function(e){return e<=t.width/2},i=function(e){return e>=r._chart.width-t.width/2}),a=function(e){return e+t.width>r._chart.width},o=function(e){return e-t.width<0},n=function(t){return l>=t?"top":"bottom"},e(this._model.x)?(this._model.xAlign="left",a(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=n(this._model.y))):i(this._model.x)&&(this._model.xAlign="right",o(this._model.x)&&(this._model.xAlign="center",this._model.yAlign=n(this._model.y)))},getBackgroundPoint:function(t,e){var i={x:t.x,y:t.y};return"right"===t.xAlign?i.x-=e.width:"center"===t.xAlign&&(i.x-=e.width/2),"top"===t.yAlign?i.y+=t.caretPadding+t.caretSize:"bottom"===t.yAlign?i.y-=e.height+t.caretPadding+t.caretSize:i.y-=e.height/2,"center"===t.yAlign?"left"===t.xAlign?i.x+=t.caretPadding+t.caretSize:"right"===t.xAlign&&(i.x-=t.caretPadding+t.caretSize):"left"===t.xAlign?i.x-=t.cornerRadius+t.caretPadding:"right"===t.xAlign&&(i.x+=t.cornerRadius+t.caretPadding),i},drawCaret:function(t,e,a,o){var n,r,s,l,h,d,c=this._view,u=this._chart.ctx;"center"===c.yAlign?("left"===c.xAlign?(n=t.x,r=n-c.caretSize,s=n):(n=t.x+e.width,r=n+c.caretSize,s=n),h=t.y+e.height/2,l=h-c.caretSize,d=h+c.caretSize):("left"===c.xAlign?(n=t.x+c.cornerRadius,r=n+c.caretSize,s=r+c.caretSize):"right"===c.xAlign?(n=t.x+e.width-c.cornerRadius,r=n-c.caretSize,s=r-c.caretSize):(r=t.x+e.width/2,n=r-c.caretSize,s=r+c.caretSize),"top"===c.yAlign?(l=t.y,h=l-c.caretSize,d=l):(l=t.y+e.height,h=l+c.caretSize,d=l));var f=i.color(c.backgroundColor);u.fillStyle=f.alpha(a*f.alpha()).rgbString(),u.beginPath(),u.moveTo(n,l),u.lineTo(r,h),u.lineTo(s,d),u.closePath(),u.fill()},drawTitle:function(t,e,a,o){if(e.title.length){a.textAlign=e._titleAlign,a.textBaseline="top";var n=i.color(e.titleColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.titleFontSize,e._titleFontStyle,e._titleFontFamily),i.each(e.title,function(i,o){a.fillText(i,t.x,t.y),t.y+=e.titleFontSize+e.titleSpacing,o+1===e.title.length&&(t.y+=e.titleMarginBottom-e.titleSpacing)})}},drawBody:function(t,e,a,o){a.textAlign=e._bodyAlign,a.textBaseline="top";var n=i.color(e.bodyColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.bodyFontSize,e._bodyFontStyle,e._bodyFontFamily),i.each(e.beforeBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize+e.bodySpacing}),i.each(e.body,function(n,r){"single"!==this._options.tooltips.mode&&(a.fillStyle=i.color(e.legendColorBackground).alpha(o).rgbaString(),a.fillRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.strokeStyle=i.color(e.labelColors[r].borderColor).alpha(o).rgbaString(),a.strokeRect(t.x,t.y,e.bodyFontSize,e.bodyFontSize),a.fillStyle=i.color(e.labelColors[r].backgroundColor).alpha(o).rgbaString(),a.fillRect(t.x+1,t.y+1,e.bodyFontSize-2,e.bodyFontSize-2),a.fillStyle=i.color(e.bodyColor).alpha(o).rgbaString()),a.fillText(n,t.x+("single"!==this._options.tooltips.mode?e.bodyFontSize+2:0),t.y),t.y+=e.bodyFontSize+e.bodySpacing},this),i.each(e.afterBody,function(i){a.fillText(i,t.x,t.y),t.y+=e.bodyFontSize}),t.y-=e.bodySpacing},drawFooter:function(t,e,a,o){if(e.footer.length){t.y+=e.footerMarginTop,a.textAlign=e._footerAlign,a.textBaseline="top";var n=i.color(e.footerColor);a.fillStyle=n.alpha(o*n.alpha()).rgbString(),a.font=i.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),i.each(e.footer,function(i){a.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a=e.caretPadding,o=this.getTooltipSize(e),n={x:e.x,y:e.y},r=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.tooltips.enabled){var s=i.color(e.backgroundColor);t.fillStyle=s.alpha(r*s.alpha()).rgbString(),i.drawRoundedRectangle(t,n.x,n.y,o.width,o.height,e.cornerRadius),t.fill(),this.drawCaret(n,o,r,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,r),this.drawBody(n,e,t,r),this.drawFooter(n,e,t,r)}}}})}},{}],34:[function(t,e,i){"use strict";e.exports=function(t,e){var i=t.helpers,a=t.defaults.global;a.elements.arc={backgroundColor:a.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var a=this._view;if(a){for(var o=i.getAngleFromPoint(a,{x:t,y:e}),n=o.angle,r=o.distance,s=a.startAngle,l=a.endAngle;s>l;)l+=2*Math.PI;for(;n>l;)n-=2*Math.PI;for(;s>n;)n+=2*Math.PI;var h=n>=s&&l>=n,d=r>=a.innerRadius&&r<=a.outerRadius;return h&&d}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,a=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,a),t.arc(e.x,e.y,e.innerRadius,a,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:i.defaultColor,borderWidth:3,borderColor:i.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,i,a,o){var n=this._chart.ctx;e._view.skip?a.call(this,t,e,i):t._view.skip?o.call(this,t,e,i):0===e._view.tension?n.lineTo(e._view.x,e._view.y):n.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function t(t){r._view.skip||s._view.skip?t&&n.lineTo(a._view.scaleZero.x,a._view.scaleZero.y):n.bezierCurveTo(s._view.controlPointNextX,s._view.controlPointNextY,r._view.controlPointPreviousX,r._view.controlPointPreviousY,r._view.x,r._view.y)}var a=this,o=this._view,n=this._chart.ctx,r=this._children[0],s=this._children[this._children.length-1];n.save(),this._children.length>0&&o.fill&&(n.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),r=e.nextItem(this._children,i);0===i?(this._loop?n.moveTo(o.scaleZero.x,o.scaleZero.y):n.moveTo(t._view.x,o.scaleZero),t._view.skip?this._loop||n.moveTo(r._view.x,this._view.scaleZero):n.lineTo(t._view.x,t._view.y)):this.lineToNextPoint(a,t,r,function(t,e,i){this._loop?n.lineTo(this._view.scaleZero.x,this._view.scaleZero.y):(n.lineTo(t._view.x,this._view.scaleZero),n.moveTo(i._view.x,this._view.scaleZero))},function(t,e){n.lineTo(e._view.x,e._view.y)})},this),this._loop?t(!0):(n.lineTo(this._children[this._children.length-1]._view.x,o.scaleZero),n.lineTo(this._children[0]._view.x,o.scaleZero)),n.fillStyle=o.backgroundColor||i.defaultColor,n.closePath(),n.fill());var l=i.elements.line;n.lineCap=o.borderCapStyle||l.borderCapStyle,n.setLineDash&&n.setLineDash(o.borderDash||l.borderDash),n.lineDashOffset=o.borderDashOffset||l.borderDashOffset,n.lineJoin=o.borderJoinStyle||l.borderJoinStyle,n.lineWidth=o.borderWidth||l.borderWidth,n.strokeStyle=o.borderColor||i.defaultColor,n.beginPath(),e.each(this._children,function(t,i){var a=e.previousItem(this._children,i),o=e.nextItem(this._children,i);0===i?n.moveTo(t._view.x,t._view.y):this.lineToNextPoint(a,t,o,function(t,e,i){n.moveTo(i._view.x,i._view.y)},function(t,e){n.moveTo(e._view.x,e._view.y)})},this),this._loop&&this._children.length>0&&t(),n.stroke(),n.restore()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,a=i.defaultColor;i.elements.point={radius:3,pointStyle:"circle",backgroundColor:a,borderWidth:1,borderColor:a,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return i?Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var t,o,n,r,s,l,h=this._view,d=this._chart.ctx,c=h.pointStyle,u=h.radius,f=h.x,g=h.y;if(!h.skip){if("object"==typeof c&&(t=c.toString(),"[object HTMLImageElement]"===t||"[object HTMLCanvasElement]"===t))return void d.drawImage(c,f-c.width/2,g-c.height/2);if(!(isNaN(u)||0>=u)){switch(d.strokeStyle=h.borderColor||a,d.lineWidth=e.getValueOrDefault(h.borderWidth,i.elements.point.borderWidth),d.fillStyle=h.backgroundColor||a,c){default:d.beginPath(),d.arc(f,g,u,0,2*Math.PI),d.closePath(),d.fill();break;case"triangle":d.beginPath(),o=3*u/Math.sqrt(3),s=o*Math.sqrt(3)/2,d.moveTo(f-o/2,g+s/3),d.lineTo(f+o/2,g+s/3),d.lineTo(f,g-2*s/3),d.closePath(),d.fill();break;case"rect":l=1/Math.SQRT2*u,d.fillRect(f-l,g-l,2*l,2*l),d.strokeRect(f-l,g-l,2*l,2*l);break;case"rectRot":d.translate(f,g),d.rotate(Math.PI/4),l=1/Math.SQRT2*u,d.fillRect(-l,-l,2*l,2*l),d.strokeRect(-l,-l,2*l,2*l),d.setTransform(1,0,0,1,0,0);break;case"cross":d.beginPath(),d.moveTo(f,g+u),d.lineTo(f,g-u),d.moveTo(f-u,g),d.lineTo(f+u,g),d.closePath();break;case"crossRot":d.beginPath(),n=Math.cos(Math.PI/4)*u,r=Math.sin(Math.PI/4)*u,d.moveTo(f-n,g-r),d.lineTo(f+n,g+r),d.moveTo(f-n,g+r),d.lineTo(f+n,g-r),d.closePath();break;case"star":d.beginPath(),d.moveTo(f,g+u),d.lineTo(f,g-u),d.moveTo(f-u,g),d.lineTo(f+u,g),n=Math.cos(Math.PI/4)*u,r=Math.sin(Math.PI/4)*u,d.moveTo(f-n,g-r),d.lineTo(f+n,g+r),d.moveTo(f-n,g+r),d.lineTo(f+n,g-r),d.closePath();break;case"line":d.beginPath(),d.moveTo(f-u,g),d.lineTo(f+u,g),d.closePath();break;case"dash":d.beginPath(),d.moveTo(f,g),d.lineTo(f+u,g),d.closePath()}d.stroke()}}}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return l[(d+t)%4]}var e=this._chart.ctx,i=this._view,a=i.width/2,o=i.x-a,n=i.x+a,r=i.base-(i.base-i.y),s=i.borderWidth/2;i.borderWidth&&(o+=s,n-=s,r+=s),e.beginPath(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth;var l=[[o,i.base],[o,r],[n,r],[n,i.base]],h=["bottom","left","top","right"],d=h.indexOf(i.borderSkipped,0);-1===d&&(d=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),i.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=this._view;return i?i.y<i.base?t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.y&&e<=i.base:t>=i.x-i.width/2&&t<=i.x+i.width/2&&e>=i.base&&e<=i.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"bottom"},a=t.Scale.extend({determineDataLimits:function(){this.minIndex=0,this.maxIndex=this.chart.data.labels.length-1;var t;void 0!==this.options.ticks.min&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(this.chart.data.labels,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=this.chart.data.labels[this.minIndex],this.max=this.chart.data.labels[this.maxIndex]},buildTicks:function(t){this.ticks=0===this.minIndex&&this.maxIndex===this.chart.data.labels.length-1?this.chart.data.labels:this.chart.data.labels.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,i,a){var o=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(this.isHorizontal()){var n=this.width-(this.paddingLeft+this.paddingRight),r=n/o,s=r*(e-this.minIndex)+this.paddingLeft;return this.options.gridLines.offsetGridLines&&a&&(s+=r/2),this.left+Math.round(s)}var l=this.height-(this.paddingTop+this.paddingBottom),h=l/o,d=h*(e-this.minIndex)+this.paddingTop;return this.options.gridLines.offsetGridLines&&a&&(d+=h/2),this.top+Math.round(d)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,i=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),a=this.isHorizontal(),o=a?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),n=o/i;return this.options.gridLines.offsetGridLines&&(t-=n/2),t-=a?this.paddingLeft:this.paddingTop,e=0>=t?0:Math.round(t/n)}});t.scaleService.registerScaleType("category",a,i)}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,a){var o=a.length>3?a[2]-a[1]:a[1]-a[0];Math.abs(o)>1&&t!==Math.floor(t)&&(o=t-Math.floor(t));var n=e.log10(Math.abs(o)),r="";if(0!==t){var s=-1*Math.floor(n);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r}}},a=t.Scale.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,a=i.options,o=a.ticks,n=i.chart,r=n.data,s=r.datasets,l=i.isHorizontal();if(i.min=null,i.max=null,a.stacked){var h={},d=!1,c=!1;e.each(s,function(o,r){var s=n.getDatasetMeta(r);void 0===h[s.type]&&(h[s.type]={positiveValues:[],negativeValues:[]});var l=h[s.type].positiveValues,u=h[s.type].negativeValues;n.isDatasetVisible(r)&&t(s)&&e.each(o.data,function(t,e){var o=+i.getRightValue(t);isNaN(o)||s.data[e].hidden||(l[e]=l[e]||0,u[e]=u[e]||0,a.relativePoints?l[e]=100:0>o?(c=!0,u[e]+=o):(d=!0,l[e]+=o))})}),e.each(h,function(t){var a=t.positiveValues.concat(t.negativeValues),o=e.min(a),n=e.max(a);i.min=null===i.min?o:Math.min(i.min,o),i.max=null===i.max?n:Math.max(i.max,n)})}else e.each(s,function(a,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(a.data,function(t,e){var a=+i.getRightValue(t);isNaN(a)||r.data[e].hidden||(null===i.min?i.min=a:a<i.min&&(i.min=a),null===i.max?i.max=a:a>i.max&&(i.max=a))})});if(o.beginAtZero){var u=e.sign(i.min),f=e.sign(i.max);0>u&&0>f?i.max=0:u>0&&f>0&&(i.min=0)}void 0!==o.min?i.min=o.min:void 0!==o.suggestedMin&&(i.min=Math.min(i.min,o.suggestedMin)),void 0!==o.max?i.max=o.max:void 0!==o.suggestedMax&&(i.max=Math.max(i.max,o.suggestedMax)),i.min===i.max&&(i.max++,o.beginAtZero||i.min--)},buildTicks:function(){var i,a=this,o=a.options,n=o.ticks,r=e.getValueOrDefault,s=a.isHorizontal(),l=a.ticks=[];if(s)i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(a.width/50));else{var h=r(n.fontSize,t.defaults.global.defaultFontSize);i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(a.height/(2*h)))}i=Math.max(2,i);var d,c=n.fixedStepSize&&n.fixedStepSize>0||n.stepSize&&n.stepSize>0;if(c)d=r(n.fixedStepSize,n.stepSize);else{var u=e.niceNum(a.max-a.min,!1);d=e.niceNum(u/(i-1),!0)}var f=Math.floor(a.min/d)*d,g=Math.ceil(a.max/d)*d,p=(g-f)/d;p=e.almostEquals(p,Math.round(p),d/1e3)?Math.round(p):Math.ceil(p),l.push(void 0!==n.min?n.min:f);for(var m=1;p>m;++m)l.push(f+m*d);l.push(void 0!==n.max?n.max:g),
s||l.reverse(),a.max=e.max(l),a.min=e.min(l),n.reverse?(l.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)},getPixelForValue:function(t,e,i,a){var o,n,r=this,s=r.paddingLeft,l=r.paddingBottom,h=r.start,d=+r.getRightValue(t),c=r.end-h;return r.isHorizontal()?(n=r.width-(s+r.paddingRight),o=r.left+n/c*(d-h),Math.round(o+s)):(n=r.height-(r.paddingTop+l),o=r.bottom-l-n/c*(d-h),Math.round(o))},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),a=e.paddingLeft,o=e.paddingBottom,n=i?e.width-(a+e.paddingRight):e.height-(e.paddingTop+o),r=(i?t-e.left-a:e.bottom-o-t)/n;return e.start+(e.end-e.start)*r},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",a,i)}},{}],40:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:function(t,i,a){var o=t/Math.pow(10,Math.floor(e.log10(t)));return 1===o||2===o||5===o||0===i||i===a.length-1?t.toExponential():""}}},a=t.Scale.extend({determineDataLimits:function(){function t(t){return h?t.xAxisID===i.id:t.yAxisID===i.id}var i=this,a=i.options,o=a.ticks,n=i.chart,r=n.data,s=r.datasets,l=e.getValueOrDefault,h=i.isHorizontal();if(i.min=null,i.max=null,a.stacked){var d={};e.each(s,function(o,r){var s=n.getDatasetMeta(r);n.isDatasetVisible(r)&&t(s)&&(void 0===d[s.type]&&(d[s.type]=[]),e.each(o.data,function(t,e){var o=d[s.type],n=+i.getRightValue(t);isNaN(n)||s.data[e].hidden||(o[e]=o[e]||0,a.relativePoints?o[e]=100:o[e]+=n)}))}),e.each(d,function(t){var a=e.min(t),o=e.max(t);i.min=null===i.min?a:Math.min(i.min,a),i.max=null===i.max?o:Math.max(i.max,o)})}else e.each(s,function(a,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(a.data,function(t,e){var a=+i.getRightValue(t);isNaN(a)||r.data[e].hidden||(null===i.min?i.min=a:a<i.min&&(i.min=a),null===i.max?i.max=a:a>i.max&&(i.max=a))})});i.min=l(o.min,i.min),i.max=l(o.max,i.max),i.min===i.max&&(0!==i.min&&null!==i.min?(i.min=Math.pow(10,Math.floor(e.log10(i.min))-1),i.max=Math.pow(10,Math.floor(e.log10(i.max))+1)):(i.min=1,i.max=10))},buildTicks:function(){for(var t=this,i=t.options,a=i.ticks,o=e.getValueOrDefault,n=t.ticks=[],r=o(a.min,Math.pow(10,Math.floor(e.log10(t.min))));r<t.max;){n.push(r);var s=Math.floor(e.log10(r)),l=Math.floor(r/Math.pow(10,s))+1;10===l&&(l=1,++s),r=l*Math.pow(10,s)}var h=o(a.max,r);n.push(h),t.isHorizontal()||n.reverse(),t.max=e.max(n),t.min=e.min(n),a.reverse?(n.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,i,a,o){var n,r,s=this,l=s.start,h=+s.getRightValue(t),d=e.log10(s.end)-e.log10(l),c=s.paddingTop,u=s.paddingBottom,f=s.paddingLeft;return s.isHorizontal()?0===h?r=s.left+f:(n=s.width-(f+s.paddingRight),r=s.left+n/d*(e.log10(h)-e.log10(l)),r+=f):0===h?r=s.top+c:(n=s.height-(c+u),r=s.bottom-u-n/d*(e.log10(h)-e.log10(l))),r},getValueForPixel:function(t){var i,a,o=this,n=e.log10(o.end)-e.log10(o.start);return o.isHorizontal()?(a=o.width-(o.paddingLeft+o.paddingRight),i=o.start*Math.pow(10,(t-o.left-o.paddingLeft)*n/a)):(a=o.height-(o.paddingTop+o.paddingBottom),i=Math.pow(10,(o.bottom-o.paddingBottom-t)*n/a)/o.start),i}});t.scaleService.registerScaleType("logarithmic",a,i)}},{}],41:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,a={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},o=t.Scale.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this.options;this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var a=e.min([this.height,this.width]),o=e.getValueOrDefault(t.ticks.fontSize,i.defaultFontSize);this.drawingArea=t.display?a/2-(o/2+t.ticks.backdropPaddingY):a/2},determineDataLimits:function(){if(this.min=null,this.max=null,e.each(this.chart.data.datasets,function(t,i){if(this.chart.isDatasetVisible(i)){var a=this.chart.getDatasetMeta(i);e.each(t.data,function(t,e){var i=+this.getRightValue(t);isNaN(i)||a.data[e].hidden||(null===this.min?this.min=i:i<this.min&&(this.min=i),null===this.max?this.max=i:i>this.max&&(this.max=i))},this)}},this),this.options.ticks.beginAtZero){var t=e.sign(this.min),i=e.sign(this.max);0>t&&0>i?this.max=0:t>0&&i>0&&(this.min=0)}void 0!==this.options.ticks.min?this.min=this.options.ticks.min:void 0!==this.options.ticks.suggestedMin&&(this.min=Math.min(this.min,this.options.ticks.suggestedMin)),void 0!==this.options.ticks.max?this.max=this.options.ticks.max:void 0!==this.options.ticks.suggestedMax&&(this.max=Math.max(this.max,this.options.ticks.suggestedMax)),this.min===this.max&&(this.min--,this.max++)},buildTicks:function(){this.ticks=[];var t=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),a=Math.min(this.options.ticks.maxTicksLimit?this.options.ticks.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*t)));a=Math.max(2,a);var o=e.niceNum(this.max-this.min,!1),n=e.niceNum(o/(a-1),!0),r=Math.floor(this.min/n)*n,s=Math.ceil(this.max/n)*n,l=Math.ceil((s-r)/n);this.ticks.push(void 0!==this.options.ticks.min?this.options.ticks.min:r);for(var h=1;l>h;++h)this.ticks.push(r+h*n);this.ticks.push(void 0!==this.options.ticks.max?this.options.ticks.max:s),this.max=e.max(this.ticks),this.min=e.min(this.ticks),this.options.ticks.reverse?(this.ticks.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),this.zeroLineIndex=this.ticks.indexOf(0)},convertTicksToLabels:function(){t.Scale.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,a,o,n,r,s,l,h,d,c,u,f,g=this.options.pointLabels,p=e.getValueOrDefault(g.fontSize,i.defaultFontSize),m=e.getValueOrDefault(g.fontStyle,i.defaultFontStyle),b=e.getValueOrDefault(g.fontFamily,i.defaultFontFamily),v=e.fontString(p,m,b),x=e.min([this.height/2-p-5,this.width/2]),y=this.width,k=0;for(this.ctx.font=v,a=0;a<this.getValueCount();a++)t=this.getPointPosition(a,x),o=this.ctx.measureText(this.pointLabels[a]?this.pointLabels[a]:"").width+5,0===a||a===this.getValueCount()/2?(n=o/2,t.x+n>y&&(y=t.x+n,r=a),t.x-n<k&&(k=t.x-n,l=a)):a<this.getValueCount()/2?t.x+o>y&&(y=t.x+o,r=a):a>this.getValueCount()/2&&t.x-o<k&&(k=t.x-o,l=a);d=k,c=Math.ceil(y-this.width),s=this.getIndexAngle(r),h=this.getIndexAngle(l),u=c/Math.sin(s+Math.PI/2),f=d/Math.sin(h+Math.PI/2),u=e.isNumber(u)?u:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(x-(f+u)/2),this.setCenterPoint(f,u)},setCenterPoint:function(t,e){var i=this.width-e-this.drawingArea,a=t+this.drawingArea;this.xCenter=Math.round((a+i)/2+this.left),this.yCenter=Math.round(this.height/2+this.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,i=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>i?i:e>0&&i>0?e:0)},draw:function(){if(this.options.display){var t=this.ctx;if(e.each(this.ticks,function(a,o){if(o>0||this.options.reverse){var n=this.getDistanceFromCenterForValue(this.ticks[o]),r=this.yCenter-n;if(this.options.gridLines.display)if(t.strokeStyle=this.options.gridLines.color,t.lineWidth=this.options.gridLines.lineWidth,this.options.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var s=0;s<this.getValueCount();s++){var l=this.getPointPosition(s,this.getDistanceFromCenterForValue(this.ticks[o]));0===s?t.moveTo(l.x,l.y):t.lineTo(l.x,l.y)}t.closePath(),t.stroke()}if(this.options.ticks.display){var h=e.getValueOrDefault(this.options.ticks.fontColor,i.defaultFontColor),d=e.getValueOrDefault(this.options.ticks.fontSize,i.defaultFontSize),c=e.getValueOrDefault(this.options.ticks.fontStyle,i.defaultFontStyle),u=e.getValueOrDefault(this.options.ticks.fontFamily,i.defaultFontFamily),f=e.fontString(d,c,u);if(t.font=f,this.options.ticks.showLabelBackdrop){var g=t.measureText(a).width;t.fillStyle=this.options.ticks.backdropColor,t.fillRect(this.xCenter-g/2-this.options.ticks.backdropPaddingX,r-d/2-this.options.ticks.backdropPaddingY,g+2*this.options.ticks.backdropPaddingX,d+2*this.options.ticks.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=h,t.fillText(a,this.xCenter,r)}}},this),!this.options.lineArc){t.lineWidth=this.options.angleLines.lineWidth,t.strokeStyle=this.options.angleLines.color;for(var a=this.getValueCount()-1;a>=0;a--){if(this.options.angleLines.display){var o=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max));t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(o.x,o.y),t.stroke(),t.closePath()}var n=this.getPointPosition(a,this.getDistanceFromCenterForValue(this.options.reverse?this.min:this.max)+5),r=e.getValueOrDefault(this.options.pointLabels.fontColor,i.defaultFontColor),s=e.getValueOrDefault(this.options.pointLabels.fontSize,i.defaultFontSize),l=e.getValueOrDefault(this.options.pointLabels.fontStyle,i.defaultFontStyle),h=e.getValueOrDefault(this.options.pointLabels.fontFamily,i.defaultFontFamily),d=e.fontString(s,l,h);t.font=d,t.fillStyle=r;var c=this.pointLabels.length,u=this.pointLabels.length/2,f=u/2,g=f>a||a>c-f,p=a===f||a===c-f;0===a?t.textAlign="center":a===u?t.textAlign="center":u>a?t.textAlign="left":t.textAlign="right",p?t.textBaseline="middle":g?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.pointLabels[a]?this.pointLabels[a]:"",n.x,n.y)}}}}});t.scaleService.registerScaleType("radialLinear",o,a)}},{}],42:[function(t,e,i){"use strict";var a=t("moment");a="function"==typeof a?a:window.moment,e.exports=function(t){var e=t.helpers,i={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},o={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},n=t.Scale.extend({initialize:function(){if(!a)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){return"week"===this.options.time.unit&&this.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(this.options.time.isoWeekday):t.clone().startOf(this.tickUnit)},determineDataLimits:function(){this.labelMoments=[];var t=[];this.chart.data.labels&&this.chart.data.labels.length>0?(e.each(this.chart.data.labels,function(e,i){var a=this.parseTime(e);a.isValid()&&(this.options.time.round&&a.startOf(this.options.time.round),t.push(a))},this),this.firstTick=a.min.call(this,t),this.lastTick=a.max.call(this,t)):(this.firstTick=null,this.lastTick=null),e.each(this.chart.data.datasets,function(i,o){var n=[],r=this.chart.isDatasetVisible(o);"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(t,e){var i=this.parseTime(this.getRightValue(t));i.isValid()&&(this.options.time.round&&i.startOf(this.options.time.round),n.push(i),r&&(this.firstTick=null!==this.firstTick?a.min(this.firstTick,i):i,this.lastTick=null!==this.lastTick?a.max(this.lastTick,i):i))},this):n=t,this.labelMoments.push(n)},this),this.options.time.min&&(this.firstTick=this.parseTime(this.options.time.min)),this.options.time.max&&(this.lastTick=this.parseTime(this.options.time.max)),this.firstTick=(this.firstTick||a()).clone(),this.lastTick=(this.lastTick||a()).clone()},buildTicks:function(a){this.ctx.save();var o=e.getValueOrDefault(this.options.ticks.fontSize,t.defaults.global.defaultFontSize),n=e.getValueOrDefault(this.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(this.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(o,n,r);if(this.ctx.font=s,this.ticks=[],this.unitScale=1,this.scaleSizeInUnits=0,this.options.time.unit)this.tickUnit=this.options.time.unit||"day",this.displayFormat=this.options.time.displayFormats[this.tickUnit],this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,1);else{var l=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),h=this.tickFormatFunction(this.firstTick,0,[]),d=this.ctx.measureText(h).width,c=Math.cos(e.toRadians(this.options.ticks.maxRotation)),u=Math.sin(e.toRadians(this.options.ticks.maxRotation));d=d*c+o*u;var f=l/d;this.tickUnit="millisecond",this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0),this.displayFormat=this.options.time.displayFormats[this.tickUnit];for(var g=0,p=i.units[g];g<i.units.length;){if(this.unitScale=1,e.isArray(p.steps)&&Math.ceil(this.scaleSizeInUnits/f)<e.max(p.steps)){for(var m=0;m<p.steps.length;++m)if(p.steps[m]>=Math.ceil(this.scaleSizeInUnits/f)){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,p.steps[m]);break}break}if(p.maxStep===!1||Math.ceil(this.scaleSizeInUnits/f)<p.maxStep){this.unitScale=e.getValueOrDefault(this.options.time.unitStepSize,Math.ceil(this.scaleSizeInUnits/f));break}++g,p=i.units[g],this.tickUnit=p.name;var b=this.firstTick.diff(this.getMomentStartOf(this.firstTick),this.tickUnit,!0),v=this.getMomentStartOf(this.lastTick.clone().add(1,this.tickUnit)).diff(this.lastTick,this.tickUnit,!0);this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0)+b+v,this.displayFormat=this.options.time.displayFormats[p.name]}}var x;if(this.options.time.min?x=this.getMomentStartOf(this.firstTick):(this.firstTick=this.getMomentStartOf(this.firstTick),x=this.firstTick),!this.options.time.max){var y=this.getMomentStartOf(this.lastTick);0!==y.diff(this.lastTick,this.tickUnit,!0)&&(this.lastTick=this.getMomentStartOf(this.lastTick.add(1,this.tickUnit)))}this.smallestLabelSeparation=this.width,e.each(this.chart.data.datasets,function(t,e){for(var i=1;i<this.labelMoments[e].length;i++)this.smallestLabelSeparation=Math.min(this.smallestLabelSeparation,this.labelMoments[e][i].diff(this.labelMoments[e][i-1],this.tickUnit,!0))},this),this.options.time.displayFormat&&(this.displayFormat=this.options.time.displayFormat),this.ticks.push(this.firstTick.clone());for(var k=1;k<=this.scaleSizeInUnits;++k){var S=x.clone().add(k,this.tickUnit);if(this.options.time.max&&S.diff(this.lastTick,this.tickUnit,!0)>=0)break;k%this.unitScale===0&&this.ticks.push(S)}var C=this.ticks[this.ticks.length-1].diff(this.lastTick,this.tickUnit);(0!==C||0===this.scaleSizeInUnits)&&(this.options.time.max?(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.ticks[0],this.tickUnit,!0)):(this.ticks.push(this.lastTick.clone()),this.scaleSizeInUnits=this.lastTick.diff(this.firstTick,this.tickUnit,!0))),this.ctx.restore()},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"";return"object"==typeof this.chart.data.datasets[e].data[0]&&(i=this.getRightValue(this.chart.data.datasets[e].data[t])),this.options.time.tooltipFormat&&(i=this.parseTime(i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,a){var o=t.format(this.displayFormat),n=this.options.ticks,r=e.getValueOrDefault(n.callback,n.userCallback);return r?r(o,i,a):o},convertTicksToLabels:function(){this.tickMoments=this.ticks,this.ticks=this.ticks.map(this.tickFormatFunction,this)},getPixelForValue:function(t,e,i,a){var o=t&&t.isValid&&t.isValid()?t:this.getLabelMoment(i,e);if(o){var n=o.diff(this.firstTick,this.tickUnit,!0),r=n/this.scaleSizeInUnits;if(this.isHorizontal()){var s=this.width-(this.paddingLeft+this.paddingRight),l=(s/Math.max(this.ticks.length-1,1),s*r+this.paddingLeft);return this.left+Math.round(l)}var h=this.height-(this.paddingTop+this.paddingBottom),d=(h/Math.max(this.ticks.length-1,1),h*r+this.paddingTop);return this.top+Math.round(d)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this.isHorizontal()?this.width-(this.paddingLeft+this.paddingRight):this.height-(this.paddingTop+this.paddingBottom),i=(t-(this.isHorizontal()?this.left+this.paddingLeft:this.top+this.paddingTop))/e;return i*=this.scaleSizeInUnits,this.firstTick.clone().add(a.duration(i,this.tickUnit).asSeconds(),"seconds")},parseTime:function(t){return"string"==typeof this.options.time.parser?a(t,this.options.time.parser):"function"==typeof this.options.time.parser?this.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?a(t):t.isValid&&t.isValid()?t:"string"!=typeof this.options.time.format&&this.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),this.options.time.format(t)):a(t,this.options.time.format)}});t.scaleService.registerScaleType("time",n,o)}},{moment:1}]},{},[7]);

(function(){var AnimatedText,AnimatedTextFactory,Bar,BaseDonut,BaseGauge,Donut,Gauge,GaugePointer,TextRenderer,ValueUpdater,addCommas,cutHex,formatNumber,mergeObjects,secondsToString,updateObjectValues,_ref,_ref1,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;};(function(){var browserRequestAnimationFrame,isCancelled,lastId,vendor,vendors,_i,_len;vendors=['ms','moz','webkit','o'];for(_i=0,_len=vendors.length;_i<_len;_i++){vendor=vendors[_i];if(window.requestAnimationFrame){break;}
window.requestAnimationFrame=window[vendor+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendor+'CancelAnimationFrame']||window[vendor+'CancelRequestAnimationFrame'];}
browserRequestAnimationFrame=null;lastId=0;isCancelled={};if(!requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime,id,lastTime,timeToCall;currTime=new Date().getTime();timeToCall=Math.max(0,16-(currTime-lastTime));id=window.setTimeout(function(){return callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};return window.cancelAnimationFrame=function(id){return clearTimeout(id);};}else if(!window.cancelAnimationFrame){browserRequestAnimationFrame=window.requestAnimationFrame;window.requestAnimationFrame=function(callback,element){var myId;myId=++lastId;browserRequestAnimationFrame(function(){if(!isCancelled[myId]){return callback();}},element);return myId;};return window.cancelAnimationFrame=function(id){return isCancelled[id]=true;};}})();String.prototype.hashCode=function(){var char,hash,i,_i,_ref;hash=0;if(this.length===0){return hash;}
for(i=_i=0,_ref=this.length;0<=_ref?_i<_ref:_i>_ref;i=0<=_ref?++_i:--_i){char=this.charCodeAt(i);hash=((hash<<5)-hash)+char;hash=hash&hash;}
return hash;};secondsToString=function(sec){var hr,min;hr=Math.floor(sec/3600);min=Math.floor((sec-(hr*3600))/60);sec-=(hr*3600)+(min*60);sec+='';min+='';while(min.length<2){min='0'+min;}
while(sec.length<2){sec='0'+sec;}
hr=hr?hr+':':'';return hr+min+':'+sec;};formatNumber=function(num){return addCommas(num.toFixed(0));};updateObjectValues=function(obj1,obj2){var key,val;for(key in obj2){if(!__hasProp.call(obj2,key))continue;val=obj2[key];obj1[key]=val;}
return obj1;};mergeObjects=function(obj1,obj2){var key,out,val;out={};for(key in obj1){if(!__hasProp.call(obj1,key))continue;val=obj1[key];out[key]=val;}
for(key in obj2){if(!__hasProp.call(obj2,key))continue;val=obj2[key];out[key]=val;}
return out;};addCommas=function(nStr){var rgx,x,x1,x2;nStr+='';x=nStr.split('.');x1=x[0];x2='';if(x.length>1){x2='.'+x[1];}
rgx=/(\d+)(\d{3})/;while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+','+'$2');}
return x1+x2;};cutHex=function(nStr){if(nStr.charAt(0)==="#"){return nStr.substring(1,7);}
return nStr;};ValueUpdater=(function(){ValueUpdater.prototype.animationSpeed=32;function ValueUpdater(addToAnimationQueue,clear){if(addToAnimationQueue==null){addToAnimationQueue=true;}
this.clear=clear!=null?clear:true;if(addToAnimationQueue){AnimationUpdater.add(this);}}
ValueUpdater.prototype.update=function(force){var diff;if(force==null){force=false;}
if(force||this.displayedValue!==this.value){if(this.ctx&&this.clear){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);}
diff=this.value-this.displayedValue;if(Math.abs(diff/this.animationSpeed)<=0.001){this.displayedValue=this.value;}else{this.displayedValue=this.displayedValue+diff/this.animationSpeed;}
this.render();return true;}
return false;};return ValueUpdater;})();BaseGauge=(function(_super){__extends(BaseGauge,_super);function BaseGauge(){_ref=BaseGauge.__super__.constructor.apply(this,arguments);return _ref;}
BaseGauge.prototype.displayScale=1;BaseGauge.prototype.setTextField=function(textField){return this.textField=textField instanceof TextRenderer?textField:new TextRenderer(textField);};BaseGauge.prototype.setMinValue=function(minValue,updateStartValue){var gauge,_i,_len,_ref1,_results;this.minValue=minValue;if(updateStartValue==null){updateStartValue=true;}
if(updateStartValue){this.displayedValue=this.minValue;_ref1=this.gp||[];_results=[];for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];_results.push(gauge.displayedValue=this.minValue);}
return _results;}};BaseGauge.prototype.setOptions=function(options){if(options==null){options=null;}
this.options=mergeObjects(this.options,options);if(this.textField){this.textField.el.style.fontSize=options.fontSize+'px';}
if(this.options.angle>.5){this.gauge.options.angle=.5;}
this.configDisplayScale();return this;};BaseGauge.prototype.configDisplayScale=function(){var backingStorePixelRatio,devicePixelRatio,height,prevDisplayScale,width;prevDisplayScale=this.displayScale;if(this.options.highDpiSupport===false){delete this.displayScale;}else{devicePixelRatio=window.devicePixelRatio||1;backingStorePixelRatio=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1;this.displayScale=devicePixelRatio/backingStorePixelRatio;}
if(this.displayScale!==prevDisplayScale){width=this.canvas.G__width||this.canvas.width;height=this.canvas.G__height||this.canvas.height;this.canvas.width=width*this.displayScale;this.canvas.height=height*this.displayScale;this.canvas.style.width=""+width+"px";this.canvas.style.height=""+height+"px";this.canvas.G__width=width;this.canvas.G__height=height;}
return this;};return BaseGauge;})(ValueUpdater);TextRenderer=(function(){function TextRenderer(el){this.el=el;}
TextRenderer.prototype.render=function(gauge){return this.el.innerHTML=formatNumber(gauge.displayedValue);};return TextRenderer;})();AnimatedText=(function(_super){__extends(AnimatedText,_super);AnimatedText.prototype.displayedValue=0;AnimatedText.prototype.value=0;AnimatedText.prototype.setVal=function(value){return this.value=1*value;};function AnimatedText(elem,text){this.elem=elem;this.text=text!=null?text:false;this.value=1*this.elem.innerHTML;if(this.text){this.value=0;}}
AnimatedText.prototype.render=function(){var textVal;if(this.text){textVal=secondsToString(this.displayedValue.toFixed(0));}else{textVal=addCommas(formatNumber(this.displayedValue));}
return this.elem.innerHTML=textVal;};return AnimatedText;})(ValueUpdater);AnimatedTextFactory={create:function(objList){var elem,out,_i,_len;out=[];for(_i=0,_len=objList.length;_i<_len;_i++){elem=objList[_i];out.push(new AnimatedText(elem));}
return out;}};GaugePointer=(function(_super){__extends(GaugePointer,_super);GaugePointer.prototype.displayedValue=0;GaugePointer.prototype.value=0;GaugePointer.prototype.options={strokeWidth:0.035,length:0.1,color:"#000000"};function GaugePointer(gauge){this.gauge=gauge;this.ctx=this.gauge.ctx;this.canvas=this.gauge.canvas;GaugePointer.__super__.constructor.call(this,false,false);this.setOptions();}
GaugePointer.prototype.setOptions=function(options){if(options==null){options=null;}
updateObjectValues(this.options,options);this.length=this.canvas.height*this.options.length;this.strokeWidth=this.canvas.height*this.options.strokeWidth;this.maxValue=this.gauge.maxValue;this.minValue=this.gauge.minValue;this.animationSpeed=this.gauge.animationSpeed;return this.options.angle=this.gauge.options.angle;};GaugePointer.prototype.render=function(){var angle,centerX,centerY,endX,endY,startX,startY,x,y;angle=this.gauge.getAngle.call(this,this.displayedValue);centerX=this.canvas.width/2;centerY=this.canvas.height*0.9;x=Math.round(centerX+this.length*Math.cos(angle));y=Math.round(centerY+this.length*Math.sin(angle));startX=Math.round(centerX+this.strokeWidth*Math.cos(angle-Math.PI/2));startY=Math.round(centerY+this.strokeWidth*Math.sin(angle-Math.PI/2));endX=Math.round(centerX+this.strokeWidth*Math.cos(angle+Math.PI/2));endY=Math.round(centerY+this.strokeWidth*Math.sin(angle+Math.PI/2));this.ctx.fillStyle=this.options.color;this.ctx.beginPath();this.ctx.arc(centerX,centerY,this.strokeWidth,0,Math.PI*2,true);this.ctx.fill();this.ctx.beginPath();this.ctx.moveTo(startX,startY);this.ctx.lineTo(x,y);this.ctx.lineTo(endX,endY);return this.ctx.fill();};return GaugePointer;})(ValueUpdater);Bar=(function(){function Bar(elem){this.elem=elem;}
Bar.prototype.updateValues=function(arrValues){this.value=arrValues[0];this.maxValue=arrValues[1];this.avgValue=arrValues[2];return this.render();};Bar.prototype.render=function(){var avgPercent,valPercent;if(this.textField){this.textField.text(formatNumber(this.value));}
if(this.maxValue===0){this.maxValue=this.avgValue*2;}
valPercent=(this.value/this.maxValue)*100;avgPercent=(this.avgValue/this.maxValue)*100;$(".bar-value",this.elem).css({"width":valPercent+"%"});return $(".typical-value",this.elem).css({"width":avgPercent+"%"});};return Bar;})();Gauge=(function(_super){__extends(Gauge,_super);Gauge.prototype.elem=null;Gauge.prototype.value=[20];Gauge.prototype.maxValue=80;Gauge.prototype.minValue=0;Gauge.prototype.displayedAngle=0;Gauge.prototype.displayedValue=0;Gauge.prototype.lineWidth=40;Gauge.prototype.paddingBottom=0.1;Gauge.prototype.percentColors=null;Gauge.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:0.8,strokeWidth:0.035},angle:0.15,lineWidth:0.44,fontSize:40,limitMax:false};function Gauge(canvas){this.canvas=canvas;Gauge.__super__.constructor.call(this);this.percentColors=null;if(typeof G_vmlCanvasManager!=='undefined'){this.canvas=window.G_vmlCanvasManager.initElement(this.canvas);}
this.ctx=this.canvas.getContext('2d');this.gp=[new GaugePointer(this)];this.setOptions();this.render();}
Gauge.prototype.setOptions=function(options){var gauge,_i,_len,_ref1;if(options==null){options=null;}
Gauge.__super__.setOptions.call(this,options);this.configPercentColors();this.lineWidth=this.canvas.height*(1-this.paddingBottom)*this.options.lineWidth;this.radius=this.canvas.height*(1-this.paddingBottom)-this.lineWidth;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.render();_ref1=this.gp;for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];gauge.setOptions(this.options.pointer);gauge.render();}
return this;};Gauge.prototype.configPercentColors=function(){var bval,gval,i,rval,_i,_ref1,_results;this.percentColors=null;if(this.options.percentColors!==void 0){this.percentColors=new Array();_results=[];for(i=_i=0,_ref1=this.options.percentColors.length-1;0<=_ref1?_i<=_ref1:_i>=_ref1;i=0<=_ref1?++_i:--_i){rval=parseInt((cutHex(this.options.percentColors[i][1])).substring(0,2),16);gval=parseInt((cutHex(this.options.percentColors[i][1])).substring(2,4),16);bval=parseInt((cutHex(this.options.percentColors[i][1])).substring(4,6),16);_results.push(this.percentColors[i]={pct:this.options.percentColors[i][0],color:{r:rval,g:gval,b:bval}});}
return _results;}};Gauge.prototype.set=function(value){var i,max_hit,val,_i,_j,_len,_ref1;if(!(value instanceof Array)){value=[value];}
if(value.length>this.gp.length){for(i=_i=0,_ref1=value.length-this.gp.length;0<=_ref1?_i<_ref1:_i>_ref1;i=0<=_ref1?++_i:--_i){this.gp.push(new GaugePointer(this));}}
i=0;max_hit=false;for(_j=0,_len=value.length;_j<_len;_j++){val=value[_j];if(val>this.maxValue){this.maxValue=this.value*1.1;max_hit=true;}
this.gp[i].value=val;this.gp[i++].setOptions({maxValue:this.maxValue,angle:this.options.angle});}
this.value=value[value.length-1];if(max_hit){if(!this.options.limitMax){return AnimationUpdater.run();}}else{return AnimationUpdater.run();}};Gauge.prototype.getAngle=function(value){return(1+this.options.angle)*Math.PI+((value-this.minValue)/(this.maxValue-this.minValue))*(1-this.options.angle*2)*Math.PI;};Gauge.prototype.getColorForPercentage=function(pct,grad){var color,endColor,i,rangePct,startColor,_i,_ref1;if(pct===0){color=this.percentColors[0].color;}else{color=this.percentColors[this.percentColors.length-1].color;for(i=_i=0,_ref1=this.percentColors.length-1;0<=_ref1?_i<=_ref1:_i>=_ref1;i=0<=_ref1?++_i:--_i){if(pct<=this.percentColors[i].pct){if(grad===true){startColor=this.percentColors[i-1];endColor=this.percentColors[i];rangePct=(pct-startColor.pct)/(endColor.pct-startColor.pct);color={r:Math.floor(startColor.color.r*(1-rangePct)+endColor.color.r*rangePct),g:Math.floor(startColor.color.g*(1-rangePct)+endColor.color.g*rangePct),b:Math.floor(startColor.color.b*(1-rangePct)+endColor.color.b*rangePct)};}else{color=this.percentColors[i].color;}
break;}}}
return'rgb('+[color.r,color.g,color.b].join(',')+')';};Gauge.prototype.getColorForValue=function(val,grad){var pct;pct=(val-this.minValue)/(this.maxValue-this.minValue);return this.getColorForPercentage(pct,grad);};Gauge.prototype.render=function(){var displayedAngle,fillStyle,gauge,h,w,_i,_len,_ref1,_results;w=this.canvas.width/2;h=this.canvas.height*(1-this.paddingBottom);displayedAngle=this.getAngle(this.displayedValue);if(this.textField){this.textField.render(this);}
this.ctx.lineCap="butt";if(this.options.customFillStyle!==void 0){fillStyle=this.options.customFillStyle(this);}else if(this.percentColors!==null){fillStyle=this.getColorForValue(this.displayedValue,true);}else if(this.options.colorStop!==void 0){if(this.options.gradientType===0){fillStyle=this.ctx.createRadialGradient(w,h,9,w,h,70);}else{fillStyle=this.ctx.createLinearGradient(0,0,w,0);}
fillStyle.addColorStop(0,this.options.colorStart);fillStyle.addColorStop(1,this.options.colorStop);}else{fillStyle=this.options.colorStart;}
this.ctx.strokeStyle=fillStyle;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1+this.options.angle)*Math.PI,displayedAngle,false);this.ctx.lineWidth=this.lineWidth;this.ctx.stroke();this.ctx.strokeStyle=this.options.strokeColor;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,displayedAngle,(2-this.options.angle)*Math.PI,false);this.ctx.stroke();_ref1=this.gp;_results=[];for(_i=0,_len=_ref1.length;_i<_len;_i++){gauge=_ref1[_i];_results.push(gauge.update(true));}
return _results;};return Gauge;})(BaseGauge);BaseDonut=(function(_super){__extends(BaseDonut,_super);BaseDonut.prototype.lineWidth=15;BaseDonut.prototype.displayedValue=0;BaseDonut.prototype.value=33;BaseDonut.prototype.maxValue=80;BaseDonut.prototype.minValue=0;BaseDonut.prototype.options={lineWidth:0.10,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:0.35};function BaseDonut(canvas){this.canvas=canvas;BaseDonut.__super__.constructor.call(this);if(typeof G_vmlCanvasManager!=='undefined'){this.canvas=window.G_vmlCanvasManager.initElement(this.canvas);}
this.ctx=this.canvas.getContext('2d');this.setOptions();this.render();}
BaseDonut.prototype.getAngle=function(value){return(1-this.options.angle)*Math.PI+((value-this.minValue)/(this.maxValue-this.minValue))*((2+this.options.angle)-(1-this.options.angle))*Math.PI;};BaseDonut.prototype.setOptions=function(options){if(options==null){options=null;}
BaseDonut.__super__.setOptions.call(this,options);this.lineWidth=this.canvas.height*this.options.lineWidth;this.radius=this.canvas.height/2-this.lineWidth/2;return this;};BaseDonut.prototype.set=function(value){this.value=value;if(this.value>this.maxValue){this.maxValue=this.value*1.1;}
return AnimationUpdater.run();};BaseDonut.prototype.render=function(){var displayedAngle,grdFill,h,start,stop,w;displayedAngle=this.getAngle(this.displayedValue);w=this.canvas.width/2;h=this.canvas.height/2;if(this.textField){this.textField.render(this);}
grdFill=this.ctx.createRadialGradient(w,h,39,w,h,70);grdFill.addColorStop(0,this.options.colorStart);grdFill.addColorStop(1,this.options.colorStop);start=this.radius-this.lineWidth/2;stop=this.radius+this.lineWidth/2;this.ctx.strokeStyle=this.options.strokeColor;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,false);this.ctx.lineWidth=this.lineWidth;this.ctx.lineCap="round";this.ctx.stroke();this.ctx.strokeStyle=grdFill;this.ctx.beginPath();this.ctx.arc(w,h,this.radius,(1-this.options.angle)*Math.PI,displayedAngle,false);return this.ctx.stroke();};return BaseDonut;})(BaseGauge);Donut=(function(_super){__extends(Donut,_super);function Donut(){_ref1=Donut.__super__.constructor.apply(this,arguments);return _ref1;}
Donut.prototype.strokeGradient=function(w,h,start,stop){var grd;grd=this.ctx.createRadialGradient(w,h,start,w,h,stop);grd.addColorStop(0,this.options.shadowColor);grd.addColorStop(0.12,this.options._orgStrokeColor);grd.addColorStop(0.88,this.options._orgStrokeColor);grd.addColorStop(1,this.options.shadowColor);return grd;};Donut.prototype.setOptions=function(options){var h,start,stop,w;if(options==null){options=null;}
Donut.__super__.setOptions.call(this,options);w=this.canvas.width/2;h=this.canvas.height/2;start=this.radius-this.lineWidth/2;stop=this.radius+this.lineWidth/2;this.options._orgStrokeColor=this.options.strokeColor;this.options.strokeColor=this.strokeGradient(w,h,start,stop);return this;};return Donut;})(BaseDonut);window.AnimationUpdater={elements:[],animId:null,addAll:function(list){var elem,_i,_len,_results;_results=[];for(_i=0,_len=list.length;_i<_len;_i++){elem=list[_i];_results.push(AnimationUpdater.elements.push(elem));}
return _results;},add:function(object){return AnimationUpdater.elements.push(object);},run:function(){var animationFinished,elem,_i,_len,_ref2;animationFinished=true;_ref2=AnimationUpdater.elements;for(_i=0,_len=_ref2.length;_i<_len;_i++){elem=_ref2[_i];if(elem.update()){animationFinished=false;}}
if(!animationFinished){return AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run);}else{return cancelAnimationFrame(AnimationUpdater.animId);}}};window.Gauge=Gauge;window.Donut=Donut;window.BaseDonut=BaseDonut;window.TextRenderer=TextRenderer;}).call(this);
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */
!function(t){"use strict";var e=function(n,s){this.$element=t(n),this.options=t.extend({},e.defaults,s)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,s=n.parent(),a=this.$back_text,r=this.$front_text,i=this.options,o=parseInt(n.attr("data-transitiongoal")),h=parseInt(n.attr("aria-valuemin"))||0,d=parseInt(n.attr("aria-valuemax"))||100,f=s.hasClass("vertical"),p=i.update&&"function"==typeof i.update?i.update:e.defaults.update,u=i.done&&"function"==typeof i.done?i.done:e.defaults.done,c=i.fail&&"function"==typeof i.fail?i.fail:e.defaults.fail;if(isNaN(o))return void c("data-transitiongoal not set");var l=Math.round(100*(o-h)/(d-h));if("center"===i.display_text&&!a&&!r){this.$back_text=a=t("<span>").addClass("progressbar-back-text").prependTo(s),this.$front_text=r=t("<span>").addClass("progressbar-front-text").prependTo(n);var g;f?(g=s.css("height"),a.css({height:g,"line-height":g}),r.css({height:g,"line-height":g}),t(window).resize(function(){g=s.css("height"),a.css({height:g,"line-height":g}),r.css({height:g,"line-height":g})})):(g=s.css("width"),r.css({width:g}),t(window).resize(function(){g=s.css("width"),r.css({width:g})}))}setTimeout(function(){var t,e,c,g,_;f?n.css("height",l+"%"):n.css("width",l+"%");var x=setInterval(function(){f?(c=n.height(),g=s.height()):(c=n.width(),g=s.width()),t=Math.round(100*c/g),e=Math.round(h+c/g*(d-h)),t>=l&&(t=l,e=o,u(n),clearInterval(x)),"none"!==i.display_text&&(_=i.use_percentage?i.percent_format(t):i.amount_format(e,d,h),"fill"===i.display_text?n.text(_):"center"===i.display_text&&(a.text(_),r.text(_))),n.attr("aria-valuenow",e),p(t,n)},i.refresh_speed)},i.transition_delay)};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var s=t(this),a=s.data("bs.progressbar"),r="object"==typeof n&&n;a&&r&&t.extend(a.options,r),a||s.data("bs.progressbar",a=new e(this,r)),a.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);

(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function(draw) {
      if(typeof draw === "string")
        draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

      return draw;
    },
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));

/*!
 * JQVMap: jQuery Vector Map Library
 * @author JQVMap <me@peterschmalfeldt.com>
 * @version 1.5.1
 * @link http://jqvmap.com
 * @license https://github.com/manifestinteractive/jqvmap/blob/master/LICENSE
 * @builddate 2016/05/18
 */

var VectorCanvas = function (width, height, params) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';
  this.params = params;

  if (this.mode === 'svg') {
    this.createSvgNode = function (nodeName) {
      return document.createElementNS(this.svgns, nodeName);
    };
  } else {
    try {
      if (!document.namespaces.rvml) {
        document.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml');
      }
      this.createVmlNode = function (tagName) {
        return document.createElement('<rvml:' + tagName + ' class="rvml">');
      };
    } catch (e) {
      this.createVmlNode = function (tagName) {
        return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
      };
    }

    document.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)');
  }

  if (this.mode === 'svg') {
    this.canvas = this.createSvgNode('svg');
  } else {
    this.canvas = this.createVmlNode('group');
    this.canvas.style.position = 'absolute';
  }

  this.setSize(width, height);
};

VectorCanvas.prototype = {
  svgns: 'http://www.w3.org/2000/svg',
  mode: 'svg',
  width: 0,
  height: 0,
  canvas: null
};

var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
  if (colors) {
    this.setColors(colors);
  }
  if (normalizeFunction) {
    this.setNormalizeFunction(normalizeFunction);
  }
  if (minValue) {
    this.setMin(minValue);
  }
  if (minValue) {
    this.setMax(maxValue);
  }
};

ColorScale.prototype = {
  colors: []
};

var JQVMap = function (params) {
  params = params || {};
  var map = this;
  var mapData = JQVMap.maps[params.map];
  var mapPins;

  if( !mapData){
    throw new Error('Invalid "' + params.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
  }

  this.selectedRegions = [];
  this.multiSelectRegion = params.multiSelectRegion;

  this.container = params.container;

  this.defaultWidth = mapData.width;
  this.defaultHeight = mapData.height;

  this.color = params.color;
  this.selectedColor = params.selectedColor;
  this.hoverColor = params.hoverColor;
  this.hoverColors = params.hoverColors;
  this.hoverOpacity = params.hoverOpacity;
  this.setBackgroundColor(params.backgroundColor);

  this.width = params.container.width();
  this.height = params.container.height();

  this.resize();

  jQuery(window).resize(function () {
    var newWidth = params.container.width();
    var newHeight = params.container.height();

    if(newWidth && newHeight){
      map.width = newWidth;
      map.height = newHeight;
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();

      var resizeEvent = jQuery.Event('resize.jqvmap');
      jQuery(params.container).trigger(resizeEvent, [newWidth, newHeight]);

      if(mapPins){
        jQuery('.jqvmap-pin').remove();
        map.pinHandlers = false;
        map.placePins(mapPins.pins, mapPins.mode);
      }
    }
  });

  this.canvas = new VectorCanvas(this.width, this.height, params);
  params.container.append(this.canvas.canvas);

  this.makeDraggable();

  this.rootGroup = this.canvas.createGroup(true);

  this.index = JQVMap.mapIndex;
  this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

  if (params.enableZoom) {
    jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
    jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
  }

  map.countries = [];

  for (var key in mapData.paths) {
    var path = this.canvas.createPath({
      path: mapData.paths[key].path
    });

    path.setFill(this.color);
    path.id = map.getCountryId(key);
    map.countries[key] = path;

    if (this.canvas.mode === 'svg') {
      path.setAttribute('class', 'jqvmap-region');
    } else {
      jQuery(path).addClass('jqvmap-region');
    }

    jQuery(this.rootGroup).append(path);
  }

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
    var containerPath = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = jQuery.Event('labelShow.jqvmap'),
      regionMouseOverEvent = jQuery.Event('regionMouseOver.jqvmap');

    code = code.toLowerCase();

    if (e.type === 'mouseover') {
      jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.paths[code].name]);
      if (!regionMouseOverEvent.isDefaultPrevented()) {
        map.highlight(code, containerPath);
      }
      if (params.showTooltip) {
        map.label.text(mapData.paths[code].name);
        jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

        if (!labelShowEvent.isDefaultPrevented()) {
          map.label.show();
          map.labelWidth = map.label.width();
          map.labelHeight = map.label.height();
        }
      }
    } else {
      map.unhighlight(code, containerPath);

      map.label.hide();
      jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.paths[code].name]);
    }
  });

  jQuery(params.container).delegate(this.canvas.mode === 'svg' ? 'path' : 'shape', 'click', function (regionClickEvent) {

    var targetPath = regionClickEvent.target;
    var code = regionClickEvent.target.id.split('_').pop();
    var mapClickEvent = jQuery.Event('regionClick.jqvmap');

    code = code.toLowerCase();

    jQuery(params.container).trigger(mapClickEvent, [code, mapData.paths[code].name]);

    if ( !params.multiSelectRegion && !mapClickEvent.isDefaultPrevented()) {
      for (var keyPath in mapData.paths) {
        map.countries[keyPath].currentFillColor = map.countries[keyPath].getOriginalFill();
        map.countries[keyPath].setFill(map.countries[keyPath].getOriginalFill());
      }
    }

    if ( !mapClickEvent.isDefaultPrevented()) {
      if (map.isSelected(code)) {
        map.deselect(code, targetPath);
      } else {
        map.select(code, targetPath);
      }
    }
  });

  if (params.showTooltip) {
    params.container.mousemove(function (e) {
      if (map.label.is(':visible')) {
        var left = e.pageX - 15 - map.labelWidth;
        var top = e.pageY - 15 - map.labelHeight;

        if(left < 0) {
          left = e.pageX + 15;
        }
        if(top < 0) {
          top = e.pageY + 15;
        }

        map.label.css({
          left: left,
          top: top
        });
      }
    });
  }

  this.setColors(params.colors);

  this.canvas.canvas.appendChild(this.rootGroup);

  this.applyTransform();

  this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

  if (params.values) {
    this.values = params.values;
    this.setValues(params.values);
  }

  if (params.selectedRegions) {
    if (params.selectedRegions instanceof Array) {
      for(var k in params.selectedRegions) {
        this.select(params.selectedRegions[k].toLowerCase());
      }
    } else {
      this.select(params.selectedRegions.toLowerCase());
    }
  }

  this.bindZoomButtons();

  if(params.pins) {
    mapPins = {
      pins: params.pins,
      mode: params.pinMode
    };

    this.pinHandlers = false;
    this.placePins(params.pins, params.pinMode);
  }

  if(params.showLabels){
    this.pinHandlers = false;

    var pins = {};
    for (key in map.countries){
      if (typeof map.countries[key] !== 'function') {
        if( !params.pins || !params.pins[key] ){
          pins[key] = key.toUpperCase();
        }
      }
    }

    mapPins = {
      pins: pins,
      mode: 'content'
    };

    this.placePins(pins, 'content');
  }

  JQVMap.mapIndex++;
};

JQVMap.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,
  width: 0,
  height: 0,
  countries: {},
  countriesColors: {},
  countriesData: {},
  zoomStep: 1.4,
  zoomMaxStep: 4,
  zoomCurStep: 1
};

JQVMap.xlink = 'http://www.w3.org/1999/xlink';
JQVMap.mapIndex = 1;
JQVMap.maps = {};

(function(){

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onLoad: 'load',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect',
    onResize: 'resize'
  };

  jQuery.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      hoverColors: {},
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      JQVMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
      typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      jQuery.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new JQVMap(defaultParams);

      this.data('mapObject', map);

      this.unbind('.jqvmap');

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }

      var loadEvent = jQuery.Event('load.jqvmap');
      jQuery(defaultParams.container).trigger(loadEvent, map);

      return map;
    }
  };

})(jQuery);

ColorScale.arrayToRgb = function (ar) {
  var rgb = '#';
  var d;
  for (var i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length === 1 ? '0' + d : d;
  }
  return rgb;
};

ColorScale.prototype.getColor = function (value) {
  if (typeof this.normalize === 'function') {
    value = this.normalize(value);
  }

  var lengthes = [];
  var fullLength = 0;
  var l;

  for (var i = 0; i < this.colors.length - 1; i++) {
    l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
    lengthes.push(l);
    fullLength += l;
  }

  var c = (this.maxValue - this.minValue) / fullLength;

  for (i = 0; i < lengthes.length; i++) {
    lengthes[i] *= c;
  }

  i = 0;
  value -= this.minValue;

  while (value - lengthes[i] >= 0) {
    value -= lengthes[i];
    i++;
  }

  var color;
  if (i === this.colors.length - 1) {
    color = this.vectorToNum(this.colors[i]).toString(16);
  } else {
    color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
  }

  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
};

ColorScale.rgbToArray = function (rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};

ColorScale.prototype.setColors = function (colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] = ColorScale.rgbToArray(colors[i]);
  }
  this.colors = colors;
};

ColorScale.prototype.setMax = function (max) {
  this.clearMaxValue = max;
  if (typeof this.normalize === 'function') {
    this.maxValue = this.normalize(max);
  } else {
    this.maxValue = max;
  }
};

ColorScale.prototype.setMin = function (min) {
  this.clearMinValue = min;

  if (typeof this.normalize === 'function') {
    this.minValue = this.normalize(min);
  } else {
    this.minValue = min;
  }
};

ColorScale.prototype.setNormalizeFunction = function (f) {
  if (f === 'polynomial') {
    this.normalize = function (value) {
      return Math.pow(value, 0.2);
    };
  } else if (f === 'linear') {
    delete this.normalize;
  } else {
    this.normalize = f;
  }
  this.setMin(this.clearMinValue);
  this.setMax(this.clearMaxValue);
};

ColorScale.prototype.vectorAdd = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] + vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorLength = function (vector) {
  var result = 0;
  for (var i = 0; i < vector.length; i++) {
    result += vector[i] * vector[i];
  }
  return Math.sqrt(result);
};

ColorScale.prototype.vectorMult = function (vector, num) {
  var result = [];
  for (var i = 0; i < vector.length; i++) {
    result[i] = vector[i] * num;
  }
  return result;
};

ColorScale.prototype.vectorSubtract = function (vector1, vector2) {
  var vector = [];
  for (var i = 0; i < vector1.length; i++) {
    vector[i] = vector1[i] - vector2[i];
  }
  return vector;
};

ColorScale.prototype.vectorToNum = function (vector) {
  var num = 0;
  for (var i = 0; i < vector.length; i++) {
    num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
  }
  return num;
};

JQVMap.prototype.applyTransform = function () {
  var maxTransX, maxTransY, minTransX, minTransY;
  if (this.defaultWidth * this.scale <= this.width) {
    maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  } else {
    maxTransX = 0;
    minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  }

  if (this.defaultHeight * this.scale <= this.height) {
    maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  } else {
    maxTransY = 0;
    minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  }

  if (this.transY > maxTransY) {
    this.transY = maxTransY;
  } else if (this.transY < minTransY) {
    this.transY = minTransY;
  }
  if (this.transX > maxTransX) {
    this.transX = maxTransX;
  } else if (this.transX < minTransX) {
    this.transX = minTransX;
  }

  this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
};

JQVMap.prototype.bindZoomButtons = function () {
  var map = this;
  this.container.find('.jqvmap-zoomin').click(function(){
    map.zoomIn();
  });
  this.container.find('.jqvmap-zoomout').click(function(){
    map.zoomOut();
  });
};

JQVMap.prototype.deselect = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (this.isSelected(cc)) {
    this.selectedRegions.splice(this.selectIndex(cc), 1);

    jQuery(this.container).trigger('regionDeselect.jqvmap', [cc]);
    path.currentFillColor = path.getOriginalFill();
    path.setFill(path.getOriginalFill());
  } else {
    for (var key in this.countries) {
      this.selectedRegions.splice(this.selectedRegions.indexOf(key), 1);
      this.countries[key].currentFillColor = this.color;
      this.countries[key].setFill(this.color);
    }
  }
};

JQVMap.prototype.getCountryId = function (cc) {
  return 'jqvmap' + this.index + '_' + cc;
};

JQVMap.prototype.getPin = function(cc){
  var pinObj = jQuery('#' + this.getPinId(cc));
  return pinObj.html();
};

JQVMap.prototype.getPinId = function (cc) {
  return this.getCountryId(cc) + '_pin';
};

JQVMap.prototype.getPins = function(){
  var pins = this.container.find('.jqvmap-pin');
  var ret = {};
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var cc = pinObj.attr('for').toLowerCase();
    var pinContent = pinObj.html();
    ret[cc] = pinContent;
  });
  return JSON.stringify(ret);
};

JQVMap.prototype.highlight = function (cc, path) {
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  if (this.hoverOpacity) {
    path.setOpacity(this.hoverOpacity);
  } else if (this.hoverColors && (cc in this.hoverColors)) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColors[cc]);
  } else if (this.hoverColor) {
    path.currentFillColor = path.getFill() + '';
    path.setFill(this.hoverColor);
  }
};

JQVMap.prototype.isSelected = function(cc) {
  return this.selectIndex(cc) >= 0;
};

JQVMap.prototype.makeDraggable = function () {
  var mouseDown = false;
  var oldPageX, oldPageY;
  var self = this;

  self.isMoving = false;
  self.isMovingTimeout = false;

  var lastTouchCount;
  var touchCenterX;
  var touchCenterY;
  var touchStartDistance;
  var touchStartScale;
  var touchX;
  var touchY;

  this.container.mousemove(function (e) {

    if (mouseDown) {
      self.transX -= (oldPageX - e.pageX) / self.scale;
      self.transY -= (oldPageY - e.pageY) / self.scale;

      self.applyTransform();

      oldPageX = e.pageX;
      oldPageY = e.pageY;

      self.isMoving = true;
      if (self.isMovingTimeout) {
        clearTimeout(self.isMovingTimeout);
      }

      self.container.trigger('drag');
    }

    return false;

  }).mousedown(function (e) {

    mouseDown = true;
    oldPageX = e.pageX;
    oldPageY = e.pageY;

    return false;

  }).mouseup(function () {

    mouseDown = false;

    clearTimeout(self.isMovingTimeout);
    self.isMovingTimeout = setTimeout(function () {
      self.isMoving = false;
    }, 100);

    return false;

  }).mouseout(function () {

    if(mouseDown && self.isMoving){

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        mouseDown = false;
        self.isMoving = false;
      }, 100);

      return false;
    }
  });

  jQuery(this.container).bind('touchmove', function (e) {

    var offset;
    var scale;
    var touches = e.originalEvent.touches;
    var transformXOld;
    var transformYOld;

    if (touches.length === 1) {
      if (lastTouchCount === 1) {

        if(touchX === touches[0].pageX && touchY === touches[0].pageY){
          return;
        }

        transformXOld = self.transX;
        transformYOld = self.transY;

        self.transX -= (touchX - touches[0].pageX) / self.scale;
        self.transY -= (touchY - touches[0].pageY) / self.scale;

        self.applyTransform();

        if (transformXOld !== self.transX || transformYOld !== self.transY) {
          e.preventDefault();
        }

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      touchX = touches[0].pageX;
      touchY = touches[0].pageY;

    } else if (touches.length === 2) {

      if (lastTouchCount === 2) {
        scale = Math.sqrt(
            Math.pow(touches[0].pageX - touches[1].pageX, 2) +
            Math.pow(touches[0].pageY - touches[1].pageY, 2)
          ) / touchStartDistance;

        self.setScale(
          touchStartScale * scale,
          touchCenterX,
          touchCenterY
        );

        e.preventDefault();

      } else {

        offset = jQuery(self.container).offset();
        if (touches[0].pageX > touches[1].pageX) {
          touchCenterX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
        } else {
          touchCenterX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
        }

        if (touches[0].pageY > touches[1].pageY) {
          touchCenterY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
        } else {
          touchCenterY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
        }

        touchCenterX -= offset.left;
        touchCenterY -= offset.top;
        touchStartScale = self.scale;

        touchStartDistance = Math.sqrt(
          Math.pow(touches[0].pageX - touches[1].pageX, 2) +
          Math.pow(touches[0].pageY - touches[1].pageY, 2)
        );
      }
    }

    lastTouchCount = touches.length;
  });

  jQuery(this.container).bind('touchstart', function () {
    lastTouchCount = 0;
  });

  jQuery(this.container).bind('touchend', function () {
    lastTouchCount = 0;
  });
};

JQVMap.prototype.placePins = function(pins, pinMode){
  var map = this;

  if(!pinMode || (pinMode !== 'content' && pinMode !== 'id')) {
    pinMode = 'content';
  }

  if(pinMode === 'content') {//treat pin as content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }

      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute">' + pin + '</div>');
    });
  } else { //treat pin as id of an html content
    jQuery.each(pins, function(index, pin){
      if(jQuery('#' + map.getCountryId(index)).length === 0){
        return;
      }
      var pinIndex = map.getPinId(index);
      var $pin = jQuery('#' + pinIndex);
      if($pin.length > 0){
        $pin.remove();
      }
      map.container.append('<div id="' + pinIndex + '" for="' + index + '" class="jqvmap-pin" style="position:absolute"></div>');
      $pin.append(jQuery('#' + pin));
    });
  }

  this.positionPins();
  if(!this.pinHandlers){
    this.pinHandlers = true;
    var positionFix = function(){
      map.positionPins();
    };
    this.container.bind('zoomIn', positionFix)
      .bind('zoomOut', positionFix)
      .bind('drag', positionFix);
  }
};

JQVMap.prototype.positionPins = function(){
  var map = this;
  var pins = this.container.find('.jqvmap-pin');
  jQuery.each(pins, function(index, pinObj){
    pinObj = jQuery(pinObj);
    var countryId = map.getCountryId(pinObj.attr('for').toLowerCase());
    var countryObj = jQuery('#' + countryId);

    var bbox = document.getElementById(countryId).getBBox();
    var position = countryObj.position();

    var scale = map.scale;

    var left = position.left + (bbox.width / 2) * scale - pinObj.width() / 2,
      top = position.top + (bbox.height / 2) * scale - pinObj.height() / 2;

    pinObj.css('left', left).css('top', top);
  });
};

JQVMap.prototype.removePin = function(cc) {
  cc = cc.toLowerCase();
  jQuery('#' + this.getPinId(cc)).remove();
};

JQVMap.prototype.removePins = function(){
  this.container.find('.jqvmap-pin').remove();
};

JQVMap.prototype.reset = function () {
  for (var key in this.countries) {
    this.countries[key].setFill(this.color);
  }
  this.scale = this.baseScale;
  this.transX = this.baseTransX;
  this.transY = this.baseTransY;
  this.applyTransform();
};

JQVMap.prototype.resize = function () {
  var curBaseScale = this.baseScale;
  if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
    this.baseScale = this.height / this.defaultHeight;
    this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
  } else {
    this.baseScale = this.width / this.defaultWidth;
    this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
  }
  this.scale *= this.baseScale / curBaseScale;
  this.transX *= this.baseScale / curBaseScale;
  this.transY *= this.baseScale / curBaseScale;
};

JQVMap.prototype.select = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];

  if (!this.isSelected(cc)) {
    if (this.multiSelectRegion) {
      this.selectedRegions.push(cc);
    } else {
      this.selectedRegions = [cc];
    }

    jQuery(this.container).trigger('regionSelect.jqvmap', [cc]);
    if (this.selectedColor && path) {
      path.currentFillColor = this.selectedColor;
      path.setFill(this.selectedColor);
    }
  }
};

JQVMap.prototype.selectIndex = function (cc) {
  cc = cc.toLowerCase();
  for (var i = 0; i < this.selectedRegions.length; i++) {
    if (cc === this.selectedRegions[i]) {
      return i;
    }
  }
  return -1;
};

JQVMap.prototype.setBackgroundColor = function (backgroundColor) {
  this.container.css('background-color', backgroundColor);
};

JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        this.countries[code].setFill(colors[code]);
        this.countries[code].setAttribute('original', colors[code]);
      }
    }
  }
};

JQVMap.prototype.setNormalizeFunction = function (f) {
  this.colorScale.setNormalizeFunction(f);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setScale = function (scale) {
  this.scale = scale;
  this.applyTransform();
};

JQVMap.prototype.setScaleColors = function (colors) {
  this.colorScale.setColors(colors);

  if (this.values) {
    this.setValues(this.values);
  }
};

JQVMap.prototype.setValues = function (values) {
  var max = 0,
    min = Number.MAX_VALUE,
    val;

  for (var cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);

    if (isNaN(val)) {
      continue;
    }
    if (val > max) {
      max = values[cc];
    }
    if (val < min) {
      min = val;
    }
  }

  if (min === max) {
    max++;
  }

  this.colorScale.setMin(min);
  this.colorScale.setMax(max);

  var colors = {};
  for (cc in values) {
    cc = cc.toLowerCase();
    val = parseFloat(values[cc]);
    colors[cc] = isNaN(val) ? this.color : this.colorScale.getColor(val);
  }
  this.setColors(colors);
  this.values = values;
};

JQVMap.prototype.unhighlight = function (cc, path) {
  cc = cc.toLowerCase();
  path = path || jQuery('#' + this.getCountryId(cc))[0];
  path.setOpacity(1);
  if (path.currentFillColor) {
    path.setFill(path.currentFillColor);
  }
};

JQVMap.prototype.zoomIn = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep < map.zoomMaxStep) {
    map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
    map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
    map.setScale(map.scale * map.zoomStep);
    map.zoomCurStep++;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) - sliderDelta);

    map.container.trigger('zoomIn');
  }
};

JQVMap.prototype.zoomOut = function () {
  var map = this;
  var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

  if (map.zoomCurStep > 1) {
    map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
    map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
    map.setScale(map.scale / map.zoomStep);
    map.zoomCurStep--;

    var $slider = jQuery('#zoomSlider');

    $slider.css('top', parseInt($slider.css('top'), 10) + sliderDelta);

    map.container.trigger('zoomOut');
  }
};

VectorCanvas.prototype.applyTransformParams = function (scale, transX, transY) {
  if (this.mode === 'svg') {
    this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  } else {
    this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
    this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
  }
};

VectorCanvas.prototype.createGroup = function (isRoot) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('g');
  } else {
    node = this.createVmlNode('group');
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.style.left = '0px';
    node.style.top = '0px';
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
  }

  if (isRoot) {
    this.rootGroup = node;
  }
  return node;
};

VectorCanvas.prototype.createPath = function (config) {
  var node;
  if (this.mode === 'svg') {
    node = this.createSvgNode('path');
    node.setAttribute('d', config.path);

    if (this.params.borderColor !== null) {
      node.setAttribute('stroke', this.params.borderColor);
    }
    if (this.params.borderWidth > 0) {
      node.setAttribute('stroke-width', this.params.borderWidth);
      node.setAttribute('stroke-linecap', 'round');
      node.setAttribute('stroke-linejoin', 'round');
    }
    if (this.params.borderOpacity > 0) {
      node.setAttribute('stroke-opacity', this.params.borderOpacity);
    }

    node.setFill = function (color) {
      this.setAttribute('fill', color);
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getAttribute('fill');
    };

    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };

    node.setOpacity = function (opacity) {
      this.setAttribute('fill-opacity', opacity);
    };
  } else {
    node = this.createVmlNode('shape');
    node.coordorigin = '0 0';
    node.coordsize = this.width + ' ' + this.height;
    node.style.width = this.width + 'px';
    node.style.height = this.height + 'px';
    node.fillcolor = JQVMap.defaultFillColor;
    node.stroked = false;
    node.path = VectorCanvas.pathSvgToVml(config.path);

    var scale = this.createVmlNode('skew');
    scale.on = true;
    scale.matrix = '0.01,0,0,0.01,0,0';
    scale.offset = '0,0';

    node.appendChild(scale);

    var fill = this.createVmlNode('fill');
    node.appendChild(fill);

    node.setFill = function (color) {
      this.getElementsByTagName('fill')[0].color = color;
      if (this.getAttribute('original') === null) {
        this.setAttribute('original', color);
      }
    };

    node.getFill = function () {
      return this.getElementsByTagName('fill')[0].color;
    };
    node.getOriginalFill = function () {
      return this.getAttribute('original');
    };
    node.setOpacity = function (opacity) {
      this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
    };
  }
  return node;
};

VectorCanvas.prototype.pathSvgToVml = function (path) {
  var result = '';
  var cx = 0, cy = 0, ctrlx, ctrly;

  return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords) {
    coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
    if (!coords[0]) {
      coords.shift();
    }

    for (var i = 0, l = coords.length; i < l; i++) {
      coords[i] = Math.round(100 * coords[i]);
    }

    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        result = 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        result = 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        result = 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        result = 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        result = 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        result = 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        result = 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        result = 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        result = 'c' + coords.join(',');
        break;

      default:
        break;
    }

    return result;

  }).replace(/z/g, '');
};

VectorCanvas.prototype.setSize = function (width, height) {
  if (this.mode === 'svg') {
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
  } else {
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.coordsize = width + ' ' + height;
    this.canvas.coordorigin = '0 0';
    if (this.rootGroup) {
      var paths = this.rootGroup.getElementsByTagName('shape');
      for (var i = 0, l = paths.length; i < l; i++) {
        paths[i].coordsize = width + ' ' + height;
        paths[i].style.width = width + 'px';
        paths[i].style.height = height + 'px';
      }
      this.rootGroup.coordsize = width + ' ' + height;
      this.rootGroup.style.width = width + 'px';
      this.rootGroup.style.height = height + 'px';
    }
  }
  this.width = width;
  this.height = height;
};

/** Add World Map Data Points */
jQuery.fn.vectorMap('addMap', 'world_en', {"width":950,"height":550,"paths":{"id":{"path":"M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z","name":"Indonesia"},"pg":{"path":"M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z","name":"Papua New Guinea"},"mx":{"path":"M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z","name":"Mexico"},"ee":{"path":"M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z","name":"Estonia"},"dz":{"path":"M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z","name":"Algeria"},"ma":{"path":"M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z","name":"Morocco"},"mr":{"path":"M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z","name":"Mauritania"},"sn":{"path":"M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z","name":"Senegal"},"gm":{"path":"M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z","name":"Gambia"},"gw":{"path":"M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z","name":"Guinea-Bissau"},"gn":{"path":"M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z","name":"Guinea"},"sl":{"path":"M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z","name":"Sierra Leone"},"lr":{"path":"M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z","name":"Liberia"},"ci":{"path":"M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z","name":"Cote d'Ivoire"},"ml":{"path":"M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z","name":"Mali"},"bf":{"path":"M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z","name":"Burkina Faso"},"ne":{"path":"M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z","name":"Niger"},"gh":{"path":"M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z","name":"Ghana"},"tg":{"path":"M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z","name":"Togo"},"bj":{"path":"M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z","name":"Benin"},"ng":{"path":"M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z","name":"Nigeria"},"tn":{"path":"M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z","name":"Tunisia"},"ly":{"path":"M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z","name":"Libya"},"eg":{"path":"M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z","name":"Egypt"},"td":{"path":"M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z","name":"Chad"},"sd":{"path":"M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z","name":"Sudan"},"cm":{"path":"M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z","name":"Cameroon"},"er":{"path":"M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z","name":"Eritrea"},"dj":{"path":"M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z","name":"Djibouti"},"et":{"path":"M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z","name":"Ethiopia"},"so":{"path":"M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z","name":"Somalia"},"ye":{"path":"M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z","name":"Yemen"},"cf":{"path":"M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z","name":"Central African Republic"},"st":{"path":"M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z","name":"Sao Tome and Principe"},"gq":{"path":"M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z","name":"Equatorial Guinea"},"ga":{"path":"M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z","name":"Gabon"},"cg":{"path":"M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z","name":"Congo"},"ao":{"path":"M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z","name":"Angola"},"cd":{"path":"M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z","name":"Congo"},"rw":{"path":"M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z","name":"Rwanda"},"bi":{"path":"M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z","name":"Burundi"},"ug":{"path":"M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z","name":"Uganda"},"ke":{"path":"M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z","name":"Kenya"},"tz":{"path":"M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z","name":"Tanzania"},"zm":{"path":"M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z","name":"Zambia"},"mw":{"path":"M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z","name":"Malawi"},"mz":{"path":"M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z","name":"Mozambique"},"zw":{"path":"M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z","name":"Zimbabwe"},"na":{"path":"M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z","name":"Namibia"},"bw":{"path":"M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z","name":"Botswana"},"sz":{"path":"M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z","name":"Swaziland"},"ls":{"path":"M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z","name":"Lesotho"},"za":{"path":"M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z","name":"South Africa"},"gl":{"path":"M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z","name":"Greenland"},"au":{"path":"M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z","name":"Australia"},"nz":{"path":"M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z","name":"New Zealand"},"nc":{"path":"M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z","name":"New Caledonia"},"my":{"path":"M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z","name":"Malaysia"},"bn":{"path":"M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z","name":"Brunei Darussalam"},"tl":{"path":"M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z","name":"Timor-Leste"},"sb":{"path":"M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z","name":"Solomon Islands"},"vu":{"path":"M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z","name":"Vanuatu"},"fj":{"path":"M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z","name":"Fiji"},"ph":{"path":"M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z","name":"Philippines"},"cn":{"path":"M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z","name":"China"},"tw":{"path":"M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z","name":"Taiwan"},"jp":{"path":"M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z","name":"Japan"},"ru":{"path":"M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z","name":"Russian Federation"},"us":{"path":"M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z","name":"United States of America"},"mu":{"path":"M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z","name":"Mauritius"},"re":{"path":"M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z","name":"Reunion"},"mg":{"path":"M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z","name":"Madagascar"},"km":{"path":"M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z","name":"Comoros"},"sc":{"path":"M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z","name":"Seychelles"},"mv":{"path":"M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z","name":"Maldives"},"pt":{"path":"M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z","name":"Portugal"},"es":{"path":"M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z","name":"Spain"},"cv":{"path":"M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z","name":"Cape Verde"},"pf":{"path":"M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z","name":"French Polynesia"},"kn":{"path":"M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z","name":"Saint Kitts and Nevis"},"ag":{"path":"M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z","name":"Antigua and Barbuda"},"dm":{"path":"M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z","name":"Dominica"},"lc":{"path":"M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z","name":"Saint Lucia"},"bb":{"path":"M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z","name":"Barbados"},"gd":{"path":"M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z","name":"Grenada"},"tt":{"path":"M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z","name":"Trinidad and Tobago"},"do":{"path":"M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z","name":"Dominican Republic"},"ht":{"path":"M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z","name":"Haiti"},"fk":{"path":"M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z","name":"Falkland Islands"},"is":{"path":"M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z","name":"Iceland"},"no":{"path":"M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z","name":"Norway"},"lk":{"path":"M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z","name":"Sri Lanka"},"cu":{"path":"M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z","name":"Cuba"},"bs":{"path":"M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z","name":"Bahamas"},"jm":{"path":"M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z","name":"Jamaica"},"ec":{"path":"M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z","name":"Ecuador"},"ca":{"path":"M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z","name":"Canada"},"gt":{"path":"M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z","name":"Guatemala"},"hn":{"path":"M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z","name":"Honduras"},"sv":{"path":"M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z","name":"El Salvador"},"ni":{"path":"M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z","name":"Nicaragua"},"cr":{"path":"M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z","name":"Costa Rica"},"pa":{"path":"M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z","name":"Panama"},"co":{"path":"M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z","name":"Colombia"},"ve":{"path":"M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z","name":"Venezuela"},"gy":{"path":"M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z","name":"Guyana"},"sr":{"path":"M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z","name":"Suriname"},"gf":{"path":"M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z","name":"French Guiana"},"pe":{"path":"M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z","name":"Peru"},"bo":{"path":"M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z","name":"Bolivia"},"py":{"path":"M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z","name":"Paraguay"},"uy":{"path":"M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z","name":"Uruguay"},"ar":{"path":"M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z","name":"Argentina"},"cl":{"path":"M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z","name":"Chile"},"br":{"path":"M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z","name":"Brazil"},"bz":{"path":"M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z","name":"Belize"},"mn":{"path":"M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z","name":"Mongolia"},"kp":{"path":"M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z","name":"North Korea"},"kr":{"path":"M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z","name":"South Korea"},"kz":{"path":"M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z","name":"Kazakhstan"},"tm":{"path":"M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z","name":"Turkmenistan"},"uz":{"path":"M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z","name":"Uzbekistan"},"tj":{"path":"M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z","name":"Tajikistan"},"kg":{"path":"M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z","name":"Kyrgyz Republic"},"af":{"path":"M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z","name":"Afghanistan"},"pk":{"path":"M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z","name":"Pakistan"},"in":{"path":"M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z","name":"India"},"np":{"path":"M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z","name":"Nepal"},"bt":{"path":"M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z","name":"Bhutan"},"bd":{"path":"M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z","name":"Bangladesh"},"mm":{"path":"M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z","name":"Myanmar"},"th":{"path":"M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z","name":"Thailand"},"kh":{"path":"M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z","name":"Cambodia"},"la":{"path":"M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z","name":"Lao People's Democratic Republic"},"vn":{"path":"M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z","name":"Vietnam"},"ge":{"path":"M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z","name":"Georgia"},"am":{"path":"M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z","name":"Armenia"},"az":{"path":"M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z","name":"Azerbaijan"},"ir":{"path":"M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z","name":"Iran"},"tr":{"path":"M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z","name":"Turkey"},"om":{"path":"M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z","name":"Oman"},"ae":{"path":"M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z","name":"United Arab Emirates"},"qa":{"path":"M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z","name":"Qatar"},"kw":{"path":"M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z","name":"Kuwait"},"sa":{"path":"M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z","name":"Saudi Arabia"},"sy":{"path":"M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z","name":"Syrian Arab Republic"},"iq":{"path":"M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z","name":"Iraq"},"jo":{"path":"M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z","name":"Jordan"},"lb":{"path":"M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z","name":"Lebanon"},"il":{"path":"M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z","name":"Israel"},"cy":{"path":"M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z","name":"Cyprus"},"gb":{"path":"M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z","name":"United Kingdom"},"ie":{"path":"M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z","name":"Ireland"},"se":{"path":"M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z","name":"Sweden"},"fi":{"path":"M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z","name":"Finland"},"lv":{"path":"M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z","name":"Latvia"},"lt":{"path":"M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z","name":"Lithuania"},"by":{"path":"M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z","name":"Belarus"},"pl":{"path":"M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z","name":"Poland"},"it":{"path":"M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z","name":"Italy"},"fr":{"path":"M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z","name":"France"},"nl":{"path":"M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z","name":"Netherlands"},"be":{"path":"M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z","name":"Belgium"},"de":{"path":"M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z","name":"Germany"},"dk":{"path":"M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z","name":"Denmark"},"ch":{"path":"M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z","name":"Switzerland"},"cz":{"path":"M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z","name":"Czech Republic"},"sk":{"path":"M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z","name":"Slovakia"},"at":{"path":"M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z","name":"Austria"},"hu":{"path":"M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z","name":"Hungary"},"si":{"path":"M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z","name":"Slovenia"},"hr":{"path":"M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z","name":"Croatia"},"ba":{"path":"M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z","name":"Bosnia and Herzegovina"},"mt":{"path":"M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z","name":"Malta"},"ua":{"path":"M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z","name":"Ukraine"},"md":{"path":"M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z","name":"Moldova"},"ro":{"path":"M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z","name":"Romania"},"rs":{"path":"M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z","name":"Serbia"},"bg":{"path":"M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z","name":"Bulgaria"},"al":{"path":"M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z","name":"Albania"},"mk":{"path":"M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z","name":"Macedonia"},"gr":{"path":"M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z","name":"Greece"}}});

var sample_data = {"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    slice = [].slice,
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, j, len;
      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (j = 0, len = callbacks.length; j < len; j++) {
          callback = callbacks[j];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, j, len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(superClass) {
    var extend, resolveOption;

    extend1(Dropzone, superClass);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      timeout: 30000,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop',
      resizeWidth: null,
      resizeHeight: null,
      resizeMimeType: null,
      resizeQuality: 0.8,
      resizeMethod: 'contain',
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      headers: null,
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      renameFile: null,
      forceFallback: false,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
      },
      init: function() {
        return noop;
      },
      accept: function(file, done) {
        return done();
      },
      fallback: function() {
        var child, j, len, messageElement, ref, span;
        this.element.className = this.element.className + " dz-browser-not-supported";
        ref = this.element.getElementsByTagName("div");
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file, width, height, resizeMethod) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        if ((width == null) && (height == null)) {
          width = info.srcWidth;
          height = info.srcHeight;
        } else if (width == null) {
          width = height * srcRatio;
        } else if (height == null) {
          height = width / srcRatio;
        }
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
          if (resizeMethod === 'crop') {
            if (srcRatio > trgRatio) {
              info.srcHeight = file.height;
              info.srcWidth = info.srcHeight * trgRatio;
            } else {
              info.srcWidth = file.width;
              info.srcHeight = info.srcWidth / trgRatio;
            }
          } else if (resizeMethod === 'contain') {
            if (srcRatio > trgRatio) {
              height = width / srcRatio;
            } else {
              width = height * srcRatio;
            }
          } else {
            throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
      },
      transformFile: function(file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        } else {
          return done(file);
        }
      },
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            node.textContent = file.name;
          }
          ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            node = ref1[k];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          results = [];
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            removeLink = ref2[l];
            results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return results;
        }
      },
      removedfile: function(file) {
        var ref;
        if (file.previewElement) {
          if ((ref = file.previewElement) != null) {
            ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var j, len, ref, thumbnailElement;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            results.push(node.textContent = message);
          }
          return results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            if (node.nodeName === 'PROGRESS') {
              results.push(node.value = progress);
            } else {
              results.push(node.style.width = progress + "%");
            }
          }
          return results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop
    };

    extend = function() {
      var j, key, len, object, objects, target, val;
      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (j = 0, len = objects.length; j < len; j++) {
        object = objects[j];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element1, options) {
      var elementOptions, fallback, ref;
      this.element = element1;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      if (this.options.renameFilename != null) {
        this.options.renameFile = (function(_this) {
          return function(file) {
            return _this.options.renameFilename.call(_this, file.name, file);
          };
        })(this);
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (!file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === status) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.init = function() {
      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, j, len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (j = 0, len = files.length; j < len; j++) {
                  file = files[j];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;
      ref1 = this.events;
      for (j = 0, len = ref1.length; j < len; j++) {
        eventName = ref1[j];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (undefined) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var ref;
      this.disable();
      this.removeAllFiles(true);
      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        ref = this.getActiveFiles();
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFile = function(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, j, len, ref, tagName;
      getFallback = function(elements) {
        var el, j, len;
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      ref = ["div", "form"];
      for (j = 0, len = ref.length; j < len; j++) {
        tagName = ref[j];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.disable = function() {
      var file, j, len, ref, results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        results.push(this.cancelUpload(file));
      }
      return results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['tb', 'gb', 'mb', 'kb', 'b'];
        for (i = j = 0, len = units.length; j < len; i = ++j) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, ref;
      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, j, len, results;
      results = [];
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        results.push(this.addFile(file));
      }
      return results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, j, len, results;
      results = [];
      for (j = 0, len = items.length; j < len; j++) {
        item = items[j];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            results.push(this.addFile(item.getAsFile()));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, j, len;
            if (entries.length > 0) {
              for (j = 0, len = entries.length; j < len; j++) {
                entry = entries[j];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file)
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      var file;
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {
        return function(dataUrl) {
          _this.emit("thumbnail", file, dataUrl);
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, j, len, ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      ref = this.files.slice();
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {
      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {
        return function(dataUrl, canvas) {
          var resizeMimeType, resizedDataURL;
          if (canvas === null) {
            return callback(file);
          } else {
            resizeMimeType = _this.options.resizeMimeType;
            if (resizeMimeType == null) {
              resizeMimeType = file.type;
            }
            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);
            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
            }
            return callback(Dropzone.dataURItoBlob(resizedDataURL));
          }
        };
      })(this));
    };

    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          file.dataURL = fileReader.result;
          if (file.type === "image/svg+xml") {
            if (callback != null) {
              callback(fileReader.result);
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var loadExif;
          loadExif = function(callback) {
            return callback(1);
          };
          if ((typeof EXIF !== "undefined" && EXIF !== null) && fixOrientation) {
            loadExif = function(callback) {
              return EXIF.getData(img, function() {
                return callback(EXIF.getTag(this, 'Orientation'));
              });
            };
          }
          return loadExif(function(orientation) {
            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;
            file.width = img.width;
            file.height = img.height;
            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);
            canvas = document.createElement("canvas");
            ctx = canvas.getContext("2d");
            canvas.width = resizeInfo.trgWidth;
            canvas.height = resizeInfo.trgHeight;
            if (orientation > 4) {
              canvas.width = resizeInfo.trgHeight;
              canvas.height = resizeInfo.trgWidth;
            }
            switch (orientation) {
              case 2:
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                ctx.translate(0, canvas.height);
                ctx.scale(1, -1);
                break;
              case 5:
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -canvas.height);
                break;
              case 7:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(canvas.width, -canvas.height);
                ctx.scale(-1, 1);
                break;
              case 8:
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-canvas.width, 0);
            }
            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");
            if (callback != null) {
              return callback(thumbnail, canvas);
            }
          });
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = file.dataURL;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var j, len, ref, results;
        ref = this.files;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          if (file.xhr === xhr) {
            results.push(file);
          }
        }
        return results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, j, k, len, len1, ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (j = 0, len = groupedFiles.length; j < len; j++) {
          groupedFile = groupedFiles[j];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {
          groupedFile = groupedFiles[k];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;
      xhr = new XMLHttpRequest();
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.timeout = resolveOption(this.options.timeout, files);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var k, len1, results;
          results = [];
          for (k = 0, len1 = files.length; k < len1; k++) {
            file = files[k];
            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (k = 0, len1 = files.length; k < len1; k++) {
              file = files[k];
              file.upload.progress = progress;
              file.upload.total = e.total;
              file.upload.bytesSent = e.loaded;
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (l = 0, len2 = files.length; l < len2; l++) {
              file = files[l];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          results = [];
          for (m = 0, len3 = files.length; m < len3; m++) {
            file = files[m];
            results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var error1, ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
              try {
                response = JSON.parse(response);
              } catch (error1) {
                e = error1;
                response = "Invalid JSON response from server.";
              }
            }
          }
          updateProgress();
          if (!((200 <= (ref = xhr.status) && ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (ref = xhr.upload) != null ? ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        ref1 = this.options.params;
        for (key in ref1) {
          value = ref1[key];
          formData.append(key, value);
        }
      }
      for (k = 0, len1 = files.length; k < len1; k++) {
        file = files[k];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          input = ref2[l];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            ref3 = input.options;
            for (m = 0, len3 = ref3.length; m < len3; m++) {
              option = ref3[m];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== "checkbox" && ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      doneCounter = 0;
      results = [];
      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {
        doneFunction = (function(_this) {
          return function(file, paramName, fileName) {
            return function(transformedFile) {
              formData.append(paramName, transformedFile, fileName);
              if (++doneCounter === files.length) {
                return _this.submitRequest(xhr, formData, files);
              }
            };
          };
        })(this);
        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));
      }
      return results;
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "5.1.1";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, j, len, results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )dropzone($| )/.test(el.className)) {
            results.push(dropzones.push(el));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    results = [];
    for (j = 0, len = dropzones.length; j < len; j++) {
      dropzone = dropzones[j];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        results.push(new Dropzone(dropzone));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, j, len, ref, regex;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        ref = Dropzone.blacklistedBrowsers;
        for (j = 0, len = ref.length; j < len; j++) {
          regex = ref[j];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  Dropzone.dataURItoBlob = function(dataURI) {
    var ab, byteString, i, ia, j, mimeString, ref;
    byteString = atob(dataURI.split(',')[1]);
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    ab = new ArrayBuffer(byteString.length);
    ia = new Uint8Array(ab);
    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  };

  without = function(list, rejectedItem) {
    var item, j, len, results;
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      item = list[j];
      if (item !== rejectedItem) {
        results.push(item);
      }
    }
    return results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, error1, j, k, len, len1, ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (j = 0, len = els.length; j < len; j++) {
          el = els[j];
          elements.push(this.getElement(el, name));
        }
      } catch (error1) {
        e = error1;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      ref = document.querySelectorAll(els);
      for (k = 0, len1 = ref.length; k < len1; k++) {
        el = ref[k];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, j, len, mimeType, validType;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (j = 0, len = acceptedFiles.length; j < len; j++) {
      validType = acceptedFiles[j];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(1, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };

  ExifRestore = (function() {
    function ExifRestore() {}

    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    ExifRestore.encode64 = function(input) {
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    };

    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {
      var image, rawImage, segments;
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      segments = this.slice2Segments(rawImage);
      image = this.exifManipulation(resizedFileBase64, segments);
      return 'data:image/jpeg;base64,' + this.encode64(image);
    };

    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {
      var aBuffer, exifArray, newImageArray;
      exifArray = this.getExifArray(segments);
      newImageArray = this.insertExif(resizedFileBase64, exifArray);
      aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    };

    ExifRestore.getExifArray = function(segments) {
      var seg, x;
      seg = void 0;
      x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    };

    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {
      var array, ato, buf, imageData, mae, separatePoint;
      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      buf = this.decode64(imageData);
      separatePoint = buf.indexOf(255, 3);
      mae = buf.slice(0, separatePoint);
      ato = buf.slice(separatePoint);
      array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };

    ExifRestore.slice2Segments = function(rawImageArray) {
      var endPoint, head, length, seg, segments;
      head = 0;
      segments = [];
      while (true) {
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          endPoint = head + length + 2;
          seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    };

    ExifRestore.decode64 = function(input) {
      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      buf = [];
      base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warning('There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    };

    return ExifRestore;

  })();


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e, error1;
      try {
        root.doScroll("left");
      } catch (error1) {
        e = error1;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (undefined) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

(function(){function require(name){var module=require.modules[name];if(!module)throw new Error('failed to require "'+name+'"');if(!("exports"in module)&&typeof module.definition==="function"){module.client=module.component=true;module.definition.call(this,module.exports={},module);delete module.definition}return module.exports}require.loader="component";require.helper={};require.helper.semVerSort=function(a,b){var aArray=a.version.split(".");var bArray=b.version.split(".");for(var i=0;i<aArray.length;++i){var aInt=parseInt(aArray[i],10);var bInt=parseInt(bArray[i],10);if(aInt===bInt){var aLex=aArray[i].substr((""+aInt).length);var bLex=bArray[i].substr((""+bInt).length);if(aLex===""&&bLex!=="")return 1;if(aLex!==""&&bLex==="")return-1;if(aLex!==""&&bLex!=="")return aLex>bLex?1:-1;continue}else if(aInt>bInt){return 1}else{return-1}}return 0};require.latest=function(name,returnPath){function showError(name){throw new Error('failed to find latest module of "'+name+'"')}var versionRegexp=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp=/(.*)~(.*)/;if(!remoteRegexp.test(name))showError(name);var moduleNames=Object.keys(require.modules);var semVerCandidates=[];var otherCandidates=[];for(var i=0;i<moduleNames.length;i++){var moduleName=moduleNames[i];if(new RegExp(name+"@").test(moduleName)){var version=moduleName.substr(name.length+1);var semVerMatch=versionRegexp.exec(moduleName);if(semVerMatch!=null){semVerCandidates.push({version:version,name:moduleName})}else{otherCandidates.push({version:version,name:moduleName})}}}if(semVerCandidates.concat(otherCandidates).length===0){showError(name)}if(semVerCandidates.length>0){var module=semVerCandidates.sort(require.helper.semVerSort).pop().name;if(returnPath===true){return module}return require(module)}var module=otherCandidates.sort(function(a,b){return a.name>b.name})[0].name;if(returnPath===true){return module}return require(module)};require.modules={};require.register=function(name,definition){require.modules[name]={definition:definition}};require.define=function(name,exports){require.modules[name]={exports:exports}};require.register("abpetkov~transitionize@0.0.3",function(exports,module){module.exports=Transitionize;function Transitionize(element,props){if(!(this instanceof Transitionize))return new Transitionize(element,props);this.element=element;this.props=props||{};this.init()}Transitionize.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)};Transitionize.prototype.init=function(){var transitions=[];for(var key in this.props){transitions.push(key+" "+this.props[key])}this.element.style.transition=transitions.join(", ");if(this.isSafari())this.element.style.webkitTransition=transitions.join(", ")}});require.register("ftlabs~fastclick@v0.6.11",function(exports,module){function FastClick(layer){"use strict";var oldOnClick,self=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=layer;if(!layer||!layer.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(self,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(self,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(self,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(self,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(self,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(self,arguments)};if(FastClick.notNeeded(layer)){return}if(this.deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if(this.deviceIsIOS&&target.type==="file"||target.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(target.className)};FastClick.prototype.needsFocus=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){"use strict";var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){"use strict";if(this.deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){"use strict";var length;if(this.deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){"use strict";var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){"use strict";if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){"use strict";var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(this.deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!this.deviceIsIOS4){if(touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if(event.timeStamp-this.lastClickTime<200){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){"use strict";var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){"use strict";if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){"use strict";var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if(event.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(this.deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if(event.timeStamp-trackingClickStart>100||this.deviceIsIOS&&window.top!==window&&targetTagName==="input"){this.targetElement=null;return false}this.focus(targetElement);if(!this.deviceIsIOS4||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){"use strict";if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){"use strict";var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){"use strict";var layer=this.layer;if(this.deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){"use strict";var metaViewport;var chromeVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(FastClick.prototype.deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer){"use strict";return new FastClick(layer)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}});require.register("component~indexof@0.0.3",function(exports,module){module.exports=function(arr,obj){if(arr.indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}});require.register("component~classes@1.2.1",function(exports,module){var index=require("component~indexof@0.0.3");var re=/\s+/;var toString=Object.prototype.toString;module.exports=function(el){return new ClassList(el)};function ClassList(el){if(!el)throw new Error("A DOM element reference is required");this.el=el;this.list=el.classList}ClassList.prototype.add=function(name){if(this.list){this.list.add(name);return this}var arr=this.array();var i=index(arr,name);if(!~i)arr.push(name);this.el.className=arr.join(" ");return this};ClassList.prototype.remove=function(name){if("[object RegExp]"==toString.call(name)){return this.removeMatching(name)}if(this.list){this.list.remove(name);return this}var arr=this.array();var i=index(arr,name);if(~i)arr.splice(i,1);this.el.className=arr.join(" ");return this};ClassList.prototype.removeMatching=function(re){var arr=this.array();for(var i=0;i<arr.length;i++){if(re.test(arr[i])){this.remove(arr[i])}}return this};ClassList.prototype.toggle=function(name,force){if(this.list){if("undefined"!==typeof force){if(force!==this.list.toggle(name,force)){this.list.toggle(name)}}else{this.list.toggle(name)}return this}if("undefined"!==typeof force){if(!force){this.remove(name)}else{this.add(name)}}else{if(this.has(name)){this.remove(name)}else{this.add(name)}}return this};ClassList.prototype.array=function(){var str=this.el.className.replace(/^\s+|\s+$/g,"");var arr=str.split(re);if(""===arr[0])arr.shift();return arr};ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)}});require.register("component~event@0.1.4",function(exports,module){var bind=window.addEventListener?"addEventListener":"attachEvent",unbind=window.removeEventListener?"removeEventListener":"detachEvent",prefix=bind!=="addEventListener"?"on":"";exports.bind=function(el,type,fn,capture){el[bind](prefix+type,fn,capture||false);return fn};exports.unbind=function(el,type,fn,capture){el[unbind](prefix+type,fn,capture||false);return fn}});require.register("component~query@0.0.3",function(exports,module){function one(selector,el){return el.querySelector(selector)}exports=module.exports=function(selector,el){el=el||document;return one(selector,el)};exports.all=function(selector,el){el=el||document;return el.querySelectorAll(selector)};exports.engine=function(obj){if(!obj.one)throw new Error(".one callback required");if(!obj.all)throw new Error(".all callback required");one=obj.one;exports.all=obj.all;return exports}});require.register("component~matches-selector@0.1.5",function(exports,module){var query=require("component~query@0.0.3");var proto=Element.prototype;var vendor=proto.matches||proto.webkitMatchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector;module.exports=match;function match(el,selector){if(!el||el.nodeType!==1)return false;if(vendor)return vendor.call(el,selector);var nodes=query.all(selector,el.parentNode);for(var i=0;i<nodes.length;++i){if(nodes[i]==el)return true}return false}});require.register("component~closest@0.1.4",function(exports,module){var matches=require("component~matches-selector@0.1.5");module.exports=function(element,selector,checkYoSelf,root){element=checkYoSelf?{parentNode:element}:element;root=root||document;while((element=element.parentNode)&&element!==document){if(matches(element,selector))return element;if(element===root)return}}});require.register("component~delegate@0.2.3",function(exports,module){var closest=require("component~closest@0.1.4"),event=require("component~event@0.1.4");exports.bind=function(el,selector,type,fn,capture){return event.bind(el,type,function(e){var target=e.target||e.srcElement;e.delegateTarget=closest(target,selector,true,el);if(e.delegateTarget)fn.call(el,e)},capture)};exports.unbind=function(el,type,fn,capture){event.unbind(el,type,fn,capture)}});require.register("component~events@1.0.9",function(exports,module){var events=require("component~event@0.1.4");var delegate=require("component~delegate@0.2.3");module.exports=Events;function Events(el,obj){if(!(this instanceof Events))return new Events(el,obj);if(!el)throw new Error("element required");if(!obj)throw new Error("object required");this.el=el;this.obj=obj;this._events={}}Events.prototype.sub=function(event,method,cb){this._events[event]=this._events[event]||{};this._events[event][method]=cb};Events.prototype.bind=function(event,method){var e=parse(event);var el=this.el;var obj=this.obj;var name=e.name;var method=method||"on"+name;var args=[].slice.call(arguments,2);function cb(){var a=[].slice.call(arguments).concat(args);obj[method].apply(obj,a)}if(e.selector){cb=delegate.bind(el,e.selector,name,cb)}else{events.bind(el,name,cb)}this.sub(name,method,cb);return cb};Events.prototype.unbind=function(event,method){if(0==arguments.length)return this.unbindAll();if(1==arguments.length)return this.unbindAllOf(event);var bindings=this._events[event];if(!bindings)return;var cb=bindings[method];if(!cb)return;events.unbind(this.el,event,cb)};Events.prototype.unbindAll=function(){for(var event in this._events){this.unbindAllOf(event)}};Events.prototype.unbindAllOf=function(event){var bindings=this._events[event];if(!bindings)return;for(var method in bindings){this.unbind(event,method)}};function parse(event){var parts=event.split(/ +/);return{name:parts.shift(),selector:parts.join(" ")}}});require.register("switchery",function(exports,module){var transitionize=require("abpetkov~transitionize@0.0.3"),fastclick=require("ftlabs~fastclick@v0.6.11"),classes=require("component~classes@1.2.1"),events=require("component~events@1.0.9");module.exports=Switchery;var defaults={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",jackSecondaryColor:null,className:"switchery",disabled:false,disabledOpacity:.5,speed:"0.4s",size:"default"};function Switchery(element,options){if(!(this instanceof Switchery))return new Switchery(element,options);this.element=element;this.options=options||{};for(var i in defaults){if(this.options[i]==null){this.options[i]=defaults[i]}}if(this.element!=null&&this.element.type=="checkbox")this.init();if(this.isDisabled()===true)this.disable()}Switchery.prototype.hide=function(){this.element.style.display="none"};Switchery.prototype.show=function(){var switcher=this.create();this.insertAfter(this.element,switcher)};Switchery.prototype.create=function(){this.switcher=document.createElement("span");this.jack=document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className=this.options.className;this.events=events(this.switcher,this);return this.switcher};Switchery.prototype.insertAfter=function(reference,target){reference.parentNode.insertBefore(target,reference.nextSibling)};Switchery.prototype.setPosition=function(clicked){var checked=this.isChecked(),switcher=this.switcher,jack=this.jack;if(clicked&&checked)checked=false;else if(clicked&&!checked)checked=true;if(checked===true){this.element.checked=true;if(window.getComputedStyle)jack.style.left=parseInt(window.getComputedStyle(switcher).width)-parseInt(window.getComputedStyle(jack).width)+"px";else jack.style.left=parseInt(switcher.currentStyle["width"])-parseInt(jack.currentStyle["width"])+"px";if(this.options.color)this.colorize();this.setSpeed()}else{jack.style.left=0;this.element.checked=false;this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor;this.switcher.style.borderColor=this.options.secondaryColor;this.switcher.style.backgroundColor=this.options.secondaryColor!==defaults.secondaryColor?this.options.secondaryColor:"#fff";this.jack.style.backgroundColor=this.options.jackSecondaryColor!==this.options.jackColor?this.options.jackSecondaryColor:this.options.jackColor;this.setSpeed()}};Switchery.prototype.setSpeed=function(){var switcherProp={},jackProp={"background-color":this.options.speed,left:this.options.speed.replace(/[a-z]/,"")/2+"s"};if(this.isChecked()){switcherProp={border:this.options.speed,"box-shadow":this.options.speed,"background-color":this.options.speed.replace(/[a-z]/,"")*3+"s"}}else{switcherProp={border:this.options.speed,"box-shadow":this.options.speed}}transitionize(this.switcher,switcherProp);transitionize(this.jack,jackProp)};Switchery.prototype.setSize=function(){var small="switchery-small",normal="switchery-default",large="switchery-large";switch(this.options.size){case"small":classes(this.switcher).add(small);break;case"large":classes(this.switcher).add(large);break;default:classes(this.switcher).add(normal);break}};Switchery.prototype.colorize=function(){var switcherHeight=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color;this.switcher.style.borderColor=this.options.color;this.switcher.style.boxShadow="inset 0 0 0 "+switcherHeight+"px "+this.options.color;this.jack.style.backgroundColor=this.options.jackColor};Switchery.prototype.handleOnchange=function(state){if(document.dispatchEvent){var event=document.createEvent("HTMLEvents");event.initEvent("change",true,true);this.element.dispatchEvent(event)}else{this.element.fireEvent("onchange")}};Switchery.prototype.handleChange=function(){var self=this,el=this.element;if(el.addEventListener){el.addEventListener("change",function(){self.setPosition()})}else{el.attachEvent("onchange",function(){self.setPosition()})}};Switchery.prototype.handleClick=function(){var switcher=this.switcher;fastclick(switcher);this.events.bind("click","bindClick")};Switchery.prototype.bindClick=function(){var parent=this.element.parentNode.tagName.toLowerCase(),labelParent=parent==="label"?false:true;this.setPosition(labelParent);this.handleOnchange(this.element.checked)};Switchery.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",true)};Switchery.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")};Switchery.prototype.init=function(){this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick()};Switchery.prototype.isChecked=function(){return this.element.checked};Switchery.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly};Switchery.prototype.destroy=function(){this.events.unbind()};Switchery.prototype.enable=function(){if(this.options.disabled)this.options.disabled=false;if(this.element.disabled)this.element.disabled=false;if(this.element.readOnly)this.element.readOnly=false;this.switcher.style.opacity=1;this.events.bind("click","bindClick")};Switchery.prototype.disable=function(){if(!this.options.disabled)this.options.disabled=true;if(!this.element.disabled)this.element.disabled=true;if(!this.element.readOnly)this.element.readOnly=true;this.switcher.style.opacity=this.options.disabledOpacity;this.destroy()}});if(typeof exports=="object"){module.exports=require("switchery")}else if(typeof define=="function"&&define.amd){define("Switchery",[],function(){return require("switchery")})}else{(this||window)["Switchery"]=require("switchery")}})();
/*
* iziToast | v1.3.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/
!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.iziToast=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},n="iziToast",o=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},d=568,c={};e.children={};var u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,rtl:!1,position:"bottomRight",target:"",targetFirst:!0,toastOnce:!1,timeout:5e3,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(n,t[o],o,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(n,t[i],i,t)},g=function(t,e){var n={};return m(t,function(e,o){n[o]=t[o]}),m(e,function(t,o){n[o]=e[o]}),n},f=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e},v=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},h=function(t){try{return btoa(atob(t))==t}catch(e){return!1}},y=function(){return{move:function(t,e,o,a){var r,l=.3,d=180;0!==a&&(t.classList.add(n+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?(r=(d-a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag")):(r=(d+a)/d,l>r&&e.hide(g(o,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag")),t.style.opacity=r,l>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,n,o){o=o||window.event;var i=a?o.touches[0].clientX:o.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;t.classList.remove(n.transitionIn),t.classList.remove(n.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(o){o.preventDefault(),o=o||window.event;var i=o.touches[0].clientX,s=i-r;y.move(t,e,n,s)}:document.onmousemove=function(o){o.preventDefault(),o=o||window.event;var i=o.clientX,s=i-r;y.move(t,e,n,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(n+"-dragged")&&(t.classList.remove(n+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}}}();return e.setSetting=function(t,n,o){e.children[t][n]=o},e.getSetting=function(t,n){return e.children[t][n]},e.destroy=function(){m(document.querySelectorAll("."+n+"-wrapper"),function(t,e){t.remove()}),m(document.querySelectorAll("."+n),function(t,e){t.remove()}),document.removeEventListener(n+"-opened",{},!1),document.removeEventListener(n+"-opening",{},!1),document.removeEventListener(n+"-closing",{},!1),document.removeEventListener(n+"-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,function(t,n){e[n]=function(e){var n=g(c,e||{});n=g(t,n||{}),this.show(n)}}),e.progress=function(t,e,o){var i=this,s=e.getAttribute("data-iziToast-ref"),a=g(this.children[s],t||{}),r=e.querySelector("."+n+"-progressbar div");return{start:function(){"undefined"==typeof a.time.REMAINING&&(e.classList.remove(n+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if("undefined"!=typeof a.time.START&&!e.classList.contains(n+"-paused")&&!e.classList.contains(n+"-reseted")){if(e.classList.add(n+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r),l=t.getPropertyValue("width");r.style.transition="none",r.style.width=l}"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}},resume:function(){"undefined"!=typeof a.time.REMAINING?(e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(n+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof o&&o.apply(i))},a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(n+"-reseted"),e.classList.remove(n+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof o&&setTimeout(function(){o.apply(i)},10)}}},e.hide=function(t,e,i){var s=this,a=g(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,"object"!=typeof e&&(e=document.querySelector(e)),e.classList.add(n+"-closing"),function(){var t=document.querySelector("."+n+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref");e=e.split(",");var o=e.indexOf(String(a.ref));-1!==o&&e.splice(o,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),(a.transitionIn||a.transitionInMobile)&&(e.classList.remove(a.transitionIn),e.classList.remove(a.transitionInMobile)),o||window.innerWidth<=d?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!o||window.innerWidth>d)&&(e.parentNode.style.transitionDelay="0.2s");try{var l=new CustomEvent(n+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(c){console.warn(c)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(n+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(o){console.warn(o)}"undefined"!=typeof a.onClosed&&a.onClosed.apply(null,[a,e,i])},1e3)},200),"undefined"!=typeof a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=g(c,t||{});if(s=g(u,s),s.time={},s.toastOnce&&s.id&&document.querySelectorAll("."+n+"#"+s.id).length>0)return!1;s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var l={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),icon:document.createElement("i"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),wrapper:null};l.toast.setAttribute("data-iziToast-ref",s.ref),l.toast.appendChild(l.toastBody),l.toastCapsule.appendChild(l.toast),function(){if(l.toast.classList.add(n),l.toast.classList.add(n+"-opening"),l.toastCapsule.classList.add(n+"-capsule"),l.toastBody.classList.add(n+"-body"),l.toastTexts.classList.add(n+"-texts"),o||window.innerWidth<=d?s.transitionInMobile&&l.toast.classList.add(s.transitionInMobile):s.transitionIn&&l.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,function(t,e){l.toast.classList.add(t)})}s.id&&(l.toast.id=s.id),s.rtl&&(l.toast.classList.add(n+"-rtl"),l.toast.setAttribute("dir","rtl")),s.layout>1&&l.toast.classList.add(n+"-layout"+s.layout),s.balloon&&l.toast.classList.add(n+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?l.toast.style.maxWidth=s.maxWidth:l.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||l.toast.classList.add(n+"-theme-"+s.theme),s.color&&(v(s.color)?l.toast.style.background=s.color:l.toast.classList.add(n+"-color-"+s.color)),s.backgroundColor&&(l.toast.style.background=s.backgroundColor,s.balloon&&(l.toast.style.borderColor=s.backgroundColor))}(),function(){s.image&&(l.cover.classList.add(n+"-cover"),l.cover.style.width=s.imageWidth+"px",h(s.image.replace(/ /g,""))?l.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":l.cover.style.backgroundImage="url("+s.image+")",s.rtl?l.toastBody.style.marginRight=s.imageWidth+10+"px":l.toastBody.style.marginLeft=s.imageWidth+10+"px",l.toast.appendChild(l.cover))}(),function(){s.close?(l.buttonClose=document.createElement("button"),l.buttonClose.classList.add(n+"-close"),l.buttonClose.addEventListener("click",function(t){t.target;i.hide(s,l.toast,"button")}),l.toast.appendChild(l.buttonClose)):s.rtl?l.toast.style.paddingLeft="18px":l.toast.style.paddingRight="18px"}(),function(){s.progressBar&&(l.progressBar=document.createElement("div"),l.progressBarDiv=document.createElement("div"),l.progressBar.classList.add(n+"-progressbar"),l.progressBarDiv.style.background=s.progressBarColor,l.progressBar.appendChild(l.progressBarDiv),l.toast.appendChild(l.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(l.toast.addEventListener("mouseenter",function(t){i.progress(s,l.toast).pause()}),l.toast.addEventListener("mouseleave",function(t){i.progress(s,l.toast).resume()})),s.resetOnHover&&(l.toast.addEventListener("mouseenter",function(t){i.progress(s,l.toast).reset()}),l.toast.addEventListener("mouseleave",function(t){i.progress(s,l.toast).start()})))}(),function(){s.icon&&(l.icon.setAttribute("class",n+"-icon "+s.icon),s.iconText&&l.icon.appendChild(document.createTextNode(s.iconText)),s.rtl?l.toastBody.style.paddingRight="33px":l.toastBody.style.paddingLeft="33px",s.iconColor&&(l.icon.style.color=s.iconColor),l.toastBody.appendChild(l.icon))}(),function(){s.title.length>0&&(l.strong=document.createElement("strong"),l.strong.classList.add(n+"-title"),l.strong.appendChild(f(s.title)),l.toastTexts.appendChild(l.strong),s.titleColor&&(l.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?l.strong.style.fontSize=s.titleSize:l.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?l.strong.style.lineHeight=s.titleLineHeight:l.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(l.p=document.createElement("p"),l.p.classList.add(n+"-message"),l.p.appendChild(f(s.message)),l.toastTexts.appendChild(l.p),s.messageColor&&(l.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?l.p.style.fontSize=s.messageSize:l.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?l.p.style.lineHeight=s.messageLineHeight:l.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?l.strong.style.marginLeft="10px":2===s.layout||s.rtl||(l.strong.style.marginRight="10px"))}(),l.toastBody.appendChild(l.toastTexts);var p;!function(){s.inputs.length>0&&(l.inputs.classList.add(n+"-inputs"),m(s.inputs,function(t,e){l.inputs.appendChild(f(t[0])),p=l.inputs.childNodes,p[e].classList.add(n+"-inputs-child"),t[3]&&setTimeout(function(){p[e].focus()},300),p[e].addEventListener(t[1],function(e){var n=t[2];return n(i,l.toast,this,e)})}),l.toastBody.appendChild(l.inputs))}(),function(){s.buttons.length>0&&(l.buttons.classList.add(n+"-buttons"),m(s.buttons,function(t,e){l.buttons.appendChild(f(t[0]));var o=l.buttons.childNodes;o[e].classList.add(n+"-buttons-child"),t[2]&&setTimeout(function(){o[e].focus()},300),o[e].addEventListener("click",function(e){e.preventDefault();var n=t[1];return n(i,l.toast,this,e,p)})})),l.toastBody.appendChild(l.buttons)}(),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(l.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?l.toastTexts.style.marginLeft="10px":l.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?l.inputs.style.marginLeft="8px":l.inputs.style.marginRight="8px")),function(){l.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=l.toast.offsetHeight,e=l.toast.currentStyle||window.getComputedStyle(l.toast),n=e.marginTop;n=n.split("px"),n=parseInt(n[0]);var o=e.marginBottom;o=o.split("px"),o=parseInt(o[0]),l.toastCapsule.style.visibility="",l.toastCapsule.style.height=t+o+n+"px",setTimeout(function(){l.toastCapsule.style.height="auto",s.target&&(l.toastCapsule.style.overflow="visible")},500),s.timeout&&i.progress(s,l.toast).start()},100)}(),function(){var t=s.position;if(s.target)l.wrapper=document.querySelector(s.target),l.wrapper.classList.add(n+"-target"),s.targetFirst?l.wrapper.insertBefore(l.toastCapsule,l.wrapper.firstChild):l.wrapper.appendChild(l.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+n+"] Incorrect position.\nIt can be › "+r);t=o||window.innerWidth<=d?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?n+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?n+"-wrapper-topCenter":n+"-wrapper-center":n+"-wrapper-"+t,l.wrapper=document.querySelector("."+n+"-wrapper."+t),l.wrapper||(l.wrapper=document.createElement("div"),l.wrapper.classList.add(n+"-wrapper"),l.wrapper.classList.add(t),document.body.appendChild(l.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?l.wrapper.insertBefore(l.toastCapsule,l.wrapper.firstChild):l.wrapper.appendChild(l.toastCapsule)}isNaN(s.zindex)?console.warn("["+n+"] Invalid zIndex."):l.wrapper.style.zIndex=s.zindex}(),function(){s.overlay&&(null!==document.querySelector("."+n+"-overlay.fadeIn")?(l.overlay=document.querySelector("."+n+"-overlay"),l.overlay.setAttribute("data-iziToast-ref",l.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(l.overlay.style.zIndex=s.zindex-1)):(l.overlay.classList.add(n+"-overlay"),l.overlay.classList.add("fadeIn"),l.overlay.style.background=s.overlayColor,l.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(l.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(l.overlay)),s.overlayClose?(l.overlay.removeEventListener("click",{}),l.overlay.addEventListener("click",function(t){i.hide(s,l.toast,"overlay")})):l.overlay.removeEventListener("click",{}))}(),function(){if(s.animateInside){l.toast.classList.add(n+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout(function(){l.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){l.p.classList.add("slideIn")},t[1]),s.icon&&setTimeout(function(){l.icon.classList.add("revealIn")},t[2]);var e=150;s.buttons.length>0&&l.buttons&&setTimeout(function(){m(l.buttons.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})},s.inputs.length>0?150:0),s.inputs.length>0&&l.inputs&&(e=150,m(l.inputs.childNodes,function(t,n){setTimeout(function(){t.classList.add("revealIn")},e),e+=150}))}}(),s.onOpening.apply(null,[s,l.toast]);try{var b=new CustomEvent(n+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(b)}catch(L){console.warn(L)}setTimeout(function(){l.toast.classList.remove(n+"-opening"),l.toast.classList.add(n+"-opened");try{var t=new CustomEvent(n+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,l.toast])},1e3),s.drag&&(a?(l.toast.addEventListener("touchstart",function(t){y.startMoving(this,i,s,t)},!1),l.toast.addEventListener("touchend",function(t){y.stopMoving(this,t)},!1)):(l.toast.addEventListener("mousedown",function(t){t.preventDefault(),y.startMoving(this,i,s,t)},!1),l.toast.addEventListener("mouseup",function(t){t.preventDefault(),y.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){t=t||window.event,27==t.keyCode&&i.hide(s,l.toast,"esc")}),s.closeOnClick&&l.toast.addEventListener("click",function(t){i.hide(s,l.toast,"toast")}),i.toast=l.toast},e});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},M=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t="SweetAlert2:",B=function(e){console.warn(t+" "+e)},H=function(e){console.error(t+" "+e)},n=[],l=function(e){-1===n.indexOf(e)&&(n.push(e),B(e))},I=function(e){return"function"==typeof e?e():e},R=function(e){return"object"===(void 0===e?"undefined":q(e))&&"function"==typeof e.then},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),c=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},D=c(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),E=c(["success","warning","info","question","error"]),d={previousBodyPadding:null},p=function(e,t){return!!e.classList&&e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},f=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},W=function(e,t){f(e,t,!0)},P=function(e,t){f(e,t,!1)},z=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(p(e.childNodes[n],t))return e.childNodes[n]},U=function(e){e.style.opacity="",e.style.display=e.id===D.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},S=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},K=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},O=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},L=function(){return document.body.querySelector("."+D.container)},m=function(e){var t=L();return t?t.querySelector("."+e):null},Z=function(){return m(D.popup)},Q=function(){var e=Z();return Array.prototype.slice.call(e.querySelectorAll("."+D.icon))},Y=function(){return m(D.title)},$=function(){return m(D.content)},J=function(){return m(D.image)},X=function(){return m(D.progresssteps)},G=function(){return m(D.confirm)},ee=function(){return m(D.cancel)},te=function(){return m(D.actions)},ne=function(){return m(D.footer)},oe=function(){return m(D.close)},re=function(){var e=Array.prototype.slice.call(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=Array.prototype.slice.call(Z().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},h=function(){return!document.body.classList.contains(D["toast-shown"])},g=function(){return document.body.classList.contains(D["toast-shown"])},v=function(){return"undefined"==typeof window||"undefined"==typeof document},y=('\n <div aria-labelledby="'+D.title+'" aria-describedby="'+D.content+'" class="'+D.popup+'" tabindex="-1">\n   <div class="'+D.header+'">\n     <ul class="'+D.progresssteps+'"></ul>\n     <div class="'+D.icon+" "+E.error+'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'+D.icon+" "+E.question+'">\n       <span class="'+D["icon-text"]+'">?</span>\n      </div>\n     <div class="'+D.icon+" "+E.warning+'">\n       <span class="'+D["icon-text"]+'">!</span>\n      </div>\n     <div class="'+D.icon+" "+E.info+'">\n       <span class="'+D["icon-text"]+'">i</span>\n      </div>\n     <div class="'+D.icon+" "+E.success+'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'+D.image+'" />\n     <h2 class="'+D.title+'" id="'+D.title+'"></h2>\n     <button type="button" class="'+D.close+'">×</button>\n   </div>\n   <div class="'+D.content+'">\n     <div id="'+D.content+'"></div>\n     <input class="'+D.input+'" />\n     <input type="file" class="'+D.file+'" />\n     <div class="'+D.range+'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'+D.select+'"></select>\n     <div class="'+D.radio+'"></div>\n     <label for="'+D.checkbox+'" class="'+D.checkbox+'">\n       <input type="checkbox" />\n     </label>\n     <textarea class="'+D.textarea+'"></textarea>\n     <div class="'+D.validationerror+'" id="'+D.validationerror+'"></div>\n   </div>\n   <div class="'+D.actions+'">\n     <button type="button" class="'+D.confirm+'">OK</button>\n     <button type="button" class="'+D.cancel+'">Cancel</button>\n   </div>\n   <div class="'+D.footer+'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ie=function(e){var t=L();if(t&&(t.parentNode.removeChild(t),P([document.documentElement,document.body],[D["no-backdrop"],D["has-input"],D["toast-shown"]])),!v()){var n=document.createElement("div");n.className=D.container,n.innerHTML=y,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var o=Z(),r=$(),i=z(r,D.input),a=z(r,D.file),s=r.querySelector("."+D.range+" input"),u=r.querySelector("."+D.range+" output"),l=z(r,D.select),c=r.querySelector("."+D.checkbox+" input"),d=z(r,D.textarea);o.setAttribute("role",e.toast?"alert":"dialog"),o.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||o.setAttribute("aria-modal","true");var p=void 0,f=function(e){Ae.isVisible()&&p!==e.target.value&&Ae.resetValidationError(),p=e.target.value};return i.oninput=f,a.onchange=f,l.onchange=f,c.onchange=f,d.oninput=f,s.oninput=function(e){f(e),u.value=s.value},s.onchange=function(e){f(e),s.nextSibling.value=s.value},o}H("SweetAlert2 requires document to initialize")},ae=function(e,t){if(!e)return F(t);if("object"===(void 0===e?"undefined":q(e)))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);U(t)},b=function(){if(v())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),w=function(){null===d.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(d.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=d.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},se={},C=function(e,n){var o=L(),t=Z();if(t){null!==e&&"function"==typeof e&&e(t),P(t,D.show),W(t,D.hide);var r=function(){var e,t;g()||(e=window.scrollX,t=window.scrollY,se.restoreFocusTimeout=setTimeout(function(){se.previousActiveElement&&se.previousActiveElement.focus&&(se.previousActiveElement.focus(),se.previousActiveElement=null)},100),void 0!==e&&void 0!==t&&window.scrollTo(e,t),se.keydownTarget.removeEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!1),o.parentNode&&o.parentNode.removeChild(o),P([document.documentElement,document.body],[D.shown,D["height-auto"],D["no-backdrop"],D["has-input"],D["toast-shown"]]),h()&&(null!==d.previousBodyPadding&&(document.body.style.paddingRight=d.previousBodyPadding,d.previousBodyPadding=null),function(){if(p(document.body,D.iosfix)){var e=parseInt(document.body.style.top,10);P(document.body,D.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}()),null!==n&&"function"==typeof n&&setTimeout(function(){n()})};b&&!p(t,D.noanimation)?t.addEventListener(b,function e(){t.removeEventListener(b,e),p(t,D.hide)&&r()}):r()}};function k(e){var t=function e(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return new(Function.prototype.bind.apply(e,[null].concat(n)));Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var x={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},A=["useRejections","expectRejections"],T=function(e){return x.hasOwnProperty(e)||"extraParams"===e},j=function(e){return-1!==A.indexOf(e)},ue=function(e){for(var t in e)T(t)||B('Unknown parameter "'+t+'"'),j(t)&&l('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},_='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',V={};var le=[],ce=function(){var e=Z();e||Ae(""),e=Z();var t=te(),n=G(),o=ee();U(t),U(n),W([e,t],D.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},de=Object.freeze({isValidParameter:T,isDeprecatedParameter:j,argsToParams:function(n){var o={};switch(q(n[0])){case"string":["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:H("Unexpected type of "+e+'! Expected "string", got '+q(n[t]))}});break;case"object":r(o,n[0]);break;default:return H('Unexpected type of argument! Expected "string" or "object", got '+q(n[0])),!1}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:C,closePopup:C,closeModal:C,closeToast:C,isVisible:function(){return!!Z()},clickConfirm:function(){return G().click()},clickCancel:function(){return ee().click()},getPopup:Z,getTitle:Y,getContent:$,getImage:J,getIcons:Q,getButtonsWrapper:function(){return l("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),m(D.actions)},getActions:te,getConfirmButton:G,getCancelButton:ee,getFooter:ne,isLoading:function(){return Z().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(this,[null].concat(t)))},mixin:function(n){return k(function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),o(t,[{key:"_main",value:function(e){return i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var i=this;le=e;var a=function(){le=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(r,e){!function t(n,o){n<le.length?(document.body.setAttribute("data-swal2-queue-step",n),i(le[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),r({dismiss:e.dismiss}))})):(a(),r({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<le.length?le.splice(t,0,e):le.push(e)},deleteQueueStep:function(e){void 0!==le[e]&&le.splice(e,1)},showLoading:ce,enableLoading:ce,getTimerLeft:function(){return se.timeout&&se.timeout.getTimerLeft()}}),pe="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),fe="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:pe("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(pe("WeakMap"),Object.defineProperty,{}.hasOwnProperty),me={promise:new fe,innerParams:new fe,domCache:new fe};function he(){var e=me.innerParams.get(this),t=me.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),P([t.popup,t.actions],D.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}var ge=function e(t,n){var o,r,i;s(this,e);var a=n;this.start=function(){i=!0,r=new Date,o=setTimeout(t,a)},this.stop=function(){i=!1,clearTimeout(o),a-=new Date-r},this.getTimerLeft=function(){return i&&(this.stop(),this.start()),a},this.getStateRunning=function(){return i},this.start()},ve={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var ye=function(e){var t=L(),n=Z();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(W(n,D.show),W(t,D.fade),P(n,D.hide)):P(n,D.fade),U(n),t.style.overflowY="hidden",b&&!p(n,D.noanimation)?n.addEventListener(b,function e(){n.removeEventListener(b,e),t.style.overflowY="auto"}):t.style.overflowY="auto",W([document.documentElement,document.body,t],D.shown),e.heightAuto&&e.backdrop&&!e.toast&&W([document.documentElement,document.body],D["height-auto"]),h()&&(w(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!p(document.body,D.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",W(document.body,D.iosfix)}}()),g()||se.previousActiveElement||(se.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var be=Object.freeze({hideLoading:he,disableLoading:he,getInput:function(e){var t=me.innerParams.get(this),n=me.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return z(n.content,D[e]);case"checkbox":return n.popup.querySelector("."+D.checkbox+" input");case"radio":return n.popup.querySelector("."+D.radio+" input:checked")||n.popup.querySelector("."+D.radio+" input:first-child");case"range":return n.popup.querySelector("."+D.range+" input");default:return z(n.content,D.input)}},enableButtons:function(){var e=me.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=me.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){me.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){me.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationError:function(e){var t=me.domCache.get(this);t.validationError.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationError.style.marginLeft="-"+n.getPropertyValue("padding-left"),t.validationError.style.marginRight="-"+n.getPropertyValue("padding-right"),U(t.validationError);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",D.validationerror),N(o),W(o,D.inputerror))},resetValidationError:function(){var e=me.domCache.get(this);e.validationError&&F(e.validationError);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),P(t,D.inputerror))},_main:function(e){var T=this;ue(e);var j=r({},x,e);!function(r){r.inputValidator||Object.keys(ve).forEach(function(e){r.input===e&&(r.inputValidator=r.expectRejections?ve[e]:Ae.adaptInputValidator(ve[e]))}),(!r.target||"string"==typeof r.target&&!document.querySelector(r.target)||"string"!=typeof r.target&&!r.target.appendChild)&&(B('Target parameter is not valid, defaulting to "body"'),r.target="body");var e=void 0,t=Z(),n="string"==typeof r.target?document.querySelector(r.target):r.target;e=t&&n&&t.parentNode!==n.parentNode?ie(r):t||ie(r),r.width&&(e.style.width="number"==typeof r.width?r.width+"px":r.width),r.padding&&(e.style.padding="number"==typeof r.padding?r.padding+"px":r.padding),r.background&&(e.style.background=r.background);for(var o=window.getComputedStyle(e).getPropertyValue("background-color"),i=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<i.length;a++)i[a].style.backgroundColor=o;var s=L(),u=Y(),l=$().querySelector("#"+D.content),c=te(),d=G(),p=ee(),f=oe(),m=ne();if(r.titleText?u.innerText=r.titleText:r.title&&(u.innerHTML=r.title.split("\n").join("<br />")),"string"==typeof r.backdrop?L().style.background=r.backdrop:r.backdrop||W([document.documentElement,document.body],D["no-backdrop"]),r.html?ae(r.html,l):r.text?(l.textContent=r.text,U(l)):F(l),r.position in D?W(s,D[r.position]):(B('The "position" parameter is not valid, defaulting to "center"'),W(s,D.center)),r.grow&&"string"==typeof r.grow){var h="grow-"+r.grow;h in D&&W(s,D[h])}"function"==typeof r.animation&&(r.animation=r.animation.call()),r.showCloseButton?(f.setAttribute("aria-label",r.closeButtonAriaLabel),U(f)):F(f),e.className=D.popup,r.toast?(W([document.documentElement,document.body],D["toast-shown"]),W(e,D.toast)):W(e,D.modal),r.customClass&&W(e,r.customClass);var g=X(),v=parseInt(null===r.currentProgressStep?Ae.getQueueStep():r.currentProgressStep,10);r.progressSteps&&r.progressSteps.length?(U(g),S(g),v>=r.progressSteps.length&&B("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(W(n,D.progresscircle),n.innerHTML=e,t===v&&W(n,D.activeprogressstep),g.appendChild(n),t!==r.progressSteps.length-1){var o=document.createElement("li");W(o,D.progressline),r.progressStepsDistance&&(o.style.width=r.progressStepsDistance),g.appendChild(o)}})):F(g);for(var y=Q(),b=0;b<y.length;b++)F(y[b]);if(r.type){var w=!1;for(var C in E)if(r.type===C){w=!0;break}if(!w)return H("Unknown alert type: "+r.type);var k=e.querySelector("."+D.icon+"."+E[r.type]);U(k),r.animation&&W(k,"swal2-animate-"+r.type+"-icon")}var x=J();if(r.imageUrl?(x.setAttribute("src",r.imageUrl),x.setAttribute("alt",r.imageAlt),U(x),r.imageWidth?x.setAttribute("width",r.imageWidth):x.removeAttribute("width"),r.imageHeight?x.setAttribute("height",r.imageHeight):x.removeAttribute("height"),x.className=D.image,r.imageClass&&W(x,r.imageClass)):F(x),r.showCancelButton?p.style.display="inline-block":F(p),r.showConfirmButton?O(d,"display"):F(d),r.showConfirmButton||r.showCancelButton?U(c):F(c),d.innerHTML=r.confirmButtonText,p.innerHTML=r.cancelButtonText,d.setAttribute("aria-label",r.confirmButtonAriaLabel),p.setAttribute("aria-label",r.cancelButtonAriaLabel),d.className=D.confirm,W(d,r.confirmButtonClass),p.className=D.cancel,W(p,r.cancelButtonClass),r.buttonsStyling){W([d,p],D.styled),r.confirmButtonColor&&(d.style.backgroundColor=r.confirmButtonColor),r.cancelButtonColor&&(p.style.backgroundColor=r.cancelButtonColor);var A=window.getComputedStyle(d).getPropertyValue("background-color");d.style.borderLeftColor=A,d.style.borderRightColor=A}else P([d,p],D.styled),d.style.backgroundColor=d.style.borderLeftColor=d.style.borderRightColor="",p.style.backgroundColor=p.style.borderLeftColor=p.style.borderRightColor="";ae(r.footer,m),!0===r.animation?P(e,D.noanimation):W(e,D.noanimation),r.showLoaderOnConfirm&&!r.preConfirm&&B("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(j),Object.freeze(j),me.innerParams.set(this,j),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);var _={popup:Z(),container:L(),content:$(),actions:te(),confirmButton:G(),cancelButton:ee(),closeButton:oe(),validationError:m(D.validationerror),progressSteps:X()};me.domCache.set(this,_);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?t(e):t({value:e})},l=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?n(e):t({dismiss:e})},c=function(e){V.closePopup(j.onClose,j.onAfterClose),n(e)};j.timer&&(se.timeout=new ge(function(){l("timer"),delete se.timeout},j.timer)),j.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var d=function(t){if(j.showLoaderOnConfirm&&V.showLoading(),j.preConfirm){T.resetValidationError();var e=Promise.resolve().then(function(){return j.preConfirm(t,j.extraParams)});j.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationError(e)}):e.then(function(e){K(_.validationError)||!1===e?T.hideLoading():o(e||t)},function(e){return c(e)})}else o(t)},e=function(e){var t=e||window.event,n=t.target||t.srcElement,o=_.confirmButton,r=_.cancelButton,i=o&&(o===n||o.contains(n)),a=r&&(r===n||r.contains(n));switch(t.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),j.input){var s=function(){var e=T.getInput();if(!e)return null;switch(j.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return j.inputAutoTrim?e.value.trim():e.value}}();if(j.inputValidator){T.disableInput();var u=Promise.resolve().then(function(){return j.inputValidator(s,j.extraParams)});j.expectRejections?u.then(function(){T.enableButtons(),T.enableInput(),d(s)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationError(e)}):u.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationError(e):d(s)},function(e){return c(e)})}else d(s)}else d(!0);else a&&V.isVisible()&&(T.disableButtons(),l(V.DismissReason.cancel))}},r=_.popup.querySelectorAll("button"),i=0;i<r.length;i++)r[i].onclick=e,r[i].onmouseover=e,r[i].onmouseout=e,r[i].onmousedown=e;if(_.closeButton.onclick=function(){l(V.DismissReason.close)},j.toast)_.popup.onclick=function(e){j.showConfirmButton||j.showCancelButton||j.showCloseButton||j.input||(V.closePopup(j.onClose,j.onAfterClose),l(V.DismissReason.close))};else{var a=!1;_.popup.onmousedown=function(){_.container.onmouseup=function(e){_.container.onmouseup=void 0,e.target===_.container&&(a=!0)}},_.container.onmousedown=function(){_.popup.onmouseup=function(e){_.popup.onmouseup=void 0,(e.target===_.popup||_.popup.contains(e.target))&&(a=!0)}},_.container.onclick=function(e){a?a=!1:e.target===_.container&&I(j.allowOutsideClick)&&l(V.DismissReason.backdrop)}}j.reverseButtons?_.confirmButton.parentNode.insertBefore(_.cancelButton,_.confirmButton):_.confirmButton.parentNode.insertBefore(_.confirmButton,_.cancelButton);var s=function(e,t){for(var n=re(j.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(K(r))return r.focus()}_.popup.focus()};se.keydownHandlerAdded&&(se.keydownTarget.removeEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!1),j.toast||(se.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target||e.srcElement,o=re(t.focusCancel),r=-1,i=0;i<o.length;i++)if(n===o[i]){r=i;break}e.shiftKey?s(r,-1):s(r,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===_.confirmButton&&K(_.cancelButton)?_.cancelButton.focus():document.activeElement===_.cancelButton&&K(_.confirmButton)&&_.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==I(t.allowEscapeKey)||l(V.DismissReason.esc);else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,j)},se.keydownTarget=j.keydownListenerCapture?window:_.popup,se.keydownListenerCapture=j.keydownListenerCapture,se.keydownTarget.addEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationError(),j.input&&W(document.body,D["has-input"]);for(var u=["input","file","range","select","radio","checkbox","textarea"],p=void 0,f=0;f<u.length;f++){var m=D[u[f]],h=z(_.content,m);if(p=T.getInput(u[f])){for(var g in p.attributes)if(p.attributes.hasOwnProperty(g)){var v=p.attributes[g].name;"type"!==v&&"value"!==v&&p.removeAttribute(v)}for(var y in j.inputAttributes)p.setAttribute(y,j.inputAttributes[y])}h.className=m,j.inputClass&&W(h,j.inputClass),F(h)}var b=void 0;switch(j.input){case"text":case"email":case"password":case"number":case"tel":case"url":(p=z(_.content,D.input)).value=j.inputValue,p.placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"file":(p=z(_.content,D.file)).placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"range":var w=z(_.content,D.range),C=w.querySelector("input"),k=w.querySelector("output");C.value=j.inputValue,C.type=j.input,k.value=j.inputValue,U(w);break;case"select":var x=z(_.content,D.select);if(x.innerHTML="",j.inputPlaceholder){var A=document.createElement("option");A.innerHTML=j.inputPlaceholder,A.value="",A.disabled=!0,A.selected=!0,x.appendChild(A)}b=function(e){e.forEach(function(e){var t=M(e,2),n=t[0],o=t[1],r=document.createElement("option");r.value=n,r.innerHTML=o,j.inputValue.toString()===n.toString()&&(r.selected=!0),x.appendChild(r)}),U(x),x.focus()};break;case"radio":var B=z(_.content,D.radio);B.innerHTML="",b=function(e){e.forEach(function(e){var t=M(e,2),n=t[0],o=t[1],r=document.createElement("input"),i=document.createElement("label");r.type="radio",r.name=D.radio,r.value=n,j.inputValue.toString()===n.toString()&&(r.checked=!0),i.innerHTML=o,i.insertBefore(r,i.firstChild),B.appendChild(i)}),U(B);var t=B.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var E=z(_.content,D.checkbox),P=T.getInput("checkbox");P.type="checkbox",P.value=1,P.id=D.checkbox,P.checked=Boolean(j.inputValue);var S=E.getElementsByTagName("span");S.length&&E.removeChild(S[0]),(S=document.createElement("span")).innerHTML=j.inputPlaceholder,E.appendChild(S),U(E);break;case"textarea":var O=z(_.content,D.textarea);O.value=j.inputValue,O.placeholder=j.inputPlaceholder,U(O);break;case null:break;default:H('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+j.input+'"')}if("select"===j.input||"radio"===j.input){var L=function(e){return b((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};R(j.inputOptions)?(V.showLoading(),j.inputOptions.then(function(e){T.hideLoading(),L(e)})):"object"===q(j.inputOptions)?L(j.inputOptions):H("Unexpected type of inputOptions! Expected object, Map or Promise, got "+q(j.inputOptions))}else-1!==["text","email","number","tel","textarea"].indexOf(j.input)&&R(j.inputValue)&&(V.showLoading(),F(p),j.inputValue.then(function(e){p.value="number"===j.input?parseFloat(e)||0:e+"",U(p),T.hideLoading()}).catch(function(e){H("Error in inputValue promise: "+e),p.value="",U(p),T.hideLoading()}));ye(j),j.toast||(I(j.allowEnterKey)?j.focusCancel&&K(_.cancelButton)?_.cancelButton.focus():j.focusConfirm&&K(_.confirmButton)?_.confirmButton.focus():s(-1,1):document.activeElement&&document.activeElement.blur()),_.container.scrollTop=0})}}),we=void 0;function Ce(){if("undefined"!=typeof window){"undefined"==typeof Promise&&H("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===t[0])return H("SweetAlert2 expects at least 1 attribute!"),!1;we=this;var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var r=this._main(this.params);me.promise.set(this,r)}}Ce.prototype.then=function(e,t){return me.promise.get(this).then(e,t)},Ce.prototype.catch=function(e){return me.promise.get(this).catch(e)},Ce.prototype.finally=function(e){return me.promise.get(this).finally(e)},r(Ce.prototype,be),r(Ce,de),Object.keys(be).forEach(function(t){Ce[t]=function(){var e;if(we)return(e=we)[t].apply(e,arguments)}}),Ce.DismissReason=e,Ce.noop=function(){},Ce.version="7.25.0";var ke,xe,Ae=k((ke=Ce,xe=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,ke),o(t,[{key:"_main",value:function(e){return i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_main",this).call(this,r({},V,e))}}],[{key:"setDefaults",value:function(t){if(l(_),!t||"object"!==(void 0===t?"undefined":q(t)))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ue(t),Object.keys(t).forEach(function(e){ke.isValidParameter(e)&&(V[e]=t[e])})}},{key:"resetDefaults",value:function(){l(_),V={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&xe.setDefaults(window._swalDefaults),xe));return Ae.default=Ae}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
// 4.7.13 (2018-05-16)
!function(){"use strict";var e,t,n,r,o,i,a,u,s,c,l,f,d,m,p,g,h,v=function(e){return function(){return e}},y=v(!1),b=v(!0),V={noop:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},noarg:function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n()}},compose:function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(r.apply(null,arguments))}},constant:v,identity:function(e){return e},tripleEquals:function(e,t){return e===t},curry:function(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var a=new Array(arguments.length-1),n=1;n<arguments.length;n++)a[n-1]=arguments[n];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];var o=a.concat(n);return i.apply(null,o)}},not:function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,arguments)}},die:function(e){return function(){throw new Error(e)}},apply:function(e){return e()},call:function(e){e()},never:y,always:b},C=V.never,x=V.always,w=function(){return N},N=(r={fold:function(e,t){return e()},is:C,isSome:C,isNone:x,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},or:n,orThunk:t,map:w,ap:w,each:function(){},bind:w,flatten:w,exists:C,forall:x,filter:w,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:V.constant("none()")},Object.freeze&&Object.freeze(r),r),E=function(n){var e=function(){return n},t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:x,isNone:C,getOr:e,getOrThunk:e,getOrDie:e,or:t,orThunk:t,map:function(e){return E(e(n))},ap:function(e){return e.fold(w,function(e){return E(e(n))})},each:function(e){e(n)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(n)?o:N},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(C,function(e){return t(n,e)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},A={some:E,none:w,from:function(e){return null===e||e===undefined?N:E(e)}},S=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===t}},k={isString:S("string"),isObject:S("object"),isArray:S("array"),isNull:S("null"),isBoolean:S("boolean"),isUndefined:S("undefined"),isFunction:S("function"),isNumber:S("number")},T=(o=Array.prototype.indexOf)===undefined?function(e,t){return L(e,t)}:function(e,t){return o.call(e,t)},R=function(e,t){return-1<T(e,t)},_=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o,e)}return r},B=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)},D=function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n,e)},O=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r];t(i,r,e)&&n.push(i)}return n},P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n,e))return A.some(n);return A.none()},L=function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},I=Array.prototype.push,M=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!Array.prototype.isPrototypeOf(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);I.apply(t,e[n])}return t},F=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n,e))return!1;return!0},z=Array.prototype.slice,U=k.isFunction(Array.from)?Array.from:function(e){return z.call(e)},H={map:_,each:B,eachr:D,partition:function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o,e)?n:r).push(a)}return{pass:n,fail:r}},filter:O,groupBy:function(e,t){if(0===e.length)return[];for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],s=t(u);s!==n&&(r.push(o),o=[]),n=s,o.push(u)}return 0!==o.length&&r.push(o),r},indexOf:function(e,t){var n=T(e,t);return-1===n?A.none():A.some(n)},foldr:function(e,t,n){return D(e,function(e){n=t(n,e)}),n},foldl:function(e,t,n){return B(e,function(e){n=t(n,e)}),n},find:function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n,e))return A.some(o)}return A.none()},findIndex:P,flatten:M,bind:function(e,t){var n=_(e,t);return M(n)},forall:F,exists:function(e,t){return P(e,t).isSome()},contains:R,equal:function(e,n){return e.length===n.length&&F(e,function(e,t){return e===n[t]})},reverse:function(e){var t=z.call(e,0);return t.reverse(),t},chunk:function(e,t){for(var n=[],r=0;r<e.length;r+=t){var o=e.slice(r,r+t);n.push(o)}return n},difference:function(e,t){return O(e,function(e){return!R(t,e)})},mapToObject:function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r];n[String(i)]=t(i,r)}return n},pure:function(e){return[e]},sort:function(e,t){var n=z.call(e,0);return n.sort(t),n},range:function(e,t){for(var n=[],r=0;r<e;r++)n.push(t(r));return n},head:function(e){return 0===e.length?A.none():A.some(e[0])},last:function(e){return 0===e.length?A.none():A.some(e[e.length-1])},from:U},q="undefined"!=typeof window?window:Function("return this;")(),j=function(e,t){for(var n=t!==undefined&&null!==t?t:q,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n},$=function(e,t){var n=e.split(".");return j(n,t)},W={getOrDie:function(e,t){var n=$(e,t);if(n===undefined||null===n)throw e+" not available on this browser";return n}},K=function(){return W.getOrDie("URL")},X={createObjectURL:function(e){return K().createObjectURL(e)},revokeObjectURL:function(e){K().revokeObjectURL(e)}},Y=navigator,G=Y.userAgent,J=function(e){return"matchMedia"in window&&matchMedia(e).matches};d=/Android/.test(G),a=(a=!(i=/WebKit/.test(G))&&/MSIE/gi.test(G)&&/Explorer/gi.test(Y.appName))&&/MSIE (\w+)\./.exec(G)[1],u=-1!==G.indexOf("Trident/")&&(-1!==G.indexOf("rv:")||-1!==Y.appName.indexOf("Netscape"))&&11,s=-1!==G.indexOf("Edge/")&&!a&&!u&&12,a=a||u||s,c=!i&&!u&&/Gecko/.test(G),l=-1!==G.indexOf("Mac"),f=/(iPad|iPhone)/.test(G),m="FormData"in window&&"FileReader"in window&&"URL"in window&&!!X.createObjectURL,p=J("only screen and (max-device-width: 480px)")&&(d||f),g=J("only screen and (min-width: 800px)")&&(d||f),h=-1!==G.indexOf("Windows Phone"),s&&(i=!1);var Q,Z,ee,te,ne,re,oe,ie,ae,ue,se,ce,le,fe,de,me,pe,ge,he,ve={opera:!1,webkit:i,ie:a,gecko:c,mac:l,iOS:f,android:d,contentEditable:!f||m||534<=parseInt(G.match(/AppleWebKit\/(\d*)/)[1],10),transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!==a,range:window.getSelection&&"Range"in window,documentMode:a&&!s?document.documentMode||7:10,fileApi:m,ceFalse:!1===a||8<a,cacheSuffix:null,container:null,overrideViewPort:null,experimentalShadowDom:!1,canHaveCSP:!1===a||11<a,desktop:!p&&!g,windowsPhone:h},ye=window.Promise?window.Promise:function(){function r(e,t){return function(){e.apply(t,arguments)}}var e=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(o,this),r(u,this))},t=i.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)};function a(r){var o=this;null!==this._state?t(function(){var e=o._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(o._value)}catch(n){return void r.reject(n)}r.resolve(t)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(o,this),r(u,this))}this._state=!0,this._value=e,s.call(this)}catch(n){u.call(this,n)}}function u(e){this._state=!1,this._value=e,s.call(this)}function s(){for(var e=0,t=this._deferreds.length;e<t;e++)a.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(o){if(r)return;r=!0,n(o)}}return i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(n,r){var o=this;return new i(function(e,t){a.call(o,new c(n,r,e,t))})},i.all=function(){var s=Array.prototype.slice.call(1===arguments.length&&e(arguments[0])?arguments[0]:arguments);return new i(function(o,i){if(0===s.length)return o([]);var a=s.length;function u(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){u(t,e)},i)}s[t]=e,0==--a&&o(s)}catch(r){i(r)}}for(var e=0;e<s.length;e++)u(e,s[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i}(),be=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},Ce=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},xe=function(t,n){var r,e;return(e=function(){var e=arguments;clearTimeout(r),r=be(function(){t.apply(this,e)},n)}).stop=function(){clearTimeout(r)},e},we={requestAnimationFrame:function(e,t){Q?Q.then(e):Q=new ye(function(e){t||(t=document.body),function(e,t){var n,r=window.requestAnimationFrame,o=["ms","moz","webkit"];for(n=0;n<o.length&&!r;n++)r=window[o[n]+"RequestAnimationFrame"];r||(r=function(e){window.setTimeout(e,0)}),r(e,t)}(e,t)}).then(e)},setTimeout:be,setInterval:Ce,setEditorTimeout:function(e,t,n){return be(function(){e.removed||t()},n)},setEditorInterval:function(e,t,n){var r;return r=Ce(function(){e.removed?clearInterval(r):t()},n)},debounce:xe,throttle:xe,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},Ne=/^(?:mouse|contextmenu)|click/,Ee={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1},Se=function(){return!1},ke=function(){return!0},Te=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Ae=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},Re=function(e,t){var n,r,o,i,a,u,s=t||{};for(n in e)Ee[n]||(s[n]=e[n]);if(s.target||(s.target=s.srcElement||document),ve.experimentalShadowDom&&(s.target=(r=e,o=s.target,a=o,(i=r.path)&&0<i.length&&(a=i[0]),r.composedPath&&(i=r.composedPath())&&0<i.length&&(a=i[0]),a)),e&&Ne.test(e.type)&&e.pageX===undefined&&e.clientX!==undefined){var c=s.target.ownerDocument||document,l=c.documentElement,f=c.body;s.pageX=e.clientX+(l&&l.scrollLeft||f&&f.scrollLeft||0)-(l&&l.clientLeft||f&&f.clientLeft||0),s.pageY=e.clientY+(l&&l.scrollTop||f&&f.scrollTop||0)-(l&&l.clientTop||f&&f.clientTop||0)}return s.preventDefault=function(){s.isDefaultPrevented=ke,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},s.stopPropagation=function(){s.isPropagationStopped=ke,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(s.stopImmediatePropagation=function(){s.isImmediatePropagationStopped=ke,s.stopPropagation()})==((u=s).isDefaultPrevented===ke||u.isDefaultPrevented===Se)&&(s.isDefaultPrevented=Se,s.isPropagationStopped=Se,s.isImmediatePropagationStopped=Se),"undefined"==typeof s.metaKey&&(s.metaKey=!1),s},_e=function(e,t,n){var r=e.document,o={type:"ready"};if(n.domLoaded)t(o);else{var i=function(){return"complete"===r.readyState||"interactive"===r.readyState&&r.body},a=function(){n.domLoaded||(n.domLoaded=!0,t(o))},u=function(){i()&&(Ae(r,"readystatechange",u),a())},s=function(){try{r.documentElement.doScroll("left")}catch(e){return void we.setTimeout(s)}a()};!r.addEventListener||ve.ie&&ve.ie<11?(Te(r,"readystatechange",u),r.documentElement.doScroll&&e.self===e.top&&s()):i()?a():Te(e,"DOMContentLoaded",a),Te(e,"load",a)}},Be=function(){var m,p,g,h,v,y=this,b={};p="mce-data-"+(+new Date).toString(32),h="onmouseenter"in document.documentElement,g="onfocusin"in document.documentElement,v={mouseenter:"mouseover",mouseleave:"mouseout"},m=1,y.domLoaded=!1,y.events=b;var C=function(e,t){var n,r,o,i,a=b[t];if(n=a&&a[e.type])for(r=0,o=n.length;r<o;r++)if((i=n[r])&&!1===i.func.call(i.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return};y.bind=function(e,t,n,r){var o,i,a,u,s,c,l,f=window,d=function(e){C(Re(e||f.event),o)};if(e&&3!==e.nodeType&&8!==e.nodeType){for(e[p]?o=e[p]:(o=m++,e[p]=o,b[o]={}),r=r||e,a=(t=t.split(" ")).length;a--;)c=d,s=l=!1,"DOMContentLoaded"===(u=t[a])&&(u="ready"),y.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,Re({type:u})):(h||(s=v[u])&&(c=function(e){var t,n;if(t=e.currentTarget,(n=e.relatedTarget)&&t.contains)n=t.contains(n);else for(;n&&n!==t;)n=n.parentNode;n||((e=Re(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,C(e,o))}),g||"focusin"!==u&&"focusout"!==u||(l=!0,s="focusin"===u?"focus":"blur",c=function(e){(e=Re(e||f.event)).type="focus"===e.type?"focusin":"focusout",C(e,o)}),(i=b[o][u])?"ready"===u&&y.domLoaded?n({type:u}):i.push({func:n,scope:r}):(b[o][u]=i=[{func:n,scope:r}],i.fakeName=s,i.capture=l,i.nativeHandler=c,"ready"===u?_e(e,c,y):Te(e,s||u,c,l)));return e=i=0,n}},y.unbind=function(e,t,n){var r,o,i,a,u,s;if(!e||3===e.nodeType||8===e.nodeType)return y;if(r=e[p]){if(s=b[r],t){for(i=(t=t.split(" ")).length;i--;)if(o=s[u=t[i]]){if(n)for(a=o.length;a--;)if(o[a].func===n){var c=o.nativeHandler,l=o.fakeName,f=o.capture;(o=o.slice(0,a).concat(o.slice(a+1))).nativeHandler=c,o.fakeName=l,o.capture=f,s[u]=o}n&&0!==o.length||(delete s[u],Ae(e,o.fakeName||u,o.nativeHandler,o.capture))}}else{for(u in s)o=s[u],Ae(e,o.fakeName||u,o.nativeHandler,o.capture);s={}}for(u in s)return y;delete b[r];try{delete e[p]}catch(d){e[p]=null}}return y},y.fire=function(e,t,n){var r;if(!e||3===e.nodeType||8===e.nodeType)return y;for((n=Re(null,n)).type=t,n.target=e;(r=e[p])&&C(n,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!n.isPropagationStopped(););return y},y.clean=function(e){var t,n,r=y.unbind;if(!e||3===e.nodeType||8===e.nodeType)return y;if(e[p]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[p]&&r(e);return y},y.destroy=function(){b={}},y.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}};Be.Event=new Be,Be.Event.bind(window,"ready",function(){});var De="sizzle"+-new Date,Oe=window.document,Pe=0,Le=0,Ie=pt(),Me=pt(),Fe=pt(),ze=function(e,t){return e===t&&(ce=!0),0},Ue=typeof undefined,qe={}.hasOwnProperty,Ve=[],He=Ve.pop,je=Ve.push,$e=Ve.push,We=Ve.slice,Ke=Ve.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},Xe="[\\x20\\t\\r\\n\\f]",Ye="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Ge="\\["+Xe+"*("+Ye+")(?:"+Xe+"*([*^$|!~]?=)"+Xe+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Ye+"))|)"+Xe+"*\\]",Je=":("+Ye+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Ge+")*)|.*)\\)|)",Qe=new RegExp("^"+Xe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Xe+"+$","g"),Ze=new RegExp("^"+Xe+"*,"+Xe+"*"),et=new RegExp("^"+Xe+"*([>+~]|"+Xe+")"+Xe+"*"),tt=new RegExp("="+Xe+"*([^\\]'\"]*?)"+Xe+"*\\]","g"),nt=new RegExp(Je),rt=new RegExp("^"+Ye+"$"),ot={ID:new RegExp("^#("+Ye+")"),CLASS:new RegExp("^\\.("+Ye+")"),TAG:new RegExp("^("+Ye+"|[*])"),ATTR:new RegExp("^"+Ge),PSEUDO:new RegExp("^"+Je),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Xe+"*(even|odd|(([+-]|)(\\d*)n|)"+Xe+"*(?:([+-]|)"+Xe+"*(\\d+)|))"+Xe+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+Xe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Xe+"*((?:-\\d)?\\d*)"+Xe+"*\\)|)(?=[^-]|$)","i")},it=/^(?:input|select|textarea|button)$/i,at=/^h\d$/i,ut=/^[^{]+\{\s*\[native \w/,st=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ct=/[+~]/,lt=/'|\\/g,ft=new RegExp("\\\\([\\da-f]{1,6}"+Xe+"?|("+Xe+")|.)","ig"),dt=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{$e.apply(Ve=We.call(Oe.childNodes),Oe.childNodes),Ve[Oe.childNodes.length].nodeType}catch(Dw){$e={apply:Ve.length?function(e,t){je.apply(e,We.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var mt=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m;if((t?t.ownerDocument||t:Oe)!==fe&&le(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(u=(t=t||fe).nodeType)&&9!==u)return[];if(me&&!r){if(o=st.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&he(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return $e.apply(n,t.getElementsByTagName(e)),n;if((a=o[3])&&ee.getElementsByClassName)return $e.apply(n,t.getElementsByClassName(a)),n}if(ee.qsa&&(!pe||!pe.test(e))){if(f=l=De,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=oe(e),(l=t.getAttribute("id"))?f=l.replace(lt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+wt(c[s]);d=ct.test(e)&&Ct(t.parentNode)||t,m=c.join(",")}if(m)try{return $e.apply(n,d.querySelectorAll(m)),n}catch(p){}finally{l||t.removeAttribute("id")}}}return ae(e.replace(Qe,"$1"),t,n,r)};function pt(){var r=[];return function e(t,n){return r.push(t+" ")>te.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function gt(e){return e[De]=!0,e}function ht(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function vt(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function yt(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function bt(a){return gt(function(i){return i=+i,gt(function(e,t){for(var n,r=a([],e.length,i),o=r.length;o--;)e[n=r[o]]&&(e[n]=!(t[n]=e[n]))})})}function Ct(e){return e&&typeof e.getElementsByTagName!==Ue&&e}for(Z in ee=mt.support={},re=mt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},le=mt.setDocument=function(e){var t,s=e?e.ownerDocument||e:Oe,n=s.defaultView;return s!==fe&&9===s.nodeType&&s.documentElement?(de=(fe=s).documentElement,me=!re(s),n&&n!==function(e){try{return e.top}catch(t){}return null}(n)&&(n.addEventListener?n.addEventListener("unload",function(){le()},!1):n.attachEvent&&n.attachEvent("onunload",function(){le()})),ee.attributes=!0,ee.getElementsByTagName=!0,ee.getElementsByClassName=ut.test(s.getElementsByClassName),ee.getById=!0,te.find.ID=function(e,t){if(typeof t.getElementById!==Ue&&me){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},te.filter.ID=function(e){var t=e.replace(ft,dt);return function(e){return e.getAttribute("id")===t}},te.find.TAG=ee.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Ue)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},te.find.CLASS=ee.getElementsByClassName&&function(e,t){if(me)return t.getElementsByClassName(e)},ge=[],pe=[],ee.disconnectedMatch=!0,pe=pe.length&&new RegExp(pe.join("|")),ge=ge.length&&new RegExp(ge.join("|")),t=ut.test(de.compareDocumentPosition),he=t||ut.test(de.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},ze=t?function(e,t){if(e===t)return ce=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!ee.sortDetached&&t.compareDocumentPosition(e)===n?e===s||e.ownerDocument===Oe&&he(Oe,e)?-1:t===s||t.ownerDocument===Oe&&he(Oe,t)?1:se?Ke.call(se,e)-Ke.call(se,t):0:4&n?-1:1)}:function(e,t){if(e===t)return ce=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,a=[e],u=[t];if(!o||!i)return e===s?-1:t===s?1:o?-1:i?1:se?Ke.call(se,e)-Ke.call(se,t):0;if(o===i)return ht(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?ht(a[r],u[r]):a[r]===Oe?-1:u[r]===Oe?1:0},s):fe},mt.matches=function(e,t){return mt(e,null,null,t)},mt.matchesSelector=function(e,t){if((e.ownerDocument||e)!==fe&&le(e),t=t.replace(tt,"='$1']"),ee.matchesSelector&&me&&(!ge||!ge.test(t))&&(!pe||!pe.test(t)))try{var n=(void 0).call(e,t);if(n||ee.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(Dw){}return 0<mt(t,fe,null,[e]).length},mt.contains=function(e,t){return(e.ownerDocument||e)!==fe&&le(e),he(e,t)},mt.attr=function(e,t){(e.ownerDocument||e)!==fe&&le(e);var n=te.attrHandle[t.toLowerCase()],r=n&&qe.call(te.attrHandle,t.toLowerCase())?n(e,t,!me):undefined;return r!==undefined?r:ee.attributes||!me?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},mt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},mt.uniqueSort=function(e){var t,n=[],r=0,o=0;if(ce=!ee.detectDuplicates,se=!ee.sortStable&&e.slice(0),e.sort(ze),ce){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return se=null,e},ne=mt.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=ne(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=ne(t);return n},(te=mt.selectors={cacheLength:50,createPseudo:gt,match:ot,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ft,dt),e[3]=(e[3]||e[4]||e[5]||"").replace(ft,dt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||mt.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&mt.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ot.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&nt.test(n)&&(t=oe(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ft,dt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Ie[e+" "];return t||(t=new RegExp("(^|"+Xe+")"+e+"("+Xe+"|$)"))&&Ie(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Ue&&e.getAttribute("class")||"")})},ATTR:function(n,r,o){return function(e){var t=mt.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===o:"!="===r?t!==o:"^="===r?o&&0===t.indexOf(o):"*="===r?o&&-1<t.indexOf(o):"$="===r?o&&t.slice(-o.length)===o:"~="===r?-1<(" "+t+" ").indexOf(o):"|="===r&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(m,e,t,p,g){var h="nth"!==m.slice(0,3),v="last"!==m.slice(-4),y="of-type"===e;return 1===p&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,o,i,a,u,s,c=h!==v?"nextSibling":"previousSibling",l=e.parentNode,f=y&&e.nodeName.toLowerCase(),d=!n&&!y;if(l){if(h){for(;c;){for(i=e;i=i[c];)if(y?i.nodeName.toLowerCase()===f:1===i.nodeType)return!1;s=c="only"===m&&!s&&"nextSibling"}return!0}if(s=[v?l.firstChild:l.lastChild],v&&d){for(u=(r=(o=l[De]||(l[De]={}))[m]||[])[0]===Pe&&r[1],a=r[0]===Pe&&r[2],i=u&&l.childNodes[u];i=++u&&i&&i[c]||(a=u=0)||s.pop();)if(1===i.nodeType&&++a&&i===e){o[m]=[Pe,u,a];break}}else if(d&&(r=(e[De]||(e[De]={}))[m])&&r[0]===Pe)a=r[1];else for(;(i=++u&&i&&i[c]||(a=u=0)||s.pop())&&((y?i.nodeName.toLowerCase()!==f:1!==i.nodeType)||!++a||(d&&((i[De]||(i[De]={}))[m]=[Pe,a]),i!==e)););return(a-=g)===p||a%p==0&&0<=a/p}}},PSEUDO:function(e,i){var t,a=te.pseudos[e]||te.setFilters[e.toLowerCase()]||mt.error("unsupported pseudo: "+e);return a[De]?a(i):1<a.length?(t=[e,e,"",i],te.setFilters.hasOwnProperty(e.toLowerCase())?gt(function(e,t){for(var n,r=a(e,i),o=r.length;o--;)e[n=Ke.call(e,r[o])]=!(t[n]=r[o])}):function(e){return a(e,0,t)}):a}},pseudos:{not:gt(function(e){var r=[],o=[],u=ie(e.replace(Qe,"$1"));return u[De]?gt(function(e,t,n,r){for(var o,i=u(e,null,r,[]),a=e.length;a--;)(o=i[a])&&(e[a]=!(t[a]=o))}):function(e,t,n){return r[0]=e,u(r,null,n,o),!o.pop()}}),has:gt(function(t){return function(e){return 0<mt(t,e).length}}),contains:gt(function(t){return t=t.replace(ft,dt),function(e){return-1<(e.textContent||e.innerText||ne(e)).indexOf(t)}}),lang:gt(function(n){return rt.test(n||"")||mt.error("unsupported lang: "+n),n=n.replace(ft,dt).toLowerCase(),function(e){var t;do{if(t=me?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===de},focus:function(e){return e===fe.activeElement&&(!fe.hasFocus||fe.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!te.pseudos.empty(e)},header:function(e){return at.test(e.nodeName)},input:function(e){return it.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:bt(function(){return[0]}),last:bt(function(e,t){return[t-1]}),eq:bt(function(e,t,n){return[n<0?n+t:n]}),even:bt(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:bt(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:bt(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:bt(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=te.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})te.pseudos[Z]=vt(Z);for(Z in{submit:!0,reset:!0})te.pseudos[Z]=yt(Z);function xt(){}function wt(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function Nt(a,e,t){var u=e.dir,s=t&&"parentNode"===u,c=Le++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||s)return a(e,t,n)}:function(e,t,n){var r,o,i=[Pe,c];if(n){for(;e=e[u];)if((1===e.nodeType||s)&&a(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||s){if((r=(o=e[De]||(e[De]={}))[u])&&r[0]===Pe&&r[1]===c)return i[2]=r[2];if((o[u]=i)[2]=a(e,t,n))return!0}}}function Et(o){return 1<o.length?function(e,t,n){for(var r=o.length;r--;)if(!o[r](e,t,n))return!1;return!0}:o[0]}function St(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)));return a}function kt(m,p,g,h,v,e){return h&&!h[De]&&(h=kt(h)),v&&!v[De]&&(v=kt(v,e)),gt(function(e,t,n,r){var o,i,a,u=[],s=[],c=t.length,l=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)mt(e,t[r],n);return n}(p||"*",n.nodeType?[n]:n,[]),f=!m||!e&&p?l:St(l,u,m,n,r),d=g?v||(e?m:c||h)?[]:t:f;if(g&&g(f,d,n,r),h)for(o=St(d,s),h(o,[],n,r),i=o.length;i--;)(a=o[i])&&(d[s[i]]=!(f[s[i]]=a));if(e){if(v||m){if(v){for(o=[],i=d.length;i--;)(a=d[i])&&o.push(f[i]=a);v(null,d=[],o,r)}for(i=d.length;i--;)(a=d[i])&&-1<(o=v?Ke.call(e,a):u[i])&&(e[o]=!(t[o]=a))}}else d=St(d===t?d.splice(c,d.length):d),v?v(null,t,d,r):$e.apply(t,d)})}function Tt(e){for(var r,t,n,o=e.length,i=te.relative[e[0].type],a=i||te.relative[" "],u=i?1:0,s=Nt(function(e){return e===r},a,!0),c=Nt(function(e){return-1<Ke.call(r,e)},a,!0),l=[function(e,t,n){return!i&&(n||t!==ue)||((r=t).nodeType?s(e,t,n):c(e,t,n))}];u<o;u++)if(t=te.relative[e[u].type])l=[Nt(Et(l),t)];else{if((t=te.filter[e[u].type].apply(null,e[u].matches))[De]){for(n=++u;n<o&&!te.relative[e[n].type];n++);return kt(1<u&&Et(l),1<u&&wt(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(Qe,"$1"),t,u<n&&Tt(e.slice(u,n)),n<o&&Tt(e=e.slice(n)),n<o&&wt(e))}l.push(t)}return Et(l)}xt.prototype=te.filters=te.pseudos,te.setFilters=new xt,oe=mt.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Me[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],s=te.preFilter;a;){for(i in n&&!(r=Ze.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=et.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(Qe," ")}),a=a.slice(n.length)),te.filter)!(r=ot[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?mt.error(e):Me(e,u).slice(0)},ie=mt.compile=function(e,t){var n,h,v,y,b,r,o=[],i=[],a=Fe[e+" "];if(!a){for(t||(t=oe(e)),n=t.length;n--;)(a=Tt(t[n]))[De]?o.push(a):i.push(a);(a=Fe(e,(h=i,y=0<(v=o).length,b=0<h.length,r=function(e,t,n,r,o){var i,a,u,s=0,c="0",l=e&&[],f=[],d=ue,m=e||b&&te.find.TAG("*",o),p=Pe+=null==d?1:Math.random()||.1,g=m.length;for(o&&(ue=t!==fe&&t);c!==g&&null!=(i=m[c]);c++){if(b&&i){for(a=0;u=h[a++];)if(u(i,t,n)){r.push(i);break}o&&(Pe=p)}y&&((i=!u&&i)&&s--,e&&l.push(i))}if(s+=c,y&&c!==s){for(a=0;u=v[a++];)u(l,f,t,n);if(e){if(0<s)for(;c--;)l[c]||f[c]||(f[c]=He.call(r));f=St(f)}$e.apply(r,f),o&&!e&&0<f.length&&1<s+v.length&&mt.uniqueSort(r)}return o&&(Pe=p,ue=d),l},y?gt(r):r))).selector=e}return a},ae=mt.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&oe(e=c.selector||e);if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&ee.getById&&9===t.nodeType&&me&&te.relative[i[1].type]){if(!(t=(te.find.ID(a.matches[0].replace(ft,dt),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=ot.needsContext.test(e)?0:i.length;o--&&(a=i[o],!te.relative[u=a.type]);)if((s=te.find[u])&&(r=s(a.matches[0].replace(ft,dt),ct.test(i[0].type)&&Ct(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&wt(i)))return $e.apply(n,r),n;break}}return(c||ie(e,l))(r,t,!me,n,ct.test(e)&&Ct(t.parentNode)||t),n},ee.sortStable=De.split("").sort(ze).join("")===De,ee.detectDuplicates=!!ce,le(),ee.sortDetached=!0;var At=Array.isArray,Rt=function(e,t,n){var r,o;if(!e)return 0;if(n=n||e,e.length!==undefined){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return 0}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return 0;return 1},_t=function(e,t,n){var r,o;for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r;return-1},Bt={isArray:At,toArray:function(e){var t,n,r=e;if(!At(e))for(r=[],t=0,n=e.length;t<n;t++)r[t]=e[t];return r},each:Rt,map:function(n,r){var o=[];return Rt(n,function(e,t){o.push(r(e,t,n))}),o},filter:function(n,r){var o=[];return Rt(n,function(e,t){r&&!r(e,t,n)||o.push(e)}),o},indexOf:function(e,t){var n,r;if(e)for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},reduce:function(e,t,n,r){var o=0;for(arguments.length<3&&(n=e[0]);o<e.length;o++)n=t.call(r,n,e[o],o);return n},findIndex:_t,find:function(e,t,n){var r=_t(e,t,n);return-1!==r?e[r]:undefined},last:function(e){return e[e.length-1]}},Dt=/^\s*|\s*$/g,Ot=function(e){return null===e||e===undefined?"":(""+e).replace(Dt,"")},Pt=function(e,t){return t?!("array"!==t||!Bt.isArray(e))||typeof e===t:e!==undefined},Lt=function(e,n,r,o){o=o||this,e&&(r&&(e=e[r]),Bt.each(e,function(e,t){if(!1===n.call(o,e,t,r))return!1;Lt(e,n,r,o)}))},It={trim:Ot,isArray:Bt.isArray,is:Pt,toArray:Bt.toArray,makeMap:function(e,t,n){var r;for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n},each:Bt.each,map:Bt.map,grep:Bt.filter,inArray:Bt.indexOf,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e,t){for(var n,r,o,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var u,s=arguments;for(n=1,r=s.length;n<r;n++)for(o in t=s[n])t.hasOwnProperty(o)&&(u=t[o])!==undefined&&(e[o]=u);return e},create:function(e,t,n){var r,o,i,a,u,s=this,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),i=e[3].match(/(^|\.)(\w+)$/i)[2],!(o=s.createNS(e[3].replace(/\.\w+$/,""),n))[i]){if("static"===e[2])return o[i]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[i]));t[i]||(t[i]=function(){},c=1),o[i]=t[i],s.extend(o[i].prototype,t),e[5]&&(r=s.resolve(e[5]).prototype,a=e[5].match(/\.(\w+)$/i)[1],u=o[i],o[i]=c?function(){return r[a].apply(this,arguments)}:function(){return this.parent=r[a],u.apply(this,arguments)},o[i].prototype[i]=o[i],s.each(r,function(e,t){o[i].prototype[t]=r[t]}),s.each(t,function(e,t){r[t]?o[i].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==i&&(o[i].prototype[t]=e)})),s.each(t["static"],function(e,t){o[i][t]=e})}},walk:Lt,createNS:function(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r];return t},resolve:function(e,t){var n,r;for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||Pt(e,"array")?e:Bt.map(e.split(t||","),Ot)},_addCacheSuffix:function(e){var t=ve.cacheSuffix;return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Mt=document,Ft=Array.prototype.push,zt=Array.prototype.slice,Ut=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,qt=Be.Event,Vt=It.makeMap("children,contents,next,prev"),Ht=function(e){return void 0!==e},jt=function(e){return"string"==typeof e},$t=function(e,t){var n,r,o;for(o=(t=t||Mt).createElement("div"),n=t.createDocumentFragment(),o.innerHTML=e;r=o.firstChild;)n.appendChild(r);return n},Wt=function(e,t,n,r){var o;if(jt(t))t=$t(t,un(e[0]));else if(t.length&&!t.nodeType){if(t=tn.makeArray(t),r)for(o=t.length-1;0<=o;o--)Wt(e,t[o],n,r);else for(o=0;o<t.length;o++)Wt(e,t[o],n,r);return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t);return e},Kt=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},Xt=function(e,t,n){var r,o;return t=tn(t)[0],e.each(function(){var e=this;n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)}),e},Yt=It.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),Gt=It.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),Jt={"for":"htmlFor","class":"className",readonly:"readOnly"},Qt={"float":"cssFloat"},Zt={},en={},tn=function(e,t){return new tn.fn.init(e,t)},nn=/^\s*|\s*$/g,rn=function(e){return null===e||e===undefined?"":(""+e).replace(nn,"")},on=function(e,t){var n,r,o,i;if(e)if((n=e.length)===undefined){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},an=function(e,n){var r=[];return on(e,function(e,t){n(t,e)&&r.push(t)}),r},un=function(e){return e?9===e.nodeType?e:e.ownerDocument:Mt};tn.fn=tn.prototype={constructor:tn,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this;if(!e)return o;if(e.nodeType)return o.context=o[0]=e,o.length=1,o;if(t&&t.nodeType)o.context=t;else{if(t)return tn(e).attr(t);o.context=t=document}if(jt(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Ut.exec(e)))return tn(t).find(e);if(n[1])for(r=$t(e,un(t)).firstChild;r;)Ft.call(o,r),r=r.nextSibling;else{if(!(r=un(t).getElementById(n[2])))return o;if(r.id!==n[2])return o.find(e);o.length=1,o[0]=r}}else this.add(e,!1);return o},toArray:function(){return It.toArray(this)},add:function(e,t){var n,r,o=this;if(jt(e))return o.add(tn(e));if(!1!==t)for(n=tn.unique(o.toArray().concat(tn.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r];else Ft.apply(o,tn.makeArray(e));return o},attr:function(t,n){var e,r=this;if("object"==typeof t)on(t,function(e,t){r.attr(e,t)});else{if(!Ht(n)){if(r[0]&&1===r[0].nodeType){if((e=Zt[t])&&e.get)return e.get(r[0],t);if(Gt[t])return r.prop(t)?t:undefined;null===(n=r[0].getAttribute(t,2))&&(n=undefined)}return n}this.each(function(){var e;if(1===this.nodeType){if((e=Zt[t])&&e.set)return void e.set(this,n);null===n?this.removeAttribute(t,2):this.setAttribute(t,n,2)}})}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if("object"==typeof(e=Jt[e]||e))on(e,function(e,t){n.prop(e,t)});else{if(!Ht(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1===this.nodeType&&(this[e]=t)})}return n},css:function(n,r){var e,o,i=this,t=function(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})},a=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})};if("object"==typeof n)on(n,function(e,t){i.css(e,t)});else if(Ht(r))n=t(n),"number"!=typeof r||Yt[n]||(r=r.toString()+"px"),i.each(function(){var e=this.style;if((o=en[n])&&o.set)o.set(this,r);else{try{this.style[Qt[n]||n]=r}catch(t){}null!==r&&""!==r||(e.removeProperty?e.removeProperty(a(n)):e.removeAttribute(n))}});else{if(e=i[0],(o=en[n])&&o.get)return o.get(e);if(!e.ownerDocument.defaultView)return e.currentStyle?e.currentStyle[t(n)]:"";try{return e.ownerDocument.defaultView.getComputedStyle(e,null).getPropertyValue(a(n))}catch(u){return undefined}}return i},remove:function(){for(var e,t=this.length;t--;)e=this[t],qt.clean(e),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild);return this},html:function(e){var t,n=this;if(Ht(e)){t=n.length;try{for(;t--;)n[t].innerHTML=e}catch(r){tn(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this;if(Ht(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e;return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return Wt(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return Wt(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},!0)},before:function(){return this[0]&&this[0].parentNode?Wt(this,arguments,function(e){this.parentNode.insertBefore(e,this)}):this},after:function(){return this[0]&&this[0].parentNode?Wt(this,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):this},appendTo:function(e){return tn(e).append(this),this},prependTo:function(e){return tn(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return Xt(this,e)},wrapAll:function(e){return Xt(this,e,!0)},wrapInner:function(e){return this.each(function(){tn(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){tn(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),tn(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(o,i){var e=this;return"string"!=typeof o||(-1!==o.indexOf(" ")?on(o.split(" "),function(){e.toggleClass(this,i)}):e.each(function(e,t){var n,r;(r=Kt(t,o))!==i&&(n=t.className,r?t.className=rn((" "+n+" ").replace(" "+o+" "," ")):t.className+=n?" "+o:o)})),e},hasClass:function(e){return Kt(this[0],e)},each:function(e){return on(this,e)},on:function(e,t){return this.each(function(){qt.bind(this,e,t)})},off:function(e,t){return this.each(function(){qt.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?qt.fire(this,e.type,e):qt.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new tn(zt.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;t<n;t++)tn.find(e,this[t],r);return tn(r)},filter:function(n){return tn("function"==typeof n?an(this.toArray(),function(e,t){return n(t,e)}):tn.filter(n,this.toArray()))},closest:function(n){var r=[];return n instanceof tn&&(n=n[0]),this.each(function(e,t){for(;t;){if("string"==typeof n&&tn(t).is(n)){r.push(t);break}if(t===n){r.push(t);break}t=t.parentNode}}),tn(r)},offset:function(e){var t,n,r,o,i=0,a=0;return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Ft,sort:[].sort,splice:[].splice},It.extend(tn,{extend:It.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:It.toArray(e);var t},inArray:function(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1},isArray:It.isArray,each:on,trim:rn,grep:an,find:mt,expr:mt.selectors,unique:mt.uniqueSort,text:mt.getText,contains:mt.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1);return t=1===t.length?tn.find.matchesSelector(t[0],e)?[t[0]]:[]:tn.find.matches(e,t)}});var sn=function(e,t,n){var r=[],o=e[t];for("string"!=typeof n&&n instanceof tn&&(n=n[0]);o&&9!==o.nodeType;){if(n!==undefined){if(o===n)break;if("string"==typeof n&&tn(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},cn=function(e,t,n,r){var o=[];for(r instanceof tn&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(r!==undefined){if(e===r)break;if("string"==typeof r&&tn(e).is(r))break}o.push(e)}return o},ln=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e;return null};on({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return sn(e,"parentNode")},next:function(e){return ln(e,"nextSibling",1)},prev:function(e){return ln(e,"previousSibling",1)},children:function(e){return cn(e.firstChild,"nextSibling",1)},contents:function(e){return It.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,r){tn.fn[e]=function(t){var n=[];return this.each(function(){var e=r.call(n,this,t,n);e&&(tn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(Vt[e]||(n=tn.unique(n)),0===e.indexOf("parents")&&(n=n.reverse())),n=tn(n),t?n.filter(t):n}}),on({parentsUntil:function(e,t){return sn(e,"parentNode",t)},nextUntil:function(e,t){return cn(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return cn(e,"previousSibling",1,t).slice(1)}},function(r,o){tn.fn[r]=function(t,e){var n=[];return this.each(function(){var e=o.call(n,this,t,n);e&&(tn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(n=tn.unique(n),0!==r.indexOf("parents")&&"prevUntil"!==r||(n=n.reverse())),n=tn(n),e?n.filter(e):n}}),tn.fn.is=function(e){return!!e&&0<this.filter(e).length},tn.fn.init.prototype=tn.fn,tn.overrideDefaults=function(n){var r,o=function(e,t){return r=r||n(),0===arguments.length&&(e=r.element),t||(t=r.context),new o.fn.init(e,t)};return tn.extend(o,this),o};var fn=function(n,r,e){on(e,function(e,t){n[e]=n[e]||{},n[e][r]=t})};ve.ie&&ve.ie<8&&(fn(Zt,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?undefined:t},size:function(e){var t=e.size;return 20===t?undefined:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?undefined:t}}),fn(Zt,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),ve.ie&&ve.ie<9&&(Qt["float"]="styleFloat",fn(en,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),tn.attrHooks=Zt,tn.cssHooks=en;var dn,mn=function(e){var t,n=!1;return function(){return n||(n=!0,t=e.apply(null,arguments)),t}},pn=function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}return undefined}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return hn(r(1),r(2))},gn=function(){return hn(0,0)},hn=function(e,t){return{major:e,minor:t}},vn={nu:hn,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?gn():pn(e,n)},unknown:gn},yn="Firefox",bn=function(e,t){return function(){return t===e}},Cn=function(e){var t=e.current;return{current:t,version:e.version,isEdge:bn("Edge",t),isChrome:bn("Chrome",t),isIE:bn("IE",t),isOpera:bn("Opera",t),isFirefox:bn(yn,t),isSafari:bn("Safari",t)}},xn={unknown:function(){return Cn({current:undefined,version:vn.unknown()})},nu:Cn,edge:V.constant("Edge"),chrome:V.constant("Chrome"),ie:V.constant("IE"),opera:V.constant("Opera"),firefox:V.constant(yn),safari:V.constant("Safari")},wn="Windows",Nn="Android",En="Solaris",Sn="FreeBSD",kn=function(e,t){return function(){return t===e}},Tn=function(e){var t=e.current;return{current:t,version:e.version,isWindows:kn(wn,t),isiOS:kn("iOS",t),isAndroid:kn(Nn,t),isOSX:kn("OSX",t),isLinux:kn("Linux",t),isSolaris:kn(En,t),isFreeBSD:kn(Sn,t)}},An={unknown:function(){return Tn({current:undefined,version:vn.unknown()})},nu:Tn,windows:V.constant(wn),ios:V.constant("iOS"),android:V.constant(Nn),linux:V.constant("Linux"),osx:V.constant("OSX"),solaris:V.constant(En),freebsd:V.constant(Sn)},Rn=function(e,t){var n=String(t).toLowerCase();return H.find(e,function(e){return e.search(n)})},_n=function(e,n){return Rn(e,n).map(function(e){var t=vn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Bn=function(e,n){return Rn(e,n).map(function(e){var t=vn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Dn=function(e,t){return-1!==e.indexOf(t)},On=function(e){return e.replace(/^\s+|\s+$/g,"")},Pn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Ln=function(t){return function(e){return Dn(e,t)}},In=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Dn(e,"edge/")&&Dn(e,"chrome")&&Dn(e,"safari")&&Dn(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Pn],search:function(e){return Dn(e,"chrome")&&!Dn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Dn(e,"msie")||Dn(e,"trident")}},{name:"Opera",versionRegexes:[Pn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Ln("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Ln("firefox")},{name:"Safari",versionRegexes:[Pn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Dn(e,"safari")||Dn(e,"mobile/"))&&Dn(e,"applewebkit")}}],Mn=[{name:"Windows",search:Ln("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Dn(e,"iphone")||Dn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Ln("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Ln("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Ln("linux"),versionRegexes:[]},{name:"Solaris",search:Ln("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Ln("freebsd"),versionRegexes:[]}],Fn={browsers:V.constant(In),oses:V.constant(Mn)},zn=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=Fn.browsers(),m=Fn.oses(),p=_n(d,e).fold(xn.unknown,xn.nu),g=Bn(m,e).fold(An.unknown,An.nu);return{browser:p,os:g,deviceType:(n=p,r=e,o=(t=g).isiOS()&&!0===/ipad/i.test(r),i=t.isiOS()&&!o,a=t.isAndroid()&&3===t.version.major,u=t.isAndroid()&&4===t.version.major,s=o||a||u&&!0===/mobile/i.test(r),c=t.isiOS()||t.isAndroid(),l=c&&!s,f=n.isSafari()&&t.isiOS()&&!1===/safari/i.test(r),{isiPad:V.constant(o),isiPhone:V.constant(i),isTablet:V.constant(s),isPhone:V.constant(l),isTouch:V.constant(c),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:V.constant(f)})}},Un={detect:mn(function(){var e=navigator.userAgent;return zn(e)})},qn=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:V.constant(e)}},Vn={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),"HTML must have a single root node";return qn(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return qn(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return qn(n)},fromDom:qn,fromPoint:function(e,t,n){return A.from(e.dom().elementFromPoint(t,n)).map(qn)}},Hn=8,jn=9,$n=1,Wn=3,Kn=function(e){return e.dom().nodeName.toLowerCase()},Xn=function(e){return e.dom().nodeType},Yn=function(t){return function(e){return Xn(e)===t}},Gn=Yn($n),Jn=Yn(Wn),Qn=Yn(jn),Zn={name:Kn,type:Xn,value:function(e){return e.dom().nodeValue},isElement:Gn,isText:Jn,isDocument:Qn,isComment:function(e){return Xn(e)===Hn||"#comment"===Kn(e)}},er=(dn=Object.keys)===undefined?function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}:dn,tr=function(e,t){for(var n=er(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i,e)}},nr=function(r,o){var i={};return tr(r,function(e,t){var n=o(e,t,r);i[n.k]=n.v}),i},rr=function(e,n){var r=[];return tr(e,function(e,t){r.push(n(e,t))}),r},or=function(e){return rr(e,function(e){return e})},ir={bifilter:function(e,n){var r={},o={};return tr(e,function(e,t){(n(e,t)?r:o)[t]=e}),{t:r,f:o}},each:tr,map:function(e,r){return nr(e,function(e,t,n){return{k:t,v:r(e,t,n)}})},mapToArray:rr,tupleMap:nr,find:function(e,t){for(var n=er(e),r=0,o=n.length;r<o;r++){var i=n[r],a=e[i];if(t(a,i,e))return A.some(a)}return A.none()},keys:er,values:or,size:function(e){return or(e).length}},ar=function(e,t,n){if(!(k.isString(n)||k.isBoolean(n)||k.isNumber(n)))throw console.error("Invalid call to Attr.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},ur=function(e,t,n){ar(e.dom(),t,n)},sr=function(e,t){var n=e.dom().getAttribute(t);return null===n?undefined:n},cr=function(e,t){var n=e.dom();return!(!n||!n.hasAttribute)&&n.hasAttribute(t)},lr={clone:function(e){return H.foldl(e.dom().attributes,function(e,t){return e[t.name]=t.value,e},{})},set:ur,setAll:function(e,t){var n=e.dom();ir.each(t,function(e,t){ar(n,t,e)})},get:sr,has:cr,remove:function(e,t){e.dom().removeAttribute(t)},hasNone:function(e){var t=e.dom().attributes;return t===undefined||null===t||0===t.length},transfer:function(o,i,e){Zn.isElement(o)&&Zn.isElement(i)&&H.each(e,function(e){var t,n,r;n=i,cr(t=o,r=e)&&!cr(n,r)&&ur(n,r,sr(t,r))})}},fr=mn(function(){return dr(Vn.fromDom(document))}),dr=function(e){var t=e.dom().body;if(null===t||t===undefined)throw"Body is not available yet";return Vn.fromDom(t)},mr={body:fr,getBody:dr,inBody:function(e){var t=Zn.isText(e)?e.dom().parentNode:e.dom();return t!==undefined&&null!==t&&t.ownerDocument.body.contains(t)}},pr=function(e){return e.style!==undefined},gr=function(e,t,n){if(!k.isString(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);pr(e)&&e.style.setProperty(t,n)},hr=function(e,t){return pr(e)?e.style.getPropertyValue(t):""},vr=function(e,t){var n=e.dom(),r=hr(n,t);return A.from(r).filter(function(e){return 0<e.length})},yr=function(e,t){var n=e.dom();ir.each(t,function(e,t){gr(n,t,e)})},br=function(e,t){var n=e.dom(),r=window.getComputedStyle(n).getPropertyValue(t),o=""!==r||mr.inBody(e)?r:hr(n,t);return null===o?undefined:o},Cr=vr,xr=function(e){return e.slice(0).sort()},wr=function(e,t){throw new Error("All required keys ("+xr(e).join(", ")+") were not specified. Specified keys were: "+xr(t).join(", ")+".")},Nr=function(e){throw new Error("Unsupported keys for object: "+xr(e).join(", "))},Er=function(t,e){if(!k.isArray(e))throw new Error("The "+t+" fields must be an array. Was: "+e+".");H.each(e,function(e){if(!k.isString(e))throw new Error("The value "+e+" in the "+t+" fields was not a string.")})},Sr=function(e){var n=xr(e);H.find(n,function(e,t){return t<n.length-1&&e===n[t+1]}).each(function(e){throw new Error("The field: "+e+" occurs more than once in the combined fields: ["+n.join(", ")+"].")})},kr={immutable:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(t.length!==n.length)throw new Error('Wrong number of arguments to struct. Expected "['+t.length+']", got '+n.length+" arguments");var r={};return H.each(t,function(e,t){r[e]=V.constant(n[t])}),r}},immutableBag:function(o,i){var a=o.concat(i);if(0===a.length)throw new Error("You must specify at least one required or optional field.");return Er("required",o),Er("optional",i),Sr(a),function(t){var n=ir.keys(t);H.forall(o,function(e){return H.contains(n,e)})||wr(o,n);var e=H.filter(n,function(e){return!H.contains(a,e)});0<e.length&&Nr(e);var r={};return H.each(o,function(e){r[e]=V.constant(t[e])}),H.each(i,function(e){r[e]=V.constant(Object.prototype.hasOwnProperty.call(t,e)?A.some(t[e]):A.none())}),r}}},Tr=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},Ar=function(){return W.getOrDie("Node")},Rr=function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)},_r=function(e,t){return Rr(e,t,Ar().DOCUMENT_POSITION_CONTAINED_BY)},Br=$n,Dr=jn,Or=function(e){return e.nodeType!==Br&&e.nodeType!==Dr||0===e.childElementCount},Pr={all:function(e,t){var n=t===undefined?document:t.dom();return Or(n)?[]:H.map(n.querySelectorAll(e),Vn.fromDom)},is:function(e,t){var n=e.dom();if(n.nodeType!==Br)return!1;if(n.matches!==undefined)return n.matches(t);if(n.msMatchesSelector!==undefined)return n.msMatchesSelector(t);if(n.webkitMatchesSelector!==undefined)return n.webkitMatchesSelector(t);if(n.mozMatchesSelector!==undefined)return n.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},one:function(e,t){var n=t===undefined?document:t.dom();return Or(n)?A.none():A.from(n.querySelector(e)).map(Vn.fromDom)}},Lr=function(e,t){return e.dom()===t.dom()},Ir=Un.detect().browser.isIE()?function(e,t){return _r(e.dom(),t.dom())}:function(e,t){var n=e.dom(),r=t.dom();return n!==r&&n.contains(r)},Mr={eq:Lr,isEqualNode:function(e,t){return e.dom().isEqualNode(t.dom())},member:function(e,t){return H.exists(t,V.curry(Lr,e))},contains:Ir,is:Pr.is},Fr=function(e){return Vn.fromDom(e.dom().ownerDocument)},zr=function(e){var t=e.dom();return A.from(t.parentNode).map(Vn.fromDom)},Ur=function(e){var t=e.dom();return A.from(t.previousSibling).map(Vn.fromDom)},qr=function(e){var t=e.dom();return A.from(t.nextSibling).map(Vn.fromDom)},Vr=function(e){var t=e.dom();return H.map(t.childNodes,Vn.fromDom)},Hr=function(e,t){var n=e.dom().childNodes;return A.from(n[t]).map(Vn.fromDom)},jr=kr.immutable("element","offset"),$r={owner:Fr,defaultView:function(e){var t=e.dom().ownerDocument.defaultView;return Vn.fromDom(t)},documentElement:function(e){var t=Fr(e);return Vn.fromDom(t.dom().documentElement)},parent:zr,findIndex:function(n){return zr(n).bind(function(e){var t=Vr(e);return H.findIndex(t,function(e){return Mr.eq(n,e)})})},parents:function(e,t){for(var n=k.isFunction(t)?t:V.constant(!1),r=e.dom(),o=[];null!==r.parentNode&&r.parentNode!==undefined;){var i=r.parentNode,a=Vn.fromDom(i);if(o.push(a),!0===n(a))break;r=i}return o},siblings:function(t){return zr(t).map(Vr).map(function(e){return H.filter(e,function(e){return!Mr.eq(t,e)})}).getOr([])},prevSibling:Ur,offsetParent:function(e){var t=e.dom();return A.from(t.offsetParent).map(Vn.fromDom)},prevSiblings:function(e){return H.reverse(Tr(e,Ur))},nextSibling:qr,nextSiblings:function(e){return Tr(e,qr)},children:Vr,child:Hr,firstChild:function(e){return Hr(e,0)},lastChild:function(e){return Hr(e,e.dom().childNodes.length-1)},childNodesCount:function(e){return e.dom().childNodes.length},hasChildNodes:function(e){return e.dom().hasChildNodes()},leaf:function(e,t){var n=Vr(e);return 0<n.length&&t<n.length?jr(n[t],0):jr(e,t)}},Wr=Un.detect().browser,Kr=function(e){return H.find(e,Zn.isElement)},Xr={getPos:function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument;if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===br(Vn.fromDom(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop};for(r=t;r&&r!==n&&r.nodeType;)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent;for(r=t.parentNode;r&&r!==n&&r.nodeType;)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode;u+=(i=Vn.fromDom(t),Wr.isFirefox()&&"table"===Zn.name(i)?Kr($r.children(i)).filter(function(e){return"caption"===Zn.name(e)}).bind(function(o){return Kr($r.nextSiblings(o)).map(function(e){var t=e.dom().offsetTop,n=o.dom().offsetTop,r=o.dom().offsetHeight;return t<=n?-r:0})}).getOr(0):0)}return{x:a,y:u}}},Yr=function(e){var n=A.none(),t=[],r=function(e){o()?a(e):t.push(e)},o=function(){return n.isSome()},i=function(e){H.each(e,a)},a=function(t){n.each(function(e){setTimeout(function(){t(e)},0)})};return e(function(e){n=A.some(e),i(t),t=[]}),{get:r,map:function(n){return Yr(function(t){r(function(e){t(n(e))})})},isReady:o}},Gr={nu:Yr,pure:function(t){return Yr(function(e){e(t)})}},Jr=function(n){return function(){var e=Array.prototype.slice.call(arguments),t=this;setTimeout(function(){n.apply(t,e)},0)}},Qr=function(t){var e=function(e){t(Jr(e))};return{map:function(r){return Qr(function(n){e(function(e){var t=r(e);n(t)})})},bind:function(n){return Qr(function(t){e(function(e){n(e).get(t)})})},anonBind:function(n){return Qr(function(t){e(function(e){n.get(t)})})},toLazy:function(){return Gr.nu(e)},get:e}},Zr={nu:Qr,pure:function(t){return Qr(function(e){e(t)})}},eo=function(a,e){return e(function(r){var o=[],i=0;0===a.length?r([]):H.each(a,function(e,t){var n;e.get((n=t,function(e){o[n]=e,++i>=a.length&&r(o)}))})})},to=function(e){return eo(e,Zr.nu)},no={par:to,mapM:function(e,t){var n=H.map(e,t);return to(n)},compose:function(t,n){return function(e){return n(e).bind(t)}}},ro=function(n){return{is:function(e){return n===e},isValue:V.always,isError:V.never,getOr:V.constant(n),getOrThunk:V.constant(n),getOrDie:V.constant(n),or:function(e){return ro(n)},orThunk:function(e){return ro(n)},fold:function(e,t){return t(n)},map:function(e){return ro(e(n))},each:function(e){e(n)},bind:function(e){return e(n)},exists:function(e){return e(n)},forall:function(e){return e(n)},toOption:function(){return A.some(n)}}},oo=function(n){return{is:V.never,isValue:V.never,isError:V.always,getOr:V.identity,getOrThunk:function(e){return e()},getOrDie:function(){return V.die(String(n))()},or:function(e){return e},orThunk:function(e){return e()},fold:function(e,t){return e(n)},map:function(e){return oo(n)},each:V.noop,bind:function(e){return oo(n)},exists:V.never,forall:V.always,toOption:A.none}},io={value:ro,error:oo};function ao(e,u){var t=e,n=function(e,t,n,r){var o,i;if(e){if(!r&&e[t])return e[t];if(e!==u){if(o=e[n])return o;for(i=e.parentNode;i&&i!==u;i=i.parentNode)if(o=i[n])return o}}};this.current=function(){return t},this.next=function(e){return t=n(t,"firstChild","nextSibling",e)},this.prev=function(e){return t=n(t,"lastChild","previousSibling",e)},this.prev2=function(e){return t=function(e,t,n,r){var o,i,a;if(e){if(o=e[n],u&&o===u)return;if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a;return o}if((i=e.parentNode)&&i!==u)return i}}(t,"lastChild","previousSibling",e)}}var uo,so,co,lo=function(t){var n;return function(e){return(n=n||H.mapToObject(t,V.constant(!0))).hasOwnProperty(Zn.name(e))}},fo=lo(["h1","h2","h3","h4","h5","h6"]),mo=lo(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),po=function(e){return Zn.isElement(e)&&!mo(e)},go=function(e){return Zn.isElement(e)&&"br"===Zn.name(e)},ho=lo(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),vo=lo(["ul","ol","dl"]),yo=lo(["li","dd","dt"]),bo=lo(["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed","source","wbr","track"]),Co=lo(["thead","tbody","tfoot"]),xo=lo(["td","th"]),wo=lo(["pre","script","textarea","style"]),No=function(t){return function(e){return!!e&&e.nodeType===t}},Eo=No(1),So=function(e){var r=e.toLowerCase().split(" ");return function(e){var t,n;if(e&&e.nodeType)for(n=e.nodeName.toLowerCase(),t=0;t<r.length;t++)if(n===r[t])return!0;return!1}},ko=function(t){return function(e){if(Eo(e)){if(e.contentEditable===t)return!0;if(e.getAttribute("data-mce-contenteditable")===t)return!0}return!1}},To=No(3),Ao=No(8),Ro=No(9),_o=So("br"),Bo=ko("true"),Do=ko("false"),Oo={isText:To,isElement:Eo,isComment:Ao,isDocument:Ro,isBr:_o,isContentEditableTrue:Bo,isContentEditableFalse:Do,matchNodeNames:So,hasPropValue:function(t,n){return function(e){return Eo(e)&&e[t]===n}},hasAttribute:function(t,e){return function(e){return Eo(e)&&e.hasAttribute(t)}},hasAttributeValue:function(t,n){return function(e){return Eo(e)&&e.getAttribute(t)===n}},matchStyleValues:function(r,e){var o=e.toLowerCase().split(" ");return function(e){var t;if(Eo(e))for(t=0;t<o.length;t++){var n=e.ownerDocument.defaultView.getComputedStyle(e,null);if((n?n.getPropertyValue(r):null)===o[t])return!0}return!1}},isBogus:function(e){return Eo(e)&&e.hasAttribute("data-mce-bogus")},isBogusAll:function(e){return Eo(e)&&"all"===e.getAttribute("data-mce-bogus")},isTable:function(e){return Eo(e)&&"TABLE"===e.tagName}},Po=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Lo=function(e,t){var n,r=t.childNodes;if(!Oo.isElement(t)||!Po(t)){for(n=r.length-1;0<=n;n--)Lo(e,r[n]);if(!1===Oo.isDocument(t)){if(Oo.isText(t)&&0<t.nodeValue.length){var o=It.trim(t.nodeValue).length;if(e.isBlock(t.parentNode)||0<o)return;if(0===o&&(a=(i=t).previousSibling&&"SPAN"===i.previousSibling.nodeName,u=i.nextSibling&&"SPAN"===i.nextSibling.nodeName,a&&u))return}else if(Oo.isElement(t)&&(1===(r=t.childNodes).length&&Po(r[0])&&t.parentNode.insertBefore(r[0],t),r.length||bo(Vn.fromDom(t))))return;e.remove(t)}var i,a,u;return t}},Io={trimNode:Lo},Mo=It.makeMap,Fo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,zo=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Uo=/[<>&\"\']/g,qo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,Vo={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};so={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},co={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"};var Ho=function(e,t){var n,r,o,i={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),so[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r);return i}};uo=Ho("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var jo=function(e,t){return e.replace(t?Fo:zo,function(e){return so[e]||e})},$o=function(e,t){return e.replace(t?Fo:zo,function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":so[e]||"&#"+e.charCodeAt(0)+";"})},Wo=function(e,t,n){return n=n||uo,e.replace(t?Fo:zo,function(e){return so[e]||n[e]||e})},Ko={encodeRaw:jo,encodeAllRaw:function(e){return(""+e).replace(Uo,function(e){return so[e]||e})},encodeNumeric:$o,encodeNamed:Wo,getEncodeFunc:function(e,t){var n=Ho(t)||uo,r=Mo(e.replace(/\+/g,","));return r.named&&r.numeric?function(e,t){return e.replace(t?Fo:zo,function(e){return so[e]!==undefined?so[e]:n[e]!==undefined?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"})}:r.named?t?function(e,t){return Wo(e,t,n)}:Wo:r.numeric?$o:jo},decode:function(e){return e.replace(qo,function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):Vo[t]||String.fromCharCode(t):co[e]||uo[e]||(n=e,(r=Vn.fromTag("div").dom()).innerHTML=n,r.textContent||r.innerText||n);var n,r})}},Xo={},Yo={},Go=It.makeMap,Jo=It.each,Qo=It.extend,Zo=It.explode,ei=It.inArray,ti=function(e,t){return(e=It.trim(e))?e.split(t||" "):[]},ni=function(e){var u,t,n,r,o,i,s={},a=function(e,t,n){var r,o,i,a=function(e,t){var n,r,o={};for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{};return o};for(t=t||"","string"==typeof(n=n||[])&&(n=ti(n)),r=(e=ti(e)).length;r--;)i={attributes:a(o=ti([u,t].join(" "))),attributesOrder:o,children:a(n,Yo)},s[e[r]]=i},c=function(e,t){var n,r,o,i;for(n=(e=ti(e)).length,t=ti(t);n--;)for(r=s[e[n]],o=0,i=t.length;o<i;o++)r.attributes[t[o]]={},r.attributesOrder.push(t[o])};return Xo[e]?Xo[e]:(u="id accesskey class dir lang style tabindex title role",t="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",n="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(u+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",t+=" article aside details dialog figure header footer hgroup section nav",n+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(u+=" xml:lang",n=[n,i="acronym applet basefont big font strike tt"].join(" "),Jo(ti(i),function(e){a(e,"",n)}),t=[t,o="center dir isindex noframes"].join(" "),r=[t,n].join(" "),Jo(ti(o),function(e){a(e,"",r)})),r=r||[t,n].join(" "),a("html","manifest","head body"),a("head","","base command link meta noscript script style title"),a("title hr noscript br"),a("base","href target"),a("link","href rel media hreflang type sizes hreflang"),a("meta","name http-equiv content charset"),a("style","media type scoped"),a("script","src async defer type charset"),a("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",r),a("address dt dd div caption","",r),a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",n),a("blockquote","cite",r),a("ol","reversed start type","li"),a("ul","","li"),a("li","value",r),a("dl","","dt dd"),a("a","href target rel media hreflang type",n),a("q","cite",n),a("ins del","cite datetime",r),a("img","src sizes srcset alt usemap ismap width height"),a("iframe","src name width height",r),a("embed","src type width height"),a("object","data type typemustmatch name usemap form width height",[r,"param"].join(" ")),a("param","name value"),a("map","name",[r,"area"].join(" ")),a("area","alt coords shape href target rel media hreflang type"),a("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),a("colgroup","span","col"),a("col","span"),a("tbody thead tfoot","","tr"),a("tr","","td th"),a("td","colspan rowspan headers",r),a("th","colspan rowspan headers scope abbr",r),a("form","accept-charset action autocomplete enctype method name novalidate target",r),a("fieldset","disabled form name",[r,"legend"].join(" ")),a("label","form for",n),a("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),a("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?r:n),a("select","disabled form multiple name required size","option optgroup"),a("optgroup","disabled label","option"),a("option","disabled label selected value"),a("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),a("menu","type label",[r,"li"].join(" ")),a("noscript","",r),"html4"!==e&&(a("wbr"),a("ruby","",[n,"rt rp"].join(" ")),a("figcaption","",r),a("mark rt rp summary bdi","",n),a("canvas","width height",r),a("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[r,"track source"].join(" ")),a("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[r,"track source"].join(" ")),a("picture","","img source"),a("source","src srcset type media sizes"),a("track","kind src srclang label default"),a("datalist","",[n,"option"].join(" ")),a("article section nav aside header footer","",r),a("hgroup","","h1 h2 h3 h4 h5 h6"),a("figure","",[r,"figcaption"].join(" ")),a("time","datetime",n),a("dialog","open",r),a("command","type label icon disabled checked radiogroup command"),a("output","for form name",n),a("progress","value max",n),a("meter","value min max low high optimum",n),a("details","open",[r,"summary"].join(" ")),a("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(c("script","language xml:space"),c("style","xml:space"),c("object","declare classid code codebase codetype archive standby align border hspace vspace"),c("embed","align name hspace vspace"),c("param","valuetype type"),c("a","charset name rev shape coords"),c("br","clear"),c("applet","codebase archive code object alt name width height align hspace vspace"),c("img","name longdesc align border hspace vspace"),c("iframe","longdesc frameborder marginwidth marginheight scrolling align"),c("font basefont","size color face"),c("input","usemap align"),c("select","onchange"),c("textarea"),c("h1 h2 h3 h4 h5 h6 div p legend caption","align"),c("ul","type compact"),c("li","type"),c("ol dl menu dir","compact"),c("pre","width xml:space"),c("hr","align noshade size width"),c("isindex","prompt"),c("table","summary width frame rules cellspacing cellpadding align bgcolor"),c("col","width align char charoff valign"),c("colgroup","width align char charoff valign"),c("thead","align char charoff valign"),c("tr","align char charoff valign bgcolor"),c("th","axis align char charoff valign nowrap bgcolor width height"),c("form","accept"),c("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),c("tfoot","align char charoff valign"),c("tbody","align char charoff valign"),c("area","nohref"),c("body","background bgcolor text link vlink alink")),"html4"!==e&&(c("input button select textarea","autofocus"),c("input textarea","placeholder"),c("a","download"),c("link script img","crossorigin"),c("iframe","sandbox seamless allowfullscreen")),Jo(ti("a form meter progress dfn"),function(e){s[e]&&delete s[e].children[e]}),delete s.caption.children.table,delete s.script,Xo[e]=s)},ri=function(e,n){var r;return e&&(r={},"string"==typeof e&&(e={"*":e}),Jo(e,function(e,t){r[t]=r[t.toUpperCase()]="map"===n?Go(e,/[, ]/):Zo(e,/[, ]/)})),r};function oi(i){var e,t,n,r,o,a,u,s,c,l,f,d,m,N={},p={},E=[],g={},h={},v=function(e,t,n){var r=i[e];return r?r=Go(r,/[, ]/,Go(r.toUpperCase(),/[, ]/)):(r=Xo[e])||(r=Go(t," ",Go(t.toUpperCase()," ")),r=Qo(r,n),Xo[e]=r),r};n=ni((i=i||{}).schema),!1===i.verify_html&&(i.valid_elements="*[*]"),e=ri(i.valid_styles),t=ri(i.invalid_styles,"map"),s=ri(i.valid_classes,"map"),r=v("whitespace_elements","pre script noscript style textarea video audio iframe object code"),o=v("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),a=v("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),u=v("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),l=v("non_empty_elements","td th iframe video audio object script pre code",a),f=v("move_caret_before_on_enter_elements","table",l),d=v("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),c=v("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",d),m=v("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),Jo((i.special||"script noscript noframes noembed title style textarea xmp").split(" "),function(e){h[e]=new RegExp("</"+e+"[^>]*>","gi")});var S=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},y=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,x=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,w=/[*?+]/;if(e)for(e=ti(e,","),N["@"]&&(h=N["@"].attributes,v=N["@"].attributesOrder),t=0,n=e.length;t<n;t++)if(i=C.exec(e[t])){if(p=i[1],c=i[2],g=i[3],s=i[5],a={attributes:d={},attributesOrder:m=[]},"#"===p&&(a.paddEmpty=!0),"-"===p&&(a.removeEmpty=!0),"!"===i[4]&&(a.removeEmptyAttrs=!0),h){for(y in h)d[y]=h[y];m.push.apply(m,v)}if(s)for(r=0,o=(s=ti(s,"|")).length;r<o;r++)if(i=x.exec(s[r])){if(u={},f=i[1],l=i[2].replace(/[\\:]:/g,":"),p=i[3],b=i[4],"!"===f&&(a.attributesRequired=a.attributesRequired||[],a.attributesRequired.push(l),u.required=!0),"-"===f){delete d[l],m.splice(ei(m,l),1);continue}p&&("="===p&&(a.attributesDefault=a.attributesDefault||[],a.attributesDefault.push({name:l,value:b}),u.defaultValue=b),":"===p&&(a.attributesForced=a.attributesForced||[],a.attributesForced.push({name:l,value:b}),u.forcedValue=b),"<"===p&&(u.validValues=Go(b,"?"))),w.test(l)?(a.attributePatterns=a.attributePatterns||[],u.pattern=S(l),a.attributePatterns.push(u)):(d[l]||m.push(l),d[l]=u)}h||"@"!==c||(h=d,v=m),g&&(a.outputName=c,N[g]=a),w.test(c)?(a.pattern=S(c),E.push(a)):N[c]=a}},b=function(e){N={},E=[],y(e),Jo(n,function(e,t){p[t]=e.children})},C=function(e){var a=/^(~)?(.+)$/;e&&(Xo.text_block_elements=Xo.block_elements=null,Jo(ti(e,","),function(e){var t=a.exec(e),n="~"===t[1],r=n?"span":"div",o=t[2];if(p[o]=p[r],g[o]=r,n||(c[o.toUpperCase()]={},c[o]={}),!N[o]){var i=N[r];delete(i=Qo({},i)).removeEmptyAttrs,delete i.removeEmpty,N[o]=i}Jo(p,function(e,t){e[r]&&(p[t]=e=Qo({},p[t]),e[o]=e[r])})}))},x=function(e){var o=/^([+\-]?)(\w+)\[([^\]]+)\]$/;Xo[i.schema]=null,e&&Jo(ti(e,","),function(e){var t,n,r=o.exec(e);r&&(n=r[1],t=n?p[r[2]]:p[r[2]]={"#comment":{}},t=p[r[2]],Jo(ti(r[3],"|"),function(e){"-"===n?delete t[e]:t[e]={}}))})},w=function(e){var t,n=N[e];if(n)return n;for(t=E.length;t--;)if((n=E[t]).pattern.test(e))return n};return i.valid_elements?b(i.valid_elements):(Jo(n,function(e,t){N[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},p[t]=e.children}),"html5"!==i.schema&&Jo(ti("strong/b em/i"),function(e){e=ti(e,"/"),N[e[1]].outputName=e[0]}),Jo(ti("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){N[e]&&(N[e].removeEmpty=!0)}),Jo(ti("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),function(e){N[e].paddEmpty=!0}),Jo(ti("span"),function(e){N[e].removeEmptyAttrs=!0})),C(i.custom_elements),x(i.valid_children),y(i.extended_valid_elements),x("+ol[ul|ol],+ul[ul|ol]"),Jo({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(e,t){N[t]&&(N[t].parentsRequired=ti(e))}),i.invalid_elements&&Jo(Zo(i.invalid_elements),function(e){N[e]&&delete N[e]}),w("span")||y("span[!data-mce-type|*]"),{children:p,elements:N,getValidStyles:function(){return e},getValidClasses:function(){return s},getBlockElements:function(){return c},getInvalidStyles:function(){return t},getShortEndedElements:function(){return a},getTextBlockElements:function(){return d},getTextInlineElements:function(){return m},getBoolAttrs:function(){return u},getElementRule:w,getSelfClosingElements:function(){return o},getNonEmptyElements:function(){return l},getMoveCaretBeforeOnEnterElements:function(){return f},getWhiteSpaceElements:function(){return r},getSpecialElements:function(){return h},isValidChild:function(e,t){var n=p[e.toLowerCase()];return!(!n||!n[t.toLowerCase()])},isValid:function(e,t){var n,r,o=w(e);if(o){if(!t)return!0;if(o.attributes[t])return!0;if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return g},addValidElements:y,setValidElements:b,addCustomElements:C,addValidChildren:x}}var ii=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+o(t)+o(n)+o(r)};function ai(b,e){var C,t,c,l,x=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,w=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,N=/\s*([^:]+):\s*([^;]+);?/g,E=/\s+$/,S={},k="\ufeff";for(b=b||{},e&&(c=e.getValidStyles(),l=e.getInvalidStyles()),t=("\\\" \\' \\; \\: ; : "+k).split(" "),C=0;C<t.length;C++)S[t[C]]=k+C,S[k+C]=t[C];return{toHex:function(e){return e.replace(x,ii)},parse:function(e){var t,n,r,o,i,a,u,s,c={},l=b.url_converter,f=b.url_converter_scope||this,d=function(e,t,n){var r,o,i,a;if((r=c[e+"-top"+t])&&(o=c[e+"-right"+t])&&(i=c[e+"-bottom"+t])&&(a=c[e+"-left"+t])){var u=[r,o,i,a];for(C=u.length-1;C--&&u[C]===u[C+1];);-1<C&&n||(c[e+t]=-1===C?u[0]:u.join(" "),delete c[e+"-top"+t],delete c[e+"-right"+t],delete c[e+"-bottom"+t],delete c[e+"-left"+t])}},m=function(e){var t,n=c[e];if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1;return c[e]=n[0],!0}},p=function(e){return o=!0,S[e]},g=function(e,t){return o&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return S[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},h=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},v=function(e){return e.replace(/\\[0-9a-f]+/gi,h)},y=function(e,t,n,r,o,i){if(o=o||i)return"'"+(o=g(o)).replace(/\'/g,"\\'")+"'";if(t=g(t||n||r),!b.allow_script_urls){var a=t.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(a))return"";if(!b.allow_svg_data_urls&&/^data:image\/svg/i.test(a))return""}return l&&(t=l.call(f,t,"style")),"url('"+t.replace(/\'/g,"\\'")+"')"};if(e){for(e=(e=e.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,p).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,p)});t=N.exec(e);)if(N.lastIndex=t.index+t[0].length,n=t[1].replace(E,"").toLowerCase(),r=t[2].replace(E,""),n&&r){if(n=v(n),r=v(r),-1!==n.indexOf(k)||-1!==n.indexOf('"'))continue;if(!b.allow_script_urls&&("behavior"===n||/expression\s*\(|\/\*|\*\//.test(r)))continue;"font-weight"===n&&"700"===r?r="bold":"color"!==n&&"background-color"!==n||(r=r.toLowerCase()),r=(r=r.replace(x,ii)).replace(w,y),c[n]=o?g(r,!0):r}d("border","",!0),d("border","-width"),d("border","-color"),d("border","-style"),d("padding",""),d("margin",""),i="border",u="border-style",s="border-color",m(a="border-width")&&m(u)&&m(s)&&(c[i]=c[a]+" "+c[u]+" "+c[s],delete c[a],delete c[u],delete c[s]),"medium none"===c.border&&delete c.border,"none"===c["border-image"]&&delete c["border-image"]}return c},serialize:function(i,e){var t,n,r,o,a,u="",s=function(e){var t,n,r,o;if(t=c[e])for(n=0,r=t.length;n<r;n++)e=t[n],(o=i[e])&&(u+=(0<u.length?" ":"")+e+": "+o+";")};if(e&&c)s("*"),s(e);else for(t in i)!(n=i[t])||l&&(r=t,o=e,a=void 0,(a=l["*"])&&a[r]||(a=l[o])&&a[r])||(u+=(0<u.length?" ":"")+t+": "+n+";");return u}}}var ui,si=It.each,ci=It.grep,li=ve.ie,fi=/^([a-z0-9],?)+$/i,di=/^[ \t\r\n]*$/,mi=function(n,r,o){var e={},i=r.keep_values,t={set:function(e,t,n){r.url_converter&&(t=r.url_converter.call(r.url_converter_scope||o(),t,n,e[0])),e.attr("data-mce-"+n,t).attr(n,t)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}};return e={style:{set:function(e,t){null===t||"object"!=typeof t?(i&&e.attr("data-mce-style",t),e.attr("style",t)):e.css(t)},get:function(e){var t=e.attr("data-mce-style")||e.attr("style");return t=n.serialize(n.parse(t),e[0].nodeName)}}},i&&(e.href=e.src=t),e},pi=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName);r||(r=null),t.attr("data-mce-style",r)},gi=function(e,t){var n,r,o=0;if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r);return o};function hi(a,u){var s,c=this;void 0===u&&(u={});var r={},i=window,o={},t=0,e=function(m,e){var p,g=0,h={};p=(e=e||{}).maxLoadTime||5e3;var v=function(e){m.getElementsByTagName("head")[0].appendChild(e)},n=function(e,t,n){var o,r,i,a,u=function(){for(var e=a.passed,t=e.length;t--;)e[t]();a.status=2,a.passed=[],a.failed=[]},s=function(){for(var e=a.failed,t=e.length;t--;)e[t]();a.status=3,a.passed=[],a.failed=[]},c=function(e,t){e()||((new Date).getTime()-i<p?we.setTimeout(t):s())},l=function(){c(function(){for(var e,t,n=m.styleSheets,r=n.length;r--;)if((t=(e=n[r]).ownerNode?e.ownerNode:e.owningElement)&&t.id===o.id)return u(),!0},l)},f=function(){c(function(){try{var e=r.sheet.cssRules;return u(),!!e}catch(t){}},f)};if(e=It._addCacheSuffix(e),h[e]?a=h[e]:(a={passed:[],failed:[]},h[e]=a),t&&a.passed.push(t),n&&a.failed.push(n),1!==a.status)if(2!==a.status)if(3!==a.status){if(a.status=1,(o=m.createElement("link")).rel="stylesheet",o.type="text/css",o.id="u"+g++,o.async=!1,o.defer=!1,i=(new Date).getTime(),"onload"in o&&!((d=navigator.userAgent.match(/WebKit\/(\d*)/))&&parseInt(d[1],10)<536))o.onload=l,o.onerror=s;else{if(0<navigator.userAgent.indexOf("Firefox"))return(r=m.createElement("style")).textContent='@import "'+e+'"',f(),void v(r);l()}var d;v(o),o.href=e}else s();else u()},t=function(t){return Zr.nu(function(e){n(t,V.compose(e,V.constant(io.value(t))),V.compose(e,V.constant(io.error(t))))})},o=function(e){return e.fold(V.identity,V.identity)};return{load:n,loadAll:function(e,n,r){no.par(H.map(e,t)).get(function(e){var t=H.partition(e,function(e){return e.isValue()});0<t.fail.length?r(t.fail.map(o)):n(t.pass.map(o))})}}}(a),l=[],f=u.schema?u.schema:oi({}),d=ai({url_converter:u.url_converter,url_converter_scope:u.url_converter_scope},u.schema),m=u.ownEvents?new Be(u.proxy):Be.Event,n=f.getBlockElements(),p=tn.overrideDefaults(function(){return{context:a,element:q.getRoot()}}),g=function(e){if(e&&a&&"string"==typeof e){var t=a.getElementById(e);return t&&t.id!==e?a.getElementsByName(e)[1]:t}return e},h=function(e){return"string"==typeof e&&(e=g(e)),p(e)},v=function(e,t,n){var r,o,i=h(e);return i.length&&(o=(r=s[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=g(e);return t?t.attributes:[]},b=function(e,t,n){var r,o;""===n&&(n=null);var i=h(e);r=i.attr(t),i.length&&((o=s[t])&&o.set?o.set(i,n,t):i.attr(t,n),r!==n&&u.onSetAttrib&&u.onSetAttrib({attrElm:i,attrName:t,attrValue:n}))},C=function(){return u.root_element||a.body},x=function(e,t){return Xr.getPos(a.body,g(e),t)},w=function(e,t,n){var r=h(e);return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}))&&(t=ve.ie&&ve.ie<12?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:undefined)},N=function(e){var t,n;return e=g(e),t=w(e,"width"),n=w(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n;if(!e)return!1;if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType;if(fi.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase();for(n=r.length-1;0<=n;n--)if(r[n]===o)return!0;return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e];return 0<mt(t,i[0].ownerDocument||i[0],null,i).length},S=function(e,t,n,r){var o,i=[],a=g(e);for(r=r===undefined,n=n||("BODY"!==C().nodeName?C().parentNode:null),It.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&a!==n&&a.nodeType&&9!==a.nodeType;){if(!t||"function"==typeof t&&t(a)){if(!r)return[a];i.push(a)}a=a.parentNode}return r?i:null},k=function(e,t,n){var r=t;if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e;return null},T=function(e,n,r){var o,t="string"==typeof e?g(e):e;if(!t)return!1;if(It.isArray(t)&&(t.length||0===t.length))return o=[],si(t,function(e,t){e&&("string"==typeof e&&(e=g(e)),o.push(n.call(r,e,t)))}),o;var i=r||c;return n.call(i,t)},A=function(e,t){h(e).each(function(e,n){si(t,function(e,t){b(n,t,e)})})},R=function(e,r){var t=h(e);li?t.each(function(e,t){if(!1!==t.canHaveHTML){for(;t.firstChild;)t.removeChild(t.firstChild);try{t.innerHTML="<br>"+r,t.removeChild(t.firstChild)}catch(n){tn("<div></div>").html("<br>"+r).contents().slice(1).appendTo(t)}return r}}):t.html(r)},_=function(e,n,r,o,i){return T(e,function(e){var t="string"==typeof n?a.createElement(n):n;return A(t,r),o&&("string"!=typeof o&&o.nodeType?t.appendChild(o):"string"==typeof o&&R(t,o)),i?t:e.appendChild(t)})},B=function(e,t,n){return _(a.createElement(e),e,t,n,!0)},D=Ko.decode,O=Ko.encodeAllRaw,P=function(e,t){var n=h(e);return t?n.each(function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():n.remove(),1<n.length?n.toArray():n[0]},L=function(e,t,n){h(e).toggleClass(t,n).each(function(){""===this.className&&tn(this).attr("class",null)})},I=function(t,e,n){return T(e,function(e){return It.is(e,"array")&&(t=t.cloneNode(!0)),n&&si(ci(e.childNodes),function(e){t.appendChild(e)}),e.parentNode.replaceChild(t,e)})},M=function(){return a.createRange()},F=function(e,t,n,r){if(It.isArray(e)){for(var o=e.length;o--;)e[o]=F(e[o],t,n,r);return e}return!u.collect||e!==a&&e!==i||l.push([e,t,n,r]),m.bind(e,t,n,r||q)},z=function(e,t,n){var r;if(It.isArray(e)){for(r=e.length;r--;)e[r]=z(e[r],t,n);return e}if(l&&(e===a||e===i))for(r=l.length;r--;){var o=l[r];e!==o[0]||t&&t!==o[1]||n&&n!==o[2]||m.unbind(o[0],o[1],o[2])}return m.unbind(e,t,n)},U=function(e){if(e&&Oo.isElement(e)){var t=e.getAttribute("data-mce-contenteditable");return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},q={doc:a,settings:u,win:i,files:o,stdMode:!0,boxModel:!0,styleSheetLoader:e,boundEvents:l,styles:d,schema:f,events:m,isBlock:function(e){if("string"==typeof e)return!!n[e];if(e){var t=e.nodeType;if(t)return!(1!==t||!n[e.nodeName])}return!1},$:p,$$:h,root:null,clone:function(t,e){if(!li||1!==t.nodeType||e)return t.cloneNode(e);if(!e){var n=a.createElement(t.nodeName);return si(y(t),function(e){b(n,e.nodeName,v(t,e.nodeName))}),n}return null},getRoot:C,getViewPort:function(e){var t=e||i,n=t.document,r=n.documentElement;return{x:t.pageXOffset||r.scrollLeft,y:t.pageYOffset||r.scrollTop,w:t.innerWidth||r.clientWidth,h:t.innerHeight||r.clientHeight}},getRect:function(e){var t,n;return e=g(e),t=x(e),n=N(e),{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:N,getParent:function(e,t,n){var r=S(e,t,n,!1);return r&&0<r.length?r[0]:null},getParents:S,get:g,getNext:function(e,t){return k(e,t,"nextSibling")},getPrev:function(e,t){return k(e,t,"previousSibling")},select:function(e,t){return mt(e,g(t)||u.root_element||a,[])},is:E,add:_,create:B,createHTML:function(e,t,n){var r,o="";for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&"undefined"!=typeof t[r]&&(o+=" "+r+'="'+O(t[r])+'"');return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(e){var t,n=a.createElement("div"),r=a.createDocumentFragment();for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t);return r},remove:P,setStyle:function(e,t,n){var r=h(e).css(t,n);u.update_styles&&pi(d,r)},getStyle:w,setStyles:function(e,t){var n=h(e).css(t);u.update_styles&&pi(d,n)},removeAllAttribs:function(e){return T(e,function(e){var t,n=e.attributes;for(t=n.length-1;0<=t;t--)e.removeAttributeNode(n.item(t))})},setAttrib:b,setAttribs:A,getAttrib:v,getPos:x,parseStyle:function(e){return d.parse(e)},serializeStyle:function(e,t){return d.serialize(e,t)},addStyle:function(e){var t,n;if(q!==hi.DOM&&a===document){if(r[e])return;r[e]=!0}(n=a.getElementById("mceDefaultStyles"))||((n=a.createElement("style")).id="mceDefaultStyles",n.type="text/css",(t=a.getElementsByTagName("head")[0]).firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(a.createTextNode(e))},loadCSS:function(e){var n;q===hi.DOM||a!==document?(e||(e=""),n=a.getElementsByTagName("head")[0],si(e.split(","),function(e){var t;e=It._addCacheSuffix(e),o[e]||(o[e]=!0,t=B("link",{rel:"stylesheet",href:e}),n.appendChild(t))})):hi.DOM.loadCSS(e)},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){L(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:L,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+t++},setHTML:R,getOuterHTML:function(e){var t="string"==typeof e?g(e):e;return Oo.isElement(t)?t.outerHTML:tn("<div></div>").append(tn(t).clone()).html()},setOuterHTML:function(e,t){h(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}P(tn(this).html(t),!0)})},decode:D,encode:O,insertAfter:function(e,t){var r=g(t);return T(e,function(e){var t,n;return t=r.parentNode,(n=r.nextSibling)?t.insertBefore(e,n):t.appendChild(e),e})},replace:I,rename:function(t,e){var n;return t.nodeName!==e.toUpperCase()&&(n=B(e),si(y(t),function(e){b(n,e.nodeName,v(t,e.nodeName))}),I(n,t,!0)),n||t},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode;if(r===n)break;r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return d.toHex(It.trim(e))},run:T,getAttribs:y,isEmpty:function(e,t){var n,r,o,i,a,u,s=0;if(e=e.firstChild){a=new ao(e,e.parentNode),t=t||(f?f.getNonEmptyElements():null),i=f?f.getWhiteSpaceElements():{};do{if(o=e.nodeType,Oo.isElement(e)){var c=e.getAttribute("data-mce-bogus");if(c){e=a.next("all"===c);continue}if(u=e.nodeName.toLowerCase(),t&&t[u]){if("br"===u){s++,e=a.next();continue}return!1}for(n=(r=y(e)).length;n--;)if("name"===(u=r[n].nodeName)||"data-mce-bookmark"===u)return!1}if(8===o)return!1;if(3===o&&!di.test(e.nodeValue))return!1;if(3===o&&e.parentNode&&i[e.parentNode.nodeName]&&di.test(e.nodeValue))return!1;e=a.next()}while(e)}return s<=1},createRng:M,nodeIndex:gi,split:function(e,t,n){var r,o,i,a=M();if(e&&t)return a.setStart(e.parentNode,gi(e)),a.setEnd(t.parentNode,gi(t)),r=a.extractContents(),(a=M()).setStart(t.parentNode,gi(t)+1),a.setEnd(e.parentNode,gi(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Io.trimNode(q,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Io.trimNode(q,o),e),P(e),n||t},bind:F,unbind:z,fire:function(e,t,n){return m.fire(e,t,n)},getContentEditable:U,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=U(e));e=e.parentNode);return n},destroy:function(){if(l)for(var e=l.length;e--;){var t=l[e];m.unbind(t[0],t[1],t[2])}mt.setDocument&&mt.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}};return s=mi(d,u,function(){return q}),q}(ui=hi||(hi={})).DOM=ui(document),ui.nodeIndex=gi;var vi=hi,yi=vi.DOM,bi=It.each,Ci=It.grep,xi=function(e){return"function"==typeof e},wi=function(){var f={},o=[],i={},a=[],d=0;this.isDone=function(e){return 2===f[e]},this.markDone=function(e){f[e]=2},this.add=this.load=function(e,t,n,r){f[e]===undefined&&(o.push(e),f[e]=0),t&&(i[e]||(i[e]=[]),i[e].push({success:t,failure:r,scope:n||this}))},this.remove=function(e){delete f[e],delete i[e]},this.loadQueue=function(e,t,n){this.loadScripts(o,e,t,n)},this.loadScripts=function(n,e,t,r){var s,c=[],l=function(t,e){bi(i[e],function(e){xi(e[t])&&e[t].call(e.scope)}),i[e]=undefined};a.push({success:e,failure:r,scope:t||this}),(s=function(){var e=Ci(n);if(n.length=0,bi(e,function(e){var t,n,r,o,i,a,u;2!==f[e]?3!==f[e]?1!==f[e]&&(f[e]=1,d++,t=e,n=function(){f[e]=2,d--,l("success",e),s()},r=function(){f[e]=3,d--,c.push(e),l("failure",e),s()},u=function(){a.remove(i),o&&(o.onreadystatechange=o.onload=o=null),n()},i=(a=yi).uniqueId(),(o=document.createElement("script")).id=i,o.type="text/javascript",o.src=It._addCacheSuffix(t),"onreadystatechange"in o?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&u()}:o.onload=u,o.onerror=function(){xi(r)?r():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+t)},(document.getElementsByTagName("head")[0]||document.body).appendChild(o)):l("failure",e):l("success",e)}),!d){var t=a.slice(0);a.length=0,bi(t,function(e){0===c.length?xi(e.success)&&e.success.call(e.scope):xi(e.failure)&&e.failure.call(e.scope,c)})}})()}};wi.ScriptLoader=new wi;var Ni,Ei=It.each;function Si(){var r=this,o=[],a={},u={},i=[],s=function(e){var t;return u[e]&&(t=u[e].dependencies),t||[]},c=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},l=function(n,e,t){var r=s(name);Ei(r,function(e){var t=c(n,e);f(t.resource,t,undefined,undefined)}),e&&(t?e.call(t):e.call(wi))},f=function(e,t,n,r,o){if(!a[e]){var i="string"==typeof t?t:t.prefix+t.resource+t.suffix;0!==i.indexOf("/")&&-1===i.indexOf("://")&&(i=Si.baseURL+"/"+i),a[e]=i.substring(0,i.lastIndexOf("/")),u[e]?l(t,n,r):wi.ScriptLoader.add(i,function(){return l(t,n,r)},r,o)}};return{items:o,urls:a,lookup:u,_listeners:i,get:function(e){return u[e]?u[e].instance:undefined},dependencies:s,requireLangPack:function(e,t){var n=Si.language;if(n&&!1!==Si.languageLoad){if(t)if(-1!==(t=","+t+",").indexOf(","+n.substr(0,2)+","))n=n.substr(0,2);else if(-1===t.indexOf(","+n+","))return;wi.ScriptLoader.add(a[e]+"/langs/"+n+".js")}},add:function(t,e,n){o.push(e),u[t]={instance:e,dependencies:n};var r=H.partition(i,function(e){return e.name===t});return i=r.fail,Ei(r.pass,function(e){e.callback()}),e},remove:function(e){delete a[e],delete u[e]},createUrl:c,addComponents:function(e,t){var n=r.urls[e];Ei(t,function(e){wi.ScriptLoader.add(n+"/"+e)})},load:f,waitFor:function(e,t){u.hasOwnProperty(e)?t():i.push({name:e,callback:t})}}}(Ni=Si||(Si={})).PluginManager=Ni(),Ni.ThemeManager=Ni();var ki,Ti="\ufeff",Ai=function(e){return e===Ti},Ri=Ti,_i=function(e){return e.replace(new RegExp(Ti,"g"),"")},Bi=Oo.isElement,Di=Oo.isText,Oi=function(e){return Di(e)&&(e=e.parentNode),Bi(e)&&e.hasAttribute("data-mce-caret")},Pi=function(e){return Di(e)&&Ai(e.data)},Li=function(e){return Oi(e)||Pi(e)},Ii=function(e){return e.firstChild!==e.lastChild||!Oo.isBr(e.firstChild)},Mi=function(e){var t=e.container();return e&&Oo.isText(t)&&t.data.charAt(e.offset())===Ri},Fi=function(e){var t=e.container();return e&&Oo.isText(t)&&t.data.charAt(e.offset()-1)===Ri},zi=function(e,t,n){var r,o,i;return(r=t.ownerDocument.createElement(e)).setAttribute("data-mce-caret",n?"before":"after"),r.setAttribute("data-mce-bogus","all"),r.appendChild(((i=document.createElement("br")).setAttribute("data-mce-bogus","1"),i)),o=t.parentNode,n?o.insertBefore(r,t):t.nextSibling?o.insertBefore(r,t.nextSibling):o.appendChild(r),r},Ui=function(e){return Di(e)&&e.data[0]===Ri},qi=function(e){return Di(e)&&e.data[e.data.length-1]===Ri},Vi=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],Oo.isBogus(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null;var t,n},Hi=Oo.isContentEditableTrue,ji=Oo.isContentEditableFalse,$i=Oo.isBr,Wi=Oo.isText,Ki=Oo.matchNodeNames("script style textarea"),Xi=Oo.matchNodeNames("img input textarea hr iframe video audio object"),Yi=Oo.matchNodeNames("table"),Gi=Li,Ji=function(e){return!Gi(e)&&(Wi(e)?!Ki(e.parentNode):Xi(e)||$i(e)||Yi(e)||Qi(e))},Qi=function(e){return!1===(t=e,Oo.isElement(t)&&"true"===t.getAttribute("unselectable"))&&ji(e);var t},Zi=function(e,t){return Ji(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Qi(e))return!1;if(Hi(e))return!0}return!0}(e,t)},ea=Math.round,ta=function(e){return e?{left:ea(e.left),top:ea(e.top),bottom:ea(e.bottom),right:ea(e.right),width:ea(e.width),height:ea(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},na=function(e,t){return e=ta(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},ra=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},oa=function(e,t){return e.bottom-e.height/2<t.top||!(e.top>t.bottom)&&ra(t.top-e.bottom,e,t)},ia=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&ra(t.bottom-e.top,e,t)},aa=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},ua=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},sa=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),ca=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&sa.test(e)},la=[].slice,fa=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=la.call(arguments);return r.length-1>=e.length?e.apply(this,r.slice(1)):function(){var e=r.concat([].slice.call(arguments));return fa.apply(this,e)}},da={constant:function(e){return function(){return e}},negate:function(t){return function(e){return!t(e)}},and:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=la.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(!n[t](e))return!1;return!0}},or:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=la.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(n[t](e))return!0;return!1}},curry:fa,compose:function(t,n){return function(e){return t(n(e))}},noop:function(){}},ma=function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return A.none();n.push(o.getOrDie())}return A.some(t.apply(null,n))},pa=Oo.isElement,ga=Ji,ha=Oo.matchStyleValues("display","block table"),va=Oo.matchStyleValues("float","left right"),ya=da.and(pa,ga,da.negate(va)),ba=da.negate(Oo.matchStyleValues("white-space","pre pre-line pre-wrap")),Ca=Oo.isText,xa=Oo.isBr,wa=vi.nodeIndex,Na=ua,Ea=function(e){return"createRange"in e?e.createRange():vi.DOM.createRng()},Sa=function(e){return e&&/[\r\n\t ]/.test(e)},ka=function(e){return!!e.setStart&&!!e.setEnd},Ta=function(e){var t,n=e.startContainer,r=e.startOffset;return!!(Sa(e.toString())&&ba(n.parentNode)&&Oo.isText(n)&&(t=n.data,Sa(t[r-1])||Sa(t[r+1])))},Aa=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},Ra=function(e){var t,n,r,o,i,a,u,s;return t=0<(n=e.getClientRects()).length?ta(n[0]):ta(e.getBoundingClientRect()),!ka(e)&&xa(e)&&Aa(t)?(i=(r=e).ownerDocument,a=Ea(i),u=i.createTextNode("\xa0"),(s=r.parentNode).insertBefore(u,r),a.setStart(u,0),a.setEnd(u,1),o=ta(a.getBoundingClientRect()),s.removeChild(u),o):Aa(t)&&ka(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset;if(t===n&&Oo.isText(n)&&0===r&&1===o){var i=e.cloneRange();return i.setEndAfter(n),Ra(i)}return null}(e):t},_a=function(e,t){var n=na(e,t);return n.width=1,n.right=n.left+1,n},Ba=function(e){var t,n,r=[],o=function(e){var t,n;0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=Ea(e.ownerDocument);if(t<e.data.length){if(ca(e.data[t]))return r;if(ca(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!Ta(n)))return o(_a(Ra(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),Ta(n)||o(_a(Ra(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),Ta(n)||o(_a(Ra(n),!0)))};if(Ca(e.container()))return i(e.container(),e.offset()),r;if(pa(e.container()))if(e.isAtEnd())n=Na(e.container(),e.offset()),Ca(n)&&i(n,n.data.length),ya(n)&&!xa(n)&&o(_a(Ra(n),!1));else{if(n=Na(e.container(),e.offset()),Ca(n)&&i(n,0),ya(n)&&e.isAtEnd())return o(_a(Ra(n),!1)),r;t=Na(e.container(),e.offset()-1),ya(t)&&!xa(t)&&(ha(t)||ha(n)||!ya(n))&&o(_a(Ra(t),!1)),ya(n)&&o(_a(Ra(n),!0))}return r};function Da(t,n,e){var r=function(){return e||(e=Ba(Da(t,n))),e};return{container:da.constant(t),offset:da.constant(n),toRange:function(){var e;return(e=Ea(t.ownerDocument)).setStart(t,n),e.setEnd(t,n),e},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return Ca(t),0===n},isAtEnd:function(){return Ca(t)?n>=t.data.length:n>=t.childNodes.length},isEqual:function(e){return e&&t===e.container()&&n===e.offset()},getNode:function(e){return Na(t,e?n-1:n)}}}(ki=Da||(Da={})).fromRangeStart=function(e){return ki(e.startContainer,e.startOffset)},ki.fromRangeEnd=function(e){return ki(e.endContainer,e.endOffset)},ki.after=function(e){return ki(e.parentNode,wa(e)+1)},ki.before=function(e){return ki(e.parentNode,wa(e))},ki.isAbove=function(e,t){return ma([H.head(t.getClientRects()),H.last(e.getClientRects())],oa).getOr(!1)},ki.isBelow=function(e,t){return ma([H.last(t.getClientRects()),H.head(e.getClientRects())],ia).getOr(!1)},ki.isAtStart=function(e){return!!e&&e.isAtStart()},ki.isAtEnd=function(e){return!!e&&e.isAtEnd()},ki.isTextPosition=function(e){return!!e&&Oo.isText(e.container())},ki.isElementPosition=function(e){return!1===ki.isTextPosition(e)};var Oa,Pa,La=Da,Ia=Oo.isElement,Ma=Oo.isText,Fa=function(e){var t=e.parentNode;t&&t.removeChild(e)},za=function(e,t){0===t.length?Fa(e):e.nodeValue=t},Ua=function(e){var t=_i(e);return{count:e.length-t.length,text:t}},qa=function(e,t){return ja(e),t},Va=function(e,t){return Ma(e)&&t.container()===e?(r=t,o=Ua((n=e).data.substr(0,r.offset())),i=Ua(n.data.substr(r.offset())),0<(a=o.text+i.text).length?(za(n,a),La(n,r.offset()-o.count)):r):qa(e,t);var n,r,o,i,a},Ha=function(e,t){return t.container()===e.parentNode?(n=e,o=(r=t).container(),i=H.indexOf(H.from(o.childNodes),n).map(function(e){return e<r.offset()?La(o,r.offset()-1):r}).getOr(r),ja(n),i):qa(e,t);var n,r,o,i},ja=function(e){if(Ia(e)&&Li(e)&&(Ii(e)?e.removeAttribute("data-mce-caret"):Fa(e)),Ma(e)){var t=_i(function(e){try{return e.nodeValue}catch(t){return""}}(e));za(e,t)}},$a={removeAndReposition:function(e,t){return La.isTextPosition(t)?Va(e,t):Ha(e,t)},remove:ja},Wa=function(e){return La.isTextPosition(e)?0===e.offset():Ji(e.getNode())},Ka=function(e){if(La.isTextPosition(e)){var t=e.container();return e.offset()===t.data.length}return Ji(e.getNode(!0))},Xa=function(e,t){return!La.isTextPosition(e)&&!La.isTextPosition(t)&&e.getNode()===t.getNode(!0)},Ya=function(e,t,n){return e?!Xa(t,n)&&(r=t,!(!La.isTextPosition(r)&&Oo.isBr(r.getNode())))&&Ka(t)&&Wa(n):!Xa(n,t)&&Wa(t)&&Ka(n);var r},Ga=function(e,t,n){var r=Ys(t);return A.from(e?r.next(n):r.prev(n))},Ja=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild;return Oo.isText(u)?A.some(La(u,e?0:u.data.length)):u?Ji(u)?A.some(e?La.before(u):(a=u,Oo.isBr(a)?La.before(a):La.after(a))):(r=t,o=u,i=(n=e)?La.before(o):La.after(o),Ga(n,r,i)):A.none()},Qa={fromPosition:Ga,nextPosition:V.curry(Ga,!0),prevPosition:V.curry(Ga,!1),navigate:function(t,n,r){return Ga(t,n,r).bind(function(e){return bs(r,e,n)&&Ya(t,r,e)?Ga(t,n,e):A.some(e)})},positionIn:Ja,firstPositionIn:V.curry(Ja,!0),lastPositionIn:V.curry(Ja,!1)},Za=Oo.isContentEditableTrue,eu=Oo.isContentEditableFalse,tu=function(e,t,n,r,o){return t._selectionOverrides.showCaret(e,n,r,o)},nu=function(e,t){var n,r;return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?null:((r=(n=t).ownerDocument.createRange()).selectNode(n),r)},ru=function(e,t,n){var r=Ss(1,e.getBody(),t),o=La.fromRangeStart(r),i=o.getNode();if(eu(i))return tu(1,e,i,!o.isAtEnd(),!1);var a=o.getNode(!0);if(eu(a))return tu(1,e,a,!1,!1);var u=e.dom.getParent(o.getNode(),function(e){return eu(e)||Za(e)});return eu(u)?tu(1,e,u,!1,n):null},ou=function(e,t,n){if(!t||!t.collapsed)return t;var r=ru(e,t,n);return r||t};(Pa=Oa||(Oa={}))[Pa.Br=0]="Br",Pa[Pa.Block=1]="Block",Pa[Pa.Wrap=2]="Wrap",Pa[Pa.Eol=3]="Eol";var iu,au,uu=function(e,t){return e===iu.Backwards?t.reverse():t},su=function(e,t,n,r){for(var o,i,a,u,s,c,l=Ys(n),f=r,d=[];f&&(s=l,c=f,o=t===iu.Forwards?s.next(c):s.prev(c));){if(Oo.isBr(o.getNode(!1)))return t===iu.Forwards?{positions:uu(t,d).concat([o]),breakType:Oa.Br,breakAt:A.some(o)}:{positions:uu(t,d),breakType:Oa.Br,breakAt:A.some(o)};if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,u=o,Oo.isBr(u.getNode(i===iu.Forwards))?Oa.Br:!1===bs(a,u)?Oa.Block:Oa.Wrap);return{positions:uu(t,d),breakType:m,breakAt:A.some(o)}}d.push(o),f=o}else f=o}return{positions:uu(t,d),breakType:Oa.Eol,breakAt:A.none()}},cu=function(n,r,o,e){return r(o,e).breakAt.map(function(e){var t=r(o,e).positions;return n===iu.Backwards?t.concat(e):[e].concat(t)}).getOr([])},lu=function(e,i){return H.foldl(e,function(e,o){return e.fold(function(){return A.some(o)},function(r){return ma([H.head(r.getClientRects()),H.head(o.getClientRects())],function(e,t){var n=Math.abs(i-e.left);return Math.abs(i-t.left)<=n?o:r}).or(e)})},A.none())},fu=function(t,e){return H.head(e.getClientRects()).bind(function(e){return lu(t,e.left)})},du=V.curry(su,Da.isAbove,-1),mu=V.curry(su,Da.isBelow,1),pu=V.curry(cu,-1,du),gu=V.curry(cu,1,mu),hu=function(e,t){return Pr.all(t,e)},vu=function(e,t,n,r,o){var i,a,u,s,c,l=hu(Vn.fromDom(n),"td,th").map(function(e){return e.dom()}),f=H.filter((i=e,a=l,H.bind(a,function(e){var t,n,r=(t=e.getBoundingClientRect(),n=-1,{left:t.left-n,top:t.top-n,right:t.right+2*n,bottom:t.bottom+2*n,width:t.width+n,height:t.height+n});return[{x:r.left,y:i(r),cell:e},{x:r.right,y:i(r),cell:e}]})),function(e){return t(e,o)});return(u=f,s=r,c=o,H.foldl(u,function(e,r){return e.fold(function(){return A.some(r)},function(e){var t=Math.sqrt(Math.abs(e.x-s)+Math.abs(e.y-c)),n=Math.sqrt(Math.abs(r.x-s)+Math.abs(r.y-c));return A.some(n<t?r:e)})},A.none())).map(function(e){return e.cell})},yu=V.curry(vu,function(e){return e.bottom},function(e,t){return e.y<t}),bu=V.curry(vu,function(e){return e.top},function(e,t){return e.y>t}),Cu=function(t,n){return H.head(n.getClientRects()).bind(function(e){return yu(t,e.left,e.top)}).bind(function(e){return fu((t=e,Qa.lastPositionIn(t).map(function(e){return du(t,e).positions.concat(e)}).getOr([])),n);var t})},xu=function(t,n){return H.last(n.getClientRects()).bind(function(e){return bu(t,e.left,e.top)}).bind(function(e){return fu((t=e,Qa.firstPositionIn(t).map(function(e){return[e].concat(mu(t,e).positions)}).getOr([])),n);var t})},wu=function(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}},Nu=function(e,t,n){var r,o,i,a,u,s=e.dom,c=s.getRoot(),l=0;if(u={elm:t,alignToTop:n},e.fire("scrollIntoView",u),!u.isDefaultPrevented()&&Oo.isElement(t)){if(!1===n&&(l=t.offsetHeight),"BODY"!==c.nodeName){var f=e.selection.getScrollContainer();if(f)return r=wu(t).y-wu(f).y+l,a=f.clientHeight,void((r<(i=f.scrollTop)||i+a<r+25)&&(f.scrollTop=r<i?r:r-a+25))}o=s.getViewPort(e.getWin()),r=s.getPos(t).y+l,i=o.y,a=o.h,(r<o.y||i+a<r+25)&&e.getWin().scrollTo(0,r<i?r:r-a+25)}},Eu=function(d,e){H.head(Da.fromRangeStart(e).getClientRects()).each(function(e){var t,n,r,o,i,a,u,s,c,l=function(e){if(e.inline)return e.getBody().getBoundingClientRect();var t=e.getWin();return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight,width:t.innerWidth,height:t.innerHeight}}(d),f={x:(i=t=l,a=n=e,a.left>i.left&&a.right<i.right?0:a.left<i.left?a.left-i.left:a.right-i.right),y:(r=t,o=n,o.top>r.top&&o.bottom<r.bottom?0:o.top<r.top?o.top-r.top:o.bottom-r.bottom)};s=0!==f.x?0<f.x?f.x+4:f.x-4:0,c=0!==f.y?0<f.y?f.y+4:f.y-4:0,(u=d).inline?(u.getBody().scrollLeft+=s,u.getBody().scrollTop+=c):u.getWin().scrollBy(s,c)})},Su=function(e,t,n){var r=e.getParam(t,n);if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash");return o.hasOwnProperty(e.id)?o[e.id]:n}return r},ku=function(e){return e.getParam("iframe_attrs",{})},Tu=function(e){return e.getParam("doctype","<!DOCTYPE html>")},Au=function(e){return e.getParam("document_base_url","")},Ru=function(e){return Su(e,"body_id","tinymce")},_u=function(e){return Su(e,"body_class","")},Bu=function(e){return e.getParam("content_security_policy","")},Du=function(e){return e.getParam("br_in_pre",!0)},Ou=function(e){if(e.getParam("force_p_newlines",!1))return"p";var t=e.getParam("forced_root_block","p");return!1===t?"":t},Pu=function(e){return e.getParam("forced_root_block_attrs",{})},Lu=function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")},Iu=function(e){return e.getParam("no_newline_selector","")},Mu=function(e){return e.getParam("keep_styles",!0)},Fu=function(e){return e.getParam("end_container_on_empty_block",!1)},zu=function(e){return It.explode(e.getParam("font_size_style_values",""))},Uu=function(e){return It.explode(e.getParam("font_size_classes",""))},qu=function(t,n){$r.parent(t).each(function(e){e.dom().insertBefore(n.dom(),t.dom())})},Vu=function(e,t){e.dom().appendChild(t.dom())},Hu={before:qu,after:function(e,t){$r.nextSibling(e).fold(function(){$r.parent(e).each(function(e){Vu(e,t)})},function(e){qu(e,t)})},prepend:function(t,n){$r.firstChild(t).fold(function(){Vu(t,n)},function(e){t.dom().insertBefore(n.dom(),e.dom())})},append:Vu,appendAt:function(e,t,n){$r.child(e,n).fold(function(){Vu(e,t)},function(e){qu(e,t)})},wrap:function(e,t){qu(e,t),Vu(t,e)}},ju=Un.detect().browser,$u=function(){return ju.isIE()||ju.isEdge()||ju.isFirefox()},Wu=function(e,t){e.selection.setRng(t),Eu(e,t)},Ku=function(t,n,e){var r=t(n,e);return r.breakType===Oa.Wrap&&0===r.positions.length?r.breakAt.map(function(e){return t(n,e).breakAt.isNone()}).getOr(!0):r.breakAt.isNone()},Xu=da.curry(Ku,du),Yu=da.curry(Ku,mu),Gu=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1;if($u()&&(o=t,i=s,a=n,u=La.fromRangeStart(i),Qa.positionIn(!o,a).map(function(e){return e.isEqual(u)}).getOr(!1))){var l=tu(c,e,n,!t,!0);return Wu(e,l),!0}return!1},Ju=function(e,t){var n=t.getNode(e);return Oo.isElement(n)&&"TABLE"===n.nodeName?A.some(n):A.none()},Qu=function(u,s,c){var e=Ju(!!s,c),t=!1===s;e.fold(function(){return Wu(u,c.toRange())},function(a){return Qa.positionIn(t,u.getBody()).filter(function(e){return e.isEqual(c)}).fold(function(){return Wu(u,c.toRange())},function(e){return n=s,o=a,t=c,void((i=Ou(r=u))?r.undoManager.transact(function(){var e=Vn.fromTag(i);lr.setAll(e,Pu(r)),Hu.append(e,Vn.fromTag("br")),n?Hu.after(Vn.fromDom(o),e):Hu.before(Vn.fromDom(o),e);var t=r.dom.createRng();t.setStart(e.dom(),0),t.setEnd(e.dom(),0),Wu(r,t)}):Wu(r,t.toRange()));var n,r,o,t,i})})},Zu=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=La.fromRangeStart(l),d=e.getBody();if(!t&&Xu(r,f)){var m=(u=d,Cu(s=n,c=f).orThunk(function(){return H.head(c.getClientRects()).bind(function(e){return lu(pu(u,La.before(s)),e.left)})}).getOr(La.before(s)));return Qu(e,t,m),!0}return!(!t||!Yu(r,f))&&(o=d,m=xu(i=n,a=f).orThunk(function(){return H.head(a.getClientRects()).bind(function(e){return lu(gu(o,La.after(i)),e.left)})}).getOr(La.after(i)),Qu(e,t,m),!0)},es=function(t,n){return function(){return A.from(t.dom.getParent(t.selection.getNode(),"td,th")).bind(function(e){return A.from(t.dom.getParent(e,"table")).map(function(e){return Gu(t,n,e)})}).getOr(!1)}},ts=function(n,r){return function(){return A.from(n.dom.getParent(n.selection.getNode(),"td,th")).bind(function(t){return A.from(n.dom.getParent(t,"table")).map(function(e){return Zu(n,r,e,t)})}).getOr(!1)}},ns=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return ns(n())}}},rs=Oo.isContentEditableFalse,os=function(e,t,n){var r,o,i,a,u,s=na(t.getBoundingClientRect(),n);return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),s.left+=o,s.right+=o,s.top+=i,s.bottom+=i,s.width=1,0<(a=t.offsetWidth-t.clientWidth)&&(n&&(a*=-1),s.left+=a,s.right+=a),s},is=function(a,u,e){var t,s,c=ns(A.none()),l=function(){!function(e){var t,n,r,o,i;for(t=tn("*[contentEditable=false]",e),o=0;o<t.length;o++)r=(n=t[o]).previousSibling,qi(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(i.length-1,1)),r=n.nextSibling,Ui(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(0,1))}(a),s&&($a.remove(s),s=null),c.get().each(function(e){tn(e.caret).remove(),c.set(A.none())}),clearInterval(t)},f=function(){t=we.setInterval(function(){e()?tn("div.mce-visual-caret",a).toggleClass("mce-visual-caret-hidden"):tn("div.mce-visual-caret",a).addClass("mce-visual-caret-hidden")},500)};return{show:function(t,e){var n,r,o;if(l(),o=e,Oo.isElement(o)&&/^(TD|TH)$/i.test(o.tagName))return null;if(!u(e))return s=function(e,t){var n,r,o;if(r=e.ownerDocument.createTextNode(Ri),o=e.parentNode,t){if(n=e.previousSibling,Di(n)){if(Li(n))return n;if(qi(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,Di(n)){if(Li(n))return n;if(Ui(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(e,t),r=e.ownerDocument.createRange(),rs(s.nextSibling)?(r.setStart(s,0),r.setEnd(s,0)):(r.setStart(s,1),r.setEnd(s,1)),r;s=zi("p",e,t),n=os(a,e,t),tn(s).css("top",n.top);var i=tn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];return c.set(A.some({caret:i,element:e,before:t})),c.get().each(function(e){t&&tn(e.caret).addClass("mce-visual-caret-before")}),f(),(r=e.ownerDocument.createRange()).setStart(s,0),r.setEnd(s,0),r},hide:l,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){c.get().each(function(e){var t=os(a,e.element,e.before);tn(e.caret).css(t)})},destroy:function(){return we.clearInterval(t)}}},as=function(e){return rs(e)||Oo.isTable(e)&&$u()},us=Oo.isContentEditableFalse,ss=Oo.matchStyleValues("display","block table table-cell table-caption list-item"),cs=Li,ls=Oi,fs=da.curry,ds=Oo.isElement,ms=Ji,ps=function(e){return 0<e},gs=function(e){return e<0},hs=function(e,t){for(var n;n=e(t);)if(!ls(n))return n;return null},vs=function(e,t,n,r,o){var i=new ao(e,r);if(gs(t)){if((us(e)||ls(e))&&n(e=hs(i.prev,!0)))return e;for(;e=hs(i.prev,o);)if(n(e))return e}if(ps(t)){if((us(e)||ls(e))&&n(e=hs(i.next,!0)))return e;for(;e=hs(i.next,o);)if(n(e))return e}return null},ys=function(e,t){for(;e&&e!==t;){if(ss(e))return e;e=e.parentNode}return null},bs=function(e,t,n){return ys(e.container(),n)===ys(t.container(),n)},Cs=function(e,t){var n,r;return t?(n=t.container(),r=t.offset(),ds(n)?n.childNodes[r+e]:null):null},xs=function(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},ws=function(e,t,n){var r,o,i,a;for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],cs(r)&&(r=r[o]),us(r)){if(a=n,ys(r,i=t)===ys(a,i))return r;break}if(ms(r))break;n=n.parentNode}return null},Ns=fs(xs,!0),Es=fs(xs,!1),Ss=function(e,t,n){var r,o,i,a,u=fs(ws,!0,t),s=fs(ws,!1,t);if(o=n.startContainer,i=n.startOffset,Oi(o)){if(ds(o)||(o=o.parentNode),"before"===(a=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,as(r)))return Ns(r);if("after"===a&&(r=o.previousSibling,as(r)))return Es(r)}if(!n.collapsed)return n;if(Oo.isText(o)){if(cs(o)){if(1===e){if(r=s(o))return Ns(r);if(r=u(o))return Es(r)}if(-1===e){if(r=u(o))return Es(r);if(r=s(o))return Ns(r)}return n}if(qi(o)&&i>=o.data.length-1)return 1===e&&(r=s(o))?Ns(r):n;if(Ui(o)&&i<=1)return-1===e&&(r=u(o))?Es(r):n;if(i===o.data.length)return(r=s(o))?Ns(r):n;if(0===i)return(r=u(o))?Es(r):n}return n},ks=function(e,t){var n=Cs(e,t);return us(n)&&!Oo.isBogusAll(n)},Ts=function(e,t){return Oo.isTable(Cs(e,t))},As=function(e,t){return A.from(Cs(e?0:-1,t)).filter(us)},Rs=function(e,t,n){var r=Ss(e,t,n);return-1===e?Da.fromRangeStart(r):Da.fromRangeEnd(r)},_s=fs(ks,0),Bs=fs(ks,-1),Ds=fs(Ts,0),Os=fs(Ts,-1);(au=iu||(iu={}))[au.Backwards=-1]="Backwards",au[au.Forwards=1]="Forwards";var Ps,Ls,Is,Ms,Fs,zs=Oo.isContentEditableFalse,Us=Oo.isText,qs=Oo.isElement,Vs=Oo.isBr,Hs=Ji,js=function(e){return Xi(e)||!!Qi(t=e)&&!0!==Bt.reduce(t.getElementsByTagName("*"),function(e,t){return e||Hi(t)},!1);var t},$s=Zi,Ws=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},Ks=function(e,t){if(ps(e)){if(Hs(t.previousSibling)&&!Us(t.previousSibling))return La.before(t);if(Us(t))return La(t,0)}if(gs(e)){if(Hs(t.nextSibling)&&!Us(t.nextSibling))return La.after(t);if(Us(t))return La(t,t.data.length)}return gs(e)?Vs(t)?La.before(t):La.after(t):La.before(t)},Xs=function(e,t,n){var r,o,i,a,u;if(!qs(n)||!t)return null;if(t.isEqual(La.after(n))&&n.lastChild){if(u=La.after(n.lastChild),gs(e)&&Hs(n.lastChild)&&qs(n.lastChild))return Vs(n.lastChild)?La.before(n.lastChild):u}else u=t;var s,c,l,f=u.container(),d=u.offset();if(Us(f)){if(gs(e)&&0<d)return La(f,--d);if(ps(e)&&d<f.length)return La(f,++d);r=f}else{if(gs(e)&&0<d&&(o=Ws(f,d-1),Hs(o)))return!js(o)&&(i=vs(o,e,$s,o))?Us(i)?La(i,i.data.length):La.after(i):Us(o)?La(o,o.data.length):La.before(o);if(ps(e)&&d<f.childNodes.length&&(o=Ws(f,d),Hs(o)))return Vs(o)&&n.lastChild===o?null:(s=o,c=n,Oo.isBr(s)&&(l=Xs(1,La.after(s),c))&&!bs(La.before(s),La.before(l),c)?Xs(e,La.after(o),n):!js(o)&&(i=vs(o,e,$s,o))?Us(i)?La(i,0):La.before(i):Us(o)?La(o,0):La.after(o));r=o||u.getNode()}return(ps(e)&&u.isAtEnd()||gs(e)&&u.isAtStart())&&(r=vs(r,e,da.constant(!0),n,!0),$s(r,n))?Ks(e,r):(o=vs(r,e,$s,n),!(a=Bt.last(Bt.filter(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode;return n}(f,n),zs)))||o&&a.contains(o)?o?Ks(e,o):null:u=ps(e)?La.after(a):La.before(a))},Ys=function(t){return{next:function(e){return Xs(iu.Forwards,e,t)},prev:function(e){return Xs(iu.Backwards,e,t)}}},Gs=function(e){return It.grep(e.childNodes,function(e){return"LI"===e.nodeName})},Js=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&("\xa0"===(t=e.firstChild).data||Oo.isBr(t));var t},Qs=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||Js(t))?e.slice(0,-1):e;var t},Zs=function(e,t){var n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},ec=function(e,t){var n=La.after(e),r=Ys(t).prev(n);return r?r.toRange():null},tc=function(t,e,n){var r,o,i,a,u=t.parentNode;return It.each(e,function(e){u.insertBefore(e,t)}),r=t,o=n,i=La.before(r),(a=Ys(o).next(i))?a.toRange():null},nc=function(e,t){var n,r,o,i,a,u,s=t.firstChild,c=t.lastChild;return s&&"meta"===s.name&&(s=s.next),c&&"mce_marker"===c.attr("id")&&(c=c.prev),r=c,u=(n=e).getNonEmptyElements(),r&&(r.isEmpty(u)||(o=r,n.getBlockElements()[o.name]&&(a=o).firstChild&&a.firstChild===a.lastChild&&("br"===(i=o.firstChild).name||"\xa0"===i.value)))&&(c=c.prev),!(!s||s!==c||"ul"!==s.name&&"ol"!==s.name)},rc=function(e,o,i,t){var n,r,a,u,s,c,l,f,d,m,p,g,h,v,y,b,C,x,w,N=(n=o,r=t,c=e.serialize(r),l=n.createFragment(c),u=(a=l).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),E=Zs(o,i.startContainer),S=Qs(Gs(N.firstChild)),k=o.getRoot(),T=function(e){var t=La.fromRangeStart(i),n=Ys(o.getRoot()),r=1===e?n.prev(t):n.next(t);return!r||Zs(o,r.getNode())!==E};return T(1)?tc(E,S,k):T(2)?(f=E,d=S,m=k,o.insertAfter(d.reverse(),f),ec(d[0],m)):(g=S,h=k,v=p=E,b=(y=i).cloneRange(),C=y.cloneRange(),b.setStartBefore(v),C.setEndAfter(v),x=[b.cloneContents(),C.cloneContents()],(w=p.parentNode).insertBefore(x[0],p),It.each(g,function(e){w.insertBefore(e,p)}),w.insertBefore(x[1],p),w.removeChild(p),ec(g[g.length-1],h))},oc=function(e,t){return!!Zs(e,t)},ic=Oo.isText,ac=Oo.isBogus,uc=vi.nodeIndex,sc=function(e){var t=e.parentNode;return ac(t)?sc(t):t},cc=function(e){return e?Bt.reduce(e.childNodes,function(e,t){return ac(t)&&"BR"!==t.nodeName?e=e.concat(cc(t)):e.push(t),e},[]):[]},lc=function(t){return function(e){return t===e}},fc=function(e){var t,r,n,o;return(ic(e)?"text()":e.nodeName.toLowerCase())+"["+(r=cc(sc(t=e)),n=Bt.findIndex(r,lc(t),t),r=r.slice(0,n+1),o=Bt.reduce(r,function(e,t,n){return ic(t)&&ic(r[n-1])&&e++,e},0),r=Bt.filter(r,Oo.matchNodeNames(t.nodeName)),(n=Bt.findIndex(r,lc(t),t))-o)+"]"},dc=function(e,t){var n,r,o,i,a,u=[];return n=t.container(),r=t.offset(),ic(n)?o=function(e,t){for(;(e=e.previousSibling)&&ic(e);)t+=e.data.length;return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(fc(n)),a=function(e,t,n){var r=[];for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t);return r}(e,n),a=Bt.filter(a,da.negate(Oo.isBogus)),(u=u.concat(Bt.map(a,function(e){return fc(e)}))).reverse().join("/")+","+o},mc=function(e,t){var n,r,o;return t?(t=(n=t.split(","))[0].split("/"),o=1<n.length?n[1]:"before",(r=Bt.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),n=e,r=t[1],o=parseInt(t[2],10),i=cc(n),i=Bt.filter(i,function(e,t){return!ic(e)||!ic(i[t-1])}),(i=Bt.filter(i,Oo.matchNodeNames(r)))[o]):null;var n,r,o,i},e))?ic(r)?function(e,t){for(var n,r=e,o=0;ic(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o;break}if(!ic(r.nextSibling)){e=r,t=n;break}o+=n,r=r.nextSibling}return ic(e)&&t>e.data.length&&(t=e.data.length),La(e,t)}(r,parseInt(o,10)):(o="after"===o?uc(r)+1:uc(r),La(r.parentNode,o)):null):null},pc=Oo.isContentEditableFalse,gc=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot();for(Oo.isText(a)?s.push(n?function(e,t,n){var r,o;for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&Oo.isText(r);r=r.previousSibling)o+=e(r.data).length;return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n));return s},hc=function(e){Oo.isText(e)&&0===e.data.length&&e.parentNode.removeChild(e)},vc=function(e,t,n){var r=0;return It.each(e.select(t),function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++}),r},yc=function(e,t){var n,r,o,i=t?"start":"end";n=e[i+"Container"],r=e[i+"Offset"],Oo.isElement(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},bc=function(e){return yc(e,!0),yc(e,!1),e},Cc=function(e,t){var n;if(Oo.isElement(e)&&(e=ua(e,t),pc(e)))return e;if(Li(e)){if(Oo.isText(e)&&Oi(e)&&(e=e.parentNode),n=e.previousSibling,pc(n))return n;if(n=e.nextSibling,pc(n))return n}},xc=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng();if(pc(r)||"IMG"===o)return{name:o,index:vc(n.dom,o,r)};var a,u,s,c,l,f,d,m=Cc((a=i).startContainer,a.startOffset)||Cc(a.endContainer,a.endOffset);return m?{name:o=m.tagName,index:vc(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=gc(f,u,c,l,!0),s.isCollapsed()||(d.end=gc(f,u,c,l,!1)),d)},wc=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"};return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Nc=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName;if("IMG"===u)return{name:u,index:vc(n,u,a)};var s=bc(r.cloneRange());if(!i){s.collapse(!1);var c=wc(n,o+"_end",t);s.insertNode(c),hc(c.nextSibling)}(r=bc(r)).collapse(!0);var l=wc(n,o+"_start",t);return r.insertNode(l),hc(l.previousSibling),e.moveToBookmark({id:o,keep:1}),{id:o}},Ec={getBookmark:function(e,t,n){return 2===t?xc(_i,n,e):3===t?(o=(r=e).getRng(),{start:dc(r.dom.getRoot(),La.fromRangeStart(o)),end:dc(r.dom.getRoot(),La.fromRangeEnd(o))}):t?{rng:e.getRng()}:Nc(e,!1);var r,o},getUndoBookmark:V.curry(xc,V.identity,!0),getPersistentBookmark:Nc},Sc="_mce_caret",kc=function(e){return Oo.isElement(e)&&e.id===Sc},Tc=function(e,t){for(;t&&t!==e;){if(t.id===Sc)return t;t=t.parentNode}return null},Ac=function(e,t){return!e.isBlock(t)||t.innerHTML||ve.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t},Rc=function(e,t){return Qa.lastPositionIn(e).fold(function(){return!1},function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0})},_c=function(e,t,n){return!(!1!==t.hasChildNodes()||!Tc(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(Ri),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0));var r,o,i},Bc=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot();if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,_c(c,i,r))return!0;if(s[o]>u.length-1)return!!_c(c,i,r)||Rc(i,r);i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},Dc=function(e){return Oo.isText(e)&&0<e.data.length},Oc=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep;if(c){if(r=c.parentNode,"start"===t?l?c.hasChildNodes()?(r=c.firstChild,o=1):Dc(c.nextSibling)?(r=c.nextSibling,o=0):Dc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)+1):o=e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,o=1):Dc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)):o=e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,It.each(It.grep(c.childNodes),function(e){Oo.isText(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});c=e.get(n.id+"_"+t);)e.remove(c,!0);a&&i&&a.nodeType===i.nodeType&&Oo.isText(a)&&!ve.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return A.some(La(u,s))}return A.none()},Pc=function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,p,g,h,v,y=e.dom;if(t){if(v=t,It.isArray(v.start))return g=t,h=(p=y).createRng(),Bc(p,!0,g,h)&&Bc(p,!1,g,h)?A.some(h):A.none();if("string"==typeof t.start)return A.some((f=t,d=(l=y).createRng(),m=mc(l.getRoot(),f.start),d.setStart(m.container(),m.offset()),m=mc(l.getRoot(),f.end),d.setEnd(m.container(),m.offset()),d));if(t.hasOwnProperty("id"))return s=Oc(o=y,"start",i=t),c=Oc(o,"end",i),ma([s,(a=c,u=s,a.isSome()?a:u)],function(e,t){var n=o.createRng();return n.setStart(Ac(o,e.container()),e.offset()),n.setEnd(Ac(o,t.container()),t.offset()),n});if(t.hasOwnProperty("name"))return n=y,r=t,A.from(n.select(r.name)[r.index]).map(function(e){var t=n.createRng();return t.selectNode(e),t});if(t.hasOwnProperty("rng"))return A.some(t.rng)}return A.none()},Lc=function(e,t,n){return Ec.getBookmark(e,t,n)},Ic=function(t,e){Pc(t,e).each(function(e){t.setRng(e)})},Mc=function(e){return Oo.isElement(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Fc=It.each,zc=function(o){this.compare=function(e,t){if(e.nodeName!==t.nodeName)return!1;var n=function(n){var r={};return Fc(o.getAttribs(n),function(e){var t=e.nodeName.toLowerCase();0!==t.indexOf("_")&&"style"!==t&&0!==t.indexOf("data-")&&(r[t]=o.getAttrib(n,t))}),r},r=function(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1;if(e[r]!==n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0};return!(!r(n(e),n(t))||!r(o.parseStyle(o.getAttrib(e,"style")),o.parseStyle(o.getAttrib(t,"style")))||Mc(e)||Mc(t))}},Uc=function(t,e){H.each(e,function(e){Hu.before(t,e)})},qc=function(t,e){H.each(e,function(e){Hu.append(t,e)})},Vc=function(e){var t=e.dom();null!==t.parentNode&&t.parentNode.removeChild(t)},Hc={empty:function(e){e.dom().textContent="",H.each($r.children(e),function(e){Vc(e)})},remove:Vc,unwrap:function(e){var t=$r.children(e);0<t.length&&Uc(e,t),Vc(e)}},jc=(Ps=Zn.isText,Ls="text",Is=function(e){return Ps(e)?A.from(e.dom().nodeValue):A.none()},Ms=Un.detect().browser,{get:function(e){if(!Ps(e))throw new Error("Can only get "+Ls+" value of a "+Ls+" node");return Fs(e).getOr("")},getOption:Fs=Ms.isIE()&&10===Ms.version.major?function(e){try{return Is(e)}catch(Dw){return A.none()}}:Is,set:function(e,t){if(!Ps(e))throw new Error("Can only set raw "+Ls+" value of a "+Ls+" node");e.dom().nodeValue=t}}),$c=function(e){return jc.get(e)},Wc=function(e){var t=hu(e,"br"),n=H.filter(function(e){for(var t=[],n=e.dom();n;)t.push(Vn.fromDom(n)),n=n.lastChild;return t}(e).slice(-1),go);t.length===n.length&&H.each(n,Hc.remove)},Kc=function(e){Hc.empty(e),Hu.append(e,Vn.fromHtml('<br data-mce-bogus="1">'))},Xc=function(n){$r.lastChild(n).each(function(t){$r.prevSibling(t).each(function(e){mo(n)&&go(t)&&mo(e)&&Hc.remove(t)})})},Yc=It.makeMap;function Gc(e){var u,s,c,l,f,d=[];return u=(e=e||{}).indent,s=Yc(e.indent_before||""),c=Yc(e.indent_after||""),l=Ko.getEncodeFunc(e.entity_encoding||"raw",e.entities),f="html"===e.element_format,{start:function(e,t,n){var r,o,i,a;if(u&&s[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n"),d.push("<",e),t)for(r=0,o=t.length;r<o;r++)i=t[r],d.push(" ",i.name,'="',l(i.value,!0),'"');d[d.length]=!n||f?">":" />",n&&u&&c[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n")},end:function(e){var t;d.push("</",e,">"),u&&c[e]&&0<d.length&&0<(t=d[d.length-1]).length&&"\n"!==t&&d.push("\n")},text:function(e,t){0<e.length&&(d[d.length]=t?e:l(e))},cdata:function(e){d.push("<![CDATA[",e,"]]>")},comment:function(e){d.push("\x3c!--",e,"--\x3e")},pi:function(e,t){t?d.push("<?",e," ",l(t),"?>"):d.push("<?",e,"?>"),u&&d.push("\n")},doctype:function(e){d.push("<!DOCTYPE",e,">",u?"\n":"")},reset:function(){d.length=0},getContent:function(){return d.join("").replace(/\n$/,"")}}}function Jc(t,p){void 0===p&&(p=oi());var g=Gc(t);return(t=t||{}).validate=!("validate"in t)||t.validate,{serialize:function(e){var f,d;d=t.validate,f={3:function(e){g.text(e.value,e.raw)},8:function(e){g.comment(e.value)},7:function(e){g.pi(e.name,e.value)},10:function(e){g.doctype(e.value)},4:function(e){g.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;m(e),e=e.next;);}},g.reset();var m=function(e){var t,n,r,o,i,a,u,s,c,l=f[e.type];if(l)l(e);else{if(t=e.name,n=e.shortEnded,r=e.attributes,d&&r&&1<r.length&&((a=[]).map={},c=p.getElementRule(e.name))){for(u=0,s=c.attributesOrder.length;u<s;u++)(o=c.attributesOrder[u])in r.map&&(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));for(u=0,s=r.length;u<s;u++)(o=r[u].name)in a.map||(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));r=a}if(g.start(e.name,r,n),!n){if(e=e.firstChild)for(;m(e),e=e.next;);g.end(t)}}};return 1!==e.type||t.inner?f[11](e):m(e),g.getContent()}}}var Qc=function(a){var u=La.fromRangeStart(a),s=La.fromRangeEnd(a),c=a.commonAncestorContainer;return Qa.fromPosition(!1,c,s).map(function(e){return!bs(u,s,c)&&bs(u,e,c)?(t=u.container(),n=u.offset(),r=e.container(),o=e.offset(),(i=document.createRange()).setStart(t,n),i.setEnd(r,o),i):a;var t,n,r,o,i}).getOr(a)},Zc=function(e){return e.collapsed?e:Qc(e)},el=Oo.matchNodeNames("td th"),tl=function(o,e,t){var n,r,i,a,u,s,c,l,f,d,m,p,g=o.schema.getTextInlineElements(),h=o.selection,v=o.dom;if(/^ | $/.test(e)&&(e=function(e){var t,n,r;t=h.getRng(),n=t.startContainer,r=t.startOffset;var o=function(e){return n[e]&&3===n[e].nodeType};return 3===n.nodeType&&(0<r?e=e.replace(/^&nbsp;/," "):o("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),r<n.length?e=e.replace(/&nbsp;(<br>|)$/," "):o("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}(e)),n=o.parser,p=t.merge,r=Jc({validate:o.settings.validate},o.schema),m='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',s={content:e,format:"html",selection:!0,paste:t.paste},(s=o.fire("BeforeSetContent",s)).isDefaultPrevented())o.fire("SetContent",{content:s.content,format:"html",selection:!0,paste:t.paste});else{-1===(e=s.content).indexOf("{$caret}")&&(e+="{$caret}"),e=e.replace(/\{\$caret\}/,m);var y,b,C,x,w=(l=h.getRng()).startContainer||(l.parentElement?l.parentElement():null),N=o.getBody();w===N&&h.isCollapsed()&&v.isBlock(N.firstChild)&&(y=N.firstChild)&&!o.schema.getShortEndedElements()[y.nodeName]&&v.isEmpty(N.firstChild)&&((l=v.createRng()).setStart(N.firstChild,0),l.setEnd(N.firstChild,0),h.setRng(l)),h.isCollapsed()||(o.selection.setRng(Zc(o.selection.getRng())),o.getDoc().execCommand("Delete",!1,null),C=(b=h.getRng()).startContainer,x=b.startOffset,3===C.nodeType&&b.collapsed&&("\xa0"===C.data[x]?(C.deleteData(x,1),/[\u00a0| ]$/.test(e)||(e+=" ")):"\xa0"===C.data[x-1]&&(C.deleteData(x-1,1),/[\u00a0| ]$/.test(e)||(e=" "+e))));var E,S,k,T={context:(i=h.getNode()).nodeName.toLowerCase(),data:t.data,insert:!0};if(u=n.parse(e,T),!0===t.paste&&nc(o.schema,u)&&oc(v,i))return l=rc(r,v,o.selection.getRng(),u),o.selection.setRng(l),void o.fire("SetContent",s);if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(u),"mce_marker"===(f=u.lastChild).attr("id"))for(f=(c=f).prev;f;f=f.walk(!0))if(3===f.type||!v.isBlock(f.name)){o.schema.isValidChild(f.parent.name,"span")&&f.parent.insert(c,f,"br"===f.name);break}if(o._selectionOverrides.showBlockCaretContainer(i),T.invalid){for(h.setContent(m),i=h.getNode(),a=o.getBody(),9===i.nodeType?i=f=a:f=i;f!==a;)f=(i=f).parentNode;e=i===a?a.innerHTML:v.getOuterHTML(i),e=r.serialize(n.parse(e.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return r.serialize(u)}))),i===a?v.setHTML(a,e):v.setOuterHTML(i,e)}else e=r.serialize(u),function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n);else{var r=n.firstChild,o=n.lastChild;!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t)}}(o,e,i);!function(){if(p){var n=o.getBody(),r=new zc(v);It.each(v.select("*[data-mce-fragment]"),function(e){for(var t=e.parentNode;t&&t!==n;t=t.parentNode)g[e.nodeName.toLowerCase()]&&r.compare(t,e)&&v.remove(e,!0)})}}(),function(e){var t,n,r;if(e){if(h.scrollIntoView(e),t=function(e){for(var t=o.getBody();e&&e!==t;e=e.parentNode)if("false"===o.dom.getContentEditable(e))return e;return null}(e))return v.remove(e),h.select(t);l=v.createRng(),(f=e.previousSibling)&&3===f.nodeType?(l.setStart(f,f.nodeValue.length),ve.ie||(d=e.nextSibling)&&3===d.nodeType&&(f.appendData(d.data),d.parentNode.removeChild(d))):(l.setStartBefore(e),l.setEndBefore(e)),n=v.getParent(e,v.isBlock),v.remove(e),n&&v.isEmpty(n)&&(o.$(n).empty(),l.setStart(n,0),l.setEnd(n,0),el(n)||n.getAttribute("data-mce-fragment")||!(r=function(e){var t=La.fromRangeStart(e);if(t=Ys(o.getBody()).next(t))return t.toRange()}(l))?v.add(n,v.create("br",{"data-mce-bogus":"1"})):(l=r,v.remove(n))),h.setRng(l)}}(v.get("mce_marker")),E=o.getBody(),It.each(E.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")}),S=o.dom,k=o.selection.getStart(),A.from(S.getParent(k,"td,th")).map(Vn.fromDom).each(Xc),o.fire("SetContent",s),o.addVisual()}},nl=function(e,t){var n,r,o="string"!=typeof(n=t)?(r=It.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}};tl(e,o.content,o.details)};function rl(e,t,n,r,o){return e(n,r)?A.some(n):k.isFunction(o)&&o(n)?A.none():t(n,r,o)}var ol=function(e,t,n){for(var r=e.dom(),o=k.isFunction(n)?n:V.constant(!1);r.parentNode;){r=r.parentNode;var i=Vn.fromDom(r);if(t(i))return A.some(i);if(o(i))break}return A.none()},il=function(e,t){return H.find(e.dom().childNodes,V.compose(t,Vn.fromDom)).map(Vn.fromDom)},al=function(e,r){var o=function(e){for(var t=0;t<e.childNodes.length;t++){if(r(Vn.fromDom(e.childNodes[t])))return A.some(Vn.fromDom(e.childNodes[t]));var n=o(e.childNodes[t]);if(n.isSome())return n}return A.none()};return o(e.dom())},ul={first:function(e){return al(mr.body(),e)},ancestor:ol,closest:function(e,t,n){return rl(function(e){return t(e)},ol,e,t,n)},sibling:function(t,n){var e=t.dom();return e.parentNode?il(Vn.fromDom(e.parentNode),function(e){return!Mr.eq(t,e)&&n(e)}):A.none()},child:il,descendant:al},sl=kr.immutable("sections","settings"),cl=Un.detect().deviceType.isTouch(),ll=["lists","autolink","autosave"],fl={theme:"mobile"},dl=function(e){var t=k.isArray(e)?e.join(" "):e,n=H.map(k.isString(t)?t.split(" "):[],On);return H.filter(n,function(e){return 0<e.length})},ml=function(e,t){return e.sections().hasOwnProperty(t)},pl=function(e,t,n,r){var o,i,a=dl(n.forced_plugins),u=dl(r.plugins),s=e&&ml(t,"mobile")?(o=u,H.filter(o,V.curry(H.contains,ll))):u,c=(i=s,[].concat(dl(a)).concat(dl(i)));return It.extend(r,{plugins:c.join(" ")})},gl=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,p,g,h,v=(o=["mobile"],i=r,a=ir.bifilter(i,function(e,t){return H.contains(o,t)}),sl(a.t,a.f)),y=It.extend(t,n,v.settings(),(p=e,h=(g=v).settings().inline,p&&ml(g,"mobile")&&!h?(l="mobile",f=fl,d=v.sections(),m=d.hasOwnProperty(l)?d[l]:{},It.extend({},f,m)):{}),{validate:!0,content_editable:v.settings().inline,external_plugins:(u=n,s=v.settings(),c=s.external_plugins?s.external_plugins:{},u&&u.external_plugins?It.extend({},u.external_plugins,c):c)});return pl(e,v,n,y)},hl=function(e,t,n){return A.from(t.settings[n]).filter(e)},vl=V.curry(hl,k.isString),yl=function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n;return"hash"===r?(a={},"string"==typeof(i=u)?H.each(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),function(e){var t=e.split("=");1<t.length?a[It.trim(t[0])]=It.trim(t[1]):a[It.trim(t[0])]=It.trim(t)}):a=i,a):"string"===r?hl(k.isString,e,t).getOr(n):"number"===r?hl(k.isNumber,e,t).getOr(n):"boolean"===r?hl(k.isBoolean,e,t).getOr(n):"object"===r?hl(k.isObject,e,t).getOr(n):"array"===r?hl(k.isArray,e,t).getOr(n):"string[]"===r?hl((o=k.isString,function(e){return k.isArray(e)&&H.forall(e,o)}),e,t).getOr(n):"function"===r?hl(k.isFunction,e,t).getOr(n):u},bl=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Cl=function(e,t){var n=t.container(),r=t.offset();return e?Pi(n)?Oo.isText(n.nextSibling)?La(n.nextSibling,0):La.after(n):Mi(t)?La(n,r+1):t:Pi(n)?Oo.isText(n.previousSibling)?La(n.previousSibling,n.previousSibling.data.length):La.before(n):Fi(t)?La(n,r-1):t},xl={isInlineTarget:function(e,t){var n=vl(e,"inline_boundaries_selector").getOr("a[href],code");return Pr.is(Vn.fromDom(t),n)},findRootInline:function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,H.filter(vi.DOM.getParents(i.container(),"*",o),r));return A.from(a[a.length-1])},isRtl:function(e){return"rtl"===vi.DOM.getStyle(e,"direction",!0)||(t=e.textContent,bl.test(t));var t},isAtZwsp:function(e){return Mi(e)||Fi(e)},normalizePosition:Cl,normalizeForwards:V.curry(Cl,!0),normalizeBackwards:V.curry(Cl,!1),hasSameParentBlock:function(e,t,n){var r=ys(t,e),o=ys(n,e);return r&&r===o}},wl=function(e,t){return Mr.contains(e,t)?ul.closest(t,function(e){return ho(e)||yo(e)},(n=e,function(e){return Mr.eq(n,Vn.fromDom(e.dom().parentNode))})):A.none();var n},Nl=function(e){var t,n,r;e.dom.isEmpty(e.getBody())&&(e.setContent(""),n=(t=e).getBody(),r=n.firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},El=function(i,a,u){return ma([Qa.firstPositionIn(u),Qa.lastPositionIn(u)],function(e,t){var n=xl.normalizePosition(!0,e),r=xl.normalizePosition(!1,t),o=xl.normalizePosition(!1,a);return i?Qa.nextPosition(u,o).map(function(e){return e.isEqual(r)&&a.isEqual(n)}).getOr(!1):Qa.prevPosition(u,o).map(function(e){return e.isEqual(n)&&a.isEqual(r)}).getOr(!1)}).getOr(!0)},Sl=function(e,t,n){return ul.ancestor(e,function(e){return Pr.is(e,t)},n)},kl=Sl,Tl=function(e,t){return Pr.one(t,e)},Al=function(e,t,n){return rl(Pr.is,Sl,e,t,n)},Rl=function(e,t,n){return kl(e,t,n).isSome()},_l=function(e,t){return Oo.isText(t)&&/^[ \t\r\n]*$/.test(t.data)&&!1===(n=e,r=t,o=Vn.fromDom(n),i=Vn.fromDom(r),Rl(i,"pre,code",V.curry(Mr.eq,o)));var n,r,o,i},Bl=function(e,t){return Ji(t)&&!1===_l(e,t)||(n=t,Oo.isElement(n)&&"A"===n.nodeName&&n.hasAttribute("name"))||Dl(t);var n},Dl=Oo.hasAttribute("data-mce-bookmark"),Ol=Oo.hasAttribute("data-mce-bogus"),Pl=Oo.hasAttributeValue("data-mce-bogus","all"),Ll=function(e){return function(e){var t,n,r=0;if(Bl(e,e))return!1;if(!(n=e.firstChild))return!0;t=new ao(n,e);do{if(Pl(n))n=t.next(!0);else if(Ol(n))n=t.next();else if(Oo.isBr(n))r++,n=t.next();else{if(Bl(e,n))return!1;n=t.next()}}while(n);return r<=1}(e.dom())},Il=kr.immutable("block","position"),Ml=kr.immutable("from","to"),Fl=function(e,t){var n=Vn.fromDom(e),r=Vn.fromDom(t.container());return wl(n,r).map(function(e){return Il(e,t)})},zl=function(o,i,e){var t=Fl(o,La.fromRangeStart(e)),n=t.bind(function(e){return Qa.fromPosition(i,o,e.position()).bind(function(e){return Fl(o,e).map(function(e){return t=o,n=i,r=e,Oo.isBr(r.position().getNode())&&!1===Ll(r.block())?Qa.positionIn(!1,r.block().dom()).bind(function(e){return e.isEqual(r.position())?Qa.fromPosition(n,t,e).bind(function(e){return Fl(t,e)}):A.some(r)}).getOr(r):r;var t,n,r})})});return ma([t,n],Ml).filter(function(e){return r=e,!1===Mr.eq(r.from().block(),r.to().block())&&(n=e,$r.parent(n.from().block()).bind(function(t){return $r.parent(n.to().block()).filter(function(e){return Mr.eq(t,e)})}).isSome())&&(t=e,!1===Oo.isContentEditableFalse(t.from().block())&&!1===Oo.isContentEditableFalse(t.to().block()));var t,n,r})},Ul=function(e,t,n){return n.collapsed?zl(e,t,n):A.none()},ql=function(e,t,n){return Mr.contains(t,e)?$r.parents(e,function(e){return n(e)||Mr.eq(e,t)}).slice(0,-1):[]},Vl=function(e,t){return ql(e,t,V.constant(!1))},Hl=Vl,jl=function(e,t){return[e].concat(Vl(e,t))},$l=function(e){var t,n,r=(t=e,n=$r.children(t),H.findIndex(n,mo).fold(function(){return n},function(e){return n.slice(0,e)}));return H.each(r,function(e){Hc.remove(e)}),r},Wl=function(e,t){Qa.positionIn(e,t.dom()).each(function(e){var t=e.getNode();Oo.isBr(t)&&Hc.remove(Vn.fromDom(t))})},Kl=function(e,t){var n=jl(t,e);return H.find(n.reverse(),Ll).each(Hc.remove)},Xl=function(o,i){return Mr.contains(i,o)?$r.parent(o).bind(function(e){return Mr.eq(e,i)?A.some(o):(t=i,n=o,r=$r.parents(n,function(e){return Mr.eq(e,t)}),A.from(r[r.length-2]));var t,n,r}):A.none()},Yl=function(n,r,o){if(Ll(o))return Hc.remove(o),Ll(r)&&Kc(r),Qa.firstPositionIn(r.dom());Wl(!0,r),Wl(!1,o);var i=$l(r);return Xl(r,o).fold(function(){Kl(n,r);var e=Qa.lastPositionIn(o.dom());return H.each(i,function(e){Hu.append(o,e)}),e},function(t){var e=Qa.prevPosition(o.dom(),La.before(t.dom()));return H.each(i,function(e){Hu.before(t,e)}),Kl(n,r),e})},Gl=function(e,t,n,r){return t?Yl(e,r,n):Yl(e,n,r)},Jl=function(t,n){var e,r=Vn.fromDom(t.getBody());return(e=Ul(r.dom(),n,t.selection.getRng()).bind(function(e){return Gl(r,n,e.from().block(),e.to().block())})).each(function(e){t.selection.setRng(e.toRange())}),e.isSome()},Ql=function(e,t){var n=Vn.fromDom(t),r=V.curry(Mr.eq,e);return ul.ancestor(n,xo,r).isSome()},Zl=function(e,t){var n,r,o=Qa.prevPosition(e.dom(),La.fromRangeStart(t)).isNone(),i=Qa.nextPosition(e.dom(),La.fromRangeEnd(t)).isNone();return!(Ql(n=e,(r=t).startContainer)||Ql(n,r.endContainer))&&o&&i},ef=function(e){var n,r,o,t,i=Vn.fromDom(e.getBody()),a=e.selection.getRng();return Zl(i,a)?((t=e).setContent(""),t.selection.setCursorLocation(),!0):(n=i,r=e.selection,o=r.getRng(),ma([wl(n,Vn.fromDom(o.startContainer)),wl(n,Vn.fromDom(o.endContainer))],function(e,t){return!1===Mr.eq(e,t)&&(o.deleteContents(),Gl(n,!0,e,t).each(function(e){r.setRng(e.toRange())}),!0)}).getOr(!1))},tf=function(e,t){return!e.selection.isCollapsed()&&ef(e)},nf=function(a){if(!k.isArray(a))throw new Error("cases must be an array");if(0===a.length)throw new Error("there must be at least one case");var u=[],n={};return H.each(a,function(e,r){var t=ir.keys(e);if(1!==t.length)throw new Error("one and only one name per case");var o=t[0],i=e[o];if(n[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!k.isArray(i))throw new Error("case arguments must be an array");u.push(o),n[o]=function(){var e=arguments.length;if(e!==i.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+i.length+" ("+i+"), got "+e);for(var n=new Array(e),t=0;t<n.length;t++)n[t]=arguments[t];return{fold:function(){if(arguments.length!==a.length)throw new Error("Wrong number of arguments to fold. Expected "+a.length+", got "+arguments.length);return arguments[r].apply(null,n)},match:function(e){var t=ir.keys(e);if(u.length!==t.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+t.join(","));if(!H.forall(u,function(e){return H.contains(t,e)}))throw new Error("Not all branches were specified when using match. Specified: "+t.join(", ")+"\nRequired: "+u.join(", "));return e[o].apply(null,n)},log:function(e){console.log(e,{constructors:u,constructor:o,params:n})}}}}),n},rf=nf([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),of=function(e,t,n,r){var o=r.getNode(!1===t);return wl(Vn.fromDom(e),Vn.fromDom(n.getNode())).map(function(e){return Ll(e)?rf.remove(e.dom()):rf.moveToElement(o)}).orThunk(function(){return A.some(rf.moveToElement(o))})},af=function(u,s,c){return Qa.fromPosition(s,u,c).bind(function(e){return a=e.getNode(),xo(Vn.fromDom(a))||yo(Vn.fromDom(a))?A.none():(t=u,o=e,i=function(e){return po(Vn.fromDom(e))&&!bs(r,o,t)},As(!(n=s),r=c).fold(function(){return As(n,o).fold(V.constant(!1),i)},i)?A.none():s&&Oo.isContentEditableFalse(e.getNode())?of(u,s,c,e):!1===s&&Oo.isContentEditableFalse(e.getNode(!0))?of(u,s,c,e):s&&Bs(c)?A.some(rf.moveToPosition(e)):!1===s&&_s(c)?A.some(rf.moveToPosition(e)):A.none());var t,n,r,o,i,a})},uf=function(r,e,o){return i=e,a=o.getNode(!1===i),u=i?"after":"before",Oo.isElement(a)&&a.getAttribute("data-mce-caret")===u?(t=e,n=o.getNode(!1===e),t&&Oo.isContentEditableFalse(n.nextSibling)?A.some(rf.moveToElement(n.nextSibling)):!1===t&&Oo.isContentEditableFalse(n.previousSibling)?A.some(rf.moveToElement(n.previousSibling)):A.none()).fold(function(){return af(r,e,o)},A.some):af(r,e,o).bind(function(e){return t=r,n=o,e.fold(function(e){return A.some(rf.remove(e))},function(e){return A.some(rf.moveToElement(e))},function(e){return bs(n,e,t)?A.none():A.some(rf.moveToPosition(e))});var t,n});var t,n,i,a,u},sf=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===La.isTextPosition(n)&&o===r.parentNode&&i>La.before(r).offset()?La(t.container(),t.offset()-1):t;var n,r,o,i},cf=function(e){return Ji(e.previousSibling)?A.some((t=e.previousSibling,Oo.isText(t)?La(t,t.data.length):La.after(t))):e.previousSibling?Qa.lastPositionIn(e.previousSibling):A.none();var t},lf=function(e){return Ji(e.nextSibling)?A.some((t=e.nextSibling,Oo.isText(t)?La(t,0):La.before(t))):e.nextSibling?Qa.firstPositionIn(e.nextSibling):A.none();var t},ff=function(r,o){return cf(o).orThunk(function(){return lf(o)}).orThunk(function(){return e=r,t=o,n=La.before(t.previousSibling?t.previousSibling:t.parentNode),Qa.prevPosition(e,n).fold(function(){return Qa.nextPosition(e,La.after(t))},A.some);var e,t,n})},df=function(n,r){return lf(r).orThunk(function(){return cf(r)}).orThunk(function(){return e=n,t=r,Qa.nextPosition(e,La.after(t)).fold(function(){return Qa.prevPosition(e,La.before(t))},A.some);var e,t})},mf=function(e,t,n){return(r=e,o=t,i=n,r?df(o,i):ff(o,i)).map(V.curry(sf,n));var r,o,i},pf=function(t,n,e){e.fold(function(){t.focus()},function(e){t.selection.setRng(e.toRange(),n)})},gf=function(e,t){return t&&e.schema.getBlockElements().hasOwnProperty(Zn.name(t))},hf=function(e){if(Ll(e)){var t=Vn.fromHtml('<br data-mce-bogus="1">');return Hc.empty(e),Hu.append(e,t),A.some(La.before(t.dom()))}return A.none()},vf=function(t,n,e){var r,a,o,i=mf(n,t.getBody(),e.dom()),u=ul.ancestor(e,V.curry(gf,t),(r=t.getBody(),function(e){return e.dom()===r})),s=(a=e,o=i,ma([$r.prevSibling(a),$r.nextSibling(a),o],function(e,t,n){var r,o=e.dom(),i=t.dom();return Oo.isText(o)&&Oo.isText(i)?(r=o.data.length,o.appendData(i.data),Hc.remove(t),Hc.remove(a),n.container()===i?La(o,r):n):(Hc.remove(a),n)}).orThunk(function(){return Hc.remove(a),o}));t.dom.isEmpty(t.getBody())?(t.setContent(""),t.selection.setCursorLocation()):u.bind(hf).fold(function(){pf(t,n,s)},function(e){pf(t,n,A.some(e))})},yf=function(a,u){var e,t,n,r,o;return(e=a.getBody(),t=u,n=a.selection.getRng(),r=Ss(t?1:-1,e,n),o=La.fromRangeStart(r),!1===t&&Bs(o)?A.some(rf.remove(o.getNode(!0))):t&&_s(o)?A.some(rf.remove(o.getNode())):uf(e,t,o)).map(function(e){return e.fold((o=a,i=u,function(e){return o._selectionOverrides.hideFakeCaret(),vf(o,i,Vn.fromDom(e)),!0}),(n=a,r=u,function(e){var t=r?La.before(e):La.after(e);return n.selection.setRng(t.toRange()),!0}),(t=a,function(e){return t.selection.setRng(e.toRange()),!0}));var t,n,r,o,i}).getOr(!1)},bf=function(e,t){var n,r=e.selection.getNode();return!!Oo.isContentEditableFalse(r)&&(n=Vn.fromDom(e.getBody()),H.each(hu(n,".mce-offscreen-selection"),Hc.remove),vf(e,t,Vn.fromDom(e.selection.getNode())),Nl(e),!0)},Cf=function(e,t){return e.selection.isCollapsed()?yf(e,t):bf(e,t)},xf=function(e){var t,n=function(e,t){for(;t&&t!==e;){if(Oo.isContentEditableTrue(t)||Oo.isContentEditableFalse(t))return t;t=t.parentNode}return null}(e.getBody(),e.selection.getNode());return Oo.isContentEditableTrue(n)&&e.dom.isBlock(n)&&e.dom.isEmpty(n)&&(t=e.dom.create("br",{"data-mce-bogus":"1"}),e.dom.setHTML(n,""),n.appendChild(t),e.selection.setRng(La.before(t).toRange())),!0},wf=Oo.isText,Nf=function(e){return wf(e)&&e.data[0]===Ri},Ef=function(e){return wf(e)&&e.data[e.data.length-1]===Ri},Sf=function(e){return e.ownerDocument.createTextNode(Ri)},kf=function(e,t){return e?function(e){if(wf(e.previousSibling))return Ef(e.previousSibling)||e.previousSibling.appendData(Ri),e.previousSibling;if(wf(e))return Nf(e)||e.insertData(0,Ri),e;var t=Sf(e);return e.parentNode.insertBefore(t,e),t}(t):function(e){if(wf(e.nextSibling))return Nf(e.nextSibling)||e.nextSibling.insertData(0,Ri),e.nextSibling;if(wf(e))return Ef(e)||e.appendData(Ri),e;var t=Sf(e);return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},Tf=V.curry(kf,!0),Af=V.curry(kf,!1),Rf=function(e,t){return Oo.isText(e.container())?kf(t,e.container()):kf(t,e.getNode())},_f=function(e,t){var n=t.get();return n&&e.container()===n&&Pi(n)},Bf=function(n,e){return e.fold(function(e){$a.remove(n.get());var t=Tf(e);return n.set(t),A.some(La(t,t.length-1))},function(e){return Qa.firstPositionIn(e).map(function(e){if(_f(e,n))return La(n.get(),1);$a.remove(n.get());var t=Rf(e,!0);return n.set(t),La(t,1)})},function(e){return Qa.lastPositionIn(e).map(function(e){if(_f(e,n))return La(n.get(),n.get().length-1);$a.remove(n.get());var t=Rf(e,!1);return n.set(t),La(t,t.length-1)})},function(e){$a.remove(n.get());var t=Af(e);return n.set(t),A.some(La(t,1))})},Df=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t);if(r.isSome())return r}return A.none()},Of=nf([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Pf=function(e,t){var n=ys(t,e);return n||e},Lf=function(e,t,n){var r=xl.normalizeForwards(n),o=Pf(t,r.container());return xl.findRootInline(e,o,r).fold(function(){return Qa.nextPosition(o,r).bind(V.curry(xl.findRootInline,e,o)).map(function(e){return Of.before(e)})},A.none)},If=function(e,t){return null===Tc(e,t)},Mf=function(e,t,n){return xl.findRootInline(e,t,n).filter(V.curry(If,t))},Ff=function(e,t,n){var r=xl.normalizeBackwards(n);return Mf(e,t,r).bind(function(e){return Qa.prevPosition(e,r).isNone()?A.some(Of.start(e)):A.none()})},zf=function(e,t,n){var r=xl.normalizeForwards(n);return Mf(e,t,r).bind(function(e){return Qa.nextPosition(e,r).isNone()?A.some(Of.end(e)):A.none()})},Uf=function(e,t,n){var r=xl.normalizeBackwards(n),o=Pf(t,r.container());return xl.findRootInline(e,o,r).fold(function(){return Qa.prevPosition(o,r).bind(V.curry(xl.findRootInline,e,o)).map(function(e){return Of.after(e)})},A.none)},qf=function(e){return!1===xl.isRtl(Hf(e))},Vf=function(e,t,n){return Df([Lf,Ff,zf,Uf],[e,t,n]).filter(qf)},Hf=function(e){return e.fold(V.identity,V.identity,V.identity,V.identity)},jf=function(e){return e.fold(V.constant("before"),V.constant("start"),V.constant("end"),V.constant("after"))},$f=function(e){return e.fold(Of.before,Of.before,Of.after,Of.after)},Wf=function(n,e,r,t,o,i){return ma([xl.findRootInline(e,r,t),xl.findRootInline(e,r,o)],function(e,t){return e!==t&&xl.hasSameParentBlock(r,e,t)?Of.after(n?e:t):i}).getOr(i)},Kf=function(e,r){return e.fold(V.constant(!0),function(e){return n=r,!(jf(t=e)===jf(n)&&Hf(t)===Hf(n));var t,n})},Xf=function(e,t){return e?t.fold(V.compose(A.some,Of.start),A.none,V.compose(A.some,Of.after),A.none):t.fold(A.none,V.compose(A.some,Of.before),A.none,V.compose(A.some,Of.end))},Yf=function(a,u,s,c){var e=xl.normalizePosition(a,c),l=Vf(u,s,e);return Vf(u,s,e).bind(V.curry(Xf,a)).orThunk(function(){return t=a,n=u,r=s,o=l,e=c,i=xl.normalizePosition(t,e),Qa.fromPosition(t,r,i).map(V.curry(xl.normalizePosition,t)).fold(function(){return o.map($f)},function(e){return Vf(n,r,e).map(V.curry(Wf,t,n,r,i,e)).filter(V.curry(Kf,o))}).filter(qf);var t,n,r,o,e,i})},Gf=Vf,Jf=Yf,Qf=(V.curry(Yf,!1),V.curry(Yf,!0),$f),Zf=function(e){return e.fold(Of.start,Of.start,Of.end,Of.end)},ed=function(e){return k.isFunction(e.selection.getSel().modify)},td=function(e,t,n){var r=e?1:-1;return t.setRng(La(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0},nd=function(e,t){var n=t.selection.getRng(),r=e?La.fromRangeEnd(n):La.fromRangeStart(n);return!!ed(t)&&(e&&Mi(r)?td(!0,t.selection,r):!(e||!Fi(r))&&td(!1,t.selection,r))},rd=function(e,t){var n=e.dom.createRng();n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},od=function(e){return!1!==e.settings.inline_boundaries},id=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},ad=function(t,e,n){return Bf(e,n).map(function(e){return rd(t,e),n})},ud=function(e,t,n){return function(){return!!od(t)&&nd(e,t)}},sd={move:function(a,u,s){return function(){return!!od(a)&&(t=a,n=u,e=s,r=t.getBody(),o=La.fromRangeStart(t.selection.getRng()),i=V.curry(xl.isInlineTarget,t),Jf(e,i,r,o).bind(function(e){return ad(t,n,e)})).isSome();var t,n,e,r,o,i}},moveNextWord:V.curry(ud,!0),movePrevWord:V.curry(ud,!1),setupSelectedState:function(a){var u=ns(null),s=V.curry(xl.isInlineTarget,a);return a.on("NodeChange",function(e){var t,n,r,o,i;od(a)&&(t=s,n=a.dom,r=e.parents,o=H.filter(n.select('*[data-mce-selected="inline-boundary"]'),t),i=H.filter(r,t),H.each(H.difference(o,i),V.curry(id,!1)),H.each(H.difference(i,o),V.curry(id,!0)),function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=La.fromRangeStart(e.selection.getRng());La.isTextPosition(n)&&!1===xl.isAtZwsp(n)&&(rd(e,$a.removeAndReposition(t.get(),n)),t.set(null))}}(a,u),function(n,r,o,e){if(r.selection.isCollapsed()){var t=H.filter(e,n);H.each(t,function(e){var t=La.fromRangeStart(r.selection.getRng());Gf(n,r.getBody(),t).bind(function(e){return ad(r,o,e)})})}}(s,a,u,e.parents))}),u},setCaretPosition:rd},cd=function(t,n){return function(e){return Bf(n,e).map(function(e){return sd.setCaretPosition(t,e),!0}).getOr(!1)}},ld=function(r,o,i,a){var u=r.getBody(),s=V.curry(xl.isInlineTarget,r);r.undoManager.ignore(function(){var e,t,n;r.selection.setRng((e=i,t=a,(n=document.createRange()).setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n)),r.execCommand("Delete"),Gf(s,u,La.fromRangeStart(r.selection.getRng())).map(Zf).map(cd(r,o))}),r.nodeChanged()},fd=function(n,r,i,o){var e,t,a=(e=n.getBody(),t=o.container(),ys(t,e)||e),u=V.curry(xl.isInlineTarget,n),s=Gf(u,a,o);return s.bind(function(e){return i?e.fold(V.constant(A.some(Zf(e))),A.none,V.constant(A.some(Qf(e))),A.none):e.fold(A.none,V.constant(A.some(Qf(e))),A.none,V.constant(A.some(Zf(e))))}).map(cd(n,r)).getOrThunk(function(){var t=Qa.navigate(i,a,o),e=t.bind(function(e){return Gf(u,a,e)});return s.isSome()&&e.isSome()?xl.findRootInline(u,a,o).map(function(e){return o=e,!!ma([Qa.firstPositionIn(o),Qa.lastPositionIn(o)],function(e,t){var n=xl.normalizePosition(!0,e),r=xl.normalizePosition(!1,t);return Qa.nextPosition(o,n).map(function(e){return e.isEqual(r)}).getOr(!0)}).getOr(!0)&&(vf(n,i,Vn.fromDom(e)),!0);var o}).getOr(!1):e.bind(function(e){return t.map(function(e){return i?ld(n,r,o,e):ld(n,r,e,o),!0})}).getOr(!1)})},dd=function(e,t,n){if(e.selection.isCollapsed()&&!1!==e.settings.inline_boundaries){var r=La.fromRangeStart(e.selection.getRng());return fd(e,t,n,r)}return!1},md=kr.immutable("start","end"),pd=kr.immutable("rng","table","cells"),gd=nf([{removeTable:["element"]},{emptyCells:["cells"]}]),hd=function(e,t){return Al(Vn.fromDom(e),"td,th",t)},vd=function(e,t){return kl(e,"table",t)},yd=function(e){return!1===Mr.eq(e.start(),e.end())},bd=function(e,n){return vd(e.start(),n).bind(function(t){return vd(e.end(),n).bind(function(e){return Mr.eq(t,e)?A.some(t):A.none()})})},Cd=function(e){return hu(e,"td,th")},xd=function(r,e){var t=hd(e.startContainer,r),n=hd(e.endContainer,r);return e.collapsed?A.none():ma([t,n],md).fold(function(){return t.fold(function(){return n.bind(function(t){return vd(t,r).bind(function(e){return H.head(Cd(e)).map(function(e){return md(e,t)})})})},function(t){return vd(t,r).bind(function(e){return H.last(Cd(e)).map(function(e){return md(t,e)})})})},function(e){return wd(r,e)?A.none():(n=r,vd((t=e).start(),n).bind(function(e){return H.last(Cd(e)).map(function(e){return md(t.start(),e)})}));var t,n})},wd=function(e,t){return bd(t,e).isSome()},Nd=function(e,t){var n,r,o,i,a,u=(n=e,V.curry(Mr.eq,n));return(r=t,o=u,i=hd(r.startContainer,o),a=hd(r.endContainer,o),ma([i,a],md).filter(yd).filter(function(e){return wd(o,e)}).orThunk(function(){return xd(o,r)})).bind(function(e){return bd(t=e,u).map(function(e){return pd(t,e,Cd(e))});var t})},Ed=function(e,t){return H.findIndex(e,function(e){return Mr.eq(e,t)})},Sd=function(n){return(r=n,ma([Ed(r.cells(),r.rng().start()),Ed(r.cells(),r.rng().end())],function(e,t){return r.cells().slice(e,t+1)})).map(function(e){var t=n.cells();return e.length===t.length?gd.removeTable(n.table()):gd.emptyCells(e)});var r},kd=function(e,t){return Nd(e,t).bind(Sd)},Td=function(e){var t=[];if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));return t},Ad=Td,Rd=function(e){return H.bind(e,function(e){var t=aa(e);return t?[Vn.fromDom(t)]:[]})},_d=function(e){return 1<Td(e).length},Bd=function(e){return H.filter(Rd(e),xo)},Dd=function(e){return hu(e,"td[data-mce-selected],th[data-mce-selected]")},Od=function(e,t){var n=Dd(t),r=Bd(e);return 0<n.length?n:r},Pd=Od,Ld=function(e){return Od(Ad(e.selection.getSel()),Vn.fromDom(e.getBody()))},Id=function(e,t){return H.each(t,Kc),e.selection.setCursorLocation(t[0].dom(),0),!0},Md=function(e,t){return vf(e,!1,t),!0},Fd=function(n,e,r,t){return Ud(e,t).fold(function(){return t=n,kd(e,r).map(function(e){return e.fold(V.curry(Md,t),V.curry(Id,t))});var t},function(e){return qd(n,e)}).getOr(!1)},zd=function(e,t){return H.find(jl(t,e),xo)},Ud=function(e,t){return H.find(jl(t,e),function(e){return"caption"===Zn.name(e)})},qd=function(e,t){return Kc(t),e.selection.setCursorLocation(t.dom(),0),A.some(!0)},Vd=function(u,s,c,l,f){return Qa.navigate(c,u.getBody(),f).bind(function(e){return r=l,o=c,i=f,a=e,Qa.firstPositionIn(r.dom()).bind(function(t){return Qa.lastPositionIn(r.dom()).map(function(e){return o?i.isEqual(t)&&a.isEqual(e):i.isEqual(e)&&a.isEqual(t)})}).getOr(!0)?qd(u,l):(t=l,n=e,Ud(s,Vn.fromDom(n.getNode())).map(function(e){return!1===Mr.eq(e,t)}));var t,n,r,o,i,a}).or(A.some(!0))},Hd=function(a,u,s,e){var c=La.fromRangeStart(a.selection.getRng());return zd(s,e).bind(function(e){return Ll(e)?qd(a,e):(t=a,n=s,r=u,o=e,i=c,Qa.navigate(r,t.getBody(),i).bind(function(e){return zd(n,Vn.fromDom(e.getNode())).map(function(e){return!1===Mr.eq(e,o)})}));var t,n,r,o,i})},jd=function(a,u,e){var s=Vn.fromDom(a.getBody());return Ud(s,e).fold(function(){return Hd(a,u,s,e)},function(e){return t=a,n=u,r=s,o=e,i=La.fromRangeStart(t.selection.getRng()),Ll(o)?qd(t,o):Vd(t,r,n,o,i);var t,n,r,o,i}).getOr(!1)},$d=function(e,t){var n,r,o,i,a,u=Vn.fromDom(e.selection.getStart(!0)),s=Ld(e);return e.selection.isCollapsed()&&0===s.length?jd(e,t,u):(n=e,r=u,o=Vn.fromDom(n.getBody()),i=n.selection.getRng(),0!==(a=Ld(n)).length?Id(n,a):Fd(n,o,i,r))},Wd=function(e,t){e.getDoc().execCommand(t,!1,null)},Kd=function(e){Cf(e,!1)||dd(e,!1)||Jl(e,!1)||$d(e)||tf(e,!1)||(Wd(e,"Delete"),Nl(e))},Xd=function(e){Cf(e,!0)||dd(e,!0)||Jl(e,!0)||$d(e)||tf(e,!0)||Wd(e,"ForwardDelete")},Yd=function(s){return function(u,e){return A.from(e).map(Vn.fromDom).filter(Zn.isElement).bind(function(e){return(r=s,o=u,i=e.dom(),a=function(e){return Cr(e,r)},ul.closest(Vn.fromDom(i),function(e){return a(e).isSome()},function(e){return Mr.eq(Vn.fromDom(o),e)}).bind(a)).or((t=s,n=e.dom(),A.from(vi.DOM.getStyle(n,t,!0))));var t,n,r,o,i,a}).getOr("")}},Gd={getFontSize:Yd("font-size"),getFontFamily:V.compose(function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")},Yd("font-family")),toPt:function(e,t){return/[0-9.]+px$/.test(e)?(n=72*parseInt(e,10)/96,r=t||0,o=Math.pow(10,r),Math.round(n*o)/o+"pt"):e;var n,r,o}},Jd=function(e){return Qa.firstPositionIn(e.getBody()).map(function(e){var t=e.container();return Oo.isText(t)?t.parentNode:t})},Qd=function(o){return A.from(o.selection.getRng()).bind(function(e){var t,n,r=o.getBody();return n=r,(t=e).startContainer===n&&0===t.startOffset?A.none():A.from(o.selection.getStart(!0))})},Zd=function(e,t){if(/^[0-9\.]+$/.test(t)){var n=parseInt(t,10);if(1<=n&&n<=7){var r=zu(e),o=Uu(e);return o?o[n-1]||t:r[n-1]||t}return t}return t},em=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},tm=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(e,t,n)},nm=function(e,t,n){return tm(e,t,function(e){return e.nodeName===n})},rm=function(e){return e&&"TABLE"===e.nodeName},om=function(e,t,n){for(var r=new ao(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(Oo.isBr(t))return!0},im=function(e,t,n,r,o){var i,a,u,s,c,l,f=e.getRoot(),d=e.schema.getNonEmptyElements();if(u=e.getParent(o.parentNode,e.isBlock)||f,r&&Oo.isBr(o)&&t&&e.isEmpty(u))return A.some(Da(o.parentNode,e.nodeIndex(o)));for(i=new ao(o,u);s=i[r?"prev":"next"]();){if("false"===e.getContentEditableParent(s)||(l=f,Li(c=s)&&!1===tm(c,l,kc)))return A.none();if(Oo.isText(s)&&0<s.nodeValue.length)return!1===nm(s,f,"A")?A.some(Da(s,r?s.nodeValue.length:0)):A.none();if(e.isBlock(s)||d[s.nodeName.toLowerCase()])return A.none();a=s}return n&&a?A.some(Da(a,0)):A.none()},am=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,p=e.getRoot(),g=!1;if(o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"],l=Oo.isElement(o)&&i===o.childNodes.length,s=e.schema.getNonEmptyElements(),c=n,Li(o))return A.none();if(Oo.isElement(o)&&i>o.childNodes.length-1&&(c=!1),Oo.isDocument(o)&&(o=p,i=0),o===p){if(c&&(u=o.childNodes[0<i?i-1:0])){if(Li(u))return A.none();if(s[u.nodeName]||rm(u))return A.none()}if(o.hasChildNodes()){if(i=Math.min(!c&&0<i?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=Oo.isText(o)&&l?o.data.length:0,!t&&o===p.lastChild&&rm(o))return A.none();if(function(e,t){for(;t&&t!==e;){if(Oo.isContentEditableFalse(t))return!0;t=t.parentNode}return!1}(p,o)||Li(o))return A.none();if(o.hasChildNodes()&&!1===rm(o)){a=new ao(u=o,p);do{if(Oo.isContentEditableFalse(u)||Li(u)){g=!1;break}if(Oo.isText(u)&&0<u.nodeValue.length){i=c?0:u.nodeValue.length,o=u,g=!0;break}if(s[u.nodeName.toLowerCase()]&&(!(f=u)||!/^(TD|TH|CAPTION)$/.test(f.nodeName))){i=e.nodeIndex(u),o=u.parentNode,c||i++,g=!0;break}}while(u=c?a.next():a.prev())}}}return t&&(Oo.isText(o)&&0===i&&im(e,l,t,!0,o).each(function(e){o=e.container(),i=e.offset(),g=!0}),Oo.isElement(o)&&((u=o.childNodes[i])||(u=o.childNodes[i-1]),!u||!Oo.isBr(u)||(m="A",(d=u).previousSibling&&d.previousSibling.nodeName===m)||om(e,u,!1)||om(e,u,!0)||im(e,l,t,!0,u).each(function(e){o=e.container(),i=e.offset(),g=!0}))),c&&!t&&Oo.isText(o)&&i===o.nodeValue.length&&im(e,l,t,!1,o).each(function(e){o=e.container(),i=e.offset(),g=!0}),g?A.some(Da(o,i)):A.none()},um=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=Da.fromRangeStart(t);return am(e,n,!0,r).each(function(e){n&&Da.isAbove(o,e)||r.setStart(e.container(),e.offset())}),n||am(e,n,!1,r).each(function(e){r.setEnd(e.container(),e.offset())}),n&&r.collapse(!0),em(t,r)?A.none():A.some(r)},sm=function(e,t,n){var r=e.create("span",{},"&nbsp;");n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},cm=function(e,t,n,r){var o=e.createRng();r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},lm=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng();um(i,a).each(function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)});var u=a.startOffset,s=a.startContainer;if(1===s.nodeType&&s.hasChildNodes()){var c=u>s.childNodes.length-1;s=s.childNodes[Math.min(u,s.childNodes.length-1)]||s,u=c&&3===s.nodeType?s.nodeValue.length:0}var l=i.getParent(s,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=t&&t.ctrlKey;"LI"!==d||m||(l=f),s&&3===s.nodeType&&u>=s.nodeValue.length&&(function(e,t,n){for(var r,o=new ao(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,s,l)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),a.insertNode(n),sm(i,o,n),cm(i,o,n,r),e.undoManager.add()},fm=function(e,t){var n=Vn.fromTag("br");Hu.before(Vn.fromDom(t),n),e.undoManager.add()},dm=function(e,t){mm(e.getBody(),t)||Hu.after(Vn.fromDom(t),Vn.fromTag("br"));var n=Vn.fromTag("br");Hu.after(Vn.fromDom(t),n),sm(e.dom,e.selection,n.dom()),cm(e.dom,e.selection,n.dom(),!1),e.undoManager.add()},mm=function(e,t){return n=La.after(t),!!Oo.isBr(n.getNode())||Qa.nextPosition(e,La.after(t)).map(function(e){return Oo.isBr(e.getNode())}).getOr(!1);var n},pm=function(e){return e&&"A"===e.nodeName&&"href"in e},gm=function(e){return e.fold(V.constant(!1),pm,pm,V.constant(!1))},hm=function(e,t){t.fold(V.noop,V.curry(fm,e),V.curry(dm,e),V.noop)},vm=function(e,t){var n,r,o,i=(n=e,r=V.curry(xl.isInlineTarget,n),o=La.fromRangeStart(n.selection.getRng()),Gf(r,n.getBody(),o).filter(gm));i.isSome()?i.each(V.curry(hm,e)):lm(e,t)},ym=nf([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),bm=(ym.before,ym.on,ym.after,function(e){return e.fold(V.identity,V.identity,V.identity)}),Cm=nf([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),xm=kr.immutable("start","soffset","finish","foffset"),wm={domRange:Cm.domRange,relative:Cm.relative,exact:Cm.exact,exactFromRange:function(e){return Cm.exact(e.start(),e.soffset(),e.finish(),e.foffset())},range:xm,getWin:function(e){var t=e.match({domRange:function(e){return Vn.fromDom(e.startContainer)},relative:function(e,t){return bm(e)},exact:function(e,t,n,r){return e}});return $r.defaultView(t)}},Nm=Un.detect().browser,Em=function(e,t){var n=Zn.isText(t)?$c(t).length:$r.children(t).length+1;return n<e?n:e<0?0:e},Sm=function(e){return wm.range(e.start(),Em(e.soffset(),e.start()),e.finish(),Em(e.foffset(),e.finish()))},km=function(e,t){return Mr.contains(e,t)||Mr.eq(e,t)},Tm=function(t){return function(e){return km(t,e.start())&&km(t,e.finish())}},Am=function(e){return!0===e.inline||Nm.isIE()},Rm=function(e){return wm.range(Vn.fromDom(e.startContainer),e.startOffset,Vn.fromDom(e.endContainer),e.endOffset)},_m=function(e){var t=e.getSelection();return(t&&0!==t.rangeCount?A.from(t.getRangeAt(0)):A.none()).map(Rm)},Bm=function(e){var t=$r.defaultView(e);return _m(t.dom()).filter(Tm(e))},Dm=function(e,t){return A.from(t).filter(Tm(e)).map(Sm)},Om=function(e){var t=document.createRange();try{return t.setStart(e.start().dom(),e.soffset()),t.setEnd(e.finish().dom(),e.foffset()),A.some(t)}catch(n){return A.none()}},Pm=function(e){return(e.bookmark?e.bookmark:A.none()).bind(V.curry(Dm,Vn.fromDom(e.getBody()))).bind(Om)},Lm=function(e){var t=Am(e)?Bm(Vn.fromDom(e.getBody())):A.none();e.bookmark=t.isSome()?t:e.bookmark},Im=function(t){Pm(t).each(function(e){t.selection.setRng(e)})},Mm=Pm,Fm=function(e,t){var n=e.settings,r=e.dom,o=e.selection,i=e.formatter,a=/[a-z%]+$/i.exec(n.indentation)[0],u=parseInt(n.indentation,10),s=e.getParam("indent_use_margin",!1);e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||(n.forced_root_block||r.getParent(o.getNode(),r.isBlock)||i.apply("div"),H.each(o.getSelectedBlocks(),function(e){return function(e,t,n,r,o,i){if("false"!==e.getContentEditable(i)&&"LI"!==i.nodeName){var a=n?"margin":"padding";if(a="TABLE"===i.nodeName?"margin":a,a+="rtl"===e.getStyle(i,"direction",!0)?"Right":"Left","outdent"===t){var u=Math.max(0,parseInt(i.style[a]||0,10)-r);e.setStyle(i,a,u?u+o:"")}else u=parseInt(i.style[a]||0,10)+r+o,e.setStyle(i,a,u)}}(r,t,s,u,a,e)}))},zm=It.each,Um=It.extend,qm=It.map,Vm=It.inArray;function Hm(s){var o,i,a,t,c={state:{},exec:{},value:{}},n=s.settings;s.on("PreInit",function(){o=s.dom,i=s.selection,n=s.settings,a=s.formatter});var r=function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.state[e])return t(e);try{return s.getDoc().queryCommandState(e)}catch(n){}return!1}},e=function(e,n){n=n||"exec",zm(e,function(t,e){zm(e.toLowerCase().split(","),function(e){c[n][e]=t})})},u=function(e,t,n){e=e.toLowerCase(),c.value[e]=function(){return t.call(n||s)}};Um(this,{execCommand:function(t,n,r,e){var o,i,a=!1;if(!s.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t)||e&&e.skip_focus?Im(s):s.focus(),(e=s.fire("BeforeExecCommand",{command:t,ui:n,value:r})).isDefaultPrevented())return!1;if(i=t.toLowerCase(),o=c.exec[i])return o(i,n,r),s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;if(zm(s.plugins,function(e){if(e.execCommand&&e.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!(a=!0)}),a)return a;if(s.theme&&s.theme.execCommand&&s.theme.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;try{a=s.getDoc().execCommand(t,n,r)}catch(u){}return!!a&&(s.fire("ExecCommand",{command:t,ui:n,value:r}),!0)}},queryCommandState:r,queryCommandValue:function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.value[e])return t(e);try{return s.getDoc().queryCommandValue(e)}catch(n){}}},queryCommandSupported:function(e){if(e=e.toLowerCase(),c.exec[e])return!0;try{return s.getDoc().queryCommandSupported(e)}catch(t){}return!1},addCommands:e,addCommand:function(e,o,i){e=e.toLowerCase(),c.exec[e]=function(e,t,n,r){return o.call(i||s,t,n,r)}},addQueryStateHandler:function(e,t,n){e=e.toLowerCase(),c.state[e]=function(){return t.call(n||s)}},addQueryValueHandler:u,hasCustomCommand:function(e){return e=e.toLowerCase(),!!c.exec[e]}});var l=function(e,t,n){return t===undefined&&(t=!1),n===undefined&&(n=null),s.getDoc().execCommand(e,t,n)},f=function(e){return a.match(e)},d=function(e,t){a.toggle(e,t?{value:t}:undefined),s.nodeChanged()},m=function(e){t=i.getBookmark(e)},p=function(){i.moveToBookmark(t)};e({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){s.undoManager.add()},"Cut,Copy,Paste":function(e){var t,n=s.getDoc();try{l(e)}catch(o){t=!0}if("paste"!==e||n.queryCommandEnabled(e)||(t=!0),t||!n.queryCommandSupported(e)){var r=s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");ve.mac&&(r=r.replace(/Ctrl\+/g,"\u2318+")),s.notificationManager.open({text:r,type:"error"})}},unlink:function(){if(i.isCollapsed()){var e=s.dom.getParent(s.selection.getStart(),"a");e&&s.dom.remove(e,!0)}else a.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"===t&&(t="justify"),zm("left,center,right,justify".split(","),function(e){t!==e&&a.remove("align"+e)}),"none"!==t&&d("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;l(e),(t=o.getParent(i.getNode(),"ol,ul"))&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(m(),o.split(n,t),p()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){d(e)},"ForeColor,HiliteColor":function(e,t,n){d(e,n)},FontName:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontname",{value:Zd(r,o)}),r.nodeChanged()},FontSize:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontsize",{value:Zd(r,o)}),r.nodeChanged()},RemoveFormat:function(e){a.remove(e)},mceBlockQuote:function(){d("blockquote")},FormatBlock:function(e,t,n){return d(n||"p")},mceCleanup:function(){var e=i.getBookmark();s.setContent(s.getContent()),i.moveToBookmark(e)},mceRemoveNode:function(e,t,n){var r=n||i.getNode();r!==s.getBody()&&(m(),s.dom.remove(r,!0),p())},mceSelectNodeDepth:function(e,t,n){var r=0;o.getParent(i.getNode(),function(e){if(1===e.nodeType&&r++===n)return i.select(e),!1},s.getBody())},mceSelectNode:function(e,t,n){i.select(n)},mceInsertContent:function(e,t,n){nl(s,n)},mceInsertRawHTML:function(e,t,n){var r=s.getContent();i.setContent("tiny_mce_marker"),s.setContent(r.replace(/tiny_mce_marker/g,function(){return n}))},mceToggleFormat:function(e,t,n){d(n)},mceSetContent:function(e,t,n){s.setContent(n)},"Indent,Outdent":function(e){Fm(s,e)},mceRepaint:function(){},InsertHorizontalRule:function(){s.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){s.hasVisual=!s.hasVisual,s.addVisual()},mceReplaceContent:function(e,t,n){s.execCommand("mceInsertContent",!1,n.replace(/\{\$selection\}/g,i.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=o.getParent(i.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||a.remove("link"),n.href&&a.apply("link",n,r)},selectAll:function(){var e=o.getParent(i.getStart(),Oo.isContentEditableTrue);if(e){var t=o.createRng();t.selectNodeContents(e),i.setRng(t)}},"delete":function(){Kd(s)},forwardDelete:function(){Xd(s)},mceNewDocument:function(){s.setContent("")},InsertLineBreak:function(e,t,n){return vm(s,n),!0}});var g=function(n){return function(){var e=i.isCollapsed()?[o.getParent(i.getNode(),o.isBlock)]:i.getSelectedBlocks(),t=qm(e,function(e){return!!a.matchNode(e,n)});return-1!==Vm(t,!0)}};e({JustifyLeft:g("alignleft"),JustifyCenter:g("aligncenter"),JustifyRight:g("alignright"),JustifyFull:g("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return f(e)},mceBlockQuote:function(){return f("blockquote")},Outdent:function(){var e;if(n.inline_styles){if((e=o.getParent(i.getStart(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0;if((e=o.getParent(i.getEnd(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0}return r("InsertUnorderedList")||r("InsertOrderedList")||!n.inline_styles&&!!o.getParent(i.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=o.getParent(i.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),e({Undo:function(){s.undoManager.undo()},Redo:function(){s.undoManager.redo()}}),u("FontName",function(){return Qd(t=s).fold(function(){return Jd(t).map(function(e){return Gd.getFontFamily(t.getBody(),e)}).getOr("")},function(e){return Gd.getFontFamily(t.getBody(),e)});var t},this),u("FontSize",function(){return Qd(t=s).fold(function(){return Jd(t).map(function(e){return Gd.getFontSize(t.getBody(),e)}).getOr("")},function(e){return Gd.getFontSize(t.getBody(),e)});var t},this)}var jm=It.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," "),$m=function(a){var u,s,c=this,l={},f=function(){return!1},d=function(){return!0};u=(a=a||{}).scope||c,s=a.toggleEvent||f;var r=function(e,t,n,r){var o,i,a;if(!1===t&&(t=f),t)for(t={func:t},r&&It.extend(t,r),a=(i=e.toLowerCase().split(" ")).length;a--;)e=i[a],(o=l[e])||(o=l[e]=[],s(e,!0)),n?o.unshift(t):o.push(t);return c},m=function(e,t){var n,r,o,i,a;if(e)for(n=(i=e.toLowerCase().split(" ")).length;n--;){if(e=i[n],r=l[e],!e){for(o in l)s(o,!1),delete l[o];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),l[e]=r);else r.length=0;r.length||(s(e,!1),delete l[e])}}else{for(e in l)s(e,!1);l={}}return c};c.fire=function(e,t){var n,r,o,i;if(e=e.toLowerCase(),(t=t||{}).type=e,t.target||(t.target=u),t.preventDefault||(t.preventDefault=function(){t.isDefaultPrevented=d},t.stopPropagation=function(){t.isPropagationStopped=d},t.stopImmediatePropagation=function(){t.isImmediatePropagationStopped=d},t.isDefaultPrevented=f,t.isPropagationStopped=f,t.isImmediatePropagationStopped=f),a.beforeFire&&a.beforeFire(t),n=l[e])for(r=0,o=n.length;r<o;r++){if((i=n[r]).once&&m(e,i.func),t.isImmediatePropagationStopped())return t.stopPropagation(),t;if(!1===i.func.call(u,t))return t.preventDefault(),t}return t},c.on=r,c.off=m,c.once=function(e,t,n){return r(e,t,n,{once:!0})},c.has=function(e){return e=e.toLowerCase(),!(!l[e]||0===l[e].length)}};$m.isNative=function(e){return!!jm[e.toLowerCase()]};var Wm,Km=function(n){return n._eventDispatcher||(n._eventDispatcher=new $m({scope:n,toggleEvent:function(e,t){$m.isNative(e)&&n.toggleNativeEvent&&n.toggleNativeEvent(e,t)}})),n._eventDispatcher},Xm={fire:function(e,t,n){if(this.removed&&"remove"!==e)return t;if(t=Km(this).fire(e,t,n),!1!==n&&this.parent)for(var r=this.parent();r&&!t.isPropagationStopped();)r.fire(e,t,!1),r=r.parent();return t},on:function(e,t,n){return Km(this).on(e,t,n)},off:function(e,t){return Km(this).off(e,t)},once:function(e,t){return Km(this).once(e,t)},hasEventListeners:function(e){return Km(this).has(e)}},Ym=function(e,t){var n=lr.get(e,t);return n===undefined||""===n?[]:n.split(" ")},Gm=Ym,Jm=function(e,t,n){var r=Ym(e,t).concat([n]);lr.set(e,t,r.join(" "))},Qm=function(e,t,n){var r=H.filter(Ym(e,t),function(e){return e!==n});0<r.length?lr.set(e,t,r.join(" ")):lr.remove(e,t)},Zm=function(e){return Gm(e,"class")},ep=function(e,t){return Jm(e,"class",t)},tp=function(e,t){return Qm(e,"class",t)},np=Zm,rp=ep,op=tp,ip=function(e,t){H.contains(Zm(e),t)?tp(e,t):ep(e,t)},ap=function(e){return e.dom().classList!==undefined},up=function(e,t){return ap(e)&&e.dom().classList.contains(t)},sp={add:function(e,t){ap(e)?e.dom().classList.add(t):rp(e,t)},remove:function(e,t){var n;ap(e)?e.dom().classList.remove(t):op(e,t),0===(ap(n=e)?n.dom().classList:np(n)).length&&lr.remove(n,"class")},toggle:function(e,t){return ap(e)?e.dom().classList.toggle(t):ip(e,t)},toggler:function(e,t){var n,r,o,i,a,u,s=ap(e),c=e.dom().classList;return n=function(){s?c.remove(t):op(e,t)},r=function(){s?c.add(t):rp(e,t)},o=up(e,t),i=o||!1,{on:a=function(){r(),i=!0},off:u=function(){n(),i=!1},toggle:function(){(i?u:a)()},isOn:function(){return i}}},has:up},cp=function(e,t){return e.fire("PreProcess",t)},lp=function(e,t){return e.fire("PostProcess",t)},fp=function(e){return e.fire("remove")},dp=function(e,t){return e.fire("SwitchMode",{mode:t})},mp=function(e,t,n,r){e.fire("ObjectResizeStart",{target:t,width:n,height:r})},pp=function(e,t,n,r){e.fire("ObjectResized",{target:t,width:n,height:r})},gp=function(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},hp=function(e,t){var n,r,o;n=Vn.fromDom(e.getBody()),r="mce-content-readonly",o=t,sp.has(n,r)&&!1===o?sp.remove(n,r):o&&sp.add(n,r),t?(e.selection.controlSelection.hideResizeRect(),e.readonly=!0,e.getBody().contentEditable="false"):(e.readonly=!1,e.getBody().contentEditable="true",gp(e,"StyleWithCSS",!1),gp(e,"enableInlineTableEditing",!1),gp(e,"enableObjectResizing",!1),e.focus(),e.nodeChanged())},vp=function(e){return e.readonly?"readonly":"design"},yp=vi.DOM,bp=function(e,t){return"selectionchange"===t?e.getDoc():!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=yp.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()},Cp=function(e,t,n){var r;(r=e).hidden||r.readonly?!0===e.readonly&&n.preventDefault():e.fire(t,n)},xp=function(i,a){var e,t;if(i.delegates||(i.delegates={}),!i.delegates[a]&&!i.removed)if(e=bp(i,a),i.settings.event_root){if(Wm||(Wm={},i.editorManager.on("removeEditor",function(){var e;if(!i.editorManager.activeEditor&&Wm){for(e in Wm)i.dom.unbind(bp(i,e));Wm=null}})),Wm[a])return;t=function(e){for(var t=e.target,n=i.editorManager.get(),r=n.length;r--;){var o=n[r].getBody();(o===t||yp.isChildOf(t,o))&&Cp(n[r],a,e)}},Wm[a]=t,yp.bind(e,a,t)}else t=function(e){Cp(i,a,e)},yp.bind(e,a,t),i.delegates[a]=t},wp={bindPendingEventDelegates:function(){var t=this;It.each(t._pendingNativeEvents,function(e){xp(t,e)})},toggleNativeEvent:function(e,t){var n=this;"focus"!==e&&"blur"!==e&&(t?n.initialized?xp(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(bp(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e,t=this,n=t.getBody(),r=t.dom;if(t.delegates){for(e in t.delegates)t.dom.unbind(bp(t,e),e,t.delegates[e]);delete t.delegates}!t.inline&&n&&r&&(n.onload=null,r.unbind(t.getWin()),r.unbind(t.getDoc())),r&&(r.unbind(n),r.unbind(t.getContainer()))}},Np=wp=It.extend({},Xm,wp),Ep=It.each,Sp=It.explode,kp={f9:120,f10:121,f11:122},Tp=It.makeMap("alt,ctrl,shift,meta,access");function Ap(i){var a={},r=[],u=function(e){var t,n,r={};for(n in Ep(Sp(e,"+"),function(e){e in Tp?r[e]=!0:/^[0-9]{2,}$/.test(e)?r.keyCode=parseInt(e,10):(r.charCode=e.charCodeAt(0),r.keyCode=kp[e]||e.toUpperCase().charCodeAt(0))}),t=[r.keyCode],Tp)r[n]?t.push(n):r[n]=!1;return r.id=t.join(","),r.access&&(r.alt=!0,ve.mac?r.ctrl=!0:r.shift=!0),r.meta&&(ve.mac?r.meta=!0:(r.ctrl=!0,r.meta=!1)),r},s=function(e,t,n,r){var o;return(o=It.map(Sp(e,">"),u))[o.length-1]=It.extend(o[o.length-1],{func:n,scope:r||i}),It.extend(o[0],{desc:i.translate(t),subpatterns:o.slice(1)})},o=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},c=function(e){return e.func?e.func.call(e.scope):null};i.on("keyup keypress keydown",function(t){var e,n;((n=t).altKey||n.ctrlKey||n.metaKey||"keydown"===(e=t).type&&112<=e.keyCode&&e.keyCode<=123)&&!t.isDefaultPrevented()&&(Ep(a,function(e){if(o(t,e))return r=e.subpatterns.slice(0),"keydown"===t.type&&c(e),!0}),o(t,r[0])&&(1===r.length&&"keydown"===t.type&&c(r[0]),r.shift()))}),this.add=function(e,n,r,o){var t;return"string"==typeof(t=r)?r=function(){i.execCommand(t,!1,null)}:It.isArray(t)&&(r=function(){i.execCommand(t[0],t[1],t[2])}),Ep(Sp(It.trim(e.toLowerCase())),function(e){var t=s(e,n,r,o);a[t.id]=t}),!0},this.remove=function(e){var t=s(e);return!!a[t.id]&&(delete a[t.id],!0)}}var Rp=function(e){var t=e!==undefined?e.dom():document;return A.from(t.activeElement).map(Vn.fromDom)},_p=function(e){var t=$r.owner(e).dom();return e.dom()===t.activeElement},Bp=function(t){return Rp($r.owner(t)).filter(function(e){return t.dom().contains(e.dom())})},Dp=function(t,e){return(n=e,n.collapsed?A.from(ua(n.startContainer,n.startOffset)).map(Vn.fromDom):A.none()).bind(function(e){return Co(e)?A.some(e):!1===Mr.contains(t,e)?A.some(t):A.none()});var n},Op=function(t,e){Dp(Vn.fromDom(t.getBody()),e).bind(function(e){return Qa.firstPositionIn(e.dom())}).fold(function(){t.selection.normalize()},function(e){return t.selection.setRng(e.toRange())})},Pp=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},Lp=function(e){var t,n=e.getBody();return n&&(t=Vn.fromDom(n),_p(t)||Bp(t).isSome())},Ip=function(e){return e.inline?Lp(e):(t=e).iframeElement&&_p(Vn.fromDom(t.iframeElement));var t},Mp=function(e){return e.editorManager.setActive(e)},Fp=function(e,t){e.removed||(t?Mp(e):function(t){var e=t.selection,n=t.settings.content_editable,r=t.getBody(),o=e.getRng();t.quirks.refreshContentEditable();var i,a,u=(i=t,a=e.getNode(),i.dom.getParent(a,function(e){return"true"===i.dom.getContentEditable(e)}));if(t.$.contains(r,u))return Pp(u),Op(t,o),Mp(t);t.bookmark!==undefined&&!1===Ip(t)&&Mm(t).each(function(e){t.selection.setRng(e),o=e}),n||(ve.opera||Pp(r),t.getWin().focus()),(ve.gecko||n)&&(Pp(r),Op(t,o)),Mp(t)}(e))},zp=Ip,Up=function(e,t){return t.dom()[e]},qp=function(e,t){return parseInt(br(t,e),10)},Vp=V.curry(Up,"clientWidth"),Hp=V.curry(Up,"clientHeight"),jp=V.curry(qp,"margin-top"),$p=V.curry(qp,"margin-left"),Wp=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m=Vn.fromDom(e.getBody()),p=e.inline?m:$r.documentElement(m),g=(r=e.inline,i=t,a=n,u=(o=p).dom().getBoundingClientRect(),{x:i-(r?u.left+o.dom().clientLeft+$p(o):0),y:a-(r?u.top+o.dom().clientTop+jp(o):0)});return c=g.x,l=g.y,f=Vp(s=p),d=Hp(s),0<=c&&0<=l&&c<=f&&l<=d},Kp=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer();return(t=n,A.from(t).map(Vn.fromDom)).map(function(e){return Mr.contains($r.owner(e),e)}).getOr(!1)};function Xp(n){var t,o=[],i=function(){var e,t=n.theme;return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():{open:e=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:e,reposition:e,getArgs:e}},a=function(){0<o.length&&i().reposition(o)},u=function(t){H.findIndex(o,function(e){return e===t}).each(function(e){o.splice(e,1)})},r=function(r){if(!n.removed&&Kp(n))return H.find(o,function(e){return t=i().getArgs(e),n=r,!(t.type!==n.type||t.text!==n.text||t.progressBar||t.timeout||n.progressBar||n.timeout);var t,n}).getOrThunk(function(){n.editorManager.setActive(n);var e,t=i().open(r,function(){u(t),a()});return e=t,o.push(e),a(),t})};return(t=n).on("SkinLoaded",function(){var e=t.settings.service_message;e&&r({text:e,type:"warning",timeout:0,icon:""})}),t.on("ResizeEditor ResizeWindow",function(){we.requestAnimationFrame(a)}),t.on("remove",function(){H.each(o,function(e){i().close(e)})}),{open:r,close:function(){A.from(o[0]).each(function(e){i().close(e),u(e),a()})},getNotifications:function(){return o}}}function Yp(r){var o=[],i=function(){var e,t=r.theme;return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():{open:e=function(){throw new Error("Theme did not provide a WindowManager implementation.")},alert:e,confirm:e,close:e,getParams:e,setParams:e}},a=function(e,t){return function(){return t?t.apply(e,arguments):undefined}},u=function(e){var t;o.push(e),t=e,r.fire("OpenWindow",{win:t})},s=function(n){H.findIndex(o,function(e){return e===n}).each(function(e){var t;o.splice(e,1),t=n,r.fire("CloseWindow",{win:t}),0===o.length&&r.focus()})},e=function(){return A.from(o[o.length-1])};return r.on("remove",function(){H.each(o.slice(0),function(e){i().close(e)})}),{windows:o,open:function(e,t){r.editorManager.setActive(r),Lm(r);var n=i().open(e,t,s);return u(n),n},alert:function(e,t,n){var r=i().alert(e,a(n||this,t),s);u(r)},confirm:function(e,t,n){var r=i().confirm(e,a(n||this,t),s);u(r)},close:function(){e().each(function(e){i().close(e),s(e)})},getParams:function(){return e().map(i().getParams).getOr(null)},setParams:function(t){e().each(function(e){i().setParams(e,t)})},getWindows:function(){return o}}}var Gp=Si.PluginManager,Jp=function(e,t){var n=function(e,t){for(var n in Gp.urls)if(Gp.urls[n]+"/plugin"+t+".js"===e)return n;return null}(t,e.suffix);return n?"Failed to load plugin: "+n+" from url "+t:"Failed to load plugin url: "+t},Qp=function(e,t){e.notificationManager.open({type:"error",text:t})},Zp=function(e,t){e._skinLoaded?Qp(e,t):e.on("SkinLoaded",function(){Qp(e,t)})},eg=function(e,t){Zp(e,Jp(e,t))},tg=function(e,t){Zp(e,"Failed to upload image: "+t)},ng=Zp,rg=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=window.console;r&&(r.error?r.error.apply(r,arguments):r.log.apply(r,arguments))},og=Si.PluginManager,ig=Si.ThemeManager;function ag(){return new(W.getOrDie("XMLHttpRequest"))}function ug(u,s){var r={},n=function(e,r,o,t){var i,n;(i=new ag).open("POST",s.url),i.withCredentials=s.credentials,i.upload.onprogress=function(e){t(e.loaded/e.total*100)},i.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,t,n;i.status<200||300<=i.status?o("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?r((t=s.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):o("Invalid JSON: "+i.responseText)},(n=new FormData).append("file",e.blob(),e.filename()),i.send(n)},c=function(e,t){return{url:t,blobInfo:e,status:!0}},l=function(e,t){return{url:"",blobInfo:e,status:!1,error:t}},f=function(e,t){It.each(r[e],function(e){e(t)}),delete r[e]},o=function(e,n){return e=It.grep(e,function(e){return!u.isUploaded(e.blobUri())}),ye.all(It.map(e,function(e){return u.isPending(e.blobUri())?(t=e.blobUri(),new ye(function(e){r[t]=r[t]||[],r[t].push(e)})):(o=e,i=s.handler,a=n,u.markPending(o.blobUri()),new ye(function(t){var n;try{var r=function(){n&&n.close()};i(o,function(e){r(),u.markUploaded(o.blobUri(),e),f(o.blobUri(),c(o,e)),t(c(o,e))},function(e){r(),u.removeFailed(o.blobUri()),f(o.blobUri(),l(o,e)),t(l(o,e))},function(e){e<0||100<e||(n||(n=a()),n.progressBar.value(e))})}catch(e){t(l(o,e.message))}}));var o,i,a,t}))};return s=It.extend({credentials:!1,handler:n},s),{upload:function(e,t){return s.url||s.handler!==n?o(e,t):new ye(function(e){e([])})}}}function sg(e,t){return new(W.getOrDie("Blob"))(e,t)}function cg(){return new(W.getOrDie("FileReader"))}function lg(e){return new(W.getOrDie("Uint8Array"))(e)}var fg=function(e){return W.getOrDie("atob")(e)},dg=function(e){var t,n;return e=decodeURIComponent(e).split(","),(n=/data:([^;]+)/.exec(e[0]))&&(t=n[1]),{type:t,data:e[1]}},mg=function(e){return 0===e.indexOf("blob:")?(i=e,new ye(function(e,t){var n=function(){t("Cannot convert "+i+" to Blob. Resource might not exist or is inaccessible.")};try{var r=new ag;r.open("GET",i,!0),r.responseType="blob",r.onload=function(){200===this.status?e(this.response):n()},r.onerror=n,r.send()}catch(o){n()}})):0===e.indexOf("data:")?(o=e,new ye(function(e){var t,n,r;o=dg(o);try{t=fg(o.data)}catch(Dw){return void e(new sg([]))}for(n=new lg(t.length),r=0;r<n.length;r++)n[r]=t.charCodeAt(r);e(new sg([n],{type:o.type}))})):null;var i,o},pg=function(n){return new ye(function(e){var t=new cg;t.onloadend=function(){e(t.result)},t.readAsDataURL(n)})},gg=dg,hg=0,vg=function(e){return(e||"blobid")+hg++},yg=function(n,r,o,t){var i,a;0!==r.src.indexOf("blob:")?(i=gg(r.src).data,(a=n.findFirst(function(e){return e.base64()===i}))?o({image:r,blobInfo:a}):mg(r.src).then(function(e){a=n.create(vg(),e,i),n.add(a),o({image:r,blobInfo:a})},function(e){t(e)})):(a=n.getByUri(r.src))?o({image:r,blobInfo:a}):mg(r.src).then(function(t){pg(t).then(function(e){i=gg(e).data,a=n.create(vg(),t,i),n.add(a),o({image:r,blobInfo:a})})},function(e){t(e)})},bg=function(e){return e?e.getElementsByTagName("img"):[]},Cg=0,xg={uuid:function(e){return e+Cg+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t());var t}};function wg(u){var n,o,i,t,e,a,r,s,c,l,f=(n=[],o=da.constant,i=function(e){var t,n,r;if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");return t=e.id||xg.uuid("blobid"),n=e.name||t,{id:o(t),name:o(n),filename:o(n+"."+(r=e.blob.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}[r.toLowerCase()]||"dat")),blob:o(e.blob),base64:o(e.base64),blobUri:o(e.blobUri||X.createObjectURL(e.blob)),uri:o(e.uri)}},{create:function(e,t,n,r){return i("object"==typeof e?e:{id:e,name:r,blob:t,base64:n})},add:function(e){t(e.id())||n.push(e)},get:t=function(t){return e(function(e){return e.id()===t})},getByUri:function(t){return e(function(e){return e.blobUri()===t})},findFirst:e=function(e){return Bt.filter(n,e)[0]},removeByUri:function(t){n=Bt.filter(n,function(e){return e.blobUri()!==t||(X.revokeObjectURL(e.blobUri()),!1)})},destroy:function(){Bt.each(n,function(e){X.revokeObjectURL(e.blobUri())}),n=[]}}),d=u.settings,m=(s={},c=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:l=function(e){return e in s},getResultUri:function(e){var t=s[e];return t?t.resultUri:null},isPending:function(e){return!!l(e)&&1===s[e].status},isUploaded:function(e){return!!l(e)&&2===s[e].status},markPending:function(e){s[e]=c(1,null)},markUploaded:function(e,t){s[e]=c(2,t)},removeFailed:function(e){delete s[e]},destroy:function(){s={}}}),p=function(t){return function(e){return u.selection?t(e):[]}},g=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},h=function(e,t,n){return e=g(e,'src="'+t+'"','src="'+n+'"'),e=g(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},v=function(t,n){Bt.each(u.undoManager.data,function(e){"fragmented"===e.type?e.fragments=Bt.map(e.fragments,function(e){return h(e,t,n)}):e.content=h(e.content,t,n)})},y=function(){return u.notificationManager.open({text:u.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},b=function(e,t){f.removeByUri(e.src),v(e.src,t),u.$(e).attr({src:d.images_reuse_filename?t+"?"+(new Date).getTime():t,"data-mce-src":u.convertURL(t,"src")})},C=function(n){return a||(a=ug(m,{url:d.images_upload_url,basePath:d.images_upload_base_path,credentials:d.images_upload_credentials,handler:d.images_upload_handler})),N().then(p(function(r){var e;return e=Bt.map(r,function(e){return e.blobInfo}),a.upload(e,y).then(p(function(e){var t=Bt.map(e,function(e,t){var n=r[t].image;return e.status&&!1!==u.settings.images_replace_blob_uris?b(n,e.url):e.error&&tg(u,e.error),{element:n,status:e.status}});return n&&n(t),t}))}))},x=function(e){if(!1!==d.automatic_uploads)return C(e)},w=function(e){return!d.images_dataimg_filter||d.images_dataimg_filter(e)},N=function(){var o,i,a;return r||(o=m,i=f,a={},r={findAll:function(e,n){var t;n||(n=da.constant(!0)),t=Bt.filter(bg(e),function(e){var t=e.src;return!!ve.fileApi&&!e.hasAttribute("data-mce-bogus")&&!e.hasAttribute("data-mce-placeholder")&&!(!t||t===ve.transparentSrc)&&(0===t.indexOf("blob:")?!o.isUploaded(t):0===t.indexOf("data:")&&n(e))});var r=Bt.map(t,function(n){if(a[n.src])return new ye(function(t){a[n.src].then(function(e){if("string"==typeof e)return e;t({image:n,blobInfo:e.blobInfo})})});var e=new ye(function(e,t){yg(i,n,e,t)}).then(function(e){return delete a[e.image.src],e})["catch"](function(e){return delete a[n.src],e});return a[n.src]=e});return ye.all(r)}}),r.findAll(u.getBody(),w).then(p(function(e){return e=Bt.filter(e,function(e){return"string"!=typeof e||(ng(u,e),!1)}),Bt.each(e,function(e){v(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")}),e}))},E=function(e){return e.replace(/src="(blob:[^"]+)"/g,function(e,n){var t=m.getResultUri(n);if(t)return'src="'+t+'"';var r=f.getByUri(n);return r||(r=Bt.reduce(u.editorManager.get(),function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)},null)),r?'src="data:'+r.blob().type+";base64,"+r.base64()+'"':e})};return u.on("setContent",function(){!1!==u.settings.automatic_uploads?x():N()}),u.on("RawSaveContent",function(e){e.content=E(e.content)}),u.on("getContent",function(e){e.source_view||"raw"===e.format||(e.content=E(e.content))}),u.on("PostRender",function(){u.parser.addNodeFilter("img",function(e){Bt.each(e,function(e){var t=e.attr("src");if(!f.getByUri(t)){var n=m.getResultUri(t);n&&e.attr("src",n)}})})}),{blobCache:f,uploadImages:C,uploadImagesAuto:x,scanForImages:N,destroy:function(){f.destroy(),m.destroy(),r=a=null}}}var Ng=function(e,t){return e.hasOwnProperty(t.nodeName)},Eg=function(e,t){if(Oo.isText(t)){if(0===t.nodeValue.length)return!0;if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Ng(e,t.nextSibling)))return!0}return!1},Sg=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.dom,p=e.selection,g=e.schema,h=g.getBlockElements(),v=p.getStart(),y=e.getBody();if(f=d.forced_root_block,v&&Oo.isElement(v)&&f&&(l=y.nodeName.toLowerCase(),g.isValidChild(l,f.toLowerCase())&&(b=h,C=y,x=v,!H.exists(Hl(Vn.fromDom(x),Vn.fromDom(C)),function(e){return Ng(b,e.dom())})))){var b,C,x,w,N;for(n=(t=p.getRng()).startContainer,r=t.startOffset,o=t.endContainer,i=t.endOffset,c=zp(e),v=y.firstChild;v;)if(w=h,N=v,Oo.isText(N)||Oo.isElement(N)&&!Ng(w,N)&&!Mc(N)){if(Eg(h,v)){v=(u=v).nextSibling,m.remove(u);continue}a||(a=m.create(f,e.settings.forced_root_block_attrs),v.parentNode.insertBefore(a,v),s=!0),v=(u=v).nextSibling,a.appendChild(u)}else a=null,v=v.nextSibling;s&&c&&(t.setStart(n,r),t.setEnd(o,i),p.setRng(t),e.nodeChanged())}},kg=function(e){e.settings.forced_root_block&&e.on("NodeChange",V.curry(Sg,e))},Tg=function(t){return $r.firstChild(t).fold(V.constant([t]),function(e){return[t].concat(Tg(e))})},Ag=function(t){return $r.lastChild(t).fold(V.constant([t]),function(e){return"br"===Zn.name(e)?$r.prevSibling(e).map(function(e){return[t].concat(Ag(e))}).getOr([]):[t].concat(Ag(e))})},Rg=function(o,e){return ma([(i=e,a=i.startContainer,u=i.startOffset,Oo.isText(a)?0===u?A.some(Vn.fromDom(a)):A.none():A.from(a.childNodes[u]).map(Vn.fromDom)),(t=e,n=t.endContainer,r=t.endOffset,Oo.isText(n)?r===n.data.length?A.some(Vn.fromDom(n)):A.none():A.from(n.childNodes[r-1]).map(Vn.fromDom))],function(e,t){var n=H.find(Tg(o),V.curry(Mr.eq,e)),r=H.find(Ag(o),V.curry(Mr.eq,t));return n.isSome()&&r.isSome()}).getOr(!1);var t,n,r,i,a,u},_g=function(e,t,n,r){var o=n,i=new ao(n,o),a=e.schema.getNonEmptyElements();do{if(3===n.nodeType&&0!==It.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(ve.ie&&ve.ie<11&&e.isBlock(n)&&e.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?i.next():i.prev());"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Bg=function(e){var t=e.selection.getSel();return t&&0<t.rangeCount};function Dg(i){var r,o=[];"onselectionchange"in i.getDoc()||i.on("NodeChange Click MouseUp KeyUp Focus",function(e){var t,n;n={startContainer:(t=i.selection.getRng()).startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset},"nodechange"!==e.type&&em(n,r)||i.fire("SelectionChange"),r=n}),i.on("contextmenu",function(){i.fire("SelectionChange")}),i.on("SelectionChange",function(){var e=i.selection.getStart(!0);!e||!ve.range&&i.selection.isCollapsed()||Bg(i)&&!function(e){var t,n;if((n=i.$(e).parentsUntil(i.getBody()).add(e)).length===o.length){for(t=n.length;0<=t&&n[t]===o[t];t--);if(-1===t)return o=n,!0}return o=n,!1}(e)&&i.dom.isChildOf(e,i.getBody())&&i.nodeChanged({selectionChange:!0})}),i.on("MouseUp",function(e){!e.isDefaultPrevented()&&Bg(i)&&("IMG"===i.selection.getNode().nodeName?we.setEditorTimeout(i,function(){i.nodeChanged()}):i.nodeChanged())}),this.nodeChanged=function(e){var t,n,r,o=i.selection;i.initialized&&o&&!i.settings.disable_nodechange&&!i.readonly&&(r=i.getBody(),(t=o.getStart(!0)||r).ownerDocument===i.getDoc()&&i.dom.isChildOf(t,r)||(t=r),n=[],i.dom.getParent(t,function(e){if(e===r)return!0;n.push(e)}),(e=e||{}).element=t,e.parents=n,i.fire("NodeChange",e))}}var Og,Pg,Lg=function(e){var t,n,r,o;return o=e.getBoundingClientRect(),n=(t=e.ownerDocument).documentElement,r=t.defaultView,{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}},Ig=function(e,t){return n=(u=e).inline?Lg(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=Lg(e.getContentAreaContainer()),r=(i=(o=e).getBody(),a=o.getDoc().documentElement,u={left:i.scrollLeft,top:i.scrollTop},s={left:i.scrollLeft||a.scrollLeft,top:i.scrollTop||a.scrollTop},o.inline?u:s);return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}var o,i,a,u,s;return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top};var n,r,o,i,a,u},Mg=Oo.isContentEditableFalse,Fg=Oo.isContentEditableTrue,zg=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},Ug=function(u,s){return function(e){if(0===e.button){var t=Bt.find(s.dom.getParents(e.target),da.or(Mg,Fg));if(i=s.getBody(),Mg(a=t)&&a!==i){var n=s.dom.getPos(t),r=s.getBody(),o=s.getDoc().documentElement;u.element=t,u.screenX=e.screenX,u.screenY=e.screenY,u.maxX=(s.inline?r.scrollWidth:o.offsetWidth)-2,u.maxY=(s.inline?r.scrollHeight:o.offsetHeight)-2,u.relX=e.pageX-n.x,u.relY=e.pageY-n.y,u.width=t.offsetWidth,u.height=t.offsetHeight,u.ghost=function(e,t,n,r){var o=t.cloneNode(!0);e.dom.setStyles(o,{width:n,height:r}),e.dom.setAttrib(o,"data-mce-selected",null);var i=e.dom.create("div",{"class":"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return e.dom.setStyles(i,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),e.dom.setStyles(o,{margin:0,boxSizing:"border-box"}),i.appendChild(o),i}(s,t,u.width,u.height)}}var i,a}},qg=function(l,f){return function(e){if(l.dragging&&(s=(i=f).selection,c=s.getSel().getRangeAt(0).startContainer,a=3===c.nodeType?c.parentNode:c,u=l.element,a!==u&&!i.dom.isChildOf(a,u)&&!Mg(a))){var t=(r=l.element,(o=r.cloneNode(!0)).removeAttribute("data-mce-selected"),o),n=f.fire("drop",{targetClone:t,clientX:e.clientX,clientY:e.clientY});n.isDefaultPrevented()||(t=n.targetClone,f.undoManager.transact(function(){zg(l.element),f.insertContent(f.dom.getOuterHTML(t)),f._selectionOverrides.hideFakeCaret()}))}var r,o,i,a,u,s,c;Vg(l)}},Vg=function(e){e.dragging=!1,e.element=null,zg(e.ghost)},Hg=function(e){var t,n,r,o,i,a,g,h,v,u,s,c={};t=vi.DOM,a=document,n=Ug(c,e),g=c,h=e,v=we.throttle(function(e,t){h._selectionOverrides.hideFakeCaret(),h.selection.placeCaretAt(e,t)},0),r=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m=Math.max(Math.abs(e.screenX-g.screenX),Math.abs(e.screenY-g.screenY));if(g.element&&!g.dragging&&10<m){if(h.fire("dragstart",{target:g.element}).isDefaultPrevented())return;g.dragging=!0,h.focus()}if(g.dragging){var p=(f=g,{pageX:(d=Ig(h,e)).pageX-f.relX,pageY:d.pageY+5});c=g.ghost,l=h.getBody(),c.parentNode!==l&&l.appendChild(c),t=g.ghost,n=p,r=g.width,o=g.height,i=g.maxX,a=g.maxY,s=u=0,t.style.left=n.pageX+"px",t.style.top=n.pageY+"px",n.pageX+r>i&&(u=n.pageX+r-i),n.pageY+o>a&&(s=n.pageY+o-a),t.style.width=r-u+"px",t.style.height=o-s+"px",v(e.clientX,e.clientY)}},o=qg(c,e),u=c,i=function(){u.dragging&&s.fire("dragend"),Vg(u)},(s=e).on("mousedown",n),e.on("mousemove",r),e.on("mouseup",o),t.bind(a,"mousemove",r),t.bind(a,"mouseup",i),e.on("remove",function(){t.unbind(a,"mousemove",r),t.unbind(a,"mouseup",i)})},jg=function(e){var n;Hg(e),(n=e).on("drop",function(e){var t="undefined"!=typeof e.clientX?n.getDoc().elementFromPoint(e.clientX,e.clientY):null;(Mg(t)||Mg(n.dom.getContentEditableParent(t)))&&e.preventDefault()})},$g=function(e){return Bt.reduce(e,function(e,t){return e.concat(function(t){var e=function(e){return Bt.map(e,function(e){return(e=ta(e)).node=t,e})};if(Oo.isElement(t))return e(t.getClientRects());if(Oo.isText(t)){var n=t.ownerDocument.createRange();return n.setStart(t,0),n.setEnd(t,t.data.length),e(n.getClientRects())}}(t))},[])};(Pg=Og||(Og={}))[Pg.Up=-1]="Up",Pg[Pg.Down=1]="Down";var Wg=function(o,i,a,e,u,t){var n,s,c=0,l=[],r=function(e){var t,n,r;for(r=$g([e]),-1===o&&(r=r.reverse()),t=0;t<r.length;t++)if(n=r[t],!a(n,s)){if(0<l.length&&i(n,Bt.last(l))&&c++,n.line=c,u(n))return!0;l.push(n)}};return(s=Bt.last(t.getClientRects()))&&(r(n=t.getNode()),function(e,t,n,r){for(;r=vs(r,e,Zi,t);)if(n(r))return}(o,e,r,n)),l},Kg=V.curry(Wg,Og.Up,oa,ia),Xg=V.curry(Wg,Og.Down,ia,oa),Yg=function(n){return function(e){return t=n,e.line>t;var t}},Gg=function(n){return function(e){return t=n,e.line===t;var t}},Jg=Oo.isContentEditableFalse,Qg=vs,Zg=function(e,t){return Math.abs(e.left-t)},eh=function(e,t){return Math.abs(e.right-t)},th=function(e,t){return e>=t.left&&e<=t.right},nh=function(e,o){return Bt.reduce(e,function(e,t){var n,r;return n=Math.min(Zg(e,o),eh(e,o)),r=Math.min(Zg(t,o),eh(t,o)),th(o,t)?t:th(o,e)?e:r===n&&Jg(t.node)?t:r<n?t:e})},rh=function(e,t,n,r){for(;r=Qg(r,e,Zi,t);)if(n(r))return},oh=function(e,t,n){var r,o,i,a,u,s,c,l,f=$g((o=e,Bt.filter(Bt.toArray(o.getElementsByTagName("*")),as))),d=Bt.filter(f,function(e){return n>=e.top&&n<=e.bottom});return(r=nh(d,t))&&(r=nh((u=e,l=function(t,e){var n;return n=Bt.filter($g([e]),function(e){return!t(e,s)}),c=c.concat(n),0===n.length},(c=[]).push(s=r),rh(Og.Up,u,V.curry(l,oa),s.node),rh(Og.Down,u,V.curry(l,ia),s.node),c),t))&&as(r.node)?(a=t,{node:(i=r).node,before:Zg(i,a)<eh(i,a)}):null},ih=function(i,a,e){return!e.collapsed&&H.foldl(e.getClientRects(),function(e,t){return e||(o=a,(r=i)>=(n=t).left&&r<=n.right&&o>=n.top&&o<=n.bottom);var n,r,o},!1)},ah=function(t,n){var r=null;return{cancel:function(){null!==r&&(clearTimeout(r),r=null)},throttle:function(){var e=arguments;null===r&&(r=setTimeout(function(){t.apply(null,e),e=r=null},n))}}},uh=function(t){var e=ah(function(){if(!t.removed&&t.selection.getRng().collapsed){var e=ou(t,t.selection.getRng(),!1);t.selection.setRng(e)}},0);t.on("focus",function(){e.throttle()}),t.on("blur",function(){e.cancel()})},sh={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return ve.mac?e.metaKey:e.ctrlKey&&!e.altKey}},ch=Oo.isContentEditableTrue,lh=Oo.isContentEditableFalse,fh=Bs,dh=_s,mh=function(e,t){for(var n=e.getBody();t&&t!==n;){if(ch(t)||lh(t))return t;t=t.parentNode}return null},ph=function(p){var g,e,t,a=p.getBody(),o=is(p.getBody(),function(e){return p.dom.isBlock(e)},function(){return zp(p)}),h="sel-"+p.dom.uniqueId(),u=function(e){e&&p.selection.setRng(e)},s=function(){return p.selection.getRng()},v=function(e,t,n,r){return void 0===r&&(r=!0),p.fire("ShowCaret",{target:t,direction:e,before:n}).isDefaultPrevented()?null:(r&&p.selection.scrollIntoView(t,-1===e),o.show(n,t))},y=function(e,t){return t=Ss(e,a,t),-1===e?La.fromRangeStart(t):La.fromRangeEnd(t)},n=function(e){return Li(e)||Ui(e)||qi(e)},b=function(e){return n(e.startContainer)||n(e.endContainer)},c=function(e,t){var n,r,o,i,a,u,s,c,l,f,d=p.$,m=p.dom;if(!e)return null;if(e.collapsed){if(!b(e))if(!1===t){if(c=y(-1,e),as(c.getNode(!0)))return v(-1,c.getNode(!0),!1,!1);if(as(c.getNode()))return v(-1,c.getNode(),!c.isAtEnd(),!1)}else{if(c=y(1,e),as(c.getNode()))return v(1,c.getNode(),!c.isAtEnd(),!1);if(as(c.getNode(!0)))return v(1,c.getNode(!0),!1,!1)}return null}return i=e.startContainer,a=e.startOffset,u=e.endOffset,3===i.nodeType&&0===a&&lh(i.parentNode)&&(i=i.parentNode,a=m.nodeIndex(i),i=i.parentNode),1!==i.nodeType?null:(u===a+1&&(n=i.childNodes[a]),lh(n)?(l=f=n.cloneNode(!0),(s=p.fire("ObjectSelected",{target:n,targetClone:l})).isDefaultPrevented()?null:(r=Tl(Vn.fromDom(p.getBody()),"#"+h).fold(function(){return d([])},function(e){return d([e.dom()])}),l=s.targetClone,0===r.length&&(r=d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",h)).appendTo(p.getBody()),e=p.dom.createRng(),l===f&&ve.ie?(r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l),e.setStartAfter(r[0].firstChild.firstChild),e.setEndAfter(l)):(r.empty().append("\xa0").append(l).append("\xa0"),e.setStart(r[0].firstChild,1),e.setEnd(r[0].lastChild,0)),r.css({top:m.getPos(n,p.getBody()).y}),r[0].focus(),(o=p.selection.getSel()).removeAllRanges(),o.addRange(e),H.each(hu(Vn.fromDom(p.getBody()),"*[data-mce-selected]"),function(e){lr.remove(e,"data-mce-selected")}),n.setAttribute("data-mce-selected","1"),g=n,C(),e)):null)},l=function(){g&&g.removeAttribute("data-mce-selected"),Tl(Vn.fromDom(p.getBody()),"#"+h).each(Hc.remove),g=null},C=function(){o.hide()};return ve.ceFalse&&(function(){p.on("mouseup",function(e){var t=s();t.collapsed&&Wp(p,e.clientX,e.clientY)&&u(ru(p,t,!1))}),p.on("click",function(e){var t;(t=mh(p,e.target))&&(lh(t)&&(e.preventDefault(),p.focus()),ch(t)&&p.dom.isChildOf(t,p.selection.getNode())&&l())}),p.on("blur NewBlock",function(){l()}),p.on("ResizeWindow FullscreenStateChanged",function(){return o.reposition()});var n,r,i=function(e,t){var n,r,o=p.dom.getParent(e,p.dom.isBlock),i=p.dom.getParent(t,p.dom.isBlock);return!(!o||!p.dom.isChildOf(o,i)||!1!==lh(mh(p,o)))||o&&(n=o,r=i,!(p.dom.getParent(n,p.dom.isBlock)===p.dom.getParent(r,p.dom.isBlock)))&&function(e){var t=Ys(e);if(!e.firstChild)return!1;var n=La.before(e.firstChild),r=t.next(n);return r&&!dh(r)&&!fh(r)}(o)};r=!1,(n=p).on("touchstart",function(){r=!1}),n.on("touchmove",function(){r=!0}),n.on("touchend",function(e){var t=mh(n,e.target);lh(t)&&(r||(e.preventDefault(),c(nu(n,t))))}),p.on("mousedown",function(e){var t,n=e.target;if((n===a||"HTML"===n.nodeName||p.dom.isChildOf(n,a))&&!1!==Wp(p,e.clientX,e.clientY))if(t=mh(p,n))lh(t)?(e.preventDefault(),c(nu(p,t))):(l(),ch(t)&&e.shiftKey||ih(e.clientX,e.clientY,p.selection.getRng())||(C(),p.selection.placeCaretAt(e.clientX,e.clientY)));else if(!1===as(n)){l(),C();var r=oh(a,e.clientX,e.clientY);if(r&&!i(e.target,r.node)){e.preventDefault();var o=v(1,r.node,r.before,!1);p.getBody().focus(),u(o)}}}),p.on("keypress",function(e){sh.modifierPressed(e)||(e.keyCode,lh(p.selection.getNode())&&e.preventDefault())}),p.on("getSelectionRange",function(e){var t=e.range;if(g){if(!g.parentNode)return void(g=null);(t=t.cloneRange()).selectNode(g),e.range=t}}),p.on("setSelectionRange",function(e){var t;(t=c(e.range,e.forward))&&(e.range=t)}),p.on("AfterSetSelectionRange",function(e){var t,n=e.range;b(n)||C(),t=n.startContainer.parentNode,p.dom.hasClass(t,"mce-offscreen-selection")||l()}),p.on("copy",function(e){var t,n=e.clipboardData;if(!e.isDefaultPrevented()&&e.clipboardData&&!ve.ie){var r=(t=p.dom.get(h))?t.getElementsByTagName("*")[0]:t;r&&(e.preventDefault(),n.clearData(),n.setData("text/html",r.outerHTML),n.setData("text/plain",r.outerText))}}),jg(p),uh(p)}(),e=p.contentStyles,t=".mce-content-body",e.push(o.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")),{showCaret:v,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(Vi(e),u(s()),p.selection.scrollIntoView(e[0]))},hideFakeCaret:C,destroy:function(){o.destroy(),g=null}}},gh=function(e,t,n){var r,o,i,a,u=1;for(a=e.getShortEndedElements(),(i=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex=r=n;o=i.exec(t);){if(r=i.lastIndex,"/"===o[1])u--;else if(!o[1]){if(o[2]in a)continue;u++}if(0===u)break}return r};function hh(F,z){void 0===z&&(z=oi());var e=function(){};!1!==(F=F||{}).fix_self_closing&&(F.fix_self_closing=!0);var U=F.comment?F.comment:e,q=F.cdata?F.cdata:e,V=F.text?F.text:e,H=F.start?F.start:e,j=F.end?F.end:e,$=F.pi?F.pi:e,W=F.doctype?F.doctype:e;return{parse:function(e){var t,n,r,d,o,i,a,m,u,s,p,c,g,l,f,h,v,y,b,C,x,w,N,E,S,k,T,A,R,_=0,B=[],D=0,O=Ko.decode,P=It.makeMap("src,href,data,background,formaction,poster,xlink:href"),L=/((java|vb)script|mhtml):/i,I=function(e){var t,n;for(t=B.length;t--&&B[t].name!==e;);if(0<=t){for(n=B.length-1;t<=n;n--)(e=B[n]).valid&&j(e.name);B.length=t}},M=function(e,t,n,r,o){var i,a,u,s,c;if(n=(t=t.toLowerCase())in p?t:O(n||r||o||""),g&&!m&&0==(0===(u=t).indexOf("data-")||0===u.indexOf("aria-"))){if(!(i=y[t])&&b){for(a=b.length;a--&&!(i=b[a]).pattern.test(t););-1===a&&(i=null)}if(!i)return;if(i.validValues&&!(n in i.validValues))return}if(P[t]&&!F.allow_script_urls){var l=n.replace(/[\s\u0000-\u001F]+/g,"");try{l=decodeURIComponent(l)}catch(f){l=unescape(l)}if(L.test(l))return;if(c=l,!(s=F).allow_html_data_urls&&(/^data:image\//i.test(c)?!1===s.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(c):/^data:/i.test(c)))return}m&&(t in P||0===t.indexOf("on"))||(d.map[t]=n,d.push({name:t,value:n}))};for(S=new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),k=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,s=z.getShortEndedElements(),E=F.self_closing_elements||z.getSelfClosingElements(),p=z.getBoolAttrs(),g=F.validate,u=F.remove_internals,R=F.fix_self_closing,T=z.getSpecialElements(),N=e+">";t=S.exec(N);){if(_<t.index&&V(O(e.substr(_,t.index-_))),n=t[6])":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),I(n);else if(n=t[7]){if(t.index+t[0].length>e.length){V(O(e.substr(t.index))),_=t.index+t[0].length;continue}if(":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),c=n in s,R&&E[n]&&0<B.length&&B[B.length-1].name===n&&I(n),!g||(l=z.getElementRule(n))){if(f=!0,g&&(y=l.attributes,b=l.attributePatterns),(v=t[8])?((m=-1!==v.indexOf("data-mce-type"))&&u&&(f=!1),(d=[]).map={},v.replace(k,M)):(d=[]).map={},g&&!m){if(C=l.attributesRequired,x=l.attributesDefault,w=l.attributesForced,l.removeEmptyAttrs&&!d.length&&(f=!1),w)for(o=w.length;o--;)a=(h=w[o]).name,"{$uid}"===(A=h.value)&&(A="mce_"+D++),d.map[a]=A,d.push({name:a,value:A});if(x)for(o=x.length;o--;)(a=(h=x[o]).name)in d.map||("{$uid}"===(A=h.value)&&(A="mce_"+D++),d.map[a]=A,d.push({name:a,value:A}));if(C){for(o=C.length;o--&&!(C[o]in d.map););-1===o&&(f=!1)}if(h=d.map["data-mce-bogus"]){if("all"===h){_=gh(z,e,S.lastIndex),S.lastIndex=_;continue}f=!1}}f&&H(n,d,c)}else f=!1;if(r=T[n]){r.lastIndex=_=t.index+t[0].length,(t=r.exec(e))?(f&&(i=e.substr(_,t.index-_)),_=t.index+t[0].length):(i=e.substr(_),_=e.length),f&&(0<i.length&&V(i,!0),j(n)),S.lastIndex=_;continue}c||(v&&v.indexOf("/")===v.length-1?f&&j(n):B.push({name:n,valid:f}))}else(n=t[1])?(">"===n.charAt(0)&&(n=" "+n),F.allow_conditional_comments||"[if"!==n.substr(0,3).toLowerCase()||(n=" "+n),U(n)):(n=t[2])?q(n.replace(/<!--|-->/g,"")):(n=t[3])?W(n):(n=t[4])&&$(n,t[5]);_=t.index+t[0].length}for(_<e.length&&V(O(e.substr(_))),o=B.length-1;0<=o;o--)(n=B[o]).valid&&j(n.name)}}}(hh||(hh={})).findEndTag=gh;var vh=hh,yh=function(e,t){var n,r,o,i,a,u,s,c,l=t,f=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,d=e.schema;for(u=e.getTempAttrs(),s=l,c=new RegExp(["\\s?("+u.join("|")+')="[^"]+"'].join("|"),"gi"),l=s.replace(c,""),a=d.getShortEndedElements();i=f.exec(l);)r=f.lastIndex,o=i[0].length,n=a[i[1]]?r:vh.findEndTag(d,l,r),l=l.substring(0,r-o)+l.substring(n),f.lastIndex=r-o;return _i(l)},bh={trimExternal:yh,trimInternal:yh},Ch=0,xh=2,wh=1,Nh=function(p,g){var e=p.length+g.length+2,h=new Array(e),v=new Array(e),c=function(e,t,n,r,o){var i=l(e,t,n,r);if(null===i||i.start===t&&i.diag===t-r||i.end===e&&i.diag===e-n)for(var a=e,u=n;a<t||u<r;)a<t&&u<r&&p[a]===g[u]?(o.push([0,p[a]]),++a,++u):r-n<t-e?(o.push([2,p[a]]),++a):(o.push([1,g[u]]),++u);else{c(e,i.start,n,i.start-i.diag,o);for(var s=i.start;s<i.end;++s)o.push([0,p[s]]);c(i.end,t,i.end-i.diag,r,o)}},y=function(e,t,n,r){for(var o=e;o-t<r&&o<n&&p[o]===g[o-t];)++o;return{start:e,end:o,diag:t}},l=function(e,t,n,r){var o=t-e,i=r-n;if(0===o||0===i)return null;var a,u,s,c,l,f=o-i,d=i+o,m=(d%2==0?d:d+1)/2;for(h[1+m]=e,v[1+m]=t+1,a=0;a<=m;++a){for(u=-a;u<=a;u+=2){for(s=u+m,u===-a||u!==a&&h[s-1]<h[s+1]?h[s]=h[s+1]:h[s]=h[s-1]+1,l=(c=h[s])-e+n-u;c<t&&l<r&&p[c]===g[l];)h[s]=++c,++l;if(f%2!=0&&f-a<=u&&u<=f+a&&v[s-f]<=h[s])return y(v[s-f],u+e-n,t,r)}for(u=f-a;u<=f+a;u+=2){for(s=u+m-f,u===f-a||u!==f+a&&v[s+1]<=v[s-1]?v[s]=v[s+1]-1:v[s]=v[s-1],l=(c=v[s]-1)-e+n-u;e<=c&&n<=l&&p[c]===g[l];)v[s]=c--,l--;if(f%2==0&&-a<=u&&u<=a&&v[s]<=h[s+f])return y(v[s],u+e-n,t,r)}}},t=[];return c(0,p.length,0,g.length,t),t},Eh=function(e){return Oo.isElement(e)?e.outerHTML:Oo.isText(e)?Ko.encodeRaw(e.data,!1):Oo.isComment(e)?"\x3c!--"+e.data+"--\x3e":""},Sh=function(e,t,n){var r=function(e){var t,n,r;for(r=document.createElement("div"),t=document.createDocumentFragment(),e&&(r.innerHTML=e);n=r.firstChild;)t.appendChild(n);return t}(t);if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n];o.parentNode.insertBefore(r,o)}else e.appendChild(r)},kh=function(e){return Bt.filter(Bt.map(e.childNodes,Eh),function(e){return 0<e.length})},Th=function(e,t){var n,r,o,i=Bt.map(t.childNodes,Eh);return n=Nh(i,e),r=t,o=0,Bt.each(n,function(e){e[0]===Ch?o++:e[0]===wh?(Sh(r,e[1],o),o++):e[0]===xh&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t];n.parentNode.removeChild(n)}}(r,o)}),t},Ah=function(e,t){var n=(t||document).createElement("div");return n.innerHTML=e,$r.children(Vn.fromDom(n))},Rh=function(e){return e.dom().innerHTML},_h=Rh,Bh=function(e,t){var n=$r.owner(e).dom(),r=Vn.fromDom(n.createDocumentFragment()),o=Ah(t,n);qc(r,o),Hc.empty(e),Hu.append(e,r)},Dh=ns(A.none()),Oh=function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}},Ph=function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}},Lh=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},Ih=function(e){var t=Vn.fromTag("body",Dh.get().getOrThunk(function(){var e=document.implementation.createHTMLDocument("undo");return Dh.set(A.some(e)),e}));return Bh(t,Lh(e)),H.each(hu(t,"*[data-mce-bogus]"),Hc.unwrap),_h(t)},Mh=function(n){var e,t,r;return e=kh(n.getBody()),-1!==(t=(r=H.bind(e,function(e){var t=bh.trimInternal(n.serializer,e);return 0<t.length?[t]:[]})).join("")).indexOf("</iframe>")?Oh(r):Ph(t)},Fh=function(e,t,n){"fragmented"===t.type?Th(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},zh=function(e,t){return!(!e||!t)&&(r=t,Lh(e)===Lh(r)||(n=t,Ih(e)===Ih(n)));var n,r};function Uh(u){var s,r,o=this,c=0,l=[],t=0,f=function(){return 0===t},i=function(e){f()&&(o.typing=e)},d=function(e){u.setDirty(e)},a=function(e){i(!1),o.add({},e)},n=function(){o.typing&&(i(!1),o.add())};return u.on("init",function(){o.add()}),u.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&(n(),o.beforeChange())}),u.on("ExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&a(e)}),u.on("ObjectResizeStart Cut",function(){o.beforeChange()}),u.on("SaveContent ObjectResized blur",a),u.on("DragEnd",a),u.on("KeyUp",function(e){var t=e.keyCode;e.isDefaultPrevented()||((33<=t&&t<=36||37<=t&&t<=40||45===t||e.ctrlKey)&&(a(),u.nodeChanged()),46!==t&&8!==t||u.nodeChanged(),r&&o.typing&&!1===zh(Mh(u),l[0])&&(!1===u.isDirty()&&(d(!0),u.fire("change",{level:l[0],lastLevel:null})),u.fire("TypingUndo"),r=!1,u.nodeChanged()))}),u.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented())if(33<=t&&t<=36||37<=t&&t<=40||45===t)o.typing&&a(e);else{var n=e.ctrlKey&&!e.altKey||e.metaKey;!(t<16||20<t)||224===t||91===t||o.typing||n||(o.beforeChange(),i(!0),o.add({},e),r=!0)}}),u.on("MouseDown",function(e){o.typing&&a(e)}),u.on("input",function(e){var t;e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data)&&a(e)}),u.addShortcut("meta+z","","Undo"),u.addShortcut("meta+y,meta+shift+z","","Redo"),u.on("AddUndo Undo Redo ClearUndos",function(e){e.isDefaultPrevented()||u.nodeChanged()}),o={data:l,typing:!1,beforeChange:function(){f()&&(s=Ec.getUndoBookmark(u.selection))},add:function(e,t){var n,r,o,i=u.settings;if(o=Mh(u),e=e||{},e=It.extend(e,o),!1===f()||u.removed)return null;if(r=l[c],u.fire("BeforeAddUndo",{level:e,lastLevel:r,originalEvent:t}).isDefaultPrevented())return null;if(r&&zh(r,e))return null;if(l[c]&&(l[c].beforeBookmark=s),i.custom_undo_redo_levels&&l.length>i.custom_undo_redo_levels){for(n=0;n<l.length-1;n++)l[n]=l[n+1];l.length--,c=l.length}e.bookmark=Ec.getUndoBookmark(u.selection),c<l.length-1&&(l.length=c+1),l.push(e),c=l.length-1;var a={level:e,lastLevel:r,originalEvent:t};return u.fire("AddUndo",a),0<c&&(d(!0),u.fire("change",a)),e},undo:function(){var e;return o.typing&&(o.add(),o.typing=!1,i(!1)),0<c&&(e=l[--c],Fh(u,e,!0),d(!0),u.fire("undo",{level:e})),e},redo:function(){var e;return c<l.length-1&&(e=l[++c],Fh(u,e,!1),d(!0),u.fire("redo",{level:e})),e},clear:function(){l=[],c=0,o.typing=!1,o.data=l,u.fire("ClearUndos")},hasUndo:function(){return 0<c||o.typing&&l[0]&&!zh(Mh(u),l[0])},hasRedo:function(){return c<l.length-1&&!o.typing},transact:function(e){return n(),o.beforeChange(),o.ignore(e),o.add()},ignore:function(e){try{t++,e()}finally{t--}},extra:function(e,t){var n,r;o.transact(e)&&(r=l[c].bookmark,n=l[c-1],Fh(u,n,!0),o.transact(t)&&(l[c-1].beforeBookmark=r))}}}var qh,Vh,Hh=function(e){return e&&/^(IMG)$/.test(e.nodeName)},jh=function(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)},$h=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},Wh={isInlineBlock:Hh,moveStart:function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer;if((n.startContainer!==n.endContainer||!Hh(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?r=new ao(u=i[a],e.getParent(u,e.isBlock)):(r=new ao(u=i[i.length-1],e.getParent(u,e.isBlock))).next(!0),o=r.current();o;o=r.next())if(3===o.nodeType&&!jh(o))return n.setStart(o,0),void t.setRng(n)},getNonWhiteSpaceSibling:function(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1===e.nodeType||!jh(e))return e},isTextBlock:function(e,t){return t.nodeType&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},isValid:function(e,t,n){return e.schema.isValidChild(t,n)},isWhiteSpaceNode:jh,replaceVars:function(e,n){return"string"!=typeof e?e=e(n):n&&(e=e.replace(/%(\w+)/g,function(e,t){return n[t]||e})),e},isEq:function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},normalizeStyleValue:$h,getStyle:function(e,t,n){return $h(e,e.getStyle(t,n),n)},getTextDecoration:function(t,e){var n;return t.getParent(e,function(e){return(n=t.getStyle(e,"text-decoration"))&&"none"!==n}),n},getParents:function(e,t,n){return e.getParents(t,n,e.getRoot())}},Kh=Mc,Xh=Wh.getParents,Yh=Wh.isWhiteSpaceNode,Gh=Wh.isTextBlock,Jh=function(e,t){for(void 0===t&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)(e=e.childNodes[t])&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}},Qh=function(e,t){for(var n=t;n;){if(1===n.nodeType&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t;n=n.parentNode}return t},Zh=function(e,t,n,r){var o,i,a=n.nodeValue;return void 0===r&&(r=e?a.length:0),e?(o=a.lastIndexOf(" ",r),-1===(o=(i=a.lastIndexOf("\xa0",r))<o?o:i)||t||o++):(o=a.indexOf(" ",r),i=a.indexOf("\xa0",r),o=-1!==o&&(-1===i||o<i)?o:i),o},ev=function(e,t,n,r,o,i){var a,u,s,c;if(3===n.nodeType){if(-1!==(s=Zh(o,i,n,r)))return{container:n,offset:s};c=n}for(a=new ao(n,e.getParent(n,e.isBlock)||t);u=a[o?"prev":"next"]();)if(3===u.nodeType){if(-1!==(s=Zh(o,i,c=u)))return{container:u,offset:s}}else if(e.isBlock(u))break;if(c)return{container:c,offset:r=o?0:c.length}},tv=function(e,t,n,r,o){var i,a,u,s;for(3===r.nodeType&&0===r.nodeValue.length&&r[o]&&(r=r[o]),i=Xh(e,r),a=0;a<i.length;a++)for(u=0;u<t.length;u++)if(!("collapsed"in(s=t[u])&&s.collapsed!==n.collapsed)&&e.is(i[a],s.selector))return i[a];return r},nv=function(t,e,n,r){var o,i=t.dom,a=i.getRoot();if(e[0].wrapper||(o=i.getParent(n,e[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH");o=i.getParent(3===n.nodeType?n.parentNode:n,function(e){return e!==a&&Gh(t,e)},u)}if(o&&e[0].wrapper&&(o=Xh(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!Wh.isEq(o,"br")););return o||n},rv=function(e,t,n,r,o,i,a){var u,s,c,l,f,d;if(u=s=a?n:o,l=a?"previousSibling":"nextSibling",f=e.getRoot(),3===u.nodeType&&!Yh(u)&&(a?0<r:i<u.nodeValue.length))return u;for(;;){if(!t[0].block_expand&&e.isBlock(s))return s;for(c=s[l];c;c=c[l])if(!Kh(c)&&!Yh(c)&&("BR"!==(d=c).nodeName||!d.getAttribute("data-mce-bogus")||d.nextSibling))return s;if(s===f||s.parentNode===f){u=s;break}s=s.parentNode}return u},ov=function(e,t,n,r){var o,i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset,c=e.dom;return 1===i.nodeType&&i.hasChildNodes()&&3===(i=ua(i,a)).nodeType&&(a=0),1===u.nodeType&&u.hasChildNodes()&&3===(u=ua(u,t.collapsed?s:s-1)).nodeType&&(s=u.nodeValue.length),i=Qh(c,i),u=Qh(c,u),(Kh(i.parentNode)||Kh(i))&&3===(i=(i=Kh(i)?i:i.parentNode).nextSibling||i).nodeType&&(a=0),(Kh(u.parentNode)||Kh(u))&&3===(u=(u=Kh(u)?u:u.parentNode).previousSibling||u).nodeType&&(s=u.length),n[0].inline&&(t.collapsed&&((o=ev(c,e.getBody(),i,a,!0,r))&&(i=o.container,a=o.offset),(o=ev(c,e.getBody(),u,s,!1,r))&&(u=o.container,s=o.offset)),u=r?u:function(e,t){var n=Jh(e,t);if(n.node){for(;n.node&&0===n.offset&&n.node.previousSibling;)n=Jh(n.node.previousSibling);n.node&&0<n.offset&&3===n.node.nodeType&&" "===n.node.nodeValue.charAt(n.offset-1)&&1<n.offset&&(e=n.node).splitText(n.offset-1)}return e}(u,s)),(n[0].inline||n[0].block_expand)&&(n[0].inline&&3===i.nodeType&&0!==a||(i=rv(c,n,i,a,u,s,!0)),n[0].inline&&3===u.nodeType&&s!==u.nodeValue.length||(u=rv(c,n,i,a,u,s,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(i=tv(c,n,t,i,"previousSibling"),u=tv(c,n,t,u,"nextSibling")),(n[0].block||n[0].selector)&&(i=nv(e,n,i,"previousSibling"),u=nv(e,n,u,"nextSibling"),n[0].block&&(c.isBlock(i)||(i=rv(c,n,i,a,u,s,!0)),c.isBlock(u)||(u=rv(c,n,i,a,u,s,!1)))),1===i.nodeType&&(a=c.nodeIndex(i),i=i.parentNode),1===u.nodeType&&(s=c.nodeIndex(u)+1,u=u.parentNode),{startContainer:i,startOffset:a,endContainer:u,endOffset:s}},iv=Wh.isEq,av=function(e,t,n){var r=e.formatter.get(n);if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0;return!1},uv=function(t,e,n,r){var o=t.dom.getRoot();return e!==o&&(e=t.dom.getParent(e,function(e){return!!av(t,e,n)||e.parentNode===o||!!lv(t,e,n,r,!0)}),lv(t,e,n,r))},sv=function(e,t,n){return!!iv(t,n.inline)||!!iv(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},cv=function(e,t,n,r,o,i){var a,u,s,c=n[r];if(n.onmatch)return n.onmatch(t,n,r);if(c)if("undefined"==typeof c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):Wh.getStyle(e,t,a),o&&!u&&!n.exact)return;if((!o||n.exact)&&!iv(u,Wh.normalizeStyleValue(e,Wh.replaceVars(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):Wh.getStyle(e,t,c[s]))return n;return n},lv=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom;if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],sv(e.dom,t,i)&&cv(l,t,i,"attributes",o,r)&&cv(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return;return i}},fv={matchNode:lv,matchName:sv,match:function(e,t,n,r){var o;return r?uv(e,r,t,n):(r=e.selection.getNode(),!!uv(e,r,t,n)||!((o=e.selection.getStart())===r||!uv(e,o,t,n)))},matchAll:function(r,o,i){var e,a=[],u={};return e=r.selection.getStart(),r.dom.getParent(e,function(e){var t,n;for(t=0;t<o.length;t++)n=o[t],!u[n]&&lv(r,e,n,i)&&(u[n]=!0,a.push(n))},r.dom.getRoot()),a},canApply:function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom;if(u)for(n=e.selection.getStart(),r=Wh.getParents(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0;for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1},matchesUnInheritedFormatSelector:av},dv=function(e,t){return e.splitText(t)},mv=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset;return t===r&&Oo.isText(t)?0<n&&n<t.nodeValue.length&&(t=(r=dv(t,n)).previousSibling,n<o?(t=r=dv(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(Oo.isText(t)&&0<n&&n<t.nodeValue.length&&(t=dv(t,n),n=0),Oo.isText(r)&&0<o&&o<r.nodeValue.length&&(o=(r=dv(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},pv=Ri,gv="_mce_caret",hv=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==pv||1<e.childNodes.length)return[];1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},vv=function(e){var t;if(e)for(e=(t=new ao(e,e)).current();e;e=t.next())if(3===e.nodeType)return e;return null},yv=function(e){var t=Vn.fromTag("span");return lr.setAll(t,{id:gv,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&Hu.append(t,Vn.fromText(pv)),t},bv=function(e,t,n,r){var o,i,a,u;o=t.getRng(!0),i=e.getParent(n,e.isBlock),hv(n)?(!1!==r&&(o.setStartBefore(n),o.setEndBefore(n)),e.remove(n)):((u=vv(n))&&u.nodeValue.charAt(0)===pv&&u.deleteData(0,1),a=u,o.startContainer===a&&0<o.startOffset&&o.setStart(a,o.startOffset-1),o.endContainer===a&&0<o.endOffset&&o.setEnd(a,o.endOffset-1),e.remove(n,!0)),i&&e.isEmpty(i)&&Kc(Vn.fromDom(i)),t.setRng(o)},Cv=function(e,t,n,r,o){if(r)bv(t,n,r,o);else if(!(r=Tc(e,n.getStart())))for(;r=t.get(gv);)bv(t,n,r,!1)},xv=function(e,t,n){var r=e.dom,o=r.getParent(n,da.curry(Wh.isTextBlock,e));o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(Wc(Vn.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))},wv=function(e,t){return e.appendChild(t),t},Nv=function(e,t){var n=H.foldr(e,function(e,t){return wv(e,t.cloneNode(!1))},t);return wv(n,n.ownerDocument.createTextNode(pv))},Ev=function(e){var i=e.dom,a=e.selection,u=e.getBody();e.on("mouseup keydown",function(e){var t,n,r,o;t=u,n=i,r=a,o=e.keyCode,Cv(t,n,r,null,!1),8===o&&r.isCollapsed()&&r.getStart().innerHTML===pv&&Cv(t,n,r,Tc(t,r.getStart())),37!==o&&39!==o||Cv(t,n,r,Tc(t,r.getStart()))})},Sv=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(Zn.name(t))&&!kc(t.dom())&&!Oo.isBogus(t.dom())},kv={},Tv=Bt.filter,Av=Bt.each;Vh=function(e){var t,n,r=e.selection.getRng();t=Oo.matchNodeNames("pre"),r.collapsed||(n=e.selection.getSelectedBlocks(),Av(Tv(Tv(n,t),function(e){return t(e.previousSibling)&&-1!==Bt.indexOf(n,e.previousSibling)}),function(e){var t,n;t=e.previousSibling,tn(n=e).remove(),tn(t).append("<br><br>").append(n.childNodes)}))},kv[qh="pre"]||(kv[qh]=[]),kv[qh].push(Vh);var Rv=function(e,t){Av(kv[e],function(e){e(t)})},_v=It.each,Bv=function(e,t,o){var n,r,i,a,u,s,c,l=t.startContainer,f=t.startOffset,d=t.endContainer,m=t.endOffset;if(0<(c=e.select("td[data-mce-selected],th[data-mce-selected]")).length)_v(c,function(e){o([e])});else{var p,g,h,v=function(e){var t;return 3===(t=e[0]).nodeType&&t===l&&f>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===m&&0<e.length&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e},y=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e);return r},b=function(e,t){do{if(e.parentNode===t)return e;e=e.parentNode}while(e)},C=function(e,t,n){var r=n?"nextSibling":"previousSibling";for(u=(a=e).parentNode;a&&a!==t;a=u)u=a.parentNode,(s=y(a===e?a:a[r],r)).length&&(n||s.reverse(),o(v(s)))};if(1===l.nodeType&&l.hasChildNodes()&&(l=l.childNodes[f]),1===d.nodeType&&d.hasChildNodes()&&(g=m,h=(p=d).childNodes,--g>h.length-1?g=h.length-1:g<0&&(g=0),d=h[g]||p),l===d)return o(v([l]));for(n=e.findCommonAncestor(l,d),a=l;a;a=a.parentNode){if(a===d)return C(l,n,!0);if(a===n)break}for(a=d;a;a=a.parentNode){if(a===l)return C(d,n);if(a===n)break}r=b(l,n)||l,i=b(d,n)||d,C(l,r,!0),(s=y(r===l?r:r.nextSibling,"nextSibling",i===d?i.nextSibling:i)).length&&o(v(s)),C(d,i)}},Dv=/^(src|href|style)$/,Ov=It.each,Pv=Wh.isEq,Lv=function(e){return/^(TH|TD)$/.test(e.nodeName)},Iv=function(e,t,n){var r,o,i;return r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],Oo.isElement(r)&&(i=r.childNodes.length-1,!n&&o&&o--,r=r.childNodes[i<o?i:o]),Oo.isText(r)&&n&&o>=r.nodeValue.length&&(r=new ao(r,e.getBody()).next()||r),Oo.isText(r)&&!n&&0===o&&(r=new ao(r,e.getBody()).prev()||r),r},Mv=function(e,t,n,r){var o=e.create(n,r);return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Fv=function(e,t,n,r){return!(t=Wh.getNonWhiteSpaceSibling(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},zv=function(e,n,r,o,i){var t,a,u,s,c,l,f,d,m,p,g,h,v,y,b=e.dom;if(c=b,!(Pv(l=o,(f=n).inline)||Pv(l,f.block)||(f.selector?Oo.isElement(l)&&c.is(l,f.selector):void 0)||(s=o,n.links&&"A"===s.tagName)))return!1;if("all"!==n.remove)for(Ov(n.styles,function(e,t){e=Wh.normalizeStyleValue(b,Wh.replaceVars(e,r),t),"number"==typeof t&&(t=e,i=0),(n.remove_similar||!i||Pv(Wh.getStyle(b,i,t),e))&&b.setStyle(o,t,""),u=1}),u&&""===b.getAttrib(o,"style")&&(o.removeAttribute("style"),o.removeAttribute("data-mce-style")),Ov(n.attributes,function(e,t){var n;if(e=Wh.replaceVars(e,r),"number"==typeof t&&(t=e,i=0),!i||Pv(b.getAttrib(i,t),e)){if("class"===t&&(e=b.getAttrib(o,t))&&(n="",Ov(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(n+=(n?" ":"")+e)}),n))return void b.setAttrib(o,t,n);"class"===t&&o.removeAttribute("className"),Dv.test(t)&&o.removeAttribute("data-mce-"+t),o.removeAttribute(t)}}),Ov(n.classes,function(e){e=Wh.replaceVars(e,r),i&&!b.hasClass(i,e)||b.removeClass(o,e)}),a=b.getAttribs(o),t=0;t<a.length;t++){var C=a[t].nodeName;if(0!==C.indexOf("_")&&0!==C.indexOf("data-"))return!1}return"none"!==n.remove?(d=e,p=n,h=(m=o).parentNode,v=d.dom,y=d.settings.forced_root_block,p.block&&(y?h===v.getRoot()&&(p.list_block&&Pv(m,p.list_block)||Ov(It.grep(m.childNodes),function(e){Wh.isValid(d,y,e.nodeName.toLowerCase())?g?g.appendChild(e):(g=Mv(v,e,y),v.setAttribs(g,d.settings.forced_root_block_attrs)):g=0})):v.isBlock(m)&&!v.isBlock(h)&&(Fv(v,m,!1)||Fv(v,m.firstChild,!0,1)||m.insertBefore(v.create("br"),m.firstChild),Fv(v,m,!0)||Fv(v,m.lastChild,!1,1)||m.appendChild(v.create("br")))),p.selector&&p.inline&&!Pv(p.inline,m)||v.remove(m,1),!0):void 0},Uv=zv,qv=function(s,c,l,e,f){var t,n,d=s.formatter.get(c),m=d[0],a=!0,u=s.dom,r=s.selection,o=function(e){var n,t,r,o,i,a,u=(n=s,t=e,r=c,o=l,i=f,Ov(Wh.getParents(n.dom,t.parentNode).reverse(),function(e){var t;a||"_start"===e.id||"_end"===e.id||(t=fv.matchNode(n,e,r,o,i))&&!1!==t.split&&(a=e)}),a);return function(e,t,n,r,o,i,a,u){var s,c,l,f,d,m,p=e.dom;if(n){for(m=n.parentNode,s=r.parentNode;s&&s!==m;s=s.parentNode){for(c=p.clone(s,!1),d=0;d<t.length;d++)if(zv(e,t[d],u,c,c)){c=0;break}c&&(l&&c.appendChild(l),f||(f=c),l=c)}!i||a.mixed&&p.isBlock(n)||(r=p.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o))}return r}(s,d,u,e,e,!0,m,l)},p=function(e){var t,n,r,o,i;if(Oo.isElement(e)&&u.getContentEditable(e)&&(o=a,a="true"===u.getContentEditable(e),i=!0),t=It.grep(e.childNodes),a&&!i)for(n=0,r=d.length;n<r&&!zv(s,d[n],l,e,e);n++);if(m.deep&&t.length){for(n=0,r=t.length;n<r;n++)p(t[n]);i&&(a=o)}},i=function(e){var t=u.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return Mc(n)&&(n=n[e?"firstChild":"lastChild"]),Oo.isText(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),u.remove(t,!0),n},g=function(e){var t,n,r=e.commonAncestorContainer;if(e=ov(s,e,d,!0),m.split){if((t=Iv(s,e,!0))!==(n=Iv(s,e))){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"===t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&Lv(n)&&n.firstChild&&(n=n.firstChild||n),u.isChildOf(t,n)&&t!==n&&!u.isBlock(n)&&!Lv(t)&&!Lv(n))return t=Mv(u,t,"span",{id:"_start","data-mce-type":"bookmark"}),o(t),void(t=i(!0));t=Mv(u,t,"span",{id:"_start","data-mce-type":"bookmark"}),n=Mv(u,n,"span",{id:"_end","data-mce-type":"bookmark"}),o(t),o(n),t=i(!0),n=i()}else t=n=o(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=u.nodeIndex(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=u.nodeIndex(n)+1}Bv(u,e,function(e){Ov(e,function(e){p(e),Oo.isElement(e)&&"underline"===s.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===Wh.getTextDecoration(u,e.parentNode)&&zv(s,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})};if(e)e.nodeType?((n=u.createRng()).setStartBefore(e),n.setEndAfter(e),g(n)):g(e);else if("false"!==u.getContentEditable(r.getNode()))r.isCollapsed()&&m.inline&&!u.select("td[data-mce-selected],th[data-mce-selected]").length?function(e,t,n,r){var o,i,a,u,s,c,l,f=e.dom,d=e.selection,m=[],p=d.getRng();for(o=p.startContainer,i=p.startOffset,3===(s=o).nodeType&&(i!==o.nodeValue.length&&(u=!0),s=s.parentNode);s;){if(fv.matchNode(e,s,t,n,r)){c=s;break}s.nextSibling&&(u=!0),m.push(s),s=s.parentNode}if(c)if(u){a=d.getBookmark(),p.collapse(!0);var g=ov(e,p,e.formatter.get(t),!0);g=mv(g),e.formatter.remove(t,n,g),d.moveToBookmark(a)}else{l=Tc(e.getBody(),c);var h=yv(!1).dom(),v=Nv(m,h);xv(e,h,l||c),bv(f,d,l,!1),d.setCursorLocation(v,1),f.isEmpty(c)&&f.remove(c)}}(s,c,l,f):(t=Ec.getPersistentBookmark(s.selection,!0),g(r.getRng()),r.moveToBookmark(t),m.inline&&fv.match(s,c,l,r.getStart())&&Wh.moveStart(u,r,r.getRng()),s.nodeChanged());else{e=r.getNode();for(var h=0,v=d.length;h<v&&(!d[h].ceFalseOverride||!zv(s,d[h],l,e,e));h++);}},Vv=It.each,Hv=function(e){return e&&1===e.nodeType&&!Mc(e)&&!kc(e)&&!Oo.isBogus(e)},jv=function(e,t){var n;for(n=e;n;n=n[t]){if(3===n.nodeType&&0!==n.nodeValue.length)return e;if(1===n.nodeType&&!Mc(n))return n}return e},$v=function(e,t,n){var r,o,i=new zc(e);if(t&&n&&(t=jv(t,"previousSibling"),n=jv(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o);return e.remove(n),It.each(It.grep(n.childNodes),function(e){t.appendChild(e)}),t}return n},Wv=function(e,t,n){Vv(e.childNodes,function(e){Hv(e)&&(t(e)&&n(e),e.hasChildNodes()&&Wv(e,t,n))})},Kv=function(n,e){return V.curry(function(e,t){return!(!t||!Wh.getStyle(n,t,e))},e)},Xv=function(r,e,t){return V.curry(function(e,t,n){r.setStyle(n,e,t),""===n.getAttribute("style")&&n.removeAttribute("style"),Yv(r,n)},e,t)},Yv=function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)},Gv=function(e,t){var n;1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType&&(n=Wh.getTextDecoration(e,t.parentNode),e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null))},Jv=function(n,e,r,o){Vv(e,function(t){Vv(n.dom.select(t.inline,o),function(e){Hv(e)&&Uv(n,t,r,e,t.exact?e:null)}),function(r,e,t){if(e.clear_child_styles){var n=e.links?"*:not(a)":"*";Vv(r.select(n,t),function(n){Hv(n)&&Vv(e.styles,function(e,t){r.setStyle(n,t,"")})})}}(n.dom,t,o)})},Qv=function(e,t,n,r){(t.styles.color||t.styles.textDecoration)&&(It.walk(r,V.curry(Gv,e),"childNodes"),Gv(e,r))},Zv=function(e,t,n,r){t.styles&&t.styles.backgroundColor&&Wv(r,Kv(e,"fontSize"),Xv(e,"backgroundColor",Wh.replaceVars(t.styles.backgroundColor,n)))},ey=function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(Wv(r,Kv(e,"fontSize"),Xv(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))},ty=function(e,t,n,r){r&&!1!==t.merge_siblings&&(r=$v(e,Wh.getNonWhiteSpaceSibling(r),r),r=$v(e,r,Wh.getNonWhiteSpaceSibling(r,!0)))},ny=function(t,n,r,o,i){fv.matchNode(t,i.parentNode,r,o)&&Uv(t,n,o,i)||n.merge_with_parents&&t.dom.getParent(i.parentNode,function(e){if(fv.matchNode(t,e,r,o))return Uv(t,n,o,i),!0})},ry=It.each,oy=function(p,g,h,r){var e,t,v=p.formatter.get(g),y=v[0],o=!r&&p.selection.isCollapsed(),i=p.dom,n=p.selection,b=function(n,e){if(e=e||y,n){if(e.onformat&&e.onformat(n,e,h,r),ry(e.styles,function(e,t){i.setStyle(n,t,Wh.replaceVars(e,h))}),e.styles){var t=i.getAttrib(n,"style");t&&n.setAttribute("data-mce-style",t)}ry(e.attributes,function(e,t){i.setAttrib(n,t,Wh.replaceVars(e,h))}),ry(e.classes,function(e){e=Wh.replaceVars(e,h),i.hasClass(n,e)||i.addClass(n,e)})}},C=function(e,t){var n=!1;return!!y.selector&&(ry(e,function(e){if(!("collapsed"in e&&e.collapsed!==o))return i.is(t,e.selector)&&!kc(t)?(b(t,e),!(n=!0)):void 0}),n)},a=function(s,e,t,c){var l,f,d=[],m=!0;l=y.inline||y.block,f=s.create(l),b(f),Bv(s,e,function(e){var a,u=function(e){var t,n,r,o;if(o=m,t=e.nodeName.toLowerCase(),n=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&s.getContentEditable(e)&&(o=m,m="true"===s.getContentEditable(e),r=!0),Wh.isEq(t,"br"))return a=0,void(y.block&&s.remove(e));if(y.wrapper&&fv.matchNode(p,e,g,h))a=0;else{if(m&&!r&&y.block&&!y.wrapper&&Wh.isTextBlock(p,t)&&Wh.isValid(p,n,l))return e=s.rename(e,l),b(e),d.push(e),void(a=0);if(y.selector){var i=C(v,e);if(!y.inline||i)return void(a=0)}!m||r||!Wh.isValid(p,l,t)||!Wh.isValid(p,n,l)||!c&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||kc(e)||y.inline&&s.isBlock(e)?(a=0,ry(It.grep(e.childNodes),u),r&&(m=o),a=0):(a||(a=s.clone(f,!1),e.parentNode.insertBefore(a,e),d.push(a)),a.appendChild(e))}};ry(e,u)}),!0===y.links&&ry(d,function(e){var t=function(e){"A"===e.nodeName&&b(e,y),ry(It.grep(e.childNodes),t)};t(e)}),ry(d,function(e){var t,n,r,o,i,a=function(e){var n=!1;return ry(e.childNodes,function(e){if((t=e)&&1===t.nodeType&&!Mc(t)&&!kc(t)&&!Oo.isBogus(t))return n=e,!1;var t}),n};n=0,ry(e.childNodes,function(e){Wh.isWhiteSpaceNode(e)||Mc(e)||n++}),t=n,!(1<d.length)&&s.isBlock(e)||0!==t?(y.inline||y.wrapper)&&(y.exact||1!==t||((o=a(r=e))&&!Mc(o)&&fv.matchName(s,o,y)&&(i=s.clone(o,!1),b(i),s.replace(i,r,!0),s.remove(o,1)),e=i||r),Jv(p,v,h,e),ny(p,y,g,h,e),Zv(s,y,h,e),ey(s,y,h,e),ty(s,y,h,e)):s.remove(e,1)})};if("false"!==i.getContentEditable(n.getNode())){if(y){if(r)r.nodeType?C(v,r)||((t=i.createRng()).setStartBefore(r),t.setEndAfter(r),a(i,ov(p,t,v),0,!0)):a(i,r,0,!0);else if(o&&y.inline&&!i.select("td[data-mce-selected],th[data-mce-selected]").length)!function(e,t,n){var r,o,i,a,u,s,c=e.selection;a=(r=c.getRng(!0)).startOffset,s=r.startContainer.nodeValue,(o=Tc(e.getBody(),c.getStart()))&&(i=vv(o));var l,f,d=/[^\s\u00a0\u00ad\u200b\ufeff]/;s&&0<a&&a<s.length&&d.test(s.charAt(a))&&d.test(s.charAt(a-1))?(u=c.getBookmark(),r.collapse(!0),r=ov(e,r,e.formatter.get(t)),r=mv(r),e.formatter.apply(t,n,r),c.moveToBookmark(u)):(o&&i.nodeValue===pv||(l=e.getDoc(),f=yv(!0).dom(),i=(o=l.importNode(f,!0)).firstChild,r.insertNode(o),a=1),e.formatter.apply(t,n,o),c.setCursorLocation(i,a))}(p,g,h);else{var u=p.selection.getNode();p.settings.forced_root_block||!v[0].defaultBlock||i.getParent(u,i.isBlock)||oy(p,v[0].defaultBlock),p.selection.setRng(Zc(p.selection.getRng())),e=Ec.getPersistentBookmark(p.selection,!0),a(i,ov(p,n.getRng(),v)),y.styles&&Qv(i,y,h,u),n.moveToBookmark(e),Wh.moveStart(i,n,n.getRng()),p.nodeChanged()}Rv(g,p)}}else{r=n.getNode();for(var s=0,c=v.length;s<c;s++)if(v[s].ceFalseOverride&&i.is(r,v[s].selector))return void b(r,v[s])}},iy={applyFormat:oy},ay=It.each,uy=function(e,t,n,r,o){var i,a,u,s,c,l,f,d;null===t.get()&&(a=e,u={},(i=t).set({}),a.on("NodeChange",function(n){var r=Wh.getParents(a.dom,n.element),o={};r=It.grep(r,function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}),ay(i.get(),function(e,n){ay(r,function(t){return a.formatter.matchNode(t,n,{},e.similar)?(u[n]||(ay(e,function(e){e(!0,{node:t,format:n,parents:r})}),u[n]=e),o[n]=e,!1):!fv.matchesUnInheritedFormatSelector(a,t,n)&&void 0})}),ay(u,function(e,t){o[t]||(delete u[t],ay(e,function(e){e(!1,{node:n.element,format:t,parents:r})}))})})),c=n,l=r,f=o,d=(s=t).get(),ay(c.split(","),function(e){d[e]||(d[e]=[],d[e].similar=f),d[e].push(l)}),s.set(d)},sy={get:function(r){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(n,e,t){It.each(t,function(e,t){r.setAttrib(n,t,e)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]};return It.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){t[e]={block:e,remove:"all"}}),t}},cy=It.each,ly=vi.DOM,fy=function(e,t){var n,o,r,m=t&&t.schema||oi({}),p=function(e){var t,n,r;return o="string"==typeof e?{name:e,classes:[],attrs:{}}:e,t=ly.create(o.name),n=t,(r=o).classes.length&&ly.addClass(n,r.classes.join(" ")),ly.setAttribs(n,r.attrs),t},g=function(n,e,t){var r,o,i,a,u,s,c,l,f=0<e.length&&e[0],d=f&&f.name;if(u=d,s="string"!=typeof(a=n)?a.nodeName.toLowerCase():a,c=m.getElementRule(s),i=!(!(l=c&&c.parentsRequired)||!l.length)&&(u&&-1!==It.inArray(l,u)?u:l[0]))d===i?(o=e[0],e=e.slice(1)):o=i;else if(f)o=e[0],e=e.slice(1);else if(!t)return n;return o&&(r=p(o)).appendChild(n),t&&(r||(r=ly.create("div")).appendChild(n),It.each(t,function(e){var t=p(e);r.insertBefore(t,n)})),g(r,e,o&&o.siblings)};return e&&e.length?(o=e[0],n=p(o),(r=ly.create("div")).appendChild(g(n,e.slice(1),o.siblings)),r):""},dy=function(e){var t,a={classes:[],attrs:{}};return"*"!==(e=a.selector=It.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(e,t,n,r,o){switch(t){case"#":a.attrs.id=n;break;case".":a.classes.push(n);break;case":":-1!==It.inArray("checked disabled enabled read-only required".split(" "),n)&&(a.attrs[n]=n)}if("["===r){var i=o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);i&&(a.attrs[i[1]]=i[2])}return""})),a.name=t||"div",a},my=function(e){return e&&"string"==typeof e?(e=(e=e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),It.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/),function(e){var t=It.map(e.split(/(?:~\+|~|\+)/),dy),n=t.pop();return t.length&&(n.siblings=t),n}).reverse()):[]},py=function(n,e){var t,r,o,i,a,u,s="";if(!1===(u=n.settings.preview_styles))return"";"string"!=typeof u&&(u="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");var c=function(e){return e.replace(/%(\w+)/g,"")};if("string"==typeof e){if(!(e=n.formatter.get(e)))return;e=e[0]}return"preview"in e&&!1===(u=e.preview)?"":(t=e.block||e.inline||"span",(i=my(e.selector)).length?(i[0].name||(i[0].name=t),t=e.selector,r=fy(i,n)):r=fy([t],n),o=ly.select(t,r)[0]||r.firstChild,cy(e.styles,function(e,t){(e=c(e))&&ly.setStyle(o,t,e)}),cy(e.attributes,function(e,t){(e=c(e))&&ly.setAttrib(o,t,e)}),cy(e.classes,function(e){e=c(e),ly.hasClass(o,e)||ly.addClass(o,e)}),n.fire("PreviewFormats"),ly.setStyles(r,{position:"absolute",left:-65535}),n.getBody().appendChild(r),a=ly.getStyle(n.getBody(),"fontSize",!0),a=/px$/.test(a)?parseInt(a,10):0,cy(u.split(" "),function(e){var t=ly.getStyle(o,e,!0);if(!("background-color"===e&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(t)&&(t=ly.getStyle(n.getBody(),e,!0),"#ffffff"===ly.toHex(t).toLowerCase())||"color"===e&&"#000000"===ly.toHex(t).toLowerCase())){if("font-size"===e&&/em|%$/.test(t)){if(0===a)return;t=parseFloat(t)/(/%$/.test(t)?100:1)*a+"px"}"border"===e&&t&&(s+="padding:0 2px;"),s+=e+":"+t+";"}}),n.fire("AfterPreviewFormats"),ly.remove(r),s)},gy=function(e,t,n,r,o){var i=t.get(n);!fv.match(e,n,r,o)||"toggle"in i[0]&&!i[0].toggle?iy.applyFormat(e,n,r,o):qv(e,n,r,o)},hy=function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline");for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t]);e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])};function vy(e){var t,n,r,o=(t=e,n={},(r=function(e,t){e&&("string"!=typeof e?It.each(e,function(e,t){r(t,e)}):(t=t.length?t:[t],It.each(t,function(e){"undefined"==typeof e.deep&&(e.deep=!e.selector),"undefined"==typeof e.split&&(e.split=!e.selector||e.inline),"undefined"==typeof e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),n[e]=t))})(sy.get(t.dom)),r(t.settings.formats),{get:function(e){return e?n[e]:n},register:r,unregister:function(e){return e&&n[e]&&delete n[e],n}}),i=ns(null);return hy(e),Ev(e),{get:o.get,register:o.register,unregister:o.unregister,apply:V.curry(iy.applyFormat,e),remove:V.curry(qv,e),toggle:V.curry(gy,e,o),match:V.curry(fv.match,e),matchAll:V.curry(fv.matchAll,e),matchNode:V.curry(fv.matchNode,e),canApply:V.curry(fv.canApply,e),formatChanged:V.curry(uy,e,i),getCssText:V.curry(py,e)}}var yy=function(a){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var o=e[r];for(var i in o)o.hasOwnProperty(i)&&(n[i]=a(n[i],o[i]))}return n}},by=yy(function(e,t){return k.isObject(e)&&k.isObject(t)?by(e,t):t}),Cy=yy(function(e,t){return t}),xy={deepMerge:by,merge:Cy},wy={register:function(t,s,c){t.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attributes.map["data-mce-tabindex"]),n.attr(t,null)}),t.addAttributeFilter("src,href,style",function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,a=s.url_converter,u=s.url_converter_scope;o--;)(r=(n=e[o]).attributes.map[i])!==undefined?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attributes.map[t],"style"===t?r=c.serializeStyle(c.parseStyle(r),n.name):a&&(r=a.call(u,r,t,n.name)),n.attr(t,0<r.length?r:null))}),t.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))}),t.addAttributeFilter("data-mce-type",function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attributes.map["data-mce-type"]||n.cleanup||r.remove()}),t.addNodeFilter("noscript",function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=Ko.decode(t.value))}),t.addNodeFilter("script,style",function(e,t){for(var n,r,o,i=e.length,a=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+a(r)+"\n// ]]>")):"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+a(r)+"\n--\x3e")}),t.addNodeFilter("#comment",function(e){for(var t,n=e.length;n--;)0===(t=e[n]).value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=t.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))}),t.addNodeFilter("xml:namespace,input",function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||"type"in n.attributes.map||n.attr("type","text"))}),t.addAttributeFilter("data-mce-type",function(e){H.each(e,function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(t.schema.getNonEmptyElements())?e.remove():e.unwrap())})}),t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})},trimTrailingBr:function(e){var t,n,r=function(e){return e&&"br"===e.name};r(t=e.lastChild)&&r(n=t.prev)&&(t.remove(),n.remove())}},Ny={process:function(e,t,n){return f=n,(l=e)&&l.hasEventListeners("PreProcess")&&!f.no_events?(o=t,i=n,c=(r=e).dom,o=o.cloneNode(!0),(a=document.implementation).createHTMLDocument&&(u=a.createHTMLDocument(""),It.each("BODY"===o.nodeName?o.childNodes:[o],function(e){u.body.appendChild(u.importNode(e,!0))}),o="BODY"!==o.nodeName?u.body.firstChild:u.body,s=c.doc,c.doc=u),cp(r,xy.merge(i,{node:o})),s&&(c.doc=s),o):t;var r,o,i,a,u,s,c,l,f}},Ey=function(e,u,s){e.addNodeFilter("font",function(e){H.each(e,function(e){var t,n,r=u.parse(e.attr("style")),o=e.attr("color"),i=e.attr("face"),a=e.attr("size");o&&(r.color=o),i&&(r["font-family"]=i),a&&(r["font-size"]=s[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",u.serialize(r)),t=e,n=["color","face","size"],H.each(n,function(e){t.attr(e,null)})})})},Sy=function(e,t){var n,r=ai();t.convert_fonts_to_spans&&Ey(e,r,It.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",function(e){H.each(e,function(e){var t=n.parse(e.attr("style"));t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))})})},ky={register:function(e,t){t.inline_styles&&Sy(e,t)}},Ty=/^[ \t\r\n]*$/,Ay={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Ry=function(e,t,n){var r,o,i=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[i])return e[i];if(e!==t){if(r=e[a])return r;for(o=e.parent;o&&o!==t;o=o.parent)if(r=o[a])return r}},_y=function(){function a(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}return a.create=function(e,t){var n,r;if(n=new a(e,Ay[e]||1),t)for(r in t)n.attr(r,t[r]);return n},a.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},a.prototype.attr=function(e,t){var n,r;if("string"!=typeof e){for(r in e)this.attr(r,e[r]);return this}if(n=this.attributes){if(t!==undefined){if(null===t){if(e in n.map)for(delete n.map[e],r=n.length;r--;)if(n[r].name===e)return n=n.splice(r,1),this;return this}if(e in n.map){for(r=n.length;r--;)if(n[r].name===e){n[r].value=t;break}}else n.push({name:e,value:t});return n.map[e]=t,this}return n.map[e]}},a.prototype.clone=function(){var e,t,n,r,o,i=new a(this.name,this.type);if(n=this.attributes){for((o=[]).map={},e=0,t=n.length;e<t;e++)"id"!==(r=n[e]).name&&(o[o.length]={name:r.name,value:r.value},o.map[r.name]=r.value);i.attributes=o}return i.value=this.value,i.shortEnded=this.shortEnded,i},a.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},a.prototype.unwrap=function(){var e,t;for(e=this.firstChild;e;)t=e.next,this.insert(e,this,!0),e=t;this.remove()},a.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev;return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},a.prototype.append=function(e){var t;return e.parent&&e.remove(),(t=this.lastChild)?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},a.prototype.insert=function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},a.prototype.getAll=function(e){var t,n=[];for(t=this.firstChild;t;t=Ry(t,this))t.name===e&&n.push(t);return n},a.prototype.empty=function(){var e,t,n;if(this.firstChild){for(e=[],n=this.firstChild;n;n=Ry(n,this))e.push(n);for(t=e.length;t--;)(n=e[t]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}return this.firstChild=this.lastChild=null,this},a.prototype.isEmpty=function(e,t,n){var r,o,i=this.firstChild;if(t=t||{},i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(e[i.name])return!1;for(r=i.attributes.length;r--;)if("name"===(o=i.attributes[r].name)||0===o.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!Ty.test(i.value))return!1;if(3===i.type&&i.parent&&t[i.parent.name]&&Ty.test(i.value))return!1;if(n&&n(i))return!1}while(i=Ry(i,this));return!0},a.prototype.walk=function(e){return Ry(this,null,e)},a}(),By=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new _y("br",1)).shortEnded=!0:r.empty().append(new _y("#text",3)).value="\xa0"},Dy=function(e){return Oy(e,"#text")&&"\xa0"===e.firstChild.value},Oy=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Py=function(r,e,t,n){return n.isEmpty(e,t,function(e){return t=e,(n=r.getElementRule(t.name))&&n.paddEmpty;var t,n})},Ly=function(e,t){return e&&(t[e.name]||"br"===e.name)},Iy=function(e,g){var h=e.schema;g.remove_trailing_brs&&e.addNodeFilter("br",function(e,t,n){var r,o,i,a,u,s,c,l,f=e.length,d=It.extend({},h.getBlockElements()),m=h.getNonEmptyElements(),p=h.getNonEmptyElements();for(d.body=1,r=0;r<f;r++)if(i=(o=e[r]).parent,d[o.parent.name]&&o===i.lastChild){for(u=o.prev;u;){if("span"!==(s=u.name)||"bookmark"!==u.attr("data-mce-type")){if("br"!==s)break;if("br"===s){o=null;break}}u=u.prev}o&&(o.remove(),Py(h,m,p,i)&&(c=h.getElementRule(i.name))&&(c.removeEmpty?i.remove():c.paddEmpty&&By(g,n,d,i)))}else{for(a=o;i&&i.firstChild===a&&i.lastChild===a&&!d[(a=i).name];)i=i.parent;a===i&&!0!==g.padd_empty_with_br&&((l=new _y("#text",3)).value="\xa0",o.replace(l))}}),e.addAttributeFilter("href",function(e){var t,n,r,o=e.length;if(!g.allow_unsafe_link_target)for(;o--;)"a"===(t=e[o]).name&&"_blank"===t.attr("target")&&t.attr("rel",(n=t.attr("rel"),r=n?It.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter(function(e){return 0<e.length}).concat(["noopener"]).sort().join(" ")))}),g.allow_html_in_named_anchor||e.addAttributeFilter("id,name",function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);}),g.fix_list_elements&&e.addNodeFilter("ul,ol",function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t);else{var o=new _y("li",1);o.attr("style","list-style-type: none"),t.wrap(o)}}),g.validate&&h.getValidClasses()&&e.addAttributeFilter("class",function(e){for(var t,n,r,o,i,a,u,s=e.length,c=h.getValidClasses();s--;){for(n=(t=e[s]).attr("class").split(" "),i="",r=0;r<n.length;r++)o=n[r],u=!1,(a=c["*"])&&a[o]&&(u=!0),a=c[t.name],!u&&a&&a[o]&&(u=!0),u&&(i&&(i+=" "),i+=o);i.length||(i=null),t.attr("class",i)}})},My=It.makeMap,Fy=It.each,zy=It.explode,Uy=It.extend;function qy(k,T){void 0===T&&(T=oi());var A={},R=[],_={},B={};(k=k||{}).validate=!("validate"in k)||k.validate,k.root_name=k.root_name||"body";var D=function(e){var t,n,r;n in A&&((r=_[n])?r.push(e):_[n]=[e]),t=R.length;for(;t--;)(n=R[t].name)in e.attributes.map&&((r=B[n])?r.push(e):B[n]=[e]);return e},e={schema:T,addAttributeFilter:function(e,n){Fy(zy(e),function(e){var t;for(t=0;t<R.length;t++)if(R[t].name===e)return void R[t].callbacks.push(n);R.push({name:e,callbacks:[n]})})},getAttributeFilters:function(){return[].concat(R)},addNodeFilter:function(e,n){Fy(zy(e),function(e){var t=A[e];t||(A[e]=t=[]),t.push(n)})},getNodeFilters:function(){var e=[];for(var t in A)A.hasOwnProperty(t)&&e.push({name:t,callbacks:A[t]});return e},filterNode:D,parse:function(e,a){var t,n,r,o,i,u,s,c,l,f,d,m=[];a=a||{},_={},B={},l=Uy(My("script,style,head,html,body,title,meta,param"),T.getBlockElements());var p=T.getNonEmptyElements(),g=T.children,h=k.validate,v="forced_root_block"in a?a.forced_root_block:k.forced_root_block,y=T.getWhiteSpaceElements(),b=/^[ \t\r\n]+/,C=/[ \t\r\n]+$/,x=/[ \t\r\n]+/g,w=/^[ \t\r\n]+$/;f=y.hasOwnProperty(a.context)||y.hasOwnProperty(k.root_name);var N=function(e,t){var n,r=new _y(e,t);return e in A&&((n=_[e])?n.push(r):_[e]=[r]),r},E=function(e){var t,n,r,o,i=T.getBlockElements();for(t=e.prev;t&&3===t.type;){if(0<(r=t.value.replace(C,"")).length)return void(t.value=r);if(n=t.next){if(3===n.type&&n.value.length){t=t.prev;continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){t=t.prev;continue}}o=t.prev,t.remove(),t=o}};t=vh({validate:h,allow_script_urls:k.allow_script_urls,allow_conditional_comments:k.allow_conditional_comments,self_closing_elements:function(e){var t,n={};for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t]);return n}(T.getSelfClosingElements()),cdata:function(e){d.append(N("#cdata",4)).value=e},text:function(e,t){var n;f||(e=e.replace(x," "),Ly(d.lastChild,l)&&(e=e.replace(b,""))),0!==e.length&&((n=N("#text",3)).raw=!!t,d.append(n).value=e)},comment:function(e){d.append(N("#comment",8)).value=e},pi:function(e,t){d.append(N(e,7)).value=t,E(d)},doctype:function(e){d.append(N("#doctype",10)).value=e,E(d)},start:function(e,t,n){var r,o,i,a,u;if(i=h?T.getElementRule(e):{}){for((r=N(i.outputName||e,1)).attributes=t,r.shortEnded=n,d.append(r),(u=g[d.name])&&g[r.name]&&!u[r.name]&&m.push(r),o=R.length;o--;)(a=R[o].name)in t.map&&((s=B[a])?s.push(r):B[a]=[r]);l[e]&&E(r),n||(d=r),!f&&y[e]&&(f=!0)}},end:function(e){var t,n,r,o,i;if(n=h?T.getElementRule(e):{}){if(l[e]&&!f){if((t=d.firstChild)&&3===t.type)if(0<(r=t.value.replace(b,"")).length)t.value=r,t=t.next;else for(o=t.next,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.next,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o;if((t=d.lastChild)&&3===t.type)if(0<(r=t.value.replace(C,"")).length)t.value=r,t=t.prev;else for(o=t.prev,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.prev,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o}if(f&&y[e]&&(f=!1),n.removeEmpty&&Py(T,p,y,d)&&!d.attributes.map.name&&!d.attr("id"))return i=d.parent,l[d.name]?d.empty().remove():d.unwrap(),void(d=i);n.paddEmpty&&(Dy(d)||Py(T,p,y,d))&&By(k,a,l,d),d=d.parent}}},T);var S=d=new _y(a.context||k.root_name,11);if(t.parse(e),h&&m.length&&(a.context?a.invalid=!0:function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,p,g,h;for(d=My("tr,td,th,tbody,thead,tfoot,table"),l=T.getNonEmptyElements(),f=T.getWhiteSpaceElements(),m=T.getTextBlockElements(),p=T.getSpecialElements(),t=0;t<e.length;t++)if((n=e[t]).parent&&!n.fixed)if(m[n.name]&&"li"===n.parent.name){for(g=n.next;g&&m[g.name];)g.name="li",g.fixed=!0,n.parent.insert(g,n.parent),g=g.next;n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!T.isValidChild(r.name,n.name)&&!d[r.name];r=r.parent)o.push(r);if(r&&1<o.length){for(o.reverse(),i=a=D(o[0].clone()),c=0;c<o.length-1;c++){for(T.isValidChild(a.name,o[c].name)?(u=D(o[c].clone()),a.append(u)):u=a,s=o[c].firstChild;s&&s!==o[c+1];)h=s.next,u.append(s),s=h;a=u}Py(T,l,f,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(Py(T,l,f,r)||Oy(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((g=n.prev)&&("ul"===g.name||"ul"===g.name)){g.append(n);continue}if((g=n.next)&&("ul"===g.name||"ul"===g.name)){g.insert(n,g.firstChild,!0);continue}n.wrap(D(new _y("ul",1)));continue}T.isValidChild(n.parent.name,"div")&&T.isValidChild("div",n.name)?n.wrap(D(new _y("div",1))):p[n.name]?n.empty().remove():n.unwrap()}}}(m)),v&&("body"===S.name||a.isRootContent)&&function(){var e,t,n=S.firstChild,r=function(e){e&&((n=e.firstChild)&&3===n.type&&(n.value=n.value.replace(b,"")),(n=e.lastChild)&&3===n.type&&(n.value=n.value.replace(C,"")))};if(T.isValidChild(S.name,v.toLowerCase())){for(;n;)e=n.next,3===n.type||1===n.type&&"p"!==n.name&&!l[n.name]&&!n.attr("data-mce-type")?(t||((t=N(v,1)).attr(k.forced_root_block_attrs),S.insert(t,n)),t.append(n)):(r(t),t=null),n=e;r(t)}}(),!a.invalid){for(c in _){for(s=A[c],i=(n=_[c]).length;i--;)n[i].parent||n.splice(i,1);for(r=0,o=s.length;r<o;r++)s[r](n,c,a)}for(r=0,o=R.length;r<o;r++)if((s=R[r]).name in B){for(i=(n=B[s.name]).length;i--;)n[i].parent||n.splice(i,1);for(i=0,u=s.callbacks.length;i<u;i++)s.callbacks[i](n,s.name,a)}}return S}};return Iy(e,k),ky.register(e,k),e}var Vy=function(e,t,n){-1===It.inArray(t,n)&&(e.addAttributeFilter(n,function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),t.push(n))},Hy=function(e,t,n){var r=_i(n.getInner?t.innerHTML:e.getOuterHTML(t));return n.selection||wo(Vn.fromDom(t))?r:It.trim(r)},jy=function(e,t,n){var r=n.selection?xy.merge({forced_root_block:!1},n):n,o=e.parse(t,r);return wy.trimTrailingBr(o),o},$y=function(e,t,n,r,o){var i,a,u,s,c=(i=r,Jc(t,n).serialize(i));return a=e,s=c,!(u=o).no_events&&a?lp(a,xy.merge(u,{content:s})).content:s};function Wy(e,t){var a,u,s,c,l,n,r=(a=e,n=["data-mce-selected"],s=(u=t)&&u.dom?u.dom:vi.DOM,c=u&&u.schema?u.schema:oi(a),a.entity_encoding=a.entity_encoding||"named",a.remove_trailing_brs=!("remove_trailing_brs"in a)||a.remove_trailing_brs,l=qy(a,c),wy.register(l,a,s),{schema:c,addNodeFilter:l.addNodeFilter,addAttributeFilter:l.addAttributeFilter,serialize:function(e,t){var n=xy.merge({format:"html"},t||{}),r=Ny.process(u,e,n),o=Hy(s,r,n),i=jy(l,o,n);return"tree"===n.format?i:$y(u,a,c,i,n)},addRules:function(e){c.addValidElements(e)},setRules:function(e){c.setValidElements(e)},addTempAttr:V.curry(Vy,l,n),getTempAttrs:function(){return n}});return{schema:r.schema,addNodeFilter:r.addNodeFilter,addAttributeFilter:r.addAttributeFilter,serialize:r.serialize,addRules:r.addRules,setRules:r.setRules,addTempAttr:r.addTempAttr,getTempAttrs:r.getTempAttrs}}function Ky(e){return{getBookmark:V.curry(Lc,e),moveToBookmark:V.curry(Ic,e)}}(Ky||(Ky={})).isBookmarkNode=Mc;var Xy=Ky,Yy=Oo.isContentEditableFalse,Gy=Oo.isContentEditableTrue,Jy=function(r,a){var u,s,c,l,f,d,m,p,g,h,v,y,i,b,C,x,w,N=a.dom,E=It.each,S=a.getDoc(),k=document,T=Math.abs,A=Math.round,R=a.getBody();l={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var e=".mce-content-body";a.contentStyles.push(e+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+e+" .mce-resizehandle:hover {background: #000}"+e+" img[data-mce-selected],"+e+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+e+" .mce-clonedresizable {position: absolute;"+(ve.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+e+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");var _=function(e){return e&&("IMG"===e.nodeName||a.dom.is(e,"figure.image"))},n=function(e){var t,n,r=e.target;t=e,n=a.selection.getRng(),!_(t.target)||ih(t.clientX,t.clientY,n)||e.isDefaultPrevented()||(e.preventDefault(),a.selection.select(r))},B=function(e){return a.dom.is(e,"figure.image")?e.querySelector("img"):e},D=function(e){var t=a.settings.object_resizing;return!1!==t&&!ve.iOS&&("string"!=typeof t&&(t="table,img,figure.image,div"),"false"!==e.getAttribute("data-mce-resize")&&e!==a.getBody()&&Pr.is(Vn.fromDom(e),t))},O=function(e){var t,n,r,o;t=e.screenX-d,n=e.screenY-m,b=t*f[2]+h,C=n*f[3]+v,b=b<5?5:b,C=C<5?5:C,(_(u)&&!1!==a.settings.resize_img_proportional?!sh.modifierPressed(e):sh.modifierPressed(e)||_(u)&&f[2]*f[3]!=0)&&(T(t)>T(n)?(C=A(b*y),b=A(C/y)):(b=A(C/y),C=A(b*y))),N.setStyles(B(s),{width:b,height:C}),r=0<(r=f.startPos.x+t)?r:0,o=0<(o=f.startPos.y+n)?o:0,N.setStyles(c,{left:r,top:o,display:"block"}),c.innerHTML=b+" &times; "+C,f[2]<0&&s.clientWidth<=b&&N.setStyle(s,"left",p+(h-b)),f[3]<0&&s.clientHeight<=C&&N.setStyle(s,"top",g+(v-C)),(t=R.scrollWidth-x)+(n=R.scrollHeight-w)!=0&&N.setStyles(c,{left:r-t,top:o-n}),i||(mp(a,u,h,v),i=!0)},P=function(){i=!1;var e=function(e,t){t&&(u.style[e]||!a.schema.isValid(u.nodeName.toLowerCase(),e)?N.setStyle(B(u),e,t):N.setAttrib(B(u),e,t))};e("width",b),e("height",C),N.unbind(S,"mousemove",O),N.unbind(S,"mouseup",P),k!==S&&(N.unbind(k,"mousemove",O),N.unbind(k,"mouseup",P)),N.remove(s),N.remove(c),o(u),pp(a,u,b,C),N.setAttrib(u,"style",N.getAttrib(u,"style")),a.nodeChanged()},o=function(e){var t,r,o,n,i;L(),F(),t=N.getPos(e,R),p=t.x,g=t.y,i=e.getBoundingClientRect(),r=i.width||i.right-i.left,o=i.height||i.bottom-i.top,u!==e&&(u=e,b=C=0),n=a.fire("ObjectSelected",{target:e}),D(e)&&!n.isDefaultPrevented()?E(l,function(n,e){var t;(t=N.get("mceResizeHandle"+e))&&N.remove(t),t=N.add(R,"div",{id:"mceResizeHandle"+e,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+e+"-resize; margin:0; padding:0"}),11===ve.ie&&(t.contentEditable=!1),N.bind(t,"mousedown",function(e){var t;e.stopImmediatePropagation(),e.preventDefault(),d=(t=e).screenX,m=t.screenY,h=B(u).clientWidth,v=B(u).clientHeight,y=v/h,(f=n).startPos={x:r*n[0]+p,y:o*n[1]+g},x=R.scrollWidth,w=R.scrollHeight,s=u.cloneNode(!0),N.addClass(s,"mce-clonedresizable"),N.setAttrib(s,"data-mce-bogus","all"),s.contentEditable=!1,s.unSelectabe=!0,N.setStyles(s,{left:p,top:g,margin:0}),s.removeAttribute("data-mce-selected"),R.appendChild(s),N.bind(S,"mousemove",O),N.bind(S,"mouseup",P),k!==S&&(N.bind(k,"mousemove",O),N.bind(k,"mouseup",P)),c=N.add(R,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},h+" &times; "+v)}),n.elm=t,N.setStyles(t,{left:r*n[0]+p-t.offsetWidth/2,top:o*n[1]+g-t.offsetHeight/2})}):L(),u.setAttribute("data-mce-selected","1")},L=function(){var e,t;for(e in F(),u&&u.removeAttribute("data-mce-selected"),l)(t=N.get("mceResizeHandle"+e))&&(N.unbind(t),N.remove(t))},I=function(e){var t,n=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)};i||a.removed||(E(N.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),t="mousedown"===e.type?e.target:r.getNode(),n(t=N.$(t).closest("table,img,figure.image,hr")[0],R)&&(z(),n(r.getStart(!0),t)&&n(r.getEnd(!0),t))?o(t):L())},M=function(e){return Yy(function(e,t){for(;t&&t!==e;){if(Gy(t)||Yy(t))return t;t=t.parentNode}return null}(a.getBody(),e))},F=function(){for(var e in l){var t=l[e];t.elm&&(N.unbind(t.elm),delete t.elm)}},z=function(){try{a.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}};return a.on("init",function(){z(),ve.ie&&11<=ve.ie&&(a.on("mousedown click",function(e){var t=e.target,n=t.nodeName;i||!/^(TABLE|IMG|HR)$/.test(n)||M(t)||(2!==e.button&&a.selection.select(t,"TABLE"===n),"mousedown"===e.type&&a.nodeChanged())}),a.dom.bind(R,"mscontrolselect",function(e){var t=function(e){we.setEditorTimeout(a,function(){a.selection.select(e)})};if(M(e.target))return e.preventDefault(),void t(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&t(e.target))}));var t=we.throttle(function(e){a.composing||I(e)});a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",t),a.on("keyup compositionend",function(e){u&&"TABLE"===u.nodeName&&t(e)}),a.on("hide blur",L),a.on("contextmenu",n)}),a.on("remove",F),{isResizable:D,showResizeRect:o,hideResizeRect:L,updateResizeRect:I,destroy:function(){u=s=null}}},Qy=function(e){return Oo.isContentEditableTrue(e)||Oo.isContentEditableFalse(e)},Zy=function(e,t,n){var r,o,i,a,u,s=n;if(s.caretPositionFromPoint)(o=s.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0));else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(s.body.createTextRange){r=s.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(c){r=function(e,n,t){var r,o,i;if(r=t.elementFromPoint(e,n),o=t.body.createTextRange(),r&&"HTML"!==r.tagName||(r=t.body),o.moveToElementText(r),0<(i=(i=It.toArray(o.getClientRects())).sort(function(e,t){return(e=Math.abs(Math.max(e.top-n,e.bottom-n)))-(t=Math.abs(Math.max(t.top-n,t.bottom-n)))})).length){n=(i[0].bottom+i[0].top)/2;try{return o.moveToPoint(e,n),o.collapse(!0),o}catch(a){}}return null}(e,t,n)}return i=r,a=n.body,u=i&&i.parentElement?i.parentElement():null,Oo.isContentEditableFalse(function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(u,a,Qy))?null:i}return r},eb=function(n,e){return H.map(e,function(e){var t=n.fire("GetSelectionRange",{range:e});return t.range!==e?t.range:e})},tb=function(e,t){return Vn.fromDom(e.dom().cloneNode(t))},nb=function(e){return tb(e,!0)},rb=function(e){return tb(e,!1)},ob=nb,ib=function(e,t){var n=(t||document).createDocumentFragment();return H.each(e,function(e){n.appendChild(e.dom())}),Vn.fromDom(n)},ab=kr.immutable("element","width","rows"),ub=kr.immutable("element","cells"),sb=kr.immutable("x","y"),cb=function(e,t){var n=parseInt(lr.get(e,t),10);return isNaN(n)?1:n},lb=function(e){return H.foldl(e,function(e,t){return t.cells().length>e?t.cells().length:e},0)},fb=function(e,t){for(var n=e.rows(),r=0;r<n.length;r++)for(var o=n[r].cells(),i=0;i<o.length;i++)if(Mr.eq(o[i],t))return A.some(sb(i,r));return A.none()},db=function(e,t,n,r,o){for(var i=[],a=e.rows(),u=n;u<=o;u++){var s=a[u].cells(),c=t<r?s.slice(t,r+1):s.slice(r,t+1);i.push(ub(a[u].element(),c))}return i},mb=function(e){var o=ab(rb(e),0,[]);return H.each(hu(e,"tr"),function(n,r){H.each(hu(n,"td,th"),function(e,t){!function(e,t,n,r,o){for(var i=cb(o,"rowspan"),a=cb(o,"colspan"),u=e.rows(),s=n;s<n+i;s++){u[s]||(u[s]=ub(ob(r),[]));for(var c=t;c<t+a;c++)u[s].cells()[c]=s===n&&c===t?o:rb(o)}}(o,function(e,t,n){for(;r=t,o=n,i=void 0,((i=e.rows())[o]?i[o].cells():[])[r];)t++;var r,o,i;return t}(o,t,r),r,n,e)})}),ab(o.element(),lb(o.rows()),o.rows())},pb=function(e){return i=t=e,n=H.map(i.rows(),function(e){var t=H.map(e.cells(),function(e){var t=ob(e);return lr.remove(t,"colspan"),lr.remove(t,"rowspan"),t}),n=rb(e.element());return qc(n,t),n}),r=rb(t.element()),o=Vn.fromTag("tbody"),qc(o,n),Hu.append(r,o),r;var t,n,r,o,i},gb=function(l,e,t){return fb(l,e).bind(function(c){return fb(l,t).map(function(e){return t=l,r=e,o=(n=c).x(),i=n.y(),a=r.x(),u=r.y(),s=i<u?db(t,o,i,a,u):db(t,o,u,a,i),ab(t.element(),lb(s),s);var t,n,r,o,i,a,u,s})})},hb=function(n,t){return H.find(n,function(e){return"li"===Zn.name(e)&&Rg(e,t)}).fold(V.constant([]),function(e){return(t=n,H.find(t,function(e){return"ul"===Zn.name(e)||"ol"===Zn.name(e)})).map(function(e){return[Vn.fromTag("li"),Vn.fromTag(Zn.name(e))]}).getOr([]);var t})},vb=function(e,t){var n,r=Vn.fromDom(t.commonAncestorContainer),o=jl(r,e),i=H.filter(o,function(e){return po(e)||fo(e)}),a=hb(o,t),u=i.concat(a.length?a:yo(n=r)?$r.parent(n).filter(vo).fold(V.constant([]),function(e){return[n,e]}):vo(n)?[n]:[]);return H.map(u,rb)},yb=function(){return ib([])},bb=function(e,t){return n=Vn.fromDom(t.cloneContents()),r=vb(e,t),o=H.foldl(r,function(e,t){return Hu.append(t,e),t},n),0<r.length?ib([o]):o;var n,r,o},Cb=function(e,o){return(t=e,n=o[0],kl(n,"table",V.curry(Mr.eq,t))).bind(function(e){var t=o[0],n=o[o.length-1],r=mb(e);return gb(r,t,n).map(function(e){return ib([pb(e)])})}).getOrThunk(yb);var t,n},xb=function(e,t){var n,r,o=Pd(t,e);return 0<o.length?Cb(e,o):(n=e,0<(r=t).length&&r[0].collapsed?yb():bb(n,r[0]))},wb=function(e,t){var n,r=e.selection.getRng(),o=e.dom.create("body"),i=e.selection.getSel(),a=eb(e,Ad(i));if((t=t||{}).get=!0,t.format=t.format||"html",t.selection=!0,(t=e.fire("BeforeGetContent",t)).isDefaultPrevented())return e.fire("GetContent",t),t.content;if("text"===t.format)return e.selection.isCollapsed()?"":_i(r.text||(i.toString?i.toString():""));r.cloneContents?(n=t.contextual?xb(Vn.fromDom(e.getBody()),a).dom():r.cloneContents())&&o.appendChild(n):r.item!==undefined||r.htmlText!==undefined?(o.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),o.removeChild(o.firstChild)):o.innerHTML=r.toString(),t.getInner=!0;var u=e.selection.serializer.serialize(o,t);return"tree"===t.format?u:(t.content=e.selection.isCollapsed()?"":u,e.fire("GetContent",t),t.content)},Nb=function(e,t,n){var r,o,i,a=e.selection.getRng(),u=e.getDoc();if((n=n||{format:"html"}).set=!0,n.selection=!0,n.content=t,n.no_events||!(n=e.fire("BeforeSetContent",n)).isDefaultPrevented()){if(t=n.content,a.insertNode){t+='<span id="__caret">_</span>',a.startContainer===u&&a.endContainer===u?u.body.innerHTML=t:(a.deleteContents(),0===u.body.childNodes.length?u.body.innerHTML=t:a.createContextualFragment?a.insertNode(a.createContextualFragment(t)):(o=u.createDocumentFragment(),i=u.createElement("div"),o.appendChild(i),i.outerHTML=t,a.insertNode(o))),r=e.dom.get("__caret"),(a=u.createRange()).setStartBefore(r),a.setEndBefore(r),e.selection.setRng(a),e.dom.remove("__caret");try{e.selection.setRng(a)}catch(s){}}else a.item&&(u.execCommand("Delete",!1,null),a=e.getRng()),/^\s+/.test(t)?(a.pasteHTML('<span id="__mce_tmp">_</span>'+t),e.dom.remove("__mce_tmp")):a.pasteHTML(t);n.no_events||e.fire("SetContent",n)}else e.fire("SetContent",n)},Eb=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset;return A.from(i).map(Vn.fromDom).map(function(e){return r&&t.collapsed?e:$r.child(e,o(e,a)).getOr(e)}).bind(function(e){return Zn.isElement(e)?A.some(e):$r.parent(e)}).map(function(e){return e.dom()}).getOr(e)},Sb=function(e,t,n){return Eb(e,t,!0,n,function(e,t){return Math.min($r.childNodesCount(e),t)})},kb=function(e,t,n){return Eb(e,t,!1,n,function(e,t){return 0<t?t-1:t})},Tb=function(e,t){for(var n=e;e&&Oo.isText(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n},Ab=It.each,Rb=function(e){return!!e.select},_b=function(e){return!(!e||!e.ownerDocument)&&Mr.contains(Vn.fromDom(e.ownerDocument),Vn.fromDom(e))},Bb=function(u,s,e,c){var n,t,l,f,a,r=function(e,t){return Nb(c,e,t)},o=function(e){var t=m();t.collapse(!!e),i(t)},d=function(){return s.getSelection?s.getSelection():s.document.selection},m=function(){var e,t,n,r,o=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}};if(!s)return null;if(null==(r=s.document))return null;if(c.bookmark!==undefined&&!1===zp(c)){var i=Mm(c);if(i.isSome())return i.map(function(e){return eb(c,[e])[0]}).getOr(r.createRange())}try{(e=d())&&(t=0<e.rangeCount?e.getRangeAt(0):e.createRange?e.createRange():r.createRange())}catch(a){}return(t=eb(c,[t])[0])||(t=r.createRange?r.createRange():r.body.createTextRange()),t.setStart&&9===t.startContainer.nodeType&&t.collapsed&&(n=u.getRoot(),t.setStart(n,0),t.setEnd(n,0)),l&&f&&(0===o(t.START_TO_START,t,l)&&0===o(t.END_TO_END,t,l)?t=f:f=l=null),t},i=function(e,t){var n,r;if((o=e)&&(Rb(o)||_b(o.startContainer)&&_b(o.endContainer))){var o,i=Rb(e)?e:null;if(i){f=null;try{i.select()}catch(a){}}else{if(n=d(),e=c.fire("SetSelectionRange",{range:e,forward:t}).range,n){f=e;try{n.removeAllRanges(),n.addRange(e)}catch(a){}!1===t&&n.extend&&(n.collapse(e.endContainer,e.endOffset),n.extend(e.startContainer,e.startOffset)),l=0<n.rangeCount?n.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!n.setBaseAndExtent||ve.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(r=e.startContainer.childNodes[e.startOffset])&&"IMG"===r.tagName&&(n.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),n.anchorNode===e.startContainer&&n.focusNode===e.endContainer||n.setBaseAndExtent(r,0,r,1)),c.fire("AfterSetSelectionRange",{range:e,forward:t})}}},p=function(){var e,t,n=d();return!(n&&n.anchorNode&&n.focusNode)||((e=u.createRng()).setStart(n.anchorNode,n.anchorOffset),e.collapse(!0),(t=u.createRng()).setStart(n.focusNode,n.focusOffset),t.collapse(!0),e.compareBoundaryPoints(e.START_TO_START,t)<=0)},g={bookmarkManager:null,controlSelection:null,dom:u,win:s,serializer:e,editor:c,collapse:o,setCursorLocation:function(e,t){var n=u.createRng();e?(n.setStart(e,t),n.setEnd(e,t),i(n),o(!1)):(_g(u,n,c.getBody(),!0),i(n))},getContent:function(e){return wb(c,e)},setContent:r,getBookmark:function(e,t){return n.getBookmark(e,t)},moveToBookmark:function(e){return n.moveToBookmark(e)},select:function(e,t){var r,n,o;return(r=u,n=e,o=t,A.from(n).map(function(e){var t=r.nodeIndex(e),n=r.createRng();return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),o&&(_g(r,n,e,!0),_g(r,n,e,!1)),n})).each(i),e},isCollapsed:function(){var e=m(),t=d();return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:p,setNode:function(e){return r(u.getOuterHTML(e)),e},getNode:function(){return e=c.getBody(),(t=m())?(r=t.startContainer,o=t.endContainer,i=t.startOffset,a=t.endOffset,n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?Tb(r.nextSibling,!0):r.parentNode,o=0===a?Tb(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n):e;var e,t,n,r,o,i,a},getSel:d,setRng:i,getRng:m,getStart:function(e){return Sb(c.getBody(),m(),e)},getEnd:function(e){return kb(c.getBody(),m(),e)},getSelectedBlocks:function(e,t){return function(e,t,n,r){var o,i,a=[];if(i=e.getRoot(),n=e.getParent(n||Sb(i,t,!1),e.isBlock),r=e.getParent(r||kb(i,t,!1),e.isBlock),n&&n!==i&&a.push(n),n&&r&&n!==r)for(var u=new ao(o=n,i);(o=u.next())&&o!==r;)e.isBlock(o)&&a.push(o);return r&&n!==r&&r!==i&&a.push(r),a}(u,m(),e,t)},normalize:function(){var e=m(),t=d();if(!_d(t)&&Bg(c)){var n=um(u,e);return n.each(function(e){i(e,p())}),n.getOr(e)}return e},selectorChanged:function(e,t){var i;return a||(a={},i={},c.on("NodeChange",function(e){var n=e.element,r=u.getParents(n,null,u.getRoot()),o={};Ab(a,function(e,n){Ab(r,function(t){if(u.is(t,n))return i[n]||(Ab(e,function(e){e(!0,{node:t,selector:n,parents:r})}),i[n]=e),o[n]=e,!1})}),Ab(i,function(e,t){o[t]||(delete i[t],Ab(e,function(e){e(!1,{node:n,selector:t,parents:r})}))})})),a[e]||(a[e]=[]),a[e].push(t),g},getScrollContainer:function(){for(var e,t=u.getRoot();t&&"BODY"!==t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){return Nu(c,e,t)},placeCaretAt:function(e,t){return i(Zy(e,t,c.getDoc()))},getBoundingClientRect:function(){var e=m();return e.collapsed?La.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){s=l=f=null,t.destroy()}};return n=Xy(g),t=Jy(g,c),g.bookmarkManager=n,g.controlSelection=t,g},Db=Oo.isContentEditableFalse,Ob=aa,Pb=Bs,Lb=_s,Ib=function(e,t){for(;t=e(t);)if(t.isVisible())return t;return t},Mb=function(e,t,n,r){var o,i,a,u,s,c,l=e===iu.Forwards,f=l?Lb:Pb;return!r.collapsed&&(o=Ob(r),Db(o))?tu(e,t,o,e===iu.Backwards,!0):(u=Oi(r.startContainer),f(i=Rs(e,t.getBody(),r))?nu(t,i.getNode(!l)):(i=n(i))?f(i)?tu(e,t,i.getNode(!l),l,!0):f(a=n(i))&&(!(c=bs(s=i,a))&&Oo.isBr(s.getNode())||c)?tu(e,t,a.getNode(!l),l,!0):u?ou(t,i.toRange(),!0):null:u?r:null)},Fb=function(e,t,n,r){var o,i,a,u,s,c,l,f,d;if(d=Ob(r),o=Rs(e,t.getBody(),r),i=n(t.getBody(),Yg(1),o),a=Bt.filter(i,Gg(1)),s=Bt.last(o.getClientRects()),(Lb(o)||Ds(o))&&(d=o.getNode()),(Pb(o)||Os(o))&&(d=o.getNode(!0)),!s)return null;if(c=s.left,(u=nh(a,c))&&Db(u.node))return l=Math.abs(c-u.left),f=Math.abs(c-u.right),tu(e,t,u.node,l<f,!0);if(d){var m=function(e,t,n,r){var o,i,a,u,s,c,l=Ys(t),f=[],d=0,m=function(e){return Bt.last(e.getClientRects())};1===e?(o=l.next,i=ia,a=oa,u=La.after(r)):(o=l.prev,i=oa,a=ia,u=La.before(r)),c=m(u);do{if(u.isVisible()&&!a(s=m(u),c)){if(0<f.length&&i(s,Bt.last(f))&&d++,(s=ta(s)).position=u,s.line=d,n(s))return f;f.push(s)}}while(u=o(u));return f}(e,t.getBody(),Yg(1),d);if(u=nh(Bt.filter(m,Gg(1)),c))return ou(t,u.position.toRange(),!0);if(u=Bt.last(Bt.filter(m,Gg(0))))return ou(t,u.position.toRange(),!0)}},zb=function(e,t,n){var r,o,i,a,u=Ys(e.getBody()),s=da.curry(Ib,u.next),c=da.curry(Ib,u.prev);if(n.collapsed&&e.settings.forced_root_block){if(!(r=e.dom.getParent(n.startContainer,"PRE")))return;(1===t?s(La.fromRangeStart(n)):c(La.fromRangeStart(n)))||(a=(i=e).dom.create(i.settings.forced_root_block),(!ve.ie||11<=ve.ie)&&(a.innerHTML='<br data-mce-bogus="1">'),o=a,1===t?e.$(r).after(o):e.$(r).before(o),e.selection.select(o,!0),e.selection.collapse())}},Ub=function(l,f){return function(){var e,t,n,r,o,i,a,u,s,c=(t=f,r=Ys((e=l).getBody()),o=da.curry(Ib,r.next),i=da.curry(Ib,r.prev),a=t?iu.Forwards:iu.Backwards,u=t?o:i,s=e.selection.getRng(),(n=Mb(a,e,u,s))?n:(n=zb(e,a,s))||null);return!!c&&(l.selection.setRng(c),!0)}},qb=function(u,s){return function(){var e,t,n,r,o,i,a=(r=(t=s)?1:-1,o=t?Xg:Kg,i=(e=u).selection.getRng(),(n=Fb(r,e,o,i))?n:(n=zb(e,r,i))||null);return!!a&&(u.selection.setRng(a),!0)}},Vb=function(e,r){return H.bind((t=e,H.map(t,function(e){return xy.merge({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:V.noop},e)})),function(e){return t=e,(n=r).keyCode===t.keyCode&&n.shiftKey===t.shiftKey&&n.altKey===t.altKey&&n.ctrlKey===t.ctrlKey&&n.metaKey===t.metaKey?[e]:[];var t,n});var t},Hb=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,r)}},jb=function(e,t){return H.find(Vb(e,t),function(e){return e.action()})},$b=function(i,a){i.on("keydown",function(e){var t,n,r,o;!1===e.isDefaultPrevented()&&(t=i,n=a,r=e,o=Un.detect().os,jb([{keyCode:sh.RIGHT,action:Ub(t,!0)},{keyCode:sh.LEFT,action:Ub(t,!1)},{keyCode:sh.UP,action:qb(t,!1)},{keyCode:sh.DOWN,action:qb(t,!0)},{keyCode:sh.RIGHT,action:es(t,!0)},{keyCode:sh.LEFT,action:es(t,!1)},{keyCode:sh.UP,action:ts(t,!1)},{keyCode:sh.DOWN,action:ts(t,!0)},{keyCode:sh.RIGHT,action:sd.move(t,n,!0)},{keyCode:sh.LEFT,action:sd.move(t,n,!1)},{keyCode:sh.RIGHT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:sd.moveNextWord(t,n)},{keyCode:sh.LEFT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:sd.movePrevWord(t,n)}],r).each(function(e){r.preventDefault()}))})},Wb=function(e){return 1===$r.children(e).length},Kb=function(e,t,n,r){var o,i,a,u,s=V.curry(Sv,t),c=H.map(H.filter(r,s),function(e){return e.dom()});if(0===c.length)vf(t,e,n);else{var l=(o=n.dom(),i=c,a=yv(!1),u=Nv(i,a.dom()),Hu.before(Vn.fromDom(o),a),Hc.remove(Vn.fromDom(o)),La(u,0));t.selection.setRng(l.toRange())}},Xb=function(n,r){var t,e=Vn.fromDom(n.getBody()),o=Vn.fromDom(n.selection.getStart()),i=H.filter((t=jl(o,e),H.findIndex(t,mo).fold(V.constant(t),function(e){return t.slice(0,e)})),Wb);return H.last(i).map(function(e){var t=La.fromRangeStart(n.selection.getRng());return!!El(r,t,e.dom())&&(Kb(r,n,e,i),!0)}).getOr(!1)},Yb=function(e,t){return!!e.selection.isCollapsed()&&Xb(e,t)},Gb=function(o,i){o.on("keydown",function(e){var t,n,r;!1===e.isDefaultPrevented()&&(t=o,n=i,r=e,jb([{keyCode:sh.BACKSPACE,action:Hb(Cf,t,!1)},{keyCode:sh.DELETE,action:Hb(Cf,t,!0)},{keyCode:sh.BACKSPACE,action:Hb(dd,t,n,!1)},{keyCode:sh.DELETE,action:Hb(dd,t,n,!0)},{keyCode:sh.BACKSPACE,action:Hb(tf,t,!1)},{keyCode:sh.DELETE,action:Hb(tf,t,!0)},{keyCode:sh.BACKSPACE,action:Hb(Jl,t,!1)},{keyCode:sh.DELETE,action:Hb(Jl,t,!0)},{keyCode:sh.BACKSPACE,action:Hb($d,t,!1)},{keyCode:sh.DELETE,action:Hb($d,t,!0)},{keyCode:sh.BACKSPACE,action:Hb(Yb,t,!1)},{keyCode:sh.DELETE,action:Hb(Yb,t,!0)}],r).each(function(e){r.preventDefault()}))}),o.on("keyup",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=o,n=e,jb([{keyCode:sh.BACKSPACE,action:Hb(xf,t)},{keyCode:sh.DELETE,action:Hb(xf,t)}],n))})},Jb=function(e){return A.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},Qb=function(e,t){var n,r,o,i=t,a=e.dom,u=e.schema.getMoveCaretBeforeOnEnterElements();if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var s=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}(t.firstChild);s&&/^(UL|OL|DL)$/.test(s.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(o=a.createRng(),t.normalize(),t.hasChildNodes()){for(n=new ao(t,t);r=n.current();){if(Oo.isText(r)){o.setStart(r,0),o.setEnd(r,0);break}if(u[r.nodeName.toLowerCase()]){o.setStartBefore(r),o.setEndBefore(r);break}i=r,r=n.next()}r||(o.setStart(i,0),o.setEnd(i,0))}else Oo.isBr(t)?t.nextSibling&&a.isBlock(t.nextSibling)?(o.setStartBefore(t),o.setEndBefore(t)):(o.setStartAfter(t),o.setEndAfter(t)):(o.setStart(t,0),o.setEnd(t,0));e.selection.setRng(o),a.remove(void 0),e.selection.scrollIntoView(t)}},Zb=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},eC=Jb,tC=function(e){return Jb(e).fold(V.constant(""),function(e){return e.nodeName.toUpperCase()})},nC=function(e){return Jb(e).filter(function(e){return yo(Vn.fromDom(e))}).isSome()},rC=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},oC=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},iC=function(e){var t=e.parentNode;return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},aC=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!Oo.isElement(r);)r=r[n?"nextSibling":"previousSibling"];return r===t},uC=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng();if(n!==e.getBody()){var u;oC(u=n)&&oC(u.parentNode)&&(o="LI");var s,c,l=o?t(o):i.create("BR");if(aC(n,r,!0)&&aC(n,r,!1))rC(n,"LI")?i.insertAfter(l,iC(n)):i.replace(l,n);else if(aC(n,r,!0))rC(n,"LI")?(i.insertAfter(l,iC(n)),l.appendChild(i.doc.createTextNode(" ")),l.appendChild(n)):n.parentNode.insertBefore(l,n);else if(aC(n,r,!1))i.insertAfter(l,iC(n));else{n=iC(n);var f=a.cloneRange();f.setStartAfter(r),f.setEndAfter(n);var d=f.extractContents();"LI"===o&&(c="LI",(s=d).firstChild&&s.firstChild.nodeName===c)?(l=d.firstChild,i.insertAfter(d,n)):(i.insertAfter(d,n),i.insertAfter(l,n))}i.remove(r),Qb(e,l)}},sC=function(e){e.innerHTML='<br data-mce-bogus="1">'},cC=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},lC=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},fC=function(e,t,n){return!1===Oo.isText(t)?n:e?1===n&&t.data.charAt(n-1)===Ri?0:n:n===t.data.length-1&&t.data.charAt(n)===Ri?t.data.length:n},dC=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},mC=function(e,t){var n=Ou(e);n&&n.toLowerCase()===t.tagName.toLowerCase()&&e.dom.setAttribs(t,Pu(e))},pC=function(a,e){var t,u,s,i,c,n,r,o,l,f,d,m,p,g,h,v,y,b,C=a.dom,x=a.schema,w=x.getNonEmptyElements(),N=a.selection.getRng(),E=function(e){var t,n,r,o=s,i=x.getTextInlineElements();if(e||"TABLE"===f||"HR"===f?(t=C.create(e||m),mC(a,t)):t=c.cloneNode(!1),r=t,!1===Mu(a))C.setAttrib(t,"style",null),C.setAttrib(t,"class",null);else do{if(i[o.nodeName]){if(kc(o))continue;n=o.cloneNode(!1),C.setAttrib(n,"id",""),t.hasChildNodes()?n.appendChild(t.firstChild):r=n,t.appendChild(n)}}while((o=o.parentNode)&&o!==u);return sC(r),t},S=function(e){var t,n,r,o;if(o=fC(e,s,i),Oo.isText(s)&&(e?0<o:o<s.nodeValue.length))return!1;if(s.parentNode===c&&p&&!e)return!0;if(e&&Oo.isElement(s)&&s===c.firstChild)return!0;if(cC(s,"TABLE")||cC(s,"HR"))return p&&!e||!p&&e;for(t=new ao(s,c),Oo.isText(s)&&(e&&0===o?t.prev():e||o!==s.nodeValue.length||t.next());n=t.current();){if(Oo.isElement(n)){if(!n.getAttribute("data-mce-bogus")&&(r=n.nodeName.toLowerCase(),w[r]&&"br"!==r))return!1}else if(Oo.isText(n)&&!/^[ \t\r\n]*$/.test(n.nodeValue))return!1;e?t.prev():t.next()}return!0},k=function(){r=/^(H[1-6]|PRE|FIGURE)$/.test(f)&&"HGROUP"!==d?E(m):E(),Fu(a)&&lC(C,l)&&C.isEmpty(c)?r=C.split(l,c):C.insertAfter(r,c),Qb(a,r)};um(C,N).each(function(e){N.setStart(e.startContainer,e.startOffset),N.setEnd(e.endContainer,e.endOffset)}),s=N.startContainer,i=N.startOffset,m=Ou(a),n=e.shiftKey,Oo.isElement(s)&&s.hasChildNodes()&&(p=i>s.childNodes.length-1,s=s.childNodes[Math.min(i,s.childNodes.length-1)]||s,i=p&&Oo.isText(s)?s.nodeValue.length:0),(u=dC(C,s))&&((m&&!n||!m&&n)&&(s=function(e,t,n,r,o){var i,a,u,s,c,l,f,d=t||"P",m=e.dom,p=dC(m,r);if(!(a=m.getParent(r,m.isBlock))||!lC(m,a)){if(l=(a=a||p)===e.getBody()||(f=a)&&/^(TD|TH|CAPTION)$/.test(f.nodeName)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=m.create(d),mC(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i;for(s=r;s.parentNode!==a;)s=s.parentNode;for(;s&&!m.isBlock(s);)s=(u=s).previousSibling;if(u&&e.schema.isValidChild(l,d.toLowerCase())){for(i=m.create(d),mC(e,i),u.parentNode.insertBefore(i,u),s=u;s&&!m.isBlock(s);)c=s.nextSibling,i.appendChild(s),s=c;n.setStart(r,o),n.setEnd(r,o)}}return r}(a,m,N,s,i)),c=C.getParent(s,C.isBlock),l=c?C.getParent(c.parentNode,C.isBlock):null,f=c?c.nodeName.toUpperCase():"","LI"!==(d=l?l.nodeName.toUpperCase():"")||e.ctrlKey||(l=(c=l).parentNode,f=d),/^(LI|DT|DD)$/.test(f)&&C.isEmpty(c)?uC(a,E,l,c,m):m&&c===a.getBody()||(m=m||"P",Oi(c)?(r=Vi(c),C.isEmpty(c)&&sC(c),Qb(a,r)):S()?k():S(!0)?(r=c.parentNode.insertBefore(E(),c),Qb(a,cC(c,"HR")?r:c)):((t=(y=N,b=y.cloneRange(),b.setStart(y.startContainer,fC(!0,y.startContainer,y.startOffset)),b.setEnd(y.endContainer,fC(!1,y.endContainer,y.endOffset)),b).cloneRange()).setEndAfter(c),function(e){for(;Oo.isText(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(o=t.extractContents()),r=o.firstChild,C.insertAfter(o,c),function(e,t,n){var r,o=n,i=[];if(o){for(;o=o.firstChild;){if(e.isBlock(o))return;Oo.isElement(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue?e.remove(o):(a=o)&&"A"===a.nodeName&&0===It.trim(_i(a.innerText||a.textContent)).length&&e.remove(o);var a}}(C,w,r),g=C,(h=c).normalize(),(v=h.lastChild)&&!/^(left|right)$/gi.test(g.getStyle(v,"float",!0))||g.add(h,"br"),C.isEmpty(c)&&sC(c),r.normalize(),C.isEmpty(r)?(C.remove(r),k()):Qb(a,r)),C.setAttrib(r,"id",""),a.fire("NewBlock",{newBlock:r})))},gC=function(e,t){return eC(e).filter(function(e){return 0<t.length&&Pr.is(Vn.fromDom(e),t)}).isSome()},hC=function(e){return gC(e,Lu(e))},vC=function(e){return gC(e,Iu(e))},yC=nf([{br:[]},{block:[]},{none:[]}]),bC=function(e,t){return vC(e)},CC=function(n){return function(e,t){return""===Ou(e)===n}},xC=function(n){return function(e,t){return nC(e)===n}},wC=function(n,r){return function(e,t){return tC(e)===n.toUpperCase()===r}},NC=function(e){return wC("pre",e)},EC=function(n){return function(e,t){return Du(e)===n}},SC=function(e,t){return hC(e)},kC=function(e,t){return t},TC=function(e){var t=Ou(e),n=Zb(e.dom,e.selection.getStart());return n&&e.schema.isValidChild(n.nodeName,t||"P")},AC=function(e,t){return function(n,r){return H.foldl(e,function(e,t){return e&&t(n,r)},!0)?A.some(t):A.none()}},RC=function(e,t){return Df([AC([bC],yC.none()),AC([wC("summary",!0)],yC.br()),AC([NC(!0),EC(!1),kC],yC.br()),AC([NC(!0),EC(!1)],yC.block()),AC([NC(!0),EC(!0),kC],yC.block()),AC([NC(!0),EC(!0)],yC.br()),AC([xC(!0),kC],yC.br()),AC([xC(!0)],yC.block()),AC([CC(!0),kC,TC],yC.block()),AC([CC(!0)],yC.br()),AC([SC],yC.br()),AC([CC(!1),kC],yC.br()),AC([TC],yC.block())],[e,t.shiftKey]).getOr(yC.none())},_C=function(e,t){RC(e,t).fold(function(){vm(e,t)},function(){pC(e,t)},V.noop)},BC=function(o){o.on("keydown",function(e){var t,n,r;e.keyCode===sh.ENTER&&(t=o,(n=e).isDefaultPrevented()||(n.preventDefault(),(r=t.undoManager).typing&&(r.typing=!1,r.add()),t.undoManager.transact(function(){!1===t.selection.isCollapsed()&&t.execCommand("Delete"),_C(t,n)})))})},DC=function(e,t,n){return u=t,!(!OC(n)||!Oo.isText(u.container())||(r=e,i=(o=t).container(),a=o.offset(),i.insertData(a,"\xa0"),r.selection.setCursorLocation(i,a+1),0));var r,o,i,a,u},OC=function(e){return e.fold(V.constant(!1),V.constant(!0),V.constant(!0),V.constant(!1))},PC=function(e){return!!e.selection.isCollapsed()&&(t=e,n=V.curry(xl.isInlineTarget,t),r=La.fromRangeStart(t.selection.getRng()),Gf(n,t.getBody(),r).map(V.curry(DC,t,r)).getOr(!1));var t,n,r},LC=function(r){r.on("keydown",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=r,n=e,jb([{keyCode:sh.SPACEBAR,action:Hb(PC,t)}],n).each(function(e){n.preventDefault()}))})},IC=function(e,t){var n;t.hasAttribute("data-mce-caret")&&(Vi(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},MC=function(e,t){var n,r=(n=e,Tl(Vn.fromDom(n.getBody()),"*[data-mce-caret]").fold(V.constant(null),function(e){return e.dom()}));if(r)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void IC(e,r)):void(Ii(r)&&(IC(e,r),e.undoManager.add()))},FC=function(e){e.on("keyup compositionstart",V.curry(MC,e))},zC=function(e){var t=sd.setupSelectedState(e);FC(e),$b(e,t),Gb(e,t),BC(e),LC(e)};function UC(u){var s,n,r,o=It.each,c=sh.BACKSPACE,l=sh.DELETE,f=u.dom,d=u.selection,e=u.settings,t=u.parser,i=ve.gecko,a=ve.ie,m=ve.webkit,p="data:text/mce-internal,",g=a?"Text":"URL",h=function(e,t){try{u.getDoc().execCommand(e,!1,t)}catch(n){}},v=function(e){return e.isDefaultPrevented()},y=function(){u.shortcuts.add("meta+a",null,"SelectAll")},b=function(){u.on("keydown",function(e){if(!v(e)&&e.keyCode===c&&d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})},C=function(){u.inline||(u.contentStyles.push("body {min-height: 150px}"),u.on("click",function(e){var t;if("HTML"===e.target.nodeName){if(11<ve.ie)return void u.getBody().focus();t=u.selection.getRng(),u.getBody().focus(),u.selection.setRng(t),u.selection.normalize(),u.nodeChanged()}}))};return u.on("keydown",function(e){var t,n,r,o,i;if(!v(e)&&e.keyCode===sh.BACKSPACE&&(n=(t=d.getRng()).startContainer,r=t.startOffset,o=f.getRoot(),i=n,t.collapsed&&0===r)){for(;i&&i.parentNode&&i.parentNode.firstChild===i&&i.parentNode!==o;)i=i.parentNode;"BLOCKQUOTE"===i.tagName&&(u.formatter.toggle("blockquote",null,i),(t=f.createRng()).setStart(n,0),t.setEnd(n,0),d.setRng(t))}}),s=function(e){var t=f.create("body"),n=e.cloneContents();return t.appendChild(n),d.serializer.serialize(t,{format:"html"})},u.on("keydown",function(e){var t,n,r,o,i,a=e.keyCode;if(!v(e)&&(a===l||a===c)){if(t=u.selection.isCollapsed(),n=u.getBody(),t&&!f.isEmpty(n))return;if(!t&&(r=u.selection.getRng(),o=s(r),(i=f.createRng()).selectNode(u.getBody()),o!==s(i)))return;e.preventDefault(),u.setContent(""),n.firstChild&&f.isBlock(n.firstChild)?u.selection.setCursorLocation(n.firstChild,0):u.selection.setCursorLocation(n,0),u.nodeChanged()}}),ve.windowsPhone||u.on("keyup focusin mouseup",function(e){sh.modifierPressed(e)||d.normalize()},!0),m&&(u.settings.content_editable||f.bind(u.getDoc(),"mousedown mouseup",function(e){var t;if(e.target===u.getDoc().documentElement)if(t=d.getRng(),u.getBody().focus(),"mousedown"===e.type){if(Li(t.startContainer))return;d.placeCaretAt(e.clientX,e.clientY)}else d.setRng(t)}),u.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==f.getContentEditableParent(t)&&(e.preventDefault(),u.selection.select(t),u.nodeChanged()),"A"===t.nodeName&&f.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),d.select(t))}),e.forced_root_block&&u.on("init",function(){h("DefaultParagraphSeparator",e.forced_root_block)}),u.on("init",function(){u.dom.bind(u.getBody(),"submit",function(e){e.preventDefault()})}),b(),t.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()}),ve.iOS?(u.inline||u.on("keydown",function(){document.activeElement===document.body&&u.getWin().focus()}),C(),u.on("click",function(e){var t=e.target;do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)}),u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):y()),11<=ve.ie&&(C(),b()),ve.ie&&(y(),h("AutoUrlDetect",!1),u.on("dragstart",function(e){var t,n,r;(t=e).dataTransfer&&(u.selection.isCollapsed()&&"IMG"===t.target.tagName&&d.select(t.target),0<(n=u.selection.getContent()).length&&(r=p+escape(u.id)+","+escape(n),t.dataTransfer.setData(g,r)))}),u.on("drop",function(e){if(!v(e)){var t=(i=e).dataTransfer&&(a=i.dataTransfer.getData(g))&&0<=a.indexOf(p)?(a=a.substr(p.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null;if(t&&t.id!==u.id){e.preventDefault();var n=Zy(e.x,e.y,u.getDoc());d.setRng(n),r=t.html,o=!0,u.queryCommandSupported("mceInsertClipboardContent")?u.execCommand("mceInsertClipboardContent",!1,{content:r,internal:o}):u.execCommand("mceInsertContent",!1,r)}}var r,o,i,a})),i&&(u.on("keydown",function(e){if(!v(e)&&e.keyCode===c){if(!u.getBody().getElementsByTagName("hr").length)return;if(d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode(),n=t.previousSibling;if("HR"===t.nodeName)return f.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(f.remove(n),e.preventDefault())}}}),Range.prototype.getClientRects||u.on("mousedown",function(e){if(!v(e)&&"HTML"===e.target.nodeName){var t=u.getBody();t.blur(),we.setEditorTimeout(u,function(){t.focus()})}}),n=function(){var e=f.getAttribs(d.getStart().cloneNode(!1));return function(){var t=d.getStart();t!==u.getBody()&&(f.setAttrib(t,"style",null),o(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}},r=function(){return!d.isCollapsed()&&f.getParent(d.getStart(),f.isBlock)!==f.getParent(d.getEnd(),f.isBlock)},u.on("keypress",function(e){var t;if(!v(e)&&(8===e.keyCode||46===e.keyCode)&&r())return t=n(),u.getDoc().execCommand("delete",!1,null),t(),e.preventDefault(),!1}),f.bind(u.getDoc(),"cut",function(e){var t;!v(e)&&r()&&(t=n(),we.setEditorTimeout(u,function(){t()}))}),e.readonly||u.on("BeforeExecCommand MouseDown",function(){h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),e.object_resizing||h("enableObjectResizing",!1)}),u.on("SetContent ExecCommand",function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(f.select("a"),function(e){var t=e.parentNode,n=f.getRoot();if(t.lastChild===e){for(;t&&!f.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}f.add(t,"br",{"data-mce-bogus":1})}})}),u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),ve.mac&&u.on("keydown",function(e){!sh.metaKeyPressed(e)||e.shiftKey||37!==e.keyCode&&39!==e.keyCode||(e.preventDefault(),u.selection.getSel().modify("move",37===e.keyCode?"backward":"forward","lineboundary"))}),b()),{refreshContentEditable:function(){},isHidden:function(){var e;return!i||u.removed?0:!(e=u.selection.getSel())||!e.rangeCount||0===e.rangeCount}}}var qC=function(e){return Oo.isElement(e)&&ho(Vn.fromDom(e))},VC=function(t){t.on("click",function(e){3===e.detail&&function(e){var t=e.selection.getRng(),n=Da.fromRangeStart(t),r=Da.fromRangeEnd(t);if(Da.isElementPosition(n)){var o=n.container();qC(o)&&Qa.firstPositionIn(o).each(function(e){return t.setStart(e.container(),e.offset())})}Da.isElementPosition(r)&&(o=n.container(),qC(o)&&Qa.lastPositionIn(o).each(function(e){return t.setEnd(e.container(),e.offset())})),e.selection.setRng(Zc(t))}(t)})},HC=function(e){var t,n;(t=e).on("click",function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()}),(n=e).parser.addNodeFilter("details",function(e){H.each(e,function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")})}),n.serializer.addNodeFilter("details",function(e){H.each(e,function(e){var t=e.attr("data-mce-open");e.attr("open",k.isString(t)?t:null),e.attr("data-mce-open",null)})})},jC=vi.DOM,$C=function(e){var t;e.bindPendingEventDelegates(),e.initialized=!0,e.fire("init"),e.focus(!0),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&we.setEditorTimeout(t,function(){var e;(e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)).destroyed||e.focus()},100)},WC=function(t,e){var n,r,u,o,i,a,s,c,l,f=t.settings,d=t.getElement(),m=t.getDoc();f.inline||(t.getElement().style.visibility=t.orgVisibility),e||f.content_editable||(m.open(),m.write(t.iframeHTML),m.close()),f.content_editable&&(t.on("remove",function(){var e=this.getBody();jC.removeClass(e,"mce-content-body"),jC.removeClass(e,"mce-edit-focus"),jC.setAttrib(e,"contentEditable",null)}),jC.addClass(d,"mce-content-body"),t.contentDocument=m=f.content_document||document,t.contentWindow=f.content_window||window,t.bodyElement=d,f.content_document=f.content_window=null,f.root_name=d.nodeName.toLowerCase()),(n=t.getBody()).disabled=!0,t.readonly=f.readonly,t.readonly||(t.inline&&"static"===jC.getStyle(n,"position",!0)&&(n.style.position="relative"),n.contentEditable=t.getParam("content_editable_state",!0)),n.disabled=!1,t.editorUpload=wg(t),t.schema=oi(f),t.dom=vi(m,{keep_values:!0,url_converter:t.convertURL,url_converter_scope:t,hex_colors:f.force_hex_style_colors,class_filter:f.class_filter,update_styles:!0,root_element:t.inline?t.getBody():null,collect:f.content_editable,schema:t.schema,onSetAttrib:function(e){t.fire("SetAttrib",e)}}),t.parser=((o=qy((u=t).settings,u.schema)).addAttributeFilter("src,href,style,tabindex",function(e,t){for(var n,r,o,i=e.length,a=u.dom;i--;)if(r=(n=e[i]).attr(t),o="data-mce-"+t,!n.attributes.map[o]){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue;"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(o,r),n.attr(t,r)):"tabindex"===t?(n.attr(o,r),n.attr(t,null)):n.attr(o,u.convertURL(r,t,n.name))}}),o.addNodeFilter("script",function(e){for(var t,n,r=e.length;r--;)0!==(n=(t=e[r]).attr("type")||"no/type").indexOf("mce-")&&t.attr("type","mce-"+n)}),o.addNodeFilter("#cdata",function(e){for(var t,n=e.length;n--;)(t=e[n]).type=8,t.name="#comment",t.value="[CDATA["+t.value+"]]"}),o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t,n=e.length,r=u.schema.getNonEmptyElements();n--;)(t=e[n]).isEmpty(r)&&0===t.getAll("br").length&&(t.append(new _y("br",1)).shortEnded=!0)}),o),t.serializer=Wy(f,t),t.selection=Bb(t.dom,t.getWin(),t.serializer,t),t.formatter=vy(t),t.undoManager=Uh(t),t._nodeChangeDispatcher=new Dg(t),t._selectionOverrides=ph(t),HC(t),VC(t),zC(t),kg(t),t.fire("PreInit"),f.browser_spellcheck||f.gecko_spellcheck||(m.body.spellcheck=!1,jC.setAttrib(n,"spellcheck","false")),t.quirks=UC(t),t.fire("PostRender"),f.directionality&&(n.dir=f.directionality),f.nowrap&&(n.style.whiteSpace="nowrap"),f.protect&&t.on("BeforeSetContent",function(t){It.each(f.protect,function(e){t.content=t.content.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})})}),t.on("SetContent",function(){t.addVisual(t.getBody())}),t.load({initial:!0,format:"html"}),t.startContent=t.getContent({format:"raw"}),t.on("compositionstart compositionend",function(e){t.composing="compositionstart"===e.type}),0<t.contentStyles.length&&(r="",It.each(t.contentStyles,function(e){r+=e+"\r\n"}),t.dom.addStyle(r)),(i=t,i.inline?jC.styleSheetLoader:i.dom.styleSheetLoader).loadAll(t.contentCSS,function(e){$C(t)},function(e){$C(t)}),f.content_style&&(a=t,s=f.content_style,c=Vn.fromDom(a.getDoc().head),l=Vn.fromTag("style"),lr.set(l,"type","text/css"),Hu.append(l,Vn.fromText(s)),Hu.append(c,l))},KC=vi.DOM,XC=function(e,t){var n,r,o,i,a,u,s,c=e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),l=(n=e.id,r=c,o=t.height,i=ku(e),s=Vn.fromTag("iframe"),lr.setAll(s,i),lr.setAll(s,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),yr(s,{width:"100%",height:(a=o,u="number"==typeof a?a+"px":a,u||""),display:"block"}),s).dom();l.onload=function(){l.onload=null,e.fire("load")};var f,d,m,p,g=function(e,t){if(document.domain!==window.location.hostname&&ve.ie&&ve.ie<12){var n=xg.uuid("mce");e[n]=function(){WC(e)};var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()";return KC.setAttrib(t,"src",r),!0}return!1}(e,l);return e.contentAreaContainer=t.iframeContainer,e.iframeElement=l,e.iframeHTML=(p=Tu(f=e)+"<html><head>",Au(f)!==f.documentBaseUrl&&(p+='<base href="'+f.documentBaseURI.getURI()+'" />'),p+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',d=Ru(f),m=_u(f),Bu(f)&&(p+='<meta http-equiv="Content-Security-Policy" content="'+Bu(f)+'" />'),p+='</head><body id="'+d+'" class="mce-content-body '+m+'" data-id="'+f.id+'"><br></body></html>'),KC.add(t.iframeContainer,l),g},YC=function(e,t){var n=XC(e,t);t.editorContainer&&(KC.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=KC.isHidden(t.editorContainer)),e.getElement().style.display="none",KC.setAttrib(e.id,"aria-hidden","true"),n||WC(e)},GC=vi.DOM,JC=function(t,n,e){var r,o,i=og.get(e);if(r=og.urls[e]||t.documentBaseUrl.replace(/\/$/,""),e=It.trim(e),i&&-1===It.inArray(n,e)){if(It.each(og.dependencies(e),function(e){JC(t,n,e)}),t.plugins[e])return;o=new i(t,r,t.$),(t.plugins[e]=o).init&&(o.init(t,r),n.push(e))}},QC=function(e){return e.replace(/^\-/,"")},ZC=function(e){return{editorContainer:e,iframeContainer:e}},ex=function(e){var t,n,r=e.getElement();return e.inline?ZC(null):(t=r,n=GC.create("div"),GC.insertAfter(n,t),ZC(n))},tx=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.getElement();return e.orgDisplay=m.style.display,k.isString(d.theme)?(l=(o=e).settings,f=o.getElement(),i=l.width||GC.getStyle(f,"width")||"100%",a=l.height||GC.getStyle(f,"height")||f.offsetHeight,u=l.min_height||100,(s=/^[0-9\.]+(|px)$/i).test(""+i)&&(i=Math.max(parseInt(i,10),100)),s.test(""+a)&&(a=Math.max(parseInt(a,10),u)),c=o.theme.renderUI({targetNode:f,width:i,height:a,deltaWidth:l.delta_width,deltaHeight:l.delta_height}),l.content_editable||(a=(c.iframeHeight||a)+("number"==typeof a?c.deltaHeight||0:""))<u&&(a=u),c.height=a,c):k.isFunction(d.theme)?(r=(t=e).getElement(),(n=t.settings.theme(t,r)).editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||t.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||t.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:r.offsetHeight,n):ex(e)},nx=function(t){var e,n,r,o,i,a,u=t.settings,s=t.getElement();return t.rtl=u.rtl_ui||t.editorManager.i18n.rtl,t.editorManager.i18n.setCode(u.language),u.aria_label=u.aria_label||GC.getAttrib(s,"aria-label",t.getLang("aria.rich_text_area")),t.fire("ScriptsLoaded"),o=(n=t).settings.theme,k.isString(o)?(n.settings.theme=QC(o),r=ig.get(o),n.theme=new r(n,ig.urls[o]),n.theme.init&&n.theme.init(n,ig.urls[o]||n.documentBaseUrl.replace(/\/$/,""),n.$)):n.theme={},i=t,a=[],It.each(i.settings.plugins.split(/[ ,]/),function(e){JC(i,a,QC(e))}),e=tx(t),t.editorContainer=e.editorContainer?e.editorContainer:null,u.content_css&&It.each(It.explode(u.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),u.content_editable?WC(t):YC(t,e)},rx=vi.DOM,ox=function(e){return"-"===e.charAt(0)},ix=function(i,a){var u=wi.ScriptLoader;!function(e,t,n,r){var o=t.settings,i=o.theme;if(k.isString(i)){if(!ox(i)&&!ig.urls.hasOwnProperty(i)){var a=o.theme_url;a?ig.load(i,t.documentBaseURI.toAbsolute(a)):ig.load(i,"themes/"+i+"/theme"+n+".js")}e.loadQueue(function(){ig.waitFor(i,r)})}else r()}(u,i,a,function(){var e,t,n,r,o;e=u,(n=(t=i).settings).language&&"en"!==n.language&&!n.language_url&&(n.language_url=t.editorManager.baseURL+"/langs/"+n.language+".js"),n.language_url&&!t.editorManager.i18n.data[n.language]&&e.add(n.language_url),r=i.settings,o=a,It.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),It.each(r.external_plugins,function(e,t){og.load(t,e),r.plugins+=" "+t}),It.each(r.plugins.split(/[ ,]/),function(e){if((e=It.trim(e))&&!og.urls[e])if(ox(e)){e=e.substr(1,e.length);var t=og.dependencies(e);It.each(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=og.createUrl(t,e),og.load(e.resource,e)})}else og.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),u.loadQueue(function(){i.removed||nx(i)},i,function(e){eg(i,e[0]),i.removed||nx(i)})})},ax=function(t){var e=t.settings,n=t.id,r=function(){rx.unbind(window,"ready",r),t.render()};if(Be.Event.domLoaded){if(t.getElement()&&ve.contentEditable){e.inline?t.inline=!0:(t.orgVisibility=t.getElement().style.visibility,t.getElement().style.visibility="hidden");var o=t.getElement().form||rx.getParent(n,"form");o&&(t.formElement=o,e.hidden_input&&!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&(rx.insertAfter(rx.create("input",{type:"hidden",name:n}),n),t.hasHiddenInput=!0),t.formEventDelegate=function(e){t.fire(e.type,e)},rx.bind(o,"submit reset",t.formEventDelegate),t.on("reset",function(){t.setContent(t.startContent,{format:"raw"})}),!e.submit_patch||o.submit.nodeType||o.submit.length||o._mceOldSubmit||(o._mceOldSubmit=o.submit,o.submit=function(){return t.editorManager.triggerSave(),t.setDirty(!1),o._mceOldSubmit(o)})),t.windowManager=Yp(t),t.notificationManager=Xp(t),"xml"===e.encoding&&t.on("GetContent",function(e){e.save&&(e.content=rx.encode(e.content))}),e.add_form_submit_trigger&&t.on("submit",function(){t.initialized&&t.save()}),e.add_unload_trigger&&(t._beforeUnload=function(){!t.initialized||t.destroyed||t.isHidden()||t.save({format:"raw",no_events:!0,set_dirty:!1})},t.editorManager.on("BeforeUnload",t._beforeUnload)),t.editorManager.add(t),ix(t,t.suffix)}}else rx.bind(window,"ready",r)},ux=function(e,t,n){var r=e.sidebars?e.sidebars:[];r.push({name:t,settings:n}),e.sidebars=r},sx=It.each,cx=It.trim,lx="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),fx={ftp:21,http:80,https:443,mailto:25},dx=function(r,e){var t,n,o=this;if(r=cx(r),t=(e=o.settings=e||{}).base_uri,/^([\w\-]+):([^\/]{2})/i.test(r)||/^\s*#/.test(r))o.source=r;else{var i=0===r.indexOf("//");0!==r.indexOf("/")||i||(r=(t&&t.protocol||"http")+"://mce_host"+r),/^[\w\-]*:?\/\//.test(r)||(n=e.base_uri?e.base_uri.path:new dx(document.location.href).directory,""==e.base_uri.protocol?r="//mce_host"+o.toAbsPath(n,r):(r=/([^#?]*)([#?]?.*)/.exec(r),r=(t&&t.protocol||"http")+"://mce_host"+o.toAbsPath(n,r[1])+r[2])),r=r.replace(/@@/g,"(mce_at)"),r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r),sx(lx,function(e,t){var n=r[t];n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n}),t&&(o.protocol||(o.protocol=t.protocol),o.userInfo||(o.userInfo=t.userInfo),o.port||"mce_host"!==o.host||(o.port=t.port),o.host&&"mce_host"!==o.host||(o.host=t.host),o.source=""),i&&(o.protocol="")}};dx.prototype={setPath:function(e){e=/^(.*?)\/?(\w+)?$/.exec(e),this.path=e[0],this.directory=e[1],this.file=e[2],this.source="",this.getURI()},toRelative:function(e){var t;if("./"===e)return e;if("mce_host"!==(e=new dx(e,{base_uri:this})).host&&this.host!==e.host&&e.host||this.port!==e.port||this.protocol!==e.protocol&&""!==e.protocol)return e.getURI();var n=this.getURI(),r=e.getURI();return n===r||"/"===n.charAt(n.length-1)&&n.substr(0,n.length-1)===r?n:(t=this.toRelPath(this.path,e.path),e.query&&(t+="?"+e.query),e.anchor&&(t+="#"+e.anchor),t)},toAbsolute:function(e,t){return(e=new dx(e,{base_uri:this})).getURI(t&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=fx[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r,o,i=0,a="";if(e=(e=e.substring(0,e.lastIndexOf("/"))).split("/"),n=t.split("/"),e.length>=n.length)for(r=0,o=e.length;r<o;r++)if(r>=n.length||e[r]!==n[r]){i=r+1;break}if(e.length<n.length)for(r=0,o=n.length;r<o;r++)if(r>=e.length||e[r]!==n[r]){i=r+1;break}if(1===i)return t;for(r=0,o=e.length-(i-1);r<o;r++)a+="../";for(r=i-1,o=n.length;r<o;r++)a+=r!==i-1?"/"+n[r]:n[r];return a},toAbsPath:function(e,t){var n,r,o,i=0,a=[];for(r=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),sx(e,function(e){e&&a.push(e)}),e=a,n=t.length-1,a=[];0<=n;n--)0!==t[n].length&&"."!==t[n]&&(".."!==t[n]?0<i?i--:a.push(t[n]):i++);return 0!==(o=(n=e.length-i)<=0?a.reverse().join("/"):e.slice(0,n).join("/")+"/"+a.reverse().join("/")).indexOf("/")&&(o="/"+o),r&&o.lastIndexOf("/")!==o.length-1&&(o+=r),o},getURI:function(e){var t,n=this;return n.source&&!e||(t="",e||(n.protocol?t+=n.protocol+"://":t+="//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},dx.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),(n=/data:([^;]+)/.exec(e[0]))&&(t=n[1]),{type:t,data:e[1]}},dx.getDocumentBaseUrl=function(e){var t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t};var mx=function(e,t,n){var r,o,i,a,u;if(t.format=t.format?t.format:"html",t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),"raw"===t.format)r=It.trim(bh.trimExternal(e.serializer,n.innerHTML));else if("text"===t.format)r=_i(n.innerText||n.textContent);else{if("tree"===t.format)return e.serializer.serialize(n,t);i=(o=e).serializer.serialize(n,t),a=Ou(o),u=new RegExp("^(<"+a+"[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/"+a+">[\r\n]*|<br \\/>[\r\n]*)$"),r=i.replace(u,"")}return"text"===t.format||wo(Vn.fromDom(n))?t.content=r:t.content=It.trim(r),t.no_events||e.fire("GetContent",t),t.content},px=function(e,t){t(e),e.firstChild&&px(e.firstChild,t),e.next&&px(e.next,t)},gx=function(e,t,n){var r=function(e,n,t){var r={},o={},i=[];for(var a in t.firstChild&&px(t.firstChild,function(t){H.each(e,function(e){e.name===t.name&&(r[e.name]?r[e.name].nodes.push(t):r[e.name]={filter:e,nodes:[t]})}),H.each(n,function(e){"string"==typeof t.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(t):o[e.name]={filter:e,nodes:[t]})})}),r)r.hasOwnProperty(a)&&i.push(r[a]);for(var u in o)o.hasOwnProperty(u)&&i.push(o[u]);return i}(e,t,n);H.each(r,function(t){H.each(t.filter.callbacks,function(e){e(t.nodes,t.filter.name,{})})})},hx=function(e){return e instanceof _y},vx=function(e,t){var r;e.dom.setHTML(e.getBody(),t),zp(r=e)&&Qa.firstPositionIn(r.getBody()).each(function(e){var t=e.getNode(),n=Oo.isTable(t)?Qa.firstPositionIn(t).getOr(e):e;r.selection.setRng(n.toRange())})},yx=function(u,s,c){return void 0===c&&(c={}),c.format=c.format?c.format:"html",c.set=!0,c.content=hx(s)?"":s,hx(s)||c.no_events||(u.fire("BeforeSetContent",c),s=c.content),A.from(u.getBody()).fold(V.constant(s),function(e){return hx(s)?function(e,t,n,r){gx(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n);var o=Jc({validate:e.validate},e.schema).serialize(n);return r.content=wo(Vn.fromDom(t))?o:It.trim(o),vx(e,r.content),r.no_events||e.fire("SetContent",r),n}(u,e,s,c):(t=u,n=e,o=c,0===(r=s).length||/^\s+$/.test(r)?(a='<br data-mce-bogus="1">',"TABLE"===n.nodeName?r="<tr><td>"+a+"</td></tr>":/^(UL|OL)$/.test(n.nodeName)&&(r="<li>"+a+"</li>"),(i=Ou(t))&&t.schema.isValidChild(n.nodeName.toLowerCase(),i.toLowerCase())?(r=a,r=t.dom.createHTML(i,t.settings.forced_root_block_attrs,r)):r||(r='<br data-mce-bogus="1">'),vx(t,r),t.fire("SetContent",o)):("raw"!==o.format&&(r=Jc({validate:t.validate},t.schema).serialize(t.parser.parse(r,{isRootContent:!0,insert:!0}))),o.content=wo(Vn.fromDom(n))?r:It.trim(r),vx(t,o.content),o.no_events||t.fire("SetContent",o)),o.content);var t,n,r,o,i,a})},bx=vi.DOM,Cx=function(e){return A.from(e).each(function(e){return e.destroy()})},xx=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement();r&&e.save(),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&bx.remove(o.nextSibling),!e.inline&&r&&(i=e,bx.setStyle(i.id,"display",i.orgDisplay)),fp(e),e.editorManager.remove(e),bx.remove(e.getContainer()),Cx(t),Cx(n),e.destroy()}var i},wx=function(e,t){var n,r,o,i=e.selection,a=e.dom;e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Cx(i),Cx(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),bx.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())},Nx=vi.DOM,Ex=It.extend,Sx=It.each,kx=It.resolve,Tx=ve.ie,Ax=function(e,t,n){var r,o,i,a,u,s,c,l=this,f=l.documentBaseUrl=n.documentBaseURL,d=n.baseURI;r=l,o=e,i=f,a=n.defaultSettings,u=t,c={id:o,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:(s=r).convertURL,url_converter_scope:s,ie7_compat:!0},t=gl(cl,c,a,u),l.settings=t,Si.language=t.language||"en",Si.languageLoad=t.language_load,Si.baseURL=n.baseURL,l.id=e,l.setDirty(!1),l.plugins={},l.documentBaseURI=new dx(t.document_base_url,{base_uri:d}),l.baseURI=d,l.contentCSS=[],l.contentStyles=[],l.shortcuts=new Ap(l),l.loadedCSS={},l.editorCommands=new Hm(l),l.suffix=n.suffix,l.editorManager=n,l.inline=t.inline,l.buttons={},l.menuItems={},t.cache_suffix&&(ve.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),!1===t.override_viewport&&(ve.overrideViewPort=!1),n.fire("SetupEditor",{editor:l}),l.execCallback("setup",l),l.$=tn.overrideDefaults(function(){return{context:l.inline?l.getBody():l.getDoc(),element:l.getBody()}})};Ex(Ax.prototype={render:function(){ax(this)},focus:function(e){Fp(this,e)},hasFocus:function(){return zp(this)},execCallback:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,o=this.settings[e];if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?kx(r):0,o=kx(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,Array.prototype.slice.call(arguments,1))},translate:function(e){if(e&&It.is(e,"string")){var n=this.settings.language||"en",r=this.editorManager.i18n;e=r.data[n+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,t){return r.data[n+"."+t]||"{#"+t+"}"})}return this.editorManager.translate(e)},getLang:function(e,t){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(t!==undefined?t:"{#"+e+"}")},getParam:function(e,t,n){return yl(this,e,t,n)},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.stateSelector&&"undefined"==typeof t.active&&(t.active=!1),t.text||t.icon||(t.icon=e),n.buttons=n.buttons,t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addSidebar:function(e,t){return ux(this,e,t)},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems,n.menuItems[e]=t},addContextToolbar:function(e,t){var n,r=this;r.contextToolbars=r.contextToolbars||[],"string"==typeof e&&(n=e,e=function(e){return r.dom.is(e,n)}),r.contextToolbars.push({id:xg.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable=!0:(Nx.show(this.getContainer()),Nx.hide(this.id)),this.load(),this.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(Tx&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(Nx.hide(e.getContainer()),Nx.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var t,n=this.getElement();return this.removed?"":n?((e=e||{}).load=!0,t=this.setContent(n.value!==undefined?n.value:n.innerHTML,e),e.element=n,e.no_events||this.fire("LoadContent",e),e.element=n=null,t):void 0},save:function(e){var t,n,r=this,o=r.getElement();if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,/TEXTAREA|INPUT/i.test(o.nodeName)?o.value=t:(r.inline||(o.innerHTML=t),(n=Nx.getParent(r.id,"form"))&&Sx(n.elements,function(e){if(e.name===r.id)return e.value=t,!1})),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},setContent:function(e,t){return yx(this,e,t)},getContent:function(e){return t=this,void 0===(n=e)&&(n={}),A.from(t.getBody()).fold(V.constant("tree"===n.format?new _y("body",11):""),function(e){return mx(t,n,e)});var t,n},insertContent:function(e,t){t&&(e=Ex({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},setMode:function(e){var t,n;(n=e)!==vp(t=this)&&(t.initialized?hp(t,"readonly"===n):t.on("init",function(){hp(t,"readonly"===n)}),dp(t,n))},getContainer:function(){return this.container||(this.container=Nx.get(this.editorContainer||this.id+"_parent")),this.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=Nx.get(this.id)),this.targetElm},getWin:function(){var e;return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},getDoc:function(){var e;return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},getBody:function(){var e=this.getDoc();return this.bodyElement||(e?e.body:null)},convertURL:function(e,t,n){var r=this.settings;return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},addVisual:function(e){var n,r=this,o=r.settings,i=r.dom;e=e||r.getBody(),r.hasVisual===undefined&&(r.hasVisual=o.visual),Sx(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return n=o.visual_table_class||"mce-item-table",void((t=i.getAttrib(e,"border"))&&"0"!==t||!r.hasVisual?i.removeClass(e,n):i.addClass(e,n));case"A":return void(i.getAttrib(e,"href")||(t=i.getAttrib(e,"name")||e.id,n=o.visual_anchor_class||"mce-item-anchor",t&&r.hasVisual?i.addClass(e,n):i.removeClass(e,n)))}}),r.fire("VisualAid",{element:e,hasVisual:r.hasVisual})},remove:function(){xx(this)},destroy:function(e){wx(this,e)},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}},Np);var Rx,_x,Bx,Dx={isEditorUIElement:function(e){return-1!==e.className.toString().indexOf("mce-")}},Ox=function(n,e){var t,r;Un.detect().browser.isIE()?(r=n).on("focusout",function(){Lm(r)}):(t=e,n.on("mouseup touchend",function(e){t.throttle()})),n.on("keyup nodechange",function(e){var t;"nodechange"===(t=e).type&&t.selectionChange||Lm(n)})},Px=function(e){var t,n,r,o=ah(function(){Lm(e)},0);e.inline&&(t=e,n=o,r=function(){n.throttle()},vi.DOM.bind(document,"mouseup",r),t.on("remove",function(){vi.DOM.unbind(document,"mouseup",r)})),e.on("init",function(){Ox(e,o)}),e.on("remove",function(){o.cancel()})},Lx=vi.DOM,Ix=function(e){return Dx.isEditorUIElement(e)},Mx=function(t,e){var n=t?t.settings.custom_ui_selector:"";return null!==Lx.getParent(e,function(e){return Ix(e)||!!n&&t.dom.is(e,n)})},Fx=function(r,e){var t=e.editor;Px(t),t.on("focusin",function(){var e=r.focusedEditor;e!==this&&(e&&e.fire("blur",{focusedEditor:this}),r.setActive(this),(r.focusedEditor=this).fire("focus",{blurredEditor:e}),this.focus(!0))}),t.on("focusout",function(){var t=this;we.setEditorTimeout(t,function(){var e=r.focusedEditor;Mx(t,function(){try{return document.activeElement}catch(e){return document.body}}())||e!==t||(t.fire("blur",{focusedEditor:null}),r.focusedEditor=null)})}),Rx||(Rx=function(e){var t,n=r.activeEditor;t=e.target,n&&t.ownerDocument===document&&(t===document.body||Mx(n,t)||r.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),r.focusedEditor=null))},Lx.bind(document,"focusin",Rx))},zx=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Lx.unbind(document,"focusin",Rx),Rx=null)},Ux=function(e){e.on("AddEditor",V.curry(Fx,e)),e.on("RemoveEditor",V.curry(zx,e))},qx={},Vx="en",Hx={setCode:function(e){e&&(Vx=e,this.rtl=!!this.data[e]&&"rtl"===this.data[e]._dir)},getCode:function(){return Vx},rtl:!1,add:function(e,t){var n=qx[e];for(var r in n||(qx[e]=n={}),t)n[r]=t[r];this.setCode(e)},translate:function(e){var t=qx[Vx]||{},n=function(e){return It.is(e,"function")?Object.prototype.toString.call(e):r(e)?"":""+e},r=function(e){return""===e||null===e||It.is(e,"undefined")},o=function(e){return e=n(e),It.hasOwn(t,e)?n(t[e]):e};if(r(e))return"";if(It.is(e,"object")&&It.hasOwn(e,"raw"))return n(e.raw);if(It.is(e,"array")){var i=e.slice(1);e=o(e[0]).replace(/\{([0-9]+)\}/g,function(e,t){return It.hasOwn(i,t)?n(i[t]):e})}return o(e).replace(/{context:\w+}$/,"")},data:qx},jx=vi.DOM,$x=It.explode,Wx=It.each,Kx=It.extend,Xx=0,Yx=!1,Gx=[],Jx=[],Qx=function(t){Wx(Bx.get(),function(e){"scroll"===t.type?e.fire("ScrollWindow",t):e.fire("ResizeWindow",t)})},Zx=function(e){e!==Yx&&(e?tn(window).on("resize scroll",Qx):tn(window).off("resize scroll",Qx),Yx=e)},ew=function(t){var e=Jx;delete Gx[t.id];for(var n=0;n<Gx.length;n++)if(Gx[n]===t){Gx.splice(n,1);break}return Jx=H.filter(Jx,function(e){return t!==e}),Bx.activeEditor===t&&(Bx.activeEditor=0<Jx.length?Jx[0]:null),Bx.focusedEditor===t&&(Bx.focusedEditor=null),e.length!==Jx.length};Kx(Bx={defaultSettings:{},$:tn,majorVersion:"4",minorVersion:"7.13",releaseDate:"2018-05-16",editors:Gx,i18n:Hx,activeEditor:null,settings:{},setup:function(){var e,t,n,r,o="";if(t=dx.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),n=window.tinymce||window.tinyMCEPreInit)e=n.base||n.baseURL,o=n.suffix;else{for(var i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var u=(r=i[a].src).substring(r.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)){-1!==u.indexOf(".min")&&(o=".min"),e=r.substring(0,r.lastIndexOf("/"));break}}!e&&document.currentScript&&(-1!==(r=document.currentScript.src).indexOf(".min")&&(o=".min"),e=r.substring(0,r.lastIndexOf("/")))}this.baseURL=new dx(t).toAbsolute(e),this.documentBaseURL=t,this.baseURI=new dx(this.baseURL),this.suffix=o,Ux(this)},overrideDefaults:function(e){var t,n;(t=e.base_url)&&(this.baseURL=new dx(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new dx(this.baseURL)),n=e.suffix,e.suffix&&(this.suffix=n);var r=(this.defaultSettings=e).plugin_base_urls;for(var o in r)Si.PluginManager.urls[o]=r[o]},init:function(r){var n,u,s=this;u=It.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var c=function(e){var t=e.id;return t||(t=(t=e.name)&&!jx.get(t)?e.name:jx.uniqueId(),e.setAttribute("id",t)),t},l=function(e,t){return t.constructor===RegExp?t.test(e.className):jx.hasClass(e,t)},f=function(e){n=e},e=function(){var o,i=0,a=[],n=function(e,t,n){var r=new Ax(e,t,s);a.push(r),r.on("init",function(){++i===o.length&&f(a)}),r.targetElm=r.targetElm||n,r.render()};jx.unbind(window,"ready",e),function(e){var t=r[e];t&&t.apply(s,Array.prototype.slice.call(arguments,2))}("onpageload"),o=tn.unique(function(t){var e,n=[];if(ve.ie&&ve.ie<11)return rg("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[];if(t.types)return Wx(t.types,function(e){n=n.concat(jx.select(e.selector))}),n;if(t.selector)return jx.select(t.selector);if(t.target)return[t.target];switch(t.mode){case"exact":0<(e=t.elements||"").length&&Wx($x(e),function(t){var e;(e=jx.get(t))?n.push(e):Wx(document.forms,function(e){Wx(e.elements,function(e){e.name===t&&(t="mce_editor_"+Xx++,jx.setAttrib(e,"id",t),n.push(e))})})});break;case"textareas":case"specific_textareas":Wx(jx.select("textarea"),function(e){t.editor_deselector&&l(e,t.editor_deselector)||t.editor_selector&&!l(e,t.editor_selector)||n.push(e)})}return n}(r)),r.types?Wx(r.types,function(t){It.each(o,function(e){return!jx.is(e,t.selector)||(n(c(e),Kx({},r,t),e),!1)})}):(It.each(o,function(e){var t;(t=s.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(ew(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)}),0===(o=It.grep(o,function(e){return!s.get(e.id)})).length?f([]):Wx(o,function(e){var t;t=e,r.inline&&t.tagName.toLowerCase()in u?rg("Could not initialize inline editor on invalid inline target element",e):n(c(e),r,e)}))};return s.settings=r,jx.bind(window,"ready",e),new ye(function(t){n?t(n):f=function(e){t(e)}})},get:function(t){return 0===arguments.length?Jx.slice(0):k.isString(t)?H.find(Jx,function(e){return e.id===t}).getOr(null):k.isNumber(t)&&Jx[t]?Jx[t]:null},add:function(e){var t=this;return Gx[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(Gx[e.id]=e),Gx.push(e),Jx.push(e)),Zx(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),_x||(_x=function(){t.fire("BeforeUnload")},jx.bind(window,"beforeunload",_x))),e},createEditor:function(e,t){return this.add(new Ax(e,t,this))},remove:function(e){var t,n,r=this;if(e)return k.isString(e)?(e=e.selector||e,void Wx(jx.select(e),function(e){(n=r.get(e.id))&&r.remove(n)})):(n=e,k.isNull(r.get(n.id))?null:(ew(n)&&r.fire("RemoveEditor",{editor:n}),0===Jx.length&&jx.unbind(window,"beforeunload",_x),n.remove(),Zx(0<Jx.length),n));for(t=Jx.length-1;0<=t;t--)r.remove(Jx[t])},execCommand:function(e,t,n){var r=this.get(n);switch(e){case"mceAddEditor":return this.get(n)||new Ax(n,this.settings,this).render(),!0;case"mceRemoveEditor":return r&&r.remove(),!0;case"mceToggleEditor":return r?r.isHidden()?r.show():r.hide():this.execCommand("mceAddEditor",0,n),!0}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){Wx(Jx,function(e){e.save()})},addI18n:function(e,t){Hx.add(e,t)},translate:function(e){return Hx.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},Xm),Bx.setup();var tw,nw=Bx;function rw(n){return{walk:function(e,t){return Bv(n,e,t)},split:mv,normalize:function(t){return um(n,t).fold(V.constant(!1),function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0})}}}(tw=rw||(rw={})).compareRanges=em,tw.getCaretRangeFromPoint=Zy,tw.getSelectedNode=aa,tw.getNode=ua;var ow,iw,aw=rw,uw=Math.min,sw=Math.max,cw=Math.round,lw=function(e,t,n){var r,o,i,a,u,s;return r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,"b"===(n=(n||"").split(""))[0]&&(o+=s),"r"===n[1]&&(r+=u),"c"===n[0]&&(o+=cw(s/2)),"c"===n[1]&&(r+=cw(u/2)),"b"===n[3]&&(o-=a),"r"===n[4]&&(r-=i),"c"===n[3]&&(o-=cw(a/2)),"c"===n[4]&&(r-=cw(i/2)),fw(r,o,i,a)},fw=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},dw={inflate:function(e,t,n){return fw(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:lw,findBestRelativePosition:function(e,t,n,r){var o,i;for(i=0;i<r.length;i++)if((o=lw(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i];return null},intersect:function(e,t){var n,r,o,i;return n=sw(e.x,t.x),r=sw(e.y,t.y),o=uw(e.x+e.w,t.x+t.w),i=uw(e.y+e.h,t.y+t.h),o-n<0||i-r<0?null:fw(n,r,o-n,i-r)},clamp:function(e,t,n){var r,o,i,a,u,s,c,l,f,d;return u=e.x,s=e.y,c=e.x+e.w,l=e.y+e.h,f=t.x+t.w,d=t.y+t.h,r=sw(0,t.x-u),o=sw(0,t.y-s),i=sw(0,c-f),a=sw(0,l-d),u+=r,s+=o,n&&(c+=r,l+=o,u-=i,s-=a),fw(u,s,(c-=i)-u,(l-=a)-s)},create:fw,fromClientRect:function(e){return fw(e.left,e.top,e.width,e.height)}},mw={},pw={add:function(e,t){mw[e.toLowerCase()]=t},has:function(e){return!!mw[e.toLowerCase()]},get:function(e){var t=e.toLowerCase(),n=mw.hasOwnProperty(t)?mw[t]:null;if(null===n)throw new Error("Could not find module for type: "+e);return n},create:function(e,t){var n;if("string"==typeof e?(t=t||{}).type=e:e=(t=e).type,e=e.toLowerCase(),!(n=mw[e]))throw new Error("Could not find control by type: "+e);return(n=new n(t)).type=e,n}},gw=It.each,hw=It.extend,vw=function(){};vw.extend=ow=function(n){var e,t,r,o=this.prototype,i=function(){var e,t,n;if(!iw&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},a=function(){return this},u=function(n,r){return function(){var e,t=this._super;return this._super=o[n],e=r.apply(this,arguments),this._super=t,e}};for(t in iw=!0,e=new this,iw=!1,n.Mixins&&(gw(n.Mixins,function(e){for(var t in e)"init"!==t&&(n[t]=e[t])}),o.Mixins&&(n.Mixins=o.Mixins.concat(n.Mixins))),n.Methods&&gw(n.Methods.split(","),function(e){n[e]=a}),n.Properties&&gw(n.Properties.split(","),function(e){var t="_"+e;n[e]=function(e){return e!==undefined?(this[t]=e,this):this[t]}}),n.Statics&&gw(n.Statics,function(e,t){i[t]=e}),n.Defaults&&o.Defaults&&(n.Defaults=hw({},o.Defaults,n.Defaults)),n)"function"==typeof(r=n[t])&&o[t]?e[t]=u(t,r):e[t]=r;return i.prototype=e,(i.constructor=i).extend=ow,i};var yw=Math.min,bw=Math.max,Cw=Math.round,xw=function(e,n){var r,o,t,i;if(n=n||'"',null===e)return"null";if("string"==(t=typeof e))return o="\bb\tt\nn\ff\rr\"\"''\\\\",n+e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=o.indexOf(t))+1?"\\"+o.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e)})+n;if("object"===t){if(e.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(e)){for(r=0,o="[";r<e.length;r++)o+=(0<r?",":"")+xw(e[r],n);return o+"]"}for(i in o="{",e)e.hasOwnProperty(i)&&(o+="function"!=typeof e[i]?(1<o.length?","+n:n)+i+n+":"+xw(e[i],n):"");return o+"}"}return""+e},ww={serialize:xw,parse:function(e){try{return JSON.parse(e)}catch(t){}}},Nw={callbacks:{},count:0,send:function(t){var n=this,r=vi.DOM,o=t.count!==undefined?t.count:n.count,i="tinymce_jsonp_"+o;n.callbacks[o]=function(e){r.remove(i),delete n.callbacks[o],t.callback(e)},r.add(r.doc.body,"script",{id:i,src:t.url,type:"text/javascript"}),n.count++}},Ew={send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):setTimeout(r,10)};if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",Ew.fire("beforeInitialize",{settings:e}),t=new ag){if(t.overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&It.each(e.requestheaders,function(e){t.setRequestHeader(e.key,e.value)}),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=Ew.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r();setTimeout(r,10)}}};It.extend(Ew,Xm);var Sw=It.extend,kw=function(e){this.settings=Sw({},e),this.count=0};kw.sendRPC=function(e){return(new kw).send(e)},kw.prototype={send:function(n){var r=n.error,o=n.success;(n=Sw(this.settings,n)).success=function(e,t){void 0===(e=ww.parse(e))&&(e={error:"JSON Parse error."}),e.error?r.call(n.error_scope||n.scope,e.error,t):o.call(n.success_scope||n.scope,e.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=ww.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",Ew.send(n)}};var Tw,Aw=window.localStorage,Rw=nw,_w={geom:{Rect:dw},util:{Promise:ye,Delay:we,Tools:It,VK:sh,URI:dx,Class:vw,EventDispatcher:$m,Observable:Xm,I18n:Hx,XHR:Ew,JSON:ww,JSONRequest:kw,JSONP:Nw,LocalStorage:Aw,Color:function(e){var n={},u=0,s=0,c=0,t=function(e){var t;return"object"==typeof e?"r"in e?(u=e.r,s=e.g,c=e.b):"v"in e&&function(e,t,n){var r,o,i,a;if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,n=parseInt(n,10)/100,t=bw(0,yw(t,1)),n=bw(0,yw(n,1)),0!==t){switch(r=e/60,i=(o=n*t)*(1-Math.abs(r%2-1)),a=n-o,Math.floor(r)){case 0:u=o,s=i,c=0;break;case 1:u=i,s=o,c=0;break;case 2:u=0,s=o,c=i;break;case 3:u=0,s=i,c=o;break;case 4:u=i,s=0,c=o;break;case 5:u=o,s=0,c=i;break;default:u=s=c=0}u=Cw(255*(u+a)),s=Cw(255*(s+a)),c=Cw(255*(c+a))}else u=s=c=Cw(255*n)}(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(u=parseInt(t[1],10),s=parseInt(t[2],10),c=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(u=parseInt(t[1],16),s=parseInt(t[2],16),c=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(u=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16),c=parseInt(t[3]+t[3],16)),u=u<0?0:255<u?255:u,s=s<0?0:255<s?255:s,c=c<0?0:255<c?255:c,n};return e&&t(e),n.toRgb=function(){return{r:u,g:s,b:c}},n.toHsv=function(){return e=u,t=s,n=c,o=0,(i=yw(e/=255,yw(t/=255,n/=255)))===(a=bw(e,bw(t,n)))?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,{h:Cw(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/((o=a)-i))),s:Cw(100*r),v:Cw(100*o)});var e,t,n,r,o,i,a},n.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+e(u)+e(s)+e(c)},n.parse=t,n}},dom:{EventUtils:Be,Sizzle:mt,DomQuery:tn,TreeWalker:ao,DOMUtils:vi,ScriptLoader:wi,RangeUtils:aw,Serializer:Wy,ControlSelection:Jy,BookmarkManager:Xy,Selection:Bb,Event:Be.Event},html:{Styles:ai,Entities:Ko,Node:_y,Schema:oi,SaxParser:vh,DomParser:qy,Writer:Gc,Serializer:Jc},ui:{Factory:pw},Env:ve,AddOnManager:Si,Formatter:vy,UndoManager:Uh,EditorCommands:Hm,WindowManager:Yp,NotificationManager:Xp,EditorObservable:Np,Shortcuts:Ap,Editor:Ax,FocusManager:Dx,EditorManager:nw,DOM:vi.DOM,ScriptLoader:wi.ScriptLoader,PluginManager:Si.PluginManager,ThemeManager:Si.ThemeManager,trim:It.trim,isArray:It.isArray,is:It.is,toArray:It.toArray,makeMap:It.makeMap,each:It.each,map:It.map,grep:It.grep,inArray:It.inArray,extend:It.extend,create:It.create,walk:It.walk,createNS:It.createNS,resolve:It.resolve,explode:It.explode,_addCacheSuffix:It._addCacheSuffix,isOpera:ve.opera,isWebKit:ve.webkit,isIE:ve.ie,isGecko:ve.gecko,isMac:ve.mac},Bw=Rw=It.extend(Rw,_w);Tw=Bw,window.tinymce=Tw,window.tinyMCE=Tw,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(Bw)}();
/*

	jQuery Tags Input Plugin 1.3.3

	Copyright (c) 2011 XOXCO, Inc

	Documentation for this plugin lives here:
	http://xoxco.com/clickable/jquery-tags-input

	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php

	ben@xoxco.com

*/

(function($) {

	var delimiter = new Array();
	var tags_callbacks = new Array();
	$.fn.doAutosize = function(o){
	    var minWidth = $(this).data('minwidth'),
	        maxWidth = $(this).data('maxwidth'),
	        val = '',
	        input = $(this),
	        testSubject = $('#'+$(this).data('tester_id'));

	    if (val === (val = input.val())) {return;}

	    // Enter new content into testSubject
	    var escaped = val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	    testSubject.html(escaped);
	    // Calculate new width + whether to change
	    var testerWidth = testSubject.width(),
	        newWidth = (testerWidth + o.comfortZone) >= minWidth ? testerWidth + o.comfortZone : minWidth,
	        currentWidth = input.width(),
	        isValidWidthChange = (newWidth < currentWidth && newWidth >= minWidth)
	                             || (newWidth > minWidth && newWidth < maxWidth);

	    // Animate width
	    if (isValidWidthChange) {
	        input.width(newWidth);
	    }


  };
  $.fn.resetAutosize = function(options){
    // alert(JSON.stringify(options));
    var minWidth =  $(this).data('minwidth') || options.minInputWidth || $(this).width(),
        maxWidth = $(this).data('maxwidth') || options.maxInputWidth || ($(this).closest('.tagsinput').width() - options.inputPadding),
        val = '',
        input = $(this),
        testSubject = $('<tester/>').css({
            position: 'absolute',
            top: -9999,
            left: -9999,
            width: 'auto',
            fontSize: input.css('fontSize'),
            fontFamily: input.css('fontFamily'),
            fontWeight: input.css('fontWeight'),
            letterSpacing: input.css('letterSpacing'),
            whiteSpace: 'nowrap'
        }),
        testerId = $(this).attr('id')+'_autosize_tester';
    if(! $('#'+testerId).length > 0){
      testSubject.attr('id', testerId);
      testSubject.appendTo('body');
    }

    input.data('minwidth', minWidth);
    input.data('maxwidth', maxWidth);
    input.data('tester_id', testerId);
    input.css('width', minWidth);
  };

	$.fn.addTag = function(value,options) {
			options = jQuery.extend({focus:false,callback:true},options);
			this.each(function() {
				var id = $(this).attr('id');

				var tagslist = $(this).val().split(delimiter[id]);
				if (tagslist[0] == '') {
					tagslist = new Array();
				}

				value = jQuery.trim(value);

				if (options.unique) {
					var skipTag = $(this).tagExist(value);
					if(skipTag == true) {
					    //Marks fake input as not_valid to let styling it
    				    $('#'+id+'_tag').addClass('not_valid');
    				}
				} else {
					var skipTag = false;
				}

				if (value !='' && skipTag != true) {
                    $('<span>').addClass('tag').append(
                        $('<span>').text(value).append('&nbsp;&nbsp;'),
                        $('<a>', {
                            href  : '#',
                            title : 'Removing tag',
                            text  : 'x'
                        }).click(function () {
                            return $('#' + id).removeTag(escape(value));
                        })
                    ).insertBefore('#' + id + '_addTag');

					tagslist.push(value);

					$('#'+id+'_tag').val('');
					if (options.focus) {
						$('#'+id+'_tag').focus();
					} else {
						$('#'+id+'_tag').blur();
					}

					$.fn.tagsInput.updateTagsField(this,tagslist);

					if (options.callback && tags_callbacks[id] && tags_callbacks[id]['onAddTag']) {
						var f = tags_callbacks[id]['onAddTag'];
						f.call(this, value);
					}
					if(tags_callbacks[id] && tags_callbacks[id]['onChange'])
					{
						var i = tagslist.length;
						var f = tags_callbacks[id]['onChange'];
						f.call(this, $(this), tagslist[i-1]);
					}
				}

			});

			return false;
		};

	$.fn.removeTag = function(value) {
			value = unescape(value);
			this.each(function() {
				var id = $(this).attr('id');

				var old = $(this).val().split(delimiter[id]);

				$('#'+id+'_tagsinput .tag').remove();
				str = '';
				for (i=0; i< old.length; i++) {
					if (old[i]!=value) {
						str = str + delimiter[id] +old[i];
					}
				}

				$.fn.tagsInput.importTags(this,str);

				if (tags_callbacks[id] && tags_callbacks[id]['onRemoveTag']) {
					var f = tags_callbacks[id]['onRemoveTag'];
					f.call(this, value);
				}
			});

			return false;
		};

	$.fn.tagExist = function(val) {
		var id = $(this).attr('id');
		var tagslist = $(this).val().split(delimiter[id]);
		return (jQuery.inArray(val, tagslist) >= 0); //true when tag exists, false when not
	};

   // clear all existing tags and import new ones from a string
   $.fn.importTags = function(str) {
      var id = $(this).attr('id');
      $('#'+id+'_tagsinput .tag').remove();
      $.fn.tagsInput.importTags(this,str);
   }

	$.fn.tagsInput = function(options) {
    var settings = jQuery.extend({
      interactive:true,
      defaultText:'add a tag',
      minChars:0,
      width:'300px',
      height:'100px',
      autocomplete: {selectFirst: false },
      hide:true,
      delimiter: ',',
      unique:true,
      removeWithBackspace:true,
      placeholderColor:'#666666',
      autosize: true,
      comfortZone: 20,
      inputPadding: 6*2
    },options);

    	var uniqueIdCounter = 0;

		this.each(function() {
         // If we have already initialized the field, do not do it again
         if (typeof $(this).attr('data-tagsinput-init') !== 'undefined') {
            return;
         }

         // Mark the field as having been initialized
         $(this).attr('data-tagsinput-init', true);

			if (settings.hide) {
				$(this).hide();
			}
			var id = $(this).attr('id');
			if (!id || delimiter[$(this).attr('id')]) {
				id = $(this).attr('id', 'tags' + new Date().getTime() + (uniqueIdCounter++)).attr('id');
			}

			var data = jQuery.extend({
				pid:id,
				real_input: '#'+id,
				holder: '#'+id+'_tagsinput',
				input_wrapper: '#'+id+'_addTag',
				fake_input: '#'+id+'_tag'
			},settings);

			delimiter[id] = data.delimiter;

			if (settings.onAddTag || settings.onRemoveTag || settings.onChange) {
				tags_callbacks[id] = new Array();
				tags_callbacks[id]['onAddTag'] = settings.onAddTag;
				tags_callbacks[id]['onRemoveTag'] = settings.onRemoveTag;
				tags_callbacks[id]['onChange'] = settings.onChange;
			}

			var markup = '<div id="'+id+'_tagsinput" class="tagsinput"><div id="'+id+'_addTag">';

			if (settings.interactive) {
				markup = markup + '<input id="'+id+'_tag" value="" data-default="'+settings.defaultText+'" />';
			}

			markup = markup + '</div><div class="tags_clear"></div></div>';

			$(markup).insertAfter(this);

			$(data.holder).css('width',settings.width);
			$(data.holder).css('min-height',settings.height);
			$(data.holder).css('height',settings.height);

			if ($(data.real_input).val()!='') {
				$.fn.tagsInput.importTags($(data.real_input),$(data.real_input).val());
			}
			if (settings.interactive) {
				$(data.fake_input).val($(data.fake_input).attr('data-default'));
				$(data.fake_input).css('color',settings.placeholderColor);
		        $(data.fake_input).resetAutosize(settings);

				$(data.holder).bind('click',data,function(event) {
					$(event.data.fake_input).focus();
				});

				$(data.fake_input).bind('focus',data,function(event) {
					if ($(event.data.fake_input).val()==$(event.data.fake_input).attr('data-default')) {
						$(event.data.fake_input).val('');
					}
					$(event.data.fake_input).css('color','#000000');
				});

				if (settings.autocomplete_url != undefined) {
					autocomplete_options = {source: settings.autocomplete_url};
					for (attrname in settings.autocomplete) {
						autocomplete_options[attrname] = settings.autocomplete[attrname];
					}

					if (jQuery.Autocompleter !== undefined) {
						$(data.fake_input).autocomplete(settings.autocomplete_url, settings.autocomplete);
						$(data.fake_input).bind('result',data,function(event,data,formatted) {
							if (data) {
								$('#'+id).addTag(data[0] + "",{focus:true,unique:(settings.unique)});
							}
					  	});
					} else if (jQuery.ui.autocomplete !== undefined) {
						$(data.fake_input).autocomplete(autocomplete_options);
						$(data.fake_input).bind('autocompleteselect',data,function(event,ui) {
							$(event.data.real_input).addTag(ui.item.value,{focus:true,unique:(settings.unique)});
							return false;
						});
					}


				} else {
						// if a user tabs out of the field, create a new tag
						// this is only available if autocomplete is not used.
						$(data.fake_input).bind('blur',data,function(event) {
							var d = $(this).attr('data-default');
							if ($(event.data.fake_input).val()!='' && $(event.data.fake_input).val()!=d) {
								if( (event.data.minChars <= $(event.data.fake_input).val().length) && (!event.data.maxChars || (event.data.maxChars >= $(event.data.fake_input).val().length)) )
									$(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});
							} else {
								$(event.data.fake_input).val($(event.data.fake_input).attr('data-default'));
								$(event.data.fake_input).css('color',settings.placeholderColor);
							}
							return false;
						});

				}
				// if user types a default delimiter like comma,semicolon and then create a new tag
				$(data.fake_input).bind('keypress',data,function(event) {
					if (_checkDelimiter(event)) {
					    event.preventDefault();
						if( (event.data.minChars <= $(event.data.fake_input).val().length) && (!event.data.maxChars || (event.data.maxChars >= $(event.data.fake_input).val().length)) )
							$(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});
					  	$(event.data.fake_input).resetAutosize(settings);
						return false;
					} else if (event.data.autosize) {
			            $(event.data.fake_input).doAutosize(settings);

          			}
				});
				//Delete last tag on backspace
				data.removeWithBackspace && $(data.fake_input).bind('keydown', function(event)
				{
					if(event.keyCode == 8 && $(this).val() == '')
					{
						 event.preventDefault();
						 var last_tag = $(this).closest('.tagsinput').find('.tag:last').text();
						 var id = $(this).attr('id').replace(/_tag$/, '');
						 last_tag = last_tag.replace(/[\s]+x$/, '');
						 $('#' + id).removeTag(escape(last_tag));
						 $(this).trigger('focus');
					}
				});
				$(data.fake_input).blur();

				//Removes the not_valid class when user changes the value of the fake input
				if(data.unique) {
				    $(data.fake_input).keydown(function(event){
				        if(event.keyCode == 8 || String.fromCharCode(event.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)) {
				            $(this).removeClass('not_valid');
				        }
				    });
				}
			} // if settings.interactive
		});

		return this;

	};

	$.fn.tagsInput.updateTagsField = function(obj,tagslist) {
		var id = $(obj).attr('id');
		$(obj).val(tagslist.join(delimiter[id]));
	};

	$.fn.tagsInput.importTags = function(obj,val) {
		$(obj).val('');
		var id = $(obj).attr('id');
		var tags = val.split(delimiter[id]);
		for (i=0; i<tags.length; i++) {
			$(obj).addTag(tags[i],{focus:false,callback:false});
		}
		if(tags_callbacks[id] && tags_callbacks[id]['onChange'])
		{
			var f = tags_callbacks[id]['onChange'];
			f.call(obj, obj, tags[i]);
		}
	};

   /**
     * check delimiter Array
     * @param event
     * @returns {boolean}
     * @private
     */
   var _checkDelimiter = function(event){
      var found = false;
      if (event.which == 13) {
         return true;
      }

      if (typeof event.data.delimiter === 'string') {
         if (event.which == event.data.delimiter.charCodeAt(0)) {
            found = true;
         }
      } else {
         $.each(event.data.delimiter, function(index, delimiter) {
            if (event.which == delimiter.charCodeAt(0)) {
               found = true;
            }
         });
      }

      return found;
   }
})(jQuery);

function fireNotify($type,$message) {
    switch($type) {
case 'success':
iziToast.success({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'info':
iziToast.info({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'error':
iziToast.error({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
case 'warning':
iziToast.warning({
id: $type,
title: $type,
message: $message,
position: 'topRight',
transitionIn: 'bounceInLeft',
});
break;
}};
