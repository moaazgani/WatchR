import {
    House,
    Search,
    Bell,
    History as HistoryIcon,
    MessageCircle,
} from 'lucide-react'

const navigationItems = [
    { label: 'Home', href: '/', icon: House, active: true },
    { label: 'Search', href: '/search', icon: Search },
    { label: 'Notifications', href: '/notifications', icon: Bell },
    { label: 'History', href: '/history', icon: HistoryIcon },
    { label: 'Chats', href: '/chats', icon: MessageCircle },
]

function Footer() {
    const currentPath = window.location.pathname

    return (
        <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-800 bg-[#050505]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:inset-y-0 md:left-0 md:right-auto md:w-18 md:border-r md:border-t-0">
            <nav className="mx-auto flex h-17 max-w-xl items-center justify-around px-2 md:h-full md:flex-col md:justify-center md:gap-7 md:px-0" aria-label="Primary navigation">
                {navigationItems.map(({ label, href, icon: Icon }) => {
                    const active = currentPath === href

                    return (
                    <a
                        className={`group relative grid h-12 w-12 place-items-center rounded-full transition hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3 ${
                            active ? 'text-white' : 'text-neutral-500 hover:text-neutral-100'
                        }`}
                        href={href}
                        aria-current={active ? 'page' : undefined}
                        aria-label={label}
                        title={label}
                        key={label}
                    >
                        {active && <span className="absolute -top-1 h-1 w-1 rounded-full bg-white md:-left-4 md:top-1/2 md:-translate-y-1/2" aria-hidden="true" />}
                        <Icon className="h-5.5 w-5.5" strokeWidth={active ? 2.4 : 1.8} fill={active ? 'currentColor' : 'none'} />
                    </a>
                    )
                })}
            </nav>
        </footer>
    )
}

export default Footer