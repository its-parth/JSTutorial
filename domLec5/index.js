let plus = document.getElementById('plus-btn');
let cval = document.getElementById('counter-val');
let minus = document.getElementById('minus-btn');

var val = 0;

cval.textContent = val;

function updateCounterVal() {
    cval.textContent = val;
}

plus.addEventListener('click', (event) => {
    val++;
    updateCounterVal();
});

// minus.addEventListener('click', (event) => {
//     if(val == 0) {
//         alert('value is already zeros we can\'t go in negative');
//         return;
//     }
//     val--;
//     updateCounterVal();
// });

function decrement() {
    val--;
    cval.textContent = val;
}