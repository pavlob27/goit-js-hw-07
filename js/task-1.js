const liItems = document.querySelectorAll('li.item');
console.log("Number of categories: " + liItems.length);
for (const item of liItems) {
    const h2 = item.querySelector('h2');
    const li = item.querySelectorAll('li');
    console.log("Category: " + h2.textContent);
    console.log("Elements: " + li.length)
}