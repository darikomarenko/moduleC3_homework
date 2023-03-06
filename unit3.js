//task 1

function myObject(object){
    for(let prop in object){
        if (object.hasOwnProperty(prop)){
            console.log(prop,object[prop]);
        }    

    }
}

//task 2

function checkPropinObject(string, object){
    return(string in object)
}

//task 3

let emptyObject = () => Object.create(null);
console.log(emptyObject.toString);
