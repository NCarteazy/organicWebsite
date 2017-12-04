var velocity = 0.2;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.mover').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + (Math.round((height - pos) * velocity) + 600) + 'px'); 
    }); 
};

$(window).bind('scroll', update);

function moveToID(moveID){
	console.log("primitive. moving to " + moveID)

  $('html, body').animate({
      scrollTop: $("#" + moveID).offset().top - 50
  }, 1300);

};


function contact(){
  console.log("contacting.")

};

