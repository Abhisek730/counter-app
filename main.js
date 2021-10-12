var count = 0;
var value = document.querySelector("#value");
var inc = document.querySelector(".inc");
var dec = document.querySelector(".dec");
var reset = document.querySelector(".reset");

inc.addEventListener("click", function(){
    count++;
    value.innerHTML = count;
});
dec.addEventListener("click", function(){
    count--;
    value.innerHTML = count;
});

reset.addEventListener("click", function(){
    count = 0;
    value.innerHTML = count;
});
