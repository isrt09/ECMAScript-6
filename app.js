// Spread Operator

const poor    = ['BAN','BHU','AFS'];
const rich    = [...poor,'USA','UK','GER'];
console.log(rich);
console.log(Object.entries(rich));

// Without Spread Operator

let south = ['Khula','Barisal','Sathkhira'];
let north = ['Bogra','Rangpur','Dinajpur'];

console.log(north.push(south));


// Rest Operator
function calculation(a,b,...etc){
    let sum = 0;
    for(let i of etc){
        //sum +=i; 
        sum = sum + i;
    }    
    console.log(sum);
}
calculation(10,20,5,5,5);

// Normal Function
function myName(name){
    return name;
}
console.log(myName('Mazedur Rahman'));

function myVillage(name){
    console.log(name);
}
myVillage('Noakhali');

// Dynamic Function
let city = function myCity(city){
    return city;
}
console.log(city('Dhaka'));

const district = function myDistrict(name){
    console.log(name);
}
district('Dinajpur');

