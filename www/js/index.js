<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#mytext').on("click",function(){
        alert(random());
        if(random() == "true"){
            navigator.notification.beep(1); 
        }
        else {
             navigator.notification.beep(2); }
        
 	});                       

});

function random(){
    return !Math.round(Math.random());
    
}