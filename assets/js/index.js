$(function(){
    $(".destacados-fade").click(function(){
        $(".cartas").slideToggle("normal");
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".header").height()-100){
            $(".navbar").addClass("bg-white");
            $(".navbar").removeClass("bg-transparent");
            $(".navbar").removeClass("navbar-dark");
            
        }
        if($(this).scrollTop() < $(".header").height()-100){
            $(".navbar").removeClass("bg-white");
            $(".navbar").addClass("bg-transparent");
            $(".navbar").addClass("navbar-dark");
        }
    });
});