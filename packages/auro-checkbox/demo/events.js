/* eslint-disable arrow-parens */
/* eslint-disable newline-after-var */
/* eslint-disable one-var */
/* eslint-disable id-length */
/* eslint-disable sort-vars */
/* eslint-disable no-console */
console.log('Loaded events.js');
const odsHandler = (e) => console.log(`auro ${e.type}: ${e.target.id} ${e.target.checked}`),
 checkboxHandler = (e) => console.log(`chx ${e.type}: ${e.target.id} ${e.target.checked}`),
 radioHandler = (e) => console.log(`rdo ${e.type}: ${e.target.id} ${e.target.checked}`);

const odsCheckboxes = document.querySelectorAll('auro-checkbox');
odsCheckboxes.forEach(ods => ods.addEventListener('toggleEvent', odsHandler));
odsCheckboxes.forEach(ods => ods.addEventListener('change', odsHandler));
odsCheckboxes.forEach(ods => ods.addEventListener('input', odsHandler));

const defaultCheckboxes = document.querySelectorAll('input[type="checkbox"]');
defaultCheckboxes.forEach(checkbox => checkbox.addEventListener('change', checkboxHandler));
defaultCheckboxes.forEach(checkbox => checkbox.addEventListener('input', checkboxHandler));

const defaultradio = document.querySelectorAll('input[type="radio"]');
defaultradio.forEach(radio => radio.addEventListener('change', radioHandler));
defaultradio.forEach(radio => radio.addEventListener('input', radioHandler));