/*
Q1:
Check if jQuery is loaded
*/


 window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
};
/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$("#mybtn").click(function (){
  $("Html , body").animate({ scrollTop: 0 }, 0);
});


/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$("#btn1").click(function(){
$("#box").css({height:"300px", width:"300px"})
});
 
 $("#btn2").click(function(){
$("#box").css({height:"100px", width:"100px"})
});
/*


Q4:
Learn how to fadein your boxes
*/

$("#fade").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("fast");
  $("#div3").fadeIn(5000);
});


/*
Q5:
User must first accept then he or she can signup
*/
$("#accept").click(function(){
	if($("#accept").prop("checked")){
		$("#submitbtn").attr("disabled", false);
	}
	else{
		$("#submitbtn").attr("disabled", true);
	}
});

/*
Q6:
Let them print
*/

$("#printPage").click(function(){
window.print();
});


/*
Q7:
Can username be too long? Yest it can - lets limit that
*/

$("#textarea").attr('maxlength','20');
$("#textarea").keyOut(function(){

});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(document).ready(function(){
$('.parg').css('font-weight', 'bold');
});
/*
Q9:
Add new div to your website
*/
$("#add").click(function(){

 $("#t").after("<div >Here should be some text probably with some sense within but its friday so im really really tired</div>")


 })

/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/
$("#btnclick").click(function(){
    $("#header li:last").after('<li><a href="#">new li</a></li>');


/*
Q12:
Know what user puts into textbox
*/
$(document).ready(function() {
   $('#usertext').on('keyup', function() {
       console.log($('usertext').value());
   })
});

/*
Q13:
Change input value
*/

$("#button").click(function(){
 $('#button').attr("value":"Hani Hasan");
})

// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
