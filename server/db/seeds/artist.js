/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('artist').del()
  await knex('artist').insert([
    {id: 1, name: 'TOI', country: 'Aotearoa'},
    {id: 2, name: 'The Beatles', country: 'England'},
    {id: 3, name: 'Bala Desejo', country: 'Brazil'}
  ]);
};
