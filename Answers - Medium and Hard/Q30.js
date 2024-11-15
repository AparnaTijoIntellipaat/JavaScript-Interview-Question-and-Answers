
const button = document.querySelector("button");

function observer1(){
    console.log("Observer 1 notified");    
}

function observer2(){
    console.log("Observer 2 notified");    
}

button.addEventListener("click", observer1)
button.addEventListener("click", observer2)