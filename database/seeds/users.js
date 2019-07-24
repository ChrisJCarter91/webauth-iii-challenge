
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { username: 'bilbo', department: 'shire' },
        { username: 'sam', department: 'shire' },
        { username: 'frodo', department: 'shire' },
        { username: 'legolas', department: 'mirkwood' },
        { username: 'aragorn', department: 'gondor' },
      ]);
    });
};