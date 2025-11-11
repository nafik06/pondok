const iconmenu = document.getElementById("iconmenu");
const menulist = document.getElementById("menulist");

iconmenu.addEventListener("click", () => {
    menulist.classList.toggle("hiden");
});
// popup form
function openForm() {
    document.getElementById("myform").style.display = "block";
}
 function closeform() {
    document.getElementById("myform").style.display = "none"
 }
