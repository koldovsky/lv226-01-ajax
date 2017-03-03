$(function() {
    $('#btn-submit').click(function(e) {
       e.preventDefault();
       $.ajax({
            url: "https://formspree.io/YOUR-EMAIL-HERE", 
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                comment: $('#comment').val()
            },
            dataType: "json"
       })
         .done(function() {
             $('form').html('<h1>Thank you for contacting us!<h1>');
         });
    });    
});
