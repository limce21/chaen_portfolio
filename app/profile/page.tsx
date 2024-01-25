import Image from 'next/image';

export default function Profile() {
	return (
		<div className='w-screen flex px-20 pt-4 justify-start gap-x-40'>
			<Image src='/images/me.jpg' width={440} height={100} alt='Picture of the me' />
			<div className='text-dark'>
				<h3 className='text-5xl font-main'>About me</h3>
				<div className='flex flex-col gap-8 p-10'>
					<p className='text-2xl'>임 채 은</p>
					<p className='text-2xl'>2000.04.02</p>
					<p className='text-2xl'>서울특별시</p>
					<p className='text-2xl'>limce21@naver.com</p>
					<p className='text-2xl'>홍익대학교 컴퓨터공학과</p>
					<a href='https://github.com/limce21'>
						<p className='text-2xl'>github.com/limce21</p>
					</a>
					<a href='https://velog.io/@limce21/posts'>
						<p className='text-2xl'>velog.io/@limce21</p>
					</a>
				</div>
			</div>
		</div>
	);
}
