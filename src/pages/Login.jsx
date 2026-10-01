import { useState } from 'react'

function RLogo() {
	return (
		<svg className="h-[68px] w-[68px] fill-current" viewBox="0 0 56 56" aria-hidden="true">
			<path d="M9 8h23.5a13.5 13.5 0 0 1 9.55 23.06L36.3 37.8 48 49H36.4L24.9 37.55 13 49V21.7l8.2 8.2V35l9.55-9.55a5.1 5.1 0 0 0-3.6-8.7H20.5l10.1 10.1-5.8 5.8L10 17.85V8Z" />
			<path d="m28.6 31.1 6.25-6.25 5.8 5.8-6.25 6.25-5.8-5.8Z" />
		</svg>
	)
}

function Login() {
	const isSignUp = window.location.pathname === '/signup'
	const [message, setMessage] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		// setMessage(isSignUp ? 'Account creation is not connected yet.' : 'Sign in is not connected yet.')
		sessionStorage.setItem('watchr-demo-session', 'active')
		const returnTo = sessionStorage.getItem('watchr-redirect-after-login') || '/'
		sessionStorage.removeItem('watchr-redirect-after-login')
		window.location.assign(returnTo.startsWith('/') ? returnTo : '/')
	}

	return (
		<main className="grid min-h-dvh place-items-center bg-[#0A0A0A] px-5 py-12 text-white">
			<div className="w-full max-w-[380px]">
				<header className="mb-10 flex flex-col items-center text-center">
					<RLogo />
					<h1 className="mt-3 text-xl font-extrabold text-white">WatchR</h1>
				</header>

				<form className="space-y-3" onSubmit={handleSubmit}>
					<label className="sr-only" htmlFor="login-identity">Email or username</label>
					<input
						className="h-12 w-full rounded-xl border border-neutral-800 bg-[#111111] px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-neutral-500"
						id="login-identity"
						name="identity"
						autoComplete="username"
						placeholder="Email or username"
						required
					/>
					<label className="sr-only" htmlFor="login-password">Password</label>
					<input
						className="h-12 w-full rounded-xl border border-neutral-800 bg-[#111111] px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-neutral-500"
						id="login-password"
						name="password"
						type="password"
						autoComplete={isSignUp ? 'new-password' : 'current-password'}
						placeholder="Password"
						required
						minLength={8}
					/>
					<button className="h-12 w-full rounded-full bg-white text-sm font-bold text-black transition hover:bg-neutral-200 active:bg-black active:text-white" type="submit">
						{isSignUp ? 'Sign Up' : 'Log In'}
					</button>
				</form>

				{!isSignUp && (
					<div className="mt-5 text-center">
						<button className="text-xs font-medium text-neutral-400 transition hover:text-white" type="button" onClick={() => setMessage('Password recovery is not connected yet.')}>
							Forgot password?
						</button>
					</div>
				)}

				{message && <p className="mt-4 text-center text-xs text-neutral-400" role="status">{message}</p>}

				<p className="mt-10 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-400">
					{isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
					<a className="font-bold text-white underline-offset-4 hover:underline" href={isSignUp ? '/login' : '/signup'}>
						{isSignUp ? 'Log In' : 'Sign Up'}
					</a>
				</p>
			</div>
		</main>
	)
}

export default Login