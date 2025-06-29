/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('pokemons', (table) => {
    table.uuid('code').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable().unique();
    table.jsonb('types').notNullable();
    table.jsonb('attacks').notNullable();
    table.decimal('height', 4, 2).notNullable();
    table.decimal('weight', 5, 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('pokemons')
};
