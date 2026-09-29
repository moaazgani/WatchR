import { Copy, LogOut, MessageCircle, Users } from 'lucide-react'

function RoomHeader({ roomName, visibility, shareNotice, isChatVisible, setIsChatVisible, copyRoomLink, inviteFriends }) {
	return (
		<header className="sticky top-0 z-30 flex min-h-11 shrink-0 items-center justify-between gap-3 border-b border-neutral-800 bg-[#0b0b0b]/95 px-4 backdrop-blur sm:px-6">
			<div className="flex min-w-0 items-center gap-2 text-[11px]">
				<a className="shrink-0 text-neutral-500 no-underline hover:text-white" href="/">Live Parties</a>
				<span className="text-neutral-700">/</span>
				<h1 className="truncate font-semibold text-neutral-100">{roomName}</h1>
				{visibility === 'private' && <span className="shrink-0 rounded-full border border-neutral-700 px-2 py-0.5 text-[9px] text-neutral-400">Private</span>}
				<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" title="Room is active" />
			</div>
			<div className="flex shrink-0 items-center gap-2">
				<span className="hidden items-center gap-1.5 rounded-full border border-neutral-800 px-2.5 py-1 text-[9px] text-neutral-300 sm:inline-flex"><span className="h-1.5 w-1.5 rounded-full bg-white" />Synced to host <span className="text-neutral-500">(18ms)</span></span>
				<button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-800 px-2.5 text-[10px] text-neutral-300 transition hover:bg-neutral-900 hover:text-white" type="button" aria-label="Copy room link" title="Copy room link" onClick={copyRoomLink}><Copy className="h-3.5 w-3.5" /><span className="hidden sm:inline">{shareNotice === 'Room link copied' ? 'Copied' : 'Copy link'}</span></button>
				<button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-800 px-2.5 text-[10px] text-neutral-300 transition hover:bg-neutral-900 hover:text-white" type="button" onClick={inviteFriends}><Users className="h-3.5 w-3.5" /><span className="hidden sm:inline">Invite</span></button>
				<button className="hidden h-8 items-center gap-1.5 rounded-full border border-neutral-800 px-2.5 text-[10px] text-neutral-300 transition hover:bg-neutral-900 hover:text-white lg:inline-flex" type="button" aria-expanded={isChatVisible} aria-controls="live-room-chat" onClick={() => setIsChatVisible((visible) => !visible)}><MessageCircle className="h-3.5 w-3.5" />{isChatVisible ? 'Hide chat' : 'Show chat'}</button>
				<a className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-800 px-2.5 text-[10px] text-neutral-300 no-underline transition hover:border-neutral-600 hover:bg-neutral-900 hover:text-white" href="/" aria-label="Leave room" title="Leave room"><LogOut className="h-3.5 w-3.5" /><span className="hidden sm:inline">Leave</span></a>
				<img className="h-7 w-7 rounded-full border border-neutral-700 object-cover" src="https://i.pravatar.cc/56?img=12" alt="Your profile" />
			</div>
		</header>
	)
}

export default RoomHeader