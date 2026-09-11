import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import SiteBackground from './SiteBackground'

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-transparent text-tv-ink">
      <SiteBackground />
      <div className="relative z-10 min-w-0">
        <Navbar />
        <main className="min-w-0 pt-[76px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
