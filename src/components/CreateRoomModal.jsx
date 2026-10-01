import { useState } from 'react'
import { X } from 'lucide-react'

function CreateRoomModal({ onClose }) {
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
		<div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={onClose}>
			<section className="w-full max-w-md rounded-2xl border border-neutral-800 bg-[#111] p-5 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="create-room-title" onClick={(event) => event.stopPropagation()}>
				<div className="mb-6 flex items-start justify-between">
					<div><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">Watch together</p><h2 id="create-room-title" className="mt-1 text-xl font-bold text-white">Create a room</h2></div>
					<button className="grid h-8 w-8 place-items-center rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white" type="button" aria-label="Close dialog" onClick={onClose}><X className="h-4 w-4" /></button>
				</div>
				<form className="space-y-5" onSubmit={createRoom}>
					<label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Room name</span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="text" value={roomName} onChange={(event) => setRoomName(event.target.value)} placeholder="Give your room a name" required /></label>
					<label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Video title <span className="text-neutral-500">(optional)</span></span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="text" value={videoName} onChange={(event) => setVideoName(event.target.value)} placeholder="Name of the video you’ll watch" /></label>
					<label className="block"><span className="mb-2 block text-xs font-medium text-neutral-300">Video URL</span><input className="h-11 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-neutral-500" type="url" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} placeholder="Paste a video link" required /></label>
					<div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-3.5 py-3">
						<div><p className="text-xs font-medium text-white">{isPublic ? 'Public room' : 'Private room'}</p><p className="mt-1 text-[10px] text-neutral-500">{isPublic ? 'Anyone can discover and join' : 'Only invited people can join'}</p></div>
						<button className={`relative h-6 w-11 rounded-full transition-colors ${isPublic ? 'bg-white' : 'bg-neutral-700'}`} type="button" role="switch" aria-checked={isPublic} aria-label="Make room public" onClick={() => setIsPublic((value) => !value)}><span className={`absolute top-1 h-4 w-4 rounded-full transition-all ${isPublic ? 'left-6 bg-black' : 'left-1 bg-white'}`} /></button>
					</div>
					<div className="flex justify-end gap-2 pt-1"><button className="rounded-full px-4 py-2.5 text-xs font-medium text-neutral-300 hover:bg-neutral-900" type="button" onClick={onClose}>Cancel</button><button className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200" type="submit">Create room</button></div>
				</form>
			</section>
		</div>
	)
}

export default CreateRoomModal