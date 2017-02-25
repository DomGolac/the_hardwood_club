exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return Promise.all([
        knex('games').insert({
                              datetime: '2016-12-09 08:00:00',
                              home_team: 'Detroit Pistons',
                              away_team: 'Cleveland Cavaliers'
                            }),
      ]);
    });
};
