Arrays are one of the most fundamental data structures in JavaScript, and they come with a variety of built-in methods to make handling data easier. To make learning more fun, let's explore JavaScript array methods using a delicious example: making Pani Puri 😋!

Let's Make Pani Puri🫕
Imagine we have an array that represents all the ingredients needed to make Pani Puri🥣:


Copy

Copy
let paniPuri = ['Puri', 'Masala', 'Meetha pani', 'Pudina pani', 'Jeera', 'Garlic', 'Tamarind', 'Hing pani', 'Amchur pani'];
Now, let's apply different JavaScript array methods to this list.

1. Find the Total Number of Ingredients
To determine how many ingredients we have in our paniPuri array, we use the .length property:


Copy

Copy
console.log(paniPuri.length); // Output: 9
2. Find the First Ingredient
Arrays are zero-indexed, meaning the first item is at index 0. Let’s see what is the first item required for a pani puri🔎. We can access it like this:


Copy

Copy
console.log(paniPuri[0]); // Output: 'Puri'
3. Replace an Ingredient
I don't like Garlic water🚫 and want to replace it with Ginger Water😅. We can do this by directly modifying the array:


Copy

Copy
paniPuri[5] = 'Ginger Water';
4. Find the Index of an Ingredient
I love Meetha Pani😍, it is my favorite flavor. Let’s search where it is in the ingredients array🔭, we use .indexOf():


Copy

Copy
console.log(paniPuri.indexOf('Meetha pani')); // Output: 2
5. Add a New Ingredient
What if we want to add Bundi to our Pani Puri? 🤔 We can use .push() to add it to the end of the array:


Copy

Copy
paniPuri.push('Bundi');
6. Remove the Last Ingredient
Too many items are there, let’s remove the last item from our array, we can use .pop():


Copy

Copy
paniPuri.pop();
7. Remove the First Ingredient
To remove the first item from the array, we can use .shift():


Copy

Copy
paniPuri.shift();
8. Add an Ingredient to the Beginning
If we want to add an ingredient to the beginning of the array, we can use .unshift():


Copy

Copy
paniPuri.unshift('Sev');
9. Extract a Portion of the Ingredients
I just want Meetha pani, Pudina pani and Jeera🫡, let’s see how to get that. To extract a portion of the array, we can use .slice():


Copy

Copy
let selectedPaniPuri = paniPuri.slice(2, 5);
console.log(selectedPaniPuri); // Output: ['Meetha pani', 'Pudina pani', 'Jeera']
10. Remove and Replace Ingredients
Let’s remove the pudina pani and jeera with Chaat Masala and Black Salt 🧂. To remove or replace elements at specific positions, we can use .splice():


Copy

Copy
paniPuri.splice(3, 2, 'Chaat Masala', 'Black Salt');//
11. Check if an Ingredient Exists
We can check if an item exists in the array using .includes():


Copy

Copy
console.log(paniPuri.includes('Jeera')); // Output: false
12. Reverse the Order of Ingredients
To reverse the array, we can use .reverse():


Copy

Copy
paniPuri.reverse();
13. Sort the Ingredients Alphabetically
We can sort the ingredients in alphabetical order using .sort():


Copy

Copy
paniPuri.sort();
14. Display All Ingredients
To list all the ingredients in our Pani Puri one by one, we can use .forEach():


Copy

Copy
paniPuri.forEach(item => {
    console.log(item);
});
Conclusion
JavaScript provides several built-in methods to work with arrays efficiently. By using .length, .indexOf(), .push(), .pop(), .shift(), .unshift(), .slice(), .splice(), .includes(), .reverse(), .sort(), and .forEach(), we can easily manipulate and manage arrays. With this fun Pani Puri example, you now have a practical understanding of how to work with JavaScript arrays!

Happy coding (and happy eating)😋!