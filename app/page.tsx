
import Link from 'next/link'
import Login from './components/login'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:items-center lg:justify-between lg:p-24">
      <Link href={"/allBlogs"}>View All blogs</Link>
      <Login/>
    </main>
  )
}
