let preview1 = document.querySelector(".code_preview_1");
let buttonPreview = document.querySelector(".button_preview");

preview1.style.visibility = "hidden";

buttonPreview.addEventListener('click', function(){
    if(preview1.style.visibility == "hidden"){
        preview1.style.visibility = "visible";
    }else{
        preview1.style.visibility = "hidden";
    }
})
