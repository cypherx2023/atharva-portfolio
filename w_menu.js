function w_menu() {
    document.getElementById("w_menu").setAttribute("style", "background: #101217; z-index: 10; display:block;");
    document.getElementById("w_main").setAttribute("style", "display:none;");
}
function w_close() {
    document.getElementById("w_menu").setAttribute("style", "background: #101217; z-index: 10; display:none;");
    document.getElementById("w_main").setAttribute("style", "display:block;");
}
function w_goto_projects() {
    document.location.href = "./work.html";
}
function w_goto1() {
    document.location.href = "contact.html";
}
function w_goto2() {
    document.location.href = "blog.html";
}
function w_goto3() {
    document.location.href = "work.html";
}
function w_goto4() {
    document.location.href = "about.html";
}