
var likeInd = document.querySelectorAll(".like-indicator");
// function likeImg(){
//      var result = likeInd.getAttribute('data-attr');
//      console.log(result);
//      if(result == 'Like'){
//         likeInd.className += (" "+"like-indicator--active");
//         // likeInd.classList.add(" "+"like-indicator--active");
//         likeInd.setAttribute('data-attr','Dislike')
//      }else {
//             likeInd.classList.remove("like-indicator--active");
//             // alert( 'Это поздновато..' );
//             likeInd.setAttribute('data-attr','Like')
//         }
// }

// function likeImg(){

// }


function countMy(){
    for (i = 0; i < likeInd.length; i++) {
        likeInd[i].addEventListener('click', function(event){
            var target = event.target;
            var result = target.getAttribute('data-attr');
            console.log(result);
            if(result == 'Like'){
                target.className += (" "+"like-indicator--active");
                target.setAttribute('data-attr','Dislike')
                var parentM = target.parentNode;
                console.log(parentM)
                var likeLib = document.querySelector('.library--liked');
                likeLib.appendChild(parentM);
                target.innerHTML = 'Liked'

            }else {
                target.classList.remove("like-indicator--active");
                // alert( 'Это поздновато..' );
                target.setAttribute('data-attr','Like')
                var parentM = target.parentNode;
                console.log(parentM)
                var likeLib = document.querySelector('.library');
                likeLib.appendChild(parentM);
                target.innerHTML = 'Like'
            }
        })
      }
}

countMy();