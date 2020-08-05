const array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
let arrayRemove = [...array];
arrayRemove.shift();
console.log(arrayRemove);

// 2. Sort the array in order.
let arraySort = [...array];
arraySort.sort();
console.log(arraySort);

// 3. Put "Kiwi" at the end of the array.
let arrayAdd = [...array];
arrayAdd.push("Kiwi");
console.log(arrayAdd);

// 4. Remove "Apples" from the array.
let arrayApple = [...array];
arrayApple.splice(1, 1);
console.log(arrayApple);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
let arrayFinal = [...array];
arrayFinal.shift();
arrayFinal.sort();
arrayFinal.push("Kiwi");
arrayFinal.splice(0,1);
arrayFinal.reverse();
console.log(arrayFinal);

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1])
