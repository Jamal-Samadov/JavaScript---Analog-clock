let hour = document.querySelector('.hours')
let min = document.querySelector('.minute')
let second = document.querySelector('.second')


function TicToc(){
    let sec = new Date().getSeconds()
    let minute = new Date().getMinutes()
    let hours = new Date().getHours()

    console.log(sec,minute,hours);
    
    second.style.transform = `rotate(${180+(sec * 6)}deg)`
    min.style.transform = `rotate(${180+(minute * 6)}deg)`
    hour.style.transform = `rotate(${180+(hours * 30)}deg)`
    
}


setInterval(TicToc, 1000);