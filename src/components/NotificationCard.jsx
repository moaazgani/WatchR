function NotificationCard({ notification }) {
	const Icon = notification.icon

	return (
		<article className="flex flex-col gap-4 rounded-xl border border-neutral-900 bg-neutral-900/70 px-4 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-5">
			<span className="hidden h-2 w-2 shrink-0 rounded-full bg-white sm:block" aria-hidden="true" />
			<div className="flex min-w-0 flex-1 items-start gap-3">
				<div className="relative shrink-0">
					{notification.image ? (
						<img className="h-9 w-9 rounded-full object-cover grayscale" src={notification.image} alt="" />
					) : (
						<span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700 bg-neutral-950 text-neutral-300">
							<Icon className="h-4 w-4" />
						</span>
					)}
					<span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full border border-neutral-900 bg-black text-neutral-300">
						<Icon className="h-2.5 w-2.5" />
					</span>
				</div>
				<div className="min-w-0 text-xs leading-relaxed text-neutral-300 sm:text-[13px]">
					<p><strong className="font-bold text-white">{notification.name}</strong> {notification.text}</p>
					<p className="mt-1 text-neutral-500">{notification.time}</p>
				</div>
			</div>
			<div className="flex shrink-0 items-center justify-end gap-2 sm:ml-auto">
				{notification.actions.map((action, index) => (
					<button
						className={`rounded-full px-3.5 py-2 text-xs font-medium transition sm:px-4 ${index === notification.actions.length - 1 && action !== 'Room Closed' ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-neutral-300 hover:bg-neutral-800'} ${action === 'Room Closed' ? 'cursor-default bg-transparent text-neutral-500' : ''}`}
						type="button"
						key={action}
					>
						{action}
					</button>
				))}
			</div>
		</article>
	)
}

export default NotificationCard