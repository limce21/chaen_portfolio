import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBirthdayCake, faHome, faMailBulk, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
	return (
		<div className='w-screen flex px-20 pt-4 justify-start gap-x-40'>
			<Image src='/images/me.jpg' width={440} height={100} alt='Picture of the me' />
			<div className='text-dark pt-6'>
				<h3 className='text-5xl font-main'>About me</h3>
				<div className='flex p-10 gap-8'>
					<div className='flex flex-col gap-8 '>
						<FontAwesomeIcon icon={faUser} size='2xl' />
						<FontAwesomeIcon icon={faBirthdayCake} size='2xl' />
						<FontAwesomeIcon icon={faHome} size='2xl' />
						<FontAwesomeIcon icon={faMailBulk} size='2xl' />
						<FontAwesomeIcon icon={faGraduationCap} size='2xl' />
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
