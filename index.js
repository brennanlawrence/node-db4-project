const recipes = require("./api/data-model");

recipes
  .getShoppingList(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
