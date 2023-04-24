process.stdout.write('hello from spinner.js... \rheyyy\n');
// output will be heyyy from spinner1.js..., because here first few characters are replaced by heyyy
setTimeout(() => {
  process.stdout.write('\r|    ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  //Need to escape the backslash since its a special character.
  process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|\n');
}, 900);

setTimeout(() => {
  process.stdout.write('hello from spinner.js... \rheyyy\n');
}, 1100);


