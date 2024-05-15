const display= document.getElementById("display");
let stime=0;
let etime=0;
let timer=null;
let isrunning=false;

function start(){

  if(!isrunning){
    stime=Date.now()-etime;
    timer=setInterval(update,10);
    isrunning=true;
    console.log(timer);
  }
 
}

function stop(){
  
  if(isrunning){
    clearInterval(timer);
    etime=Date.now()-stime;
    isrunning=false;
  }
}

function reset(){
  clearInterval(timer);
 etime=0;
 timer=null;
 isrunning=false;
 display.innerHTML=`00:00:00:00`;
}

function update(){

  let currenttime=Date.now();
  etime=currenttime-stime;
  let hours=Math.floor(etime/(1000*60*60));
  let minutes=Math.floor(etime/(1000*60)%60);
  let second=Math.floor(etime/1000 % 60);
  let millisecond=Math.floor(etime % 1000 /10);

  hours=String(hours).padStart(2,"0");
  minutes=String(minutes).padStart(2,"0");
  second= String(second).padStart(2,"0");
  millisecond=String(millisecond).padStart(2,"0");

  display.innerHTML=`${hours}:${minutes}:${second}:${millisecond}`;


}