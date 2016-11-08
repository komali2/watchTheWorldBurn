$(document).ready(function(){
    $('#burn').on('click', function(e){
        makeItRainFire();
    });
});

function makeItRainFire(){
    var url = '/insanity';
    $.get(url).done(comprehendMadness)
}

function comprehendMadness(songsFromHell){
    songsFromHell = JSON.parse(songsFromHell);
    songsFromHell.forEach(function(denizenSubmission){
        var hailSatan = constructDevilsWork(denizenSubmission)
        $('.main').append(hailSatan);
    });
}

function constructDevilsWork(denizenSubmission){
    var hellspawn = denizenSubmission.data;
    var newSadness = $('#template').clone();
    newSadness.removeAttr('id');
    newSadness.removeClass('hidden');
    if(!hellspawn.selftext_html){
        newSadness.find('.lookIntoTheDepths').attr('src', hellspawn.thumbnail);
    }
    newSadness.find('.levelOfHell').html(hellspawn.subreddit);
    newSadness.find('.bannerOfHell').html(hellspawn.title);
    newSadness.find('.sirenOfHell').html(hellspawn.author);
    return newSadness;//god help us
}