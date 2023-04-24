//create a low-fidelity loading spinner using setTimeout method
let array = ["hello from spinner.js... \rheyyy\n", "\r|", "\r/", "\r-", "\r\\", "\r|\n"];
let counter = 0;
  for (let i = 0; i < array.length; i++) { //for loop to iterate through each array element
    setTimeout(() => {
      process.stdout.write(array[i]); //process.stdout.write is used at the place of console.log to avoid extra "newline character"
      if (array[i] === array[array.length - 1]) { //when loop reaches at the last index of array, then print the array when is present at index 0.
        process.stdout.write(array[0]);
      }
    },counter);
    counter += 100; //increasing the delay time by 100
    
  };



