export default function Box({ skill }: { skill: string }) {
	return (
		<div className='shadow-box rounded-2xl px-4 py-1 inline-block'>
			<span className='drop-shadow-text text-2xl'>{skill}</span>
		</div>
	);
}
