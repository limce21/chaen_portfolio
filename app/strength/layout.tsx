export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='flex min-h-screen flex-col items-center bg-light'>
			<div className='px-8 py-7 flex w-screen justify-between'>
				<h2 className='text-5xl text-primary font-title '>2. STRENGTH</h2>
			</div>
			{children}
		</main>
	);
}
