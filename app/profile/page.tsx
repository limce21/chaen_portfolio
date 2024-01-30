'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBirthdayCake, faHome, faMailBulk, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Profile() {
	const [isHover, setIsHover] = useState<boolean>(false);
	return (
		<div className='w-screen flex px-20 pt-4 justify-start gap-x-40'>
			<div
				className='w-110 h-150 relative'
				onMouseOver={() => {
					setIsHover(true);
				}}
				onMouseLeave={() => {
					setIsHover(false);
				}}
			>
				{isHover && (
					<div className='flex text-center justify-center items-center opacity-80 bg-secondary w-full h-full px-10 absolute z-10'>
						<p className='text-2xl leading-loose'>
							Frontend를 깊이 있게 다져나가는
							<br />
							주니어 개발자입니다.
							<br />
							<span className='font-bold'>“배우기 위해 살아간다"</span>를 모토로
							<br />
							끊임없는 배움을 추구하고 있습니다.
							<br />
							Frontend를 깊이 있게 다져가는
							<br />
							동시에, 다른 분야에서도 지식을
							<br />
							쌓아가며 개발에 대한 관심사를
							<br />
							넓혀나가고 있습니다.
							<br />
							새로운 지식들을 습득하며
							<br />
							스스로 <span className='font-bold'>“성장”</span>하는 것을 즐깁니다.
						</p>
					</div>
				)}
				<Image src='/images/me.jpg' width={440} height={600} className='absolute' alt='Picture of the me' />
			</div>
			<div className='text-dark pt-6'>
				<h3 className='text-5xl font-main'>About me</h3>
				<div className='flex p-10 gap-8'>
					<div className='flex flex-col gap-8 '>
						<FontAwesomeIcon icon={faUser} size='2xl' />
						<FontAwesomeIcon icon={faBirthdayCake} size='2xl' />
						<FontAwesomeIcon icon={faHome} size='2xl' />
						<FontAwesomeIcon icon={faMailBulk} size='2xl' />
						<FontAwesomeIcon icon={faGraduationCap} size='2xl' />
						<FontAwesomeIcon icon={faGithub} size='2xl' />
						<FontAwesomeIcon icon={faBook} size='2xl' />
					</div>
					<div className='flex flex-col gap-8'>
						<span className='text-2xl'>임 채 은</span>
						<span className='text-2xl'>2000.04.02</span>
						<span className='text-2xl'>서울특별시</span>
						<span className='text-2xl'>limce21@naver.com</span>
						<span className='text-2xl'>홍익대학교 컴퓨터공학과</span>{' '}
						<a href='https://github.com/limce21'>
							<span className='text-2xl'>github.com/limce21</span>
						</a>
						<a href='https://velog.io/@limce21/posts'>
							<span className='text-2xl'>velog.io/@limce21</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
