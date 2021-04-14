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

// Loop in Objects
const GYM = {
    name : 'Bangladesh GYM',
    fees : '1200 BDT',
    type : 'premium',
    time : 'morning'
}

for(let member in GYM){
    console.log(member+":"+GYM[member]);
}


// Functions 

// No Parameter
function add(){
    return 'Please do some calculation';
}
console.log(add());

// With Parameter
function calculation(weight, height){
    return weight/height;
}
let BMI = calculation(85,124);
console.log("Your BMI is "+BMI);

//Rest Parameter
function price(...etc){
    console.log(etc[2,4,5]);
}
price(1,2,1,21,1,31,12,1,1,5)

// Return means receive value whatever it has or not ....

function goOffice(){
    return 'Welcome to my Sweat Home!';
}
function backHome(){
    return goOffice();
}
console.log(backHome());

// Anonymous Function

var myName = function(){
    return 'Welcome to JS';
}
console.log(myName());

// Arrow Function

// use curly braceket and no parameter
let myCountry = ()=>{
    console.log('Welcome to Bangladesh');
}

// no curly bracket
let myVillage = () => console.log('Welcome to Instructory');
myVillage();

// with parameter neeb to be curly bracket to work N.B. multiple parameter no works except curly bracket
let visa = (passport,ticket) => {
    console.log('Passport No :'+passport+'\nTicket No :'+ticket);
}
visa('A2013B23', 'Economy Class EC 2031');

// Arrow with Rest
let river = (river_1,river_2,...others)=>{
    console.log(river_1,river_2);
}
river('Padma','Jamuna','Meghna','Buriganda'); // You will not see all but only 2 

// Arrow with Return

let home = (address)=>{
    return address;
}
console.log(home('Noakhali'));

















































