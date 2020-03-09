let windowWidth = $(window).width();
let movingDirection = 'left';
let limit = Math.floor(Math.random() * (windowWidth/2) ) + 1;

function moveNesamani() {
  let nesamaniElement = $(".nesamaniJet")
  let position = nesamaniElement.position()
  let currentLeft = position.left;

  if (movingDirection ==='left' && nesamaniElement.offset().left <= limit) {
    movingDirection = 'right';
    limit = Math.floor(Math.random() * ( (windowWidth) - limit + 1) ) + limit;
  } else if (movingDirection ==='right' && (nesamaniElement.offset(). left + 150) >= limit) {
    movingDirection = 'left';
    limit = Math.floor(Math.random() * limit );
  }

  if(movingDirection === 'left') {
    nesamaniElement.css('left', currentLeft - 30);
  } else if(movingDirection === 'right') {
    nesamaniElement.css('left', currentLeft + 30);
  }
}


function isNesamniHit(){
   setInterval(function(){
        var nesa=$(".nesamaniJet").offset().left 
        var ston=$("#stone").offset().left;
        if(ston>=nesa &&ston<=(nesa+100)){
          alert("siucess");
          }
        },1800);
  // Your code goes here..
  // ---Tips---
  // Check if both hammer and nesamani collide each other
  // Show an alert after it collides
  // Checking function should be called recursively.
}
$(document).ready(function(){
  $(".top-container").click(function(e){
    $('<div class="hammer">')
      .css({
        "left": e.pageX + 'px',
        "top": e.pageY + 'px'
      })
      .append($('<img src="images/hammer.png" alt="myimage" id="stone"/>'))
      .appendTo(document.body)
      .animate({ top: "100vh" },1500)
      .promise().done(function(){
        isNesamniHit();
      $(this).remove();
    })
  });
  setInterval(function () {
    moveNesamani()
  }, 100)
});