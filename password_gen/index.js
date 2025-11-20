// lets write javascript code 
let copyBtn = document.querySelector('.copy-btn');
let copiedText = document.querySelector('.copied-txt');
let passwordDisplay = document.querySelector('.pass-display');
let passwordLengthDisplay = document.querySelector('.pass-len-value');
let slider = document.querySelector('.slider');
let upperCheckbox = document.querySelector('#inc-upper');
let lowerCheckbox = document.querySelector('#inc-lower');
let numberCheckbox = document.querySelector('#inc-number');
let symbolCheckbox = document.querySelector('#inc-symbol');
let strengthStatus = document.querySelector('.strength-status');
let generatePassBtn = document.querySelector('.generate-pass-btn');
passwordLengthDisplay.textContent = slider.value;
let checkboxChecked = 1;
upperCheckbox.checked = true;

async function copyTextToClipboard(textToCopy) {
    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard successfully!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
} 

function handleCheckboxes(event) {
    if (event.target.checked) checkboxChecked++;
    else checkboxChecked--;
    if (slider.value < checkboxChecked) {
        slider.value = checkboxChecked;
        passwordLengthDisplay.textContent = checkboxChecked;
    }
}
let arr = [upperCheckbox, lowerCheckbox, numberCheckbox, symbolCheckbox];
arr.forEach(checkbox => checkbox.addEventListener('change', handleCheckboxes));

function shufflePass(pass) {
    let arr = pass.split("");
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

function updateStrengthStatus(len, selected) {
    let sclass = strengthStatus.classList;
    let statuses = ['default-status', 'normal-status', 'weak-status', 'strong-status'];
    function updateSClass(status) {
        statuses.forEach(s => {
            if (s != status) sclass.remove(s);
        });
        console.log('here');

        sclass.add(status);
        console.log(sclass);

    }
    // strong -> green 
    if (len >= 8 && selected.length > 2) {
        console.log('here');

        updateSClass('strong-status');
    }
    // mid -> yellow
    else if (len >= 5 && selected.length > 1) {
        updateSClass('normal-status');
    }
    // weak -> red
    else {
        updateSClass('weak-status');
    }
}

function generateRandomPass(len, upper, lower, number, symbol) {
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let symbols = "!@#$%^&*()_";
    let numbers = "0123456789";

    let selected = [];
    if (upper) selected.push("upper");
    if (lower) selected.push("lower");
    if (number) selected.push("number");
    if (symbol) selected.push("symbol");


    let equal = Math.floor(len / selected.length);
    let remaining = len % selected.length;

    let count = { upper: 0, lower: 0, number: 0, symbol: 0 };

    selected.forEach(type => count[type] = equal);
    if (remaining > 0) count[selected[0]] += remaining;

    let password = [];
    function addRandomChars(charset, times) {
        for (let i = 0; i < times; i++) {
            let rind = Math.floor(Math.random() * charset.length);
            password.push(charset[rind]);
        }
    }

    if (upper) addRandomChars(upperChars, count.upper);
    if (lower) addRandomChars(lowerChars, count.lower);
    if (number) addRandomChars(numbers, count.number);
    if (symbol) addRandomChars(symbols, count.symbol);

    // shuffle
    for (let i = password.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }
    updateStrengthStatus(len, selected);
    return password.join("");
}


generatePassBtn.addEventListener('click', (event) => {
    if (checkboxChecked == 0) return;
    let password = generateRandomPass(slider.value, upperCheckbox.checked, lowerCheckbox.checked, numberCheckbox.checked, symbolCheckbox.checked);
    passwordDisplay.setAttribute('placeholder', password);
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.placeholder == 'PASSWORD') return;
    copiedText.style.scale = 1;
    setTimeout(() => {
        copiedText.style.scale = 0;
    }, 1000);
    copyTextToClipboard(passwordDisplay.placeholder);
});


slider.addEventListener('input', (event) => {
    if (event.target.value < checkboxChecked) event.target.value = checkboxChecked;
    passwordLengthDisplay.textContent = event.target.value;
});
