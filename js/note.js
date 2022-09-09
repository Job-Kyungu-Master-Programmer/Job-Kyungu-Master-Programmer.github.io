//Job_Kyungu_Lodo
////cdo-global.ru
//joblodo@cdo-global.ru


// Text Javascript 



//Variables 
let commentsUsers  =  document.querySelector('.albumVideo-right__textarea');
let addBtn         = document.querySelector('#addBtn');
let input          = document.querySelector('.inv-classe');
let AddComments    = document.querySelector('.comment-item');

// Click button Register 
//LocalStorage
const VarJson = JSON.parse(localStorage.getItem("VarJson") || []);//4.Value well introduced in LocalStorage
//Creation of the function that will display the elements in the browser
function ShowComment() {//This Function will be created after storing the elements in the LocalStorage;
        VarJson.forEach((item) => {
                let cardComment = `<div class="comment-item">
                <div class="comments__date">Заметка от ${item.date}</div>
                <div class="comments__text">${item.Description}</div>
              </div>`;

              AddComments.insertAdjacentHTML("afterend", cardComment);//We had introduced in the browser
        });
}

ShowComment();//Call this is Function for working


addBtn.addEventListener("click", e => {
        e.preventDefault();

         let title = input.value,
            Descr = commentsUsers.value;

            if(title || Descr) {
                 let dateObj = new Date(),
                    month = dateObj.getUTCMonth(),
                    day   = dateObj.getDay(),
                    year  = dateObj.getFullYear();

                 let info = {
                    Title : input.value, Description : commentsUsers.value,
                    date  : `${day}, ${month}, ${year}`
                 }

                 //LocalStorage
                //  VarJson = [];//1. Created Variable for LocalStorage, //But this remains in comment
                   VarJson.unshift(info);//2.Beginning Introduction of this variable in the LocalStorage
                    //## NOTES ###:=> Here we just made the introduction in the LocalStorage, 
                   //but to start saving several Variables, we will put it above the function,
                   // and do the 'ForeEach'
                   localStorage.setItem("VarJson" , JSON.stringify(VarJson))//3.Introduction in the LocalStorge,  By a single variable
                 
                //    console.log(VarJson);
                ShowComment()
            }
       
})