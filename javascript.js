function index() {
    $("div.bigContainer").each(function(index) {
        $(this).hide();
        $(this).fadeIn(1000);
    });
}

index();

function results() {
    $("div.resultsContainer").each(function(index) {
        $(this).hide();
        $(this).fadeIn(500);
    });
}

results();

function profile() {
    $("div.profileContainer").each(function(index) {
        $(this).hide();
        $(this).fadeIn(500);
    });
}

profile();

function slideSwitch() {
        var $active = $('div#slideshow IMG.active');
        var $next = $active.next();    

        $next.addClass('active');

        $active.removeClass('active');
    }

    $(function() {
        
        document.getElementById("next").onClick() setInterval( "slideSwitch()", 1000 );
    });
