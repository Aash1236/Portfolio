$(document).ready(function(){
    $(window).scroll(function(){
        //sticky nav on scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //scrollup show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    //slideup
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing
    var typed = new Typed(".typing", {
        strings: ["Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Junior Engineer in NSEIT Limited"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl
    $('.carousel').owlCarousel ({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//form
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(respose => {
        if (respose.ok) {
            form.style.display = "none";
            document.getElementById("form-response").style.display = "block";
            form.reset();
        }else{
            respose.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                }else{
                    alert("Oops! There was a problem submitting your message")
                }
            });
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your message")
    });
});