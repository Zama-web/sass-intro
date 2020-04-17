$('.point').on('click', function () {
    let text = $(this).text();
    $('.main').text(text);
})

let link = 'https://medialeaks.ru/wp-content/uploads/2017/06/europe-01-1-524x419.jpg';
let size = 100;
let y = '50';
let x = '50';

$('.image').css('background-image', `url('${link}')`);



$('.zoomIn').on('click', function () {
    size += 10
    $('.image').css('background-size', ++size + '%');
})
$('.zoomOut').on('click', function () {
    size -= 10
    $('.image').css('background-size', --size + '%');
})


$('.scroollUp').on('click', function () {
    y -= 10
    $('.image').css('background-position', `${50}% ${y}%`);
})

$('.scroollDown').on('click', function () {
    y += 10
    $('.image').css('background-position', `${50}% ${y}%`);
})

/////////////////////

$('#block').on('click', function () {
    $(this).animate({
        left: '400px',
        top: '400px',
        backgroundColor: "yellow"
    }, 2000);
});

//////////////////////

$('#block2').click(function () {
    $(this).animate({
        width: "30%",
        opacity: 0.4,
        marginRight: "0.5in",
        fontSize: "3em",
        borderWidth: "10px",
        backgroundColor: "green"
    }, 2000);
});

//////////////////////

$('#block3').on('mouseenter', function (e) {
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css({
        'left': getRandomInt(20, maxX),
        'top': getRandomInt(20, maxY),
        fontSize: "30px",
        backgroundColor: "yellow"
    });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

///////////////////////

$('#but1').on('click', function () {
    function complete() {}
    $('#block4').fadeOut( 2000, complete );
});

$('#but2').click( function() {
    $('div').show();
});
    





//////////////////////
    // $( "#btn1" ).click(function() {
    //     function complete() {
    //       $( "<div>" ).text( this.id ).appendTo( "#log" );
    //     }
    //     $( "#box1" ).fadeOut( 1600, "linear", complete );
    //     $( "#box2" ).fadeOut( 1600, complete );
    //   });
       
    //   $( "#btn2" ).click(function() {
    //     $( "div" ).show();
    //     $( "#log" ).empty();
    //   });