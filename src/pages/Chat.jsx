import ConversationList from '../components/ConversationList'
import MessageBubble from '../components/MessageBubble'

import {
	Camera,
	ChevronLeft,
	Image,
	Info,
	Mic,
	Phone,
	Send,
	Smile,
	Video,
} from 'lucide-react'

const messages = [
	{
		sender: 'them',
		text: "Hey! Are you joining the Nolan marathon in 10 mins?",
		reaction: '💗 2',
	},
	{
		sender: 'me',
		text: "Yes absolutely! Just grabbing snacks. Which stream are we using?",
		status: 'Seen 10:42 PM',
	},
	{
		sender: 'them',
		text: "Great! Room 402 is locked in. Here's the timestamp cue we agreed on.",
		video: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85',
	},
	{
		sender: 'me',
		text: "Awesome, see you in there!",
		status: 'Delivered',
	},
]

function Chat() {
	return (
		<main className="flex h-[calc(100dvh-8.25rem-env(safe-area-inset-bottom))] w-full overflow-hidden bg-[#0b0b0b] md:h-[calc(100dvh-4rem)]">
			<ConversationList />
			<section className="flex min-h-0 min-w-0 flex-1 flex-col">
				<header className="flex h-14 shrink-0 items-center justify-between border-b border-neutral-800 px-4 sm:px-6">
					<div className="flex min-w-0 items-center gap-3">
						<button className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white md:hidden" type="button" aria-label="Back to messages"><ChevronLeft className="h-4 w-4" /></button>
						<div className="relative shrink-0"><img className="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/80?img=49" alt="Sarah Jenkins" /><span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[#0b0b0b] bg-emerald-400" /></div>
						<div className="min-w-0"><h2 className="truncate text-xs font-semibold text-white">Sarah Jenkins</h2><p className="text-[9px] text-emerald-400">Active now · In Watch Room #402</p></div>
					</div>
					<div className="flex items-center gap-1 text-neutral-400">
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Call"><Phone className="h-3.5 w-3.5" /></button>
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Video call"><Video className="h-3.5 w-3.5" /></button>
						<button className="grid h-8 w-8 place-items-center rounded-full hover:bg-neutral-800 hover:text-white" type="button" aria-label="Chat information"><Info className="h-3.5 w-3.5" /></button>
					</div>
				</header>

				<div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-4 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:px-14">
					<div className="flex justify-center"><span className="rounded-full bg-neutral-900 px-3 py-1 text-[9px] font-medium text-neutral-500">TODAY</span></div>
					{messages.map((message, index) => <MessageBubble message={message} key={index} />)}
				</div>
				
				<form className="flex min-h-16 shrink-0 items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-6 md:pb-3" onSubmit={(event) => event.preventDefault()}>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Take photo"><Camera className="h-4 w-4" /></button>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Record voice message"><Mic className="h-4 w-4" /></button>
					<button className="text-neutral-400 hover:text-white" type="button" aria-label="Attach image"><Image className="h-4 w-4" /></button>
					<div className="flex h-9 min-w-0 flex-1 items-center rounded-full bg-neutral-900 px-4"><input className="min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-neutral-400" type="text" placeholder="Message..." /><button className="text-neutral-400 hover:text-white" type="button" aria-label="Add emoji"><Smile className="h-4 w-4" /></button></div>
					<button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-neutral-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3" type="submit" aria-label="Send message"><Send className="h-4 w-4" /></button>
				</form>
			</section>
		</main>
	)
}

export default Chat
