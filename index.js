// Write your solution in this file!
const employee = {
    name: "Donaldo",
    streetAddress: '123 FakeLand'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    // Copies passed object into a new object
    const newObject = {...obj};
    
    newObject[key] = value;

    return newObject;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
     obj[key] = value;

     return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};

    delete newObj[key]

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}