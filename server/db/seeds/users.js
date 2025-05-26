/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    { 
      id: 1,
      auth_id: 'auth0|o46DQ1Ukl1fn988AGwAGolNIi0p73Idq',
      name: 'Bryn'
    }
  ])
}
