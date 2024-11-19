setInterval(()=>{
    let hour=document.querySelector("#hourValue")
let minute=document.querySelector("#minuteValue")
let second=document.querySelector("#secondValue")
// console.log(hour);
// console.log(minute);
// console.log(second);
let currentHour=new Date().getHours();
let currentMinute=new Date().getMinutes();
let currentSecond=new Date().getSeconds();
// console.log(currentHour);
// console.log(currentMinute);
// console.log(currentSecond);

hour.innerHTML=currentHour;
minute.innerHTML=currentMinute;
second.innerHTML=currentSecond;

 currentHour<10? hour.innerHTML=`0${currentHour}`:hour.innerHTML=currentHour;
 currentMinute<10? minute.innerHTML=`0${currentMinute}`:minute.innerHTML=currentMinute;
 currentSecond<10? second.innerHTML=`0${currentSecond}`:second.innerHTML=currentSecond;

 currentHour>12?(hour.innerHTML=`0${currentHour-12}`):hour.innerHTML=currentHour;

},1000)





