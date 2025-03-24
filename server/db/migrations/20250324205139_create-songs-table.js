/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
  return knex.schema.createTable('songs', (table)=> {
    table.integer('id').primary()
    table.string('name')
    table.string('year_released')
    table.string('url')
    table.integer('artist_id')
    table.string('artwork')

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('songs')
};
