exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
                              first_name: 'Frank',
                              last_name: 'Rickard',
                              email: 'frankrickard@gmail.com',
                              phone_number: '555-555-5555'
                            }),
      ]);
    });
};
