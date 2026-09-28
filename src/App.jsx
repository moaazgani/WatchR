import Navbar from './components/Navbar'
import Home from './pages/Home'
import Notification from './pages/Notification'
import Search from './pages/Search'
import Chat from './pages/Chat'
import History from './pages/History'
import Room from './pages/Room'
import Footer from './components/Footer'

function App() {
  const currentPath = window.location.pathname
  const isRoomPage = currentPath === '/room' || currentPath.startsWith('/room/')
  const page = isRoomPage ? <Room />
    : currentPath === '/notifications' ? <Notification />
    : currentPath === '/search' ? <Search />
      : currentPath === '/chats' ? <Chat />
        : currentPath === '/history' ? <History /> : <Home />

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 md:pl-18">
      {!isRoomPage && <Navbar />}
      {page}
      {!isRoomPage && <Footer />}
    </div>
  )
}

export default App