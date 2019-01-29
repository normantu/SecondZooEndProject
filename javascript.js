var animalPopulation = 0;


$(document).ready(function(){
    var stinger = new Bee("Stinger");
    var rarity = new Unicorn("Rarity");
    var tigger = new Tiger("Tigger");
    var gemma = new Giraffe("Gemma");
    var pooh = new Bear("Pooh");
    allAnimals = [ tigger, pooh, gemma, rarity, stinger];

    $("#createAnimal").click(function(){
        createAnimal();
    });

    $("#food").click(function(){
        feedAnimals();
    });

    listAnimals();
    $("#animalCage").click(function(){
        deleteAnimal(this);
    });

});

function deleteAnimal(name){
    console.log(name);
    for(var i=0; i<allAnimals.length; i++){
        if (name == allAnimals[i].name){
            $("#theFeed").append("You deleted " + allAnimals[i].name + " the " + allAnimals[i].constructor.name + "." + "<br>");
            allAnimals.splice(i, 1);
        }
    }
    listAnimals();

}


function listAnimals(){
    for(var i = 0; i< allAnimals.length; i++){
        console.log(allAnimals);
        $("#animalCage").append(allAnimals);
    }
    $("#animalCage").empty();
    for(var i = 0; i < allAnimals.length; i++){
        //allAnimals[i].id
        $("#animalCage").append("<br><div onclick='deleteAnimal(this.id)' id=" + allAnimals[i].name + ">"   + allAnimals[i].name + " the " + allAnimals[i].constructor.name + "." + "<br>");
        $("#animalCage").append(allAnimals[i].name + "'s favorite food is " + allAnimals[i].favoriteFood + "." + "<br></div>");

    }
}

function feedAnimals(){
    $("#theFeed").empty();
    var animalFood = $("#animalMeals option:selected").text();
    for(var i= 0; i < allAnimals.length; i++){
        $("theFeed").html(allAnimals[i].eat(animalFood));
    }
}

function createAnimal(){
    var animalType = $("#animalSelector").val();
    var animalName = $("#naming").val();
    var animal;
    switch(parseInt(animalType)){
        case 0:
            break;
        case 1:
            animal = new Bee (animalName);
            break;
        case 2:
            animal = new Unicorn (animalName);
            break;
        case 3:
            animal = new Tiger (animalName);
            break;
        case 4:
            animal = new Giraffe (animalName);
            break;
        case 5:
            animal = new Bear (animalName);
            break;
    }
    $("#theFeed").append("You created " + animal.name + " the " + animal.constructor.name + "." + "<br>");
    allAnimals.push(animal);
    listAnimals();

}


class Animal {

    constructor (name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }


    sleep(){
        $("#theFeed").append(this.name + " sleeps for 8 hours" + "<br>");
    }

    eat(food) {
        $("#theFeed").append(this.name + " eats " + food + "<br>");
        food == this.favoriteFood ? $("#theFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>") : this.sleep();
    }
}

class Giraffe extends Animal {
    constructor (name){
        super (name, "leaves");
    }

    eat(food){
        if (this.favoriteFood == food){
            $("#theFeed").append("Yum!!! " + this.name + " wants more leaves" + "<br>");
            this.sleep();
        } else {
            $("#theFeed").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
            $("#theFeed").append(this.name + " eats leaves" + "<br>");
        }
    }
}


class Bee extends Animal {
    constructor (name){
        super (name, "pollen");
    }

    sleep(){
        $("#theFeed").append(this.name + " never sleeps" + "<br>");

    }
    eat(food){
        if (food == this.favoriteFood){
            $("#theFeed").append("Yum!!! " + this.name + " wants more pollen" + "<br>");
            this.sleep();

        } else {
            $("#theFeed").append("Yuck!!! " + this.name + " will not eat " + food + "<br>");
            $("#theFeed").append(this.name + " eats pollen" + "<br>");
        }
    }
}


class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        $("#theFeed").append(this.name + " hibernates for 4 months" + "<br>");
    }

    eat(food) {
        $("#theFeed").append(this.name + " eats " + food + "<br>");
        this.favoriteFood == food ? $("#theFeed").append("Yum!!! " + this.name + " wants more " + food + "<br>") :
            this.sleep();

    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

}

class Unicorn extends Animal{
    constructor (name){
        super(name, "marshmallows");
    }

    sleep() {
        $("#theFeed").append(this.name + " sleeps in a cloud" + "<br>");
    }
    eat(food) {
        $("#theFeed").append(this.name + " eats " + food + "<br>");
        if (this.favoriteFood == food){
            $("#theFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep();
        } else {
            this.sleep();
        }
    }
}

class Zookeeper {
    constructor(name) {
        this.name = name;
    }
    feedAnimals(animals, food) {
        this.food = food;
        console.log(this.name + " is feeding " + this.food + " to " + animals.length + " of " + animalPopulation + " animals");
        for(var i=0; i< animals.length; i++){
            animals[i].eat(this.food);
        }
    }

}