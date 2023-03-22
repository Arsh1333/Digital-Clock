function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
setInterval(displayTime,10);

const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
const colors='rgb('+0+','+0+','+0+')'
document.body.style.backgroundColor= colors;
});

