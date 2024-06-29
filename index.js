const sampleData = ['a', 'b', 'c'];

const mySet = new Set(sampleData);

// Check size of the set (amount/count of items)
console.log(mySet.size);

// Add an item to the set (which is not a duplicated one)
mySet.add('a'); // Nothing happens here since a already is in the set
mySet.add('d');

// Remove an item from the set
mySet.delete('a');

// Check if item exists
console.log('a', mySet.has('a'));
console.log('b', mySet.has('b'));

// Show set content
console.log(mySet);

const duplicatedSampleData = [1, 2, 3, 3, 2, 1, 'a', 'b', 'c', 'a', true, true, false, null, null, undefined];
const uniqueValuesArray = Array.from(new Set(duplicatedSampleData));

console.log('duplicatedSampleData', duplicatedSampleData);
console.log('uniqueValuesArray', uniqueValuesArray);