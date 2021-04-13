// Spread Operator

const poor    = ['BAN','BHU','AFS'];
const rich    = [...poor,'USA','UK','GER'];
console.log(rich);
console.log(Object.entries(rich));

// Without Spread Operator

let south = ['Khula','Barisal','Sathkhira'];
let north = ['Bogra','Rangpur','Dinajpur'];

console.log(north.push(south));
