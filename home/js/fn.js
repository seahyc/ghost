var mouseX = 0, mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY; 
});

// cache the selector
var follower = $("#ufo");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 100;
    yp += (mouseY - yp) / 200;
    follower.css({left:xp+100, top:yp-100});
    
}, 30);
