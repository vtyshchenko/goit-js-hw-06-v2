const cathegoriesRef = document.querySelector("ul#categories");

const countCarthegories = cathegoriesRef.children.length;
console.log(`Number of categories: ${countCarthegories}\n`);

[...cathegoriesRef.children].forEach((item) => {
  console.log(`Category: ${item.children[0].innerText}`);
  console.log(`Elements: ${item.children[1].children.length}\n`);
});
