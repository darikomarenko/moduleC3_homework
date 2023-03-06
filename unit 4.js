//task4

function ElectricalAppliances(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliances.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;

};

ElectricalAppliances.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

function Lamp(name, power, colour, type){
    this.name = name;
    this.power = power;
    this.colour = colour;
    this.type = type;
    this.isPlugged = true;
}

Lamp.prototype = new ElectricalAppliances();

function Laptop(name, processor, colour, screen){
    this.name = name;
    this.processor = processor;
    this.colour = colour;
    this.screen = screen;
    this.isPlugged = false;

}

Laptop.prototype = new ElectricalAppliances();

const firstLamp = new Lamp("Lumus", "50w", "red", "table lamp");

const firstLaptop = new Laptop("MacBookAir", "Intel6", "gray", "19inches");

firstLamp.unplug();
firstLaptop.plugIn();

console.log(firstLamp)
console.log(firstLaptop)
