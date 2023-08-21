// js open and close model search
var searchBox = document.querySelector('.hearder_contentSearch');
var modal = document.querySelector('.box_search');

window.addEventListener('click', function(e){   
    console.log(searchBox);
    if (searchBox.contains(e.target)){
        modal.style.display = 'block';
    } else{
        modal.style.display = 'none';
    }
});

// js open and close post image
var boxIconPost = document.querySelector('.header_boxIconAddPost');
var modelPost = document.querySelector(".modalPost");
var modelPost_btnClose = document.querySelector(".modalPost_btnClose");

window.addEventListener('click', function(e){   
    if (boxIconPost.contains(e.target)){
        modelPost.style.display = 'block';
    }
    if (modelPost_btnClose.contains(e.target)){
        modelPost.style.display = 'none';
    }
});

// js open and close select option
var iconAvatar = document.querySelector('.heart_boxIconAvart .iconAvatar');
var box_optionUser = document.querySelector('.box_optionUser');
var header_boxIconHome1 = document.getElementById('header_boxIconHome1');
var header_boxIconHome2 = document.getElementById('header_boxIconHome2');

window.addEventListener('click', function(e){   
    if (iconAvatar.contains(e.target)){

        iconAvatar.classList.add("border-normal");
        box_optionUser.style.display = 'block';

        header_boxIconHome1.style.display = 'none';
        header_boxIconHome2.style.display = 'block';
    }else{
        iconAvatar.classList.remove("border-normal");
        box_optionUser.style.display = 'none';

        header_boxIconHome1.style.display = 'block';
        header_boxIconHome2.style.display = 'none';
    }
});

// js open and close notification
var iconheart = document.querySelector('.header_boxIconHeart .iconHeart');
var box_notis = document.querySelector('.box_notis');

window.addEventListener('click', function(e){ 
    if (iconheart.contains(e.target)){
        box_notis.style.display = 'block';
    }else{
        box_notis.style.display = 'none';
    }
});


