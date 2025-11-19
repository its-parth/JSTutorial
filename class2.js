let rect = {
    length: 4,
    breadth: 3,
};

// for(let key in rect) {
//     console.log(key);
// }

let arr = [1, 2, 3, 4, 5];

for(let value of arr) {
    console.log(value);
}

for(let key of Object.keys(rect)) {
    console.log(key);
}

// exploring the constructors
function Rectangle(l, b) {
    this.length = l;
    this.breadth = b;
}

let r1 = new Rectangle(4, 2);
console.log(r1);