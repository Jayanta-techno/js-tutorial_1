// we have to first generate random colour code
const randomColour=function(){
    const hex='01234456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)] // 0-16 tak
    }
    return color;
    };
    let intervalId=null;
    const StartChangingColor=()=>{
        if(!intervalId){
            intervalId=setInterval(changeBgcolor,1000);
        }
        function changeBgcolor(){
            document.body.style.backgroundColor=randomColour();
        }
    };
    const stopchangingcolor=function(){
        clearInterval(intervalId);
        intervalId=null;
    };
    document.querySelector('#start').addEventListener('click',StartChangingColor);
    document.querySelector('#stop').addEventListener('click',stopchangingcolor)
