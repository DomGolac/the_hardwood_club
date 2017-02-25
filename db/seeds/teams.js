exports.seed = function(knex, Promise) {
  return knex('teams').del()
    .then(function () {
      return Promise.all([
        knex('teams').insert({
                              name: 'Detroit Pistons',
                              logo: '../../public/images/detroit-pistons-wallpaper-free.jpg',
                            }),
      ]);
    });
};
