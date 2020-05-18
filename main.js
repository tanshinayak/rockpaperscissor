let reset=document.getElementById("reset");
let resultwindow=document.getElementById("show");
let marksuser=document.getElementById("marksuser");
let markscomputer=document.getElementById("markscomputer");
let userinput;
function start()
{
    resultwindow.innerHTML=`Let's Start the Game....!!`;
    marksuser.innerHTML='0';
    markscomputer.innerHTML='0';
}
function result(userinput)
{  markcomp=Number(markscomputer.innerHTML);
    markyou=Number(marksuser.innerHTML);
    if(markcomp<5 && markyou<5)
    {
       let computerinput=computerchoice();
       switch(userinput)
       {
           case 'stone': if(computerinput=='paper')
                        {
                            markscomputer.innerHTML=markcomp+1;
                            resultwindow.innerHTML='Computer has chosen paper and you have choosen stone <br> So computer wins';
                        }
                       else if(computerinput=='scissor')
                        {
                            marksuser.innerHTML=markyou+1;
                            resultwindow.innerHTML='Computer has chosen scissor and you have choosen stone <br> So You win';
                        }
                        else{
                            resultwindow.innerHTML=`Draw <br>
                            You Both have choosen Rock`;;
                        }
                        break;
            case 'paper': if(computerinput=='stone')
                        {
                            marksuser.innerHTML=markyou+1;
                            resultwindow.innerHTML='Computer has chosen stone and you have choosen paper <br> So You win';
                        }
                       else if(computerinput=='scissor')
                        {
                            markcomputer.innerHTML=markcomp+1;
                            resultwindow.innerHTML='Computer has chosen scissor and you have choosen paper <br> So computer wins';
                        }
                        else{
                            resultwindow.innerHTML=`Draw <br>
                            You Both have choosen Paper`;
                        }
                        break;
            case 'scissor': if(computerinput=='paper')
                        {
                            marksuser.innerHTML=markyou+1;
                            resultwindow.innerHTML='Computer has chosen paper and you have choosen scissor <br> So You win';
                        }
                       else if(computerinput=='stone')
                        {
                            markscomputer.innerHTML=markcomp+1;
                            resultwindow.innerHTML='Computer has chosen stone and you have choosen scissor <br> So computer wins';
                        }
                        else{
                            resultwindow.innerHTML=`Draw <br>
                            You Both have choosen Scissors`;
                        }
       }
    }
    else if(markcomp==5)
    {
        resultwindow.innerHTML="Computer wins.....!!!!";
        setTimeout(start,3000);
    }
    else if(markyou==5)
    {
        resultwindow.innerHTML="You win.....!!!!";
        setTimeout(start,3000);
    }
};
document.getElementById("rock").addEventListener("click",function () {
    userinput = 'stone';
    result(userinput);
});
document.getElementById("paper").addEventListener("click", function () {
    userinput = 'paper';
    result(userinput);
});
document.getElementById("scissor").addEventListener("click", function () {
    userinput = 'scissor';
    result(userinput);
});
function computerchoice(){
    choices = ["stone", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}