console.log('-- load & test choices --');
debugger; // step through loading & testing

// first argument is any string
// second argument is what to do to that string
function choices(str, option) {

  if (str === '') {
    return 'invalid option';
  }
  else if (!['slim', 'big', 'small'].includes(option)) {
    return 'invalid option';
  }
  else if (option === 'big') {
    return str.toUpperCase();
  }
  else if (option === 'small') {
    return str.toLowerCase();
  }
  else if (option === 'slim') {
    return str.trim();
  }
}

// declare and evaluate test cases for choices
const choicesTests = [
  // option 1
  { name: 'Test 1', args: ['aAa', 'big'], expected: 'AAA' },
  { name: 'Test 2', args: ['...', 'big'], expected: '...' },
  // option 2
  { name: 'Test 3', args: ['AaA', 'small'], expected: 'aaa' },
  { name: 'Test 4', args: [' B.a', 'small'], expected: ' b.a' },
  // option 3
  { name: 'Test 5', args: [' B.a ', 'slim'], expected: 'B.a' },
  { name: 'Test 6', args: ['  aaa ', 'slim'], expected: 'aaa' },
  { name: 'Test 7', args: ['f', 'slim'], expected: 'f' },
  // option 4
  { name: 'Test 8', args: ['', 0], expected: 'invalid option' },
  { name: 'Test 9', args: ['1.2.3', 'hi!'], expected: 'invalid option' },
  { name: 'Test 10', args: ['mixed string', 'Slim'], expected: 'invalid option' },
];
for (let test of choicesTests) {
  const expected = test.expected;
  const actual = choices(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(choicesTests);


// declare handler
function choicesHandler() {
  debugger; // step through user actions

  // read & process user input
  const userText = prompt('enter some text');
  const option = prompt('enter action big or small or slim ?');
  // execute core logic
  const result = choices(userText, option.trim());
  // display result to user
  alert(result);
  // log action for developer
  console.log('\n-- choices --');
  // user inputs
  // result
}

// attach handler to choices button with an event listener
document.getElementById('choices-button').addEventListener('click', choicesHandler);




/* looking for a hint?
  each option can be solved in one line
*/