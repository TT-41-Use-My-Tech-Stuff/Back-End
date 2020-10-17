
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('email').notNullable().unique();
        tbl.text('username', 128).notNullable().unique()
        tbl.text('password', 128).notNullable()
    })
    .createTable('rent_items', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('item_name', 128)
            .notNullable();
        tbl.string('item_description', 400);
        tbl.string('img_url', 800);
        tbl.string('category', 128);
        tbl.integer('rate');
    }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('rent_items')
    .dropTableIfExists('users')
};
