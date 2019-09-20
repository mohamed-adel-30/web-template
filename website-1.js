var AboutO = $('#sectionAbout').offset().top;

$(window).scroll(function(){
    var usingScroll = $(window).scrollTop();
    if(usingScroll > AboutO){
        $('.navbar').css({backgroundColor:"rgba(0,0,0,0.6)"});
        $('.btnUp').fadeIn(600)
    }
    else{
        $('.navbar').css("backgroundColor","transparent")
        $('.btnUp').fadeOut(500)
    }


    

});




  




// btn scroll




$(document).ready(function(){

    // Loading 
    $('#loading').fadeOut(3000,function(){
        $('body').css("overflow", "auto");
        $('#loading').remove();
    });

    //btn scroll
    $(".btnUp").click(function(){
        $("body,html").animate({scrollTop:'0'},1000);        
    });

    // link scroll
    var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  $(".nav-item").click(function(){
    $(".nav-tabs").animate({scrollTop:'0'},1000);        
});


 $(".navbar-toggler").click(function(){
     $(".collapse").css({backgroundColor:"rgba(0,0,0,0.1)" , borderRadius:"5px" , padding:"10px"})
     
 });
  
    


  

         
       





    

    





// Home 



    $(".single-slick").slick({
        dots: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    });


$('.next').click(function(){
    $(".single-slick").slick('slickNext');
});

$('.prev').click(function(){
    $(".single-slick").slick('slickPrev');
});


// Counter

$('.Count').counterUp({
  delay: 10,
  time: 1000
});

// Team

$('.ozi').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


// company logo 
$('.owl-carousel').owlCarousel({ 
    loop:true,      
    responsiveClass:true,
    autoHeight:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    margin:30,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6,
            loop:true
        }
    }
})








// Contact Form

var inps = document.getElementsByTagName("input");

var regex = {

    username:/^[A-Za-z]{3,8}$/,
    usermail: /^\w+[-_.]{0,1}\w+@[a-z0-9]+(\.[a-z]{2,6}){1,3}$/,
    subject:/^[A-Za-z]{3,}$/
}

for(var i = 0; i < inps.length;i++){

    inps[i].addEventListener("keyup",function(e){
    validate(e.target,regex[e.target.attributes.name.value]);
    })
}

function validate(inp ,reg){

    if(reg.test(inp.value) == true){
        inp.className = "form-control is-valid";
    }
    else{
        inp.className = "form-control is-invalid";
    }
}




});

  

    