
exports.up = function(knex) {
  return knex.schema.createTable('accounts', tbl => {
      tbl.increments('id');

      tbl.string('name', 255).notNullable().unique().index();
  })

  .createTable('classes', tbl => {
    tbl.increments('id');

    tbl.string('name', 255).notNullable().unique().index();
    })

    .createTable('characters', tbl => {
        tbl.increments('id');
  
        tbl.string('name', 255).notNullable().unique().index();

        tbl.integer('account_id')
        .unsigned()
        .notNullable()
        .references('acounts.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        // tbl.integer('account_id').unsigned().notNullable().references('id').inTable('acounts')
        // is the same thing as line above
        // unsigned means it is an integer that only holds POSITIVE numbers, no negative
        // for the onDelete, the most common options are CASCASE, RESTRICT, SET NULL, SET DEFAULT, DO NOTHING

        tbl
        .integer('class_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('classes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('characters')
    .dropTableIfExists('classes')
    .dropTableIfExists('accounts');
};
