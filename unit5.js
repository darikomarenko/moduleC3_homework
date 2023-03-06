//task4

class ElectricalAppliances{
    constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;

};

unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
   }
}

class Lamp extends ElectricalAppliances{
    constructor(name, power, colour, type){
    super(name,power);
    this.colour = colour;
    this.type = type;
    this.isPlugged = true;
    } 
}

class Laptop extends ElectricalAppliances{
    constructor(name, processor, colour, screen){
    super(name);
    this.processor = processor;
    this.colour = colour;
    this.screen = screen;
    this.isPlugged = false;
    }
}

const firstLamp = new Lamp("Lumus", "50w", "red", "table lamp");

const firstLaptop = new Laptop("MacBookAir", "Intel6", "gray", "19inches");

firstLamp.unplug();
firstLaptop.plugIn();

console.log(firstLamp)
console.log(firstLaptop)
