function RoomChat({ chatMessage }) {
	return (
		<div className={`flex gap-2 ${chatMessage.own ? 'flex-row-reverse' : ''}`}>
			<img className="mt-0.5 h-6 w-6 shrink-0 rounded-lg border border-neutral-800 object-cover" src={`https://i.pravatar.cc/48?u=${chatMessage.name}`} alt="" />
			<div className={`min-w-0 max-w-[88%] ${chatMessage.own ? 'text-right' : ''}`}>
				<div className={`mb-1 flex items-center gap-2 text-[9px] text-neutral-600 ${chatMessage.own ? 'justify-end' : ''}`}>
					<span className="font-semibold text-neutral-300">@{chatMessage.name.toLowerCase()}</span>
					<time>{chatMessage.time}</time>
				</div>
				<p className={`text-[10px] leading-relaxed ${chatMessage.own ? 'inline-block rounded-lg bg-neutral-800 px-2.5 py-2 text-left text-white' : 'text-neutral-300'}`}>{chatMessage.text}</p>
			</div>
		</div>
	)
}

export default RoomChat