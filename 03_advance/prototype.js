const myHeroes = ["Thor", "Spiderman"];

const heroSuperpower = {
    Thor : "Hammer",
    Spiderman: "Web",
    getSpidermanSuperPower: function(){
        console.log(`Spiderman's superpower is ${this.Spiderman}`);
    }
}
Object.prototype.vikram = function(){
    console.log("Vikram was here");
};

Array.prototype.vasu = function(){
    console.log("Vasu was here");
};
//heroSuperpower.vikram();
//myHeroes.vikram();

//myHeroes.vasu();

//heroSuperpower.vasu();
//it will give an error

const user ={
    name:"Vikram",
    email:"vikrakwal@gmail.com"
};

const teacher = {
    makeVider: true
};

const teachingSupport = {
    isAvailable : false

}

const TAsupport = {
    role: 'js assignments',
    fulltime : true
};

Object.setPrototypeOf(teacher, user);


let username = "VIKRAM SINGH   ";

String.prototype.truelength = function(){
    console.log(`The true length of the string is ${this.trim().length}`);
};
username.truelength();
"chai ".truelength();