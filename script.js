"use strict"
// Grabbing dom elements
const pxInput = document.querySelector('#px-input');
const remInput = document.querySelector('#rem-input');


// Converting functions
const pxOutput = remInput => remInput * 16;
const remOutput = pxInput => pxInput / 16;

// EventListeners will trigger function that changes the value of the inputs.
pxInput.addEventListener('input', (e) => {
    const pxValue = e.target.value;
    return remInput.value = remOutput(pxValue);
});

remInput.addEventListener('input', (e) => {
    const remValue = e.target.value;
    return pxInput.value = pxOutput(remValue);
});