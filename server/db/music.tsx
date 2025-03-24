import connection from "./connection";


// CRUD operations

// Create
// Read

export async function getAllSongs() {
  return connection('songs').select('id', 
    'name'
    ''
  )
}
// Update
// Delete