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

// Local Scope
function getData(){
    let value = 'React JS';
    console.log(value);    
}
getData();


//Global Scope

function getStudent(){    
    let name= 'Mizanur Rahman';    
    console.log(name);    
}
getStudent();    

// Let, Var, Const

let x = 10;
x = 90; // Allow to change new value
console.log(x);

var y = 20;
y = 50; // Allowed to update value
console.log(y);

const z = 30;
z = 40; // Not Allowed to modify
console.log(z);



// For Loop

for(let i=1; i <= 10; i++){    
    console.log( "RAMADAM "+i);
}


// For of Loop

let arr = ['Dhaka','Sylhet','Rajshahi','Chittagong','Khulna','Jassore'];
for(let city of arr){
    console.log(city);
}

// Object for ES 6

const Bank = {
    name   : 'AB Bank',
    branch : 'Dhanmondi',
    code   : 'SWIFT3012',
    phone  : '01916178400',
    type   : 'private',
    central: {
        account : 'Saving',
        FDR     :  'Yes',
        DOP     :  'Yes'
    }
}
console.log(Bank.central);

