let number = document.getElementById('Num')
let Dec = document.getElementById('Dec')
let Res = document.getElementById('Res')
let Inc = document.getElementById('Inc')

// function Decrease(){
    
// }
// Decrease Function
Dec.addEventListener('click',()=>{
    number.innerText--
})

// Reset function
let Reset = function(){
    number.innerText = 0
}

Res.addEventListener('click', Reset)

// increase function
Inc.addEventListener('click', ()=>{
    number.innerText++
})