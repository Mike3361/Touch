<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#mytext').on("taphold",function(){
    	alert($(this).random());
 	});                       

});

function random(){
    return !Math.round(Math.random());
}