const liElem = document.querySelectorAll('.item')
console.log(`Number of categories: ${liElem.length}`);
liElem.forEach(e => {
    console.log(`Category: ${e.firstElementChild.textContent}`);
    console.log(`Elements: ${e.querySelectorAll('li').length}`);
})