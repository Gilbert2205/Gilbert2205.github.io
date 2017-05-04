function Modal(show, hide, modal) {
    this.show = show,
    this.hide = hide;
    this.modal = modal;
    this.helper();
}

Modal.prototype.helper = function () {
    this.show.on('click', this.showModal.bind(this));
}

Modal.prototype.showModal = function () {
    that = this;
    this.show.css("display", "none");
    setTimeout(function () {
        that.hide.css("display", "block");
    }, 500);
    
    $('.show_hide').css('display', 'none');
    $('.hide_show').css('display', 'flex');
    this.modal.fadeIn();
    $('html').css("overflow", "hidden");
    $('.project__box').css('transform', 'scale(1.2, 1.2)');
    setTimeout(function() {
        $('.hide_show').css('opacity', '1');
        $('.project__cross').css('transform', 'rotate(360deg)')
    }, 300);
    this.animate(0);
    this.hide.on('click', this.hideModal.bind(this));
}

Modal.prototype.animate = function (count) {
    var i = count,
        that = this;
    setTimeout(function() { 
        $('.content__img')[i].style.opacity = 1; 
        $('.content__img')[i].style.transform = 'scale(1, 1)'; 
        if (i != 5) { 
            i++; 
            that.animate(i); 
        } else { 
            $('.modal__more').css('width', '60%'); 
            $('.modal__more').css('opacity', '1');
            setTimeout(function() { 
                $('.more__text').css('opacity', '1');
            }, 500) 
        } 
    }, 200) 
}

Modal.prototype.hideModal = function () {
    var that = this;
    setTimeout(function () {
        that.show.css("display", "block");
    }, 500)
    
    this.hide.css("display", "none");
    $('html').css("overflow", "visible");
    $('.project__cross').css('transform', 'rotate(0deg)')
    $('.hide_show').css('opacity', '0');
    $('.hide_show').css('display', 'none');
    setTimeout(function() {
        $('.show_hide').fadeIn();
        $('.project__box').css('transform', 'scale(1, 1)');
    },10);
    for (var i = 0; i < 6; i++) {
        $('.content__img')[i].style.opacity = 0; 
        $('.content__img')[i].style.transform = 'scale(.7, .7)'; 
    }
    $('.modal__more').css('width', '0%'); 
    $('.modal__more').css('opacity', '0');
    $('.more__text').css('opacity', '0');
    this.modal.fadeOut();
}

new Modal($('#show'), $('#hide'), $('.modal'));

function ShowModal(){
    $('html').css("overflow", "hidden");
    $('.modal').fadeIn();
    $('html, body').scrollTop(0);
}

function HideModal(){
    $('html').css("overflow", "visible");
    $('.modal').fadeOut();
}


function Drop() {
    this.drop = $('#drop');
    this.down = $('#down');
    this.list = $('#list');
    this.nav = $(".content__head");
    this.helper();
}

Drop.prototype.helper = function(){
    this.drop.hover(this.move.bind(this));
    this.drop.click(this.move.bind(this)); 
}

Drop.prototype.move = function(){
    this.down.fadeIn();
    this.down.css('display', 'flex');
    this.drop.addClass("arr");
    this.nav.hover(this.control.bind(this));
    
}

Drop.prototype.control = function(){
    this.drop.removeClass("arr")
    this.down.fadeOut(); 
}

new Drop();



function More(show, hide, line) {
    this.show = show;
    this.hide = hide;
    this.line = line;
    this.helper();
}

More.prototype.helper = function () {
    this.show.on('click', this.showProj.bind(this));
}

More.prototype.showProj = function () {
    this.show.css('display', 'none'); 
    this.hide.css('display', 'block');
    $('.text__project').text('К основным');
    this.line.css('display', 'none');
    for(var i = 6; i < $('.content__img').length; i++) {
        $('.content__img')[i].style.display = 'block';
    }
    this.hide.on('click', this.hideProj.bind(this));
}

More.prototype.hideProj = function () {
    this.show.css('display', 'block'); 
    this.hide.css('display', 'none');
    $('.text__project').text('Больше проектов');
    this.line.css('display', 'block');
    for(var i = 6; i < $('.content__img').length; i++) {
        $('.content__img')[i].style.display = 'none';
    }
    this.show.on('click', this.showProj.bind(this));
}

new More($('#showP'), $('#hideP'), $('.block__plus_second'));

