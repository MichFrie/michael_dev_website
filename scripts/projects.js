let codePreview_1 = document.querySelector(".code_preview_1");
let codePreview_2 = document.querySelector(".code_preview_2");
let codePreview_3 = document.querySelector(".code_preview_3");
let codePreview_4 = document.querySelector(".code_preview_4");
let codePreview_5 = document.querySelector(".code_preview_5");

let buttonPreview = document.querySelector(".button_preview");

//Preview window initial state
codePreview_1.style.visibility = "hidden";



//Visibility preview 1
buttonPreview.addEventListener('click', function(){
    if(codePreview_1.style.visibility == "visible"){
        codePreview_1.style.visibility = "hidden";
    }else{
        codePreview_1.style.visibility = "visible";
    }
})

//Visibility preview 2
