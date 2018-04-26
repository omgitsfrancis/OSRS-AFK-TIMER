

$('#cannon').click(function(){
    $(this).toggleClass('running')


    if($(this).hasClass('running')) {
        console.log('start timer');
        var runTimer = setInterval(timer, 100);
    } else {
        console.log('end timer');
        clearInterval(runTimer);
    }
    
    
});

var time = 0;

function timer() {
    time += 1;
    console.log(time);
}