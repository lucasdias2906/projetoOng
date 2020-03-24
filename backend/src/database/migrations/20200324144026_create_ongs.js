
exports.up = function(knex) { // metodo up é a criacao das tabelas
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) { // e se der algum problema
  return knex.schema.dropTable('ongs');
};
