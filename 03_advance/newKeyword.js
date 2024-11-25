function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
};

createUser.prototype.showScore = function(){
    console.log(`The score is ${this.score}`);
};

const Vikram =new createUser("Vikram", 100);
const Sam =new createUser ("Sam", 1000);

Vikram.increment();
Sam.showScore();
Vikram.showScore();