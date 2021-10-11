
exports.up = function(knex) {
    return knex.schema.createTable('film', function(table) {
        table.increments('id'); //id
        table.string('brand');
        table.string('name');
        table.integer('iso');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('film');
};