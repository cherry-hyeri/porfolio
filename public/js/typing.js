var typing = document.getElementById('gocoder_typing');
 
var typewriter = new Typewriter(typing, {
    loop: true
});
 
typewriter.typeString('GoCoder')
    .pauseFor(2500)
    .deleteAll()
    .typeString('IT Express')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('GoCoder.Net')
    .start();


