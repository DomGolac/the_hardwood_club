exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('phone_number');
    }),
    knex.schema.createTable('teams', function (table) {
      table.increments();
      table.string('name');
      table.string('logo');
      table.string('record');
      table.integer('standing');
    }),
    knex.schema.createTable('games', function (table) {
      table.increments();
      table.dateTime('datetime');
      table.string('home_team');
      table.string('away_team');
    }),
    knex.schema.createTable('tickets', function (table) {
      table.increments();
      table.integer('price');
      table.string('section');
      table.string('seat');
      table.string('view');
      table.integer('owner_id').references('id').inTable('users');
    }),
    knex.schema.createTable('index', function (table) {
      table.integer('user_id').references('id').inTable('users');
      table.integer('team_id').references('id').inTable('teams');
      table.integer('game_id').references('id').inTable('games');
      table.integer('ticket_id').references('id').inTable('tickets');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('teams'),
    knex.schema.dropTable('games'),
    knex.schema.dropTable('tickets'),
    knex.schema.dropTable('index')
  ])
};
