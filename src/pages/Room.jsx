import RoomHeader from '../components/RoomHeader'
import RoomChat from '../components/RoomChat'
import { useEffect, useRef, useState } from 'react'
import {
	Check,
	Copy,
	LogOut,
	MessageCircle,
	Play,
	RotateCw,
	Send,
	Share2,
	Users,
} from 'lucide-react'

const initialMessages = [
	{ name: 'Maya', text: 'This opening scene still looks incredible.', time: '10:41' },
	{ name: 'Jordan', text: 'The sound design is so good with headphones.', time: '10:42' },
	{ name: 'You', text: 'Agreed, the score really pulls you in.', time: '10:43', own: true },
]

function getYouTubeEmbedUrl(videoUrl) {
	try {
		const url = new URL(videoUrl)
		const videoId = url.hostname.includes('youtu.be')
			? url.pathname.slice(1)
			: url.searchParams.get('v') || url.pathname.match(/\/embed\/([^/]+)/)?.[1]
		return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?controls=1&enablejsapi=1` : null
	} catch {
		return null
	}
}

function Room() {
	const params = new URLSearchParams(window.location.search)
	const roomName = params.get('name') || 'Cyberpunk: Edgerunners'
	const videoName = params.get('title') || 'Shared video'
	const videoUrl = params.get('video') || 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
	const visibility = params.get('visibility') || 'public'
	const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl)
	const [messages, setMessages] = useState(initialMessages)
	const [message, setMessage] = useState('')
	const messageListRef = useRef(null)
	const [isVideoPlaying, setIsVideoPlaying] = useState(false)
	const [shareNotice, setShareNotice] = useState('')
	const [chatWidth, setChatWidth] = useState(420)
	const [isChatVisible, setIsChatVisible] = useState(true)
	const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches)
	const roomLink = window.location.href

	useEffect(() => {
		const desktopQuery = window.matchMedia('(min-width: 1024px)')
		const updateLayout = (event) => setIsDesktop(event.matches)
		desktopQuery.addEventListener('change', updateLayout)
		return () => desktopQuery.removeEventListener('change', updateLayout)
	}, [])

	async function copyRoomLink() {
		try {
			await navigator.clipboard.writeText(roomLink)
			setShareNotice('Room link copied')
		} catch {
			setShareNotice(roomLink)
		}
	}

	async function inviteFriends() {
		if (navigator.share) {
			try {
				await navigator.share({ title: `Join ${roomName} on WatchR`, url: roomLink })
			} catch (error) {
				if (error.name !== 'AbortError') await copyRoomLink()
			}
		} else {
			await copyRoomLink()
		}
	}

	function sendMessage(event) {
		event.preventDefault()
		const text = message.trim()
		if (!text) return
		setMessages((current) => [...current, { name: 'You', text, time: 'Now', own: true }])
		setMessage('')
	}

	useEffect(() => {
		const messageList = messageListRef.current
		if (messageList) messageList.scrollTop = messageList.scrollHeight
	}, [messages])

	function resizeChat(event) {
		if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
		const container = event.currentTarget.parentElement
		if (!container) return
		const bounds = container.getBoundingClientRect()
		const maximumWidth = Math.min(620, bounds.width * 0.55)
		setChatWidth(Math.max(240, Math.min(maximumWidth, event.clientX - bounds.left)))
	}

	function adjustChatWidth(amount) {
		const container = document.querySelector('[data-room-split]')
		const maximumWidth = container ? Math.min(620, container.clientWidth * 0.55) : 620
		setChatWidth((width) => Math.max(240, Math.min(maximumWidth, width + amount)))
	}

	return (
		<main className="flex h-dvh w-full flex-col overflow-hidden bg-[#0b0b0b] lg:h-auto lg:min-h-dvh lg:overflow-visible">
			<RoomHeader
				roomName={roomName}
				visibility={visibility}
				shareNotice={shareNotice}
				isChatVisible={isChatVisible}
				setIsChatVisible={setIsChatVisible}
				copyRoomLink={copyRoomLink}
				inviteFriends={inviteFriends}
			/>

			<div
				data-room-split
				className="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden lg:overflow-visible"
				style={{
					gridTemplateColumns: isDesktop && isChatVisible ? `${chatWidth}px 6px minmax(0, 1fr)` : 'minmax(0, 1fr)',
					gridTemplateRows: isDesktop ? 'minmax(0, 1fr)' : 'auto minmax(0, 1fr)',
				}}
			>
				<section
					className="flex min-h-0 min-w-0 flex-col overflow-hidden px-0 pt-0 lg:overflow-visible"
					style={{ gridColumn: isDesktop && isChatVisible ? '3' : '1 / -1', gridRow: '1' }}
				>
					<div className="relative mx-auto aspect-video w-full shrink-0 overflow-hidden bg-black">
						{youtubeEmbedUrl ? (
							<iframe className="h-full w-full bg-black" src={youtubeEmbedUrl} title={`${roomName} shared video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
						) : (
							<video
								className="h-full w-full cursor-pointer bg-black object-contain"
								controls
								playsInline
								poster="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=85"
								onClick={(event) => {
									const player = event.currentTarget
									if (player.paused) void player.play()
									else player.pause()
								}}
								onPlay={() => setIsVideoPlaying(true)}
								onPause={() => setIsVideoPlaying(false)}
							>
								<source src={videoUrl} />
								Your browser does not support this video URL.
							</video>
						)}
						{!youtubeEmbedUrl && !isVideoPlaying && (
							<button
								className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-black shadow-lg transition hover:scale-105 hover:bg-white"
								type="button"
								aria-label="Play video"
								onClick={(event) => {
									event.stopPropagation()
									const player = event.currentTarget.parentElement.querySelector('video')
									if (player) void player.play()
								}}
							>
								<Play className="ml-1 h-6 w-6 fill-current" />
							</button>
						)}
						<div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-black/80 px-2.5 py-1 text-[9px] font-semibold text-white"><span className="h-1.5 w-1.5 rounded-full bg-white" />IN SYNC WITH ROOM · 0ms drift</span>
							<span className="hidden rounded-full border border-neutral-700 bg-black/80 px-2.5 py-1 text-[9px] text-neutral-300 sm:inline-flex">Shared video</span>
						</div>
						<button className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/80 px-2.5 py-1.5 text-[9px] font-medium text-white transition hover:bg-neutral-800" type="button" onClick={() => setShareNotice('Playback synced to host')}><RotateCw className="h-3 w-3" />Resync now</button>
					</div>
				</section>

				{isDesktop && isChatVisible && <div
					className="group z-10 hidden cursor-col-resize touch-none items-center justify-center bg-neutral-900 transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-white lg:col-start-2 lg:row-start-1 lg:flex"
					role="separator"
					aria-label="Resize chat and video panels"
					aria-orientation="vertical"
					aria-valuemin={240}
					aria-valuemax={620}
					aria-valuenow={Math.round(chatWidth)}
					tabIndex={0}
					style={{ display: 'flex', gridColumn: '2', gridRow: '1' }}
					onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
					onPointerMove={resizeChat}
					onKeyDown={(event) => {
						if (event.key === 'ArrowLeft') {
							event.preventDefault()
							adjustChatWidth(-24)
						}
						if (event.key === 'ArrowRight') {
							event.preventDefault()
							adjustChatWidth(24)
						}
					}}
				>
					<span className="h-10 w-1 rounded-full bg-neutral-700 transition-colors group-hover:bg-neutral-400" />
				</div>}

				<aside id="live-room-chat" className="flex min-h-0 flex-col overflow-hidden border-t border-neutral-800 bg-[#090909] lg:h-[calc(100dvh-2.75rem)] lg:border-r lg:border-t-0" style={{ display: isDesktop && !isChatVisible ? 'none' : 'flex', gridColumn: '1', gridRow: isDesktop ? '1' : '2' }}>
					<div ref={messageListRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-3 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-live="polite">
						<div className="mb-2 px-1">
							<h2 className="truncate text-base font-bold text-white">{roomName}</h2>
							<p className="mt-0.5 truncate text-xs text-neutral-400">{videoName}</p>
						</div>
						{messages.map((chatMessage, index) => (
							<RoomChat chatMessage={chatMessage} key={`${chatMessage.name}-${index}`} />
						))}
					</div>
					<div className="shrink-0 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2.5 lg:pb-2.5">
						<div className="mb-2 flex items-center gap-2 text-[9px] text-neutral-500"><span>React:</span>{['👏', '❤️', '😮', '😂', '👋'].map((emoji) => <button className="rounded px-1 transition hover:bg-neutral-800" type="button" key={emoji} aria-label={`React ${emoji}`}>{emoji}</button>)}</div>
						<form className="flex items-center gap-2" onSubmit={sendMessage}>
							<input className="h-9 min-w-0 flex-1 rounded-full bg-neutral-900 px-3 text-[10px] text-white outline-none placeholder:text-neutral-500 focus:bg-neutral-800" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Say something in party..." aria-label="Message the room" />
							<button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-black transition hover:bg-neutral-200 disabled:opacity-40" type="submit" aria-label="Send chat message" disabled={!message.trim()}><Send className="h-3.5 w-3.5" /></button>
						</form>
					</div>
				</aside>
			</div>
		</main>
	)
}

export default Room