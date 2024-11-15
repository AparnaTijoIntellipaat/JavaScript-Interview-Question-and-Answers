

function* infiniteSequence(){
    let num = 1;
    while(true){
        yield num;
        num++;
    }
}

const seq = infiniteSequence();
