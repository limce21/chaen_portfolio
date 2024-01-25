export default function Title() {
	return (
		<>
			<div className='flex flex-col items-center justify-center h-screen z-10'>
				<h1 className='text-9xl text-primary font-title'>Chaeeun Lim</h1>
				<h2 className='text-6xl text-primary font-title'>portfolio</h2>
			</div>
			<p className='absolute left-2 top-2 text-10xl text-light font-title drop-shadow-md'>LEARNING</p>
			<p className='absolute right-2 top-40 text-10xl text-light font-title drop-shadow-md'>DEVOTEE</p>
			<p className='absolute left-2 bottom-40 text-10xl text-light font-title drop-shadow-md'>FRONTEND</p>
			<p className='absolute right-2 bottom-2 text-10xl text-light font-title drop-shadow-md'>ENGINEER</p>
		</>
	);
}
