//////////////////////// DETAILS SECTION //////////////////////////////////

$("#Details h2").click(function(){
    const desc = $(this).next();

    $("#Details .desc").slideUp(300);
    desc.css('display') == 'none'? desc.slideDown(300) : desc.slideUp(300)
})

//////////////////////// DURATION SECTION //////////////////////////////////

const TargetDate = new Date("Oct 20 2022");
const durationItems = $("#Duration .item h2");

function calcDateDiff()
{
    const currentDate = new Date();

    const date = TargetDate - currentDate;

    const seconds = parseInt( (date / 1000) % (60) );
    const minutes = parseInt( (date / ( 1000 * 60 ) ) % (60) );
    const hours = parseInt( (date / ( 1000 * 60 * 60 ) ) % (24) );
    const days = parseInt( (date / ( 1000 * 60 * 60 * 24 ) ) );

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

setInterval(() => {
    date = calcDateDiff();
    durationItems.eq(0).html(date.days);
    durationItems.eq(1).html(date.hours);
    durationItems.eq(2).html(date.minutes);
    durationItems.eq(3).html(date.seconds);
}, 1000);

//////////////////////// Contact SECTION //////////////////////////////////


const charCounter = $("#Contact form #text-count");

$("#Contact form textarea").on("input", function(e) {
    
    charCounter.html( 100 - parseInt($(this).val().length ) )
});

