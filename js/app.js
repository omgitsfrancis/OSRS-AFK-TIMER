var timer;

var cannon = {
    id: 'cannon',
    totalTime: 162,
    currentTime: 162
}

$('#cannon').click(function(){
    $(this).toggleClass('running')


    if($(this).hasClass('running')) {
        console.log('start timer');
        timer = setInterval(runTimer, 1000);
    } else {
        console.log('end timer');
        clearInterval(timer);
    }
});

var i = 162;

function runTimer() {
    i -= 1;
    console.log(i);

    if(i=== 0) {
        clearInterval(timer);
        console.log('timer finished');
    }
}