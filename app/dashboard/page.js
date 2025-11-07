import { createClient } from "@/lib/supabase/server"

export default async function Page({ searchParams }) {
  

  const supabase = createClient()
  console.log(await supabase.auth.getUser())

  return (
    <div className="space-y-8">
      <h1>Dashboard</h1>
    </div>
  )
}