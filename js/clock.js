const clock=document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    //const hour = date.getHours();
}

getClock();
setInterval(getClock,1000);
