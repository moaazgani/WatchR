import { useState } from 'react'
import { X } from 'lucide-react'

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
    const [roomName, setRoomName] = useState('')
    const [videoName, setVideoName] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [isPublic, setIsPublic] = useState(true)

    function createRoom(event) {
        event.preventDefault()
        const roomId = Date.now().toString(36)
        const params = new URLSearchParams({
            name: roomName.trim(),
            title: videoName.trim(),
            video: videoUrl.trim(),
            visibility: isPublic ? 'public' : 'private',
        })
        window.location.assign(`/room/${roomId}?${params.toString()}`)
    }

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
                    <button className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-900 p-0.5" type="button" aria-label="Open profile">
                        <img className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/96?img=12" alt="User profile" />
                    </button>
                </div>
            </header>

            {isCreateRoomOpen && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={() => setIsCreateRoomOpen(false)}>
                    <section className="w-full max-w-md rounded-2xl border border-neutral-800 bg-[#111] p-5 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="create-room-title" onClick={(event) => event.stopPropagation()}>
                        <div className="mb-6 flex items-start justify-between">
                            <div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">Watch together</p><h2 id="create-room-title" className="mt-1 text-xl font-bold text-white">Create a room</h2></div>
                            <button className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white" type="button" aria-label="Close dialog" onClick={() => setIsCreateRoomOpen(false)}><X className="h-4 w-4" /></button>
                        </div>
                        <form className="space-y-5" onSubmit={createRoom}>
                            <label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Room name</span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="text" value={roomName} onChange={(event) => setRoomName(event.target.value)} placeholder="Give your room a name" required /></label>
                            <label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Video title <span className="text-neutral-500">(optional)</span></span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="text" value={videoName} onChange={(event) => setVideoName(event.target.value)} placeholder="Name of the video you’ll watch" /></label>
                            <label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Video URL</span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="url" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} placeholder="Paste a video link" required /></label>
                            <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-3">
                                <div><p className="text-xs font-medium text-white">{isPublic ? 'Public room' : 'Private room'}</p><p className="mt-1 text-[10px] text-neutral-500">{isPublic ? 'Anyone can discover and join' : 'Only invited people can join'}</p></div>
                                <button className={`relative h-6 w-11 rounded-full transition-colors ${isPublic ? 'bg-white' : 'bg-neutral-700'}`} type="button" role="switch" aria-checked={isPublic} aria-label="Make room public" onClick={() => setIsPublic((value) => !value)}><span className={`absolute top-1 h-4 w-4 rounded-full transition-all ${isPublic ? 'left-6 bg-black' : 'left-1 bg-white'}`} /></button>
                            </div>
                            <div className="flex justify-end gap-2 pt-1"><button className="rounded-full px-4 py-2.5 text-xs font-medium text-neutral-300 hover:bg-neutral-900" type="button" onClick={() => setIsCreateRoomOpen(false)}>Cancel</button><button className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200" type="submit">Create room</button></div>
                        </form>
                    </section>
                </div>
            )}
        </>
    )
}

export default Navbar