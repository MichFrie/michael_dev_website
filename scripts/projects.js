let preview1 = document.querySelector(".code_preview_1");
let preview2 = document.querySelector(".code_preview_2");
let buttonPreview1 = document.querySelector(".button_preview_1");
let buttonPreview2 = document.querySelector(".button_preview_2");

preview1.style.display = "none";
preview2.style.display = "none  ";

buttonPreview1.addEventListener('click', function(){
    if(preview1.style.display == "none"){
        preview1.style.display = "initial";
    }else{
        preview1.style.display = "none";
    }
})

buttonPreview2.addEventListener('click', function(){
    if(preview2.style.display == "none"){
        preview2.style.display = "initial";
    }else{
        preview2.style.display = "none";
    }
})