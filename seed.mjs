import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { faker } from '@faker-js/faker'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
)

async function seedUsers() {
  for (let i = 0; i < 5; i++) {
    try {
      const { error } = await supabase.auth.admin.createUser({
        email: faker.internet.email(),
        password: 'password',
      })
      
      if (error) {
        throw new Error(error)
      }

      console.log(`User added`)
    } catch (e) {
      console.error(`Error adding user`)
    }
  }
}

async function seed() {
  await seedUsers()  
  const { data: { users }, error: listUsersError } = await supabase.auth.admin.listUsers()
  if (listUsersError) {
    console.error(`Cannot list users, aborting`)
    return
  }
  const userIds = users?.map(user => user.id)
  
}

seed().catch(console.error)