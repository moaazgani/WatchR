import Navbar from './components/Navbar'
import Home from './pages/Home'
import Notification from './pages/Notification'
import Search from './pages/Search'
import Chat from './pages/Chat'
import History from './pages/History'
import Room from './pages/Room'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
  const currentPath = window.location.pathname
  const isRoomPage = currentPath === '/room' || currentPath.startsWith('/room/')
  const isAuthPage = currentPath === '/login' || currentPath === '/signup'
  const isAuthenticated = sessionStorage.getItem('watchr-demo-session') === 'active'

  if (!isAuthPage && !isAuthenticated) {
    sessionStorage.setItem('watchr-redirect-after-login', `${currentPath}${window.location.search}`)
    window.location.replace('/login')
    return null
  }

  if (isAuthPage && isAuthenticated) {
    window.location.replace('/')
    return null
  }

  if (isAuthPage) return <Login />

  const page = isRoomPage ? <Room />
    : currentPath === '/notifications' ? <Notification />
    : currentPath === '/search' ? <Search />
      : currentPath === '/chats' ? <Chat />
          : currentPath === '/history' ? <History />
            : currentPath === '/profile' ? <Profile /> : <Home />

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 md:pl-18">
      {!isRoomPage && <Navbar />}
      {page}
      {!isRoomPage && <Footer />}
    </div>
  )
}

export default App