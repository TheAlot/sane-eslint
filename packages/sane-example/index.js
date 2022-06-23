const { log } = console;
const foo = {
  lol: 3,
  hej,
  other: () => ({ new: 'val' }),
};

function hej(someVal) {
  let jeg, er, dum;

  if (someVal === true) return;
  log('someval was not true');
}

let lol = 2;

log(lol);

// object-shorthand

log(foo);
