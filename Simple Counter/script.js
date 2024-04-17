const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const countbtn = document.getElementById("countbtn")
let count = 0

increase.onclick = function(){
    count ++
    countbtn.textContent = count
}
decrease.onclick = function(){
    count --
    countbtn.textContent = count
}
reset.onclick = function(){
    count = 0
    countbtn.textContent = count
}