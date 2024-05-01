    var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clicktable:true,
    },
    navigation:{
        nextEl:".swiper-botton-next",
        prevEl:".swiper-botton-prev",   
    }});
var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
   loopFillGroupWitchBlank:true,
    navigation:{
        nextEl:".swiper-botton-next",
        prevEl:".swiper-botton-prev",   
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
950: {
    slidesPerView:3
    }


    }
});


let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(Input){
    Input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});