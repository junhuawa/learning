http://www.newthinktank.com/2015/10/learn-jquery-one-video/

### video
https://www.youtube.com/watch?v=BWXggB-T1jQ
Derek Banas

time: 17:58

$("document").ready(function() {
    we will execute the script as soon as the document is ready!
})


$("#wrapper").css(

#### most common CSS attributes
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference


  // Target items that contain a value (*=)
  $("a[href*='google']").css("font-weight", "bolder");

  // Target an image with an alt that starts with (^=) NTT
  // and change the border
  $("img[alt^='NTT']").css({"border-color": "black",
             "border-width":"1px",
             "border-style":"solid"});


  // Target items that end with ($=) a value
    $("a[href$='pdf']").css("color", "red");


