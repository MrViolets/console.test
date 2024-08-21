'use strict'

const testObject = {
  a: 10,
  b: {
    c: 20,
    d: 30
  },
  e: 40
};

document.getElementById('testButton').addEventListener('click', function () {
  console.test('Button clicked! This is a test message.');
});

document.getElementById('logOnceButton').addEventListener('click', function () {
  console.logOnce('Button clicked! This is a test message.');
});

function testConsoleWatch() {
  // Start watching specific properties
  console.watch(testObject, ['a', 'b.c', 'e']);

  // Trigger changes
  console.log('Changing testObject.a from 10 to 15...');
  testObject.a = 15;  // Should log: "a changed from 10 to 15"

  console.log('Changing testObject.b.c from 20 to 25...');
  testObject.b.c = 25;  // Should log: "b.c changed from 20 to 25"

  console.log('Changing testObject.e from 40 to 45...');
  testObject.e = 45;  // Should log: "e changed from 40 to 45"
}

testConsoleWatch()

console.cpu('ignore arg', 'ignore arg 2', ["a", "b", "c"])

const peopleArray = [
  { name: "John", age: 20 },
  { name: "Charles", age: 20 },
  { name: "Jane", age: 25 },
  { name: "Emily", age: 25 },
  { name: "Mark", age: 30 }
];

const peopleObject = {
  person1: { name: "John", age: 20 },
  person2: { name: "Charles", age: 20 },
  person3: { name: "Jane", age: 25 },
  person4: { name: "Emily", age: 25 },
  person5: { name: "Mark", age: 30 }
};

// Grouping by age
console.groupBy(peopleArray, 'age');
console.groupBy(peopleObject, 'age');
