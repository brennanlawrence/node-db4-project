
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_steps').insert([
        {step: 1, instruction: "Put chocolate in a bowl", ingredient_id: 1, ingredient_amount: 90, recipe_id: 1},
        {step: 2, instruction: "Put bowl of chocolate in microwave for 2 min", recipe_id: 1   },
        {step: 3, instruction: "Add salt", ingredient_id: 3, ingredient_amount: 16, recipe_id: 1   },
        {step: 4, instruction: "Drink the molten chocolate", recipe_id: 1   },
        {step: 1, instruction: "Put milk in a pan", ingredient_id: 2, ingredient_amount: 12, recipe_id: 2},
        {step: 2, instruction: "Turn on stove and heat milk up to 175 degrees F", recipe_id: 2   },
        {step: 3, instruction: "Add salt", ingredient_id: 3, ingredient_amount: 2, recipe_id: 2   },
        {step: 4, instruction: "Transfer milk to a jug and place in fridge to chill for 13 hours", recipe_id: 2   },
        {step: 5, instruction: "Enjoy your cold milk", recipe_id: 2   }
      ]);
    });
};
