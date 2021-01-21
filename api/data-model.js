const db = require("../data/db-config");
module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  //SELECT recipe_name AS "recipe" FROM recipes;
  return db("recipes").select("recipe_name as recipe");
}

function getShoppingList(id) {
  /*
  SELECT
    i.ingredient_name,
    SUM(ingredient_amount) AS "amount"
  FROM
      recipes_steps
  JOIN ingredients AS i ON ingredient_id = i.id
  WHERE recipe_id = 2
  GROUP BY
      i.ingredient_name;
  */
  return db("recipes_steps")
    .join("ingredients as i", "ingredient_id", "=", "i.id")
    .select("i.ingredient_name")
    .sum("ingredient_amount as amount")
    .where("recipe_id", id)
    .groupBy("i.ingredient_name");
}

function getInstructions(id) {
  /*
  SELECT rs.step, rs.instruction, i.ingredient_name, ingredient_amount, r.recipe_name 
FROM recipes_steps AS rs 
JOIN ingredients AS i ON ingredient_id = i.id
JOIN recipes AS r ON recipe_id = r.id
WHERE recipe_id = 1;
*/
  return db("recipes_steps as rs")
    .leftJoin("ingredients as i", "rs.ingredient_id", "=", "i.id")
    .leftJoin("recipes as r", "rs.recipe_id", "=", "r.id")
    .select(
      "rs.step",
      "rs.instruction",
      "i.ingredient_name",
      "rs.ingredient_amount",
      "r.recipe_name"
    )
    .where("rs.recipe_id", id);
}
