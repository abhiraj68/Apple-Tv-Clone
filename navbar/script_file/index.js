import navbar from "../component/navbar.js";
console.log(navbar)
document.getElementById("navbar").innerHTML = navbar();

let user_Login = () => {
    console.log(1);
}
let mic = () => {

    console.log(32);
}
let input_movie = () => {
    let inp = document.getElementById("search_input").value;
    console.log(inp);
}


function debounce(fn, delay) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(fn)
        }

    }

}