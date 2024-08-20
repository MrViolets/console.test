'use strict'

document.getElementById('testButton').addEventListener('click', function () {
  console.test('Button clicked! This is a test message.');
});

document.getElementById('logOnceButton').addEventListener('click', function () {
  console.logOnce('Button clicked! This is a test message.');
});
