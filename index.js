
setTimeout( function(){
    document.getElementById("audio").play();
    console.log("music on");
},3000);

const d=document.getElementById("days");
let h=document.getElementById('hours');
let m=document.getElementById('minutes');
let s=document.getElementById('seconds');


let durgapuja='1 Oct 2022';

function counter(){
    let durgaPujaDate=new Date(durgapuja);
    let currentDate=new Date();


    let tSec= (durgaPujaDate-currentDate)/1000;
    let days= Math.floor(tSec/3600/24);
    let hour= Math.floor(tSec/3600)%24;
    let min =((Math.floor(tSec/60))%60);
    let sec = Math.floor(tSec)%60;
    //console.log(days,hour,min,sec);

d.innerHTML= days;
h.innerHTML=timeFormat(hour);
m.innerHTML=timeFormat(min);
s.innerHTML=timeFormat(sec);

}

function timeFormat(time){
    return (time < 10 ? '0' : '')+time;
}

counter();
setInterval(counter,1000);




