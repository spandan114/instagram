$(function(){
    $('#send_btn').on('click', function(){
        setTimeout(function(){
            $('#message').addClass('sending').text('sending..');
            $('#send_btn').addClass('sending');
        },0)

        setTimeout(function(){
            $('#message').addClass('sent').text('sent');
            $('#send_btn').addClass('sent');
        },2600)
    })
})