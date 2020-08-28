const test = require('tape');
const add = require('./index');

test('adds 2', t => {
  t.plan(3);

  const add2 = add(2);

  t.equal(add2(0), 2);

  t.equal(add2(1), 3);

  t.equal(add2(3), 5);
});

test('adds 3', t => {
  t.plan(1);

  const add3 = add(3);

  t.equal(add3(3), 6);
});
