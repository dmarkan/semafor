let semafor = document.querySelector("#semafor");
let crveno = document.querySelector("#crveno");
let zuto = document.querySelector("#zuto");
let zeleno = document.querySelector("#zeleno");

let start = setInterval(semafor2,12000);

function semafor2() {
let pali_crveno = setTimeout(crveno2,1000);
let pali_zuto = setTimeout(zuto2,5000);
let pali_zeleno = setTimeout(zeleno2,7000);
    function crveno2(){
        crveno.style.background = "red";
        zeleno.style.background ="white";
        zuto.style.background ="white";
    }
    function zuto2(){
        zuto.style.background = "yellow";
        crveno.style.background ="white";
        zeleno.style.background ="white";
    }
    function zeleno2(){
        zeleno.style.background = "green";
        crveno.style.background ="white";
        zuto.style.background ="white";
    }
}

semafor2();