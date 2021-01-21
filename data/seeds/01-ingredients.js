exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'one lb chocolate'},
        {ingredient_name: 'one cup milk'},
        {ingredient_name: 'one tb salt'}
      ]);
    });
};
