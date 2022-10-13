// setTimeout(() => {
//     document.getElementById("movieImageBeforeResponsive").style.display = "none";
//     document.getElementById("videoOfTheMovie").style.display = "block";
// }, 3000);



document.getElementById("moreBtn").addEventListener("click", openPopUp);
function openPopUp(){
    document.getElementById("popUp").style.display = "flex";
}
function closeBtn() {
    document.getElementById("popUp").style.display = "none";
}