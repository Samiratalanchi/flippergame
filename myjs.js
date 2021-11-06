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
function startGame() {

    document.querySelectorAll(".front").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".back").forEach(a=>a.style.display = "block");

    document.getElementById("restart").style.visibility="visible";
    document.getElementById("start").style.visibility="hidden";
    
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
        document.querySelectorAll(".back").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".front").forEach(a=>a.style.display = "block");
    }
    start = true;
}
window.onclick = function(event) {
    var frontCard,backCard;
    if(start==true) {
        for (let i=1;i<=20;i++) {
            frontCard = document.getElementsByClassName("front")[i];
            backCard = document.getElementsByClassName("back")[i];
            if (event.target == frontCard){
                if (counter==0) {
                    card1=i;
                    frontCard.style.display = "none";
                    backCard.style.display = "block";
                    counter++ ;
                }
                else if(counter==1) {
                    card2=i;
                    frontCard.style.display = "none";
                    backCard.style.display = "block";
                    const element1 = document.getElementsByClassName("back")[card1];
                    const element2 = document.getElementsByClassName("back")[card2];
                    var style1 = window.getComputedStyle(element1,false);
                    var style2 = window.getComputedStyle(element2,false);
                    var ad1 = style1.backgroundImage.slice(4,-1).replace(/"/g, "");
                    var ad2 = style2.backgroundImage.slice(4,-1).replace(/"/g, "");
                    if (ad1 != ad2) {
                        setTimeout(hidecard,500);
                        function hidecard() {
                            document.getElementsByClassName("front")[card1].style.display="block";
                            document.getElementsByClassName("back")[card1].style.display="none";
                            document.getElementsByClassName("front")[card2].style.display="block";
                            document.getElementsByClassName("back")[card2].style.display="none";
                        }
                    }
                    counter = 0;
                }
            }
        }
    }
    if(counter==2) {
        document.getElementsByClassName("front")[i].display="block";
        document.getElementsByClassName("back")[i].display="none";
        counter=0 ;
    }
}