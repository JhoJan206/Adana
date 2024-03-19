$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        $('.message').addClass("animated fadeInUp"); // Adding animation class
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
        $('.message').removeClass("animated fadeInUp"); // Removing animation class
    }
   
});
