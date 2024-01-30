import Box from '../components/box/Box';

export default function Strength() {
	const skills = ['React', 'React-Native', 'TypeScript', 'JavaScript', 'Recoil', 'Redux', 'Styled', 'Emotion'];
	return (
		<div className='w-screen flex px-20 pt-4'>
			<div className='flex justify-between w-full'>
				{skills.map((val: string) => {
					return <Box skill={val} />;
				})}
			</div>
		</div>
	);
}
