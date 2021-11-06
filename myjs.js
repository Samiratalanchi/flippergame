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
function startGame() {

    document.getElementById("restart").style.visibility="visible";
    
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
}