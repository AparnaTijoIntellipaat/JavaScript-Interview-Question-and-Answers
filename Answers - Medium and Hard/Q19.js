

function cook(ing1, ing2, ing3){

    console.log(`${this.name} is having a meal with ${ing1}, ${ing2} and ${ing3}`);    

}

const adam = { name: "Adam" };

cook.call(adam, "rice", "beans", "water");
cook.apply(adam, ["rice", "beans", "water"]);

const cookForAdam = cook.bind(adam, "rice", "beans", "water");

// cookForAdam();