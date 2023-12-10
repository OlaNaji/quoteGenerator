var quoteList = [

    ["If I lose my magic, that means I've lost absolutely everything.", "Kiki’s Delivery Service, 1989", "./images/kikis.jpg"],
    ["Life is suffering. It is hard. The world is cursed. But still, you find reasons to keep living.", "Princess Mononoke, 1997","./images/mononoke.jpg"],
    ["Once you’ve met someone, you never really forget them.", "Spirited Away, 2001", "./images/spirited.jpg"],
    ["You cannot see the light without the darkness", "The Wind Rises, 2014", "./images/thewind.jpg"],
    ["I don't want to run away anymore. I want to see what it's like when I don't.", "Nausicaa of the Valley of the Wind, 1984", "./images/nausicaa.jpg"],
    ["Many of the things that seem impossible now will become realities tomorrow.", "Howl's Moving Castle, 2004.", "./images/howls.jpg"],
    ["It's wonderful when you can bring sparkle into people's lives, especially under difficult circumstances.", "Castle in the Sky, 1986.", "./images/castleinthesky.jpg"],
    ["I’m not afraid of you. I’ve got Cup Ramen on my side.", "Ponyo, 2008", "./images/ponyo.png"],
    ["Try laughing. Then whatever scares you will go away.", "My Neighbor Totoro, 1988.", "./images/totoro.jpg"],
    ["Whenever Someone Creates Something With All Of Their Heart, Then That Creation Is Given A Soul.", "The Cat Returns, 2002.", "./images/thecat.jpg"],
    ["Once You've Met Someone You Never Really Forget Them", "Spirited Away, 2001.", "./images/spirited2.jpg"],
    ["You Cannot Alter Your Fate. However, You Can Rise to Meet It.", "Princess Mononoke, 1997.", "./images/mononoke2.jpg"],
    ["It’s Not Easy to Live Your Own Way. You Can’t Blame Anyone But Yourself", "Whisper Of The Heart, 1995.", "./images/whisper.jpg"],
    ["Sometimes What You're Looking For, Comes When You're Not Looking At All", "Ocean Waves, 1993", "./images/ocean.jpg"],
    ["If Today Is No Good, You’ll Have Tomorrow. If Tomorrow’s No Good, You’ll Have the Next Day", "Only Yesterday ,1991", "./images/yesterday.jpg"],
    ["We Each Need to Find Our Own Inspiration. Sometimes It's Not Easy", "Kiki’s Delivery Service, 1989", "./images/kikis2.jpg"],
    ["I'll miss you, but I'm glad for all the time we had together.", "My Neighbor Totoro, 1988.", "./images/totoro2.jpg"]



]


var prevIndex = -1;

function randomQuoteGenerator() {
    
    var currentIndex;
    do{
        currentIndex = Math.floor(Math.random() * quoteList.length);
    } while (prevIndex === currentIndex);

    var currentQuote = quoteList[currentIndex][0];
    var currentSource = quoteList[currentIndex][1];
    var currentBg = quoteList[currentIndex][2];

    document.getElementById('quote').innerHTML = "\"" + currentQuote + "\"";
    document.getElementById('quote-source').innerHTML = "--" + currentSource;
    document.getElementById('main').style.backgroundImage = 'url(' + currentBg + ')';

    prevIndex = currentIndex;
}