// var maspag = document.querySelectorAll(".lines__item"),
//     masimg = document.querySelectorAll(".list-img");
//
//
// function Slide(i) {
//     var img = masimg[i];
//     for (var j = 0; j < masimg.length; j++) {
//         masimg[j].style.display = 'none';
//         maspag[j].classList.remove("active-item");
//     }
//     img.style.display = 'block';
//     maspag[i].classList.add("active-item");
// }

var conteinerS = document.querySelector(".pag__list"),
    masimgS = document.querySelectorAll(".list__pic_proj");


if(conteinerS){
    function SlideS(i) {
        var img = masimgS[i];
        conteinerS.innerHTML = '';
        for (var j = 0; j < masimgS.length; j++) {
            var item = document.createElement("li");
            item.setAttribute("class", "list__line_proj");
            masimgS[j].style.display = 'none';
            item.setAttribute("onclick", "SlideS("+j+")");
            conteinerS.appendChild(item);
        }
        img.style.display = 'block';
        document.querySelectorAll(".list__line_proj")[i].classList.add("active-pic");
    }
    SlideS(0);
}




var conteinerT = document.querySelector(".interior__list"),
    masimgT = document.querySelectorAll(".inter__img");

if(conteinerT){
    function SlideT(i) {
        var img = masimgT[i];
        conteinerT.innerHTML = '';
        for (var j = 0; j < masimgT.length; j++) {
            var item = document.createElement("li");
            item.setAttribute("class", "list__line_inter");
            masimgT[j].style.display = 'none';
            item.setAttribute("onclick", "SlideT("+j+")");
            conteinerT.appendChild(item);
        }
        img.style.display = 'block';
        document.querySelectorAll(".list__line_inter")[i].classList.add("active-img");
    }
    SlideT(0);
}




function Show() {
    $('html').css("overflow", "hidden");
    $('.modal-connect').fadeIn();
    $('html, body').scrollTop(0);
}

function Hide() {
    $('html').css("overflow", "visible");
    $('.modal-connect').fadeOut();
}

function ShowSuccess() {
    $('html').css("overflow", "hidden");
    $('.success-modal').fadeIn();
    $('html, body').scrollTop(0);
}

function HideSuccess() {
    $('html').css("overflow", "visible");
    $('.success-modal').fadeOut();
}

function TeamShow() {
    $('html').css("overflow", "hidden");
    $('.modal-together').fadeIn();
    $('html, body').scrollTop(0);
}

function TeamHide() {
    $('html').css("overflow", "visible");
    $('.modal-together').fadeOut();
}



function Slick(){
  $('.slider__slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1
  });
};

if(document.querySelector('.slider__slick')){
    Slick();
}

function Fixed(header, drop) {
    this.header = header;
    this.drop = drop;
    this.helper();
}

Fixed.prototype.helper = function() {
    window.addEventListener('scroll', this.move.bind(this)); 
};

Fixed.prototype.move = function() {
    if (window.pageYOffset > 250) {
        this.header.addClass("menu-fixed");
        this.header.css( "top", "0px" );
        this.drop.addClass("fixed-dropdown");
    }else if(window.pageYOffset > 100 && window.pageYOffset < 250){
        this.header.css( "top", "-200px" );
    }else if(window.pageYOffset < 100){
        this.header.removeClass("menu-fixed");
        this.drop.removeClass("fixed-dropdown");
    }
};

new Fixed($(".content"), $(".item__dropdown"));

// Плавный скролл по якорям
$(document).ready(function(){
    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});


function DropNav(dropNav){
            this.dropNav = dropNav;
            this.dropOp();
        }
        DropNav.prototype.dropOp = function(){
             this.dropNav.on('click', this.showDropNav.bind(this));
        }
        DropNav.prototype.showDropNav = function(){
            if (($('.drop_cont_ff_op')).css('display')=='block') {
                $('.drop_cont_ff_op').css('display', 'none');
                $('.text_for_drop').text('Показать услуги')
            }else{
               $('.drop_cont_ff_op').css('display', 'block');
               $('.text_for_drop').text('Свернуть список услуг') 
            }
        }

        new DropNav($('#DropNav'));

$(document).ready(function() {

    // Popup photo with class mfp-slider
    (function Mfp() {
        var mfpWrap = document.getElementById('mfpWrap');

        $(mfpWrap).magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
            // zoom: {
            //     enabled: true,
            //     duration: 300,
            //     easing: 'ease-in-out',
            //     opener: function(openerElement) {
            //         return openerElement.is('img') ? openerElement : openerElement.find('img');
            //     }
            // }
        });


    })();

});







