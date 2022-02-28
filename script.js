function showItem(){
    var para = document.getElementById("nav-show");
        para.classList.toggle("paragraphClass");
}

window.onscroll=function(){
    if(window.pageYOffset>200){
        document.getElementById("logo").style.backgroundColor="#7D83FF";
        document.getElementById("nav-show").style.backgroundColor="#7D83FF";
           
    }
    else{
        document.getElementById("logo").style.backgroundColor="transparent";
        document.getElementById("nav-show").style.backgroundColor="transparent";
    }
    }