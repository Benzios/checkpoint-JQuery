document.getElementById("bold").onclick=bold;
var textarea = document.getElementById('textarea');
function bold(){
    if(textarea.style.fontWeight=="normal")
    {
         textarea.style.fontWeight="bold"
    }
   else(

    textarea.style.fontWeight="normal"

   )
}


document.getElementById("italic").onclick=italic;


function italic(){
    if( textarea.style.fontStyle=="normal")
    {
         textarea.style.fontStyle="italic"
    }
   else
   {
    textarea.style.fontStyle="normal"
   }
}

document.getElementById("aligner").onclick=aligner;

function aligner()
{
    if(textarea.style.textDecoration=="underline")
    {
        textarea.style.textDecoration="none"
    }
    else{
        textarea.style.textDecoration="underline"
    }
    
}


function sizeHandle()
{
    textarea.style.fontSize=document.getElementById("fontsize").value;
}

function textstyle()
{
    textarea.style.fontFamily=document.getElementById("text").value;
}

// display button view more

// $("#img1").mouseenter(function(){
//     $("#btn1").show();
//     $("#img1").css("opacity","0.7");
    
// });

// $("#img1").mouseleave(function(){
//   $("#btn1").hide();
//    $("#img1").css("opacity","1");
//  });

$(".img-hover").mouseenter(function(){
    $(this).find(".btn").show();
    $(this).css("opacity","0.7");
})


$(".img-hover").mouseleave(function(){
    $(this).find(".btn").hide();
    $(this).css("opacity","1");
})
