function main(){
function getSecond(second){
    const data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hours12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');

let seconds = 0;
let timer;

function startTimer(){
    timer = setInterval(function(){
        seconds++
        relogio.innerHTML = getSecond(seconds);
    },1000);
}
document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('iniciar')){
        relogio.classList.remove('paused')
        clearInterval(timer);
        startTimer(); 
    }
    if(element.classList.contains('pausar')){
        relogio.classList.add('paused')
        clearInterval(timer);
    }
    if(element.classList.contains('zerar')){
        relogio.classList.remove('paused')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seconds = 0
    }})
}
main();