// const search = document.getElementById("search");
// search.addEventListener("click",, false)


function clicksearch(){
    document.getElementById("searchpopupcontainer").style.display = "flex";
     document.getElementById("search").style.display = "none";
     document.getElementById("body").style.overflow="hidden";
}

function clickhome(){
    document.getElementById("searchpopupcontainer").style.display = "none";
     document.getElementById("search").style.display = "block";
     document.getElementById("body").style.overflow="scroll";

}


function chagangeto2d(){
    document.getElementById("threed2dconverter").style.display = "none";
    document.getElementById("imagesidercontainer").style.display = "flex";
    document.getElementById('threedview').style.display = "block";
     document.getElementById('webg1').style.visibility = "hidden";

}

function chagangeto3d(){
    document.getElementById("imagesidercontainer").style.display = "none";
    document.getElementById("threed2dconverter").style.display = "block";
    document.getElementById('threedview').style.display = "none";
    document.getElementById('webg1').style.visibility = "visible";
}

const extention = 'webp'

const images =[
    'main.',
    'orth_front.',
    'orth_side.',
    'orth_top.'
]
var index = 0 

function leftshift(path){
    if(index==0){
        index=3
        document.getElementById("productimg").src="../"+path+images[index]+extention;
    }else{
        index--;
        document.getElementById("productimg").src='../'+path+images[index]+extention;
    }
    
}

// function getSpecification(path){
//     for(var j=0;j<images.length;j+=2){
//         var spec =`
//             <div class="specificationcontainer1">
//                 <div class="specificationtext">
//                     <h2>Specification 1</h2>
//                 </div>
//                 <img src="../`+path+images[j]+extention+`" alt="">
//             </div>
//             <div class="specificationcontainer2">
//                 <img src="../`+path+images[j+1]+extention+`" alt="">
//                 <div class="specificationtext">
//                     <h2>Specification 2</h2>
//                 </div>    
//             </div>
//         `
//         document.write(spec)
//     }
// }




function rightshift(path){
    if(index==3){
        index=0
        document.getElementById("productimg").src="../"+path+images[index]+extention;
    }else{
        index++;
        document.getElementById("productimg").src="../"+path+images[index]+extention;
    }
    
}






var preloader = document.getElementById('loading');
function onloadfunction(){
        preloader.style.display='none'; 
        document.getElementById("body").style.overflowY="scroll";        
}



































            