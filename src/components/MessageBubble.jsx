import { Play } from 'lucide-react'

function MessageBubble({ message }) {
	if (message.sender === 'me') {
		return (
			<div className="flex justify-end">
				<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-xs text-black sm:max-w-[58%]">
					{message.text}
					{message.status && <span className="mt-2 block text-right text-[9px] text-neutral-500">{message.status}</span>}
				</div>
			</div>
		)
	}

	return (
		<div className="flex items-end gap-2">
			<img className="h-6 w-6 rounded-full object-cover" src="https://i.pravatar.cc/60?img=49" alt="" />
			<div className={message.video ? 'max-w-[88%] rounded-2xl rounded-bl-sm bg-neutral-900 p-3 sm:max-w-[58%]' : ''}>
				<div className={message.video ? 'mb-3 text-xs text-neutral-200' : 'rounded-2xl rounded-bl-sm bg-neutral-900 px-4 py-3 text-xs text-neutral-200'}>
					{message.text}
				</div>
				{message.video && (
					<div className="relative overflow-hidden rounded-xl border border-neutral-700 bg-black">
						<img className="aspect-video w-full object-cover" src={message.video} alt="Shared watch room preview" />
						<span className="absolute inset-0 grid place-items-center">
							<span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black"><Play className="ml-0.5 h-4 w-4 fill-current" /></span>
						</span>
						<span className="absolute bottom-2 left-2 text-[8px] text-neutral-400">WatchR · Messages</span>
					</div>
				)}
				{message.reaction && <span className="mt-1 inline-block rounded-full bg-neutral-800 px-2 py-0.5 text-[9px] text-neutral-400">{message.reaction}</span>}
			</div>
		</div>
	)
}

export default MessageBubble