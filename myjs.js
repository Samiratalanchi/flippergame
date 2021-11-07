var picAdd = [
    "./static/backimage/1.jpg",
    "./static/backimage/2.jpg",
    "./static/backimage/3.jpg",
    "./static/backimage/4.jpg",
    "./static/backimage/5.jpg",
    "./static/backimage/6.jpg",
    "./static/backimage/7.jpg",
    "./static/backimage/8.jpg",
    "./static/backimage/9.jpg",
    "./static/backimage/10.jpg",
    "./static/backimage/1.jpg",
    "./static/backimage/2.jpg",
    "./static/backimage/3.jpg",
    "./static/backimage/4.jpg",
    "./static/backimage/5.jpg",
    "./static/backimage/6.jpg",
    "./static/backimage/7.jpg",
    "./static/backimage/8.jpg",
    "./static/backimage/9.jpg",
    "./static/backimage/10.jpg"
]

var start=false;
var counter =0;
var card1,card2;
var time = 60;
var score = 0;
var highScore = 0;
var x,y;

function startGame() {

    document.getElementById("header").innerHTML="Finish";

    document.getElementById("progress1").style.animation="none";
    document.getElementById("progress2").style.animation="none";
    document.getElementById("info").style.marginTop="-2vw";
    document.getElementById("info").style.animation="none";

    clearTimeout(y);
    clearInterval(x);

    document.getElementById("scoreValue").innerHTML= "0";
    document.getElementById("timerValue").innerHTML= "60";

    time=60;
    score=0;

    document.querySelectorAll(".front").forEach(a=>a.style.visibility = "hidden");
    document.querySelectorAll(".back").forEach(a=>a.style.visibility = "visible");

    document.getElementById("restart").style.visibility="visible";
    document.getElementById("start").style.visibility="hidden";

    
    function timer() {
        time--;
        document.getElementById("timerValue").innerHTML=time;
        if (time==0) {
            document.getElementById("progress1").style.animation="none";
            document.getElementById("progress2").style.animation="none";
            clearInterval(x);
        }
    }

    function finish() {
        if (score > highScore) {
            highScore = score;
        }
        document.getElementById("highScoreValueFinish").innerHTML=highScore;
        document.getElementById("scoreValueFinish").innerHTML=score;

        document.getElementById("info").style.animation="showScore 1s linear forwards";

        document.querySelectorAll(".back").forEach(a=>a.style.visibility = "hidden");
        document.querySelectorAll(".front").forEach(a=>a.style.visibility = "visible");

        document.getElementById("restart").style.visibility="hidden";
        document.getElementById("start").style.visibility="visible";

        start="false";

        document.getElementById("scoreValue").innerHTML= "0";
        document.getElementById("timerValue").innerHTML= "60";

        document.getElementById("restart").style.visibility="hidden";
        document.getElementById("start").style.visibility="visible";
        
        clearInterval(x);
        document.getElementById("progress1").style.animation="none";
        document.getElementById("progress2").style.animation="none";
        clearTimeout(y);

        document.getElementById("header").innerHTML="Time out";
    }


    var shuffleArray = array => {
        for(let i = 19 ; i > 0 ; i --) {
            const j = Math.floor(Math.random() * (i+1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(picAdd);

    for(let i=1;i<=20;i++) {
        document.getElementById("back-"+i).style.backgroundImage= "url("+picAdd[i-1]+")";
    }

    setTimeout(runGame,3000);

    function runGame() {
        document.querySelectorAll(".back").forEach(a=>a.style.visibility = "hidden");
        document.querySelectorAll(".front").forEach(a=>a.style.visibility = "visible");

        x = setInterval(timer,1000);
        y = setTimeout(finish,60000);

        document.getElementById("progress1").style.animation="left 30s linear both";
        document.getElementById("progress2").style.animation="right 30s linear both 30s";
        
    }
    start = true;
}
window.onclick = function(event) {
    var frontCard,backCard;
    if(start==true) {
        for (let i=0;i<20;i++) {
            frontCard = document.getElementsByClassName("front")[i];
            backCard = document.getElementsByClassName("back")[i];
            
            if (event.target == frontCard){
                if (counter==0) {
                    card1=i;
                    frontCard.style.visibility="hidden"
                    backCard.style.visibility = "visible";
                    backCard.style.transform = "rotateX(360deg)";
                    
                    counter++ ;

                    
                }
                else if(counter==1) {
                    card2=i;
                    frontCard.style.visibility = "hidden";
                    backCard.style.transform = "rotateX(360deg)";
                    backCard.style.visibility = "visible";
                    const element1 = document.getElementsByClassName("back")[card1];
                    const element2 = document.getElementsByClassName("back")[card2];
                    var style1 = window.getComputedStyle(element1,false);
                    var style2 = window.getComputedStyle(element2,false);
                    var ad1 = style1.backgroundImage.slice(4,-1).replace(/"/g, "");
                    var ad2 = style2.backgroundImage.slice(4,-1).replace(/"/g, "");
                    if (ad1 != ad2) {
                        setTimeout(hideCard,500);
                        function hideCard() {

                            document.getElementsByClassName("back")[card1].style.visibility="hidden";
                            document.getElementsByClassName("back")[card1].style.transform = "rotateX(360deg)";
                            document.getElementsByClassName("front")[card1].style.visibility="visible";
                            document.getElementsByClassName("front")[card1].style.transform = "rotateX(360deg)";
                            
                            document.getElementsByClassName("back")[card2].style.visibility="hidden";
                            document.getElementsByClassName("back")[card2].style.transform = "rotateX(360deg)";
                            document.getElementsByClassName("front")[card2].style.visibility="visible";
                            document.getElementsByClassName("front")[card2].style.transform = "rotateX(360deg)";
                            
                            document.getElementsByClassName("back")[card1].style.transform = "none";
                            document.getElementsByClassName("back")[card2].style.transform = "none";
                        }
                        
                        
                        
                        
                    } else {
                        score += 10;
                        document.getElementById("scoreValue").innerHTML=score;

                        if(score == 100) {
                            document.querySelectorAll(".back").forEach(a=>a.style.visibility = "hidden");
                            document.querySelectorAll(".front").forEach(a=>a.style.visibility = "visible");

                            highScore = score;

                            document.getElementById("highScoreValueFinish").innerHTML=highScore;
                            document.getElementById("scoreValueFinish").innerHTML=score;

                            document.getElementById("info").style.animation="showScore 1s linear forwards";

                            document.getElementById("restart").style.visibility="hidden";
                            document.getElementById("start").style.visibility="visible";

                            document.getElementById("scoreValue").innerHTML= "0";
                            document.getElementById("timerValue").innerHTML= "60";

                            start="false";

                            document.getElementById("restart").style.visibility="hidden";
                            document.getElementById("start").style.visibility="visible";

                            document.getElementById("progress1").style.animation="none";
                            document.getElementById("progress2").style.animation="none";

                            time =60;
                            clearInterval(x);
                            clearTimeout(y);
                        }
                    }
                    counter = 0;
                    document.getElementsByClassName("front")[card1].style.transform = "none";
                    document.getElementsByClassName("front")[card2].style.transform = "none";
                }
                
            }
        }
    }
}