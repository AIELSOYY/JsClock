var sec, clockBreak = false;
resButElement = document.getElementById("resetClock");
const wait = ms => new Promise(res => setTimeout(res, ms));

document.getElementById("toggleClock").onclick = function breakClock(){
    if(clockBreak == false){
        clockBreak = true;
    }
    else{
        clockBreak = false;
        clockFunc();
    }
}

clockFunc();

async function clockFunc(){
    while(clockBreak == false){
        nowDate = new Date();
        nowSeconds = nowDate.getSeconds().toString().padStart(2, "0");
        nowMinutes = nowDate.getMinutes().toString().padStart(2, "0");
        nowHours = nowDate.getHours().toString().padStart(2, "0");
        document.getElementById("horlogeText").innerHTML = nowHours + ":" + nowMinutes + ":" + nowSeconds;
        await wait(1000);
    }
}