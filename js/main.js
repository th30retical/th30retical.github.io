var list = ['developer','dancer','comic book enthusiast','student','golden hawk','hacker','black coffee drinker'];
var queue = new Queue();
insertVal();

window.setInterval(scroll, 3000);

$(function(){
    console.log("ready");
    // setTimeout(scroll(), 1);
    // window.setInterval(scroll(), 1000);
    /** Nav bar lock function */
    // need to recalculate height when user changes screen size like un-maximizing the window
    var height = $(window).height();
    $(window).on('scroll', function(){
        $('.header').fadeIn(1500, function(){
            $('.header').removeClass('light-hidden');
        });
        stayUp(height);
    })

});

function insertVal(){
    for (var x = 0; x < list.length; x++) {
        queue.insert(list[x]);
    }
    for (var x = 0; x < queue.getlen(); x++){
        var a = Math.floor(Math.random() * queue.getlen());
        do {
            var b = Math.floor(Math.random() * queue.getlen());
        } while (a === b);
        queue.swap(a,b);
    }
}

function getVal(){
    if (queue.peek() === false) {
        insertVal();
    }
    return queue.remove();
}

function scroll(){
    var scroller = $('.scroller p');
    scroller.fadeOut(400, function() {
        scroller.text(getVal());
        scroller.fadeIn(400);
    });
}

function stayUp(height){
    if ($(window).scrollTop() > height){
        $('.header').addClass('fixed').css('top','0');
    } else {
        $('.header').removeClass('fixed');
    }
}