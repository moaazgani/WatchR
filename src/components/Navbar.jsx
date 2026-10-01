import { useState } from 'react'
import CreateRoomModal from './CreateRoomModal'

function RLogo() {
    return (
        <svg className="block h-8 w-8 fill-current" viewBox="0 0 56 56" aria-hidden="true">
            <path d="M9 8h23.5a13.5 13.5 0 0 1 9.55 23.06L36.3 37.8 48 49H36.4L24.9 37.55 13 49V21.7l8.2 8.2V35l9.55-9.55a5.1 5.1 0 0 0-3.6-8.7H20.5l10.1 10.1-5.8 5.8L10 17.85V8Z" />
            <path d="m28.6 31.1 6.25-6.25 5.8 5.8-6.25 6.25-5.8-5.8Z" />
        </svg>
    )
}

function Navbar() {
    const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false)
    
    return (
        <>
            <header className="flex h-16 w-full items-center justify-between border-b border-neutral-800 px-[22px] max-[480px]:h-[60px] max-[480px]:px-4">
                <a className="inline-flex items-center gap-2.5 text-[17px] font-bold tracking-[0.01em] text-neutral-100 no-underline" href="/" aria-label="WatchR home">
                    <RLogo />
                    <span className="max-[480px]:hidden">WatchR</span>
                </a>
                <div className="flex items-center gap-3">
                    <button className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white text-3xl font-light leading-none text-black transition hover:scale-[1.05] hover:bg-neutral-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3 md:flex md:h-10 md:w-auto md:items-center md:gap-2 md:px-4 md:text-sm md:font-semibold" type="button" aria-label="Host a room" onClick={() => setIsCreateRoomOpen(true)}>
                        <svg className="h-6 w-6 md:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                        <span className="hidden md:inline">Create room</span>
                    </button>
                    <a className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-900 p-0.5" href="/profile" aria-label="Open profile" aria-current={window.location.pathname === '/profile' ? 'page' : undefined}>
                        <img className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/96?img=12" alt="User profile" />
                    </a>
                </div>
            </header>

            {isCreateRoomOpen && <CreateRoomModal onClose={() => setIsCreateRoomOpen(false)} />}
        </>
    )
}

export default Navbar