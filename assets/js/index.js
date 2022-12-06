$(function(){
    $(".destacados-fade").click(function(){
        $(".cartas").slideToggle("normal");
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 700){
            $(".navbar").addClass("bg-white");
        }
        if($(this).scrollTop() < 700){
            $(".navbar").removeClass("bg-white");
        }
    });
});