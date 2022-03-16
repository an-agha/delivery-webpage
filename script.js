function showItem(){
    var para = document.getElementById("nav-show");
        para.classList.toggle("paragraphClass");
}


function close(){
    document.getElementById("nav-show").style.left ="-100%";
}