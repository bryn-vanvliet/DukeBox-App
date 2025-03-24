/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {
      id: 1,
      name: 'Thinking Too Much',
      artist_id: 1,
      year_released: 2020,
      url: '',
      artwork: '',
    },
    {
      id: 2,
      name: 'The Long and Winding Road',
      artist_id: 2,
      year_released: '1970',
      url: '',
      artwork: '',
    },
    {
      id: 3,
      name: 'Baile De Máscaras',
      artist_id: 3,
      year_released: '2022',
      url: '',
      artwork: '',
    },
  ])
}
