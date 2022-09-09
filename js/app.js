//cdo-global.ru
////Job_Kyungu_L
//joblodo@cdo-global.ru


//JS <> 
//WebSite Menu Closing and Opening Code , Global for Website
let menu     = document.querySelector('.section__left');
let openMenu =  document.querySelector('#openMenu');

openMenu.addEventListener("click", () => {
       menu.classList.toggle("menuStyle");
});


//Code To Open and Close Search Input in index.html > Header
let searchBtn    = document.querySelector('.btn__search');
let searchInput  = document.querySelector('#searchInput');
let body         = document.querySelector('main');

searchInput.style.display = "none";
try {
    searchBtn.addEventListener('click', () => {
        document.querySelector('#searchInput').style.display = "block";
    });
        body.addEventListener('mousedown', (e) => { 
            document.querySelector('#searchInput').style.display = 'none';
     });
}catch(e) {
       searchInput.onclick =  () => {
          searchInput.style.display = "block";
       };
}


// Code to Open and Close Comments Pop-Up used in albumVideo__notes
let openPopComments  = document.querySelector('.element-hide');
let closePopComments = document.querySelector('.closePopComments'); 
// let PopComments      = document.querySelector('.section__right-notes');

openPopComments.addEventListener('click', () => {
        document.querySelector('.section__right-notes').style.transform = 'scale(1)';
        document.querySelector('.section__right-notes').style.transformOrigin = 'bottom right ';
});
closePopComments.addEventListener('click', () => {
        document.querySelector('.section__right-notes').style.transform = 'scale(0)';
        document.querySelector('.section__right-notes').style.transformOrigin = 'top left';
})



// //Loading Videos Home
// let loadMoreBtn = document.querySelector('.homeVideo__filterVid');
// let currentItem = 8;

// loadMoreBtn.onclick = () =>{
//    let boxes = [...document.querySelectorAll('.homeVideo__Bottom .list-cards__video ')];
//    for (var i = currentItem; i < currentItem + 8; i++){
//       boxes[i].style.display = 'inline-block';
//    }
//    currentItem += 8;

// //    if(currentItem >= boxes.length){
// //       loadMoreBtn.style.display = 'none';
// //    }
// }



// let filterBtn     = document.querySelector('.homeVideo__filterVid');
// let filterVideo   = document.querySelector('.list-card__Video');
// let lists         = document.querySelector('.list-cards__video');
// let currentVideo  = 8;

// filterBtn.onlick = () => {
//      let filterVideo = [...document.querySelector('.homeVideo__Bottom .list-cards__video .list-card__Video')];
//      for(var i = currentVideo; i < currentVideo + 8; i++) {
//          filterVideo[i].style.display ="block";
//      }

//      currentVideo += 8 ;
// }

// console.log(currentVideo);



//Caroussel Comments Users issue in NotesComments.html
const arrowLeft   = [...document.querySelectorAll('#paginationLeft')];
const arrowRight  = [...document.querySelectorAll('#paginationRight')];
const commentUser = [...document.querySelectorAll('#carousselComments')];
const containerPagination  = document.querySelector('.notes-list-paginations');
const numb         = document.querySelector('.notes-pagination');

commentUser.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth      = containerDimensions.width;

      arrowRight[i].addEventListener('click', () => {
           item.scrollLeft += containerWidth;

      });

      arrowLeft[i].addEventListener('click', () => {
           item.scrollLeft -= containerWidth;
      })
});

//Button [Paginationn] 




