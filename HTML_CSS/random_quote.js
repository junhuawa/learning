function getQuote(){
    quotes = new Array(4);
    sources = new Array(4);

    quotes[0] = "When I was a boy of 14, my father was so " + 
        "ignorant...but when I got to be 21, I was astonished " + 
        "at how much he had learned in 7 years.";
    sources[0] = "Mark Twain";

    quotes[1] = "Everybody is ignorant. Only on different " + 
        "subjects.";
    sources[1] = "Will Rogers";

    quotes[2] = "They say such nice things about people at " +
        "their funerals that it makes me sad that I'm going to " + 
        "miss mine by just a few days.";
    sources[2] = "Garrison Keilor";

    quotes[3] = "What's another word for thesaurus?";
    sources[3] = "Steven Wright";

    i = Math.floor(Math.random() * quotes.length);
    console.log("<dl style='background-color: black'>\n");
    console.log("<dt>" + "<em>" + quotes[i] + "</em>" + "</dt>" + "\n");
    console.log("<dd>" + " - " + sources[i] + "</dd>" + "\n");
    console.log("</dl>\n");
}
getQuote();
