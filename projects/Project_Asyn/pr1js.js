const randcol = function(){
    const hex = '0123456789ABCDEF'
    let col = '#'
    for(let i=0;i<6;i++){
        col += hex[Math.floor(Math.random()*16)]
    }
    return col;
}
console.log(randcol());

let interId
const startchange = function(){
    if(!interId){
        interId = setInterval(changecol,100)
    }
    function changecol(){
        document.body.style.backgroundColor = randcol()
    }
}
const stopchange = function(){
    clearInterval(interId)
    interId = null;
}       
document.querySelector('#Start').addEventListener('click',startchange)

document.querySelector('#Stop').addEventListener('click',stopchange)