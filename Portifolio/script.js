let count=1;
document.getElementById('radio1').checked = true;

setInterval(function() {
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count > 4) {
        count = 1
    }
    document.getElementById('radio' + count).checked = true;

}

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Estudante de Tecnologia"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Estudante de Tecnologia"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    let count = 1;
    document.getElementById("radio1").checked = true;
    
    setInterval( function(){
      nextImage();
    }, 5000)
    
    function nextImage(){
     count++;
    if(count>4){
     count = 1;
    }
document.GetElementById("radio"+count).checked = true;
}

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
                
            }
        }
    });
});

