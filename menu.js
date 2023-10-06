function w_menu(){
    document.getElementById("ham_main").style.display="none";
    document.getElementById("w_menu").style.display="block";
}
function w_close(){
    document.getElementById("ham_main").style.display="block";
    document.getElementById("w_menu").style.display="none";
}
function w_goto_projects() {
    document.location.href = "./work.html";
}