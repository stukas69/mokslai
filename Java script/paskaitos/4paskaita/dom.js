// dom - document object model
// console.log(window);
// console.log(document.body);
// document.body.textContent = 'CodeAcademy2';
// document.body.innerHTML = `<div class="text">
//     <h1>Code</h1>
//     <h2>happy</h2>
// </div>`;
// document.body.textContent = '<h1>CodeAcademy</h1>';

// Selectors
// querySelector
// console.log(document.body.querySelector('h1'));
// queryselector pasirenka pirma tesinga pasitaikiusi elementa
document.body.querySelector('h1').textContent = 'My new text';
// Pasirenka visus atitinkamus elementus
// console.log(document.body.querySelectorAll('h1'));
// const headingTags = document.body.querySelectorAll('h1');
// headingTags[0].textContent = 'My new first text';
// headingTags[1].textContent = 'My new second text';
// console.log(`headingTags`, headingTags[0]);

console.log(document.body.querySelector('.test__queryselector'));

// document.body.querySelector('.test__queryselector').textContent =
// 'Selector with class name';
// Selektorius parenkantis visus elementus turincius test__queryselector klase
// document.body.querySelectorAll('.test__queryselector')

// by id
document.body.querySelector('#test_id').textContent = 'Test by id';
