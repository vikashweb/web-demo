
/*$(document).ready(function(){
   $(window).scroll(function(){
      var scr=$(document).scrollTop();
        
   });
});
*/


$(document).ready(function(){
    var set=setInterval(()=>{
      $(".do-1").fadeToggle();
            var gett=setInterval(()=>{

                $(".do-2").fadeToggle();
                 var hhh=setInterval(()=>{
                     $(".do-3").fadeToggle()

                     var ggg=setInterval(()=>{
                        $(".do-4").fadeToggle()
                        clearInterval(ggg);
                     
                       
                     



                     },800)
                     clearInterval(hhh);
                 },800)
                 clearInterval(gett);

            },800)
         

            clearInterval(set);
    },800);

    // after scroll
    $(window).scroll(function(){
      var sc=$(document).scrollTop();
   if(sc>=499){
      
       $('.navbar').addClass('headAfter');
   }
   else if(sc<499){
       $('.navbar').removeClass('headAfter');
   }

    });

   
});