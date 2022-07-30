

var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
var intervalID;



for(var i = 0; i< navMenuAnchorTags.length; i++){

    navMenuAnchorTags[i].addEventListener("click", scroll);
}


function scrollVertically(targetSect){
    var targetSectCoordinates = targetSect.getBoundingClientRect();
    if(targetSectCoordinates.top  <= 0 ){
        clearInterval(intervalID);
        return;
    }                        
     window.scrollBy(0, 50);   
}



function scroll(event){
    event.preventDefault();
   var targetSectId = this.textContent.trim().toLowerCase();       
   var targetSect = document.getElementById(targetSectId);            
     intervalID = setInterval(scrollVertically, 10, targetSect);
}



// skill-section

// var skillsContainer = document.getElementById("skills-container");

// var progressBar = document.querySelectorAll(".skill-progress > div");
// var animationDone = false;

//  function initialiseBars(){
//          for(let bar of progressBar){
//         bar.style.width = 0 + "%";
//          }   
// } 

// function fillBars(){          
//          for(let bar of progressBar){
//         let currentWidth = 0;
//         let targetWidth = bar.getAttribute("data-skill-level");
        
//         let interval = setInterval(function(){
//            if(currentWidth >= targetWidth){
//                clearInterval(interval);
//                return;
//            }
//            else{              
//               bar.style.width = currentWidth + "%";
//               currentWidth++;
//            }
//         },5);        
//     }
// }

//  function checkScroll(){       
//    var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top < window.innerHeight){
//         fillBars();
//         animationDone = true;
//     }
//     else if(coordinates.top > window.innerHeight){
//         initialiseBars();
//         animationDone = false;
//     }
//     } 

// window.addEventListener("scroll", checkScroll);




// SKILL-section (Improved)

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar){
   bar.style.width = 0 + "%";
   bar.setAttribute("data-visited", false) 
}

for(let bar of progressBars){
    initialiseBar(bar);
}

function fillBar(bar){
    var currentWidth = 0;
   var targetWidth = bar.getAttribute("data-skill-level");
    
   let interval = setInterval(function(){
      if(currentWidth >= targetWidth){
          clearInterval(interval);
          return;
      }
      else{
          currentWidth++
          bar.style.width = currentWidth + "%";
      }
   },5);


}



function checkScroll(){
  
    for(let bar of progressBars){
        var barCoordinates = bar.getBoundingClientRect();
          
        if((bar.getAttribute("data-visited")== "false") && barCoordinates.top <=( window.innerHeight - barCoordinates.height))
        {
           fillBar(bar);
           bar.setAttribute("data-visited", true) ;
           
        }

        else if(barCoordinates.top > window.innerHeight){
            // bar.setAttribute("data-visited", false);

            initialiseBar(bar);
        }
    }

}


window.addEventListener("scroll", checkScroll);