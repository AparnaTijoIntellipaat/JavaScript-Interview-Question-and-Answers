

// setTimeout

// const timerId = setTimeout(() => {
//     console.log("Hello after 2 seconds");    
// }, 2000);




// setInterval

const timerId = setInterval(() => {
    console.log("Hello after every 2 seconds");    
}, 2000);




setTimeout(() => {
    clearInterval(timerId)
}, 4000);